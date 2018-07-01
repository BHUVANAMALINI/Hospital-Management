Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/home/create_appointment' => "home#create_appointment"
  get '/home/create_doctor' => "home#create_doctor"
  get '/home/create_patient' => "home#create_patient"
  resources :home
  root to: "home#index"
end
