import '../App.css'
import Card from 'react-bootstrap/Card';

export default function Projects() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '10px'}}>
        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://notehaven.onrender.com/'>
            <Card.Img src="../assets/projectimg/NoteHaven.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{color: 'white'}}>Note Haven</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://ponderpad-dd01cc8d291c.herokuapp.com/'>
            <Card.Img src="../assets/projectimg/PonderPad.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{color: 'black'}}>Ponder Pad</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://juanthtgotaway.github.io/Weather-Website/'>
            <Card.Img src="../assets/projectimg/Weatherapp.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{color: 'white'}}>Weather App</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>
        
      </div>
    );
  }
  