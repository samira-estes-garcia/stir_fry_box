class OrderSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :total_price
    has_many :ingredients
end