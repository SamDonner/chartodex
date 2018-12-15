import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import AddEntry from './AddEntry';
import LogTable from './LogTable';


const TradeLogs = (props) => {
  return (
    <div className="log-container">
    <main className={classNames({'container': (window.innerWidth > 768)})}>
        <div >
        <h1 className="heading">Trade Logs</h1>
        <Link to='/charts' ><h6 className="back-link heading mt-4">Back to Charts</h6></Link>
        </div>
        <hr className="my-2" />
        <div className="center">
          <AddEntry />
          <LogTable />
        </div>
    </main>
    </div>
  )
}
export default TradeLogs;