class CreateCryptocurrencies < ActiveRecord::Migration[7.1]
  def change
    create_table :cryptocurrencies do |t|
      t.string :name

      t.timestamps
    end
  end
end
