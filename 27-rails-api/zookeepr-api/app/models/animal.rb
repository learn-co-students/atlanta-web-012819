class Animal < ApplicationRecord
  validates :image_url, presence: true

  def reviews_json
    {
      name: self.name,
      creator: self.creator,
      reviews: self.reviews.where("rating > ?", 3)
    }
  end
end
