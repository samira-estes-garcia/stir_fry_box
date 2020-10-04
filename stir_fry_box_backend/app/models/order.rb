class Order < ApplicationRecord
    has_many :order_ingredients
    has_many :ingredients, through: :order_ingredients
    accepts_nested_attributes_for :ingredients
end
