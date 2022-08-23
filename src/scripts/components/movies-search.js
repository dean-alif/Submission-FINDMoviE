
class SearchMovies extends HTMLElement {

    constructor() {
        super()
        this.shadowDOM = this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    set clickEvent(event) {
        this._clickEvent = event
        this.render()
    }

    get value() {
        return this.shadowDOM.querySelector("#search-input").value
    }

    render() {
        this.shadowDOM.innerHTML =
        `
        <style>
        .search-section {
            padding: 5px;
            width: 300px;
            height: 30px;
            margin-bottom: 7px;
            display: grid;
            grid-template-columns: auto 1fr 0.5fr;
            grid-gap: 5px;
            border-radius: 4px;
        }
        
        .search-section input {
            padding: 5px;
            border-radius: 4px;
            font-family: Poppins, sans-serif;
            font-size: 14px;
            background: #E7E7E8;
            border: 1px solid gray;
            color: black;
            font-weight: 400;
        }
        
        .search-section button {
            background-color: #FF4C29;
            font: 600 18px/1.9 rem Poppins, sans-serif;
            color: white;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .search-section button:hover {
            font: 600 18px/1.9 rem Poppins, sans-serif;
            color: #141432;
            background-color: #ff2a00;
            transition: 0.5s;
        }
        
        .search-section button:active {
            background-color: #ff2a00;
            opacity: 0.8;
        }
        </style>
        <section class="search-section">
            <input id="search-input" type="search" placeholder="Search any movies" required>
            <button id="search-btn" type="submit"> Search </button> 
        </section>
        `

        this.shadowDOM.querySelector("#search-btn").addEventListener("click", this._clickEvent)
    }
}

customElements.define("search-movies-bar", SearchMovies)