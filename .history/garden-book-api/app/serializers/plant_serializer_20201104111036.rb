class PlantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :growing
  belongs_to :gardenbook
  has_many :notes
end
