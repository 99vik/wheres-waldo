class PlayerRecord < ApplicationRecord
    validates :name, presence: true, length: { minimum: 5, maximum: 20}, uniqueness: true
end
