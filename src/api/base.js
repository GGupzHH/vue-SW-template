import axios from './axios'

export default {
  get (url, params, headers) {
    const options = {}

    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return axios().get(url, options)
  },
  post (url, params, headers, data) {
    const options = {}

    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return axios().post(url, data, options)
  },
  put (url, params, headers) {
    const options = {}

    if (headers) {
      options.headers = headers
    }
    return axios().put(url, params, options)
  },
  delete (url, params, headers) {
    const options = {}

    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return axios().delete(url, options)
  }
}
