import {RestRequestConfig} from '../../../../Rest';
import {
  ListEmergencyLocationsParameters,
  EmergencyLocationList,
  EmergencyLocationInfoRequest,
  EmergencyLocationInfo,
  DeleteEmergencyLocationParameters,
} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  locationId: string | null;

  constructor(parent: Parent, locationId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.locationId = locationId;
  }
  path(withParameter = true): string {
    if (withParameter && this.locationId !== null) {
      return `${this.parent.path()}/emergency-locations/${this.locationId}`;
    }
    return `${this.parent.path()}/emergency-locations`;
  }
  /**
   * Returns emergency response locations of the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-locations
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async list(
    queryParams?: ListEmergencyLocationsParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<EmergencyLocationList> {
    const r = await this.rc.get<EmergencyLocationList>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Add Emergency Location
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-locations
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async post(
    emergencyLocationInfoRequest: EmergencyLocationInfoRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(false),
      emergencyLocationInfoRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns emergency response location by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-locations/{locationId}
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<EmergencyLocationInfo> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.');
    }
    const r = await this.rc.get<EmergencyLocationInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates the specified emergency response location.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-locations/{locationId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async put(
    emergencyLocationInfoRequest: EmergencyLocationInfoRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<EmergencyLocationInfo> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.');
    }
    const r = await this.rc.put<EmergencyLocationInfo>(
      this.path(),
      emergencyLocationInfoRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes the specified emergency response location.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-locations/{locationId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async delete(
    queryParams?: DeleteEmergencyLocationParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
