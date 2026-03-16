// navbar-handler.js

/**
 * GLOBAL PROTECTION FUNCTION
 * Wrap any sensitive action (like adding to cart) with this.
 */
function protectedAction(callback) {
    const user = getCurrentUser(); // Defined in auth.js

    if (user) {
        // User is logged in, allow the action
        callback();
    } else {
        // User is a guest, block and redirect
        alert("Authentication Required: Please login to add items to your cart or proceed to payment.");
        window.location.href = 'login.html';
    }
}

/**
 * GLOBAL LOGOUT FUNCTION
 */
function logout() {
    localStorage.removeItem('bifu_logged_in'); // STORAGE_KEYS.CURRENT_USER
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const user = getCurrentUser();
    const guestLinks = document.querySelectorAll('.guest-only');
    const userOnlyLi = document.querySelector('.user-only');
    const authLink = document.getElementById('auth-link');
    const topAuthLink = document.getElementById('top-auth-link');
    const cartLinks = document.querySelectorAll('.top-cart-link, #lg-bag a');

    if (user) {
        // 1. Hide Login/Signup links
        guestLinks.forEach(el => el.style.display = 'none');
        
        // 2. Update Main Sidebar Avatar & Logout
        if (userOnlyLi && authLink) {
            userOnlyLi.style.display = 'block';
            authLink.innerHTML = `
                <img src="${user.avatar}" style="width: 35px; height: 35px; border-radius: 50%; border: 2px solid #ed1c24; object-fit: cover; vertical-align: middle;">
                <span onclick="logout()" style="color: #ed1c24; cursor: pointer; margin-left: 10px; font-size: 11px; font-weight: bold;">LOGOUT</span>
            `;
            authLink.removeAttribute('href'); 
        }

        // 3. Update Top Bar (Login -> Logout)
        if (topAuthLink) {
            topAuthLink.innerHTML = `<i class="fas fa-sign-out-alt"></i> <span style="cursor:pointer">LOGOUT</span>`;
            topAuthLink.href = "javascript:logout()";
        }
    } else {
        // 4. GUEST MODE: Visually indicate restricted access
        cartLinks.forEach(link => {
            link.style.opacity = "0.5";
            link.title = "Login required to use cart";
        });
    }
});