import React from 'react';
import '../App.scss';

const Element = (props) => {
  let { element, mouseHandler, loaded } = props;

  return (
    <div
      className={
        `element element-${element.number}
        ${ element.category.includes("unknown, probably ")
            ? element.category.replace("unknown, probably ","").split(" ").join("")
            : element.category.split(" ").join("") }`
        }
      onMouseOver={(event)=>mouseHandler(event, element)}
    >

      <h5 onLoad={loaded()}>{element.number}</h5>
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
