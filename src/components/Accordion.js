import React, { Component } from 'react'
import { Accordion, Card } from 'react-bootstrap'

export default class RullGardin extends Component {
    render() {
        return (
            <div>
                <h3>Gör ett val i menyn nedan för att lära dig mer</h3>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Energigaser
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Energigaser är bränslen som används i gasform. Metan är den vanligaste naturgasen, 
                                som förekommer djupt under jordskorpan. Andra naturgaser är etan, propan och butan. 
                                Alla dessa är fossila bränslen och kallas även ”växthusgaser” eftersom de bidrar till 
                                uppvärmningen av jorden.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Flytande bränslen
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
                            Cement
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                            Cement är ett viktigt råmaterial i byggnadsindustrin och används i stor utsträckning vid 
                            framställning av betong och murbruk. Dess viktigaste egenskap är att den blir väldigt hård, 
                            när den blandas med vatten. Cement framställs genom uppvärmning av kalksten och lera. Då 
                            uppvärmningen kräver värme upp till 1500 grader Celsius är framställningen mycket energikrävande 
                            och förbränningen leder till höga halter av koldioxid.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Gasfackling
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
                            Fasta bränslen
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                            Av de fossila bränslen i fast form är stenkol och brunkol de allra mest kända och har använts 
                            i årtusenden. Kolkraftverk producerar elektricitet och spillenergin används i form av fjärrvärme. 
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}
