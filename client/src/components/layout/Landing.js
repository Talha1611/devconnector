import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Landing extends Component {
    render() {
        return (
            <div class="landing">
    <div className="dark-overlay landing-inner text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Smart Construction Manager
            </h1>
            <p className="lead"> We manage your construction needs.</p>
            <hr />
            <Link to="/register" className="btn btn-lg btn-info ">Sign Up</Link>
            <Link to="/login" className="btn btn-lg btn-light m-2">Login</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
        )
    }
}

export default Landing;