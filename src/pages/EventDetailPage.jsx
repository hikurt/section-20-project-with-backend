import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h2>EventDetailPage</h2>
      <p>Event id: {params.eventId}</p>
    </>
  );  
};

export default EventDetailPage;