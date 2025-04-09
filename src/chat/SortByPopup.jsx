import React from 'react';
import { useState } from 'react';

const SortByPopup = ({ onClose, applyFilters }) => {
  const [selectedOption, setSelectedOption] = useState('sortByPopularity');

  const sortingOptions = [
    { id: 'short_popularity', label: 'Popularity', value: 'sortByPopularity' },
    { id: 'short_exp_high', label: 'Experience : High to Low', value: 'sortByExperience_1' },
    { id: 'short_exp_low', label: 'Experience : Low to High', value: 'sortByExperience_0' },
    { id: 'short_orders_high', label: 'Total orders : High to Low', value: 'sortByOrders_1' },
    { id: 'short_orders_low', label: 'Total orders : Low to High', value: 'sortByOrders_0' },
    { id: 'short_price_high', label: 'Price : High to Low', value: 'sortByPrice_1' },
    { id: 'short_price_low', label: 'Price : Low to High', value: 'sortByPrice_0' },
    { id: 'short_rating', label: 'Rating : High to Low', value: 'sortByRating_1' },
  ];

  const handleApply = () => {
    applyFilters(selectedOption);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h3 className="text-xl font-semibold mb-4">Sort By</h3>
        {sortingOptions.map((option) => (
          <div key={option.id} className="mb-2">
            <input
              type="radio"
              id={option.id}
              name="sortBy"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => setSelectedOption(option.value)}
              className="mr-2"
            />
            <label htmlFor={option.id} className="cursor-pointer">{option.label}</label>
          </div>
        ))}
        <div className="mt-4 flex justify-end">
          <button onClick={handleApply} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2">Apply</button>
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SortByPopup;
