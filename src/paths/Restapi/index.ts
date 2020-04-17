import NumberParser from './NumberParser'
import ClientInfo from './ClientInfo'
import Subscription from './Subscription'
import Glip from './Glip'
import Dictionary from './Dictionary'
import Account from './Account'
import Status from './Status'
import Oauth from './Oauth'
import { GetVersionsResponse, GetVersionResponse } from '../../definitions'
import RestClient from '../..'

class Restapi {
  rc: RestClient
  apiVersion: string

  constructor(rc: RestClient, apiVersion: string = 'v1.0') {
    this.rc = rc
    this.apiVersion = apiVersion
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.apiVersion) {
      return `/restapi/${this.apiVersion}`
    }

    return `/restapi`
  }

  /**
   * Operation: Get API Versions
   * Http get /restapi
   */
  async list(): Promise<GetVersionsResponse> {
    return this.rc.get(this.path(false))
  }

  /**
   * Operation: Get Version Info
   * Http get /restapi/{apiVersion}
   */
  async get(): Promise<GetVersionResponse> {
    if (!this.apiVersion) {
      throw new Error('apiVersion must not be undefined')
    }

    return this.rc.get(this.path())
  }

  oauth(): Oauth {
    return new Oauth(this)
  }

  status(): Status {
    return new Status(this)
  }

  account(accountId: string = '~'): Account {
    return new Account(this, accountId)
  }

  dictionary(): Dictionary {
    return new Dictionary(this)
  }

  glip(): Glip {
    return new Glip(this)
  }

  subscription(subscriptionId: string): Subscription {
    return new Subscription(this, subscriptionId)
  }

  clientInfo(): ClientInfo {
    return new ClientInfo(this)
  }

  numberParser(): NumberParser {
    return new NumberParser(this)
  }
}

export default Restapi
