import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        	<section id="footer">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>About</h5>

                    <p style={{color:"white"}}>WPLMS is an online education site which<br/> imparts knowledge and skills to million of<br/> users worldwide. </p>
					<ul className="list-unstyled quick-links">
						<li><a href="#"><i className="fa fa-angle-double-right"></i><i className="fas fa-map-marked-alt"></i>IT Tower, Hafeez Center, Lahore</a></li>
						<li><a href="#"><i className="fa fa-angle-double-right"></i><i className="fas fa-phone"></i>222-3333-4444</a></li>
						<li><a href="#"><i className="fa fa-angle-double-right"></i><i className="fas fa-envelope"></i>someone@gmail.com</a></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Last Tweets</h5>
					<p style={{color:'white'}}>Although Jetpack is an amazing plugin with a huge list of features categorised into categories, sometimes it is ver… , Mar 14</p>
				
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>TAGS</h5>
					<p><button className="badge badge-secondary">AUDIO</button> <button className="badge badge-secondary">VIDEO</button> <button className="badge badge-secondary">COUNTRY</button><br/><br/> <button className="badge badge-secondary">GALLERY</button> <button className="badge badge-secondary">IMAGES</button>
					&nbsp;<button className="badge badge-secondary">COMPANY</button><br/><br/> <button className="badge badge-secondary">WORLD</button> <button className="badge badge-secondary">MP3 AUDIO</button>
					</p>
					
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <div className="link"><a href="#0" className="social"> <i className="fab fa-facebook-f"></i> </a> <a href="#0" className="social"> <i className="fab fa-instagram"></i> </a> <a href="#0" className="social"> <i className="fab fa-twitter"></i> </a> <a href="#0" className="social"> <i className="fab fa-google-plus-g"></i> </a> <a href="#0" className="social"> <i className="fas fa-envelope"></i></a></div>
					<br/><p><u><a href="#">Vvork Cloud Technology</a></u> is a Registered</p>
					<p className="h6">&copy; All right Reversed.<a className="text-green ml-2" href="#" target="_blank">Online Education</a></p>
				</div>
				{/* </hr> */}
			</div>	
		</div>
	</section>
      </div>
    )
  }
}
export default Footer;