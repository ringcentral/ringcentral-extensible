import DisconnectTeamsUsersParameters from "../../../../../../definitions/DisconnectTeamsUsersParameters.js";
import ConnectTeamsUsersRequest from "../../../../../../definitions/ConnectTeamsUsersRequest.js";
import MsTeamsUserListResponse from "../../../../../../definitions/MsTeamsUserListResponse.js";
import ListTeamsUsersParameters from "../../../../../../definitions/ListTeamsUsersParameters.js";
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types.js';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  
  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/users`;
  }
  /**
   * Returns the list of Microsoft Teams Direct Routing users and their connection status with the integration,
 * filtered by provided RingCentral extension IDs (up to 25 users at a time).
 * 
 * Before using this API, the account-level setup for Direct Routing must be completed as described in
 * [this guide](https://support.ringcentral.com/article-v2/Enabling-direct-routing-in-RingCentral-and-Microsoft-Teams.html?brand=RingCentral&product=RingEX&language=en_US).
 * 
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ms-teams/direct-routing/users
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async get(queryParams?: ListTeamsUsersParameters, restRequestConfig?: RestRequestConfig): Promise<MsTeamsUserListResponse> {
    const r = await this.rc.get<MsTeamsUserListResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Connects Microsoft Teams Direct Routing users in bulk asynchronously (up to 25 users at a time).
 * 
 * Before using this API, the account-level setup for Direct Routing must be completed as described in
 * [this guide](https://support.ringcentral.com/article-v2/Enabling-direct-routing-in-RingCentral-and-Microsoft-Teams.html?brand=RingCentral&product=RingEX&language=en_US).
 * 
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ms-teams/direct-routing/users
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   */
  public async post(connectTeamsUsersRequest: ConnectTeamsUsersRequest, restRequestConfig?: RestRequestConfig): Promise<MsTeamsUserListResponse> {
    const r = await this.rc.post<MsTeamsUserListResponse>(this.path(), connectTeamsUsersRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Disconnects Microsoft Teams Direct Routing users in bulk asynchronously  (up to 25 users at a time).
 * 
 * Before using this API, the account-level setup for Direct Routing must be completed as described in
 * [this guide](https://support.ringcentral.com/article-v2/Enabling-direct-routing-in-RingCentral-and-Microsoft-Teams.html?brand=RingCentral&product=RingEX&language=en_US).
 * 
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ms-teams/direct-routing/users
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   */
  public async delete(queryParams?: DisconnectTeamsUsersParameters, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.delete<string>(this.path(), {}, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;