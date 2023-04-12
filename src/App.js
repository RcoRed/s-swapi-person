import SearchBar from './searchBar';
import ApiPpo from './apiPpo';
import './App.css';

function App() {

  const handleSubmit = async(inputText) => {
      const {data} = await ApiPpo(inputText);
      console.log(data);
  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
