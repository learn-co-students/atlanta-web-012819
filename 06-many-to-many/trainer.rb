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

  def pokemon
    result = []
    ## loop over all pokemon <---
    Pokemon.all.each do |pokemon|
      ## when pokemon.trainer is me
      if pokemon.trainer == self
        ## keep that pokemon
        result << pokemon
      end
    end
    # return the final list
    result
  end

  def gyms
    result = []
    Badge.all.each do |badge|
      if badge.trainer == self
        result << badge.gym
      end
    end
    result
  end
end
