import React, { Component } from 'react'
import { Accordion, Card } from 'react-bootstrap'

import EnergiGas from '../images/energigas.png'
import FlytandeBransle from '../images/flytande.png'
import Cement from '../images/cement.png'
import GasFackling from '../images/gasfackling.png'
import FastBransle from '../images/fast.png'
import ArrowDown from '../images/arrow_down.png'

export default class Rullgardin extends Component {
    render() {
        return (
            <div>
                <h3>Gör ett val i menyn nedan för att lära dig mer</h3>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <img className="co2-ikoner" src={EnergiGas} alt="Ikon för energigas" />
                            Energigaser <img className="arrowdown" src={ArrowDown} alt="Pil som pekar nedåt" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Energigaser är bränslen som används i gasform. Alla dessa är fossila bränslen och kallas även 
                                ”växthusgaser” eftersom de bidrar till uppvärmningen av jorden.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <img className="co2-ikoner" src={FlytandeBransle} alt="Ikon för flytande bränsle" />
                            Flytande bränslen <img className="arrowdown" src={ArrowDown} alt="Pil som pekar nedåt" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Petroleum, som även kallas för råolja, mineralolja eller bergolja är en vätska 
                                med höga halter av grundämnet kol. Produkter som produceras av petroleum är bensin, 
                                diesel och gasol. De flesta av våra bilar, bussar, mopeder och flygplan drivs idag
                                med flytande bränslen.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <img className="co2-ikoner" src={Cement} alt="Ikon för cement" />
                            Cement <img className="arrowdown" src={ArrowDown} alt="Pil som pekar nedåt" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                            Cement är ett viktigt råmaterial i byggnadsindustrin och används i stor utsträckning vid 
                            framställning av betong och murbruk. Cement framställs genom uppvärmning av kalksten och lera. Då 
                            uppvärmningen kräver värme upp till 1500 grader celsius är framställningen mycket energikrävande 
                            och förbränningen leder till utsläpp av koldioxid.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            <img className="co2-ikoner" src={GasFackling} alt="Ikon för gasfackling" />
                            Gasfackling <img className="arrowdown" src={ArrowDown} alt="Pil som pekar nedåt" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                            Gasfackling innebär att man bränner upp överskottsgas på oljefält och i oljeindustrin utan 
                            att ta tillvara värmeenergin. Gasfackling sker i stor skala och kunde utnyttjas som fjärrvärme 
                            eller omvandlas till andra drivmedel istället för att låta den outnyttjad brinna upp.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            <img className="co2-ikoner" src={FastBransle} alt="Ikon för fast bränsle" />
                            Fasta bränslen <img className="arrowdown" src={ArrowDown} alt="Pil som pekar nedåt" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                            Av fossila bränslen i fast form är stenkol och brunkol de allra mest kända och har använts 
                            i årtusenden. Kolkraftverk producerar elektricitet och spillenergin används i form av fjärrvärme.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}
