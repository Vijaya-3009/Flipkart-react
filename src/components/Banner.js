import React from'react';
import '../App'
import logo12 from '../images/Alia.jpeg'
import logo19 from '../images/iphone.jpeg'
import logo18 from '../images/himalaya.jpeg'
import logo14 from '../images/b4.jpeg'
import logo15 from '../images/b5.jpeg'
import logo16 from '../images/b6.jpeg'
import '../css/bootstrap.css';

function Banner(){
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide section3" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={logo12} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={logo19} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={logo14} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={logo15} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={logo16} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={logo18} class="d-block w-100" alt="..."/>
                    </div>
                 
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>

        );
  }
    
    
    export default Banner;