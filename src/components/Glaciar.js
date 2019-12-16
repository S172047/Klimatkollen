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
                På jorden finns det drygt 21 miljoner kubikkilometer (km3) is. Det är världens största sötvattenreserv. 
                När is smälter blandas sötvatten med havsvatten och sötvattenreserven minskar. Om all världens is smälter 
                och rinner ner i havet, skulle havsnivån stiga med 110 meter.
                </p>
                <p>
                Före år 2100 beräknar forskarna att havsytan kommer att stiga över en meter. Det påverkar hundratalsmiljoner 
                människor som bor vid havet runtom i världen. Speciellt drabbade blir folk som bor i små Stilla havsnationer, 
                där öns allra högsta punkt ligger bara några meter över havet. Deras hem riskerar att försvinna för alltid!
                </p>
                <p>
                Men även många stora städer är byggda vid havet. En ökning av havsnivån på ett par meter skulle förvandla väldigt 
                många ställen på jorden. Inte bara städer utan även vägar och järnvägar skulle hamna under vatten. Stora delar av 
                många kustnära svenska städer skulle försvinna under ytan. Även stora städer som Stockholm, Göteborg och Malmö 
                skulle drabbas hårt.  
                </p>
                <p>
                När glaciärer smälter kommer den mörkare marken fram. En mörk yta värms upp snabbare än en vit yta. Det är ett 
                exempel hur klimatförändringar vid en viss situation skyndas på av förändringen i sig. Förutom människan, drabbas 
                många djurarter av förändringarna, då deras naturliga livsmiljöer förändras eller försvinner. 
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
