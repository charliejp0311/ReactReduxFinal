class ActionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name
  has_many :notes
end
