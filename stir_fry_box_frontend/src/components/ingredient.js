class Ingredient {
  constructor({ id, name, quantity, price, category }) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price.toFixed(2);
    this.category = category;
  }

  collectionOfIngredients() {
    //select new order container
    let newOrderH = document.querySelector("#new-order-h1");

    //create selected ingredients div
    let selectedIngredients = document.createElement("div");
    selectedIngredients.setAttribute("class", "selected-ingredients");

    //append selected ingredients to order container
    newOrderH.append(selectedIngredients);

    //select #container
    let ingredientsContainer = document.querySelector("#ingredients-container");

    //create ingredientCard div
    let ingredientCard = document.createElement("div");
    ingredientCard.setAttribute("class", "card");
    ingredientCard.dataset.id = this.id;

    //create ingredientsInfo to populate ingredientCard
    let ingredientsInfo = document.createElement("div");
    ingredientsInfo.setAttribute("class", "ingredients-info");
    let ingredientName = document.createElement("p");
    ingredientName.textContent = `Ingredient Name: ${this.name}`;
    let ingredientPrice = document.createElement("p");
    ingredientPrice.textContent = `Price: $${this.price}`;
    let ingredientCategory = document.createElement("p");
    ingredientCategory.textContent = `Ingredient Type: ${this.category}`;

    //create add button to add ingredient to order
    let addBtnDiv = document.createElement("div");
    addBtnDiv.setAttribute("class", "add-button-container");
    let addButton = document.createElement("button");
    addButton.setAttribute("id", "add");
    let obj = this;
    let total_price = 0;
    // let prices = [];
    addButton.addEventListener("click", function () {
      console.log(`Button ${ingredientCard.dataset.id} was clicked`);
      console.log(`${obj.name} costs ${obj.price}`);
      selectedIngredients.append(`${obj.name} -- ${obj.price}`);
      total_price = total_price + obj.price;
      let lastOrderCreated = Order.allOrders[Order.allOrders.length - 1];
      lastOrderCreated.ingredient_ids.push(ingredientCard.dataset.id);
      //   prices.push(total_price);
      //   console.log(prices);
      console.log(total_price);
      console.log(lastOrderCreated);
    });

    //append ingredientsInfo and addBtn to ingredientCard
    addBtnDiv.append(addButton);
    ingredientsInfo.append(ingredientName);
    ingredientsInfo.append(ingredientPrice);
    ingredientsInfo.append(ingredientCategory);
    ingredientCard.append(ingredientsInfo);
    ingredientCard.append(addBtnDiv);
    ingredientsContainer.append(ingredientCard);
  }
}
