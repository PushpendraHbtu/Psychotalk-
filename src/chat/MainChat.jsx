// import React from 'react'
import React, { useState } from 'react';
import Chat from './Chat';
import NevChat from './NevChat';
import SortByPopup from './SortByPopup';
import Recommend from "./Recommend";
import { data } from './Data';
function MainChat(){
    const [showRecommend, setShowRecommend] = useState(false);
    const [filteredData, setFilteredData] = useState(data);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSortByPopup, setShowSortByPopup] = useState(false);

    // const handleChatClick = () => {
    //     setShowChat(true);
    //   };
    
      const resetSearch = () => {
        setSearchQuery('');
      };
    
      const applyFilters = (filters) => {
        let filteredItems = [...data]; // Start with all items
    
        // Filter by skill
        if (filters.skill.length > 0 && filters.skill[0] !== 'All') {
          filteredItems = filteredItems.filter(item => 
            filters.skill.some(skill => item.field.includes(skill))
          );
        }
    
        // Filter by experience
        if (filters.experience !== Infinity) {
          filteredItems = filteredItems.filter(item => 
            parseInt(item.exp.split(' ')[0]) >= filters.experience
          );
        }
    
        // Filter by language
        if (filters.language.length > 0) {
          filteredItems = filteredItems.filter(item => 
            filters.language.every(lang => item.language.includes(lang))
          );
        }
    
        setFilteredData(filteredItems);
        setShowRecommend(false);
      };
    
      const handleSearch = () => {
        if (searchQuery.trim() !== '') {
          const searchedData = data.filter(item => {
            return (
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.language.toLowerCase().includes(searchQuery.toLowerCase())
            );
          });
          setFilteredData(searchedData);
        } else {
          setFilteredData(data); // Reset to original data if search query is empty
        }
      };
      const handleSortByClick = () => {
        setShowSortByPopup(true);
    };

    const handleSortByApply = (option) => {
        applyFilters(option);
        setShowSortByPopup(false);
    };
    

  return (
    <div>
           {<NevChat 
        setShowRecommend={setShowRecommend} 
        setSearchQuery={setSearchQuery} 
        handleSearch={handleSearch}
        handleSortByClick={handleSortByClick}
      />}
      { <Chat filteredData={filteredData} />}
      {showSortByPopup && <SortByPopup onClose={() => setShowSortByPopup(false)} applyFilters={handleSortByApply} />}
      {showRecommend && <Recommend onClose={() => setShowRecommend(false)} applyFilters={applyFilters} resetSearch={resetSearch}/>}
    </div>
  )
}

export default MainChat