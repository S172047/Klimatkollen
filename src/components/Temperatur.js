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
                <h1>Temperaturökning</h1>
                <p>
                Jordens temperaturökning är skapad av oss människor och kallas för växthuseffekt. 
                Genom växthuseffekten stannar solens värme kvar på jorden - likt värmen i ett växthus.
                </p>
                <p>
                När vi blickar upp emot himlen känns atmosfären oändlig.  Men i själva verket är den bara en liten tunn hinna 
                på 100 kilometer som skiljer jorden från rymden. Men den delen som påverkar vädret och innehåller syre är endast 
                7–17 kilometer hög. När vi förstår att vi bara har en dryg mil syre runt hela planeten förstår vi varför 
                atmosfären inte tål så mycket utsläpp och varför temperaturen kan höjas i atmosfären. 
                </p>
                <p>
                Under de senaste 100 åren har jordens medeltemperatur ökat med nästan 1 grad. Nu är målet att den inte skall bli 
                mer än 2 grader. Ibland kan det kännas att en grad inte är så mycket. Men en grads medeltemperatur betyder i 
                själva verket flera graders variation runt om i världen. Vi hör redan idag om ökade stormar, mer torka på vissa 
                ställen och översvämningar på andra ställen. Antalet klimatkatastrofer ökar hela tiden runt om i världen.
                </p>
                <p>
                Många ekosystem är oerhört känsliga för temperaturförändringar och redan nu har över hälften av världens 
                alla ekosystem påverkats, då människan höjt temperaturen med 1 grad.  Forskning visar att om temperaturen 
                ökar mer än 3 grader, så ökar den därefter av egen kraft och människan kan inte stoppa det.
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
