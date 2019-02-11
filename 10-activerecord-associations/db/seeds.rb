Article.destroy_all
Tag.destroy_all
ArticleTag.destroy_all

teaching = Tag.create(name: 'teaching')
programming = Tag.create(name: 'programming')
flatiron = Tag.create(name: 'flatiron')
cocktails = Tag.create(name: 'cocktails')

sazerac = Article.create(title: 'A Good Sazerac',
  content: '1.5 oz rye whiskey, 1 sugar cube, angostura bitters, peychauds bitters, probably other stuff, stir do not shake, and serve',
  published_at: DateTime.now,
  draft: false)

ArticleTag.create(article_id: sazerac.id, tag_id: cocktails.id)
ArticleTag.create(article_id: sazerac.id, tag_id: programming.id)

associations = Article.create(title: 'Associations are cool',
                              content: 'They are much easier than defining relationships by hand')

ArticleTag.create(article_id: associations.id, tag_id: flatiron.id)
ArticleTag.create(article_id: associations.id, tag_id: programming.id)
