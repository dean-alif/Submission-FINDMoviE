import './movie-item.js';

class MoviesList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set movies(movies) {
        this._movies = movies
        this.render()
    }

    render() {
        this.shadowDOM.innerHTML = ""
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movies-item")
            movieItemElement.movie = movie
            this.shadowDOM.appendChild(movieItemElement)
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = "";
        this.shadowDOM.innerHTML +=
        `
        <style>
        .placeholder {
            font-family: Poppins, sans-serif;
            color: #E7E7E8;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .placeholder:hover {
            color: #ff2a00;
            transition: 0.6s;
        }

        :host{
            display:flex;
        }
        </style>
        

        <h2 class="placeholder"> ${message} </h2>`
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._movies.forEach(movies => {
            const moviesItemElement = document.createElement("movies-item");
            moviesItemElement.movie = movies
            this.shadowDOM.appendChild(moviesItemElement);
        })
    }
}

customElements.define("movies-list", MoviesList)