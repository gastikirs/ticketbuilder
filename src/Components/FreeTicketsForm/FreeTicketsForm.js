import React from 'react';

import './FreeTicketsForm.css';

class FreeTicketsForm extends React.Component {

  state = {
    show: false,
    from: 0,
    to: 0,
    type: 0,
    win: 0,
    icon: 0,
    winAmount: 0,
    times: 0
  }

  onChangeHandler(e) {
    //alert(e.target.name);
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }

  handleCheckboxChange = (e) => {
    let val = e.target.checked ? true : false
    this.setState({
      show: val
    })
  }

  render() {

    return (
      <div className="FreeTicketsForm container">
        <h2>FreeTickets</h2>
        <div className="row">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" onChange={this.handleCheckboxChange} value={this.state.show} />
            <label className="form-check-label">Force free tickets</label>
          </div>
        </div>
        { this.props.isFreeSpinsTicket || this.state.show ?
        <div>
          <div className="row">
            <div className="col-md-2"> From <input className="form-control" key="from" name="from" type="number" onChange={this.onChangeHandler.bind(this)} /></div>
            <div className="col-md-2"> To <input className="form-control" type="number" name="to" onChange={this.onChangeHandler.bind(this)} /></div>
            <div className="col-md-2"> Type <input className="form-control" type="text" name="type" onChange={this.onChangeHandler.bind(this)} placeholder="1" /></div>
            <div className="col-md-2"> Win <input className="form-control" name="win" onChange={this.onChangeHandler.bind(this)} type="number" /></div>
          </div>
          <h3>ScatterPays</h3>
          <div className="row">

            <div className="col-md-2"> Icon <input className="form-control" key="from" name="icon" type="number" onChange={this.onChangeHandler.bind(this)} /></div>
            <div className="col-md-2"> WinAmount <input className="form-control" key="winAmount" name="winAmount" type="number" onChange={this.onChangeHandler.bind(this)} /></div>
            <div className="col-md-2"> Times <input className="form-control" key="times" name="times" type="number" onChange={this.onChangeHandler.bind(this)} /></div>
          </div>

          <p>"FreeTickets": &#123;"Id":1, "BetLine":1.0, "Type":{this.state.type}, "To":{this.state.to}, "From": {this.state.from},"Win":{this.state.win}&#125;</p>
          <p>"ScatterPays": &#123;"Icon":{this.state.icon}, "WinAmount":{this.state.winAmount}, "Times":{this.state.times}&#125;</p>
        </div> : null
        }
      </div>
    );
  }
}


export default FreeTicketsForm;