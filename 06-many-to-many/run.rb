require 'pry'
require_relative './pokemon'
require_relative './trainer'
require_relative './gym'
require_relative './badge'

pikachu = Pokemon.new('pikachu', 7, 'electric')
squirtle = Pokemon.new('squirtle', 9, 'water')
mewtwo = Pokemon.new('mewtwo', 64, 'psychic')

brit = Trainer.new('brit', 8, 'valor')
emily = Trainer.new('emily', 24, 'rocket')

brit.catch(pikachu)
brit.catch(squirtle)
emily.catch(mewtwo)

celadon = Gym.new('erika', 'celadon', 'grass')
cerulean = Gym.new('misty', 'cerulean', 'water')

brit_cascade = Badge.new(cerulean, brit)
emily_cascade = Badge.new(cerulean, emily)
brit_rainbow = Badge.new(celadon, brit)

binding.pry



puts "Good morning!"
