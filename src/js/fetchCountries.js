function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(resp => resp.json())
    .then(data => data);
}
export default fetchCountries;
