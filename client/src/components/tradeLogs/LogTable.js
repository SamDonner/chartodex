import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames'
import { getLogs, deleteEntry } from '../../actions/logActions';
import Loading from '../Loading';

class LogTable extends Component  {
  componentDidMount() {
    this.props.getLogs();
  }
  
  deleteEntry = (id) => {
    this.props.deleteEntry(id);
  }
  renderRow = entry => {
    return (
    
      <tr key={entry.date}>
        <th scope="row">{entry.date.substr(0, 10)}</th>
        <td>{entry.base} - {entry.pair}</td>
        <td>{entry.quantity}</td>
        <td>{entry.buyPrice}</td>
        <td>{entry.sellPrice}</td>
        <td><div className={classnames({"positive sub-label": entry.profit >= 0, "negative sub-label": entry.profit < 0})}>{entry.profit}</div></td>
        <td><div className={classnames({"positive sub-label": entry.percent >= 0, "negative sub-label": entry.percent < 0})}>{entry.percent}</div></td>
        <td>
          <button className="btn btn-sm delete-coin" 
          onClick={(e) => this.deleteEntry(entry._id)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    ) 
  }

  render() {
    if (!this.props.log.loading) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Pairing</th>
            <th scope="col">Quantity</th>
            <th scope="col">Buy Price</th>
            <th scope="col">Sell Price</th>
            <th scope="col">Profit (base)</th>
            <th scope="col">Profit %</th>
            <th scope="col"><i className="far fa-trash-alt"></i></th>
          </tr>
        </thead>
        <tbody>
          {this.props.log.logs.map(this.renderRow)}
        </tbody>
      </table>
    )
  } else {
    return <Loading/>
  }
  }
}

const mapStateToProps = (state) => ({
  log: state.log
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getLogs, deleteEntry}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogTable);