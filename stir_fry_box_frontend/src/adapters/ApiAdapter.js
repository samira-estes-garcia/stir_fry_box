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

  //   updateBowlWithIngredient(bowlId) {
  //     return fetch(`${this.baseUrl}/bowls/${bowlId}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         //quantity:
  //         // bowl_id: bowlId,
  //         // ingredient_id: ingredient.id,
  //       }),
  //     }).then((res) => res.json());
  //     console.log(bowlId);
  //   }
}
