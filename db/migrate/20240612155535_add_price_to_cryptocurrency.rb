class AddPriceToCryptocurrency < ActiveRecord::Migration[7.1]
  def change
    add_column :cryptocurrencies, :price, :decimal
  end
end
