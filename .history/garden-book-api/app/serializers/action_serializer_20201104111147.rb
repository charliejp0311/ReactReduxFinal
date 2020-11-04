class ActionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name
  has_many :notes
  has_many :plants, through: :notes
end
