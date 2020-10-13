import countryMarkup from '../templates/country.hbs';
import countriesListItem from '../templates/countries-listItem.hbs';

const countriesList = document.querySelector('.countries-list');
const countryWrp = document.querySelector('.country-wrp');

function renderMarkup(countries) {
  let markup = null;
  if (countries.length === 1) {
    markup = countryMarkup(countries);
    return countryWrp.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length <= 10 || countries.length > 1) {
    markup = countriesListItem(countries);
    return countriesList.insertAdjacentHTML('beforeend', markup);
  }
}

export default renderMarkup;
