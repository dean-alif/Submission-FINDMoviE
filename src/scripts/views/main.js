import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/movies-list.js';
import '../components/movies-search.js';
import DataSources from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-movies-bar");
    const moviesListElement = document.querySelector("movies-list");

    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSources.searchMovies(searchElement.value)
            renderResult(result)
        } catch(message) {
            fallbackResult(message)
        }
    };

    const renderResult = result => {
        moviesListElement.movies = result;
    };

    const fallbackResult = message => {
        moviesListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main