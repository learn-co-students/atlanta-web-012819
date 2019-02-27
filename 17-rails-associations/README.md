## Rails Forms

### Reminder: Rails Workflow

* Do I need a table or need to make changes to the table?
  * rails g model & rails g migration
* Do I have routes?
  * rails routes & config/routes.rb
* Do I need a controller or just add a method to an existing controller?
* Write the view.

Objectives:

Work more on our app!

2 application level tasks.

Possibly: Validations and forms with nested objects.

* Look at what we would need to do to create a user with their events simultaneously. Two different ways:
  * Create an event that belongs to a user. `collection_select`
    * Pretty straightforward with `form_tag` or `form_for`
  * Create a user and multiple events simultaneously.
    * Not sure how straightforward it is with `form_tag`.
    * Let's see if `fields_for_tag` exists...
    * Talk `fields_for` / `accepts_nested_attributes_for` / `things.build` / `permit(foo: [:bar, :baz])`
