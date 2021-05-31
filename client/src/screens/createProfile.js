import React from 'react'
import { Component } from 'react';


class createProfile extends Component {
    render ()
    { 
        
        return(
            <div className="create-profile">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <a href="dashboard.html" className="btn btn-light">
                    Go Back
                  </a>
                  <h1 className="display-4 text-center">Edit Your Profile</h1>
                  <p className="lead text-center">Let's get some information to complete your profile</p>
                  <small className="d-block pb-3">* = required field</small>
                  <form action="add-experience.html">
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="* Profile handle" name="handle" value="John "
                        required />
                      <small className="form-text text-muted">Enter your Full Name</small>
                    </div>
                    <div className="form-group">
                      <select className="form-control form-control-lg" name="status">
                          
                        <option value="0" selected>* Select Your Country</option>
                        <option value="Developer" >Pakistan</option>
                        <option value="Junior Developer">Saudia Arabia</option>
                        <option value="Senior Developer" >Iran</option>
                        <option value="Manager">Afghanistan</option>
                        <option value="Student or Learning">China</option>
                        <option value="Instructor">Nigeria</option>
                        <option value="Intern">Egypt</option>
                        <option value="Other">Iraq</option>
                      </select>

                      <select className="form-control form-control-lg mt-2" name="status">
                          
                        <option value="0" selected>* Select Your City</option>
                        <option value="Developer" >Islamabad</option>
                        <option value="Junior Developer">Lahore</option>
                        <option value="Senior Developer" >Multan</option>
                        <option value="Manager">Karachi</option>
                        <option value="Student or Learning">Sailkot</option>
                        <option value="Instructor">Rawalpindi</option>
                        <option value="Intern">Quetta</option>
                        <option value="Other">Peshawer</option>
                      </select>
                      <small className="form-text text-muted">Enter Your Address</small>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Company" name="company" value="Street xyz" />
                      <small className="form-text text-muted"> Enter your Website</small>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Website" name="website" value="http://www.SConstructionM.test"
                      />
                      <small className="form-text text-muted">Enter your Telephone No</small>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Location" name="location" value="+00 xxxxxxxxx" />
                      <small className="form-text text-muted">Tell us a little about yourself</small>
                    </div>
                    
                    <div className="form-group">
                      <textarea className="form-control form-control-lg" placeholder="A short bio of yourself" name="bio">I am a business man with 5 years experience in Real estate</textarea>
                      <small className="form-text text-muted">Connect your Social Accounts</small>
                    </div>
        
                    <div className="mb-3">
                      <button type="button" className="btn btn-light">Add Social Network Links</button>
                      <span className="text-muted">Optional</span>
                    </div>
        
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fab fa-twitter"></i>
                        </span>
                      </div>
                      <input type="text" className="form-control form-control-lg" placeholder="Twitter Profile URL" name="twitter" value="https://www.twitter.com/johndoe"
                      />
                    </div>
        
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fab fa-facebook"></i>
                        </span>
                      </div>
                      <input type="text" className="form-control form-control-lg" placeholder="Facebook Page URL" name="facebook" />
                    </div>
        
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fab fa-linkedin"></i>
                        </span>
                      </div>
                      <input type="text" className="form-control form-control-lg" placeholder="Linkedin Profile URL" name="linkedin" />
                    </div>
        
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fab fa-youtube"></i>
                        </span>
                      </div>
                      <input type="text" className="form-control form-control-lg" placeholder="YouTube Channel URL" name="youtube" />
                    </div>
        
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fab fa-instagram"></i>
                        </span>
                      </div>
                      <input type="text" className="form-control form-control-lg" placeholder="Instagram Page URL" name="instagram" />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        
    )
    
} }

export default createProfile;

