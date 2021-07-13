import {RestRequestConfig} from '../../../../../Rest';
import {
  ReadConferencingSettingsParameters,
  GetConferencingInfoResponse,
  UpdateConferencingInfoRequest,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
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
   * Returns the information on the Free Conference Calling (FCC) feature for a given extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/conferencing
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: OrganizeConference
   */
  async get(
    queryParams?: ReadConferencingSettingsParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<GetConferencingInfoResponse> {
    const r = await this.rc.get<GetConferencingInfoResponse>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates the default conferencing number for the current extension. The number can be selected from conferencing numbers of the current extension. Updates the setting, allowing participants join the conference before host.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/conferencing
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: OrganizeConference
   */
  async put(
    updateConferencingInfoRequest: UpdateConferencingInfoRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<GetConferencingInfoResponse> {
    const r = await this.rc.put<GetConferencingInfoResponse>(
      this.path(),
      updateConferencingInfoRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
