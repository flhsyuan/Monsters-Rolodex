import React from 'react';
import './search-box.style.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

// (
//     {/* add the search bar the placeholder is used as the id. onchange performs like a listener */}
//     <input className='search'
//       type='search'
//       placeholder={placeholder}
//       onChange={handleChange}
//         // the setState function's second parameter is a callback function which will run after the setState is finished
//         // this.setState({ handleChange })

//     />
// );
