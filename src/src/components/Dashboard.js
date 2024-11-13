import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('/api/tickets')
      .then((response) => setTickets(response.data))
      .catch((error) => console.error('Error fetching tickets:', error));
  }, []);

  return (
    <div>
      <h2>Service Desk Dashboard</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>{ticket.title} - {ticket.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
