import { useState } from 'react';
import PropTypes from 'prop-types';
import './navbar.css';

export function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input className="search-bar-input"
        type="text"
        placeholder="Encontre seu filme ou série favorita"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-bar-button" type="submit">Search</button>
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};