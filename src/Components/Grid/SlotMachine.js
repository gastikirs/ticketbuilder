import React from 'react';

import './SlotMachine.css';
import Square from './Square/Square';

class SlotMachine extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      symbols: Array(15).fill(0),
    }

  }

  handleChange = (val, indexPos) => {
    let newSymbols = this.state.symbols;
    newSymbols[indexPos] = val;
    this.setState({
      symbols: newSymbols
    });

    this.props.checkFreeSpinsTicket(this.state.symbols);

  }

  render() {
    return (
      <div className="SlotMachine">
        <div className="row">
          <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={0} /></div>
          <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={1} /></div>
          <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={2} /></div>
          <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={3} /></div>
          <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={4} /></div>
        </div>
        <div className="row">
        <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={5} /></div>
        <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={6} /></div>
        <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={7} /></div>
        <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={8} /></div>
        <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={9} /></div>
        </div>
        <div className="row">
        <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={10} /></div>
        <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={11} /></div>
        <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={12} /></div>
        <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={13} /></div>
        <div className="col-md-2"><Square onChange={this.handleChange.bind(this)} indexPos={14} /></div>
        </div>
        <div className="row">
        
        <h3>"Slot": [{this.state.symbols.join()}]</h3>
        </div>
      </div>
    )
  }

}

export default SlotMachine;