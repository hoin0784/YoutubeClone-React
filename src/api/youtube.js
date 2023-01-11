export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }

  async Music() {
    return this.apiClient
      .music({
        params: {
          playlistId: 'PLuUrokoVSxlcChk5v_nwasQztA2e1CRUC',
          part: 'snippet',
          maxResults: 25,
        },
      })
      .then((res) => res.data.items)
  }
  // News는 search
  // 나중에 실제 데이터 할때 search로 바꾸기
  async News() {
    return this.apiClient
      .News({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'US News live now',
          type: 'video',
          eventType:'live',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async Games() {
    return this.apiClient
      .Games({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'games for pc',
          type: 'video',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  // search로 바꾸기
  async Movies() {
    return this.apiClient
      .Movies({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'games for pc',
          type: 'video',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  // search로 바꾸기
  async Sports() {
    return this.apiClient
      .Sports({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'games for pc',
          type: 'video',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async Live() {
    return this.apiClient
      .Live({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'games for pc',
          type: 'video',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }


}