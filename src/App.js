import React, { Component } from 'react';
import './App.css';
import './Foundation/bootstrap.css';
import './Foundation/bootstrap-grid.css';

import SlotMachine from './Components/Grid/SlotMachine';
import OutputJson from './Components/RightOutput/OutputJson';
import FreeTicketsForm from './Components/FreeTicketsForm/FreeTicketsForm';

class App extends Component {

  state = {
    isFreeSpinsTicket: false,
    isBonusTicket: false
  }

  handleIsFreeSpinsTicket = (e) => {
    let count = 0;
    e.forEach(val => {
      if(val===10) {
        count++;
      }
    });
    this.setState({
      isFreeSpinsTicket: count >= 3 ? true : false
    })

  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-6">
            <SlotMachine
              checkFreeSpinsTicket={this.handleIsFreeSpinsTicket} />
          </div>
          <div className="col-6"><OutputJson /></div>
        </div>
        <div className="row">
          <div className="col-md-4"> <FreeTicketsForm isFreeSpinsTicket={this.state.isFreeSpinsTicket} /></div>
        </div>
      </div>
    );
  }
}

export default App;
