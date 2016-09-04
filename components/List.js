import React, { Component, PropTypes } from 'react'
import Train from '../components/Train'

export default class List extends Component {

  render() {
    const { items } = this.props
    return (
      <div>
	    <table>
		  <thead>
		    <tr>
			  <th>Номер поезда</th>
			  <th>Маршрут</th>
			  <th>Время отправления</th>
			  <th>Стоимость</th>
			</tr>
		  </thead>
		  <tbody>
		    {this.props.items.map((item, index) =>
              <Train items={item}
                    key={index}
                    />
            )}
		  </tbody>
		
		</table>
      </div>
    )
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  Train: PropTypes.node
}


