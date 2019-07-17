import React from 'react';
import Topbar from './components/topbar/topbar'
import Routes from './Routes';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Routes />
      </div>
    );
  }
}

export default App;
