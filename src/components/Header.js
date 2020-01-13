import React, { Component } from 'react'
import { Navbar, Nav, OverlayTrigger, Tooltip, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Stil.css'
import Logga from '../images/logga.png'
import KoldioxidButton from '../images/koldioxid_small.png'
import TemperaturButton from '../images/temperatur_small.png'
import GlaciarButton from '../images/glaciar_small.png'
import infoPic from "../images/info.png";

export default class Header extends Component {
    render() {
        return (
                <Navbar default collapseOnSelect>
                        <Navbar.Brand>
                        <Link to="/hem">
                            <img className="klimatlogga" src={Logga} alt="Klimatkollen logotype" />
                        </Link>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                        <ButtonToolbar>
              {["left-start"].map(placement => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      <div className="alignleft">
                        <p>
                        Det här är Klimatkollen!
                        </p>
                        <p>
                        Här kan du lära dig om klimatförändringen och hur det påverkar livet på jorden. Utforska gärna
                        diagrammen och jämför den historiska utvecklingen.
                        </p>
                      </div>
                    </Tooltip>
                  }
                >
                  <img className="hoverknapp" src={infoPic} alt="Information" />
                </OverlayTrigger>
              ))}
            </ButtonToolbar>
                            <Link to="/koldioxid">
                                <img className="smallbuttons" src={KoldioxidButton} alt="Knapp Koldioxid" />
                            </Link>
                            <Link to="/temperatur">
                                <img className="smallbuttons" src={TemperaturButton} alt="Knapp Temperatur" />
                            </Link>
                            <Link to="/glaciar">
                                <img className="smallbuttons" src={GlaciarButton} alt="Knapp Glaciär" />
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}
