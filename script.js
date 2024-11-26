
// Variables to store cart items and total price
let cart = [];
let totalPrice = 0;

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');

    // Clear the cart display
    cartItems.innerHTML = '';

    // Populate cart display
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price}`;
        
        // Add a remove button for each item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.marginLeft = '10px';
        removeButton.onclick = () => removeItem(index);

        listItem.appendChild(removeButton);
        cartItems.appendChild(listItem);
    });

    // Update total price display
    totalPriceDisplay.textContent = `Total: ₹${totalPrice}`;
}

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

// Function to remove an item from the cart
function removeItem(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// Event listener for Add to Cart buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseInt(productElement.getAttribute('data-price'));

        addToCart(productName, productPrice);
        alert(`${productName} added to cart!`);
    });
});

// Checkout functionality
const modal = document.getElementById('checkout-modal');
const closeModal = document.querySelector('.close-modal');
const checkoutForm = document.getElementById('checkout-form');

// Open checkout modal
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        document.getElementById('checkout-total').textContent = `Total Amount: ₹${totalPrice}`;
        modal.style.display = 'flex';
    }
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Submit checkout form
checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    
});



