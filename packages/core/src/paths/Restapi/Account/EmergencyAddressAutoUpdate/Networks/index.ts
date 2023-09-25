import type UpdateNetworkRequest from '../../../../../definitions/UpdateNetworkRequest';
import type NetworkInfo from '../../../../../definitions/NetworkInfo';
import type CreateNetworkRequest from '../../../../../definitions/CreateNetworkRequest';
import type NetworksList from '../../../../../definitions/NetworksList';
import type ListNetworksParameters from '../../../../../definitions/ListNetworksParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public networkId: string | null;

  public constructor(_parent: ParentInterface, networkId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.networkId = networkId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.networkId !== null) {
      return `${this._parent.path()}/networks/${this.networkId}`;
    }
    return `${this._parent.path()}/networks`;
  }

  /**
   * Returns a corporate network map with emergency addresses assigned
   * to the current account.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async list(
    queryParams?: ListNetworksParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<NetworksList> {
    const r = await this.rc.get<NetworksList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new network in a corporate ethernet map for assignment
   * of emergency addresses to network access points.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async post(
    createNetworkRequest: CreateNetworkRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<NetworkInfo> {
    const r = await this.rc.post<NetworkInfo>(this.path(false), createNetworkRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the specified network with emergency addresses assigned
   * to the current account.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<NetworkInfo> {
    if (this.networkId === null) {
      throw new Error('networkId must be specified.');
    }
    const r = await this.rc.get<NetworkInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a network in a corporate ethernet map for assignment of emergency
   * addresses to network access points.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async put(
    updateNetworkRequest: UpdateNetworkRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<NetworkInfo> {
    if (this.networkId === null) {
      throw new Error('networkId must be specified.');
    }
    const r = await this.rc.put<NetworkInfo>(this.path(), updateNetworkRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes network(s) in a corporate ethernet map for Automatic Location
   * Updates feature.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.networkId === null) {
      throw new Error('networkId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
