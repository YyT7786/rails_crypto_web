class Cryptocurrency < ApplicationRecord

def price_fluctuate_percentage_status
    rand(2).zero?
end

def price_fluctuate_percentage
    (Random.new.rand(0.0 .. 20.0).round(1)).to_s + "%"
end

def volume
    Random.new.rand(0 .. 100000000000)
end

def circulating_supply
    Random.new.rand(0 .. 100000000000)
end

def total_supply
    Random.new.rand(0.0 .. 1000.0).round(2)
end

def market_cap
    Random.new.rand(0 .. 100000000000)
end

end
