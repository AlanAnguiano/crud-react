import React, { Component } from 'react';

var isDisabled=true;

class Add extends Component{
    constructor() {
        super();
        this.state = {
            id: 0,
            Nombre: "",
            ciudad:"",
            sexo:"M"
        }
        this.validateIsDisabled = this.validateIsDisabled.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleSex = this.handleSex.bind(this)
        this.sendData = this.sendData.bind(this);
    }
    handleName(e){
        this.setState({Nombre: e.target.value});
        this.validateIsDisabled();
    }
    handleCity(e){
        this.setState({ciudad: e.target.value});
        this.validateIsDisabled();
    }
    handleSex(e){
        this.setState({sexo: e.target.value});
        this.validateIsDisabled();
    }
    validateIsDisabled(){
        var { Nombre, ciudad } = this.state;
        isDisabled= (Nombre === "" || ciudad === "");
    }
    
    sendData(){
        this.refs.nameIn.value ="";
        this.refs.cityIn.value ="";
        this.refs.sexIn.value ="";

        this.setState({
            id: (this.state.id+1)
        })
        this.props.sendDataForm(this.state);
    }
    render(){
        return(
            <div>
                <button type="button" className="btn btn-primary ml-3" data-toggle="modal" data-target="#ModalAgregar">Agregar</button>
                
                <div className="modal fade" id="ModalAgregar" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Agrega a un BrightCoder</h5>
                                <button type="button"  className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="needs-validation" noValidate>
                                    <div className="form-group">
                                        <label >Nombre</label>
                                        <input type="text" id="addName" ref="nameIn" onChange={this.handleName} required={true} className="form-control"  aria-describedby="nameHelp" placeholder="Escribe el nombre"/>
                                        <div className="invalid-feedback">
                                            Escribe un nombre valido.
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Ciudad</label>
                                        <input type="text" id="addCity" ref="cityIn" onChange={this.handleCity} className="form-control" placeholder="Nombre de la ciudad"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Sexo</label>
                                        <select onChange={this.handleSex}defaultValue="M" ref="sexIn" className="custom-select">
                                            <option value="M">Masculino</option>
                                            <option value="F">Femenino</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="submit" disabled={isDisabled} onClick={this.sendData} data-dismiss="modal" className="btn btn-primary">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Delete extends Component{
    deleteData(){
        this.props.deleteData(true);
    }
    render(){
        return(
            <div>
                <button type="button" className="btn btn-danger ml-3" data-toggle="modal" data-target="#ModalEliminar">Eliminar todo</button>

                <div className="modal fade" id="ModalEliminar" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Se borraran todos los registros.</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <span>Desea continuar?</span>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" onClick={this.deleteData.bind(this)} data-dismiss="modal" className="btn btn-primary">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Edit extends Component{
    constructor(){
        super();
        this.state = {
            id:0,   
            Nombre:"",
            ciudad:"",
            sexo:""
        }
        this.handleName = this.handleName.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleSex = this.handleSex.bind(this);
    }
    handleName(e){
        this.setState({Nombre: e.target.value});
        this.validateIsDisabled();
    }
    handleCity(e){
        this.setState({ciudad: e.target.value});
        
        this.validateIsDisabled();
    }
    handleSex(e){
        this.setState({sexo: e.target.value});
        this.validateIsDisabled();
    }
    validateIsDisabled(){
        var { Nombre, ciudad } = this.state;
        isDisabled = (Nombre === "" || ciudad === "");
    }
    editar(){
        this.props.data(true);
    }
    render(){
        return(
            <div>
                <button type="button" className="btn btn-info ml-3" onClick={this.editar.bind(this)}>Editar</button>
            </div>
        )
    }
}
export{
    Add, 
    Delete,
    Edit
}