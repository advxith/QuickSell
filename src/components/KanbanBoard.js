import React, { useEffect, useState } from 'react';  
import GroupingOptions from './GroupingOptions';  
import TicketCard from './TicketCard';  
import '../styles/kanban.css';  
import { fetchTickets } from '../services/apiService';  
  
const KanbanBoard = () => {  
  const [tickets, setTickets] = useState([]);  
  const [grouping, setGrouping] = useState('status');  
  const [sorting, setSorting] = useState('title');  
  
  useEffect(() => {  
   const getTickets = async () => {  
    const data = await fetchTickets();  
    setTickets(data);  
   };  
   getTickets();  
  }, []);  
  
  const groupedTickets = tickets.reduce((acc, ticket) => {  
   const key = ticket[grouping];  
   if (!acc[key]) acc[key] = [];  
   acc[key].push(ticket);  
   return acc;  
  }, {});  
  
  const sortedTickets = Object.values(groupedTickets).flat().sort((a, b) => {  
   if (sorting === 'title') {  
    return a.title.localeCompare(b.title);  
   }  
   return b.priority - a.priority;  
  });  
  
  return (  
   <div className="kanban-board">  
    <GroupingOptions setGrouping={setGrouping} setSorting={setSorting} />  
    <div className="columns">  
      {Object.keys(groupedTickets).map((key) => (  
       <div key={key} className="column">  
        <h2>{key}</h2>  
        <ul>  
          {groupedTickets[key].map((ticket) => (  
           <TicketCard key={ticket.id} ticket={ticket} />  
          ))}  
        </ul>  
       </div>  
      ))}  
    </div>  
   </div>  
  );  
};  
  
export default KanbanBoard;