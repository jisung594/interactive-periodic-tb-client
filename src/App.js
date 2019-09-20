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
  }


  callBackend = () => {
    fetch('/api/elements')
      .then(res => res.json())
      .then(data => this.setState({
        elements: data
      }))
  }

  mouseHandler = (e, elementObj) => {
    // if (e.target.classList.contains('element') || e.target.parentElement.classList.contains("element")) {
    //   this.setState({
    //     mouseOver: true
    //   })
    // } else {
    //   this.setState({
    //     mouseOver: false
    //   })
    // }

    let eleProfile = document.querySelector(".element-profile")

    if (e.target.classList.contains("element")) {

      eleProfile.innerHTML = `
        <h2>${elementObj.name}</h2>
      `
    } else {

      eleProfile.innerHTML = ""
    }

  }


  // clearContent = (e) => {
  //
  //   let tableDiv = document.querySelector('.table')
  //
  //   if (!this.state.mouseOver) {
  //     tableDiv.style.display = "block"
  //   } else {
  //
  //     tableDiv.style.display = "none"
  //   }
  //
  //
  //   // if (e.target.classList.contains('element') || e.target.parentElement.classList.contains("element")) {
  //   //   tableDiv.style.visibility = "hidden"
  //   //   // tableDiv.toggle()
  //   // }
  //   //
  //   // if (!e.target.classList.contains('element') || !e.target.parentElement.classList.contains("element")) {
  //   //   tableDiv.style.visibility = "visible"
  //   //   // tableDiv.hide()
  //   // }
  // }


  render() {
    return (
      <div className="App" onLoad={this.clearContent}>
        <h2>Interactive Periodic Table.</h2>
        <div className="element-profile"></div>
        <Table elements={this.state.elements} mouseHandler={this.mouseHandler}/>
      </div>
    );
  }
}

export default App;
