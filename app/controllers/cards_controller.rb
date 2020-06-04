class CardsController < ApplicationController
   def index
    @cards = Card.all

    render component: 'Cards', props: {cards: @cards}
   end

end
