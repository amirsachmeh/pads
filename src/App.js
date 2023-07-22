import ProfileCard from "./ProfileCard";
import AlexaImge from "./imeges/alexa.png";
import CortanaImge from "./imeges/cortana.png";
import SiriImge from "./imeges/siri.png";
 function App(){
    return (
        <div>
            <div> perdsonal  digital assistent</div>

            <ProfileCard title="Alexa" handle = "@alexa99" image = {AlexaImge} alt= "AlexaImage" />
            <ProfileCard title="Cortana" handle = "@cortana32" image = {CortanaImge} alt= "CortanaImage" />
            <ProfileCard title="Siri" handle = "@siri01" image = {SiriImge} alt= "SiriImage" />
        </div>
    );
 }


 export default App; 