import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  OverlayTrigger,
  Tooltip,
  ButtonToolbar,
  Container,
  Row,
  Col
} from "react-bootstrap";
import "./Stil.css";
import Jordglob from "../images/jordglob.png";
import Button1 from "../images/button_koldioxid.png";
import Button2 from "../images/button_temp.png";
import Button3 from "../images/button_glaciar.png";
import infoPic from "../images/info.png";

export default class Hem extends Component {
  render() {
    return (
      <Container fluid className="contain">
        <Row>
          <Col>
            <ButtonToolbar>
              {["right-start"].map(placement => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      <div className="alignleft">
                        <p>
                        Välkommen till Klimatkollen!
                        </p>
                        <p>
                        Här kan du lära dig om klimatförändringar och hur det påverkar livet på jorden. Utforska gärna
                        diagrammen och jämför den historiska utvecklingen.
                        </p>
                        <p>
                        Och du testa gärna våran quiz också!
                        </p>
                      </div>
                    </Tooltip>
                  }
                >
                  <img className="hoverknapp" src={infoPic} alt="Information" />
                </OverlayTrigger>
              ))}
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="jordgloben"
              src={Jordglob}
              alt="Bild på en jordglob"
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