Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'example#homepage', as: 'homepage'

  resources :users, except: [:destroy], path: 'tourists'
  resources :events, only: [:new, :create]

end
