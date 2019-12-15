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
                Under de senaste 100 åren har jordens medeltemperatur ökat med nästan 1 grad. Nu är målet att temperaturökningen inte
                ska bli mer än 2 grader. Ibland kan det kännas som att 1 grad inte är så mycket. Men 1 grad högre medeltemperatur 
                betyder i själva verket flera graders variation runt om i världen. Det gör att extrema väderförhållanden, så 
                som stormar och torka, blir vanligare.
                
                </p>
                <p>
                Många ekosystem är oerhört känsliga för temperaturförändringar och redan nu har över hälften av världens alla 
                ekosystem påverkats av den temperaturökning som har skett. Forskning visar att om temperaturen ökar mer 
                än 3 grader, så ökar den därefter av egen kraft och vi människor kan då inte stoppa ytterligare temperaturökning. 
                </p>
                </Col>
                <Col>
                    {/* <img className="jumbotronpic" src={SkyPic} alt="Tillfällig bild" /> */}
                </Col>
                </Row>
                <Row className="rowbottom">
                <Col>
                    <TemperaturData />
                </Col>
                </Row>
            </Jumbotron>
        )
    }
}
