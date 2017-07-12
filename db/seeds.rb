# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
items = Item.create([
	{
		description: "Complete page 3",
		item_type: "journal"
	},
	{
		description: "Scratch surprise",
		item_type: "project"
	},
	{
		description: "Add to class studio",
		item_type: "project"
	},
	{
		description: "Complete Scratch card pack",
		item_type: "bonus"
	}
])