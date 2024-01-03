import type UpdateConferencingInfoRequest from '../../../../../definitions/UpdateConferencingInfoRequest';
import type GetConferencingInfoResponse from '../../../../../definitions/GetConferencingInfoResponse';
import type ReadConferencingSettingsParameters from '../../../../../definitions/ReadConferencingSettingsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/conferencing`;
  }
  /**
   * Returns information on Free Conference Calling (FCC) feature
   * for a given extension.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/conferencing
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: OrganizeConference
   */
  public async get(
    queryParams?: ReadConferencingSettingsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetConferencingInfoResponse> {
    const r = await this.rc.get<GetConferencingInfoResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the default conferencing number for the current extension.
   * The number can be selected from conferencing numbers of the current extension.
   * Updates the setting, allowing participants join the conference before host.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/conferencing
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: OrganizeConference
   */
  public async put(
    updateConferencingInfoRequest: UpdateConferencingInfoRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetConferencingInfoResponse> {
    const r = await this.rc.put<GetConferencingInfoResponse>(
      this.path(),
      updateConferencingInfoRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
