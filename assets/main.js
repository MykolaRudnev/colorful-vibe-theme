/**
 * MemeStyle Studio - Main JavaScript
 * Features: Animations, personalization preview, cart functionality, and crypto-themed interactions
 */

// Global theme configuration
window.MemeStyle = {
  config: {
    primaryColor: window.theme?.primaryColor || '#00F6FF',
    accentColor: window.theme?.accentColor || '#F5B6FF',
    currency: window.theme?.currency || 'USD',
    moneyFormat: window.theme?.moneyFormat || '${{amount}}',
    locale: window.theme?.locale || 'en'
  },
  animations: {
    duration: 300,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

// Utility functions
const Utils = {
  // Format money
  formatMoney: (amount, currency = MemeStyle.config.currency) => {
    return new Intl.NumberFormat(MemeStyle.config.locale, {
      style: 'currency',
      currency: currency
    }).format(amount / 100);
  },

  // Debounce function
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function
  throttle: (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Generate random crypto quote
  getRandomCryptoQuote: () => {
    const quotes = [
      "Buy the dip. Wear the drip.",
      "HODL strong, dress strong.",
      "To the moon and back, in style.",
      "Diamond hands need diamond threads.",
      "When life gives you FUD, make fashion.",
      "This is the way... to dress.",
      "WAGMI - We All Gonna Make It (in style)",
      "The future is decentralized, the drip is centralized.",
      "Not financial advice, but fashion advice.",
      "Keep calm and HODL on... with style."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  },

  // Generate random meme emoji
  getRandomMemeEmoji: () => {
    const emojis = ['🚀', '💎', '🌙', '🔥', '💯', '⚡', '🎯', '🎮', '🎨', '🎭'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
};

// Animation Controller
const Animations = {
  // Initialize scroll animations
  initScrollAnimations: () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  },

  // Parallax effect
  initParallax: () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    const updateParallax = Utils.throttle(() => {
      const scrollTop = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrollTop * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    }, 16);

    window.addEventListener('scroll', updateParallax);
  },

  // Glow effect for buttons
  initGlowEffects: () => {
    const glowElements = document.querySelectorAll('.glow-effect');
    
    glowElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.boxShadow = `0 0 20px ${MemeStyle.config.primaryColor}40`;
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.boxShadow = '';
      });
    });
  },

  // Floating elements animation
  initFloatingElements: () => {
    const floatingElements = document.querySelectorAll('.float-animation');
    
    floatingElements.forEach((element, index) => {
      const delay = index * 0.5;
      const duration = 3 + Math.random() * 2;
      
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = `${duration}s`;
      element.classList.add('animate-float');
    });
  }
};

// Cart functionality
const Cart = {
  // Add item to cart
  addItem: async (variantId, quantity = 1, properties = {}) => {
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: variantId,
          quantity: quantity,
          properties: properties
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }

      const data = await response.json();
      Cart.updateCartCount(data.item_count);
      Cart.showNotification('Product added to cart! 🚀', 'success');
      
      return data;
    } catch (error) {
      console.error('Error adding to cart:', error);
      Cart.showNotification('Failed to add product to cart', 'error');
      throw error;
    }
  },

  // Update cart count
  updateCartCount: (count) => {
    const cartCountElements = document.querySelectorAll('[data-cart-count]');
    cartCountElements.forEach(element => {
      element.textContent = count;
    });

    // Trigger custom event
    document.dispatchEvent(new CustomEvent('cart:updated', {
      detail: { count }
    }));
  },

  // Get cart data
  getCart: async () => {
    try {
      const response = await fetch('/cart.js');
      return await response.json();
    } catch (error) {
      console.error('Error fetching cart:', error);
      return null;
    }
  },

  // Show notification
  showNotification: (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full max-w-sm ${
      type === 'success' ? 'bg-green-500 text-white' : 
      type === 'error' ? 'bg-red-500 text-white' : 
      'bg-primary text-background'
    }`;
    
    notification.innerHTML = `
      <div class="flex items-center space-x-2">
        <span class="flex-shrink-0">
          ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
        </span>
        <span class="text-sm font-medium">${message}</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
      notification.classList.remove('translate-x-full');
    });
    
    // Remove after delay
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
};

// Product personalization
const Personalization = {
  // Initialize product customizer
  init: () => {
    const customizers = document.querySelectorAll('.product-customizer');
    
    customizers.forEach(customizer => {
      const textInput = customizer.querySelector('[data-custom-text]');
      const colorPicker = customizer.querySelector('[data-custom-color]');
      const preview = customizer.querySelector('[data-preview]');
      
      if (textInput && preview) {
        textInput.addEventListener('input', (e) => {
          Personalization.updateTextPreview(preview, e.target.value);
          Personalization.saveToLocalStorage('customText', e.target.value);
        });
      }
      
      if (colorPicker && preview) {
        colorPicker.addEventListener('change', (e) => {
          Personalization.updateColorPreview(preview, e.target.value);
          Personalization.saveToLocalStorage('customColor', e.target.value);
        });
      }
      
      // Load saved preferences
      Personalization.loadFromLocalStorage(customizer);
    });
  },

  // Update text preview
  updateTextPreview: (preview, text) => {
    const textElement = preview.querySelector('.custom-text');
    if (textElement) {
      textElement.textContent = text;
    }
  },

  // Update color preview
  updateColorPreview: (preview, color) => {
    const colorElements = preview.querySelectorAll('.custom-color');
    colorElements.forEach(element => {
      element.style.color = color;
    });
  },

  // Save to localStorage
  saveToLocalStorage: (key, value) => {
    try {
      localStorage.setItem(`memestyle_${key}`, value);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  // Load from localStorage
  loadFromLocalStorage: (customizer) => {
    try {
      const customText = localStorage.getItem('memestyle_customText');
      const customColor = localStorage.getItem('memestyle_customColor');
      
      if (customText) {
        const textInput = customizer.querySelector('[data-custom-text]');
        if (textInput) {
          textInput.value = customText;
          Personalization.updateTextPreview(customizer.querySelector('[data-preview]'), customText);
        }
      }
      
      if (customColor) {
        const colorPicker = customizer.querySelector('[data-custom-color]');
        if (colorPicker) {
          colorPicker.value = customColor;
          Personalization.updateColorPreview(customizer.querySelector('[data-preview]'), customColor);
        }
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    }
  }
};

// Newsletter functionality
const Newsletter = {
  // Initialize newsletter forms
  init: () => {
    const forms = document.querySelectorAll('.newsletter-form');
    
    forms.forEach(form => {
      form.addEventListener('submit', Newsletter.handleSubmit);
    });
  },

  // Handle form submission
  handleSubmit: async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    const button = form.querySelector('button[type="submit"]');
    
    if (!email) {
      Cart.showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    // Show loading state
    const originalText = button.textContent;
    button.textContent = 'Subscribing...';
    button.disabled = true;
    
    try {
      // Simulate API call (replace with actual newsletter API)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      Cart.showNotification('Thanks for subscribing! Welcome to the crypto fashion revolution! 🚀', 'success');
      form.reset();
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      Cart.showNotification('Failed to subscribe. Please try again.', 'error');
    } finally {
      button.textContent = originalText;
      button.disabled = false;
    }
  }
};

// Crypto price ticker (mock data)
const CryptoPriceTicker = {
  // Initialize price ticker
  init: () => {
    const ticker = document.querySelector('.crypto-price-ticker');
    if (!ticker) return;
    
    this.startTicker(ticker);
  },

  // Start price ticker animation
  startTicker: (ticker) => {
    const prices = [
      { symbol: 'BTC', price: '$42,350', change: '+2.4%' },
      { symbol: 'ETH', price: '$2,850', change: '+1.8%' },
      { symbol: 'DOGE', price: '$0.082', change: '+5.2%' },
      { symbol: 'SOL', price: '$98.50', change: '+3.1%' },
      { symbol: 'ADA', price: '$0.45', change: '-0.8%' }
    ];
    
    let currentIndex = 0;
    
    const updateTicker = () => {
      const price = prices[currentIndex];
      ticker.innerHTML = `
        <span class="font-bold text-primary">${price.symbol}</span>
        <span class="text-text-primary">${price.price}</span>
        <span class="text-green-500">${price.change}</span>
      `;
      
      currentIndex = (currentIndex + 1) % prices.length;
    };
    
    updateTicker();
    setInterval(updateTicker, 3000);
  }
};

// Lazy loading for images
const LazyLoading = {
  // Initialize lazy loading
  init: () => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy-load');
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
};

// Theme initialization
const Theme = {
  // Initialize theme
  init: () => {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', Theme.initComponents);
    } else {
      Theme.initComponents();
    }
  },

  // Initialize all components
  initComponents: () => {
    console.log('🚀 MemeStyle Studio theme initializing...');
    
    // Initialize all components
    Animations.initScrollAnimations();
    Animations.initParallax();
    Animations.initGlowEffects();
    Animations.initFloatingElements();
    Personalization.init();
    Newsletter.init();
    CryptoPriceTicker.init();
    LazyLoading.init();
    
    // Initialize cart functionality
    Theme.initCartHandlers();
    
    // Initialize mobile menu
    Theme.initMobileMenu();
    
    // Initialize search
    Theme.initSearch();
    
    console.log('✅ MemeStyle Studio theme initialized successfully!');
  },

  // Initialize cart handlers
  initCartHandlers: () => {
    // Handle add to cart buttons
    document.addEventListener('click', async (e) => {
      if (e.target.closest('[data-add-to-cart]')) {
        e.preventDefault();
        const button = e.target.closest('[data-add-to-cart]');
        const variantId = button.dataset.variantId;
        const quantity = parseInt(button.dataset.quantity) || 1;
        
        if (variantId) {
          try {
            await Cart.addItem(variantId, quantity);
          } catch (error) {
            console.error('Add to cart error:', error);
          }
        }
      }
    });
  },

  // Initialize mobile menu
  initMobileMenu: () => {
    const menuToggle = document.querySelector('[data-mobile-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuToggle.classList.toggle('active');
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          mobileMenu.classList.add('hidden');
          menuToggle.classList.remove('active');
        }
      });
    }
  },

  // Initialize search
  initSearch: () => {
    const searchInput = document.querySelector('[data-search-input]');
    const searchResults = document.querySelector('[data-search-results]');
    
    if (searchInput && searchResults) {
      const searchHandler = Utils.debounce(async (query) => {
        if (query.length < 2) {
          searchResults.innerHTML = '';
          searchResults.classList.add('hidden');
          return;
        }
        
        try {
          // Simulate search API call
          const results = await Theme.performSearch(query);
          Theme.displaySearchResults(results, searchResults);
        } catch (error) {
          console.error('Search error:', error);
        }
      }, 300);
      
      searchInput.addEventListener('input', (e) => {
        searchHandler(e.target.value);
      });
    }
  },

  // Perform search (mock implementation)
  performSearch: async (query) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Mock search results
    return [
      { title: 'Bitcoin Hoodie', price: '$59.99', url: '/products/bitcoin-hoodie' },
      { title: 'Ethereum T-Shirt', price: '$29.99', url: '/products/ethereum-tshirt' },
      { title: 'Dogecoin Cap', price: '$24.99', url: '/products/dogecoin-cap' }
    ];
  },

  // Display search results
  displaySearchResults: (results, container) => {
    if (results.length === 0) {
      container.innerHTML = '<p class="p-4 text-text-secondary">No results found</p>';
    } else {
      container.innerHTML = results.map(result => `
        <a href="${result.url}" class="block p-4 hover:bg-background-secondary transition-colors">
          <div class="font-semibold text-text-primary">${result.title}</div>
          <div class="text-sm text-primary">${result.price}</div>
        </a>
      `).join('');
    }
    
    container.classList.remove('hidden');
  }
};

// Initialize theme when script loads
Theme.init();

// Export for global access
window.MemeStyle = {
  ...window.MemeStyle,
  Utils,
  Cart,
  Personalization,
  Newsletter,
  CryptoPriceTicker,
  LazyLoading,
  Theme
};
