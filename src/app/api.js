import axios from 'axios';

export const get = url => {
  return axios.get(url);
};

export const post = (url, params) => {
  return axios.post(url, {
    ...params
  });
};
