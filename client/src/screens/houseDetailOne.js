import React from 'react'
import { Component } from 'react'
import {Button,Card,CardDeck} from 'react-bootstrap'




class houseDetailOne extends Component {
    render ()
    { 
        
        return(
            <div className="text-center">

<Card style={{width:'50%',marginLeft:'250px'}}>
  <Card.Img variant="top" src="https://media.zameen.com/thumbnails/10437-400x300.jpeg" />
  <Card.Body>
    <Card.Title>PKR 18 Crore</Card.Title>

    <Card.Text>
      A Luxuries home with 3 baths and 5 Bed Rooms including master
      Beds, A good price for such a luxuries home
    </Card.Text>
    <Card.Text>
      <i class="fas fa-map-marker-alt" style={{marginRight:'10px'}}></i>Based in Islamabad G10 Sector
    </Card.Text>

    <Card.Text>
      <i class="fas fa-bed" style={{marginRight:'10px'}}></i>5
    </Card.Text>

    <Card.Text>
      <i class="fas fa-bath" style={{marginRight:'10px'}}></i>3
    </Card.Text>

    <Card.Text>
      <i class="fas fa-ruler-combined" style={{marginRight:'10px'}}></i>
4,500 sqft
    </Card.Text>
   
    <Card.Text>
      <i class="fas fa-parking" style={{marginRight:'10px'}}></i>
      Parking Spaces: 4
    </Card.Text>

   

    <Card.Text>
      <i class="fas fa-drafting-compass" style={{marginRight:'10px'}}></i>
     Built in 2019
    </Card.Text>


   
    <Button variant="outline-success" > <i class="fas fa-phone-alt" style={{marginRight:'10px'}}></i> Call Now</Button>
    <Button variant="outline-danger" style={{marginLeft:'10px'}} > <i class="fas fa-heart" style={{marginRight:'10px'}}></i> Favourite</Button>
  </Card.Body>
</Card>


<br/>

<h5>Similar Houses around G10</h5>

<CardDeck style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
  <Card style={{width:'20rem',marginRight:'30px'}}>
    <Card.Img variant="top" src="https://media.zameen.com/thumbnails/113036091-400x300.jpeg" />
    <Card.Body>
      <Card.Title> Pkr 18 Crore</Card.Title>
      <Card.Text>
        Islamabad
      </Card.Text>
    </Card.Body>
    
              <Button variant="primary"  >Check Details</Button>
              
  </Card>

  <Card style={{width:'20rem',marginRight:'30px'}}>
    <Card.Img variant="top" src="https://media.zameen.com/thumbnails/2275605-400x300.jpeg" />
    <Card.Body>
      <Card.Title>Pkr 20 Crore</Card.Title>
      <Card.Text>
     ISlamabad
      </Card.Text>
    </Card.Body>
    <Button variant="primary">Check Details</Button>
  </Card>


  
  </CardDeck>

  
       

          </div>
        
    )
    
} }

export default houseDetailOne;

