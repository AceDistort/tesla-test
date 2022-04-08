import React from 'react';
import './App.scss';
import { Object_container } from './components/Object_container'
import { Best_Products } from './components/Best_products'
import { App_Header } from './components/App_Header'

function App() {
  return (
    <div className="App">
      <App_Header />
      <img className="car_img" src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/wall-connector-gen3.jpg"></img>
      <h3 className='section_title'>Meilleures ventes</h3>
      <Best_Products />
      <Object_container 
          src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/image-grid/models.jpg" 
          title="Accessoires Model S"
          link="https://shop.tesla.com/fr_fr/category/accessoires-pour-les-vehicules/model-s"
          direction="horizontal"
          textPosition="right"
      />

      <Object_container 
          src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/image-grid/model_y.jpg" 
          title="Accessoires Model Y"
          link="https://shop.tesla.com/fr_fr/category/accessoires-pour-les-vehicules/model-y"
          direction="horizontal"
          textPosition="left"
      />
      <div style={{height: "200px"}}></div>
    </div>
  );
}

export default App;
