class HomepageController < ApplicationController
    def index
        @cryptocurrency = Cryptocurrency.new
        @cryptocurrencies = Cryptocurrency.all
    end
end
