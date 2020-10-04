let api = new ApiAdapter();

document.addEventListener("DOMContentLoaded", function () {
  new Order();
  api.getIngredients().then((ingredients) => {
    console.log(ingredients);
    ingredients.forEach((ingredient) => {
      const newIngredient = new Ingredient(ingredient);
      newIngredient.collectionOfIngredients();
      //console.log(newIngredient);
    });
  });
});

//dont create order until click on ingredients
let submitOrder = document.querySelector("#submit-order");
let newOrderContainer = document.querySelector("#new-order");
let newOrderH = document.querySelector("#new-order-h1");

let orderNumber = document.createElement("div");
orderNumber.setAttribute("class", "order-number");
orderTotal = document.createElement("div");
orderTotal.setAttribute("class", "order-total");
submitOrder.addEventListener("click", function () {
  //find the specific order, pass in order obj to adapter
  let lastOrderCreated = Order.allOrders[Order.allOrders.length - 1];
  //need key called order to encapsulate the data
  api.createNewOrder(lastOrderCreated).then((order) => {
    console.log(order);
    total_price = order.total_price.toFixed(2);
    orderTotal.textContent = `Total Price: $${total_price}`;
    orderNumber.textContent = `Order number ${order.id} will be ready shortly!`;
    newOrderH.append(orderTotal);
    newOrderContainer.append(orderNumber);
  });
});

//display ingredients when click on new order
let newOrder = document.querySelector("#new");
newOrder.addEventListener("click", function () {
  document.querySelector("#container").style.display = "block";
  document.querySelector("#order-container").style.display = "block";
  document.querySelector("#new-order").style.display = "block";
  document.querySelector("#back").style.display = "block";
  document.querySelector("#main").style.display = "none";
  document.querySelector("#modify-order").style.display = "none";
  document.querySelector("#modify-order-form").style.display = "none";
  document.querySelector("body").style.backgroundImage =
    "url(assets/order-bg.jpeg)";
  document.querySelector("body").backgroundSize = "160%";
});

//display modify order form
let modifyOrder = document.querySelector("#modify");
modifyOrder.addEventListener("click", function () {
  document.querySelector("#container").style.display = "block";
  document.querySelector("#order-container").style.display = "block";
  document.querySelector("#modify-order").style.display = "block";
  document.querySelector("#modify-order-form").style.display = "block";
  document.querySelector("#back").style.display = "block";
  document.querySelector("#main").style.display = "none";
  document.querySelector("#new-order").style.display = "none";
  document.querySelector("body").style.backgroundImage =
    "url(assets/order-bg.jpeg)";
  document.querySelector("body").backgroundSize = "160%";
});

let backButton = document.querySelector("#back");
backButton.addEventListener("click", function () {
  document.querySelector("#container").style.display = "none";
  document.querySelector("#order-container").style.display = "none";
  document.querySelector("#back").style.display = "none";
  document.querySelector("#main").style.display = "block";
  document.querySelector("body").style.backgroundImage =
    "url(assets/main-bg-img.jpeg)";
  document.querySelector("body").backgroundSize = "185%";
});

let modifyOrderForm = document.querySelector("#modify-order-form");
modifyOrderForm.onsubmit = function () {
  orderId = document.querySelector("#order-id").value;
  console.log(orderId);
  api.getOrderById(orderId).then((information) => {
    console.log(information);
    Order.displayPastOrder(information);
  });
  return false;
};
