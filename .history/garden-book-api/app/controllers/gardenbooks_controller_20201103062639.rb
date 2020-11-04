class GardenbooksController < ApplicationController
    def show
        gb = Gardenbook.find_by(id: params[:id])
        render json: GardenbookSerializer.new(gb)
    end
end
