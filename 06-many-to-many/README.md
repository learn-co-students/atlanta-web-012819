## Morning!

Welcome back.

### Objectives

By collecting badges!
* This is our first many-to-many relationship.
* Gym can be conquered by many trainers.
* Trainer can conquer many gyms.
* Add a Gym class with: gymleader, location, kind
  * a victors method to show the trainers that have defeated it
  * Ahhh, this seems really hard to do with single source of truth. :-/


Since we want our single source of truth to be a single reference
(like a pokemon belongs to trainer), we would prefer to avoid a Trainer
having an array of gyms or a Gym having an array of Trainers. So...
* Add a Badge class with: a title, a gym, and a trainer
  * Now each badge captures a single time that a trainer defeated a gym.
  * This also is a close analog of how relational databases manage SSOT.
