class Api::V1::CheckPositionController < ApplicationController
  def index
    response = {
      :data => 1,
    }

    render json: response
  end

  # Use callbacks to share common setup or constraints between actions.

  # Only allow a list of trusted parameters through.
  # def post_params
  #   params.require(:post).permit(:title, :body, :image)
  # end
end
