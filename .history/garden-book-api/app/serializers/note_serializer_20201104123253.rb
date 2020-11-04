class NoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :action_id, :plant_id, :note
  belongs_to :plant
  belongs_to :gardenbook, through: :plant
  belongs_to :action
end
