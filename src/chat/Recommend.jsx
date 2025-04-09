// src/Recommend.js
import React, { useState } from 'react';

function Recommend({ onClose, applyFilters, resetSearch }) {
  const [selectedSkill, setSelectedSkill] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('skill'); // New state for filter selection

  const handleFilterApply = () => {
    const filters = {
      skill: selectedSkill === 'All' ? ['Vedic', 'Numerology', 'Vastu'] : [selectedSkill],
      experience: selectedExperience === 'All' ? Infinity : parseInt(selectedExperience.split(' ')[0]),
      language: selectedLanguage.length > 0 ? selectedLanguage : ['English', 'Hindi', 'Punjabi']
    };
    applyFilters(filters);
    resetSearch();
    setShowRecommend(false);
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 items-center justify-center'>
      <div className="w-[40vw] h-[80vh] bg-yellow-100 rounded-lg shadow-xl p-4 ml-[35vw] mt-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Filter Options</h2>
          <h2 className="text-xl font-semibold">Category</h2>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">X</button>
        </div>

        <div className='flex justify-center content-center items-start'>
          <div className='Filter-Section bg-slate-500 w-[30%] h-full space-y-4 p-4'>
            <button onClick={() => setSelectedFilter('skill')} className={`bg-slate-400 ${selectedFilter === 'skill' ? 'bg-blue-500 text-white' : ''}`}>Skill</button>
            <button onClick={() => setSelectedFilter('experience')} className={`bg-slate-400 ${selectedFilter === 'experience' ? 'bg-blue-500 text-white' : ''}`}>Experience</button>
            <button onClick={() => setSelectedFilter('language')} className={`bg-slate-400 ${selectedFilter === 'language' ? 'bg-blue-500 text-white' : ''}`}>Language</button>
          </div>
          <div className="Category space-y-4 bg-red-400 p-5 w-[70%] scroll-smooth focus:scroll-auto overflow-hidden border-l-2 border-black">
            {selectedFilter === 'skill' && (
              <>
                <h3>Skill:</h3>
                <input type="radio" id="allSkills" name="skill" value="All" checked={selectedSkill === 'All'} onChange={() => setSelectedSkill('All')} />
                <label htmlFor="allSkills">All</label><br />
                <input type="radio" id="vedic" name="skill" value="Vedic" checked={selectedSkill === 'Vedic'} onChange={() => setSelectedSkill('Vedic')} />
                <label htmlFor="vedic">Vedic</label><br />
                <input type="radio" id="numerology" name="skill" value="Numerology" checked={selectedSkill === 'Numerology'} onChange={() => setSelectedSkill('Numerology')} />
                <label htmlFor="numerology">Numerology</label><br />
                <input type="radio" id="vastu" name="skill" value="Vastu" checked={selectedSkill === 'Vastu'} onChange={() => setSelectedSkill('Vastu')} />
                <label htmlFor="vastu">Vastu</label>
              </>
            )}
            {selectedFilter === 'experience' && (
              <>
                <h3>Experience:</h3>
                <input type="radio" id="allExp" name="experience" value="All" checked={selectedExperience === 'All'} onChange={() => setSelectedExperience('All')} />
                <label htmlFor="allExp">All</label><br />
                <input type="radio" id="exp3" name="experience" value="3 Years" checked={selectedExperience === '3 Years'} onChange={() => setSelectedExperience('3 Years')} />
                <label htmlFor="exp3">3 Years</label><br />
                <input type="radio" id="exp5" name="experience" value="5 Years" checked={selectedExperience === '5 Years'} onChange={() => setSelectedExperience('5 Years')} />
                <label htmlFor="exp5">5 Years</label><br />
                <input type="radio" id="exp6" name="experience" value="6 Years and Above" checked={selectedExperience === '6 Years and Above'} onChange={() => setSelectedExperience('6 Years and Above')} />
                <label htmlFor="exp6">6 Years and Above</label>
              </>
            )}
            {selectedFilter === 'language' && (
              <>
                <h3>Language:</h3>
                <input type="checkbox" id="english" name="language" value="English" checked={selectedLanguage.includes('English')} onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedLanguage([...selectedLanguage, 'English']);
                  } else {
                    setSelectedLanguage(selectedLanguage.filter(lang => lang !== 'English'));
                  }
                }} />
                <label htmlFor="english">English</label><br />
                <input type="checkbox" id="hindi" name="language" value="Hindi" checked={selectedLanguage.includes('Hindi')} onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedLanguage([...selectedLanguage, 'Hindi']);
                  } else {
                    setSelectedLanguage(selectedLanguage.filter(lang => lang !== 'Hindi'));
                  }
                }} />
                <label htmlFor="hindi">Hindi</label><br />
                <input type="checkbox" id="punjabi" name="language" value="Punjabi" checked={selectedLanguage.includes('Punjabi')} onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedLanguage([...selectedLanguage, 'Punjabi']);
                  } else {
                    setSelectedLanguage(selectedLanguage.filter(lang => lang !== 'Punjabi'));
                  }
                }} />
                <label htmlFor="punjabi">Punjabi</label>
              </>
            )}
          </div>
        </div>
        <button onClick={handleFilterApply} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 mt-4">
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default Recommend;
