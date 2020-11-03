class PlantsController < ApplicationController
    def index
        plants = Plant.all
        render json: PlantSerializer.new(plants)
    end
    def show
        n = Plant.find_by(id: params[:id])
        render json: PlantSerializer.new(n)
    end
    def create
        gb = Gardenbook.find_by(id: params[:gardenbook_id])
        plant = Plant.create(name: params[:name], gardenbook_id: params[:gardenbook_id])
        render json: GardenbookSerializer.new(gb)
    end
end
