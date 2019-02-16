import axios from 'axios';
import config from './config';

const buildRequestUrl = (ip, url = config.url) => `${url}/${ip}`;

export default (provider = axios) => async (ip = '') => (
  await provider.get(buildRequestUrl(ip))
).data;
