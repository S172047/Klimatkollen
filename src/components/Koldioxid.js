import React, { Component } from 'react'
import {  Jumbotron, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Stil.css'
import ButtonClose from '../images/closebutton.png'
import FactoryPic from '../images/koldioxid.jpeg'
import Co2Emissions from './KoldioxidData'

export default class Koldioxid extends Component {
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
                <h1>Utsläpp av koldioxid och hur det påverkar klimatet</h1>
                <p>
                Koldioxid är en viktig gas för växter. Du har säkert hört om fotosyntesen, där växter med hjälp av 
                solenergi och vatten omvandlar koldioxid till näring för växterna. Restprodukten är syre som används 
                av djur och människor. 
                </p>
                <p>
                När växter och djur dör förmultnar de. Efter miljontalsår hamnar alla rester djupt in i marken och 
                förvandlas till fossiler. Riktigt gamla fossiler blir till petroleum och naturgas. Av dessa kan människan
                idag utvinna olika slag av bränslen, som alla kallas som ”fossila bränslen”.
                </p>
                <p>
                När människan använder fossila bränslen frigörs vid förbränningen koldioxid som hamnar ut i luften.
                Plötsligt finns det mycket mer koldioxid i luften än vad växtriket efterfrågar. Det extra koldioxid 
                bildar ett extra gaslager, som ett växthus, som hindrar värme att lämna atmosfären.
                </p>
                    </Col>
                    <Col>
                        <img className="jumbotronpic2" src={FactoryPic} alt="Tillfällig bild" />
                    </Col>
                </Row>
                <Row>>
                <Col>
                    <Co2Emissions />
                </Col>
                </Row>
            </Jumbotron>
        )
    }
}
