// Función GET
document.getElementById('getMovieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const imdbID = document.getElementById('imdbID').value;
    fetch(`https://movie.azurewebsites.net/api/cartelera?imdbID=${imdbID}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('result').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(error => console.error('Error:', error));
  });
  
  // Función POST
  document.getElementById('postMovieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const movie = {
      imdbID: "AL001", // Cambiar si es necesario
      Title: document.getElementById('Title').value,
      Year: document.getElementById('Year').value,
      Type: document.getElementById('Type').value,
      Poster: document.getElementById('Poster').value,
      description: document.getElementById('Description').value,
      Ubication: document.getElementById('Ubication').value,
      Estado: 1
    };
  
    fetch('https://movie.azurewebsites.net/api/cartelera', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('result').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(error => console.error('Error:', error));
  });
  
  // Función PUT
  document.getElementById('putMovieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const imdbID = document.getElementById('putImdbID').value;
    const updatedMovie = {
      imdbID: imdbID,
      Title: document.getElementById('putTitle').value,
      Year: "2022", // Año estático para el ejemplo
      Type: "THRILLER",
      Poster: "https://static.cinepolis.com/img/peliculas/39933/1/1/39933.jpg",
      description: "Una joven madre queda atrincherada...",
      Ubication: 'OKLAN',
      Estado: true
    };
  
    fetch(`https://movie.azurewebsites.net/api/cartelera?imdbID=${imdbID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMovie),
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('result').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(error => console.error('Error:', error));
  });
  
  // Función DELETE
  document.getElementById('deleteMovieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const imdbID = document.getElementById('deleteImdbID').value;
  
    fetch(`https://movie.azurewebsites.net/api/cartelera?imdbID=${imdbID}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('result').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(error => console.error('Error:', error));
  });
  