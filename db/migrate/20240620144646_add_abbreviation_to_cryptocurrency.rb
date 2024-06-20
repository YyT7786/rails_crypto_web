class AddAbbreviationToCryptocurrency < ActiveRecord::Migration[7.1]
  def change
    add_column :cryptocurrencies, :abbreviation, :string
  end
end
