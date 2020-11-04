class Plant < ApplicationRecord
    belongs_to :gardenbook
    has_many :notes
    has_many :actions, through: :notes
end
