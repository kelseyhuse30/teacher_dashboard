Rails.application.routes.draw do
  get 'auth/login'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
  	resources :items, :timers

  	post'/auth', to: 'auth#login'
  end
end
