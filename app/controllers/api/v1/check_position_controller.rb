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
    },
    "ski_slopes" => {
      "odlaw" => {
        min_x: 30,
        max_x: 32,
        min_y: 62,
        max_y: 65
      },
      "wizzard" => {
        min_x: 6,
        max_x: 8,
        min_y: 73,
        max_y: 78
      },
      "wenda" => {
        min_x: 48,
        max_x: 50,
        min_y: 40,
        max_y: 44
      },
      "waldo" => {
        min_x: 84,
        max_x: 87,
        min_y: 70,
        max_y: 76
      },
      "woof" => {
        min_x: 29,
        max_x: 31,
        min_y: 70,
        max_y: 73
      }
    },
    "olympic_stadium" => {
      "odlaw" => {
        min_x: 59,
        max_x: 61,
        min_y: 63,
        max_y: 66
      },
      "wizzard" => {
        min_x: 60,
        max_x: 62,
        min_y: 84,
        max_y: 89
      },
      "wenda" => {
        min_x: 24,
        max_x: 26,
        min_y: 70,
        max_y: 74
      },
      "waldo" => {
        min_x: 27,
        max_x: 29,
        min_y: 31,
        max_y: 36
      },
      "woof" => {
        min_x: 60,
        max_x: 62,
        min_y: 41,
        max_y: 45
      }
    }
  }
end