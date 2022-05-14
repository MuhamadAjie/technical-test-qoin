// Base URL from themoviedb
// const imageUrl = "https://image.tmdb.org";
const baseUrl = "https://api.themoviedb.org/3";

// Get List All Movie Data
export const getListMovie = async () => {
  const response = await fetch(
    `${baseUrl}/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1`
  );
  const data = await response.json();
  return data.results.map((item, index) => ({
    key: item.id,
    number: index + 1,
    title: item.title,
    release: item.release_date,
    detail: item.id,
  }));
};

// Get List Movie Genre
export const getListGenre = async () => {
  const response = await fetch(
    `${baseUrl}/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49`
  );
  const data = await response.json();
  return data.genres.map((item, index) => ({
    key: item.id,
    number: index + 1,
    genre: item.name,
  }));
};

// Get Detail Movie
export const getDetailMovie = async (id) => {
  const response = await fetch(
    `${baseUrl}/movie/${id}?api_key=2fccde01a371b106b09a241d6d1d5b49`
  );
  const data = await response.json();
  return data;
};

// Get Image Movie
// export const getImageMovie = async () => {
//   const response = await fetch(
//     `${imageUrl}/t/p/w500/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg`
//   );
//   const data = await response.json();
//   return data;
// };
