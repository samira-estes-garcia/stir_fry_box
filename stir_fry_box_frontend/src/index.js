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
submitOrder.addEventListener("click", function () {
  //find the specific order, pass in order obj to adapter
  let lastOrderCreated = Order.allorders[Order.allorders.length - 1];
  //need key called order to encapsulate the data
  api.createNewOrder(lastOrderCreated).then((order) => {
    console.log(order);
  });
});
