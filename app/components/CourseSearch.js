'use client';
import { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/courses/search?query=${query}`);
    const data = await response.json();
    getSearchResults(data);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search Courses..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      ></input>
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
