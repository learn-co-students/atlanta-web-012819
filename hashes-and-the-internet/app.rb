require 'rest-client'
require 'json'
require 'pry'

$separator = "︵‿︵‿୨♡୧‿︵‿︵"

def fetch_books(topic)
  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{topic}")
  body = JSON.parse(response.body)
  body["items"]
end

def print_books(books)
  books.each do |book|
    print_book(book)
    puts $separator
  end
end

def print_book(book)
  puts book["volumeInfo"]["title"]
  authors = book["volumeInfo"]["authors"]
  if authors.nil?
    puts "Unknown Author"
  else
    puts authors.join(" & ")
  end
end

def run
  puts "Welcome to Emily's Fantastic BookFinder(tm)!"
  puts "Please enter a topic..."
  input = gets.chomp
  books = fetch_books(input)
  print_books(books)
end

run

# binding.pry