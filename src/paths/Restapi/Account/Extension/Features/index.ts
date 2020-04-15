import ReadUserFeaturesParameters from '../../../../../definitions/ReadUserFeaturesParameters'
import FeatureList from '../../../../../definitions/FeatureList'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/features`
  }

  /**
   * Operation: Get User Features
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/features
   */
  async get(queryParams?: ReadUserFeaturesParameters): Promise<FeatureList> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
