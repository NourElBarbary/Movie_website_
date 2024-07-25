


const movies = [
    { title: 'The Lion King', url: "Lion King.html" },
    { title: 'Angel Has Fallen', url: "Angel has fallen.html" },
    { title: 'Five Feet Apart', url: "five feet apart.html" },
    { title: 'Murder Mystery 2', url: "murdermystery.html" },
    { title: 'Spider Man No Way Home', url: "spiderman.html"},
    { title: 'Sonic', url: "sonic.html" },
    { title: 'Jumanji: Welcome to the Jungle', url: "jumanji.html" },
    { title: 'The kissing booth', url: "the kissing booth.html" },
    { title: 'World War Z', url: "worldwarz.html" },
    { title: 'Black Panther Wakanda Forever', url: "Black-Panther.html" },


  ];
  
function searchMovies(event) {
    
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
    // Get the search query entered by the user
    const searchQuery = document.querySelector('.search').value.toLowerCase();
    const noResults = document.getElementById('no-results');

  
    // Searching for the movie in the movies array
    const foundMovie = movies.find(movie => movie.title.toLowerCase() === searchQuery);

    if (foundMovie) {
      window.location.href = foundMovie.url; // Redirect to the movie page
    } else {
      alert('Movie not found.'); // Show an alert if the movie is not found
    }
    document.querySelector('.search').value = '';
  }


  