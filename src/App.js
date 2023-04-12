import { useState } from 'react';
import SearchBar from './searchBar';
import ApiPpo from './apiPpo';
//import {NextPage} from './apiPpo';
import Table from "./table";
import './App.css';



function App() {
  const [people, setPeople] = useState([]);

  const handleSubmit = async(inputText) => {
      const {data} = await ApiPpo(inputText);
      setPeople(data.results);
  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <Table people={people} />
    </div>
  );
}

export default App;
