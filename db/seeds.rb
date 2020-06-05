# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# require "faker"

#   25.times do
#     card_name = Faker::Nation.language
#     Card.create(name: card_name)
#   end

  Card.create(name: "What is the tallest mountain", result: "Mt Everest")
  Card.create(name: "Who is the CEO of Amazon", result: "Jeff Bezos")
  Card.create(name: "who is the ceo of microsoft", result: "Bill gates")
