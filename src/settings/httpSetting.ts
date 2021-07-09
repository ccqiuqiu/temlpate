// Created by 熊超超 on 2021/7/8.
export default {
  responseData: 'result', // 响应数据中，那个属性是业务数据
  successCode: [0, 200], // 请求成功的code值
  tokenKey: 'X-Access-Token',
  requestInterceptors(config) {
    config.headers['web-client-type'] = 'web';
    return config;
  },
};
