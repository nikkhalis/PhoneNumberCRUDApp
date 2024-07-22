Rails.application.routes.draw do
  root "users#index"  # This sets the root path to the index action of the Users controller
  resources :users
end
