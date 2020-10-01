# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ingredient.create([
    {name: "Rice", price: 2.50, category: "Grain"},
    {name: "Brown Rice", price: 2.50, category: "Grain"},
    {name: "Egg Noodles", price: 3.50, category: "Grain"},
    {name: "Zucchini Noodles", price: 3.50, category: "Grain"},
    {name: "Tofu", price: 4.50, category: "Protein"},
    {name: "Chicken", price: 4.50, category: "Protein"},
    {name: "Broccoli", price: 1.00, category: "Vegetable"},
    {name: "Carrots", price: 1.00, category: "Vegetable"},
    {name: "Water Chestnuts", price: 1.00, category: "Vegetable"},
    {name: "Soy Sauce", price: 4.50, category: "Sauce"},
    {name: "Hoisin Sauce", price: 4.50, category: "Sauce"},
])