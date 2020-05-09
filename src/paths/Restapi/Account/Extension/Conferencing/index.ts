import {
  GetConferencingInfoResponse,
  ReadConferencingSettingsParameters,
  UpdateConferencingInfoRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Conferencing {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/conferencing`;
  }

  /**
   * Operation: Get User Conferencing Settings
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing
   */
  async get(
    queryParams?: ReadConferencingSettingsParameters
  ): Promise<GetConferencingInfoResponse> {
    const r = await this.rc.get<GetConferencingInfoResponse>(
      this.path(),
      queryParams
    );
    return r.data;
  }

  /**
   * Operation: Update User Conferencing Settings
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing
   */
  async put(
    updateConferencingInfoRequest: UpdateConferencingInfoRequest
  ): Promise<GetConferencingInfoResponse> {
    const r = await this.rc.put<GetConferencingInfoResponse>(
      this.path(),
      updateConferencingInfoRequest
    );
    return r.data;
  }
}

export default Conferencing;
