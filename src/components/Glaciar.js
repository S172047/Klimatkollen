import React, { Component } from 'react'
import {  Jumbotron, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Stil.css'
import ButtonClose from '../images/closebutton.png'
import SeaGlac from './SeaGlacLevel'
import GlaciarPic from '../images/glaciars.jpg'

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
                <Col>
                <h2>Havsnivåer</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat.
                </p>
                </Col>
                <Col>
                    <img className="jumbotronpic" src={GlaciarPic} alt="Tillfällig bild" />
                </Col>
                </Row>
                <Row className="justify-content-md-center">
                <Col md="auto">
                    <SeaGlac />
                </Col>
                </Row>
            </Jumbotron>
        )
    }
}
