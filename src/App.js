import React, {Component} from 'react';
import Table from './Components/Table'
import './App.css';

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
    elements: []
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


  render() {
    return (
      <div className="App">
        <Table elements={this.state.elements}/>
      </div>
    );
  }
}

export default App;
