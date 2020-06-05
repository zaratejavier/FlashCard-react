import React from "react"
import PropTypes from "prop-types"
class Card extends React.Component {
  render () {
    return (
      <div>
          {this.props.card.result}
          <a href="/">Home</a>
      </div>
    );
  }
}

export default Card
