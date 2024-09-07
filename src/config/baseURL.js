const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://138.197.187.97:8010/api/v1'
  : 'http://138.197.187.97:8010/api/v1';

export default baseURL;