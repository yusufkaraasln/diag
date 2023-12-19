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
    
    console.log('****URL****', API_URL + url);
     
   
     
    console.log('body', body);
    console.log('headers', headers);

    try {
      const { token } = store.getState().auth;
      console.log('token', token);

      if (token) headers['Authorization'] = `Bearer ${token}`;
      url = API_URL + url;

      const { data } = await axios.post(url, body, {
        headers
      });

      return data;
    } catch (error) {
      console.log('hata', error);
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

  static delete = async (url, headers = {}) => {
    try {
      const { token } = store.getState().auth;

      if (token) headers['Authorization'] = `Bearer ${token}`;
      url = API_URL + url;
      const { data } = await axios.delete(url, {
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
