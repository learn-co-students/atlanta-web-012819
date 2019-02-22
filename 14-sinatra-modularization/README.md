## Sinatra and Modularization
- MVC
	- ActiveRecord Models
		- `@resource.subresource` such as `@author.books`
		- dependencies such as `dependent: :destroy`
	- ERB Views
		- `<% ... %>` does NOT return the return value from ruby
		- `<%= ... %>` DOES return the return value from ruby
	- Sinatra Controllers
		- Separate resoure management into specific controllers
		- 
- Separate controllers and model views
- Linking
    - `<a href="..."/>Link Text</a>`
- Layouts
	- `<%= yield %>`
- Navigation
	- `<nav>...</nav>`

## REST Routes (Review)

| HTTP Verb | Action | Route               |
| --------- | ------ | ------------------- |
| GET       | index  | /resources          |
| GET       | new    | /resources/new      |
| POST      | create | /resources          |
| GET       | show   | /resources/:id      |
| GET       | edit   | /resources/:id/edit |
| PATCH     | update | /resources/:id      |
| PUT       | update | /resources/:id      |
| DELETE    | delete | /resources/:id      |
