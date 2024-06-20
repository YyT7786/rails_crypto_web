class CryptocurrenciesController < ApplicationController

    def create
        @cryptocurrency = Cryptocurrency.new(cryptocurrency_params)
        if @cryptocurrency.save
            redirect_to root_path, notice: 'Cryptocurrency was successfully created.'
        end
    end

    def update
        if @cryptocurrency.update(cryptocurrency_params)
          redirect_to root_path, notice: 'Cryptocurrency was successfully updated.'
        else
          render :edit
        end
      end
    
    def destroy
        @cryptocurrency.destroy
        redirect_to root_path, notice: 'Cryptocurrency was successfully destroyed.'
    end

    private

    def cryptocurrency_params
        params.require(:cryptocurrency).permit(:name, :price)
    end
    
end