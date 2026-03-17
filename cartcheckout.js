// --- NEW UTILITY: Convert "$3,000,000" to 3000000 ---
const parsePrice = (val) => {
    if (!val) return 0;
    if (typeof val === 'number') return val;
    return parseFloat(val.replace(/[$,\s]/g, '')) || 0;
};

// --- FUNCTION 1: Add to Cart (On Shop/Product Page) ---
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('user_cart')) || [];
    
    cart.push({
        vehicleName: name,
        fullValue: parsePrice(price),
        img: image,
        qty: 1
    });

    localStorage.setItem('user_cart', JSON.stringify(cart));
    updateCartIcon();
    alert("Vehicle added to your garage!");
}

// --- FUNCTION 2: Proceed to Payment (On Cart Page) ---
function proceedToPayment() {
    const cart = JSON.parse(localStorage.getItem('user_cart')) || [];
    if (cart.length === 0) return alert("Your garage is empty!");

    let finalMarketTotal = 0;
    cart.forEach(item => {
        finalMarketTotal += (item.fullValue * (item.qty || 1));
    });

    // This is the "Box" we send to the Payment Gateway
    const gatewayData = {
        summaryName: cart.length === 1 ? cart[0].vehicleName : "Multiple Vehicles",
        finalMarketPrice: finalMarketTotal,
        totalUnits: cart.length
    };

    localStorage.setItem('active_checkout', JSON.stringify(gatewayData));
    window.location.href = "paymentgateway.html";
}

// --- FUNCTION 3: Update Navbar Count ---
function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem('user_cart')) || [];
    const count = cart.length;
    document.querySelectorAll('#cart-count').forEach(el => el.innerText = count);
}
document.addEventListener('DOMContentLoaded', updateCartIcon);