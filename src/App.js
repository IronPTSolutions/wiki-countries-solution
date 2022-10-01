import { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/countries/CountriesList';
import CountryDetail from './components/countries/CountryDetail';
import NavBar from './components/misc/NavBar';
import { fetchCountries } from './services/country-service';

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = useCallback(() => {
    fetchCountries().then((countries) => setCountries(countries));
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  console.log(countries);

  return (
    <div className="App">
      <NavBar />
      <div className="row">
        <CountriesList countries={countries} />
        <Routes>
          <Route path="/:alpha3code" element={<CountryDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
