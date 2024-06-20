class AddDetailsToCryptocurrency < ActiveRecord::Migration[7.1]
  def change
    add_column :cryptocurrencies, :image_url, :string
  end
end
