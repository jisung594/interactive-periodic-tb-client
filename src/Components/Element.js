import React from 'react';
import '../App.scss';

const Element = (props) => {
  let { element } = props;


  let clickHandler = (event) => {
    console.log(event.target.parentElement.className)
  }


  return (
    <div className={`element element-${element.number}`}>
      <h4>{element.number}</h4>
      <label>{element.symbol}</label>
      <h2 onClick={(e)=>clickHandler(e)}>{element.name}</h2>
    </div>
  )
}

export default Element;


  // id
  // name
  // symbol
  // appearance
  // phase
  // number
  // period
  // density
  // summary
  // spectral_img
  // category
  // discovered_by
  // named_by
