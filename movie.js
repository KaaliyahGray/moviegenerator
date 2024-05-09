"use strict";

const MovieRecommendations = [
    {
        title: "Memoirs of a Geisha",
        reasoning: "Cinematically a masterpiece I'll never get over it",
        movieimg: "https://images.app.goo.gl/S9pJyESSJ7aGTbiP7"
    },
    {
        title: "Training Day",
        reasoning: "Denzel Washington as the villain?? Absolutely.",
        movieimg: "https://images.app.goo.gl/BDpBKktEpreuZ9Ay5"
    },
    {
        title: "Princess and the Frog",
        reasoning: "Disney's first black princess. Please, 12-year-old me was thriving.",
        movieimg: "https://images.app.goo.gl/c1xPgsJA2B1ENyZB9"
    }
];
const movieSelect = document.getElementById('movie-select');
const generateBtn = document.getElementById('generate-btn');
const movieTitle = document.getElementById('movie-title');
const movieReasoning = document.getElementById('movie-reasoning');
const movieImage = document.getElementById('movie-image');

MovieRecommendations.forEach(movie => {
    const option = document.createElement('option');
    option.text = movie.title;
    option.value = movie.title;
    movieSelect.add(option);
});

function displayMovieInfo() {
    const selectedMovieTitle = movieSelect.value;
    if (selectedMovieTitle) {
        const selectedMovie = MovieRecommendations.find(movie => movie.title === selectedMovieTitle);
        movieTitle.textContent = selectedMovie.title;
        movieReasoning.textContent = selectedMovie.reasoning;
        movieImage.src = selectedMovie.movieimg;
    } else {
        // If no movie is selected, clear the displayed movie information
        movieTitle.textContent = "";
        movieReasoning.textContent = "";
        movieImage.src = "";
    }
}

// Event listener for the "Generate Movie Info" button
generateBtn.addEventListener('click', displayMovieInfo);

// Event listener for the dropdown list to display movie information when a movie is selected
movieSelect.addEventListener('change', displayMovieInfo);

function getRandomMovie() {
    const randomIndex = Math.floor(Math.random() * MovieRecommendations.length);
    const randomMovie = MovieRecommendations[randomIndex];
    return randomMovie;
}

generateBtn.addEventListener('click', function() {
    const randomMovie = getRandomMovie();
    movieTitle.textContent = randomMovie.title;
    movieReasoning.textContent = randomMovie.reasoning;
    movieImage.src = randomMovie.movieimg;
});
