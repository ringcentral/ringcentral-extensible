import {RestRequestConfig} from '../../../../../Rest';
import {
  NetworksList,
  NetworkInfo,
  CreateNetworkRequest,
  UpdateNetworkRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  networkId: string | null;
  parent: Parent;

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
   * Operation: Get Network Map
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks
   */
  async list(config?: RestRequestConfig): Promise<NetworksList> {
    const r = await this.rc.get<NetworksList>(
      this.path(false),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Network
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks
   */
  async post(
    createNetworkRequest: CreateNetworkRequest,
    config?: RestRequestConfig
  ): Promise<NetworkInfo> {
    const r = await this.rc.post<NetworkInfo>(
      this.path(false),
      createNetworkRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Network
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   */
  async get(config?: RestRequestConfig): Promise<NetworkInfo> {
    if (this.networkId === null) {
      throw new Error('networkId must be specified.');
    }

    const r = await this.rc.get<NetworkInfo>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Update Network
   * Rate Limit Group: Heavy
   * Http put /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   */
  async put(
    updateNetworkRequest: UpdateNetworkRequest,
    config?: RestRequestConfig
  ): Promise<string> {
    if (this.networkId === null) {
      throw new Error('networkId must be specified.');
    }

    const r = await this.rc.put<string>(
      this.path(),
      updateNetworkRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Network
   * Rate Limit Group: Heavy
   * Http delete /restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.networkId === null) {
      throw new Error('networkId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Index;
