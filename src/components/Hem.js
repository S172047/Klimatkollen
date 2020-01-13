import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import "./Stil.css";
import Jordglob from "../images/jordglob.png";
import Jordglob1 from "../images/jordglob_bla.png";
import Jordglob2 from "../images/jordglob_gul.png";
import Jordglob3 from "../images/jordglob_vit.png";
import Button1 from "../images/button_koldioxid.png";
import Button2 from "../images/button_temp.png";
import Button3 from "../images/button_glaciar.png";

export default class Hem extends Component {
  render() {
    return (
      <Container fluid className="contain">
        <Row>
          <Col>
          <div class="fadein">
            <img id="f3" src={Jordglob1} alt="Jordglob med blått sken"/>
            <img id="f2" src={Jordglob2} alt="Jordglob med gult sken"/>
            <img id="f1" src={Jordglob3} alt="Jordglob med vitt sken"/>
          </div>
            <img
              className="jordgloben"
              src={Jordglob}
              alt="Jordglob utan sken"
            />
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col md="auto">
            <Link to="/koldioxid">
              <img className="buttons" src={Button1} alt="Knapp koldioxid" />
            </Link>
            <Link to="/temperatur">
              <img className="buttons" src={Button2} alt="Knapp Temperatur" />
            </Link>
            <Link to="/glaciar">
              <img className="buttons" src={Button3} alt="Knapp Glaciär" />
            </Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}