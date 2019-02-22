class BookController < ApplicationController

  # index
  get '/books' do
    @title = "Books"
    # render an index erb file
    # index erb should have: list of the books
    @books = Book.all
    erb :'books/index'
  end

  # new
  get '/books/new' do
    @title = "New Book"
    erb :'books/new'
  end

  # show
  get '/books/:id' do
    @title = "Show Book"
    @book = Book.find(params[:id])
    erb :'books/show'
  end

  # create
  post '/books' do
    author = Author.create(name: params["author"])
    params.delete("author")
    params["author_id"] = author.id
    book = Book.create(params)
    redirect "/books/#{book.id}"
  end

  # edit
  get '/books/:id/edit' do
    @title = "Edit Book"
    @book = Book.find(params[:id])
    @authors = Author.all
    erb :'books/edit'
  end

  # update
  patch '/books/:id' do
    @book = Book.find(params[:id])
    params.delete("_method")
    if @book.update(params)
      redirect "/books/#{@book.id}"
    else
      erb :'books/edit'
    end
  end

  # delete
  delete '/books/:id' do
    Book.destroy(params[:id])
    redirect '/books'
  end
end
