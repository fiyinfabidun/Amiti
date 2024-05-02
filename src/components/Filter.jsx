import React from 'react'

const Filter = ({ filterType, setFilterType }) => {
    const handleFilter = (type) => {
      setFilterType(type);
    };
  
    return (
      <div className="filter-buttons">
        <button onClick={() => handleFilter('all')} className={filterType === 'all' ? 'active' : ''}>All</button>

        <button onClick={() => handleFilter('Mobility Aids')} className={filterType === 'Mobility Aids' ? 'active' : ''}>Mobility Aids</button>

        <button onClick={() => handleFilter('Assistive Devices')} className={filterType === 'Assistive Devices' ? 'active' : ''}>Assistive Devices</button>

        <button onClick={() => handleFilter('Hearing Aids')} className={filterType === 'Hearing Aids' ? 'active' : ''}>Hearing Aids</button>

        <button onClick={() => handleFilter('vision Aids')} className={filterType === 'vision Aids' ? 'active' : ''}>Vision Aids</button>

        <button onClick={() => handleFilter('Computer Software')} className={filterType === 'Computer Software' ? 'active' : ''}>Computer Software</button>

        <button onClick={() => handleFilter('others')} className={filterType === 'others' ? 'active' : ''}>Others</button>
      </div>
    );
  };
  
  export default Filter;