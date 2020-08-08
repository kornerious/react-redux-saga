import axios from 'axios';
import { CLIEND_ID, CLIENT_SECRET, url } from './config';

export const get = (redirectUrl) => {axios.get(`${url}${redirectUrl}`)};

export const post = params => axios.post(url, {
  ...params
});
