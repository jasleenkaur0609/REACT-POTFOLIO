import React, { Component } from 'react'
import Jashanpanwa from './img/Jashanpanwa.jpeg';
import Jasleen from './img/Jasleen.jpg';
import Jashandhillon from './img/Jashandhillon.png';
import Jaismeen from './img/Jaismeen.jpeg';
import './HomePage.css';


function Portfolio(){
  window.location = "./Jasleen.js";
  
}
export default class HomePage extends Component {
  render() {
    
    return (
     
      <div>
        <h1 style= {{fontSize:"20px", textAlign: "center", color: "#183a1d", backgroundColor: "#183a1d"}}>team</h1>
    <h1 style= {{fontSize:"80px", textAlign: "center", color: "#fefbe9", backgroundColor: "#183a1d", marginTop: '-10px'}}>Our Team</h1>
    
    <section className='Team'>
    <div class="team_carousel">

      {/* Jaismeen Kaur */}

      <div>
          <div class="team_card">
            <div class="team_img">
              <img src={Jaismeen} alt="pic" />
            </div>
            <div class="team_info">
              <button type = 'submit'>Jaismeen Kaur</button>
              <p>Email: jaismeenkaur2907@gmail.com</p> 
            </div>
          </div>
        </div>
        </div>

      {/* Jasleen Kaur */}

      <div>
          <div class="team_card">
            <div class="team_img">
            <img src={Jasleen} alt="pic" />
            </div>
            <div class="team_info">
              <button type = 'submit' onClick={Portfolio}>Jasleen Kaur</button>
              <p>Email: jasleensejal2003@gmail.com</p>
            </div>
          </div>
        </div>

        
    

       {/* Jashan Dhillon */}

       <div>
          <div class="team_card">
            <div class="team_img">
              <img src={Jashandhillon} alt="pic" />
            </div>
            <div class="team_info">
              <button type = 'submit'>Jashanpreet Singh</button>
              <p>Email: Jashandhillon595@gmail.com</p> 
            </div>
          </div>
        </div>

        

         {/* Jashan  */}
         <div>
          <div class="team_card">
            <div class="team_img">
              <img src={Jashanpanwa} alt="pic"/>
            </div>
            <div class="team_info">
              <button type = 'submit'>Jashan</button>
              <p>Email: jashanromanov2003@gmail.com</p>
            </div>
          </div>
        </div>
        </section>
      </div>
        

         
    )
  }
}
