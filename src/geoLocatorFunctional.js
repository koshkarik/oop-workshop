import _ from 'lodash';
import defaultConfig from './config';

const buildRequestUrl = (ip, url, format) => _.join([url, format, ip], '/');

export default (config = defaultConfig) => async (ip = '') => (
  await config.provider.get(buildRequestUrl(ip, config.url, config.dataFormat))
).data;
