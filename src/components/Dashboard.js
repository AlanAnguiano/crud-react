import React, { Component } from 'react';
import Table from './Table';

import "./css/Dashboard.css"
class Dashboard extends Component{
    render(){
        return(
            
            <div className="dash d-flex flex-column col-12 col-md-10 px-0">
                <Table addRow={this.props.add} reset={this.props.resetDel} deleteAll={this.props.delete} backState={this.props.backState}/>            
            </div>
        )
    }
}
export default Dashboard;