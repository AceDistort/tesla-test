import "./styles/header.scss"
import tesla_img from "../img/tesla.png"
import $ from 'jquery'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import { Input } from "reactstrap";


function App_Header() {

    $(window).scroll(function(){
        var position = $(window).scrollTop();
        if(position != undefined){
            if(position > 50){
              $(":root").css("--header-bg", "rgb(255, 255, 255)");
              $(":root").css("--header-text-color", "rgb(0, 0, 0)");
            }
            else{
              $(":root").css("--header-bg", "rgba(0, 0, 0, 0)");
              $(":root").css("--header-text-color", "rgb(255, 255, 255)");
            }
        };
    })

    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false);console.log(show)};
    const handleShow = () => {setShow(true); console.log(show)};

    return (
      <>
      <header className="header">
        <div className="left-menu">
          <img className="logo" src={tesla_img}></img>
          <span className="left-menu_divider">|</span>
          <a className="header_button">Boutique</a>
        </div>

        <div className="main_menu">
          <a className="header_button">Recharger</a>
          <a className="header_button">Accessoires pour les véhicules</a>
          <a className="header_button">Vêtements</a>
          <a className="header_button">Lifestyle</a>
        </div>

        <div>
          <button className="header_button" onClick={handleShow}>Menu</button>
        </div>
      </header>
      
      <Offcanvas show={show} placement={"end"} backdrop={true} scroll={true} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <InputGroup className="mb-3 searchInput">
            <InputGroup.Text id="basic-addon1">
              <img className="search-icon" src="img/loupe.svg"></img>
            </InputGroup.Text>
            <FormControl
              placeholder="Rechercher"
            />
        </InputGroup>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Recharger</Accordion.Header>
            <Accordion.Body>
              Une liste d'items diverses
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accessoires pour les véhicules</Accordion.Header>
            <Accordion.Body>
              Une seconde liste d'items diverses
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Vêtements</Accordion.Header>
            <Accordion.Body>
              Vide
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Lifestyle</Accordion.Header>
            <Accordion.Body>
              Vide
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <a className="menu_button black" href="https://www.tesla.com/fr_FR/support/shop?redirect=no">FAQ de la boutique</a>
        <a className="menu_button black" href="https://shop.tesla.com/fr_fr?signIn=true">Connexion</a>
        </Offcanvas.Body>
      </Offcanvas>
      </>
    );
}

export { App_Header }