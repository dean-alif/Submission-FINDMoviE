
class MoviesItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML =
        `
        <style> 
        .card-block {
            display: grid;
            padding: 1rem 1rem 1rem;
        }
        
        .card {
            padding: 1.75rem;
            background-color: #292952;
            border-radius: 0.5rem;
            border: 1px solid #4c4c6d;
        }
        
        .card:hover {
            background-color: #2a2a5c;
            transition: 0.4s;
        }

        #image-poster {
            display: grid;
            border-radius: 0.3rem;
        }

        #image-poster:hover {
            opacity: 0.9;
            transition: 0.5s;
        }
        
        .card-title {
            font: 600 3rem/5rem Poppins, sans-serif;
            color: #E7E7E8;
            margin-bottom: 0.2rem;
        }
        
        .card-title:hover {
            color: #ff2a00;
            transition: 0.6s;
        }
        
        .card-caption {
            font: 400 2rem/3rem Poppins, sans-serif;
            color: #CBCBD2;
            margin-bottom: 0;
        }
        
        .card-caption h2:hover {
            color: #ff2a00;
            transition: 0.6s;
        }

        .card-caption h3:hover {
            color: #ff2a00;
            transition: 0.6s;
        }
        
        .card-caption h4:hover {
            color: #ff2a00;
            transition: 0.6s;
        }
        
        .card-text {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
        }
        
        .grid-padding {
            padding: 0rem 1rem 3rem;
        }
        </style>

        <div class="card-block">
            <div class="card">
            <div class="d-flex flex-lg-row flex-column align-items-center">
                <div class="me-lg-3">
                <center>
                <h2 class="card-title"> ${this._movie.original_title} </h2>
                <img id="image-poster" src="http://image.tmdb.org/t/p/w500${this._movie.poster_path}" width="500" height="600" alt="Movie-Image">
                </center>
                </div>
                <div class="flex-grow-1 text-lg-start text-center card-text">
                
                <div class="card-caption">
                <h3> Description : </h3>
                <h4> Rating </h4>
                <p> ⭐️<span> ${this._movie.vote_average}/10 </p>
                <h4> Popularity </h4> <span>
                <p> ${this._movie.popularity} views </p> </span>
                <h4> Release Date </h4>
                <p> on ${this._movie.release_date} </p>
                <h4> Vote Count </h4>
                <p> ${this._movie.vote_count} voted </p>
                <h3> Overview </h3>
                <p>${this._movie.overview}</p>
                </div>

                </div>
            </div>
            </div>
        </div>
        `
    }
}

customElements.define("movies-item", MoviesItem);