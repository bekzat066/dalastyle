let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, img) {
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ name, price, img, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let total = 0;
    cart.forEach(item => total += item.quantity);
    document.getElementById("cart-count").innerText = total;
}

function goToCart() {
    window.location.href = "cart.html";
}

updateCartCount();
