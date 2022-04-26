import "./styles/best_products.scss"
import objects from "../json-server/db.json"
import { Object_container } from './Object_container'
import { Product } from '../types/product'
import $ from 'jquery'

var sliderPosition = 0;
const objectTabLenght = objects.length;
var moves = 0;
var nb_items = 3;

function Best_Products ()
{
    const productsList = objects.map((object : Product) => {
        return(
            <Object_container 
                src={object.image} 
                title={object.description}
                link={object.link}
                direction="column"
                textPosition="down"
            />
        )
    } ) 

    $(document).ready(function(){
        nb_items = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slider-nb-item'));
    })

    //align items when resizing
    $(window).resize(function(){
        nb_items = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slider-nb-item'));

        if(moves > (objectTabLenght - nb_items)){
            moves = objectTabLenght - nb_items;
         }     

        //resize the slider
        $(".slider").css({transition: "none"})

        var CardWidth = ($(".container-vertical").width()); 
        if(CardWidth == undefined){
            CardWidth = 0;
        }
        CardWidth += 20; //add margins

        sliderPosition = moves * CardWidth;
        $(".slider").css({transform: "translateX(-" + sliderPosition + "px)"})

        $(".slider").css({transition: "transform 0.5s ease"})
    })

    function slide (direction: string){
        var CardWidth = ($(".container-vertical").width()); 
        if(CardWidth == undefined){
            CardWidth = 0;
        }
        CardWidth += 20; //add margins

        if(direction == "right"){
            moves += 1;
        }
        
        if(direction == "left"){
            moves -= 1;
        }

        if(moves < 0){
            moves = 0;
        }

        if(moves > (objectTabLenght - nb_items)){
           moves = objectTabLenght - nb_items;
        }        

        sliderPosition = moves * CardWidth;
        $(".slider").css({transform: "translateX(-" + sliderPosition + "px)"})
    }

    return(
        <>
            <h3 className='section_title'>Meilleures ventes</h3>
            <div className='best_products'>
                <button onClick={() => {slide("left")}} style={{left: 0, right: "auto", top: 0, bottom: "auto", marginLeft: 0, marginRight: "10px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg></button>
                <div className="slider">
                    {productsList}
                </div>
                <button onClick={() => {slide("right")}} style={{left: "auto", right: 0, top: 0, bottom: "auto", marginRight: 0}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg></button>
            </div>
        </>
    );
}

export { Best_Products };
