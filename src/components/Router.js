import React, { Component } from 'react'
import MenuHospitales from './MenuHospitales'
import Home from './Home'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Doctores from './Doctores'
import CreateHospitales from './CreateHospitales'
import Hospitales from './Hospitales'

export default class Router extends Component {
  render() {
    function DoctoresElement(){
        var {idhospital} = useParams();
        return <Doctores idhospital={idhospital}/>
    }
    return (   
      <div>
        <BrowserRouter>
            <MenuHospitales/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/doctores/:idhospital" element={<DoctoresElement/>}/>
                    <Route path='/create' element={<CreateHospitales/>}/>
                    <Route path='/hospitales' element={<Hospitales/>}/>
                </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
