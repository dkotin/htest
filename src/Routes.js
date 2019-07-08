import React, {Fragment} from 'react'
import { Route, Switch } from 'react-router'
import List from './components/List'
import ItemDetails from './components/ItemDetails'

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/details/:id' component={ItemDetails} />
        <Route path='/' component={List} />
        {/*<Route path='/items' component={Item} />*/}
      </Switch>
    </React.Fragment>
  )
}

export default Routes
