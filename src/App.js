import { useState } from "react";
import SearchBar from "./searchBar";
import ApiPpo from "./apiPpo";
import Table from "./table";
import Button from "./button";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [hidden, setHidden] = useState(true);

  const handleSubmit = async (inputText) => {
    const { data } = await ApiPpo(inputText, page);
    setPage(page + 1);
    setName(inputText);
    setHidden(false);
    setPeople(data.results);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      {!hidden && (
        <>
          <Table people={people} />
          <Button onClick={handleSubmit} name={name} />
        </>
      )}
    </div>
  );
}

export default App;
