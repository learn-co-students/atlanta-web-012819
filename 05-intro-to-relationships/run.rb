require 'pry'
require_relative './pokemon'
require_relative './trainer'

pikachu = Pokemon.new('pikachu', 7, 'electric')
squirtle = Pokemon.new('squirtle', 9, 'water')
mewtwo = Pokemon.new('mewtwo', 64, 'psychic')

brit = Trainer.new('brit', 8, 'valor')
emily = Trainer.new('emily', 24, 'rocket')

brit.catch(pikachu)
brit.catch(squirtle)
emily.catch(mewtwo)

binding.pry



puts "Good morning!"
