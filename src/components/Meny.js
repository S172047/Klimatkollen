import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Stil.css'

export default class Meny extends Component {
    render() {
        return (
                <Navbar default collapseOnSelect>
                        <Navbar.Brand>
                            <h1>Klimatkollen</h1>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <DropdownButton id="dropdown-basic-button" title="Meny">
                            <Dropdown.Item href="#/action-1">Koldioxid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Temperatur</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Glaciärer</Dropdown.Item>
                            </DropdownButton>
                                <Link className="linkstyle" to="/koldioxid">
                                <Button variant="secondary" size="sm">KOLDIOXID</Button>
                                </Link>
                                <Link className="linkstyle" to="/temperatur">
                                <Button variant="secondary" size="sm">TEMPERATUR</Button>
                                </Link>
                                <Link className="linkstyle" to="/glaciar">
                                <Button variant="secondary" size="sm">GLACIÄRER</Button>
                                </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}
