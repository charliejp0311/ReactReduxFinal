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
        gb = Gardenbook.find_by(id: params[:gardenbook_id])
        plant = Plant.find_by(id: params[:plant][:id])
        plant.update(name: params[:name], description: params[:description], growing: params[:growing])
        render json: PlantSerializer.new(plant)
    end
end
