class UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def new
    render :new
  end

  def create
    @user = User.create(user_params)
    redirect_to users_path
  end

  private
  def user_params
    params.permit(:name, :age, :occupation)
  end
end
