import React, { Component } from 'react';
import './App.css';
import Centerblock from './Centerblock/Centerblock';
import Ether from './Ether/Ether';
import Footer from './Footer/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row h-100 background">
            <div className="col-md-12 text-center">
              <br></br>
              <br></br>
              <h1 className="comingSoon text-center">COMING SOON</h1>
              <br></br>
            </div> 
          </div>
          <Centerblock></Centerblock>
          <Ether></Ether>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
