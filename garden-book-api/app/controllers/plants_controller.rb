class PlantsController < ApplicationController
    def index
        plants = Plant.all
        render json: PlantSerializer.new(plants)
    end
    def show
        n = Plant.find_by(id: params[:id])
        render json: PlantSerializer.new(n)
    end
end
