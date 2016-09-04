import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import ListPage from './containers/ListPage'

export default (
  <Route path="/" component={App}>
    <Route path="/:fromStation/:toStation" component={ListPage} />
  </Route>
)


