class GardenbooksController < ApplicationController
    def show
        gb = Gardenbook.last
        render json: GardenbookSerializer.new(gb)
    end
end
