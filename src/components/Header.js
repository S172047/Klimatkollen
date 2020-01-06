import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Stil.css'
import Logga from '../images/logga.png'
import KoldioxidButton from '../images/koldioxid_small.png'
import TemperaturButton from '../images/temperatur_small.png'
import GlaciarButton from '../images/glaciar_small.png'

export default class Header extends Component {
    render() {
        return (
                <Navbar default collapseOnSelect>
                        <Navbar.Brand>
                        <img className="klimatlogga" src={Logga} alt="Logotype" />
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
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
