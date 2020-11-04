class Action < ApplicationRecord
    has_many :notes
    has_many :plants, :through => :notes
end
