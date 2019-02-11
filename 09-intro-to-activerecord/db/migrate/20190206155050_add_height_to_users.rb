class AddHeightToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column(:humans, :height, :integer)
  end
end
