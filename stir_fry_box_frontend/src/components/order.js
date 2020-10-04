class Order {
  static allOrders = [];
  constructor(total_price) {
    this.ingredient_ids = [];
    this.total_price = total_price;
    Order.allOrders.push(this);
  }

  static displayPastOrder(info) {
    // select modify order container
    let modifyOrderH = document.querySelector("#modify-order-h1");

    // create div to hold ingredient and price information
    let orderInformation = document.createElement("div");
    orderInformation.setAttribute("class", "order-info");

    // append information to modify order container
    modifyOrderH.append(orderInformation);

    // add total price to modify order container
    let orderNumber = document.createElement("h3");
    orderNumber.setAttribute("class", "modify-order-info");
    let orderTotal = document.createElement("p");
    orderTotal.setAttribute("class", "modify-order-info");
    orderNumber.textContent = `Order Number ${info.id} `;
    orderTotal.textContent = `Total Price: $${info.total_price.toFixed(2)}`;
    orderInformation.append(orderNumber);
    orderInformation.append(orderTotal);
  }
}
