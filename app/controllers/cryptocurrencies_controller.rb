class CryptocurrenciesController < ApplicationController

    def create
        @cryptocurrency = Cryptocurrency.new(cryptocurrency_params)
        if @cryptocurrency.save
            redirect_to root_path, notice: 'Post was successfully created.'
        end
    end

    private

    def cryptocurrency_params
        params.require(:cryptocurrency).permit(:name, :price)
    end
    
end