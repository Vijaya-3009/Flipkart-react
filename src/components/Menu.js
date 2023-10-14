import React from'react';

import ma from '../images/discount.jpeg'
import mb from '../images/Mobiles&Tablets.jpeg'
import mc from '../images/Electronics.jpeg'
import md from '../images/TV&Appliances.jpeg'
import me from '../images/Fashion.jpeg'
import mf from '../images/Beauty.jpeg'
import mg from '../images/Home&Kitchen.jpeg'
import mh from '../images/Furniture.jpeg'
import mi from '../images/Flights.jpeg'
import mj from '../images/Grocery.jpeg'
function Menu(){
    return(
        <>
        <div className='row mt-2 com'>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={ma} height={50}/>  
            <p>Top Offers</p>
        </div>
        <div className='col-md-1 '>
            <img src={mb} height={50}/>  
            <p>Mobile </p>
        </div>
        <div className='col-md-1 '>
            <img src={mc} height={50}/>  
            <p>Electronics</p> 
        </div>
        <div className='col-md-1'>
            <img src={md} height={50}/>  
            <p>TVs App</p> 
        </div>
        <div className='col-md-1 '>
        <img src={me} height={50}/>  
            <p>Fashion</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mf} height={50}/>  
            <p>Beauty</p> 
        </div>
        <div className='col-md-1'>
        <img src={mg} height={50}/>  
            <p>Kitchen</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mh} height={50}/>  
            <p>Furniture</p> 
        </div>
        <div className='col-md-1'>
        <img src={mi} height={50}/>  
            <p>Flights</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mj} height={50}/>  
            <p>Grocery</p> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default Menu;