import React from "react"
import PropTypes from "prop-types"
class Card extends React.Component {
  render () {
    return (
      <div>
          <h1>{this.props.card.result}</h1>
          <br/>
          <a href="/">Home</a>
      </div>
    );
  }
}

export default Card
