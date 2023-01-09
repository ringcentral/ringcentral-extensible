import ServiceProviderConfig from './ServiceProviderConfig';
import ResourceTypes from './ResourceTypes';
import Schemas from './Schemas';
import Users from './Users';
import { RingCentralInterface } from '../../types';

class Index {
  rc: RingCentralInterface;

  version: string | null;

  constructor(rc: RingCentralInterface, version: string | null = 'v2') {
    this.rc = rc;
    this.version = version;
  }

  path(withParameter = true): string {
    if (withParameter && this.version !== null) {
      return `/scim/${this.version}`;
    }
    return '/scim';
  }

  users(scimUserId: (string | null) = null): Users {
    return new Users(this, scimUserId);
  }

  schemas(uri: (string | null) = null): Schemas {
    return new Schemas(this, uri);
  }

  resourceTypes(type: (string | null) = null): ResourceTypes {
    return new ResourceTypes(this, type);
  }

  serviceProviderConfig(): ServiceProviderConfig {
    return new ServiceProviderConfig(this);
  }
}
export default Index;
