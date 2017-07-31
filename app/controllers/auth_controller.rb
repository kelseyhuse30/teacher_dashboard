class AuthController < ApplicationController
  def login
  	user = User.find_or_create_by(username: params[:username])
  	render json: user
  end

  private

	def auth_params
		params.permit(:username)
	end

end
