class CreateHumans < ActiveRecord::Migration[5.2]
  def change
    create_table :humans do |table|
      table.string :name
      table.integer :age
      table.string :address
    end
  end
end
