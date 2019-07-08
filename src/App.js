import React, {Component} from 'react';
import {connect} from "react-redux";
import List from './components/List'
import { CITY_NAME } from './constants/config'

class App extends Component {
  render() {
    return (
      <div>
        <List cityName={CITY_NAME}/>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({}),
  dispatch => ({})
)(App)
