import React from 'react'

const Operators = (props) => {
  return (
    <div>
      <button class="optStyle">{props.operator.opt}</button>
      <button class="optStyle2">{props.operator.opt2}</button>
      <button class="optStyle3">{props.operator.opt3}</button>
      <button class="optStyle4">{props.operator.opt4}</button>
      <button class="optStyle5">{props.operator.opt5}</button>
    </div>
  )
}

export default Operators