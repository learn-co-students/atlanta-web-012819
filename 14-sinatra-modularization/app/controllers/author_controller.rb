class AuthorController < ApplicationController

  # index
  get '/authors' do
    @title = "Authors"
    @authors = Author.all
    erb :'authors/index'
  end

  # new
  get '/authors/new' do
    @title = "New Author"
    erb :'authors/new'
  end

  # show
  get '/authors/:id' do
    @title = "Show Author"
    @author = Author.find(params[:id])
    erb :'authors/show'
  end

  # create
  post '/authors' do
    binding.pry
    author = Author.create(params)
    redirect "/authors/#{author.id}"
  end

  # edit
  get '/authors/:id/edit' do
    @title = "Edit Author"
    @author = Author.find(params[:id])
    @authors = Author.all
    erb :'authors/edit'
  end

  # update
  patch '/authors/:id' do
    @author = Author.find(params[:id])
    params.delete("_method")
    if @author.update(params)
      redirect "/authors/#{@author.id}"
    else
      erb :'authors/edit'
    end
  end

  # delete
  delete '/authors/:id' do
    Author.destroy(params[:id])
    redirect '/authors'
  end
end
