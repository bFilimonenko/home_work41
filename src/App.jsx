import './App.css';
import { Navigation } from './components/Navigation/index.js';
import { useEffect, useState } from 'react';
import { ItemsList } from './components/ItemsList/index.js';
import { PAGES } from './PAGES.jsx';
import { ApiConfig } from './API.jsx';

function App() {
  const [page, setPage] = useState(PAGES.PEOPLE);
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [entities, setEntities] = useState([]);

  const loadEntities = async (url) => {
    const response = await fetch(url);
    const parsedResponse = await response.json();

    setNextPageUrl(parsedResponse.next);
    setEntities((prevEntities) => [...prevEntities, ...parsedResponse.results]);
  };

  const loadNextPage = async () => {
    await loadEntities(nextPageUrl);
  };

  useEffect(() => {
    setEntities([]);
    loadEntities(ApiConfig[page]).catch((e) => console.error(e.message));
  }, [page]);

  return (
    <>
      <Navigation setPage={setPage} page={page} />
      <ItemsList entities={entities} page={page} loadNextPage={loadNextPage} nextPageUrl={nextPageUrl} />
    </>
  );
}

export default App;
