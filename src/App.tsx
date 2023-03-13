import Countries from "./components/Countries/CountriesList/CountriesList";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <h1 className="heading1">Countries List</h1>
      <Countries />
    </div>
  );
};

export default App;
