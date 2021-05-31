import React from 'react'
import { Component } from 'react'
import {Link} from 'react-router-dom';

import {Carousel,Card,CardDeck,Button,Form,FormControl} from 'react-bootstrap'




class dashboard extends Component {
    render ()
    { 
        
        return(
          <div class="text-center">
              <h3 >Welcome to Smart construction Manager</h3>
              <h7 >To proceed you first need to complete your Profile</h7>
              <div class="text-center mt-3">
                  <Link to="/createProfile">
              <button type="button" class="btn btn-primary" >Create profile</button>
              </Link>
             
              </div>
                
            <Carousel fade style={{marginTop:'20px',marginBottom:'30px'}} >
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/1126773.jpg"
                    alt="First slide"
                    height="550" width="700 "
                    />
                    <Carousel.Caption>
                    <h3>Manage Your Construction</h3>
                    <p>We help our customers buy best homes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.wallpapersafari.com/1/23/BlYcfZ.jpg"
                    alt="Second slide"
                    height="550" width="700"
                    />

                    <Carousel.Caption>
                    <h3>Property Dealers</h3>
                    <p>We will provide Property Dealers that fit your needs</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://c4.wallpaperflare.com/wallpaper/820/158/492/house-architecture-luxury-homes-modern-car-hd-wallpaper-preview.jpg"
                    alt="Third slide"
                    height="550" width="700"
                    />

                    <Carousel.Caption>
                    <h3>Plot Locations</h3>
                    <p>Buy Plots without going through time taking procedure</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <Form inline>
                  <h3 style={{marginBottom:'20px'}}>Search Properties for sale in Pakistan</h3>
      <FormControl type="text" placeholder="Search for Houses / Plots" className="mr-sm-2" />
      <Button variant="outline-dark" className="mt-3">Search</Button>
    </Form>
                
                <CardDeck style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
  <Card style={{width:'20rem',marginRight:'30px'}}>
    <Card.Img variant="top" src="https://media.zameen.com/thumbnails/10437-400x300.jpeg" />
    <Card.Body>
      <Card.Title> Pkr 18 Crore</Card.Title>
      <Card.Text>
        Islamabad
      </Card.Text>
    </Card.Body>
    <Link to="houseDetailOne">
              <Button variant="primary"  >Check Details</Button>
              </Link>
  </Card>
  <Card style={{width:'20rem',marginRight:'30px'}}>
    <Card.Img variant="top" src="https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607" />
    <Card.Body>
      <Card.Title>Pkr 20 Crore</Card.Title>
      <Card.Text>
      Description
      • Bedrooms with attached bathrooms
      • Drawing room
      • Dining room
      • TV Lounge
      • Kitchen
      </Card.Text>
    </Card.Body>
    <Button variant="primary">Check Details</Button>
  </Card>
  <Card style={{width:'20rem'}}>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=" />
    <Card.Body>
      <Card.Title>Pkr 22 Crore</Card.Title>
      <Card.Text>
      Description
Secure Future Estate & Builders Offers

2 Kanal antique house Brand New for sale In DHA Phase 6 

Bed 5 with attached bath 2+3
      </Card.Text>
    </Card.Body>
    <Button variant="primary">Check Details</Button>
  </Card>
</CardDeck>

<CardDeck style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'35px'}}>
  <Card style={{width:'20rem',marginRight:'30px'}}>
    <Card.Img variant="top" src="https://i.ytimg.com/vi/922SERfLJh0/maxresdefault.jpg" />
    <Card.Body>
      <Card.Title>Pkr 30 Crore</Card.Title>
      <Card.Text>
      P: Perfect Ventilation
L: Lively Light
U: Utmost Privacy
S: Smart Space
      </Card.Text>
    </Card.Body>
    <Button variant="primary">Check Details</Button>
  </Card>
  <Card style={{width:'20rem',marginRight:'30px'}}>
    <Card.Img variant="top" src="https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607" />
    <Card.Body>
      <Card.Title>Pkr 40 Crore</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Button variant="primary">Check Details</Button>
  </Card>
  <Card style={{width:'20rem'}}>
    <Card.Img variant="top" src="https://media.zameen.com/thumbnails/1226898-400x300.jpeg" />
    <Card.Body>
      <Card.Title>Pkr 4 Crore</Card.Title>
      <Card.Text>
      This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Button variant="primary">Check Details</Button>
  </Card>
</CardDeck>



             
                   
            </div>
         
                      
          
          
          



    )
    
} }

export default dashboard;

