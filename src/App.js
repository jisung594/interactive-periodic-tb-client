import React, {Component} from 'react';
import Table from './Components/Table'
import './App.scss';

class App extends Component {

  // Challenge: a browser-based interactive periodic table.
  //
  // Specs and regulation:
  //
  // - Due before or on Friday September 20th at 5:00 pm (Eastern Time Zone).
  // - Deliverable is the zipped source code and a maximum of 300 words detailing which languages/packages you used and why.
  // - Optionally, host the finished website and include the link when submitting the deliverable.
  // - The web page must be viewable on all widely used browsers.
  // - At minimum, a periodic table must include these elements:
  //
  //     - The atomic number, atomic symbol, and full name of each element.
  //     - The table should include a mouseover that reveals more information about each element that has not been previously asked for. We will leave the content up to your discretion.
  //     - The source of the data used in the periodic table should be explicitly cited in the page.
  //     - You are strongly encouraged to present your technical skills, as much as you can, by including additional components as you see it fit!
  //
  //
  // After reviewing the submitted code, we will schedule a code review and interview through Skype or in person. Code should be submitted to
  //
  // hire@qsimulate.com

  state = {
    elements: [],
    mouseOver: false
  }

  componentDidMount() {
    this.callBackend()
    window.scrollTo(0, 0)
  }


  callBackend = () => {
    fetch('/api/elements')
      .then(res => res.json())
      .then(data => this.setState({
        elements: data
      }))
  }

  mouseHandler = (e, elementObj) => {
    let eleProfile = document.querySelector(".element-profile")

    if (e.target.classList.contains("element") || e.target.parentElement.classList.contains("element")) {
      eleProfile.style.display = "block"
      eleProfile.innerHTML = `
        <div className="element-profile">
          <h2>${elementObj.name}</h2>
          <img src=${elementObj.spectral_img} alt="element image">

          <span>Summary:</span>
          <p>${elementObj.summary}</p>

          <span>Symbol:</span>
          <p>${elementObj.symbol}</p>

          <span>Appearance:</span>
          <p>${elementObj.appearance}</p>

          <span>Phase:</span>
          <p>${elementObj.phase}</p>

          <span>Number:</span>
          <p>${elementObj.number}</p>

          <span>Period:</span>
          <p>${elementObj.period}</p>

          <span>Density:</span>
          <p>${elementObj.density}</p>

          <span>Category:</span>
          <p>${elementObj.category}</p>

          <span>Discovered by:</span>
          <p>${elementObj.discovered_by}</p>

          <span>Named by:</span>
          <p>${elementObj.named_by}</p>
        </div>
      `

      // window.scrollTo(0, 0)
    }
  }

  leaveProfile = () => {
    let eleProfile = document.querySelector(".element-profile")

    eleProfile.innerHTML = ""
    eleProfile.style = null
  }


  render() {
    return (
      <div className="App">
        <div className="header" onMouseOver={this.leaveProfile}>
          <h2>Interactive Periodic Table.</h2>
        </div>
        <div className="element-profile"></div>
        <Table elements={this.state.elements} mouseHandler={this.mouseHandler}/>
      </div>
    );
  }
}

export default App;
