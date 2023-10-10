Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'check_position/:image/:characters/:coordinates', to: 'check_position#check_position'
      get 'session/:id', to: 'session#show'
      post 'session', to: 'session#create'
      delete 'session/:id', to: 'session#destroy'

      post 'player_record', to: 'player_records#create'
    end
  end
end
