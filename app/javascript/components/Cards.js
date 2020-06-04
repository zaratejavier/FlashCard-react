import React, { useReducer } from "react"
import PropTypes from "prop-types"
class Cards extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cards: this.props.cards,
    }
  }

  renderCards(){
    console.log('Render Cards')
    const {cards} = this.state;
    return cards.map((card) => (
      <li key={card.id}>
        {/* this will display the cards */}
        {`${card.name}`}
      </li>
    ))
  }


  render(){
    return (
      <div>
        <div></div>
        <ul>{this.renderCards()}</ul>
      </div>
    )
  }
}

Cards.propTypes = {
  cards: PropTypes.array
};
export default Cards
