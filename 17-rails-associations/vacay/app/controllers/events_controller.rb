class EventsController < ApplicationController

  def new
    @event = Event.new
    @users = User.all
  end

  def create
    @event = Event.create(event_params)
    redirect_to user_path(@event.user)
  end

  private
  def event_params
    params.require(:event).permit(:name, :fun_factor, :user_id)
  end

end
