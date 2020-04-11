import { AxiosResponse } from 'axios'
import * as R from 'ramda'

class RestResponse {
  data: any
  status: number
  statusText: string
  headers: any
}

class RestRequest {
  method: string
  baseURL: string
  url: string
  data: string
  headers: any
}

class RestException extends Error {
  response: RestResponse
  request: RestRequest
  message: string
  constructor(r: AxiosResponse) {
    const response = R.pick(['data', 'status', 'statusText', 'headers'], r)
    const request = R.pick(['method', 'baseURL', 'url', 'data', 'headers'], r.config)
    let message = r.data.message
    message = `HTTP ${r.status} ${r.statusText}${R.isNil(message) ? '' : ` - ${message}`}

Response:
${JSON.stringify(response, null, 2)}

Request:
${JSON.stringify(request, null, 2)}
`
    super(message)
    Object.setPrototypeOf(this, RestException.prototype)
    this.response = response
    this.request = request
    this.message = message
  }
}

export default RestException
