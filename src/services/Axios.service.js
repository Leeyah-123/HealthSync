import axios from 'axios';
import { HEALTHSYNC_AUTH_TOKEN_KEY } from '../utils/constants/cookie.constants';
import CookiesService from './Cookies.service';

const token = CookiesService.getter(HEALTHSYNC_AUTH_TOKEN_KEY);

export default class AxiosService {
  static mainInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  });

  static protectedMainInstance = (passedToken) =>
    axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${passedToken || token}`,
      },
    });
}
