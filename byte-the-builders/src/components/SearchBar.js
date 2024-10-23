// // src/components/SearchBar.js
// import React, { useState } from 'react';
// import '../App.css';

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Handle the search logic here
//     console.log('Searching for:', searchQuery);
//   };

//   return (
//     <div className="search-bar-container">
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search Projects, Employees, Materials, Clients, Equipment..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;


// src/components/SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleSearch = (e) => {
    e.preventDefault();
    // Trim and convert the search query to lower case for easier matching
    const query = searchQuery.trim().toLowerCase();

    // Navigate to different routes based on the search query
    if (query.includes('client')) {
      navigate('/clients'); // Redirect to clients page
    } else if (query.includes('employee')) {
      navigate('/employees'); // Redirect to employees page
    } else if (query.includes('equipment')) {
      navigate('/equipment'); // Redirect to equipment page
    } else if (query.includes('material')) {
      navigate('/materials'); // Redirect to materials page
    } else {
      console.log('Searching for:', query); // Handle searching logic if necessary
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Projects, Employees, Materials, Clients, Equipment..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
