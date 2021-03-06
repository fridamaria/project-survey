import React from 'react'
import './radio.css'

export const Radio = ({ question, array, setState, state }) => {
  return (
    <fieldset>
      <h2>{question}</h2>
      {array.map((item) => (
        <label key={item} htmlFor={item} className="radio-container">
          <input
            type="radio"
            id={item}
            className="radio-button"
            name="radio"
            value={item}
            onChange={(event) => setState(event.target.value)}
            checked={state === item} />
          {item}
          <span className="radio-bttn" />
        </label>
      ))}
    </fieldset>
  )
}
