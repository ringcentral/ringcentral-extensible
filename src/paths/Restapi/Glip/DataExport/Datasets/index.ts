import Parent from '..'
import RestClient from '../../../../..'

class Datasets {
  rc: RestClient
  datasetId: (string | null)
  parent: Parent

  constructor (parent: Parent, datasetId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.datasetId = datasetId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.datasetId !== null) {
      return `${this.parent.path()}/datasets/${this.datasetId}`
    }

    return `${this.parent.path()}/datasets`
  }

  /**
   * Operation: Get Data Export Task Dataset
   * Http get /restapi/v1.0/glip/data-export/{taskId}/datasets/{datasetId}
   */
  async get (): Promise<Buffer> {
    if (this.datasetId === null) {
      throw new Error('datasetId must be specified.')
    }

    return this.rc.get(this.path())
  }
}

export default Datasets
