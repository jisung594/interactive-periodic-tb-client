import React from 'react';
import '../App.scss';

const Element = (props) => {
  let { element, mouseHandler } = props;

  // let tableDiv = document.querySelector('.table')
  //
  // let clearContent = (e) => {
  //   if (e.target.classList.contains('element')) {
  //     tableDiv.style.visibility = "hidden"
  //     // tableDiv.toggle()
  //   }
  //
  //   if (e.target.className === "App") {
  //     tableDiv.style.visibility = "visible"
  //     // tableDiv.hide()
  //   }
  // }

  // let showContent = (e) => {
  //   if (e.target.className === "App") {
  //     tableDiv.style.visibility = "visible"
  //     // tableDiv.hide()
  //   }
  // }


  return (
    <div
      className={
        `element element-${element.number}
        ${ element.category.includes("unknown, probably ")
            ? element.category.replace("unknown, probably ","").split(" ").join("")
            : element.category.split(" ").join("") }`
        }

      onMouseOver={(event, element)=>mouseHandler(event, element)}
      // onMouseLeave={(event)=>clearContent(event)}
    >
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
