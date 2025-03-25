import './App.css';
import { Navigation } from './components/Navigation/index.js';
import { useEffect, useState } from 'react';
import { ItemsList } from './components/ItemsList/index.js';

export const PAGES = {
  PEOPLE: 'people',
  VEHICLES: 'vehicles',
  PLANETS: 'planets',
};

const API_URLS = {
  people: 'https://swapi.dev/api/people',
  vehicles: 'https://swapi.dev/api/vehicles',
  planets: 'https://swapi.dev/api/planets',
};

function App() {
  const [page, setPage] = useState(PAGES.PEOPLE);
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [entities, setEntities] = useState([]);

  const loadEntities = async (url) => {
    const response = await fetch(url);
    const parsedResponse = await response.json();

    setNextPageUrl(parsedResponse.next);
    return parsedResponse.results;
  };

  useEffect(() => {
    const fetchData = async () => {
      switch (page) {
        case PAGES.PEOPLE:
          setEntities(await loadEntities(API_URLS.people));
          break;
        case PAGES.VEHICLES:
          setEntities(await loadEntities(API_URLS.vehicles));
          break;
        case PAGES.PLANETS:
          setEntities(await loadEntities(API_URLS.planets));
          break;
      }
    };

    fetchData().catch(console.error);

    console.log(page);
  }, [page]);

  const loadNextPage = async () => {
    console.log(nextPageUrl);
    const nextEntity = await loadEntities(nextPageUrl);
    setEntities((prevEntities) => [...prevEntities, ...nextEntity]);
    console.log(entities);
  };

  return (
    <>
      <Navigation setPage={setPage} />
      <ItemsList entities={entities} page={page} loadNextPage={loadNextPage} nextPageUrl={nextPageUrl}/>
    </>
  );
}

export default App;
