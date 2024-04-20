import '../App.css'
import Card from 'react-bootstrap/Card';
import NoteHavenImg from '../../assets/projectimg/NoteHaven.png';
import WorkplaceMngrImg from '../../assets/projectimg/WorkplaceMngr.png';
import PonderPadImg from '../../assets/projectimg/PonderPad.png';
import WeatherappImg from '../../assets/projectimg/Weatherapp.png';
import Book_YearsImg from '../../assets/projectimg/Book_Years.png';
import CodingQuizImg from '../../assets/projectimg/CodingQuiz.png';
import RMVGImg from '../../assets/projectimg/RMVG.png';

export default function Projects() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '10px'}}>
        
        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://notehaven.onrender.com/'>
            <Card.Img className='card-img-grayscale' src={NoteHavenImg} alt="Note Haven Project Image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle' style={{color: 'white'}}>Note Haven</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://workplace-management-app-ad243e4e571c.herokuapp.com/'>
            <Card.Img className='card-img-grayscale' src={WorkplaceMngrImg} alt="Workplace Manager Project Image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle' style={{color: 'white'}}>Workplace Manager</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://ponderpad-dd01cc8d291c.herokuapp.com/'>
            <Card.Img className='card-img-grayscale' src={PonderPadImg} alt="Ponder Pad Project Image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle' style={{color: 'black'}}>Ponder Pad</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://juanthtgotaway.github.io/Weather-Website/'>
            <Card.Img className='card-img-grayscale' src={WeatherappImg} alt="Weather App Project Image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle' style={{color: 'white'}}>Weather App</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>
        
        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://juanthtgotaway.github.io/Book-App/'>
            <Card.Img className='card-img-grayscale' src={Book_YearsImg} alt="Book Years Project Image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle' style={{color: 'black'}}>Book Years</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://juanthtgotaway.github.io/coding-questionnaire/'>
            <Card.Img className='card-img-grayscale' src={CodingQuizImg} alt="Coding Quiz Project Image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle' style={{color: 'white'}}>Coding Quiz</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

        <Card className="bg-dark text-white" style={{width: "400px"}}>
          <a href='https://github.com/juanthtgotaway/rockymountainnationalparkvisitorsguide'>
            <Card.Img className='card-img-grayscale' src={RMVGImg} alt="Rocky Mountain Visitor Guide Project Image" />
            <Card.ImgOverlay>
              <Card.Title className='cardTitle' style={{color: 'white'}}>RockyMountainVisitor</Card.Title>
            </Card.ImgOverlay>
          </a>
        </Card>

      </div>
    );
  }
  