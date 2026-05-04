let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");
const totalBlock = document.getElementById("total");

function renderCart() {
    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
            <img src="${item.img}">
            <div>
                <h3>${item.name}</h3>
                <p>${item.price} ₸</p>
                <div class="controls">
                    <button onclick="changeQty(${index}, -1)">➖</button>
                    ${item.quantity}
                    <button onclick="changeQty(${index}, 1)">➕</button>
                    <button onclick="removeItem(${index})">❌</button>
                </div>
            </div>
        `;

        container.appendChild(div);

        total += item.price * item.quantity;
    });

    totalBlock.innerText = "Итого: " + total + " ₸";
}

function changeQty(index, delta) {
    cart[index].quantity += delta;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();
