class Api::V1::SessionController < ApplicationController
    def create
      @session = Session.new()
      @session.save  

      render json: @session
    end

    def destroy
      id = params[:id]
      session = Session.find(id)
      session.destroy
    end
end
