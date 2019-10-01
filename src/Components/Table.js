import React, {Component} from 'react';
import Element from './Element'
import '../App.scss';

class Table extends Component {

  state = {
    loaded: false
  }



  mainElements = () => {
    let newArr = this.props.elements.sort((a,b) => a.number - b.number)
    newArr.splice(57,0,{name: "", symbol: "**", number: "57-71", category: ""})
    newArr.splice(88,0,{name: "", symbol: "**", number: "89-103", category: ""})

    let main = newArr.filter(ele => {
      return ele.category !== "lanthanide" && ele.category !== "actinide"
    })

    return main.map(elementObj => {
      return <Element
        key={elementObj.number}
        element={elementObj}
        mouseHandler={this.props.mouseHandler}
        onLoad={()=>this.setState({ loaded: true })}
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
        onLoad={()=>this.setState({ loaded: true })}
      />
    })
  }

  actinideRow = () => {
    let row = this.props.elements.filter(ele => {
      return ele.category === "actinide"
    })

    return row.map(elementObj => {
      return <Element
        key={elementObj.number}
        element={elementObj}
        mouseHandler={this.props.mouseHandler}
        onLoad={()=>this.setState({ loaded: true })}
      />
    })
  }



  render() {
    return (
      <div className="table">
        {this.state.loaded ? null : <h2>Loading elements...</h2>}
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
