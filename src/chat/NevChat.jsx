// src/chat/NevChat.js
import React from 'react';
import { LuSearch } from "react-icons/lu";

function NevChat({ setShowRecommend, setSearchQuery, handleSearch, handleSortByClick }) {
  const balance = 0;

  return (
    <div className="px-[20vh] mt-2  h-[10vh] pb-6 font-serif text-center text-xl">
      <div className="Nevigation h-full flex content-center items-center gap-3">
        <div className='Logo bg-yellow-200 rounded-xl font-semibold mx-6 py-3 px-10'>Chat with Pshychotalk</div>
        <div className='balance mx-6'>Available balance: {balance}</div>
        <div className='NevSearch_area flex gap-2'>
          <div className='rounded-xl px-3 py-1 border-solid border-2 border-green-400 text-green-600 hover:bg-green-600 hover:text-white active:ring-black focus:ring-gray-800 cursor-pointer'><span>Recharge</span></div>
          <div className="rounded-xl px-3 py-1 border-solid border-2 border-gray-500 filter cursor-pointer hover:bg-slate-300"><button onClick={() => setShowRecommend(true)}>Filter</button></div>
          <div className="rounded-xl px-3 py-1 border-solid border-2 border-gray-500 Sortby cursor-pointer"  onClick={handleSortByClick}>Sort by</div>
          <div className="rounded-xl p-1 border-solid border-2 flex justify-center border-gray-500 Searchbar">
            <input 
              type="text" 
              placeholder='Search name..' 
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button 
              className='bg-yellow-400 rounded-xl w-10 h-full items-end searchbtn'
              onClick={handleSearch}
            >
              <LuSearch size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NevChat;
