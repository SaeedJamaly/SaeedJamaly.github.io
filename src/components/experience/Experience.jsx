import React from 'react'
import './experience.css'

const experience = () => {
  return (
    <section id='experience'>
      <h2>Experiences</h2>
      <div className="container exp__container">

        <div className="exp__card">
          <div className="job">
            <h4>Teacher Assistant</h4>
            <div className="job_list">
              <h4>Logic Design</h4>
              <h5>Laboratory assistant</h5>
            </div>
            <div className="job_date">
              <h6>Concordia University</h6>
              <h6>Montreal, QC, Canada</h6>
              <h6>Sept 2022 - Dec 2022</h6>
            </div>
          </div>
        </div>

        <div className="exp__card">
          <div className="job">
            <h4>IT Technician</h4>
            <div className="job_list">
              <h4>Repair and maintenance</h4>
              <h5>Maintaining and repairing hardwares and fixing software issues</h5>
            </div>
            <div className="job_date">
              <h6>Emergex</h6>
              <h6>Montreal, QC, Canada</h6>
              <h6>May 2022 - Sept 2022</h6>
            </div>
          </div>
        </div>

        <div className="exp__card">
          <div className="job">
            <h4>Java Developer</h4>
            <div className="job_list">
              <h4>Support and maintain the back-end services</h4>
              <h5>Developement using MVC model</h5>
              <h5>Development of JUnit testing for the model</h5>
            </div>
            <div className="job_date">
              <h6>Semra Ltd</h6>
              <h6>Famagusta, Cyprus</h6>
              <h6>Oct 2018 - Jun 2019</h6>
            </div>
          </div>
        </div>

        <div className="exp__card">
          <div className="job">
            <h4>Image processing Engineer</h4>
            <div className="job_list">
              <h4>Matlab image processing</h4>
              <h5>Corrosion detection of plastic pipes using image processing</h5>
              <h5>Report and documentation preparation to senior management</h5>
            </div>
            <div className="job_date">
              <h6>Semra Ltd</h6>
              <h6>Famagusta, Cyprus</h6>
              <h6>Oct 2016 - Sept 2018</h6>
            </div>
          </div>
        </div>


        <div className="exp__card">
          <div className="job">
            <h4>C developer</h4>
            <div className="job_list">
              <h4>Embedded system implementation using C</h4>
              <h5>Wrote instructions received via USART connection</h5>
              <h5>Optimized the memory usage of the flash program by decreasing dependencies on global variables, stack, and the heap</h5>
            </div>
            <div className="job_date">
              <h6>Sarel Plastic</h6>
              <h6>Famagusta, Cyprus</h6>
              <h6>Dec 2015 - Sept 2016</h6>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default experience