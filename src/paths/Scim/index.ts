import Users from './Users';
import ServiceProviderConfig from './ServiceProviderConfig';
import Health from './Health';
import RingCentral from '../..';

class Index {
  rc: RingCentral;
  version: string | null;

  constructor(rc: RingCentral, version: string | null = 'v2') {
    this.rc = rc;
    this.version = version;
  }

  path(withParameter = true): string {
    if (withParameter && this.version !== null) {
      return `/scim/${this.version}`;
    }

    return '/scim';
  }

  health(): Health {
    return new Health(this);
  }

  serviceProviderConfig(): ServiceProviderConfig {
    return new ServiceProviderConfig(this);
  }

  users(id: string | null = null): Users {
    return new Users(this, id);
  }
}

export default Index;
