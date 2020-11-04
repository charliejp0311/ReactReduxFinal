class PlantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :growing
  belongs_to :gardenbook
  has_many :notes
  has_many :action, through: :notes
end
