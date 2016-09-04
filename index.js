import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import "./style.css";

const preloadedState = {
	entities: {
		trains: [
			{id: 1, title: "№ 047Й", departureRoute: "Москва - Саратов", departureTime: "14:06 | 05.09.2016", price: "958 руб."},
			{id: 2, title: "№ 009Г", departureRoute: "Москва - Саратов", departureTime: "18:06 | 05.09.2016", price: "1158 руб."},
			{id: 3, title: "№ 017М", departureRoute: "Москва - Саратов", departureTime: "11:03 | 05.09.2016", price: "1258 руб."},
			{id: 4, title: "№ 086В", departureRoute: "Москва - Саратов", departureTime: "8:06 | 05.09.2016", price: "758 руб."},
			{id: 5, title: "№ 005Г", departureRoute: "Москва - Саратов", departureTime: "12:06 | 05.09.2016", price: "1658 руб."}
		]
	}
};

const store = configureStore(preloadedState)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
