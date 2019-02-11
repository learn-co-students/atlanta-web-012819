## README:

### Today's Objectives

* Use associations to relate models (Post - Tag - PostTag)
* See a seed file to put info in the database
* Talk about a runfile and answer general questions

Active Record naming conventions are [important!][naming conventions].

Process for adding relationships:

* Decide on the relationship type
* Check the [associations guide][assoc] to see the table layout.
* Write the migrations.
* Write the classes and put the associations in them.

[assoc]: https://guides.rubyonrails.org/association_basics.html#the-has-many-association
[naming conventions]: https://guides.rubyonrails.org/active_record_basics.html#convention-over-configuration-in-active-record

## ActiveRecord Associations

Associations are how ActiveRecord implements _relationships_.

We'll use the methods `has_many`, `has_one`, and `belongs_to`.

Much like `attr_reader`, `attr_accessor`, these ActiveRecord associations
*define methods for us* on our class.

Methods that define other methods for us are often called "macros".

## ActiveRecord FAQs

* Q: How do I find the activerecord method I need when I need it?

* A: The Rails Guides are okay, not perfect. More of a reference than a tutorial at times.
  * Basics guide, Associations guide, and Query Interface guide.
* A: StackOverflow _can be_ great.

* Q: Do activerecord associations change the table in some way?

* A: No, they only define methods to let us query the table.
