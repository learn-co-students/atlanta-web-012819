class Student
  def initialize(name, height, friend)
    example = 'cookies'
    @name = name
    @height = height
    @friend = friend
    # example will not be visible outside of initialize
    # because its a local var
  end

  def introduce
    puts "Hi there! My name is #{name}."
  end

  def greet(friend)
    puts "Hi, #{friend}!"
  end

  def greet_friend
    puts "Hi, #{@friend.name}!"
  end

  def name
    @name
  end

  def grow_an_inch
    @height = @height + 1
  end

  def height
    @height
  end

  def height_description
    feet = @height / 12
    inches = @height % 12
    "#{@name} is #{feet} feet and #{inches} inches tall."
  end

  def height=(new_height)
    if new_height > 100
      puts "Sorry, we force all people to be shorter than 80 inches"
    else
      @height = new_height
    end
  end

  def to_s
    "Student { Name: #{@name}, Height: #{@height} inches }"
  end
end
