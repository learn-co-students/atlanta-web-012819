## Morning!

## Recap

Brief recap! Yesterday we saw:

* Classes
* Instances
* Methods
* Instance Variables

## Today

### Rules about self

1. If you're in a method, self is an instance.
   If you're out of a method, self is the class.
2. It's a keyword, so you never call myObject.self
3. Methods are not only code like `obj.method()`,
   but also `method()` and in that case, the obj is self.
   This is called implicit self.

## Rules about class Methods

1. When we define them, they are named `def self.all`
2. When we call them, they're called on a class, not the instance
   so `Pokemon.all`

Cool! Today we're going to:

* Learn about self
* Learn the difference between class methods and instance methods
* Try to model relationships between objects (using trainers and pokemon)

* Practice writing classes - A pokemon trainer
  * What can a trainer do?
  * How can we tell two trainers apart? What if they have the same data?
  * How do we `require` both classes so we can use them together?
  * What relationships do trainers have to our other classes?

* Who is in charge of knowing about the relationship between a trainer and a pokemon?

* How should pokemon be related to trainers?
  * We probably need a class variable for this!
  * What do we do if there are two trainers with the same name?
  * How can we tell them apart or make them unique?
