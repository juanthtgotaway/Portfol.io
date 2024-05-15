import '../App.css'


function Resume () {
  return (
    <div style={{ display: 'inline-block'}}>
      <h1>Resume</h1> 
      <br></br>
      <p>Download my <a download href="/Resume.pdf"> Resume</a></p>
      <br></br>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Responsive Design</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>
      <br></br>
      <br></br>
      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>Node</li>
        <li>APIs</li>
        <li>MySql, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  )
};

export default Resume