class Tweet
  attr_accessor :message, :username
  attr_reader :id

  def self.all
    DB[:conn].execute("SELECT * FROM tweets").map { |t| Tweet.new(t) }
  end

  def initialize(props={})
    @id = props['id']
    @message = props['message']
    @username = props['username']
    self.save
  end

  def save
    unless @id
      DB[:conn].execute("INSERT INTO tweets (username, message) VALUES ('#{username}', '#{message}')")
    end
  end
end
