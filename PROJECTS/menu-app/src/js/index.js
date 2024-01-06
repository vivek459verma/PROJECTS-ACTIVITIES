let menu = [];
let allAddToCartButtons = [];
let cart = [];
let allCartDeleteButtons = [];
updateCartCounter();

function updateCartCounter() {
  document.getElementById("cartButton").innerHTML = "&#x1F6D2;" + cart.length;
}

if (import.meta.env.DEV) {
  import("../api/browser").then(({ worker }) =>
    worker.start().then(() =>
      fetch("/dishes")
        .then((res) => res.json())
        .then((res) => (menu = res))
    )
  );
}

let allDishes = document.getElementById("allDishes");
let content = "";
let cartContent = "";

displayAll(menu);
displayCartDishes();

function displayAll(dishes) {
  content = "";
  dishes.forEach((dish) => {
    let individualDIsh = `<div class="dish">
<img src=${dish.img} />
<div class="dishOutter">
  <div class="dishInner">
    <h3 class="dishName">${dish.title}</h3>
    <h3 class="dishPrice">$${dish.price}</h3>
  </div>
  <p>
    ${dish.description}
  </p>
  <button id=${dish.id} class='atcButton'>Add to cart</button>
</div>
</div>`;

    content += individualDIsh;
  });

  allDishes.innerHTML = content;
  getCartButtons();
}

// Filter Logic here

let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    filterItems(e.target.innerText);
  })
);
function filterItems(category) {
  allDishes.innerHTML += "";
  if (category == "All") {
    displayAll(menu);
  } else {
    let filteredItems = menu.filter(
      (dish) => dish.category.toLowerCase() == category.toLowerCase()
    );
    displayAll(filteredItems);
  }
}

// Select all Add to cart buttons
function getCartButtons() {
  allAddToCartButtons = document.querySelectorAll(".atcButton");
  allAddToCartButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      addDishToCart(e.target.id);
    })
  );
}

function addDishToCart(dishID) {
  let flag = -1;
  menu.forEach((dish) => {
    if (dish.id == dishID) {
      cart.forEach((cartDish) => {
        if (cartDish.id == dishID) {
          cartDish.quantity += 1;
          flag = 1;
        }
      });
      if (flag != 1) {
        let tempDish = { ...dish, quantity: 1 };
        cart.push(tempDish);
      }
    }
  });
  updateCartCounter();
  displayCartDishes();
}

function displayCartDishes() {
  cartContent = "";
  cart.forEach((dish) => {
    let individualDish = `<div class="cartDish">
    <img src=${dish.img} alt="" />
    <h3>${dish.title}</h3>
    <h3>${dish.price}</h3>
    <h3>${dish.quantity}</h3>
    <p class="cartDelete" id=${dish.id}>Delete</p>
  </div>`;

    cartContent += individualDish;
  });
  document.getElementById("cart").innerHTML = cartContent;
  getDeleteButtons();
}

// Select all Delete to cart buttons
function getDeleteButtons() {
  allCartDeleteButtons = document.querySelectorAll(".cartDelete");
  allCartDeleteButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      removeDishFromCart(e.target.id);
    })
  );
}

function removeDishFromCart(removeID) {
  let flag = -1;
  let tempId = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == removeID) {
      flag = 1;
      tempId = i;
    }
  }

  if (flag) {
    cart.splice(tempId, 1);
  }
  updateCartCounter();
  displayCartDishes();
}
