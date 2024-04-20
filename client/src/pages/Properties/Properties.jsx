import React from 'react'
import "./properties.css";
import SearchBar from '../../component/SerachBar/SearchBar';
const Properties = () => {
  return (
    <div className='wrapper'>
      <div className='flexColCenter paddings innerWidth properties-container'>
        <SearchBar />
      </div>
    </div>
  )
}

export default Properties