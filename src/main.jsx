import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader} from './pages/EventsPage';
import EventDetailPage, { 
  loader as eventDetailLoader,
  action as deleteEventAction
} from './pages/EventDetailPage';
import NewEventPage, { action as newEventAction } from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/RootLayout';
import EventsRootLayout from './pages/EventsRootLayout';
import ErrorPage from './pages/ErrorPage';

import './index.css'


const router = createBrowserRouter([
  { path: "/", element: <RootLayout/>, errorElement: <ErrorPage />, children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsRootLayout />, children: [
        { index: true, element: <EventsPage />, loader: eventsLoader},
        { path: ':eventId', id: 'event-detail', loader: eventDetailLoader, children: [
          { index: true, element: <EventDetailPage />, action: deleteEventAction },
          { path: 'edit', element: <EditEventPage /> },
        ]},
        { path: 'new', element: <NewEventPage/>, action: newEventAction},
      ]}
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
