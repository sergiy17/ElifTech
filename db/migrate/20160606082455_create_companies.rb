class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.integer :id
      t.string :name
      t.integer :ernings
      t.integer :parent_id

      t.timestamps null: false
    end
  end
end
