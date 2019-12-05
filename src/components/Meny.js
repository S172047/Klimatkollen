import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Stil.css'
import Logga from '../images/logga.png'

export default class Meny extends Component {
    render() {
        return (
                <Navbar default collapseOnSelect>
                        <Navbar.Brand>
                        <img className="klimatlogga" src={Logga} alt="Logotype" />
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <DropdownButton id="dropdown-basic-button" title="Meny">
                            <Dropdown.Item href="#/action-1">Utsläpp</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Temperaturer</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Havsnivåer</Dropdown.Item>
                            </DropdownButton>
                                <Link className="linkstyle" to="/koldioxid">
                                <Button className="btn-meny" variant="secondary" size="sm">UTSLÄPP</Button>
                                </Link>
                                <Link className="linkstyle" to="/temperatur">
                                <Button className="btn-meny" variant="secondary" size="sm">TEMPERATURER</Button>
                                </Link>
                                <Link className="linkstyle" to="/glaciar">
                                <Button className="btn-meny" variant="secondary" size="sm">HAVSNIVÅER</Button>
                                </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}
