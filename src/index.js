document.addEventListener('DOMContentLoaded', () => {
    fetch('/env')
        .then(response => response.json())
        .then(data => {
            console.log(`Clé API du film : ${data.MOVIE_DB_API_KEY}`);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération de la clé API :', error);
        });
});


