class Gym
  attr_reader :leader, :town, :element

  def initialize(leader, town, element)
    @leader = leader
    @town = town
    @element = element
  end

  def victors
    ## set up an array to track them
    result = []
    ## loop over all the badges
    Badge.all.each do |badge|
      ## if the badge has to do with my gym
      if badge.gym == self
        ## keep track of the trainer that won the badge
        result << badge.trainer
      end
    end
    ## hand back the final answer
    result
  end
end
