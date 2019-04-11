import React, { Component } from 'react'

class Hero extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 cr-one img-fluid" src="https://landerapp.com/blog/wp-content/uploads/2018/05/student-education.jpg" alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className="cr-caption-one">Online Education On YOur Fingertips</h1>
      <h5 className="cr-caption-two">Get started online education academy now!</h5>
      <button className="btn btn-success cr-caption-btn">Get Started</button>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 cr-two img-fluid" src="https://wiki.optimy.com/wp-content/uploads/2017/07/powerful-education.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 cr-three img-fluid" src="https://media.buzzle.com/media/images-en/illustrations/conceptual/technology/1200-245548-impact-technology-education.jpg" alt="Second slide"/>
      
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </div>
    )
  }
}

export default Hero;