import React from 'react';
import { Outlet } from 'react-router-dom';


import EventsNavigation from '../components/EventsNagivation';

const EventsRootLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsRootLayout;