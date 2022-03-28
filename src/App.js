import React from 'react';
import Home from './page/Home';
import Login from './page/Login';
// import Player from './page/Player';
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const isLogged = localStorage.getItem('isLogged');

    this.state = {
      isLogged,
    };
  }
  login = () => {
    console.log('Sono stato chiamato');
    this.setState({ isLogged: true });
  };

  render() {
    return this.state.isLogged ? (
      <Home />
    ) : (
      <Login loginCallBack={this.login} />
    );
  }
}
