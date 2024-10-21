import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';

export default class DetalleDoctor extends Component {
    state = {
        doctor : []
    }
//
    
    loadDoctor = () => {
        var idDoctor = this.props.iddoctor;
        var request = "/api/Doctores/"+idDoctor;
        var url = Global.urlDoctores + request;
        axios.get(url).then(response => {
            console.log(response.data)
            this.setState({
                doctor : response.data
            })
        })
    }

    componentDidMount = () =>{
        this.loadDoctor();
    }

    componentDidUpdate = (oldProps) =>{
        if(oldProps.iddoctor != this.props.iddoctor){
            this.loadDoctor();
        }
    }
  render() {
    

    return (
      <div>
        <ul>
            <li>{this.state.doctor.apellido}</li>
            <li>{this.state.doctor.especialidad}</li>
            <li>{this.state.doctor.salario}</li>
            <li>{this.state.doctor.idHospital}</li>
        </ul>
      </div>
    )
  }
}
