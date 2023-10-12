class Api::V1::PlayerRecordsController < ApplicationController
    def index
      @records = PlayerRecord.order(minutes: :asc).order(seconds: :asc).first(10)

      render json: @records
    end
    
    def create
      @record = PlayerRecord.new(player_record_params)
      @record.save

      render json: @record
    end

    private 

    def player_record_params
        params.require(:player_record).permit(:name, :minutes, :seconds)
    end
end
