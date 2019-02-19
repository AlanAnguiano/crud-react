import React,{ Component } from 'react';
import { Edit } from './buttons';

var editar=false;
var isDisabled=true;
class Registros extends Component{
    constructor(){
        super();
        this.state = {
            id:0,   
            Nombre: "",
            ciudad:"",
            sexo:""
        }
        this.edit = this.edit.bind(this)
        this.validateIsDisabled = this.validateIsDisabled.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleSex = this.handleSex.bind(this)
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
    componentWillMount(){
        this.setState({
            id: Number(this.props.registro.id),   
            Nombre: this.props.registro.Nombre,
            ciudad:this.props.registro.ciudad,
            sexo:this.props.registro.sexo
        })
    }
    delete(){
        var k = this.props.registro.id;
        console.log(k);
        this.props.del(k);
    }
    closeEdit(){
        editar = false;
        this.forceUpdate();
    }
    editarData(){
        console.log("entro");
        var refer = this.refs;
        this.setState({
            Nombre:refer.nameIn.value,
            ciudad:refer.cityIn.value,
            sexo: refer.sexIn.value
        })
        editar=false;
    }
    edit(isEdit){
        editar = isEdit;
        this.forceUpdate();      
    }
    render(){
        if(!editar){
            return(
                <tr>
                    <th>{this.state.Nombre}</th>
                    <th>{this.state.ciudad}</th>
                    <th>{this.state.sexo}</th>
                    <th className="d-flex">
                        <Edit data={this.edit} />
                        <button type="button" onClick={this.delete.bind(this)} className="btn btn-danger ml-3" >Eliminar</button>
                    </th>
                </tr>
            )
        }
        return(
            <tr>
                <th>
                    <input type="text" value={this.state.Nombre} ref="nameIn" required={true}
                    className="form-control" onChange={this.handleName} aria-describedby="nameHelp" placeholder="Escribe el nombre"/>
                </th>

                <th>
                    <input type="text" value={this.state.ciudad} ref="cityIn"  required={true}
                    className="form-control" onChange={this.handleCity} aria-describedby="nameHelp" placeholder="Escribe el nombre"/>
                </th>

                <th>
                    <select defaultValue={this.state.sexo} ref="sexIn" onChange={this.handleSex} className="form-control">
                        <option value="M" >M</option>
                        <option value="F" >F</option>
                    </select>
                </th>

                <th className="d-flex">
                    <button type="button" disabled={isDisabled} onClick={this.editarData.bind(this)} className="btn btn-success ml-3" >Aceptar</button>
                    <button type="button" onClick={this.closeEdit.bind(this)} className="btn btn-danger ml-3" >Cancelar</button>
                </th>
            </tr>
        )
    }   
}
export default Registros;