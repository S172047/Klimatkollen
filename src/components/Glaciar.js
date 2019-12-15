import React, { Component } from 'react'
import {  Jumbotron, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Stil.css'
import ButtonClose from '../images/closebutton.png'
import SeaGlac from './GlaciarSeaData'
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
                <h1>Smältande glaciärer och stigande havsnivå</h1>
                <p>
                På jorden finns det drygt 21 miljoner kubikkilometer (km3) is. Om all världens is smälter och rinner ner i havet, 
                skulle havsnivån stiga med 110 meter.
                </p>
                <p>
                Före år 2100 beräknar forskarna att havsytan kommer att stiga över en meter. Det ger konsekvenser 
                för hundratals miljoner människor som bor vid havet runtom i världen. Speciellt drabbade blir folk som 
                bor på små önationer.
                </p>
                <p>
                Mellan år 1945 och 2010 har havsnivån ökat 149,3 mm. Det vill säga ca 15 centimeter. Av dessa har 43% 
                eller 6,5 cm skett under en period av 20 år, år 1990 till 2010. Under tidsperioden 1945 till 2010 har jordens 
                glaciärer minskat med –25,158 vilket betyder 25 tusen miljarder kubikmeter is. Det är lika med 0,12% av 
                världens 21 miljoner kubikkilometer is.
                </p>
                </Col>
                <Col>
                    {/* <img className="jumbotronpic" src={GlaciarPic} alt="Tillfällig bild" /> */}
                </Col>
                </Row>
                <Row className="rowbottom">
                <Col>
                    <SeaGlac />
                </Col>
                </Row>
            </Jumbotron>
        )
    }
}
