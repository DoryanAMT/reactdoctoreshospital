import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';


export default class Hospitales extends Component {

    state = {
        hospitales : []
    }

    loadHospitales = () => {
        let request = "/webresources/hospitales";
        let url = Global.urlHospitales+request
        axios.get(url).then(response => {
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales();
    }
  render() {
    return (
      <div>
        <h1>Hospitales</h1>
        <table className='table table-light'>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nombre</td>
                    <td>Direccion</td>
                    <td>Telefono</td>
                    <td>Camas</td>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.hospitales &&
                    this.state.hospitales.map((hospital,index) => {
                        return(
                            <tr key={index}>
                                <td>{hospital.idhospital}</td>
                                <td>{hospital.nombre}</td>
                                <td>{hospital.direccion}</td>
                                <td>{hospital.telefono}</td>
                                <td>{hospital.camas}</td>
                            </tr>
                        );
                    })

                }
            </tbody>
        </table>
      </div>
    )
  }
}
