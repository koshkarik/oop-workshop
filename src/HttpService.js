import axios from 'axios';

export default class Service {
  constructor(service = axios) {
    this.httpService = service;
  }

  get(ip) {
    return this.httpService.get(ip);
  }
}
