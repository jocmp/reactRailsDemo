1. `rails new depot`
2. `cd depot`
3. Open your `Gemfile` and add
```
gem 'react-rails'
```
4. `rails g react:install`


# Product
```
rails g scaffold Product \
         title:string description:text image_url:string price:decimal

rails g react:component Product \
        title:string description:string image_url:string price:number --es6

Last on: page 63
```
