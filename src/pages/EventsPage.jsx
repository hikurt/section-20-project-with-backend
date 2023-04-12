import React from 'react';
import EventsList from '../components/EventsList';

const DUMMY_EVENTS = [
  {
    id: 'a-1',
    title: 'Hackathon',
    date: new Date().toDateString(),
    image: 'https://www.usna.edu/NewsCenter/2014/images/cyber.jpg',
  },
  {
    id: 'a-2',
    title: 'KebabZone',
    date: new Date().toDateString(),
    image: 'https://community.connection.com/wp-content/uploads/2019/02/857456-ISSANH-Virtue-BLOG.jpg',
  }
];

const EventsPage = () => {
  return <EventsList events={DUMMY_EVENTS}/>;  
};

export default EventsPage;