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
        note = Note.new(action_id: params[:action_id], plant_id: params[:plant_id], gardenbook_id: params[:gardenbook_id] )
        if params[:note]
            note.note = params[:note]
        end
        note.save
        notes = Note.all
        options = {
            include: [:action]
        }
        rnder json: NoteSerializer.new(notes,options)
    end
end
