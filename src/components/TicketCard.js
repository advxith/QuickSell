import React from 'react';  
import '../styles/ticketCard.css';  
  
const TicketCard = ({ ticket }) => {  
  return (  
   <li className={`ticket-card priority-${ticket.priority}`}>  
    <h4>{ticket.title}</h4>  
    <p>  
      <strong>Status:</strong> {ticket.status}  
    </p>  
    <p>  
      <strong>User:</strong> {ticket.user}  
    </p>  
    <p>  
      <strong>Priority:</strong> {ticket.priority === 4 ? 'Urgent' : ticket.priority === 3 ? 'High' : ticket.priority === 2 ? 'Medium' : ticket.priority === 1 ? 'Low' : 'No Priority'}  
    </p>  
   </li>  
  );  
};  
  
export default TicketCard;