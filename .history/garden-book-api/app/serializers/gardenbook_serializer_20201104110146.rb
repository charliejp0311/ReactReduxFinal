class GardenbookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id
  has_many :plants
  has_many :notes, through: :plants
end
