class IngredientSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :name, :quantity, :price, :category
    has_and_belongs_to_many :orders
end