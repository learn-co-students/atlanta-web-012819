## Data
# * Name
# * Level

class Trainer
  attr_reader(:name, :team)
  attr_accessor(:level)

  def initialize(name, level, team)
    @name = name
    @level = level
    @team = team
  end

  def catch(pokemon)
    pokemon.trainer = self
  end

  def give(trainer, pokemon)
    pokemon.trainer = trainer
  end
end
