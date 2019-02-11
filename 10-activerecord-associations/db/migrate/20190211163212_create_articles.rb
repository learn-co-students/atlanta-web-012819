class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string  :title
      t.text    :content
      t.boolean :draft
      t.date    :published_at

      # t.timestamps - gives us created_at and updated_at, not needed right now
    end
  end
end
