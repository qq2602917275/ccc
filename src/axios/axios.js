import { BB, CC } from '../config/uri'
import Request from '../http/http'
class Indexmodel extends Request {
  getBB () {
    return this.get(BB)
  }

  getCC () {
    return this.get(CC)
  }
}
export default new Indexmodel()
