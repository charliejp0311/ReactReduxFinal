class GardenbookController < ApplicationController
    def show
        gb = Gardenbook.last
        render json: GardenbookSerializer.new(gb)
    end
end
