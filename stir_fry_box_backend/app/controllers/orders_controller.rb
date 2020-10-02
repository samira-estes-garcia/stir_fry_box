class OrdersController < ApplicationController
    
    def new
        order = Order.new(order_params)
    end

    def show 
        order = Order.find_by(id: params[:id])
        render json: order, status: 200
    end

    def create
        order = Order.new(order_params)
        if order 
            order.save
            render json: order
        else
            render json: {error: "Error"}
        end
    end

    def edit
        order = Order.find_by(id: params[:id])
    end

    def update
        order_ing = OrdersIngredients.create(order_id: params[:id], ingredient_id: params[:ingredient_id])
        order = Order.find(params[:order_id])
        total_price = order.ingredients.reduce(0) {|sum, ingredient | sum + ingredient.price }
        order.update(total_price: total_price.round(2))
        render json: order
    end

    private 
    def order_params
        params.require(:order).permit(:total_price, :ingredient)
    end

end
