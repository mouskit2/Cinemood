export const fetchRandomMovie = async () => {

    try {
        const genres = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37]

        let genreId = Math.floor(Math.random() * genres.length);

        genreId = genres[genreId];

        let minResult = 1;
        let maxResult = 20;

        minResult = Math.ceil(minResult);
        maxResult = Math.floor(maxResult);

        let randomNumb = Math.floor(Math.random() * (maxResult - minResult + 1)) + minResult;
        // let response = await axios.get(BASE_URL + 'discover/movie?api_key=' + API_KEY + '&with_genres=' + genreId + '&sort_by=top-rated.desc&page='+ randomNumb);
        // console.log(response.data.url);

        let randomNumb2 = Math.floor(Math.random() * 20);
        let response = await fetch(BASE_URL + 'discover/movie?api_key=' + API_KEY + '&with_genres=' + genreId + '&sort_by=top-rated.desc&page=' + randomNumb);
        let data = await response.json();
        let randomUrl = data.results[randomNumb2];
        let randomId = randomUrl.id;
        //console.log(randomId);
        return randomId;
    } catch (err) {
        console.log(err);
        return err;
    }
};
export default fetchRandomMovie;









