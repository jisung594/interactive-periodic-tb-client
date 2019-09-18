import React, {Component} from 'react';
import Element from './Element'
import '../App.scss';

class Table extends Component {
  mainElements = () => {
    let main = this.props.elements.filter(ele => {
      return ele.number < 57 || (ele.number > 71 && ele.number < 89) || ele.number > 103
    })

    return main.map(elementObj => {
      return <Element key={elementObj.number} element={elementObj}/>
    })
  }

  lanthanideRow = () => {
    let row = this.props.elements.filter(ele => {
      // return ele.number >= 57 && ele.number <= 71
      return ele.category === "lanthanide"
    })

    return row.map(elementObj => {
      return <Element key={elementObj.number} element={elementObj}/>
    })


  }

  actinideRow = () => {
    let row = this.props.elements.filter(ele => {
      return ele.number >= 89 && ele.number <= 103
    })

    return row.map(elementObj => {
      return <Element key={elementObj.number} element={elementObj}/>
    })
  }



  render() {


    return (
      <div className="table">
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
