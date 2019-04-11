import React, { Component } from 'react'

import Hero from './Hero.jsx';
import Places from './Places.jsx';
import Login from './Login.jsx';
import Courses from './Courses.jsx';
import Footer from './Footer.jsx';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Places/>
        <Login/>
        <Courses/>
        <Footer/>
      </div>
    )
  }
}
