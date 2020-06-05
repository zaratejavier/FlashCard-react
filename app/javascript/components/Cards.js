import React, { useReducer } from "react"
import PropTypes from "prop-types"
import axios from "axios";

class Cards extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cards: this.props.cards,
    }
  }

  deleteCard(id){
    console.log("delete clicked hahha")
    console.log(id)

    axios
    .delete(`/cards/${id}`)
    .then((response) => {
      console.log(response);
      console.log(response.data);
      const newCards = this.state.cards.filter((card) =>{
        return card.id != id;
      })
      this.setState({
        cards: newCards,
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }


  renderCards(){
    console.log('Render Cards')
    const {cards} = this.state; //gets the cards from the state to use in here
    return cards.map((card) => ( //loops over the cards and will be ready to print
      <li key={card.id}>
        {/* this will display the cards */}      
        {`${card.name}`}

        <div onClick={() => this.deleteCard(card.id)}>Remove</div>
      </li>
    ))
  }

  addCard = () =>{
    console.log("clicked")

    axios
      .post('/cards', {
        name: "what is my name?",
        result: "javier",
     })
     .then((response) => {
       console.log(response.data);
       const newCard = response.data; //this gets the data that i passed in line 32 "what is my name?"
       this.setState({
         cards: [newCard, ...this.state.cards], // this add the data passed in to the state
       })
     })
     .catch((err) =>{
       console.log(err)
     })
  }


  render(){
    return (
      <div>
        <h1>Flash Cards</h1>
        <div onClick={this.addCard}>Add New Card</div>
        {/* gets the cards from the render function and will display on web */}
        <ul>{this.renderCards()}</ul> 
      </div>
    )
  }
}

Cards.propTypes = {
  cards: PropTypes.array
};
export default Cards
