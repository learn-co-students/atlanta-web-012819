class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :user_id
      t.integer :fun_factor

      t.timestamps
    end
  end
end
