class CardsController < ApplicationController
   def index
    @cards = Card.all

    render component: 'Cards', props: {cards: @cards}
   end

   def create
    @card = Card.create(card_params)

    render json: @card
   end

   private

   def card_params
    params.require(:card).permit(:name, :result)
   end

end
