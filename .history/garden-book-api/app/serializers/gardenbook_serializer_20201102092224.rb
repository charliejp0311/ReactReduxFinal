class GardenbookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id
  has_many :plants
end
