import {RestRequestConfig} from '../../../../../Rest';
import {
  GetPresenceInfo,
  ReadUserPresenceStatusParameters,
  PresenceInfoResponse,
  PresenceInfoResource,
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
    return `${this.parent.path()}/presence`;
  }

  /**
   * Operation: Get User Presence Status
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/presence
   */
  async get(
    queryParams?: ReadUserPresenceStatusParameters,
    config?: RestRequestConfig
  ): Promise<GetPresenceInfo> {
    const r = await this.rc.get<GetPresenceInfo>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update User Presence Status
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/presence
   */
  async put(
    presenceInfoResource: PresenceInfoResource,
    config?: RestRequestConfig
  ): Promise<PresenceInfoResponse> {
    const r = await this.rc.put<PresenceInfoResponse>(
      this.path(),
      presenceInfoResource,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
