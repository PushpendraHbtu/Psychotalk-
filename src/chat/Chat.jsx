// src/chat/Chat.js
import React from 'react';
import { data } from './Data';

function Chat({ filteredData }) {
  // const sortedData = filteredData.sort((a, b) => {
  //   switch(selectedOption) {
  //       case 'sortByPopularity':
  //           return 0; // No sorting
  //       case 'sortByExperience_1':
  //           return parseInt(b.exp.split(' ')[0]) - parseInt(a.exp.split(' ')[0]);
  //       case 'sortByExperience_0':
  //           return parseInt(a.exp.split(' ')[0]) - parseInt(b.exp.split(' ')[0]);
  //       case 'sortByOrders_1':
  //           return b.orders.localeCompare(a.orders);
  //       case 'sortByOrders_0':
  //           return a.orders.localeCompare(b.orders);
  //       case 'sortByPrice_1':
  //           return parseFloat(b.price) - parseFloat(a.price);
  //       case 'sortByPrice_0':
  //           return parseFloat(a.price) - parseFloat(b.price);
  //       case 'sortByRating_1':
  //           return parseFloat(b.star) - parseFloat(a.star);
  //       default:
  //           return 0;
  //   };
  //   });
  return (
    <div className='block box-border isolate '>
      <div className='px-[20vh] pb-7  '>
        <div className='chatbox flex flex-wrap pl-4   '>
          {filteredData.map((item, index) => (
            <div key={index} className='flex  p-1 m-3 h-[20%] w-[30%] justify-center z-10  '>
            <div  className='no-underline mb-2 bg-white shadow-inner shadow-slate-400 hover:shadow-slate-400 hover:shadow-2xl relative hover:border-2 hover:border-slate-400 rounded-lg w-full  '>
             <div className='p-3 flex  justify-between   '>
              <div className=' flex w-[75%] text-center gap-2  '>
              <div className=' flex-col  '>
                <div className='border-2 border-white rounded-full opacity-90 mr-2 '>
                  <img className='  cursor-pointer w-[12vh] h-[12vh] bg-cover relative overflow-hidden rounded-full ' src={item.img} alt="" /></div>
                <div className='mt-3 '>
                <div className='inline-flex'>{item.star}</div>
                <div className=' block font-#727272'>{item.orders}</div>
                </div>
              </div>
              <div className='intro  ml-2 font-[14px] text-left overflow-hidden '>
                <h1 className='Name  text-xl font-semibold text-ellipsis whitespace-nowrap overflow-hidden block cursor-pointer '>{item.name}</h1>
                <div className='field truncate'>{item.field}</div>
                <div className='language truncate'>{item.language}</div>
                <div className='Exp'>{item.exp}</div>
                <div className='Price'>{item.price}</div>
              </div>
             </div> 
              <div className='Chatbutton -z-0 '>
                <button className='my-12 m-4 text-green-600 ring-2 ring-green-700 hover:text-lg shadow-green-400 shadow-inner hover:ring-offset-2 rounded-xl h-11 w-16 -right-10 '>Chat</button>
              </div>
            </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chat;
