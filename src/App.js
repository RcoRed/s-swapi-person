import { useState } from "react";
import SearchBar from "./searchBar";
import ApiPpo from "./apiPpo";
import Table from "./table";
import Button from "./button";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  let [name, setName] = useState("");
  let [hidden, setHidden] = useState(true);
  let [hasNext, setHasNext] = useState(true);

  const handleSubmit = async (inputText) => {
    let p = 1; //se non lo faccio con questo metedo non funziona
    const { data } = await ApiPpo(inputText, p);
    setPage(p); //reset
    setName(inputText); //salvo il name da cercare per next
    setHidden(false); //sblocco next e tabella
    setHasNext(true); //reset
    if (!data.next) {
      //controllo se c'è il next
      setHasNext(false); //se no c'è blocco il pulsante
    }
    setPeople(data.results);
  };
  const handleNextPage = async (inputText) => {
    let p = page; //se non lo faccio con questo metodo non funziona...
    p++;
    const { data } = await ApiPpo(inputText, p);
    setPage(p); //aggiorno la page
    if (!data.next) {
      //controllo del next
      setHasNext(false);
    }
    setPeople(data.results);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      {!hidden && (
        <>
          <Table people={people} />
          {hasNext && (
            <>
              <Button onClick={handleNextPage} name={name} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
