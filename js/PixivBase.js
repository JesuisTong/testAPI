const request = require('request-promise');

// tls授权取消
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

class PixivBase {
  constructor(p) {
    this.authResponse = '';
    this.accessToken = '';
    this.refreshToken = '';
  }

  // 登陆
  login = async (user = '', pwd = '', refreshToken = '', cb = console.log) => {
    let req = {
      client_id: PixivBase._oauthClientId,
      client_secret: PixivBase._oauthClientSecret,
      device_token: PixivBase._oauthToken
    };
    if (user && pwd) {
      req = {
        ...req,
        username: user,
        password: pwd,
        grant_type: 'password'
      };
    } else if (refreshToken || this.refreshToken) {
      req = {
        ...req,
        grant_type: 'refresh_token',
        refresh_token: refreshToken || this.refreshToken
      };
    } else {
      throw new Error('login params error.');
    }
    await request.post({
      url: PixivBase._oauthUrl,
      headers: {
        Authorization: PixivBase._headers.Authorization
      },
      formData: req,
      agentOptions: {
        rejectUnauthorized: false
      },
      timeout: 10000
    }).then(res => {
      cb && cb(JSON.parse(res));
      if (res.has_error) {
        console.error(res.message || '账号或者密码错误');
        return;
      }
      const { response } = JSON.parse(res);
      this.setAccessToken(response.access_token);
      // this.accessToken = response.access_token;
      this.refreshToken = response.refresh_token;
      this.authResponse = response;
      console.log('模拟登录授权成功!');
    }).catch(err => {
      cb && cb(err);
      throw new Error(err.message);
    });
  };
  
  // 设置accessToken 并且更新headers
  setAccessToken = (access_token) => {
    this.accessToken = access_token;
    if (this.headers) {
      this.headers.Authorization = `Bearer ${access_token}`;
    }
  }

  // 羊肉串
  fetch = async (uri, options = {}, cb = console.log) => {
    console.log(uri, options, cb);
    const { method = 'get', body = {}, headers = {} } = options;
    let url = uri;
    if (this._apiPrefix) {
      url = this._apiPrefix + uri;
    }
    Object.keys(body).forEach(i => {
      if (typeof body[i] === 'boolean') {
        body[i] = body[i] ? 'true' : 'false';
      }
    });
    await request[method.toLowerCase()]({
      url,
      headers,
      json: body,
      agentOptions: {
        rejectUnauthorized: false,
      },
      timeout: 10000
    }).then((res) => {
      cb && cb(res);
    }).catch(err => {
      cb && cb(err);
    });
  }
}

 // 一些模拟登录需要的参数
PixivBase._oauthUrl = 'https://oauth.secure.pixiv.net/auth/token';
PixivBase._headers = {
  Authorization: 'Bearer WHDWCGnwWA2C8PRfQSdXJxjXp0G6ULRaRkkd6t5B6h8',
};
PixivBase._oauthClientId = 'bYGKuGVw91e0NMfPGp44euvGt59s';
PixivBase._oauthClientSecret = 'HP3RmkgAmEGro0gn1x9ioawQE8WMfvLXDz3ZqxpK';
PixivBase._oauthToken = 'af014441a5f1a3340952922adeba1c36';

module.exports = PixivBase;