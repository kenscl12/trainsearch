import React, { Component, PropTypes } from 'react'
import Calendar from '../components/Calendar'

var errors = {
	fromStationStyle: {},
	toStationStyle: {},
	count: 0
  }

export default class Explore extends Component {
  constructor(props) {
    super(props)
	this.handleGoClick = this.handleGoClick.bind(this)
  }
  
  validateForm(){
	  
	errors.count = 0
	  
	if(!/^[a-zA-Zа-яА-Я]*$/g.test(this.refs.fromStation.value) || this.refs.fromStation.value.length < 1){
	  errors.fromStationStyle = {borderColor: "red"};
	  errors.count++
	} else {
	  errors.fromStationStyle = {};
	}
	
	if(!/^[a-zA-Zа-яА-Я]*$/g.test(this.refs.toStation.value) || this.refs.toStation.value.length < 1){
	  errors.toStationStyle = {borderColor: "red"};
      errors.count++
	} else {
	  errors.toStationStyle = {};
	}
	  
	  
	if(errors.count > 0){
      return false;
	}
	
	return true;
  }
  
  getInputValue() {
	  
	if(this.validateForm()){
      return {
	    fromStation: this.refs.fromStation.value,
        toStation: this.refs.toStation.value
	  }
	} else {
	  return {
		fromStation: this.props.values.fromStation,
        toStation: this.props.values.toStation
	  }
	}
	  
	
	
	
  }

  handleGoClick() {
	
      this.props.onChange(this.getInputValue())
	
  }

  render() {
    return (
      <div>
        <p>Станция отправления:</p>
        <input size="45"
               ref="fromStation"
			   style={errors.fromStationStyle}
			   />
		<p>Станция назначения:</p>
        <input size="45"
               ref="toStation"
			   style={errors.toStationStyle}
			   />
		<p>Дата:</p>
        <Calendar />
			   <br /><br />
        <button onClick={this.handleGoClick}>
          Ту-ту!
        </button>
      </div>
    )
  }
}

Explore.propTypes = {
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
