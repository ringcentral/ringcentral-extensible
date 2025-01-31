import GetLocationListResponse from "../../../../definitions/GetLocationListResponse.js";
import ListLocationsParameters from "../../../../definitions/ListLocationsParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/location`;
  }
  /**
   * Returns all available locations for a certain state.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/location
   * Rate Limit Group: Light
   */
  public async get(
    queryParams?: ListLocationsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetLocationListResponse> {
    const r = await this.rc.get<GetLocationListResponse>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
