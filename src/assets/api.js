import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "bca6a436b3a5e8df17b445bb2150fdaf",
    language: "en-US",
  },
});

export const moviesApi = {
  nowPlaying: (page) => api.get("movie/now_playing", { params: { page } }),
  upcoming: (page) => api.get("movie/upcoming", { params: { page } }),
  popular: (page) => api.get("movie/popular", { params: { page } }),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        // 사용자가 공백이나 특수문자를 입력할 수도 있으니 encoding 해주어야 한다.
        // BUT!!!! 기본적으로 axios에서 encoding을 해준다... 따로 encodeURIComponent 사용할 필요 없다.
        query: term,
      },
    }),
  videos: (id) =>
    api.get(`movie/${id}/videos`, {
      params: {
        language: "en-US",
      },
    }),
};
