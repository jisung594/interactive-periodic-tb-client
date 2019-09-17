import React from 'react';

const Element = (props) => {
  let { element } = props;

  return (
    <div>
      <label>{element.symbol}</label>
      <h2>{element.name}</h2>
    </div>
  )
}

export default Element;


  // id: Number,
  // name: String,
  // symbol: String,
  // appearance: String,
  // phase: String,
  // number: Number,
  // period: Number,
  // density: Number,
  // summary: String,
  // spectral_img: String,
  // category: String,
  // discovered_by: String,
  // named_by: String
