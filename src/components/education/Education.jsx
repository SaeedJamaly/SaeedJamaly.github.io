import React from 'react'
import './education.css'
import EMU from '../../assets/EMU.png'
import Concordia from '../../assets/Concordia.png'

const Education = () => {
  return (
    <section id='education'>
      <h2>Education</h2>

      <div className="container edu__container">

        <div className="edu__card">
          <div className='edu_img'>
            <img src={Concordia} alt="CU Logo" />
          </div>
          <h4>Concordia University</h4>
          <div className="edu_text">
            <h3>Master of Engineering</h3>
            <h3> Montreal, Canada</h3>
            <p>
              Computer Science
            </p>
            <p>(Graduated in Aug 2023)</p>
          </div>
        </div>

        <div className="edu__card">
          <div className='edu_img'>
            <img src={EMU} alt="EMU Logo" />
          </div>
          <h4>EMU University</h4>
          <div className="edu_text">
            <h3>Master of Science</h3>
            <h3> Famagusta, Cyprus</h3>
            <p>
              Electrical & Electronics Eng
              Signal & Image Processing
              2014 - 2017
            </p>
            <h4>Thesis topic: Image super-resolution and sparse representation via dual dictionary learning</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education