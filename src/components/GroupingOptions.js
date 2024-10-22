import React, { useEffect, useState } from 'react';  
import '../styles/header.css';  
  
const GroupingOptions = ({ setGrouping, setSorting }) => {  
  const [selectedGrouping, setSelectedGrouping] = useState('status');  
  const [selectedSorting, setSelectedSorting] = useState('title');  
  
  useEffect(() => {  
   const savedGrouping = localStorage.getItem('grouping');  
   const savedSorting = localStorage.getItem('sorting');  
   if (savedGrouping) setSelectedGrouping(savedGrouping);  
   if (savedSorting) setSelectedSorting(savedSorting);  
  }, []);  
  
  useEffect(() => {  
   localStorage.setItem('grouping', selectedGrouping);  
   localStorage.setItem('sorting', selectedSorting);  
   setGrouping(selectedGrouping);  
   setSorting(selectedSorting);  
  }, [selectedGrouping, selectedSorting, setGrouping, setSorting]);  
  
  return (  
   <div className="grouping-options">  
    <h3>Group By:</h3>  
    <select onChange={(e) => setSelectedGrouping(e.target.value)} value={selectedGrouping}>  
      <option value="status">Status</option>  
      <option value="user">User</option>  
      <option value="priority">Priority</option>  
    </select>  
    <h3>Sort By:</h3>  
    <select onChange={(e) => setSelectedSorting(e.target.value)} value={selectedSorting}>  
      <option value="title">Title</option>  
      <option value="priority">Priority</option>  
    </select>  
   </div>  
  );  
};  
  
export default GroupingOptions;