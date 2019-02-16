import HttpService from './HttpService';
import config from './config';

const buildRequestUrl = (ip, url = config.url) => `${url}/${ip}`;

export default class GeoLocator {
  constructor(service) {
    this.provider = new HttpService(service);
  }

  async getLocation(ip) {
    const reqUrl = buildRequestUrl(ip);
    return (await this.provider.get(reqUrl)).data;
  }
}
