import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Courses extends Component {
    
  render() {
    let styles= {
      color: "white",
      textDecoration: "none"   
    }
    return (
      <div className="container place-content">
        <h1 className="text-center">Get started with our popular courses</h1>
        <p className="text-center teamy_post">Select courses to get started with our corporate packages.</p>
         <section className="section">
    <div className="container">
    
        <div className="row">
      <div className="section_content teamy-team">
      <div className="col-md-3">
        <div className="teamy teamy_style1 teamy_mask-circle">
          <div className="teamy_layout">
            <div className="teamy_preview course-one"> <img src="images/img1.jpg" className="teamy_avatar" alt="The demo photo"/> </div>
            <div className="teamy_back">
              <div className="teamy_back-inner course-heading"> <Link to="/" style={styles}><h2>Software Training</h2></Link></div>
            </div>
          </div>
          <div className="teamy_content">
            <h2 className="teamy_name">TECHNOLOGIES</h2>
          </div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="teamy teamy_style1 teamy_mask-circle">
          <div className="teamy_layout">
            <div className="teamy_preview course-one"> <img src="images/img2.jpg" className="teamy_avatar" alt="The demo photo"/> </div>
            <div className="teamy_back">
              <div className="teamy_back-inner course-heading"> <Link to="/" style={styles}><h2>Marketing Management</h2></Link> </div>
            </div>
          </div>
          <div className="teamy_content">
            <h2 className="teamy_name">MARKETING</h2>
          </div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="teamy teamy_style1 teamy_mask-circle">
          <div className="teamy_layout">
            <div className="teamy_preview course-one"> <img src="images/img3.jpg" className="teamy_avatar" alt="The demo photo"/> </div>
            <div className="teamy_back">
              <div className="teamy_back-inner course-heading"> <Link to="/" style={styles}><h2>Starting a startUp</h2></Link> </div>
            </div>
          </div>
          <div className="teamy_content">
            <h2 className="teamy_name">BUSINESS</h2>
          </div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="teamy teamy_style1 teamy_mask-circle">
          <div className="teamy_layout">
            <div className="teamy_preview course-one"> <img src="images/img4.jpg" className="teamy_avatar" alt="The demo photo"/> </div>
            <div className="teamy_back">
              <div className="teamy_back-inner course-heading"> <Link to="/" style={styles}><h2>How to write effectively</h2></Link> </div>
            </div>
          </div>
          <div className="teamy_content">
            <h2 className="teamy_name">LANGUAGES</h2>
          </div>
        </div>
        </div>
      </div>
    </div>

    <div className="row" style={{marginTop: '50px'}}>
      <div className="section_content teamy-team">
      <div className="col-md-3">
        <div className="teamy teamy_style1 teamy_mask-circle">
          <div className="teamy_layout">
            <div className="teamy_preview course-one"> <img src="images/img5.jpg" className="teamy_avatar" alt="The demo photo"/> </div>
            <div className="teamy_back">
              <div className="teamy_back-inner course-heading"> <Link to="/" style={styles}><h2>Developing Mobile App</h2></Link></div>
            </div>
          </div>
          <div className="teamy_content">
            <h2 className="teamy_name">MOBILE APP</h2>
          </div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="teamy teamy_style1 teamy_mask-circle">
          <div className="teamy_layout">
            <div className="teamy_preview course-one"> <img src="images/img6.jpg" className="teamy_avatar" alt="The demo photo"/> </div>
            <div className="teamy_back">
              <div className="teamy_back-inner course-heading"> <Link to="/" style={styles}><h2>Learn Guitar</h2></Link> </div>
            </div>
          </div>
          <div className="teamy_content">
            <h2 className="teamy_name">GUITAR</h2>
          </div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="teamy teamy_style1 teamy_mask-circle">
          <div className="teamy_layout">
            <div className="teamy_preview course-one"> <img src="images/img7.jpg" className="teamy_avatar" alt="The demo photo"/> </div>
            <div className="teamy_back">
              <div className="teamy_back-inner course-heading"> <Link to="/" style={styles}><h2> Nature of Photography</h2></Link> </div>
            </div>
          </div>
          <div className="teamy_content">
            <h2 className="teamy_name">PHOTOGRAPHY</h2>
          </div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="teamy teamy_style1 teamy_mask-circle">
          <div className="teamy_layout">
            <div className="teamy_preview course-one"> <img src="images/img10.jpg" className="teamy_avatar" alt="The demo photo"/> </div>
            <div className="teamy_back">
              <div className="teamy_back-inner course-heading"> <Link to="/" style={styles}><h2>Become Powerful Speaker</h2></Link> </div>
            </div>
          </div>
          <div className="teamy_content">
            <h2 className="teamy_name">SPEAKER</h2>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    
  </section>
      </div>
    )
  }
}
export default Courses;
