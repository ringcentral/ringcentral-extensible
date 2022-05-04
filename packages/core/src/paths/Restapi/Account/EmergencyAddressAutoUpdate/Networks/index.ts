import { RestRequestConfig } from '../../../../../Rest';
import {
  NetworksList, CreateNetworkRequest, NetworkInfo, UpdateNetworkRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  networkId: string | null;

  constructor(parent: Parent, networkId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.networkId = networkId;
  }

  path(withParameter = true): string {
    if (withParameter && this.networkId !== null) {
      return `${this.parent.path()}/networks/${this.networkId}`;
    }
    return `${this.parent.path()}/networks`;
  }

  /**
   * Returns corporate networks map with emergency addresses assigned to the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async list(restRequestConfig?: RestRequestConfig): Promise<NetworksList> {
    const r = await this.rc.get<NetworksList>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new network in corporate ethernet map for assignment of emergency addresses to network access points.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async post(createNetworkRequest: CreateNetworkRequest, restRequestConfig?: RestRequestConfig): Promise<NetworkInfo> {
    const r = await this.rc.post<NetworkInfo>(this.path(false), createNetworkRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the specified network with emergency addresses assigned to the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<NetworkInfo> {
    if (this.networkId === null) {
      throw new Error('networkId must be specified.');
    }
    const r = await this.rc.get<NetworkInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates network in corporate ethernet map for assignment of emergency addresses to network access points.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async put(updateNetworkRequest: UpdateNetworkRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.networkId === null) {
      throw new Error('networkId must be specified.');
    }
    const r = await this.rc.put<string>(this.path(), updateNetworkRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes network(s) in corporate ethernet map for Automatic Location Updates feature.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.networkId === null) {
      throw new Error('networkId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
