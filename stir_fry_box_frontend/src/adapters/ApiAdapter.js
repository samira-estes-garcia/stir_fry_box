class ApiAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000";
  }

  getIngredients() {
    return fetch(`${this.baseUrl}/ingredients`).then((res) => res.json());
  }

  createNewOrder(lastOrderCreated) {
    return fetch(`${this.baseUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ order: lastOrderCreated }),
    }).then((res) => res.json());
  }

  getOrderById(orderId) {
    return fetch(`${this.baseUrl}/orders/${orderId}`).then((res) => res.json());
  }

  updateOrderWithIngredient(orderId) {
    return fetch(`${this.baseUrl}/orders/${orderId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ order: orderId }).then((res) => res.json()),
    });
  }
}
