const movies = [
    { id: 1, title: "Inception", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw&s=10" },
    { id: 2, title: "Interstellar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX&s=10" },
    { id: 3, title: "Avengers", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXEwQlva93WuBdWDK6LlOSf4f96CB5OxToqcdkHiWBnn2p5WOjaOGKo_t6i9F-gQ2tYUp&s=10" },
    { id: 4, title: "Batman", img: "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg" }
];


const movieLisDIv = document.getElementById("movieList")
const watchLisDiv = document.getElementById("watchList")
let watchList = JSON.parse(localStorage.getItem("myWatchlist")) || []

function renderMovies() {
    movies.forEach((movie, index) => {
        // console.log(index,movie)

        const div = document.createElement("div")
        div.className = "card"
        div.innerHTML = `
        <img src="${movie.img}" alt="" height="200">
        <h4>${movie.title}</h4>
        <button class="addBtn" onclick="addToWatchList(${movie.id})">Add</button>`

        movieLisDIv.appendChild(div)

    })
}

function addToWatchList(movieId) {

    if (!watchList.some((mov) => mov.id === movieId)) {

        const movieToAdd = movies.find((mv) => mv.id === movieId)
        watchList.push(movieToAdd)

        localStorage.setItem("myWatchlist", JSON.stringify(watchList))

        renderWatchlist()
    }
    else {
        alert("this movie already exist in your Watch List")
    }
}


function renderWatchlist() {

    watchLisDiv.innerHTML = ""



    watchList.forEach((movie) => {

        const div = document.createElement("div")
        div.className = "card"

        div.innerHTML = `
        <img src="${movie.img}" alt="" height="200">
        <h4>${movie.title}</h4>
        <button class="remove" onclick="removeMovie(${movie.id})">Remove</button>`
        watchLisDiv.appendChild(div)

    })

}

function removeMovie(idToRemove) {
    watchList = watchList.filter((m) => m.id !== idToRemove)
    localStorage.setItem("myWatchlist", JSON.stringify(watchList))
    renderWatchlist()
}
renderMovies()
renderWatchlist()