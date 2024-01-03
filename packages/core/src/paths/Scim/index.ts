import ServiceProviderConfig from './ServiceProviderConfig';
import ResourceTypes from './ResourceTypes';
import Schemas from './Schemas';
import Users from './Users';
import type { RingCentralInterface } from '../../types';

class Index {
  public rc: RingCentralInterface;
  public version: string | null;

  public constructor(rc: RingCentralInterface, version: string | null = 'v2') {
    this.rc = rc;
    this.version = version;
  }
  public path(withParameter = true): string {
    if (withParameter && this.version !== null) {
      return `/scim/${this.version}`;
    }
    return '/scim';
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
