import '../App.css'
import Card from 'react-bootstrap/Card';

export default function Projects() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '10px'}}>
        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://notehaven.onrender.com/'>
            <Card.Img className='card-img-grayscale' src="assets/projectimg/NoteHaven.png" alt="Card image" />
            <Card.ImgOverlay  >
              <Card.Title className='cardTitle' style={{color: 'white'}}>Note Haven</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://workplace-management-app-ad243e4e571c.herokuapp.com/'>
            <Card.Img className='card-img-grayscale' src="assets/projectimg/WorkplaceMngr.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle' style={{color: 'white'}}>Workplace Manager</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://ponderpad-dd01cc8d291c.herokuapp.com/'>
            <Card.Img className='card-img-grayscale'src="assets/projectimg/PonderPad.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle'style={{color: 'black'}}>Ponder Pad</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://juanthtgotaway.github.io/Weather-Website/'>
            <Card.Img className='card-img-grayscale'src="assets/projectimg/Weatherapp.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle' style={{color: 'white'}}>Weather App</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>
        
        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://juanthtgotaway.github.io/Book-App/'>
            <Card.Img className='card-img-grayscale'src="assets/projectimg/Book_Years.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle' style={{color: 'black'}}>Book Years</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://juanthtgotaway.github.io/coding-questionnaire/'>
            <Card.Img className='card-img-grayscale'src="assets/projectimg/CodingQuiz.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle' style={{color: 'white'}}>Coding Quiz</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://github.com/juanthtgotaway/rockymountainnationalparkvisitorsguide'>
            <Card.Img className='card-img-grayscale'src="assets/projectimg/RMVG.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle' style={{color: 'white'}}>RockyMountainVisitor</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

      </div>
    );
  }
  