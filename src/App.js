import React, { Component } from 'react';
import logo from './images/baivi-small.jpg';
import './App.css';

class App extends Component {
  go(screen){
    this.props.history.push(`manhinh/${screen}`);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cúng Thất</h1>
        </header>
        <div className="App-intro">
          <ul className="buttons">
            <li onClick={()=>this.go(1)}><span>Màn Hình 1</span></li>
            <li onClick={()=>this.go(2)}><span>Màn Hình 2</span></li>
            <li onClick={()=>this.go(3)}><span>Màn Hình 3</span></li>
          </ul>

        </div>

      </div>
    );
  }
}

export default App;
