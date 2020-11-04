class GardenbooksController < ApplicationController
    def show
        gb = Gardenbook.find_by(id: params[:id])
        options = {
            include: [:plants]
        }
        render json: GardenbookSerializer.new(gb, options)
    end
end
