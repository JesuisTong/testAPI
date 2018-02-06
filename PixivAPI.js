const request = require('request');
const PixivBase = require('./PixivBase');

class PixivAPI extends PixivBase {
  constructor(userName = '', pwd = '') {
    super();
    if (userName) {
      this.login(userName, pwd);
    }
    this.headers = this.componseHeader();
    this._apiPrefix = PixivAPI._apiPrefix;
  }
  // 组成头部
  componseHeader = () => ({ ...PixivAPI._noAuthHeaders, ...PixivAPI._headers })
  // ユーザーの詳細
  userDetail = (userId, cb) => (
    this.fetch('/v1/user/detail', {
      method: 'get',
      headers: this.headers,
      body: {
        user_id: userId,
        filter: PixivAPI._apiFilter
      },
    }, cb)
  )
  // ユーザーのイラスト
  userIllusts = (options = { userId: '', page: 1, type: 'illust' }, cb) => (
    this.fetch('/v1/user/illust', {
      method: 'get',
      headers: this.headers,
      body: {
        user_id: options.userId,
        type: options.type,
        offset: (options.page - 1) * 30,
        filter: PixivAPI._apiFilter        
      }
    }, cb)
  )
  // 検索イラスト
  searchIllust = (options = { word: '', page: 1, search_target: 'partial_match_for_tags', sort: 'date_desc', duration: null }, cb) => {
    const body = {
      word: options.word,
      search_target: options.search_target,
      sort: options.sort,
      offset: (options.page - 1) * 30,
      filter: PixivAPI._apiFilter,
    };
    if (options.duration) {
      body.duration = options.duration;
    }
    return this.fetch('/v1/search/illust', {
      method: 'get',
      headers: this.headers,
      body: body
    }, cb);
  }
  // ユーザーのマーク付きイラスト
  userBookmarksIllust = (options = { user_id: '', restrict: 'public' }, cb) => (
    this.fetch('/v1/user/bookmarks/illust', {
      method: 'get',
      headers: this.headers,
      body: { ...options, filter: PixivAPI._apiFilter }
    }, cb)
  )
  // イラストの詳細
  illustDetail = (illust_id, cb) => (
    this.fetch('/v1/illust/detail', {
      method: 'get',
      headers: this.headers,
      body: { illust_id }
    }, cb)
  )
  // イラストのコメント
  illustComments = (options = { illust_id: '', page: 1, include_total_comments: true }, cb) => (
    this.fetch('/v1/illust/comments', {
      method: 'get',
      headers: this.headers,
      body: {
        illust_id: options.illust_id,
        offset: (options.page - 1) * 30,
        include_total_comments: options.include_total_comments
      }
    }, cb)
  )
  // 関連イラストリスト
  illustRelated = () => {

  }
  // ランキングイラスト一覧
  illustRanking = (options = { mode: 'day', page: 1, date: null }, cb) => {
    const body = {
      mode: options.mode,
      offset: (options.page - 1) * 30,
      filter: PixivAPI._apiFilter,
    }
    if (options.date) {
      body.date = options.date;
    }
    return this.fetch('/v1/illust/ranking', {
      method: 'get',
      headers: this.headers,
      body,
    }, cb);
  }
  // トレンドタグ
  trendingTagsIllust = () => {

  }
  // ユーザーのフォロー
  userFollowing = () => {

  }
  // ユーザーのフォロワー
  userFollower = () => {

  }
  // ユーザーのマイピク
  userMyPixiv = () => {

  }
}

PixivAPI._apiPrefix = 'https://app-api.pixiv.net';
PixivAPI._apiFilter = 'for_ios';
PixivAPI._headers = {
  Authorization: 'Bearer WHDWCGnwWA2C8PRfQSdXJxjXp0G6ULRaRkkd6t5B6h8'
};
PixivAPI._noAuthHeaders = {
  'User-Agent': 'PixivIOSApp/6.7.1 (iOS 10.3.1; iPhone8,1)',
  'App-OS': 'ios',
  'App-OS-Version': '10.3.1',
  'App-Version': '6.9.0',
};

module.exports = PixivAPI;