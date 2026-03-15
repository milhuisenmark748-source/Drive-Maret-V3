/**
 * CARZ - Authentication & Session Logic (PHP/MySQL)
 */

// --- 1. SESSION & PROFILE DISPLAY ---
async function checkUserSession() {
    try {
        const response = await fetch('session.php');
        const data = await response.json();
        const authContainer = document.getElementById('auth-container');

        if (data.loggedIn && authContainer) {
            // Requirement 2: Display name and placeholder avatar on index.html
            authContainer.innerHTML = `
                <div class="user-profile-nav" style="display: flex; align-items: center; gap: 10px; padding: 5px 10px;">
                    <img src="img/avatar-placeholder.png" alt="User" style="width: 30px; border-radius: 50%;">
                    <span style="font-weight: 600; color: #1a1a1a;">Hi, ${data.name}</span>
                    <a href="logout.php" style="color: #ff4d4d; font-size: 12px; text-decoration: none;">Logout</a>
                </div>
            `;
        }
        return data.loggedIn;
    } catch (err) {
        console.error("Session fetch error:", err);
        return false;
    }
}

// --- 2. RESTRICTED CART ACCESS ---
// This function wraps your existing addToCartFromProductPage logic
async function secureAddToCart() {
    const isLoggedIn = await checkUserSession();

    // Requirement 1: If user not logged in, block cart and redirect
    if (!isLoggedIn) {
        alert("Security Alert: Please login to your account to secure a vehicle deposit.");
        window.location.href = "login.html";
        return;
    }

    // If logged in, execute the original function from your java.js
    if (typeof addToCartFromProductPage === "function") {
        addToCartFromProductPage();
    } else {
        console.error("Original addToCartFromProductPage not found in java.js");
    }
}

// --- 3. NEWSLETTER TO REGISTER REDIRECT ---
function handleNewsletterRedirect() {
    const newsletterForm = document.querySelector('#newsletter .form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]') || newsletterForm.querySelector('input');
            const email = emailInput.value;
            
            // Requirement 3: Navigate to register page with email in URL
            window.location.href = `signup.html?email=${encodeURIComponent(email)}`;
        });
    }
}

// --- 4. AUTO-FILL ON SIGNUP PAGE ---
function fillRegistrationEmail() {
    if (window.location.pathname.includes('signup.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const emailParam = urlParams.get('email');
        const regEmailInput = document.getElementById('reg-email');

        if (emailParam && regEmailInput) {
            regEmailInput.value = emailParam;
            // Focus password field for better UX
            const passInput = document.getElementById('reg-pass');
            if (passInput) passInput.focus();
        }
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    checkUserSession();
    handleNewsletterRedirect();
    fillRegistrationEmail();

    // Re-bind the Add to Cart button to our secure function
    const cartBtn = document.querySelector(".single-pro-details .normal");
    if (cartBtn) {
        cartBtn.setAttribute("onclick", "secureAddToCart()");
    }
});

// Export to global window object
window.secureAddToCart = secureAddToCart;


document.addEventListener("DOMContentLoaded", function() {
    // This background call checks if a session exists on the server
    fetch('check_auth.php')
        .then(response => response.json())
        .then(data => {
            if (data.loggedIn) {
                // Find the Login link in the navbar
                // Make sure your <li><a href="login.html">Login</a></li> 
                // has the id="auth-link" on every page!
                const authLink = document.getElementById('auth-link');
                
                if (authLink) {
                    // Replace "Login" with the circular avatar
                    authLink.innerHTML = `<img src="uploads/${data.avatar}" style="width: 35px; height: 35px; border-radius: 50%; border: 2px solid #ed1c24; vertical-align: middle; object-fit: cover;">`;
                    
                    // Change the link so it goes to the profile details page
                    authLink.setAttribute('href', 'profile.php');
                }
            }
        })
        .catch(err => console.log("Auth check failed: ", err));
});
