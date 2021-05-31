import React from 'react'
import { Component } from 'react'
import {Navbar,Form,Button} from 'react-bootstrap'
import FloatingLabel from "react-bootstrap-floating-label";


class postAd extends Component {
    render ()
    { 
        
        return(
            
           <div >
              <br/>
             <h2 style={{alignItems:'center'}}>Property Management </h2>
             <br/>
             <br/>

             <Navbar bg="primary" variant="dark" >

             <Navbar.Brand href="" style={{marginLeft:'20px'}}>Add Property Type</Navbar.Brand>
             </Navbar>

             <br/>
             <br/>

             <select className="form-control form-control-lg" name="status" style={{marginBottom:'20px'}}>
                          
                        <option value="0" selected>* Select Your Purpose</option>
                        <option value="Developer" >Rent</option>
                        <option value="Junior Developer">For Sale</option>
                        
                      </select>
                      <select className="form-control form-control-lg" name="status" style={{marginBottom:'20px'}}>
                          
                        <option value="0" selected> Property type</option>
                        <option value="Developer" >Homes</option>
                        <option value="Junior Developer">Plots</option>
                        <option value="Junior Developer">Commercial</option>
                        
                      </select>
                      <select className="form-control form-control-lg" name="status" style={{marginBottom:'20px'}}>
                          
                        <option value="0" selected>* Select Your City</option>
                        <option value="Developer" >Islamabad</option>
                        <option value="Junior Developer">Karachi</option>
                        <option value="Junior Developer">Lahore</option>
                        <option value="Junior Developer">Multan</option>
                        <option value="Junior Developer">Peshawer</option>

                        
                      </select>
  

             <Navbar bg="primary" variant="dark" >

                <Navbar.Brand href="" style={{marginLeft:'20px'}}>Property Details</Navbar.Brand>
                </Navbar>
                <br/>
                <br/>
                       <Form>
                    <FloatingLabel controlId="floatingTextarea" label="Add Property title" className="mb-3">
                  <Form.Control as="textarea" placeholder="Add Details" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Add Description">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '200px' }}
                  />
                   </FloatingLabel>
                   <FloatingLabel controlId="floatingTextarea" label="Add Inclusive Price in PKR" className="mt-3">
                  <Form.Control as="textarea" placeholder="Add Details" />
                </FloatingLabel>
                    </Form>
                    <br/>
                    <br/>

                <Navbar bg="primary" variant="dark" >

                <Navbar.Brand href="" style={{marginLeft:'20px'}}>Add  Images</Navbar.Brand>
                </Navbar>
                <br/>
                <br/>

                      <Form.Group controlId="formFile" className="mb-3">
              <Form.Label style={{marginRight:'10px'}}>Upload your property Images</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label style={{marginRight:'10px'}}>Upload Valid Files</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>


            <Navbar bg="primary" variant="dark" >

<Navbar.Brand href="" style={{marginLeft:'20px'}}>Add  Contact Details</Navbar.Brand>
</Navbar>
<br/>
<br/>


<div className="create-profile">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                 
                  
                  <p className="lead text-center">Add Contact Details</p>
                  
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
                      <input type="text" className="form-control form-control-lg" placeholder="Website" name="website" value="http://www.SConstructionM.test"
                      />
                      <small className="form-text text-muted">Enter your Telephone No</small>
                    </div>
                   <div className="d-grid gap-2">
                      
                    <Button variant="outline-success" size="lg">
    Post Ad
  </Button>
  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>


                    
                    
                 
</div>


  
  
              

                
  


                   
          

         
    )
    
} }

export default postAd;

