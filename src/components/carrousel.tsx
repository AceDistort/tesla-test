import "./styles/carrousel.scss"
import objects from "../json-server/db.json"
import Carousel from 'react-bootstrap/Carousel'
import $ from 'jquery';

interface Carousel_Props {
    img_srcs: Array<any>,
    time_between_slide_ms: number
}

function Carrousel (props: Carousel_Props)
{
    return(
        <Carousel interval={props.time_between_slide_ms} controls={false} keyboard={true} touch={true}>
            {
                props.img_srcs.map((img_src: any) => {
                    return(
                        <Carousel.Item>
                            <img className="d-block w-100 car_img" src={img_src.src} alt={img_src.title}/> {/*condition pour vérifier si l'image est une url ou un chemin relatif */}
                            <Carousel.Caption>
                                <p className="white">{img_src.title}</p>
                                <h3 className="white">{img_src.description}</h3>
                            </Carousel.Caption>
                        </Carousel.Item> 
                    )
                })
            }
            
        </Carousel>
    )
}

export {Carrousel}
