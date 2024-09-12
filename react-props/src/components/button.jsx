import React from 'react'

const button = (props ) => {
  return (
    <button onClick={props.handleclick}>
       {props.text}
    </button>
  )
}

export default button
