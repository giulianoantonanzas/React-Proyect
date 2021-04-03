import './Style.scss'
import React, { useState } from 'react';
import leftArrow from '../../assets/images/Icon feather-arrow-left-circle.svg'
import rightArrow from '../../assets/images/Icon feather-arrow-right-circle.svg'


const Pruducts = () => {
    const [index ,setIndex]= useState(0)
    const carouselContent=[{title:"Primer titulo", subtitle:"Sub titulo 1",
    message:"Primer texto de ejemplo omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."},
    {title:"Segundo titulo", subtitle:"Sub titulo 2",
    message:"Segundo texto de ejemplo unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."},
    {title:"Tercer titulo", subtitle:"Sub titulo 3",
    message:"Tercer texto de ejemplo unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."}]
    
    

    const upPosition=()=>{

        if(index!==carouselContent.length-1){
            setIndex(index+1);
        }else{
            setIndex(0)
        }

    }
    const lowerPosition=()=>{
        if(index>0){
            setIndex(index-1)
        }else{
            setIndex(carouselContent.length-1)
        }
    }

    return (
        <div className="section3" id="product">
            <div className="content-s3">
                <div className="container">
                    <div className="photo-background-s3">
                        <div className="block-orange-s3">
                            <div className="carousel">
                                <div className="carousel-content">
                                    <p className="text1-s3">{carouselContent[index].title}</p>
                                    <p className="text2-s3">{carouselContent[index].subtitle}</p>
                                    <p className="text3-s3">{carouselContent[index].message}</p>
                                </div>
                                <div class="button-s3">
                                    <button href="" className="left-arrow"><img src={leftArrow} alt="flecha izquierda" onClick={lowerPosition} /></button>
                                    <button href="" className="left-arrow"><img src={rightArrow} alt="flecha derecha" onClick={upPosition} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pruducts