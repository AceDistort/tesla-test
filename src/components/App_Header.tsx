import "./styles/header.scss"
import tesla_img from "../img/tesla.png"

function App_Header() {
    return (
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
          <a className="header_button">Menu</a>
        </div>
      </header>
    );
}

export { App_Header }