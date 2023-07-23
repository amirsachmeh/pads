import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImge from "./imeges/alexa.png";
import CortanaImge from "./imeges/cortana.png";
import SiriImge from "./imeges/siri.png";
 function App(){
    return (
        
    <div>
        <div>
        <section className="hero is-primary">
            <div className="hero-body">
              <p className="title">
                  perdsonal  digital assistent
              </p>
           </div>
         </section>
        </div>
            
            
            






        <div className='container'>
            <section className='section'>
                <div className="columns" style = {{ justifyContent: "center"}}>
                    <div className="column is-3">
                        <ProfileCard 
                        title="Alexa" 
                        handle = "@alexa99" 
                        image = {AlexaImge} 
                        alt= "AlexaImage"
                        description = "Alexa createdby amazon and help you  buy things"
                        />
                    </div>
                    <div className="column is-3">
                        <ProfileCard 
                        title="Cortana" 
                        handle = "@cortana32" 
                        image = {CortanaImge} 
                        alt= "CortanaImage"
                        description = "Cortana made by makro suft "
                        />
                    </div>
                    <div className="column is-3">
                        <ProfileCard 
                        title="Siri" 
                        handle = "@siri01" 
                        image = {SiriImge} 
                        alt= "SiriImage"
                        description = "Siri made by apple and is good "
                        />
                    </div>
                </div>
            </section>
        </div>
    </div>


    );
 }


 export default App; 



