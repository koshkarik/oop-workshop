import HttpService from './HttpService';

const url = 'http://ip-api.com/json';

const buildRequestUrl = ip => `${url}/${ip}`;

export default class GeoLocator {
  constructor(service) {
    this.provider = new HttpService(service);
  }

  async getLocation(ip) {
    const reqUrl = buildRequestUrl(ip, this.url, this.dataFormat);
    return (await this.provider.get(reqUrl)).data;
  }
}
