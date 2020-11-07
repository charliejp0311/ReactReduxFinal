class PlantsController < ApplicationController
    def index
        plants = Plant.all
        options = { 
            include: [:notes]
        }
        render json: PlantSerializer.new(plants,options)
    end
    def show
        n = Plant.find_by(id: params[:id])
        render json: PlantSerializer.new(n)
    end
    def create
        gb = Gardenbook.find_by(id: params[:gardenbook_id])
        plant = Plant.create(name: params[:name], gardenbook_id: params[:gardenbook_id], description: params[:description])
        render json: GardenbookSerializer.new(gb)
    end
    def update
        plant = Plant.find_by(id: params[:plant][:id])
        byebug
        plant.update()
    end
end
