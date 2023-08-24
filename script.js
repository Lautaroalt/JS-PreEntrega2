

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartList = document.querySelector(".cart-list");
    const totalPrice = document.querySelector(".total-price");

    let cartItems = [];
    let total = 0;

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const products = [
                { name: "Cabernet", price: 1950 },
                { name: "Malbec", price: 1520 },
                { name: "Sauvignon", price: 1100 },
                { name: "Tinto", price: 1150 },
               
            ];
            
            const selectedProduct = products[index];
            
            cartItems.push(selectedProduct);
            total += selectedProduct.price;
            updateCart();
        });
    });

    //Con esta funcion se elima el elemento del carrito si es necesario
    function removeItem(index) {
        const removedItem = cartItems.splice(index, 1)[0];
        total -= removedItem.price;
        updateCart();
    }

    function updateCart() {
        cartList.innerHTML = "";
        cartItems.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            
            const removeButton = document.createElement("button");
            removeButton.classList.add("btn", "btn-danger", "btn-sm", "float-end");
            removeButton.textContent = "Eliminar";
            removeButton.addEventListener("click", () => removeItem(index));
            
            listItem.appendChild(removeButton);
            
            cartList.appendChild(listItem);
        });
        totalPrice.textContent = `$${total.toFixed(2)}`;
    }
});


