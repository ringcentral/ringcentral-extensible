import DeleteExtensionEmergencyLocationParameters from "../../../../../definitions/DeleteExtensionEmergencyLocationParameters.js";
import EmergencyLocationRequestResource from "../../../../../definitions/EmergencyLocationRequestResource.js";
import CommonEmergencyLocationResource from "../../../../../definitions/CommonEmergencyLocationResource.js";
import EmergencyLocationResponseResource from "../../../../../definitions/EmergencyLocationResponseResource.js";
import CreateUserEmergencyLocationRequest from "../../../../../definitions/CreateUserEmergencyLocationRequest.js";
import EmergencyLocationsResource from "../../../../../definitions/EmergencyLocationsResource.js";
import GetExtensionEmergencyLocationsParameters from "../../../../../definitions/GetExtensionEmergencyLocationsParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public locationId: string | null;

  public constructor(
    _parent: ParentInterface,
    locationId: string | null = null,
  ) {
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
    const r = await this.rc.get<EmergencyLocationsResource>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
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
  ): Promise<EmergencyLocationResponseResource> {
    const r = await this.rc.post<EmergencyLocationResponseResource>(
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
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommonEmergencyLocationResource> {
    if (this.locationId === null) {
      throw new Error("locationId must be specified.");
    }
    const r = await this.rc.get<CommonEmergencyLocationResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
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
    emergencyLocationRequestResource: EmergencyLocationRequestResource,
    restRequestConfig?: RestRequestConfig,
  ): Promise<EmergencyLocationResponseResource> {
    if (this.locationId === null) {
      throw new Error("locationId must be specified.");
    }
    const r = await this.rc.put<EmergencyLocationResponseResource>(
      this.path(),
      emergencyLocationRequestResource,
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
      throw new Error("locationId must be specified.");
    }
    const r = await this.rc.delete<string>(
      this.path(),
      {},
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
