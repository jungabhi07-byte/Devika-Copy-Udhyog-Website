// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (mobileMenuBtn) {
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        }
    });
});

// Product Data
const products = [
    {
        name: 'Premium Notebooks',
        description: 'High-quality notebooks perfect for students and professionals. Available in various sizes and page counts.',
        icon: 'fas fa-book',
        image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=300&fit=crop',
        category: 'Notebooks'
    },
    {
        name: 'A4 Notebooks',
        description: 'Standard A4 size notebooks ideal for office use and academic purposes. Durable binding and premium paper.',
        icon: 'fas fa-copy',
        image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop',
        category: 'Notebooks'
    },
    {
        name: 'Jista Paper',
        description: 'High-quality Jista paper for various writing and printing needs. Smooth finish and excellent durability.',
        icon: 'fas fa-file-alt',
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
        category: 'Paper Products'
    },
    {
        name: 'Exam Paper',
        description: 'Specialized exam papers designed for examination purposes. High-quality and reliable.',
        icon: 'fas fa-scroll',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
        category: 'Exam Materials'
    },
    {
        name: 'Rough Copies',
        description: 'Economical rough copies for daily practice and rough work. Great for students.',
        icon: 'fas fa-sticky-note',
        image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=300&fit=crop',
        category: 'Practice Books'
    },
    {
        name: 'Drawing Copies',
        description: 'Specialized drawing copies with smooth surface perfect for art and drawing activities.',
        icon: 'fas fa-paint-brush',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop',
        category: 'Art Supplies'
    }
];

// Load Products
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-icon">
                        <i class="${product.icon}"></i>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="product-category">${product.category}</span>
                </div>
            </div>
        `).join('');
    }
}

// Load About Image (can be replaced with actual business photos)
function loadAboutImage() {
    const aboutImageDiv = document.getElementById('aboutImage');
    if (aboutImageDiv) {
        // You can replace this with actual photos of your manufacturing unit
        aboutImageDiv.innerHTML = `
            <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&h=400&fit=crop" 
                 alt="Devika Copy Udhyog Manufacturing" 
                 class="about-img">
            <div class="image-overlay">
                <p>Quality Manufacturing in Gaighat</p>
            </div>
        `;
    }
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        // Create WhatsApp message
        const whatsappMessage = `Hello Devika Copy Udhyog,%0A%0A*New Message from Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}%0A%0AThank you!`;
        
        // Open WhatsApp (you can change the number to your business number)
        const whatsappUrl = `https://wa.me/9810391357?text=${whatsappMessage}`;
        
        // Show success message
        alert('Thank you for your message! You will be redirected to WhatsApp to complete your inquiry.');
        
        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        this.reset();
    });
}

// Add scroll animation for sections
function checkScroll() {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight * 0.8;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

// Add click-to-call functionality for phone numbers
document.querySelectorAll('a[href^="tel:"]').forEach(phoneLink => {
    phoneLink.addEventListener('click', function(e) {
        // Optional: Add analytics tracking here
        console.log(`Phone number clicked: ${this.getAttribute('href')}`);
    });
});

// Add floating action button for quick contact (mobile)
function addFloatingButtons() {
    const floatingButtons = document.createElement('div');
    floatingButtons.className = 'floating-buttons';
    floatingButtons.innerHTML = `
        <a href="tel:9810391357" class="float-btn call-btn" aria-label="Call Us">
            <i class="fas fa-phone-alt"></i>
        </a>
        <a href="https://wa.me/9810391357" class="float-btn whatsapp-btn" aria-label="WhatsApp Us" target="_blank">
            <i class="fab fa-whatsapp"></i>
        </a>
    `;
    document.body.appendChild(floatingButtons);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadAboutImage();
    addFloatingButtons();
    checkScroll();
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', checkScroll);
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add CSS for floating buttons dynamically (since they are added via JS)
const style = document.createElement('style');
style.textContent = `
    .floating-buttons {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 1000;
    }
    
    .float-btn {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        transition: transform 0.3s ease;
        animation: pulse 2s infinite;
    }
    
    .float-btn:hover {
        transform: scale(1.1);
    }
    
    .call-btn {
        background-color: #25D366;
    }
    
    .whatsapp-btn {
        background-color: #075E54;
    }
    
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
        }
    }
    
    @media (max-width: 768px) {
        .float-btn {
            width: 50px;
            height: 50px;
        }
    }
`;
document.head.appendChild(style);
