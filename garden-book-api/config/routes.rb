Rails.application.routes.draw do
  get 'actions/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :gardenbooks, only: [:show] do
    resources :plants, only: [:create]
    resources :notes
  end
  resources :plants do
    resources :notes
  end
  resources :notes 
  resources :actions
end
