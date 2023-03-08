/*
// ** API data **


API Key: 230c8944d7c01671a140ee7eb22facd5

Here's an example API request:

https://api.themoviedb.org/3/movie/550?api_key=230c8944d7c01671a140ee7eb22facd5
*/

// ** GET List by title
const dataSearch = await axios.get(
    "https://api.themoviedb.org/3/search/movie?api_key=230c8944d7c01671a140ee7eb22facd5&query=The%20Matrix&language=en-US"
  );
  console.log(dataSearch.data);
  
  // ** GET List more POPULAR
  const morePopular = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=230c8944d7c01671a140ee7eb22facd5&language=en-US&page=1"
  );
  console.log(morePopular.data);
  
  /*
  // ** All films **
  
  https://api.themoviedb.org/3/movie/top_rated?api_key=230c8944d7c01671a140ee7eb22facd5&language={language}&page=1
  
  https://api.themoviedb.org/3/movie/top_rated?api_key=230c8944d7c01671a140ee7eb22facd5&language={language}&page=2
  
  etc...
  
  */
  

  // ** Completar image de poster
/*
donde nos brinda 
poster_path: "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg"

y debemos completar con 
https://image.tmdb.org/t/p/w500   (w500 es el tamaño en px de la image)

Ejemplo final
https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg

*/