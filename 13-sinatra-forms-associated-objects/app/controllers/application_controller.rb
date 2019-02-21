class ApplicationController < Sinatra::Base
  configure do
    # set :views, "app/views"
    set :method_override, true
    set :root, "app"
  end

  ## App

  get '/' do
    'this is working'
  end

  ## Books

  # index
  get '/books' do
    # render an index erb file
    # index erb should have: list of the books
    @books = Book.all
    erb :index
  end

  # new
  get '/books/new' do
    erb :new
  end

  # show
  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end

  # create
  post '/books' do
    book = Book.create(params)
    redirect "/books/#{book.id}"
  end

  # edit
  get '/books/:id/edit' do
    @book = Book.find(params[:id])
    erb :edit
  end

  # update
  patch '/books/:id' do
    @book = Book.find(params[:id])
    params.delete("_method")
    if @book.update(params)
      redirect "/books/#{@book.id}"
    else
      erb :edit
    end
  end

  # delete
  delete '/books/:id' do
    Book.destroy(params[:id])
    redirect '/books'
  end
end
