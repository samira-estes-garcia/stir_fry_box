class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :quantity, default: 0
      t.float :price
      t.string :category

      t.timestamps
    end
  end
end
