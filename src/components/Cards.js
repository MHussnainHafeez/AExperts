import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpeg'
import img5 from './images/img5.jpeg'
import img6 from './images/img6.jpeg'
import img7 from './images/img7.jpeg'
import img8 from './images/img8.jpeg'
import img9 from './images/img9.jpeg'
import img10 from './images/img10.jpeg'


function Cards() {
  return (
    <div className='cards'>
      <h1>OUR SERVICES !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Computerized Mechenical and Electrical Diagnostics'
              label='COMPUTERIZED MECHENICS'
              path='/service'
              
            />
           
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Air Conditioning Work'
              label='AIR CONDITIONING'
              path='/Services'
              
            />
            <CardItem
             src={img2}
              text='Engine, Gear Box, Transmission Repair Service'
              label='Engline Work'
              path='/Services'
            />
             <CardItem
              src={img4}
              text='Air/Fuel Induction Cleaning Service'
              label='CLEANING SERVICE'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img5}
              text='Battery Testing & Replacement'
              label='BATTERY'
              path='/Services'
            />
            <CardItem
              src={img6}
              text='Brake Disc Surfacing'
              label='BRAKES'
              path='/Services'
            />
            <CardItem
              src={img7}
              text='Accident Repairs, Bodywork, Chassis Repairs, Panel Repairs, Painting & Coloring'
              label='PAINTING & COLORING'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img8}
              text='Change Oil'
              label='OIL CHANING'
              path='/Services'
            />
            <CardItem
              src={img9}
              text='We Also Provide ADNOC Vehicle Passing Test & Registration Card Renewal Facility '
              label='TEST SERVICE'
              path='/Services'
            />
            <CardItem
              src={img10}
              text='Vehicle Suspension Service'
              label='SUSPENSION SERVICE'
              path='/Services'
            />
          </ul>
           
        </div>
      </div>
    </div>
  );
}

export default Cards;
