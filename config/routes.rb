Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'check_position/:params', to: 'check_position#index'
    end
  end
end
