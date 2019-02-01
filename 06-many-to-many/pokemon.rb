## Data
# * Element
# * Level
# * Moves
# * Health
# * Name
# * Trainer

class Pokemon
  attr_reader(:name, :element)
  self.attr_accessor(:level, :trainer)
  ## attr macros are metaprogramming
  ## OFTEN INSANE AND FRAUGHT WITH DANGER

  @@pokemon = []

  def initialize(name, level, element)
    @name = name
    @level = level
    @element = element
    @health = level * 10
    @trainer = nil
    @@pokemon << self
  end

  # def Pokemon.all
  #   @@pokemon
  # end

  def self.all
    @@pokemon
  end

end
