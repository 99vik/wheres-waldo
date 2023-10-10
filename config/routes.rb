Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'check_position/:image/:characters/:coordinates', to: 'check_position#check_position'
    end
  end
end