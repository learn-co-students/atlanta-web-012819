# Sinatra

## Problems with Mod 1 projects

apps keep evolving and changing

- getting started
- connecting different methods together
- code in the CLI could have been refactored more
- Gathering data
- User Interface - how will the user interact with the program?
- CLI - not so much
- interface is clunky

Not intuitive

## Web Servers and Clients

We are going to build our applications using familiar client-facing technology

## Sinatra apps

- abstract away all the HTTP mess

### Problems

- X Navigation: list of things you can do - choose one (go to there)
- X render links
- X serve different pages when the user navigates to different urls


- X not write html in big strings
- get some input from the user...how?


### Routing

match an HTTP verb + url
HTTP Verbs
- GET
- POST - create
- PUT
- PATCH - update in place
- DELETE
- TRACE
- OPTIONS

- `get '/url'`
- `post '/url'`
- `get '/url/:match'`
- `post '/url/:match'`
- match top to bottom

HTTP status codes
- 404 - not found
- 200 - success
- 301 - redirect


### ERB

- Template language
- ruby _inside_ html
- `<% %>` runs ruby
- `<%= %>` runs ruby _and shows the result_

How do we pass stuff into it?
- from the app.rb into view/something.erb file?

## REST
- CRUD
- create, read, update, delete

- "Representational State Transfer"
- CRUD over HTTP
- routes match actions

Actions:
- index
- show
- new
- create
- edit
- update
- destroy


## MVC
- "Model, View, Controller"
- Separate responsibilities
- Model - it's for data
- View - it's for the view
- Controller - it's for actions
