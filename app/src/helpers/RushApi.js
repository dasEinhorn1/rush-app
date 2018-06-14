const API_URL = 'http://localhost:3000/'

const get = (uri, params = {}) => {
  var url = new URL(API_URL + uri)
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]))
  return fetch(url).then(response => response.json())
}

const post = (uri, params = {}) => {
  var url = new URL(API_URL + uri)
  return fetch(url, {
    body: JSON.stringify(params),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    redirect: 'error'
  }).then(response => response.json())
}

const put = (uri, params = {}) => {
  var url = new URL(API_URL + uri)
  return fetch(url, {
    body: JSON.stringify(params),
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    redirect: 'error'
  }).then(response => response.json())
}

var RushApi = {
  getRushees: (queryParams) => {
    return get('rushees', queryParams)
      .then(response => console.log(response))
  },
  getRushee: (id) => {
    return get('rushees/' + id)
      .then(response => console.log(response))
  },
  createRushee: (data) => {
    return post('rushees')
      .then(response => console.log(response))
  },
  updateRushee: (id, data) => {
    return put('rushees/' + id, data)
      .then(response => console.log(response))
  },
  vote: (id, vote) => {
    return post('rushees/' + id + '/vote', { vote: vote })
      .then(response => console.log(response))
  }
}

module.exports = RushApi
