class DataSources {

    static searchMovies(keyword){

        return fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=97f2e67cecf64413b52a1ba8e97fbd57`)
        .then(response => {
            return response.json();

        })

        .then(responseJson => {

            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`Can't find any movies with keyword "${keyword}"`);
            }

        })

    }
}

export default DataSources