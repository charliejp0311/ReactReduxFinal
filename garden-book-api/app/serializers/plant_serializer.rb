class PlantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description
  belongs_to :gardenbook
  has_many :notes
end
