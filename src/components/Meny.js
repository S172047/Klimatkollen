import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
                                <Link className="headerLink" to="/">Hem</Link> 
                                <Link className="headerLink" to="/koldioxid">Koldioxid</Link>
                                <Link className="headerLink" to="/temperatur">Temperatur</Link>
                                <Link className="headerLink" to="/glaciar">Glaciärer</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}
