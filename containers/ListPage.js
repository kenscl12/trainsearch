import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'

class ListPage extends Component {
  constructor(props) {
	  super(props)
  }
  
  isResult(){
	  if(this.props.params.fromStation.toLowerCase() != "москва" || this.props.params.toStation.toLowerCase() != "самара"){
		  return false;
	  }
	  return true;
  }
  
  renderNoResults() {
	  return (
		<p>Ничего не найдено</p>
	  )
  }
  
  render() {
      const { trains } = this.props
      return (
        <div>
		  {this.isResult() ? <List items={trains} /> : this.renderNoResults()}
        </div>
      )
  }
}

ListPage.propTypes = {
  trains: PropTypes.array
}

function mapStateToProps(state, ownProps) {
	
  const {
    entities: { trains }
  } = state
	
  return {
    trains
  }
}

export default connect(mapStateToProps, {
})(ListPage)

