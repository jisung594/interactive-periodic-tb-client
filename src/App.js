import React, {Component} from 'react';
import Table from './Components/Table'
import './App.scss';

class App extends Component {

  state = {
    elements: [],
    mouseOver: false,
    selectedEle: {}
  }

  componentDidMount() {
    this.callBackend()
      .then(res => console.log(res.text()))
    .catch(err => console.log(err))
  }



// --------------------------
// There are 2 ways to fix this.
//
// Manually run npm run build and add bundle.js to git.
// Add postinstall task to package.json which executs npm run build task.

// *** try these two things for both front and callBackend

// 1. heroku npm run build
// 2. (in package.json under "scripts") "postinstall": "npm run build"
// --------------------------





  callBackend = async () => {
    // fetch('/api/elements')
      // .then(res => res.json())
      // .then(data => this.setState({
      //   elements: data
      // }))

      const response = await fetch('/api/elements')
      const body = await response

      if (response.status !== 200) {
        throw Error(body.message)
      }
      return body

      // "body" is actually an error
      // something is wrong with the fetch or whatever's being received on frontend
  }


  mouseHandler = (e, elementObj) => {
    let tableDiv = document.querySelector(".table")

    tableDiv.style.transform = "scale(0.7)"
    tableDiv.style.transformOrigin = "top left"
    tableDiv.style.marginLeft = "2vw"


    let eleProfile = document.querySelector(".element-profile")

    if (e.target.classList.contains("element") || e.target.parentElement.classList.contains("element")) {
      eleProfile.style.display = "block"
      eleProfile.style.marginRight = "60vw"

      eleProfile.innerHTML = `
        <div className="element-profile">
          <div>
            <h2>${elementObj.name}</h2>
            <img src=${elementObj.spectral_img} alt="element image">
            <br>

            <span>Summary:</span>
            <p>${elementObj.summary}</p>
          </div>

          <div className="specs" style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin: 3vw 0 3vw 0;
          ">
            <div className="column-1">
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
            </div>
            <div className="column-2">
              <span>Density:</span>
              <p>${elementObj.density}</p>

              <span>Category:</span>
              <p>${elementObj.category}</p>

              <span>Discovered by:</span>
              <p>${elementObj.discovered_by}</p>

              <span>Named by:</span>
              <p>${elementObj.named_by}</p>
            </div>
          </div>

        </div>
      `
      // window.scrollTo(0, 0)
    }
  }

  leaveProfile = () => {
    let eleProfile = document.querySelector(".element-profile")
    eleProfile.innerHTML = ""
  }


  render() {
    return (
      <div className="App">
        <div className="header" onMouseOver={this.leaveProfile}>
          <h2>Interactive Periodic Table.</h2>
        </div>
        <div className="main-content">
          <Table elements={this.state.elements} mouseHandler={this.mouseHandler}/>
          <div className="element-profile"></div>
          </div>
      </div>
    );
  }
}

export default App;
