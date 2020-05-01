import {
  GetPresenceInfo,
  ReadUserPresenceStatusParameters,
  PresenceInfoResponse,
  PresenceInfoResource,
} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class Presence {
  rc: RestClient;
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
    queryParams?: ReadUserPresenceStatusParameters
  ): Promise<GetPresenceInfo> {
    const r = await this.rc.get(this.path(), queryParams);
    return r.data;
  }

  /**
   * Operation: Update User Presence Status
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/presence
   */
  async put(
    presenceInfoResource: PresenceInfoResource
  ): Promise<PresenceInfoResponse> {
    const r = await this.rc.put(this.path(), presenceInfoResource);
    return r.data;
  }
}

export default Presence;
