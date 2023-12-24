import axios from 'axios';
import {constants} from '../constants';

export const fireNetworkRequest = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const getMoviesAPIUrl = (yearVal: number, genresArr: number[]) => {
  if (genresArr.length > 0) {
    const genresStr = genresArr.join('|');
    return `${constants.baseUrl}discover/movie?api_key=${constants.apiKey}&sort_by=popularity.desc&primary_release_year=${yearVal}&page=1&vote_count.gte=${constants.popularityCount}&with_genres=${genresStr}`;
  }
  return `${constants.baseUrl}discover/movie?api_key=${constants.apiKey}&sort_by=popularity.desc&primary_release_year=${yearVal}&page=1&vote_count.gte=${constants.popularityCount}`;
};

export const getGenresAPIUrl = () =>
  `${constants.baseUrl}genre/movie/list?api_key=${constants.apiKey}`;
