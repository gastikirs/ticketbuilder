import React from 'react';

import './Square.css';

class Square extends React.Component {

    state = {
        options: ['J','Q','K','A','HIGH4','HIGH3','HIGH2','HIGH1','WILD','BONUS', 'FS']
    }

    _onChange(e) {
        this.props.onChange(this.state.options.indexOf(e.target.value), this.props.indexPos)
    }

    render() {
        return (
            <div className="Square form-group">
                <select value={this.state.options[this.props.currentValue]} placeholder="Symbol" className="form-control" onChange={this._onChange.bind(this)} >
                 {this.state.options.map((x,i) => <option key={i}>{x} </option>)}
                </select>
            </div>
        );
    }
}


export default Square;