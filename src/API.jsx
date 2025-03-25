import { PAGES } from './PAGES.jsx';

const API_URLS = {
  PEOPLE: 'https://swapi.dev/api/people',
  VEHICLES: 'https://swapi.dev/api/vehicles',
  PLANETS: 'https://swapi.dev/api/planets',
};

export const ApiConfig = {
  [PAGES.PEOPLE]: API_URLS.PEOPLE,
  [PAGES.VEHICLES]: API_URLS.VEHICLES,
  [PAGES.PLANETS]: API_URLS.PLANETS,
};