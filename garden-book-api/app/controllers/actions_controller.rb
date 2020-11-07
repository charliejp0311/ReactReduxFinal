class ActionsController < ApplicationController
  def index
    actions = Action.all
    render json: ActionSerializer.new(actions)
  end
end
