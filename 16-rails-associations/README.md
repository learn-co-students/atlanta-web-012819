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

3 high level / application level tasks.
A bunch of Rails concepts. At least: form_for and partial templates.
Possibly: Validations and forms with nested objects.

* Make a show page for users.
* Make an edit/update page for users.
  * Introduce form_for to "DRY up" / abstract duplicate form logic.
  * Mention that when broken into a separate file, form_for is a "partial".
    * https://guides.rubyonrails.org/layouts_and_rendering.html#using-partials
  * Maybe restrict all users to be above 18?
    * Uh oh, how do we communicate about bad form input?
* Look at what we would need to do to create a user with their events simultaneously.
  * This might get pushed til tomorrow.
  * Talk fields_for / accepts_nested_attributes / things.build / permit(foo: [:bar, :baz])
