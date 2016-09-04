import React, { Component, PropTypes } from 'react'
import $ from "jquery";
import "jquery-ui";
import "../node_modules/jquery-ui/themes/base/theme.css";
import "../node_modules/jquery-ui/themes/base/datepicker.css";
import "../node_modules/jquery-ui/ui/widgets/datepicker.js";

export default class Calendar extends Component {
  constructor(props) {
    super(props)
  }
	
  componentDidMount() {
	  const {calendar} = this.refs;
	  
	  $( "#datepicker" ).datepicker();
  }
  
  render() {
      return (
        <input type="text" id="datepicker"/>
      )
  }
}

Calendar.propTypes = {
}
