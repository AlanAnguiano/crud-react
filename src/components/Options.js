import React,{ Component } from 'react';
import {Add,Delete} from './buttons';
class Options extends Component{
    render(){
        return(
            <div className="col-10 px-0 d-flex flex-row-reverse">
                <Add sendDataForm={this.props.getData}/>
                <Delete deleteData={this.props.delete}/>
            </div>
        )
    }   
}
export default Options;