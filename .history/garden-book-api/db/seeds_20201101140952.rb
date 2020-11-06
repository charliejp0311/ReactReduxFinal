# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
gb = Gardenbook.create()
actions = [{name:'Water'},{name:'Feed'},{name:'Germinate'},{name:'Pollinate'},{name:'Notate'}]
plants = [{name:'Tomato'},{name:'Corn'},{name:'Cucumber'},{name:'Serano'},{name:'Eggplant'}]
Action.create(actions)
gb.plants.build(plants)

gb.save