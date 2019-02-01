class Badge
  attr_reader :gym, :trainer

  @@badges = []

  def initialize(gym, trainer)
    @gym = gym
    @trainer = trainer
    @@badges << self
  end

  def self.all
    @@badges
  end
end
