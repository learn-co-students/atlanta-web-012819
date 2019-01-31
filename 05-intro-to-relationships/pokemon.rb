## Data
# * Element
# * Level
# * Moves
# * Health
# * Name
# * Trainer

class Pokemon
  attr_reader(:name, :element)
  attr_accessor(:level, :trainer)
  ## metaprogramming
  ## OFTEN INSANE AND FRAUGHT WITH DANGER

  def initialize(name, level, element)
    @name = name
    @level = level
    @element = element
    @health = level * 10
    @trainer = nil
  end
end
