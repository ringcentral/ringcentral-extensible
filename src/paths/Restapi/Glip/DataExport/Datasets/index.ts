import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  datasetId: string
  parent: Parent

  constructor(parent: Parent, datasetId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.datasetId = datasetId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.datasetId !== null) {
      return `${this.parent.path()}/datasets/${this.datasetId}`
    }

    return `${this.parent.path()}/datasets`
  }

  /**
   * Operation: Get Data Export Task Dataset
   * Http get /restapi/v1.0/glip/data-export/{taskId}/datasets/{datasetId}
   */
  async get(): Promise<Buffer> {
    if (this.datasetId === undefined || this.datasetId === null) {
      throw new Error("datasetId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
