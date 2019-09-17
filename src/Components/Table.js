import React, {Component} from 'react';
import Element from './Element'

class Table extends Component {

  displayElements = () => {
    return this.props.elements.map(elementObj => {
      return <Element key={elementObj["_id"]} element={elementObj}/>
    })
  }

  render() {
    return (
      <div>
        {this.displayElements()}
      </div>
    )
  }
}

export default Table;
