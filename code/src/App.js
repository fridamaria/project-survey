/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-parens */
import React, { useState } from 'react'
import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Footer } from './components/Footer'
import './app.css'

const likeBlue = ['Yes', 'No', 'Only certain shades']
const blueFeelings = ['Positive', 'Negative', 'Neutral', 'Mixed']

export const App = () => {
  const [mind, setMind] = useState('')
  const [likeScale, setLikeScale] = useState()
  const [feelingScale, setFeelingScale] = useState()
  const [optionBlue, setOptionBlue] = useState('')
  const [optionBlueMember, setOptionBlueMember] = useState('')
  const [submit, setSubmit] = useState(false)
  const enabled = mind.length > 0
  const handleSubmit = event => {
    event.preventDefault()
    setSubmit(true)
  }

  return (
    <section className="content-wrapper">
      <Header />
      <section className="main-container">

        {!submit && (
          <form onSubmit={handleSubmit}>

            <label>
              <h2>What comes into mind when you think about the color Blue?</h2>
              <input type="text" onChange={event => setMind(event.target.value)} value={mind} placeholder="Enter your thoughts here..." />
            </label>

            <div role="radiogroup" aria-labelledby="group1">
              <h2 id="group1">Do you like the color Blue?</h2>
              {likeBlue.map(like => (
                <label className="radio-container" key={like}>
                  <input type="radio" value={like} onChange={event => setLikeScale(event.target.value)} checked={likeScale === like} />
                  {like}
                  <span className="radio-bttn" />
                </label>
              ))}
            </div>

            <div className="test" role="radiogroup" aria-labelledby="group2">
              <h2 id="group2">What are your feelings associated with the color Blue?</h2>
              {blueFeelings.map(feeling => (
                <label className="radio-container" key={feeling}>
                  <input type="radio" value={feeling} onChange={event => setFeelingScale(event.target.value)} checked={feelingScale === feeling} />
                  {feeling}
                  <span className="radio-bttn" />
                </label>
              ))}
            </div>

            <label>
              <h2>Blue are the words I say and what I think</h2>
              <div className="drop-down">
                <select onChange={event => setOptionBlue(event.target.value)} value={optionBlue}>
                  <option value="">~ Select option ~</option>
                  <option value="Blue are the feelings that live inside me">Blue are the feelings that live inside me</option>
                  <option value="I’m blue da ba dee da ba daa">I’m blue da ba dee da ba daa</option>
                  <option value="That’s sad">That’s sad</option>
                </select>
              </div>
            </label>

            <label>
              <h2>Who is your favourite Blue member?</h2>
              <div className="drop-down">
                <select
                  onChange={event => setOptionBlueMember(event.target.value)}
                  value={optionBlueMember}>
                  <option value="">~ Select option ~</option>
                  <option value="Anthony Costa">Anthony Costa</option>
                  <option value="Duncan James">Duncan James</option>
                  <option value="Lee Ryan">Lee Ryan</option>
                  <option value="Simon Webbe">Simon Webbe</option>
                </select>
              </div>
            </label>

            <button type="submit" disabled={!enabled}>Submit</button>

          </form>
        )}

        <section className="summary-wrapper">
          {submit &&
            <div className="summary-content">
              <Summary
                mind={mind}
                like={likeScale}
                feeling={feelingScale}
                dabadee={optionBlue}
                blue={optionBlueMember} />
              <div className="summary-buttons">
                <button type="button" onClick={() => window.location.reload()}>Reset</button>
                <button type="button" onClick={() => setSubmit(false)}>Go back</button>
              </div>
            </div>}
        </section>
      </section>
      <Footer />
    </section>
  )
}
