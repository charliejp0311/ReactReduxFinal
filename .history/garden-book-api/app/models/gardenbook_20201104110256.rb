class Gardenbook < ApplicationRecord
    has_many :plants
    has_many :notes, through: :plants
end
