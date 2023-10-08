class Api::V1::CheckPositionController < ApplicationController
  

  def check_position
    image = params[:image]
    character = params[:characters]
    coordinates = {
      x: params[:x],
      y: params[:y]
     }

    p image
    p character
    p coordinates

    response = check_character_in_map(image, character, coordinates)

    render json: response
  end

  private 

  def check_character_in_map(map, character, coordinates)
    coordinates_limits = MAP_POSITIONS[map][character]
    if (coordinates[:x].to_i.between?(coordinates_limits[:min_x], coordinates_limits[:max_x]) and coordinates[:y].to_i.between?(coordinates_limits[:min_y], coordinates_limits[:max_y]))
      return true
    else 
      return false
    end
  end

  MAP_POSITIONS = {
    "beach" => {
      "odlaw" => {
        min_x: 9,
        max_x: 12,
        min_y: 35,
        max_y: 40
      },
      "wizzard" => {
        min_x: 25,
        max_x: 29,
        min_y: 35,
        max_y: 41
      },
      "wenda" => {
        min_x: 75,
        max_x: 79,
        min_y: 40,
        max_y: 46
      },
      "waldo" => {
        min_x: 60,
        max_x: 63,
        min_y: 37,
        max_y: 43
      },
      "woof" => {
        min_x: 67,
        max_x: 69,
        min_y: 38,
        max_y: 42
      }
    }
  }
end