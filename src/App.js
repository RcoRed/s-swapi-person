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
  let [hasPrevious, setHasPrevious] = useState(false);

  async function richiesta(inputText, p) {
    try {
      const { data } = await ApiPpo(inputText, p);
      await setPeople(data.results);
      setHasNext(true); //reset
      //controllo se c'è il next
      if (!data.next) {
        setHasNext(false); //se no c'è blocco il pulsante
      }
    } catch (err) {
      console.log(err);
      return <p className="errore">Ops, qualcosa è andato storto! Riprova!</p>;
    }
  }

  const handleSubmit = async (inputText) => {
    await richiesta(inputText, 1);
    setPage(1); //reset
    setName(inputText); //salvo il name da cercare per next
    setHidden(false); //sblocco next e tabella
  };

  const nextPage = async () => {
    setHasPrevious(true);
    await richiesta(name, page + 1);
    setPage(page + 1); //aggiorno la page
  };
  const previousPage = async () => {
    console.log(page);
    if (page == 2) {
      setHasPrevious(false);
    }
    await richiesta(name, page - 1);
    setPage(page - 1); //aggiorno la page
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      {!hidden && (
        <>
          <Table people={people} />
          {hasPrevious && (
            <>
              <button className="button" onClick={previousPage}>
                Pagina precedente
              </button>
            </>
          )}
          {hasNext && (
            <>
              <button className="button" onClick={nextPage}>
                Prossima paina
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
