class ApplicationController < Sinatra::Base
  configure do
    # set :views, "app/views"
    set :method_override, true
    set :root, "app"
  end

  ## App

  get '/' do
    @title = "Welcome to liber album!"
    erb :welcome
  end

end
