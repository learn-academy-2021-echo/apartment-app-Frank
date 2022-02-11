241  git commit -m "this is the good one"
  242  git push origin main
  243  bundle add rspec-rails
  244  rails generate rspec:install
  245  bundle add devise
  246  rails generate devise:install
  247  rails generate devise User
  248  bundle add react-rails
  249  rails webpacker:install:react
  250  rails generate react:install
  251  rails generate react:component App
  252  rails generate controller Home
  253  rails db:migrate
  254  rails s
  255  code .
  256  rails s

  app broke

  Austin helped me troubleshoot the code.

$ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer

$ rails db:migrate

added belongs_to :user in apartment.rb
added has_many :apartments in user.rb