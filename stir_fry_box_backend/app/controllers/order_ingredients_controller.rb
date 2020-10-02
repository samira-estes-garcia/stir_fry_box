class OrderIngredientsController < ApplicationController

    def new
        order_ingredients = OrderIngredients.new(order_ingredients_params)
    end

    def create
        order_ing = OrderIngredients.create(order_id: params[:order_id], ingredient_id: params[:ingredient_id])
        order = Order.find(params[:order_id])
        total_price = Order.ingredients.reduce(0) {|sum, ingredient| sum + ingredient.price }
        order.update(total_price: total_price.round(2))
        render json: order
    end

    private 
    def order_ingredients_params
        params.require(:order_ingredients).permit(:order_id, :ingredient_id)
    end

end
