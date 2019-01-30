require 'pry'
require_relative './student'

## Let's represent some students using arrays? What data should we track?

## Data about students:
## * name
## * height
## * subjects
## * hobbies

def make_student(name, height, courses, hobbies)
  {
    name: name,
    height: height,
    courses: courses,
    hobbies: hobbies
  }
end

# emily = {
#   name: 'emily',
#   height: 74,
#   subjects: ['math', 'philosophy', 'art history'],
#   hobbies: ['destroying patriarchy', 'painting', 'cooking']
# }

# brit = make_student('brit', 66, ['programming', 'literature'],
#                     ['smash bros', 'dogs'])

emily = Student.new('emily', 74, nil)
brit = Student.new('brit', 66, emily)

binding.pry
