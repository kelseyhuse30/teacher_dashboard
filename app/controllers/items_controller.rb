class ItemsController < ApplicationController
	def index
		items = Item.all
		render json: items
	end

	def show
		item = Item.find(params[:id])
		render json: item
	end

	def update
		item = Item.find(params[:id])
		item.update(item_params)
		render json: item
	end

	def create
		item = Item.create(item_params)
		render json: item
	end

	def destroy
		item = Item.find(params[:id])
		item.destroy
	end

	private

	def item_params
		params.permit(:id, :description, :item_type, :done, :form_open)
	end

end