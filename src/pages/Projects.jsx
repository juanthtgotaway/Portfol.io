export default function Projects() {
    return (
      <div>
        <h1>Projects</h1>
        <div className="card" style={{width: "18rem;"}}>
          <div>
            <div className="g-col-6">
              <h4 className="card-header">Note Haven</h4>
              <a href="https://notehaven.onrender.com/"><img src="../assets/projectimg/NoteHaven.png"></img></a>
            </div>
            <div className="g-col-6">
              <h4 className="card-header">Ponder Pad</h4>
              <a href="https://ponderpad-dd01cc8d291c.herokuapp.com/"><img className="card-img-top" src="../assets/projectimg/PonderPad.png"></img></a>
            </div>
            <div className="g-col-6">
              <h4 className="card-header">Weather App</h4>
              <a href="https://juanthtgotaway.github.io/Weather-Website/"><img src="../assets/projectimg/Weatherapp.png"></img></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  