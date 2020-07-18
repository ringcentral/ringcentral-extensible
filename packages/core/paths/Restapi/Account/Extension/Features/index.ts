import {RestRequestConfig} from '../../../../../Rest';
import {
  FeatureList,
  ReadUserFeaturesParameters,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
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
  async get(
    queryParams?: ReadUserFeaturesParameters,
    config?: RestRequestConfig
  ): Promise<FeatureList> {
    const r = await this.rc.get<FeatureList>(this.path(), queryParams, config);
    return r.data;
  }
}

export default Index;
