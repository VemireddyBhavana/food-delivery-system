// ============================
// ADD TO CART
// ============================

let cart = [];

function addToCart(name, price){

    cart.push({

        name:name,
        price:price

    });

    alert(name + " added to cart!");

    localStorage.setItem("cart", JSON.stringify(cart));

}

// ===========================
// CART PAGE
// ===========================

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart(){

const container=document.getElementById("cartContainer");

if(!container) return;

container.innerHTML="";

let total=0;

cartItems.forEach((item,index)=>{

total+=item.price;

container.innerHTML+=`

<div class="cart-card">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<div class="cart-buttons">

<button onclick="increase(${index})">+</button>

<button onclick="decrease(${index})">-</button>

<button onclick="removeItem(${index})">

Remove

</button>

</div>

</div>

`;

});

document.getElementById("totalPrice").innerHTML=total;

localStorage.setItem("cart",JSON.stringify(cartItems));

}

function increase(index){

cartItems.push(cartItems[index]);

displayCart();

}

function decrease(index){

cartItems.splice(index,1);

displayCart();

}

function removeItem(index){

cartItems.splice(index,1);

displayCart();

}

displayCart();

// ============================
// PLACE ORDER
// ============================

function placeOrder(){

alert("🎉 Order Placed Successfully!");

window.location.href="orders.html";

}

// ============================
// ORDER TRACKING
// ============================

const statusText=document.getElementById("status");

if(statusText){

const stages=[

"Order Confirmed ✅",

"Preparing Your Food 👨‍🍳",

"Out For Delivery 🛵",

"Delivered Successfully 🎉"

];

let index=0;

setInterval(()=>{

index++;

if(index<stages.length){

statusText.innerHTML=stages[index];

}

},3000);

}