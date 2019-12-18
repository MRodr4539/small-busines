import React from 'react';
import Container from '@material-ui/core/Container';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{ text }</div>

const Listing = (props) => {
  const id = props.match.params.id
  const listing = props.listings.find(c => c.id == id)

const defaultProps = {
  center: {
    lat: Number(listing.latitude),
    lng: Number(listing.longitude),
  },
  zoom: 13
};


  return (
    <Container maxWidth = 'sn' className = 'listing-container'>
       <h2>Name: {listing.name}</h2>
       <h4>Address: {listing.address}</h4>
       <h4>Hours: {listing.hours}</h4>
       <h4>Description: {listing.description}</h4>
       <Container style={{ height: '400px', width: '450px'}}>
         <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}>
            <AnyReactComponent lat={listing.latitude} lng={listing.longitude} text={listing.name}/>
          </GoogleMapReact>
       </Container>
    </Container>
  )
}



export default Listing;