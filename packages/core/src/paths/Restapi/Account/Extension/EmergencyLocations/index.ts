import { RestRequestConfig } from '../../../../../Rest';
import {
  GetExtensionEmergencyLocationsParameters, EmergencyLocationsResource, CreateUserEmergencyLocationRequest, EmergencyLocationInfo, DeleteExtensionEmergencyLocationParameters,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

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
   * Returns a list of emergency response locations available for the current user extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async list(queryParams?: GetExtensionEmergencyLocationsParameters, restRequestConfig?: RestRequestConfig): Promise<EmergencyLocationsResource> {
    const r = await this.rc.get<EmergencyLocationsResource>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a personal emergency response location for the current user.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: EmergencyFramework
   */
  async post(createUserEmergencyLocationRequest: CreateUserEmergencyLocationRequest, restRequestConfig?: RestRequestConfig): Promise<EmergencyLocationInfo> {
    const r = await this.rc.post<EmergencyLocationInfo>(this.path(false), createUserEmergencyLocationRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns personal emergency response location for the current user.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations/{locationId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<EmergencyLocationInfo> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.');
    }
    const r = await this.rc.get<EmergencyLocationInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a personal emergency response location by the current user or admin.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations/{locationId}
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: EmergencyFramework
   */
  async put(emergencyLocationInfo: EmergencyLocationInfo, restRequestConfig?: RestRequestConfig): Promise<EmergencyLocationInfo> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.');
    }
    const r = await this.rc.put<EmergencyLocationInfo>(this.path(), emergencyLocationInfo, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes a personal emergency response location by ID by the current user or admin. Multiple personal emergency response locations can be deleted by one API call
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations/{locationId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: EmergencyFramework
   */
  async delete(queryParams?: DeleteExtensionEmergencyLocationParameters, restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
