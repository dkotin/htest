import React, {Fragment} from 'react'
import { Redirect, Route, Switch } from 'react-router'
import List from './components/List'
import ItemDetails from './components/ItemDetails'
import NotFound from './components/NotFound'

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/details/:id' component={ItemDetails} />
        <Route path='/' component={List} exact/>
        <Route path="/not-found" component={NotFound}/>
        <Redirect to="/not-found"/>
      </Switch>
    </React.Fragment>
  )
}

export default Routes
