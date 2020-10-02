class IngredientsController < ApplicationController

    def index
        ingredients = Ingredient.all 
        render json:ingredients
    end

    def show
        ingredient = Ingredient.find_by(id: params[:id])
        render json: ingredient, status: 200
    end

    private
    def ingredients_params
        params.require(:ingredients).permit(:name, :quantity, :price, :category)
    end

end
