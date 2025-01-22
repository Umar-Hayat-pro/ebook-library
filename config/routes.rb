Rails.application.routes.draw do
  scope "(:locale)", locale: /en|ur/ do
    # Define your routes here
    root "home#index"
  end
  get "up" => "rails/health#show", as: :rails_health_check
end
