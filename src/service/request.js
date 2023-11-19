import axios from 'axios';
import { store } from '../redux/store';
import Result from '../util/result';
import { API_URL } from '@env';

export default class Request {
  static get = async (url, params, headers = {}, authToken) => {
    try {
      if (authToken) headers['Authorization'] = `Bearer ${authToken}`;
      else {
        const { token } = store.getState().auth;

        if (token) headers['Authorization'] = `Bearer ${token}`;
      }

      url = API_URL + url;
      const { data } = await axios.get(url, {
        headers,
        params
      });
      return data;
    } catch (error) {
      return Result({
        success: false,
        message: error.message,
        statusCode: error.response?.status
      });
    }
  };

  static post = async (url, body, headers = {}) => {
    console.log('api url', API_URL);
    console.log('api url', API_URL);

    try {
      const { token } = store.getState().auth;
      if (token) headers['Authorization'] = `Bearer ${token}`;
      url = API_URL + url;

      const { data } = await axios.post(url, body, {
        headers
      });
      console.log('data', data);
      return data;
    } catch (error) {
      return Result({
        success: false,
        message: error.message,
        statusCode: error.response?.status
      });
    }
  };

  static put = async (url, body, headers = {}) => {
    try {
      const { token } = store.getState().auth;

      if (token) headers['Authorization'] = `Bearer ${token}`;
      url = API_URL + url;
      const { data } = await axios.put(url, body, {
        headers
      });
      return data;
    } catch (error) {
      return Result({
        success: false,
        message: error.message,
        statusCode: error.response?.status
      });
    }
  };
}
