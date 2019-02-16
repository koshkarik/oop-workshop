import _ from 'lodash';
import defaultConfig from './config';

const buildRequestUrl = (ip, url, format) => _.join([url, format, ip], '/');

export default (config = defaultConfig) => async (ip = '') => (
  await config.provider.get(buildRequestUrl(ip, config.url, config.dataFormat))
).data;

// export default class GeoLocator {
//   constructor(config = {}) {
//     const { provider, url, dataFormat } = config;

//     this.provider = provider || defaultConfig.provider;
//     this.url = url || defaultConfig.url;
//     this.dataFormat = dataFormat || defaultConfig.dataFormat;
//   }

//   async getLocation(ip) {
//     const url = buildRequestUrl(ip, this.url, this.dataFormat);

//     try {
//       const response = await this.provider.get(url);
//       const { data } = response;
//       return data;
//     } catch (e) {
//       return e;
//     }
//   }
// }
