import React, {Component} from 'react';
import {connect} from "react-redux";
import List from './components/List'

class App extends Component {
  render() {
    return (
      <div>
        <List/>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({}),
  dispatch => ({})
)(App)
