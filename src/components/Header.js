import React, { Component } from 'react'
import { Navbar, Nav, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Stil.css'
import Logga from '../images/logga.png'

export default class Header extends Component {
    render() {
        return (
                <Navbar default collapseOnSelect>
                        <Navbar.Brand>
                        <img className="klimatlogga" src={Logga} alt="Logotype" />
                        </Navbar.Brand>
                    <Navbar.Toggle /> {/* Kolla upp om den behövs */}
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                        <ButtonToolbar>
                            {['left'].map(direction => (
                                 <DropdownButton
                                drop={direction}
                                variant="secondary"
                                title={` Innehåll`}
                                id={`dropdown-button-drop-${direction}`}
                                key={direction}>
                                    <Dropdown.Item>
                                        <Link className="linkstyle" to="/koldioxid">Utsläpp</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="2">
                                        <Link className="linkstyle" to="/temperatur">Temperaturer</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="3">
                                        <Link className="linkstyle" to="/glaciar">Havsnivåer</Link>
                                    </Dropdown.Item>
                                </DropdownButton>
                                ))}
                        </ButtonToolbar>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}
