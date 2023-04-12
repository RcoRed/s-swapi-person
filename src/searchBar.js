import { useState } from 'react';

function SearchBar({onSubmit}) {
  const [inputText, setInputText] = useState("");

  function handleFormSubmit(event){
    event.preventDefault();
    onSubmit(inputText);
  }

  function handleChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input placeholder="Inserisci nome" value={inputText} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;