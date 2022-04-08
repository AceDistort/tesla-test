import "./styles/best_products.scss"
import objects from "../json-server/db.json"
import { Object_container } from './Object_container'
import { Product } from '../types/product'

function Best_Products ()
{

    // objects.map((object: Product) => (
    //       key={panda.key}
    //       name={panda.name}
    //   ))
    // const nameList = objects.map((name) =>  
    // <li>{name}</li>  
    // );  
    // console.log(nameList);

    console.log(objects);
    return(
        <div className='best_products'>
            <Object_container 
                src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/HOME_OFFICE/1625886-00-A_0.jpg" 
                title="CHARGEUR PORTABLE SANS FIL 2.0"
                link="https://shop.tesla.com/fr_fr/product/chargeur-portable-sans-fil_2_0?sku=1625886-00-A"
                direction="row"
                textPosition="down"
            />
            <Object_container 
                src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1715672-00-A_0_2000.jpg" 
                title="CYBERWISTLE"
                link="https://shop.tesla.com/fr_fr/product/cyberwhistle?sku=1715672-00-A"
                direction="row"
                textPosition="down"
            />

            <Object_container 
                src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1529455-02-D_0.jpg" 
                title="CONNECTEUR MURAL DE 3E GÉNÉRATION"
                link="https://shop.tesla.com/fr_fr/product/connecteur-mural-de-3e-generation"
                direction="row"
                textPosition="down"
            />
        </div> 
    );
}

export { Best_Products };
