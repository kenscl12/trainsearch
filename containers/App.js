import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Explore from '../components/Explore'

class App extends Component {
  constructor(props) {
	super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(nextValues) {
    browserHistory.push(`/${nextValues.fromStation}/${nextValues.toStation}`)
  }
  
  render() {
	const { children, inputValues } = this.props
	
    return (
	  
      <div>
	    <h3>Приложение поиска поездов</h3>
	    <Explore values={inputValues}
                 onChange={this.handleChange}
                 />
	    {children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
  inputValues: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
	inputValues: {
		fromStation: ownProps.location.pathname.substring(1).split("/")[0],
		toStation: ownProps.location.pathname.substring(1).split("/")[1]
	}
  }
}


export default connect(mapStateToProps, {
})(App)