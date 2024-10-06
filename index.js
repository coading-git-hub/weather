
var weather = prompt("Enter the weather type :(summer, winter, autumn, spring, cloudy, rainy):").toLowerCase();
if(weather === "summer"){
    document.write(`<div class="main"> <h1 style="align-items: center;margin-top: 50px;margin-left: 30px;color: brown;text-decoration: double;"><b> IT'S A SUMMER</h1></b><br>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
               <img src="./assets/welcom summer.jpeg" alt="Avatar" style="width:300px;height:300px;"> 
             <p style=" margin-top: 0%;height: 50%;" ><span style="color: brown;">SUMMER:</span> <br>☀️ 🌞 The sun is shining brightly, and it's a perfect day for the beach. 🌊
                🌞 Summer brings long, sunny days and warm nights under the stars. 🌞✨</p>
            </div>
            
            <div class="flip-card-back">
              <img style="height: 200%;width: 100%;" src="./assets/summer.gif" alt="">
              <div class="container">
                <h4 style=" color: brown;font-size: larger;padding: 5px;"><b>Hi ! SUMMER</b></h4> 
               
              </div>
            </div>
          </div>
        </div>
        </div>`)
}else if(weather=== "winter"){
 document.write ( `<div class="main"> <h1 style="align-items: center;margin-top: 50px;margin-left: 30px;color: brown;text-decoration: double;"><b> IT'S A WINTER</h1></b><br>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
               <img src="./assets/winter.gif" alt="Avatar" style="width:300px;height:300px;"> 
             <p style=" margin-top: 0%;height: 50%;" ><span style="color: brown;">WINTER:</span> <br> ❄️ The cold breeze fills the air, and snow blankets the ground. ☃️🌨️
❄️ Winter is the time for cozy sweaters and hot cocoa by the fireplace. 🔥☕✨</p>
            </div>
            
            <div class="flip-card-back">
              <img style="height: 200%;width: 100%;" src="./assets/winter back.gif" alt="">
              <div class="container">
                <h4 style=" color: brown;font-size: larger;padding: 5px;"><b>Hi ! WINTER</b></h4> 
               
              </div>
            </div>
          </div>
        </div>
        </div>`)}
        else if(weather === "autumn"){
document.write(`<div class="main"> <h1 style="align-items: center;margin-top: 50px;margin-left: 30px;color: brown;text-decoration: double;"><b> IT'S A AUTUMN</h1></b><br>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
               <img src="./assets/autumn.jpg" alt="Avatar" style="width:300px;height:300px;"> 
             <p style=" margin-top: 0%;height: 50%;" ><span style="color: brown;">AUTUMN🍂:</span> <br>
🍁 The leaves turn shades of red and gold, gently falling to the ground. 🍁🍃
🍁 Crisp autumn air invites you for long walks in nature. 🍂🍂✨</p>
            </div>
            
            <div class="flip-card-back">
              <img style="height: 200%;width: 100%;" src="./assets/autumn back.gif" alt="">
              <div class="container">
                <h4 style=" color: brown;font-size: larger;padding: 5px;"><b>Hi ! AUTUMN</b></h4> 
               
              </div>
            </div>
          </div>
        </div>
        </div>`)
        }else if(weather === "spring"){
            document.write(`<div class="main"> <h1 style="align-items: center;margin-top: 50px;margin-left: 30px;color: brown;text-decoration: double;"><b> IT'S A SPRING</h1></b><br>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                       <img src="./assets/spring.gif" alt="Avatar" style="width:300px;height:300px;"> 
                     <p style=" margin-top: 0%;height: 50%;" ><span style="color: brown;">SPRING🌸:</span> <br>
🌼 Flowers bloom, and everything feels fresh and full of life. 🌷🌼
🌼 Spring showers bring colorful rainbows and the smell of fresh rain. 🌦️🌈✨</p>
                    </div>
                    
                    <div class="flip-card-back">
                      <img style="height: 200%;width: 100%;" src="./assets/spring2.gif" alt="">
                      <div class="container">
                        <h4 style=" color: brown;font-size: larger;padding: 5px;"><b>Hi ! SPRING</b></h4> 
                       
                      </div>
                    </div>
                  </div>
                </div>
                </div>`)
            }else if(weather === "cloudy"){
                document.write(`<div class="main"> <h1 style="align-items: center;margin-top: 50px;margin-left: 30px;color: brown;text-decoration: double;"><b> IT'S A CLOUDY DAY</h1></b><br>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <img src="./assets/cloudy.gif" alt="Avatar" style="width:300px;height:300px;"> 
                         <p style=" margin-top: 0%;height: 50%;" ><span style="color: brown;">CLOUDY☁️:</span> <br>
    🌥️ The sky is overcast, and the world feels soft and quiet under the clouds. 🌥️🌫️
🌥️ A day filled with clouds, but no sign of rain just yet. ☁️⛅✨</p>
                        </div>
                        
                        <div class="flip-card-back">
                          <img style="height: 200%;width: 100%;" src="./asets/cloudy 3.gif" alt="">
                          <div class="container">
                            <h4 style=" color: brown;font-size: larger;padding: 5px;"><b>Hi ! CLOUDS</b></h4> 
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>`)
            }else if( weather === "rainy"){
                document.write(`<div class="main"> <h1 style="align-items: center;margin-top: 50px;margin-left: 30px;color: brown;text-decoration: double;"><b> IT'S A RAINY DAY</h1></b><br>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <img src="./assets/rainy2.gif" alt="Avatar" style="width:300px;height:300px;"> 
                         <p style=" margin-top: 0%;height: 50%;" ><span style="color: brown;">RAINY DAY🌧️:</span> <br>
    
🌧️ The sound of raindrops hitting the window creates a calm atmosphere. 🌧️💧
🌧️ It's a perfect day to stay indoors with a warm drink, watching the rain. ☕🌧️✨</p>
                        </div>
                        
                        <div class="flip-card-back">
                          <img style="height: 200%;width: 100%;" src="./assets/rainy.gif" alt="">
                          <div class="container">
                            <h4 style=" color: brown;font-size: larger;padding: 5px;"><b>Hi ! RAINY DAY</b></h4> 
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>`)
            }else{
                document.write(`<div class="main"> <h1 style="align-items: center;margin-top: 50px;margin-left: 0px;color: brown;text-decoration: double;"><b> ⚠️ Weather Not Found</h1></b><br>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <img src="./assets/wrong2.gif" alt="Avatar" style="width:300px;height:350px;"> 
                      
                        </div>
                        
                        <div class="flip-card-back">
                          <img style="height: 200%;width: 100%;" src="./assets/wrong.gif" alt="">
                          <div class="container">
                            <h4 style=" color: brown;font-size: larger;padding: 5px;"><b>Sorry, the weather you selected is not available!</b></h4> 
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>`)
                };
        
