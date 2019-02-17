export const testIp = '111.111.111';
export const testData = {
  '111.111.111': {
    data: {
      city: 'New York',
      country: 'USA',
    },
  },
  default: {
    data: {
      city: 'Moscow',
      country: 'Russia',
    },
  },
};
export default (ip, data) => ({
  get: url => (
    url.includes(ip)
      ? data[ip]
      : data.default
  ),
});
