export default class WeatherProvider {
  constructor({
    name,
    url,
    query,
    params = {},
  }) {
    this.url = url;
    this.name = name;
    this.query = query;
    this.params = params;
  }

  buildRequestData(city) {
    return {
      url: this.url,
      params: {
        ...this.params,
        [this.query]: city,
      },
    };
  }

  async getByCity(city, httpProvider) {
    const { url, params } = this.buildRequestData(city);
    const response = await httpProvider.get(url, { params });
    return response.data;
  }
}
