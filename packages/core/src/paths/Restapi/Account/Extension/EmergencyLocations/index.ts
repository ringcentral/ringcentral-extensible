import DeleteExtensionEmergencyLocationParameters from '../../../../../definitions/DeleteExtensionEmergencyLocationParameters';
import EmergencyLocationResource from '../../../../../definitions/EmergencyLocationResource';
import CreateUserEmergencyLocationRequest from '../../../../../definitions/CreateUserEmergencyLocationRequest';
import EmergencyLocationsResource from '../../../../../definitions/EmergencyLocationsResource';
import GetExtensionEmergencyLocationsParameters from '../../../../../definitions/GetExtensionEmergencyLocationsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  locationId: string | null;

  constructor(parent: ParentInterface, locationId: string | null = null) {
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
   * Returns a list of emergency response locations available for the particular extension.
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
  async post(createUserEmergencyLocationRequest: CreateUserEmergencyLocationRequest, restRequestConfig?: RestRequestConfig): Promise<EmergencyLocationResource> {
    const r = await this.rc.post<EmergencyLocationResource>(this.path(false), createUserEmergencyLocationRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns a personal emergency response location for the current user.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations/{locationId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<EmergencyLocationResource> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.');
    }
    const r = await this.rc.get<EmergencyLocationResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a personal emergency response location by the current user or admin.
 *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations/{locationId}
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: EmergencyFramework
   */
  async put(emergencyLocationResource: EmergencyLocationResource, restRequestConfig?: RestRequestConfig): Promise<EmergencyLocationResource> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.');
    }
    const r = await this.rc.put<EmergencyLocationResource>(this.path(), emergencyLocationResource, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes a personal emergency response location by ID by
 * the current user or admin. Multiple personal emergency response
 * locations can be deleted by single API call.
 *
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
