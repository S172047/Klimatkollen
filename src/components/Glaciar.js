import React, { Component } from 'react'
import {  Jumbotron, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Stil.css'
import ButtonClose from '../images/closebutton.png'
import SeaGlac from './SeaGlacLevel'
// import GlaciarPic from '../images/glaciars.jpg'

export default class Glaciar extends Component {
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
                <h1>Smältande glaciärer och stigande havsnivåer</h1>
                <p>
                På jorden finns det drygt 21 miljoner kubikkilometer (km3) is.
                Om all världens is smälter och rinner ner i havet, skulle havsnivån stiga med 110 meter.
                </p>
                <p>
                Före år 2100 beräknar forskarna att havsytan kommer att stiga över en meter. Det ger konsekvenser 
                för hundratalsmiljoner människor som bor vid havet runtom i världen. Speciellt drabbade blir folk som 
                bor i små önationer.
                </p>
                </Col>
                <Col>
                    {/* <img className="jumbotronpic" src={GlaciarPic} alt="Tillfällig bild" /> */}
                </Col>
                </Row>
                <Row>
                <Col>
                    <SeaGlac />
                </Col>
                </Row>
            </Jumbotron>
        )
    }
}
