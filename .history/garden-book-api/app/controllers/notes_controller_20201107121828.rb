class NotesController < ApplicationController
    def index
        notes = Note.all
        options = {
            include: [:action]
        }
        render json: NoteSerializer.new(notes,options)
    end
    def show
        n = Note.find_by(id: params[:id])
        render json: NoteSerializer.new(n)
    end
    def create
        # byebug
        note = Note.create(action_id: params[:action_id], plant_id: params[:plant_id], gardenbook_id: params[:gardenbook_id] )
        notes = Note.all
        options = {
            include: [:action]
        }
        # if params[:note]
        #     note.note = params[:note]
        # end
        # note.save
        # plant = Plant.find_by(id: note.plant_id)
        render json: NoteSerializer.new(notes,options)
    end
end
