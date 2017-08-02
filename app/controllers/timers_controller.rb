class TimersController < ApplicationController
	def show
		timer = Timer.find(params[:id])
		render json: timer
	end

	def update
		timer = Timer.find(params[:id])
		timer.update(timer_params)
		render json: timer
	end

	def create
		timer = Timer.new(timer_params)
		render json: timer
	end

	def destroy
		timer = Timer.find(params[:id])
		timer.destroy
	end

	private

	def timer_params
		params.permit(:id, :time_remaining, :paused)
	end

end