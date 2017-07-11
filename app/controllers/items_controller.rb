class ItemsController < ApplicationController
	def index
		items = Item.all
		render json: items
	end

	def create
		item = Item.new(item_params)
		render json: item
	end

	def show
		item = Item.find(item_params)
		render json: item
	end

end