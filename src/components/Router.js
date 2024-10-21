import React, { Component } from 'react'
import MenuHospitales from './MenuHospitales'
import Home from './Home'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Doctores from './Doctores'

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
                    
                </Routes>
        </BrowserRouter>
      </div>
    )
  }
}