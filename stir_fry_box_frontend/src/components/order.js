class Order {
  static allOrders = [];
  constructor(total_price) {
    this.ingredient_ids = [];
    this.total_price = total_price;
    Order.allOrders.push(this);
  }

  //   updateOrder() {
  //     this.quantity = this.ingredient_ids.length;
  //     this.total_price = 0;
  //   }
}
