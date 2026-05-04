let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");
const totalBlock = document.getElementById("total");

let total = 0;

cart.forEach(item => {
    const div = document.createElement("div");
    div.innerText = item.name + " - " + item.price + " ₸";
    container.appendChild(div);

    total += item.price;
});

totalBlock.innerText = "Итого: " + total + " ₸";
