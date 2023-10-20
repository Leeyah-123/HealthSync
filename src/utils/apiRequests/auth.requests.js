import AxiosService from '../../services/Axios.service';
import CookiesService from '../../services/Cookies.service';
import {
  HEALTHSYNC_AUTH_TOKEN_KEY,
  HEALTHSYNC_USER_KEY,
} from '../constants/cookie.constants';
import { apiResponse } from '../helper';

const axiosInstance = AxiosService.mainInstance;
const axiosProtectedInstance = AxiosService.protectedMainInstance;

export const authRequests = () => ({
  profile: async () => {
    try {
      let response = await axiosProtectedInstance({
        method: 'GET',
        url: '/auth/profile',
      });
      return apiResponse(true, 'Fetched.', response.data);
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          'Error Fetching User Profile.',
        err
      );
    }
  },
  login: async (credentials) => {
    try {
      // ? log user in and get token
      let response = await axiosInstance({
        method: 'POST',
        url: '/auth/login',
        data: credentials,
      });

      let token = response.data.token;

      // ? fetch user's details
      const fetchProfile = await authRequests().profile();
      if (
        (await CookiesService.setter(HEALTHSYNC_AUTH_TOKEN_KEY, token)) &&
        (await CookiesService.setter(HEALTHSYNC_USER_KEY, fetchProfile?.data))
      ) {
        if (token)
          return apiResponse(true, 'User successfully logged in.', {
            token,
            user: fetchProfile?.data,
          });
        return apiResponse(false, 'User Log in error.', null);
      }
      return apiResponse(false, 'User Log in error.', null);
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'User Log in error.',
        err
      );
    }
  },
  signup: async (credentials) => {
    try {
      // ? sign user up and get token
      let response = await axiosInstance({
        method: 'POST',
        url: '/auth/signup',
        data: credentials,
      });

      let token = response.data.token;

      // ? fetch user's details
      const fetchProfile = await authRequests().profile();
      if (
        (await CookiesService.setter(HEALTHSYNC_AUTH_TOKEN_KEY, token)) &&
        (await CookiesService.setter(HEALTHSYNC_USER_KEY, fetchProfile?.data))
      ) {
        if (token)
          return apiResponse(true, 'User successfully registered.', {
            token,
            user: fetchProfile?.data,
          });
        return apiResponse(false, 'Error registering user.', null);
      }
      return apiResponse(false, 'Error registering user.', null);
    } catch (err) {
      return apiResponse(
        false,
        err?.response?.data?.message ||
          err?.message ||
          'Error registering user.',
        err
      );
    }
  },
});
