import React, {Component} from 'react';
import Element from './Element'
import '../App.scss';

class Table extends Component {
  state = {
    loaded: false
  }

  loaded = () => {
    this.setState({
      loaded: !this.state.loaded
    })
  }

  componentDidMount() {
    this.loaded()
  }



  mainElements = () => {
    let newArr = this.props.elements.sort((a,b) => a.number - b.number)
    newArr.splice(57,0,{name: "", symbol: "**", number: "200", category: ""})
    newArr.splice(88,0,{name: "", symbol: "**", number: "201", category: ""})

    let main = newArr.filter(ele => {
      return ele.category !== "lanthanide" && ele.category !== "actinide"
    })

    return main.map(elementObj => {
      return <Element
        key={elementObj.number}
        element={elementObj}
        mouseHandler={this.props.mouseHandler}
      />
    })
  }

  lanthanideRow = () => {
    let row = this.props.elements.filter(ele => {
      return ele.category === "lanthanide"
    })

    return row.map(elementObj => {
      return <Element
        key={elementObj.number}
        element={elementObj}
        mouseHandler={this.props.mouseHandler}
      />
    })
  }

  actinideRow = () => {
    let row = this.props.elements.filter(ele => {
      return ele.category === "actinide" && ele.name
    })

    return row.map(elementObj => {
      return <Element
        key={elementObj.number}
        element={elementObj}
        mouseHandler={this.props.mouseHandler}
      />
    })
  }



  render() {
    return (
      <div className="table">
        {!this.state.loaded ? <h2>Loading elements...</h2> : null}
        <div className="top">
          {this.mainElements()}
        </div>
        <div className="bottom">
          {this.lanthanideRow()}
          {this.actinideRow()}
        </div>
      </div>
    )
  }
}

export default Table;
