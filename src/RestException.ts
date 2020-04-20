import { AxiosResponse } from 'axios'

class RestResponse {
  data?: any
  status?: number
  statusText?: string
  headers?: any
}

class RestRequest {
  method?: string
  baseURL?: string
  url?: string
  data?: string
  headers?: any
}

class RestException extends Error {
  response: RestResponse
  request: RestRequest
  message: string
  constructor(r: AxiosResponse) {
    const response: RestResponse = {
      data: r.data,
      status: r.status,
      statusText: r.statusText,
      headers: r.headers
    }
    const request: RestRequest = {
      method: r.config.method,
      baseURL: r.config.baseURL,
      url: r.config.url,
      data: r.config.data,
      headers: r.config.headers
    }
    let message = r.data.message
    message = `HTTP ${r.status} ${r.statusText}${message ? ` - ${message}` : ''}

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
