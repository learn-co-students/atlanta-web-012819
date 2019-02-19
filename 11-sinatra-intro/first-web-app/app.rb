require 'sinatra'

class App < Sinatra::Base
  # which requests do I respond to?
  get '/' do
    # what is my response?
    "<div>Hello from <strong>Sinatra</strong> <a href='/puppies'>Click here for Puppies</a></div>"
  end

  get '/puppies' do
    @x = 10000
    erb :puppies
  end

  # handler for a POST request to 'host.com/puppies'?
  post '/puppies' do
  end

  # handler for a route to show a puppy form
  get '/puppy_form' do
    erb :puppy_form
  end

  # handler for submitting that form
  post '/puppy_form' do
    "You created a puppy named #{params[:puppy]}"
  end

  # description of what the html of the form would look like

end
