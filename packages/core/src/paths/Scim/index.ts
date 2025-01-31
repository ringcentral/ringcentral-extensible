import ServiceProviderConfig from "./ServiceProviderConfig/index.js";
import ResourceTypes from "./ResourceTypes/index.js";
import Schemas from "./Schemas/index.js";
import Users from "./Users/index.js";
import { RingCentralInterface } from "../../types.js";

class Index {
  public rc: RingCentralInterface;
  public version: string | null;

  public constructor(rc: RingCentralInterface, version: string | null = "v2") {
    this.rc = rc;
    this.version = version;
  }
  public path(withParameter = true): string {
    if (withParameter && this.version !== null) {
      return `/scim/${this.version}`;
    }
    return "/scim";
  }

  public users(scimUserId: string | null = null): Users {
    return new Users(this, scimUserId);
  }

  public schemas(uri: string | null = null): Schemas {
    return new Schemas(this, uri);
  }

  public resourceTypes(type: string | null = null): ResourceTypes {
    return new ResourceTypes(this, type);
  }

  public serviceProviderConfig(): ServiceProviderConfig {
    return new ServiceProviderConfig(this);
  }
}
export default Index;
