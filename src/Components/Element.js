import React from 'react';
import '../App.scss';

const Element = (props) => {
  let { element } = props;

  // lanthanide
  // actinide
  // alkaline earth metal


  return (
    <div className={`element element-${element.number} ${element.category.split(" ").join("")}`}>
      <h5>{element.number}</h5>
      <h2>{element.symbol}</h2>
      <label>{element.name}</label>
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
