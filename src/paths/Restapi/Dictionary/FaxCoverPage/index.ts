import ListFaxCoverPagesParameters from '../../../../definitions/ListFaxCoverPagesParameters'
import ListFaxCoverPagesResponse from '../../../../definitions/ListFaxCoverPagesResponse'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/fax-cover-page`
  }

  /**
   * Operation: Get Fax Cover Page List
   * Http get /restapi/v1.0/dictionary/fax-cover-page
   */
  async get(queryParams?: ListFaxCoverPagesParameters): Promise<ListFaxCoverPagesResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
