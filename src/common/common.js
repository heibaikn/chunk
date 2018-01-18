import axios from 'axios';
const CONST_HEADER = () => ({
  userKey: localStorage.getItem('userKey') || '',
  version: '1.0.0',
  signature: 'rayvision2017',
  platform: localStorage.getItem('platform') || 2,
  channel: 2,
  languageFlag: localStorage.getItem('languageFlag') || 0,
});

var instance = axios.create({

});
instance
  .interceptors
  .request
  .use(config => {
    Object.assign(config.headers, CONST_HEADER());
    return config
  });
instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance.post('/api/rendering/user/loadLanguagePack')