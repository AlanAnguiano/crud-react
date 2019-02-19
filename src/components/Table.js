import React, { Component } from 'react';
import Registros from './Registros';

import './css/Table.css'

class Table extends Component{
    
    constructor() {
        super();
        this.state ={
            registros: []
        };
        this.dibujaTabla = this.dibujaTabla.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.edit = this.edit.bind(this);
    }
    deleteRow= (key) =>{
        var newRegistros = this.state.registros.filter((el) =>{
            return el.id !== key;
        })
        this.setState({registros:newRegistros})
    }
    
    edit=(key) =>{
    }
    dibujaTabla = (r)=>{
        if (r.length === 0) {
            return (
                <tr>
                    <th className="text-center">Sin datos.</th>
                </tr>
            )
        } else {

            return r.map((row, i) => <Registros key={i} saveEdit={this.edit} del={this.deleteRow} registro={row} />);
        }
        
    }

    componentWillReceiveProps(nextProps){

        if(!(this.props.addRow.id === nextProps.addRow.id)){
            var row = nextProps.addRow;
            if (!(Object.keys(row).length === 0)) {

                var arrayReg = this.state.registros;
                arrayReg.push(row)
                this.setState({
                    registros: arrayReg
                })
            }
        }else if(nextProps.deleteAll){
            this.eliminarTabla();           
            this.props.reset(false);

        }
    }
    eliminarTabla=()=>{    
        this.setState({
            registros: []
        });
    }
    render(){
        return(
                <table className="table table-striped ">
                    <thead className="bg-primary shadow-sm" >
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Genero</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.dibujaTabla(this.state.registros)}
                    </tbody>
                </table>
        )
    }
}
export default Table;