class ApplicationController < Sinatra::Base
  configure do
    # set :views, "app/views"
    set :root, "app"
  end

  get '/' do
    'this is working'
  end

  # index route for books
  get '/books' do
    # render an index erb file
    # index erb should have: list of the books
    @books = Book.all.limit(20)
    erb :index
  end

  # new route for books
  get '/books/new' do
    erb :new
  end

  # create route for books
  post '/books' do
    book = Book.create(params)
    redirect "/books/#{book.id}"
  end

  # show route for books
  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end


end
