import OpenIdDiscovery from "../../../definitions/OpenIdDiscovery.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/openid-configuration`;
  }
  /**
   * Returns OpenID Connect provider configuration.
   *
   * This endpoint follows the [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata) specification.
   * It provides a mechanism for an OpenID Connect Relying Party to discover the End-User's OpenID Provider and obtain information
   * needed to interact with it, including its OAuth 2.0 endpoint locations.
   *
   * HTTP Method: get
   * Endpoint: /.well-known/openid-configuration
   * Rate Limit Group: NoThrottling
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<OpenIdDiscovery> {
    const r = await this.rc.get<OpenIdDiscovery>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
