let cart = [];

function addToCart(itemName, itemPrice) {
  const existingItem = cart.find(item => item.name === itemName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: itemName, price: itemPrice, quantity: 1 });
  }
  updateCart();
}

function increaseQuantity(itemName) {
  const item = cart.find(item => item.name === itemName);
  if (item) {
    item.quantity += 1;
    updateCart();
  }
}

function decreaseQuantity(itemName) {
  const item = cart.find(item => item.name === itemName);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  } else {
    cart = cart.filter(i => i.name !== itemName);
  }
  updateCart();
}

function removeFromCart(itemName) {
  cart = cart.filter(item => item.name !== itemName);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;

    const li = document.createElement('li');
    li.classList.add('cart-item');
    li.innerHTML = `
      <span>${item.name}</span>
      <div class="cart-item-controls">
        <button onclick="decreaseQuantity('${item.name}')">−</button>
        <span>${item.quantity}</span>
        <button onclick="increaseQuantity('${item.name}')">+</button>
        <button onclick="removeFromCart('${item.name}')">🗑️</button>
      </div>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}

// Toggle Cart Open/Close
const toggleCartBtn = document.getElementById('toggle-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartSidebar = document.getElementById('cart');

toggleCartBtn.addEventListener('click', () => {
  cartSidebar.classList.remove('closed');
});

closeCartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('closed');
});


// check out action

document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      alert('Proceeding to checkout...');
      // Redirect or process checkout logic here
      // window.location.href = '/checkout.html';
    }
  });

  
