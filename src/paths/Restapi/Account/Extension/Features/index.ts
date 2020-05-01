import {
  FeatureList,
  ReadUserFeaturesParameters,
} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class Features {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/features`;
  }

  /**
   * Operation: Get User Features
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/features
   */
  async get(queryParams?: ReadUserFeaturesParameters): Promise<FeatureList> {
    const r = await this.rc.get(this.path(), queryParams);
    return r.data;
  }
}

export default Features;
