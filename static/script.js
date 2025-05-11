console.log("script.js loaded!");

document.addEventListener('DOMContentLoaded', function () {
    const checkoutForm = document.getElementById("checkoutForm");

    checkoutForm.addEventListener('sumbit', function (e) {
        e.preventDefault();

        const formData = {
            fullName: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            street: document.getElementById("street").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            pin: document.getElementById("pin").value
        };

        document.getElementById('checkoutForm').addEventListener('submit', function (e) {
            e.preventDefault();
        
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                streetAddress: document.getElementById('streetAddress').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                pinCode: document.getElementById('pinCode').value
            };
        
            document.getElementById('checkoutForm').addEventListener('submit', function (e) {
                e.preventDefault();
            
                const formData = {
                    fullName: document.getElementById('fullName').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    streetAddress: document.getElementById('streetAddress').value,
                    city: document.getElementById('city').value,
                    state: document.getElementById('state').value,
                    pinCode: document.getElementById('pinCode').value
                };
            
                document.getElementById("checkoutForm").addEventListener("submit", function (e) {
                    e.preventDefault();  // prevent default form submit
                
                    const form = e.target;
                    const formData = new FormData(form);
                
                    fetch('http://127.0.0.1:5000/submit-form', {
                        method: 'POST',
                        body: formData  // No need for headers!
                    })
                    .then(response => response.json())
                    .then(data => {
                        alert("Order placed successfully!");
                        console.log(data);
                    })
                    .catch(error => {
                        console.error("Error:", error);
                        alert("Something went wrong.");
                    });
                });
                
            });
            
        });
        
          
          
    });
});

    // Initialize product data
    const products = [
        {
            id: 1,
            title: 'Banarasi Silk Saree',
            category: 'women',
            type: 'saree',
            price: 5999,
            originalPrice: 7999,
            discount: '25%',
            image: 'https://images.pexels.com/photos/5083529/pexels-photo-5083529.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 4.8,
            ratingCount: 256,
            badge: 'Trending',
            isNew: true
        },
        {
            id: 2,
            title: 'Designer Anarkali Suit',
            category: 'women',
            type: 'salwar',
            price: 3999,
            originalPrice: 5999,
            discount: '33%',
            image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 4.7,
            ratingCount: 189,
            badge: 'Bestseller',
            isNew: false
        },
        {
            id: 3,
            title: 'Wedding Lehenga Choli',
            category: 'women',
            type: 'lehenga',
            price: 12999,
            originalPrice: 15999,
            discount: '19%',
            image: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 4.9,
            ratingCount: 327,
            badge: 'Premium',
            isNew: true
        },
        {
            id: 4,
            title: 'Embroidered Kurti',
            category: 'women',
            type: 'kurti',
            price: 1499,
            originalPrice: 1999,
            discount: '25%',
            image: 'https://images.pexels.com/photos/3823669/pexels-photo-3823669.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 4.6,
            ratingCount: 156,
            badge: 'Sale',
            isNew: false
        },
        {
            id: 5,
            title: 'Silk Kurta Pajama Set',
            category: 'men',
            type: 'kurta',
            price: 2499,
            originalPrice: 3499,
            discount: '29%',
            image: 'https://images.pexels.com/photos/2531359/pexels-photo-2531359.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 4.5,
            ratingCount: 178,
            badge: null,
            isNew: false
        },
        {
            id: 6,
            title: 'Wedding Sherwani',
            category: 'men',
            type: 'sherwani',
            price: 8999,
            originalPrice: 10999,
            discount: '18%',
            image: 'https://images.pexels.com/photos/2519574/pexels-photo-2519574.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 4.8,
            ratingCount: 213,
            badge: 'Limited',
            isNew: true
        },
        {
            id: 7,
            title: 'Velvet Nehru Jacket',
            category: 'men',
            type: 'nehru',
            price: 3499,
            originalPrice: 4499,
            discount: '22%',
            image: 'https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 4.7,
            ratingCount: 145,
            badge: null,
            isNew: false
        },
        {
            id: 8,
            title: 'Traditional Dhoti Set',
            category: 'men',
            type: 'dhoti',
            price: 1999,
            originalPrice: 2499,
            discount: '20%',
            image: 'https://images.pexels.com/photos/2531538/pexels-photo-2531538.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 4.4,
            ratingCount: 87,
            badge: null,
            isNew: false
        },
        {
            id: 9,
            title: 'Girls Lehenga Choli',
            category: 'kids',
            type: 'girls',
            price: 1299,
            originalPrice: 1999,
            discount: '35%',
            image: 'https://images.pexels.com/photos/15143465/pexels-photo-15143465/free-photo-of-girl-in-traditional-dress.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 4.8,
            ratingCount: 124,
            badge: 'New',
            isNew: true
        },
        {
            id: 10,
            title: 'Boys Kurta Pajama Set',
            category: 'kids',
            type: 'boys',
            price: 999,
            originalPrice: 1499,
            discount: '33%',
            image: 'https://images.pexels.com/photos/5835767/pexels-photo-5835767.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 4.6,
            ratingCount: 98,
            badge: 'Sale',
            isNew: false
        },
        {
            id: 11,
            title: 'Kanchipuram Silk Saree',
            category: 'women',
            type: 'saree',
            price: 8999,
            originalPrice: 11999,
            discount: '25%',
            image: 'https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 4.9,
            ratingCount: 187,
            badge: 'Premium',
            isNew: false
        },
        {
            id: 12,
            title: 'Handcrafted Jhumka Earrings',
            category: 'accessories',
            type: 'jewelry',
            price: 799,
            originalPrice: 1299,
            discount: '38%',
            image: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600',
            rating: 4.7,
            ratingCount: 156,
            badge: 'Bestseller',
            isNew: false
        }
    ];

    // Cart Functionality
    let cart = [];
    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.querySelector('.cart-items');
    const subtotalElement = document.querySelector('.subtotal');
    const totalPriceElement = document.querySelector('.total-price');
    const checkoutBtn = document.querySelector('.checkout');
    const continueShoppingBtn = document.querySelector('.continue-shopping');
    const closeCartBtn = document.querySelector('#cart-modal .close');

    // Checkout Functionality
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckoutBtn = document.querySelector('#checkout-modal .close');
    const checkoutSubtotal = document.querySelector('.checkout-subtotal');
    const checkoutTotal = document.querySelector('.checkout-total');
    const checkoutForm = document.getElementById('checkout-form');
    
    // Success Modal
    const successModal = document.getElementById('success-modal');
    const continueShoppingBtnSuccess = document.querySelector('.continue-shopping-btn');
    const orderNumberElement = document.getElementById('order-number');

    // Sidebar Functionality
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    const sidebar = document.querySelector('.sidebar');
    const closeSidebar = document.querySelector('.close-sidebar');
    const sidebarCategories = document.querySelectorAll('.sidebar-category');

    // Product Listing
    const productsContainer = document.getElementById('products-container');
    const sortSelect = document.getElementById('sort');
    const priceRangeSelect = document.getElementById('price-range');
    const loadMoreBtn = document.getElementById('load-more-btn');
    let currentPage = 1;
    const productsPerPage = 8;

    // Navigation Functionality
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        // Toggle hamburger to X
        this.classList.toggle('active');
        
        if (this.classList.contains('active')) {
            this.children[0].style.transform = 'translateY(8px) rotate(45deg)';
            this.children[1].style.opacity = '0';
            this.children[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            this.children[0].style.transform = 'none';
            this.children[1].style.opacity = '1';
            this.children[2].style.transform = 'none';
        }
    });

    // Mobile dropdown toggle
    if (window.innerWidth < 768) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            link.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        });
    }

    // Sidebar Toggle
    document.querySelector('.nav-toggle').addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    closeSidebar.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Sidebar Category Toggles
    sidebarCategories.forEach(category => {
        category.addEventListener('click', function() {
            const subcategory = this.nextElementSibling;
            subcategory.classList.toggle('active');
            this.classList.toggle('active');
        });
    });

    // Load Products Function
    function loadProducts(page = 1, filters = {}) {
        let filteredProducts = [...products];
        
        // Apply category/type filter if exists
        if (filters.category) {
            filteredProducts = filteredProducts.filter(product => product.category === filters.category);
        }
        
        if (filters.type) {
            filteredProducts = filteredProducts.filter(product => product.type === filters.type);
        }
        
        // Apply price range filter
        if (filters.priceRange) {
            const [min, max] = filters.priceRange.split('-');
            if (min && max) {
                filteredProducts = filteredProducts.filter(product => 
                    product.price >= parseInt(min) && product.price <= parseInt(max)
                );
            } else if (min) {
                filteredProducts = filteredProducts.filter(product => product.price >= parseInt(min));
            }
        }
        
        // Apply sorting
        if (filters.sort) {
            switch (filters.sort) {
                case 'price-asc':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'newest':
                    filteredProducts.sort((a, b) => b.isNew - a.isNew);
                    break;
                default: // popularity (default)
                    filteredProducts.sort((a, b) => b.ratingCount - a.ratingCount);
            }
        }
        
        // Calculate pagination
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        const paginatedProducts = filteredProducts.slice(start, end);
        
        // Clear container if it's the first page
        if (page === 1) {
            productsContainer.innerHTML = '';
        }
        
        // Render products
        paginatedProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="wishlist-icon">❤</div>
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-category">${product.type.charAt(0).toUpperCase() + product.type.slice(1)}</p>
                    <div class="product-price">
                        <span class="current-price">₹${product.price.toLocaleString()}</span>
                        <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                        <span class="discount">${product.discount} OFF</span>
                    </div>
                    <div class="product-rating">
                        <span class="stars">${stars}</span>
                        <span class="rating-count">(${product.ratingCount})</span>
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                        <button class="quick-view">👁</button>
                    </div>
                </div>
            `;
            
            productsContainer.appendChild(productCard);
        });
        
        // Show/hide load more button
        if (end >= filteredProducts.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
        
        // Add event listeners to newly created "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });
    }

    // Initial product load
    loadProducts();

    // Load More Button
    loadMoreBtn.addEventListener('click', function() {
        currentPage++;
        const filters = {
            sort: sortSelect.value,
            priceRange: priceRangeSelect.value === 'all' ? null : priceRangeSelect.value
        };
        loadProducts(currentPage, filters);
    });

    // Sort and Filter Change Events
    sortSelect.addEventListener('change', function() {
        currentPage = 1;
        const filters = {
            sort: this.value,
            priceRange: priceRangeSelect.value === 'all' ? null : priceRangeSelect.value
        };
        loadProducts(1, filters);
    });

    priceRangeSelect.addEventListener('change', function() {
        currentPage = 1;
        const filters = {
            sort: sortSelect.value,
            priceRange: this.value === 'all' ? null : this.value
        };
        loadProducts(1, filters);
    });

    // Category Filter Event Listeners
    document.querySelectorAll('a[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const category = this.getAttribute('data-category');
            const type = this.getAttribute('data-type');
            
            currentPage = 1;
            const filters = {
                category: category,
                type: type,
                sort: sortSelect.value,
                priceRange: priceRangeSelect.value === 'all' ? null : priceRangeSelect.value
            };
            
            loadProducts(1, filters);
            
            // Update heading
            const heading = document.querySelector('.product-heading');
            heading.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Collection`;
            
            // Close sidebar if it's open
            sidebar.classList.remove('active');
            
            // Scroll to products section
            document.querySelector('.products-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Featured Carousel Navigation
    const carousel = document.querySelector('.product-carousel');
    const prevBtn = document.querySelector('.carousel-nav .prev');
    const nextBtn = document.querySelector('.carousel-nav .next');

    prevBtn.addEventListener('click', function() {
        carousel.scrollBy({ left: -340, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', function() {
        carousel.scrollBy({ left: 340, behavior: 'smooth' });
    });

    // Add to Cart Function
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        
        // Check if product already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        // Update cart count
        updateCartCount();
        
        // Show toast notification
        showToast(`${product.title} added to cart!`);
    }

    // Update Cart Count
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
    }

    // Show Toast Notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        // Style the toast
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.backgroundColor = '#4CAF50';
        toast.style.color = 'white';
        toast.style.padding = '12px 20px';
        toast.style.borderRadius = '4px';
        toast.style.zIndex = '1000';
        toast.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        toast.style.animation = 'fadeInUp 0.3s ease, fadeOut 0.3s ease 2.7s forwards';
        
        document.body.appendChild(toast);
        
        // Add animation keyframes
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        // Remove toast after 3 seconds
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    }

    // Render Cart Items
    function renderCart() {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
            subtotalElement.textContent = '₹0';
            totalPriceElement.textContent = '₹0';
            return;
        }
        
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemSubtotal = item.price * item.quantity;
            subtotal += itemSubtotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${item.title}</h3>
                    <p class="cart-item-variant">${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
                    <p class="cart-item-price">₹${item.price.toLocaleString()} x ${item.quantity}</p>
                    <div class="cart-item-actions">
                        <div class="quantity-selector">
                            <button class="decrease" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="increase" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-item" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        const shipping = cart.length > 0 ? 99 : 0;
        const total = subtotal + shipping;
        
        subtotalElement.textContent = `₹${subtotal.toLocaleString()}`;
        totalPriceElement.textContent = `₹${total.toLocaleString()}`;
        
        // Add event listeners for quantity buttons
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                updateCartItemQuantity(id, -1);
            });
        });
        
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                updateCartItemQuantity(id, 1);
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                removeFromCart(id);
            });
        });
    }

    // Update Cart Item Quantity
    function updateCartItemQuantity(id, change) {
        const item = cart.find(item => item.id === id);
        
        if (item) {
            item.quantity += change;
            
            if (item.quantity <= 0) {
                removeFromCart(id);
            } else {
                updateCartCount();
                renderCart();
            }
        }
    }

    // Remove Item From Cart
    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        updateCartCount();
        renderCart();
    }

    // Cart Modal Events
    cartIcon.addEventListener('click', function() {
        renderCart();
        cartModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeCartBtn.addEventListener('click', function() {
        cartModal.style.display = 'none';
        document.body.style.overflow = '';
    });

    continueShoppingBtn.addEventListener('click', function() {
        cartModal.style.display = 'none';
        document.body.style.overflow = '';
    });

    // Checkout Process
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) return;
        
        cartModal.style.display = 'none';
        checkoutModal.style.display = 'block';
        
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const shipping = 99;
        const total = subtotal + shipping;
        
        checkoutSubtotal.textContent = `₹${subtotal.toLocaleString()}`;
        checkoutTotal.textContent = `₹${total.toLocaleString()}`;
    });

    closeCheckoutBtn.addEventListener('click', function() {
        checkoutModal.style.display = 'none';
        document.body.style.overflow = '';
    });

    // Payment Method Toggles
    const paymentMethods = document.querySelectorAll('input[name="payment"]');
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            document.querySelectorAll('.payment-details').forEach(details => {
                details.classList.remove('active');
            });
            
            if (this.checked) {
                const detailsClass = this.value + '-details';
                const details = document.querySelector('.' + detailsClass);
                if (details) {
                    details.classList.add('active');
                }
            }
        });
    });

    // Form Submission
        checkoutForm.addEventListener('placeOrder', function(e) {
            e.preventDefault();
        
        // Generate random order number
        const orderNum = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
        orderNumberElement.textContent = orderNum;
        
        // Display success modal
        checkoutModal.style.display = 'none';
        successModal.style.display = 'block';
        
        // Clear cart
        cart = [];
        updateCartCount();
    });

    continueShoppingBtnSuccess.addEventListener('click', function() {
        successModal.style.display = 'none';
        document.body.style.overflow = '';
    });

    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
            document.body.style.overflow = '';
        } else if (e.target === checkoutModal) {
            checkoutModal.style.display = 'none';
            document.body.style.overflow = '';
        } else if (e.target === successModal) {
            successModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('placeOrder', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (email) {
            showToast('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        }
    });

    // Shop Now Button Event
    document.querySelector('.shop-now').addEventListener('click', function() {
        document.querySelector('.products-section').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // View Collection Buttons
    document.querySelectorAll('.view-collection').forEach((button, index) => {
        button.addEventListener('click', function() {
            let category, type;
            
            switch (index) {
                case 0: // Elegant Sarees
                    category = 'women';
                    type = 'saree';
                    break;
                case 1: // Men's Ethnic Wear
                    category = 'men';
                    type = 'kurta';
                    break;
                case 2: // Kids Festive Collection
                    category = 'kids';
                    type = 'girls';
                    break;
            }
            
            currentPage = 1;
            const filters = {
                category: category,
                type: type
            };
            
            loadProducts(1, filters);
            
            // Update heading
            const heading = document.querySelector('.product-heading');
            heading.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Collection`;
            
            // Scroll to products section
            document.querySelector('.products-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add window resize listener for responsive behavior
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            nav.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.children[0].style.transform = 'none';
            navToggle.children[1].style.opacity = '1';
            navToggle.children[2].style.transform = 'none';
        }
    });
document.getElementById("form").addEventListener("placeOrder", function (e) {
    e.preventDefault();

    const formData = {
        full_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        street_address: document.getElementById("Street").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        pin_code: document.getElementById("pin").value,
    };

    fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),  // make sure this matches your declared object
      })
      
    .then((res) => res.json())
    .then((data) => {
        alert(data.message);
        document.getElementById("form").reset();
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Submission failed.");
    });
});
