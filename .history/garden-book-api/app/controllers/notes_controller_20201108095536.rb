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

        note = Note.create(action_id: params[:action_id], plant_id: params[:plant_id], gardenbook_id: params[:gardenbook_id], note: params[:note] )
       
        notes = Note.all
        options = {
            include: [:action]
        }
        render json: NoteSerializer.new(notes,options)
    end
    def destroy
        note = Note.find_by(id: params[:id])
        gb_id = note.gardenbook_id
        note.destroy
        gb = Gardenbook.find_by(id: gb_id)
        options = {
            include: [:actions]
        }
        render json: GardenbookSerializer.new(gb,options)
    end
end
