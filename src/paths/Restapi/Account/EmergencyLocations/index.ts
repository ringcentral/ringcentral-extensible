import {RestRequestConfig} from '../../../../Rest';
import {
  EmergencyLocationInfoRequest,
  EmergencyLocationList,
  ListEmergencyLocationsParameters,
  EmergencyLocationInfo,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class EmergencyLocations {
  rc: RingCentral;
  locationId: string | null;
  parent: Parent;

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
   * Operation: Add Emergency Location
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/emergency-locations
   */
  async post(
    emergencyLocationInfoRequest: EmergencyLocationInfoRequest,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(false),
      emergencyLocationInfoRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Emergency Location List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/emergency-locations
   */
  async list(
    queryParams?: ListEmergencyLocationsParameters,
    config?: RestRequestConfig
  ): Promise<EmergencyLocationList> {
    const r = await this.rc.get<EmergencyLocationList>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Emergency Location
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/emergency-locations/{locationId}
   */
  async get(config?: RestRequestConfig): Promise<EmergencyLocationInfo> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.');
    }

    const r = await this.rc.get<EmergencyLocationInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Emergency Location
   * Rate Limit Group: Heavy
   * Http put /restapi/v1.0/account/{accountId}/emergency-locations/{locationId}
   */
  async put(
    emergencyLocationInfoRequest: EmergencyLocationInfoRequest,
    config?: RestRequestConfig
  ): Promise<EmergencyLocationInfo> {
    if (this.locationId === null) {
      throw new Error('locationId must be specified.');
    }

    const r = await this.rc.put<EmergencyLocationInfo>(
      this.path(),
      emergencyLocationInfoRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default EmergencyLocations;
