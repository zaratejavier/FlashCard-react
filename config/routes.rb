Rails.application.routes.draw do
  resources :add_result_to_cards
  root 'cards#index'
  resources :cards
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
