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

    private 
    def order_params
        params.require(:order).permit(:total_price)
    end

end
