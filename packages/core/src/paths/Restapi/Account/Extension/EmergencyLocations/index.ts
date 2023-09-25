import type DeleteExtensionEmergencyLocationParameters from '../../../../../definitions/DeleteExtensionEmergencyLocationParameters';
import type EmergencyLocationResource from '../../../../../definitions/EmergencyLocationResource';
import type CreateUserEmergencyLocationRequest from '../../../../../definitions/CreateUserEmergencyLocationRequest';
import type EmergencyLocationsResource from '../../../../../definitions/EmergencyLocationsResource';
import type GetExtensionEmergencyLocationsParameters from '../../../../../definitions/GetExtensionEmergencyLocationsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public locationId: string | null;

  public constructor(_parent: ParentInterface, locationId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.locationId = locationId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.locationId !== null) {
      return `${this._parent.path()}/emergency-locations/${this.locationId}`;
    }
    return `${this._parent.path()}/emergency-locations`;
  }

  /**
   * Returns a list of emergency response locations available for the particular extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async list(
    queryParams?: GetExtensionEmergencyLocationsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<EmergencyLocationsResource> {
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
  public async post(
    createUserEmergencyLocationRequest: CreateUserEmergencyLocationRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<EmergencyLocationResource> {
    const r = await this.rc.post<EmergencyLocationResource>(
      this.path(false),
      createUserEmergencyLocationRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a personal emergency response location for the current user.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations/{locationId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<EmergencyLocationResource> {
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
  public async put(
    emergencyLocationResource: EmergencyLocationResource,
    restRequestConfig?: RestRequestConfig,
  ): Promise<EmergencyLocationResource> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.');
    }
    const r = await this.rc.put<EmergencyLocationResource>(
      this.path(),
      emergencyLocationResource,
      undefined,
      restRequestConfig,
    );
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
  public async delete(
    queryParams?: DeleteExtensionEmergencyLocationParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
