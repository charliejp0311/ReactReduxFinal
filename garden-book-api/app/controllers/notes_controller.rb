class NotesController < ApplicationController
    def index
        notes = Note.all
        render json: NoteSerializer.new(notes)
    end
    def show
        n = Note.find_by(id: params[:id])
        render json: NoteSerializer.new(n)
    end
end
