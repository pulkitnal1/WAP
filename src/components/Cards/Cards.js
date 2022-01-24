import React from 'react'
import Card from './Card/Card'
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="cards">
      <div className="cards__cols">
        <Card link="/addApp" description={{title:'Application',descritpion:'Add/View',details:'Add new applications or search for info on existing application.'}}></Card>
        <Card link="/dependencies" description={{title:'Dependencies',descritpion:'Add/View',details:'Add new application dependecies for any existing application.'}}></Card>
        <Card link="/environments" description={{title:'Environments',descritpion:'Add/View',details:'Add new environments or search for info on existing environments for an existing application.'}}></Card>
        <Card link="/mappings" description={{title:'Mappings',descritpion:'Update/View',details:'Update or view current mappings of different environments on any exiting application.'}}></Card>
        <Card link="/bookings" description={{title:'Bookings',descritpion:'Request/View',details:'Request new booking for any application environment or view exisitng bookings.'}}></Card>
        <Card link="/deployments" description={{title:'Deployments',descritpion:'Add/View',details:'Update deployment schedule for any existing application environment or view current deployment schedule.'}}></Card>
        <Card link="/decommisioning" description={{title:'Decommision',descritpion:'Application/ Environment/ Booking',details:'Delete any existing application or any of its environment or any bookings for that application.'}}></Card>
        <Card link="/techLandscape" description={{title:'Technology Landscape',descritpion:'',details:'View complete organisation technology landscape.'}}></Card>

      </div>
    </div>
  )
}

export default Cards;
