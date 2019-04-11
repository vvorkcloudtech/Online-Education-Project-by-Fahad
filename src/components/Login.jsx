import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
        <div className="container">
           <div className="row">
               <div className="col-md-4">
                  <h1 className="text-center">Steps to register :</h1><br/>
                  <ul className="list"> 
                      <li><span className="num">1</span>&nbsp; Register a member in this site.</li><br/>
                      <li><span className="num">2</span>&nbsp; Select the courses.</li><br/>
                      <li><span className="num">3</span>&nbsp; Reserve the number of seats.</li><br/>
                      <li><span className="num">4</span>&nbsp; Get price and make payment.</li><br/>
                      <li><span className="num">5</span>&nbsp; Add members and track.</li>
                  </ul>
               </div>
               <div className="col-md-4">
                <img className="img-fluid mx-auto d-block" src="images/man2.png" alt=""/>
               </div>
               <div className="col-md-4">
                  <div className="login-form">
                     <h1 className="text-center login-heading">Register</h1>
                     <form className="pl-4 pr-4">
                         <label style={{"color": "white"}}><strong>Email:</strong></label><br/>
                         <input className="form-control" type="email" placeholder="Email"/>
                         <label style={{"color": "white"}}><strong>Password:</strong></label><br/>
                         <input className="form-control" type="password" placeholder="Password"/>
                         <label style={{"color": "black", "borderBottom": "1px solid white"}}><h2>Name (required)</h2></label><br/>
                         <input className="form-control" type="text" placeholder="Name"/><br/>
                         <input className="form-control"  type="button" value="Register" style={{"backgroundColor":"lightgreen", "border": "2px solid white", "color":"white", "cursor":"pointer"}}/>
                     </form>
                  </div>
               </div>
           </div>
        </div>
      </div>
    )
  }
}

export default Login;