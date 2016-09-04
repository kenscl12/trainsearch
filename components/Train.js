import React, { Component, PropTypes } from 'react'

export default class Train extends Component {
  render() {
    const { title, departureRoute, departureTime, price } = this.props.items
    return (
	  <tr>
	      <td>{title}</td>
		  <td>{departureRoute}</td>
		  <td>{departureTime}</td>
		  <td>{price}</td>
	  </tr>
    )
  }
}

Train.propTypes = {
  train: PropTypes.shape({
    title: PropTypes.string.isRequired,
    departureRoute: PropTypes.string.isRequired,
    departureTime: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })
}
