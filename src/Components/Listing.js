import React from 'react';
import Container from '@material-ui/core/Container';


const Listing = (props) => {
  const id = props.match.parms.id
  const listing = props.listings.find(c => c.id == id)


  return (
    <Container maxWidth = 'sn' className = 'listing-container'>
       <h2>Name: {listing.name}</h2>
       <h4>Address: {listing.address}</h4>
       <h4>Hours: {listing.hours}</h4>
       <h4>Description: {listing.description}</h4>
    </Container>
  )
}



export default Listing;