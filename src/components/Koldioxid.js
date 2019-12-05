import React, { Component } from 'react'
import {  Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Stil.css'
import ButtonClose from '../images/closebutton.png'

export default class Koldioxid extends Component {
    render() {
        return (
            <Jumbotron>
                <Row>
                    <Col>
                        <Link to="/">
                        <img className="btn-close" src={ButtonClose} alt="Knapp för att återgå till startsidan" />
                        </Link>
                    </Col>
                </Row>
                <Row>
                <Col>
                <h2>Utsläpp</h2>
                <p>
                Koldioxid är en viktig gas för växter. Du har säkert hört om fotosyntesen, där växter med hjälp av solenergi och 
                vatten omvandlar koldioxid till druvsocker, ett näringsämne för växterna. 
                Restprodukten blir syre som används av djur och människor. Naturen har skapat en perfekt cirkel som fungerar när den 
                är i balans. När växter och djur dör förmultnar de. Efter miljontalsår hamnar alla rester djupare och djupare in i marken och 
                förvandlas så småningom till fossiler. Riktigt gamla fossiler blir till petroleum och naturgas. 
                Av dessa kan människan idag utvinna olika slag av bränslen, som alla kallas som ”fossila bränslen”.
                </p>
                <p>
                När människan använder dessa miljoner år gamla fossila bränslen i olika ändamål frigörs vid förbränningen koldioxid 
                som hamnar ut i luften, atmosfären. Plötsligt finns det mycket mer koldioxid i luften än vad växtriket efterfrågar.
                Det extra koldioxid bildar ett extra gaslager, som ett tak, som hindrar värme att stråla upp till ozonlagret. 
                Då stannar värmen istället nära marken och ökar temperaturen på hela planeten.
                I tabellen kan du läsa om olika typer av utsläpp som ökar koldioxidmängden i atmosfären:
                </p>
                </Col>
                <Col></Col>
                </Row>
            </Jumbotron>
        )
    }
}
