import React, { Component } from 'react'
import { Jumbotron, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Stil.css'
import ButtonClose from '../images/closebutton.png'
import CO2 from '../images/koldioxid2.jpeg'
import KoldioxidData from './KoldioxidData'
import RullGardin from './Rullgardin'
import AudioPlayer from './AudioPlayer'
import Ljudfil from '../audio/koldioxid.mp3'

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
                <h1>Koldioxidutsläpp och hur det påverkar klimatet</h1>
                <p>
                Koldioxid är en viktig gas för växter. Du har säkert hört om fotosyntesen, där växter med hjälp av 
                solenergi och vatten omvandlar koldioxid till näring för växterna. Restprodukten är syre som används 
                av djur och människor. 
                </p>
                <p>
                När växter och djur dör förmultnar de. Efter miljontals år omvandlas de förmultnade resterna som nu finns djupt in 
                i marken till fossiler. Riktigt gamla fossiler blir till petroleum och naturgas. Av dessa kan människan
                idag utvinna olika slag av bränslen, som alla kallas för ”fossila bränslen”.
                </p>
                <p>
                När människan använder fossila bränslen släpps också koldioxid ut i luften.
                Plötsligt finns det mycket mer koldioxid i luften, mer än vad växtriket efterfrågar. Det extra koldioxidet 
                bildar ett gaslager högt upp i atmosfären. Lite som ett växthus, som hindrar värme att lämna atmosfären.
                </p>
                <p>
                Det är tack vare fossila bränslen som vi har kunnat utveckla världen så snabbt sedan 1800-talet. 
                Fossila bränslen har gett människan en enorm kraft att åka snabbare, producera mer saker, justera 
                värme, kyla och mycket mer. Hela den moderna världen är uppbyggd genom fossila bränslen. År 2019 är fossila
                bränslen fortfarande en mycket stor källa till världens energiförbrukning då de står för 80% av förbrukningen.
                </p>
                <p>
                För att kunna minska de fossila utsläppen krävs alternativa energiformer, det som kallas för förnybar energi. 
                Exempel på förnybar energi är sol, vind-och vattenkraft. Det tar lång tid att växla energikällor i hela världen. 
                Därför kommer det behövas ny teknik som under tiden tar bort koldioxid ur atmosfären. Det heter ”negativa utsläpp” 
                och är mycket positivt, trots namnet.
                </p>
                <AudioPlayer ljud={{fil: Ljudfil}} />
                    </Col>
                    <Col>
                        <img className="jumbotronpic2" src={CO2} alt="Koldioxidets kretslopp" />
                    </Col>
                </Row>
                <Row className="rowbottom">
                <Col>
                    <KoldioxidData />
                </Col>
                <Col className="col_rull">
                    <RullGardin />
                </Col>
                </Row>
            </Jumbotron>
        )
    }
}
