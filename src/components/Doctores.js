import React, { Component, createRef } from 'react'
import Global from './Global'
import axios from 'axios';
import DetalleDoctor from './DetalleDoctor';

export default class Doctores extends Component {
    
    state = {
        doctores: [],
        idDoctor: 0
    }

    loadDoctores = () => {
        var idHospital = this.props.idhospital;
        var request = "api/Doctores/DoctoresHospital/";
        var url = Global.urlDoctores + request + idHospital;

        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                doctores: response.data,
                idDoctor: 0
            })
        })

    }

    mostrarDetalleDoctor = (idDoctor) => {
        this.setState({
            idDoctor: idDoctor
        })
    }

    

    componentDidUpdate = (oldProps) =>{
        if(oldProps.idhospital != this.props.idhospital){
            this.loadDoctores();
        }
    }

    componentDidMount = () => {
        this.loadDoctores();
    }


  render() {
    return (
      <div>
        <h2>Doctores del hospital: {this.props.idhospital}</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Especialidad</th>
                    <th>Salario</th>
                    <th>Id Hospital</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.doctores.map((doctor, index) => {
                        return(
                            <tr key={index}>
                                <td>{doctor.apellido}</td>
                                <td>{doctor.especialidad}</td>
                                <td>{doctor.salario}</td>
                                <td>{doctor.idHospital}</td>
                                <td>
                                    <button 
                                    onClick={ () => {
                                        this.mostrarDetalleDoctor(doctor.idDoctor)
                                        }} >Detalles</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>

        {
            this.state.idDoctor != 0 &&
            <DetalleDoctor iddoctor={this.state.idDoctor}/>
        }

      </div>
    )
  }
}
