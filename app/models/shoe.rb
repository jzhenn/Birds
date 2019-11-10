class Shoe < ApplicationRecord
    validates :model, :gender, presence: true

    has_many :shoe_materials
    has_many :materials, 
        through: :shoe_materials, 
        source: :material

    has_many :shoe_colors
    has_many :colors, 
        through: :shoe_colors, 
        source: :color
end