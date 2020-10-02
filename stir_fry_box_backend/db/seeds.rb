# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ingredient.create([
    {name: "rice", price: 2.50, category: "grain"},
    {name: "brown rice", price: 2.50, category: "grain"},
    {name: "egg noodles", price: 3.50, category: "grain"},
    {name: "zucchini noodles", price: 3.50, category: "grain"},
    {name: "tofu", price: 4.50, category: "protein"},
    {name: "chicken", price: 4.50, category: "protein"},
    {name: "broccoli", price: 1.00, category: "vegetable"},
    {name: "carrots", price: 1.00, category: "vegetable"},
    {name: "water chestnuts", price: 1.00, category: "vegetable"},
    {name: "soy sauce", price: 4.50, category: "sauce"},
    {name: "hoisin sauce", price: 4.50, category: "sauce"},
])