import React, { Component } from 'react'
import {  Jumbotron, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Stil.css'
import ButtonClose from '../images/closebutton.png'
// import SkyPic from '../images/sky.jpg'
import TemperaturData from "./TemperaturData"

export default class Temperatur extends Component {
    render() {
        return (
            <Jumbotron>
                <Row>
                    <Col>
                        <Link to="/Hem">
                        <img className="btn-close" src={ButtonClose} alt="Knapp för att återgå till startsidan" />
                        </Link>
                    </Col>
                </Row>
                <Row>
                <Col className="coltext">
                <h1>Temperaturens påverkan</h1>
                <p>
                Under de senaste 100 åren har jordens medeltemperatur ökat med nästan 1 grad. Nu är målet att den inte skall bli 
                mer än 2 grader. Ibland kan det kännas att en grad inte är så mycket. Men en grads medeltemperatur betyder i 
                själva verket flera graders variation runt om i världen. Extrema väderförhållanden kommer att öka. Vi hör redan 
                idag om ökade stormar, mer torka och katastrofer runt om i världen.
                </p>
                <p>
                Många ekosystem är oerhört känsliga för temperaturförändringar och redan nu har över hälften av världens alla 
                ekosystem påverkats, då människan höjt temperaturen med 1 grad.  Forskning visar att om temperaturen ökar mer 
                än 3 grader, så ökar den därefter av egen kraft och människan kan inte stoppa det. 
                </p>
                </Col>
                <Col>
                    {/* <img className="jumbotronpic" src={SkyPic} alt="Tillfällig bild" /> */}
                </Col>
                </Row>
                <Row>
                <Col>
                    <TemperaturData />
                </Col>
                </Row>
            </Jumbotron>
        )
    }
}
