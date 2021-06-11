import axios from 'axios'
export default class Request {
  get (url = '') {
    if (url == '') {
      return Promise.reject(new Error('数据为空'))
    }
    return axios.get(url)
  }
}
