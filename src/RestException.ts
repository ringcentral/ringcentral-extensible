import { AxiosResponse } from 'axios'

import { RestRequest, RestResponse, RestTraffic } from './Utils'

class RestException extends Error {
  response: RestResponse
  request: RestRequest
  message: string
  constructor (r: AxiosResponse) {
    const traffic = new RestTraffic(r)
    const message = traffic.toString()
    super(message)
    Object.setPrototypeOf(this, RestException.prototype)
    this.response = traffic.response
    this.request = traffic.request
    this.message = message
  }
}

export default RestException
