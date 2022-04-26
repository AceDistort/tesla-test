import './styles/shop.scss';

import { Object_container } from '../components/Object_container'
import { Best_Products } from '../components/Best_products'
import { App_Header } from '../components/App_Header'
import { Carrousel } from '../components/carrousel'
import { Square_Object_container } from '../components/Square_object_container'

const carousel_imgs = [   {
                    "src": "https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/wall-connector-gen3.jpg",
                    "title": "CONNECTEUR MURAL",
                    "description" : "La méthode de recharge à domicile la plus rapide",
                    "link": "https://shop.tesla.com/fr_fr/category/accessoires-pour-les-vehicules/model-y",
                },
                {
                    "src": "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/cargo-mats.jpg",
                    "title": "TAPIS DE SOL POUR MODEL 3",
                    "description" : "Pour un habitacle impeccable, quel que soit le temps",
                    "link": "https://shop.tesla.com/fr_fr/category/accessoires-pour-les-vehicules/model-s",
                },
                {
                    "src": "img/tesla-roadster.jpg",
                    "title": "TESLA ROADSTER",
                    "description" : "Un style imcomparable",
                    "link": "https://shop.tesla.com/fr_fr/category/accessoires-pour-les-vehicules/model-s",
                },
                {
                  "src": "img/tesla-model-s.jpg",
                  "title": "TESLA MODEL S",
                  "description" : "",
                  "link": "",
                },
                
]

function ShopView() {
  return (
    <div className="App">
      <App_Header />
      <Carrousel img_srcs={carousel_imgs} time_between_slide_ms={4000}/>
      <Best_Products />
      <Object_container 
          src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/image-grid/models.jpg" 
          title="Accessoires Model S"
          link="https://shop.tesla.com/fr_fr/category/accessoires-pour-les-vehicules/model-s"
          direction="row"
          textPosition="right"
      />

      <div className='box_2container'>
        <Square_Object_container 
                src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/image-grid/v2/model3@2x.jpg"
                title="Accessoires Model 3"
                link="https://shop.tesla.com/fr_fr/category/accessoires-pour-les-vehicules/model-3"
                color="white"
              />
        <Square_Object_container 
                src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/image-grid/modelx.jpg"
                title="Accessoires Model X"
                link="https://shop.tesla.com/fr_fr/category/accessoires-pour-les-vehicules/model-x"
                color="white"
              />
      </div>

      <Object_container 
          src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/image-grid/model_y.jpg" 
          title="Accessoires Model Y"
          link="https://shop.tesla.com/fr_fr/category/accessoires-pour-les-vehicules/model-y"
          direction="row"
          textPosition="left"
      />

      <Object_container 
          src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/image-grid/lifestyle.jpg" 
          title="Lifestyle"
          link="https://shop.tesla.com/fr_fr/category/lifestyle"
          direction="row"
          textPosition="left"
      />

      <footer>
        <p>Tesla © 2022</p>
        <p>Mentions légales</p>
      </footer>
    </div>
  );
}

export default ShopView;
