# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Todo.create(content: "Configure Rails with Postgres.", checked: true)
Todo.create(content: "Start server on http://localhost:3001", checked: true)
Todo.create(content: "Bind React with Rails.", checked: false)
Todo.create(content: "Make Simple Todo List with React and Rails.", checked: false)