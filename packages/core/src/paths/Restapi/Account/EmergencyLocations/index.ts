import DeleteEmergencyLocationParameters from "../../../../definitions/DeleteEmergencyLocationParameters.js";
import CommonEmergencyLocationResource from "../../../../definitions/CommonEmergencyLocationResource.js";
import ReadEmergencyLocationParameters from "../../../../definitions/ReadEmergencyLocationParameters.js";
import EmergencyLocationResponseResource from "../../../../definitions/EmergencyLocationResponseResource.js";
import EmergencyLocationRequestResource from "../../../../definitions/EmergencyLocationRequestResource.js";
import EmergencyLocationsResource from "../../../../definitions/EmergencyLocationsResource.js";
import ListEmergencyLocationsParameters from "../../../../definitions/ListEmergencyLocationsParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

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
   * Returns emergency response locations for the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-locations
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async list(
    queryParams?: ListEmergencyLocationsParameters,
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
   * Creates a new emergency response location for a company.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-locations
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async post(
    emergencyLocationRequestResource: EmergencyLocationRequestResource,
    restRequestConfig?: RestRequestConfig,
  ): Promise<EmergencyLocationResponseResource> {
    const r = await this.rc.post<EmergencyLocationResponseResource>(
      this.path(false),
      emergencyLocationRequestResource,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns emergency response location by ID. Available for Admin users only.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-locations/{locationId}
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async get(
    queryParams?: ReadEmergencyLocationParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommonEmergencyLocationResource> {
    if (this.locationId === null) {
      throw new Error("locationId must be specified.");
    }
    const r = await this.rc.get<CommonEmergencyLocationResource>(
      this.path(),
      queryParams,
      restRequestConfig,
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
   * Deletes the specified emergency response location.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-locations/{locationId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async delete(
    queryParams?: DeleteEmergencyLocationParameters,
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
