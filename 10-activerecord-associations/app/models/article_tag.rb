class ArticleTag < ActiveRecord::Base
  belongs_to :article
  belongs_to :tag

  # def article
  #   Article.find(self.article_id)
  # end
  #
  # def tag
  #   Tag.find(self.tag_id)
  # end
end
