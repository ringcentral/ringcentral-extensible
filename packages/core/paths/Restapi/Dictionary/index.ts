import PermissionCategory from './PermissionCategory';
import FaxCoverPage from './FaxCoverPage';
import Permission from './Permission';
import UserRole from './UserRole';
import Location from './Location';
import Timezone from './Timezone';
import Language from './Language';
import Greeting from './Greeting';
import Country from './Country';
import State from './State';
import Brand from './Brand';
import Parent from '..';
import { RingCentral } from '../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/dictionary`;
  }

  brand(brandId: string | null = null): Brand {
    return new Brand(this, brandId);
  }

  state(stateId: string | null = null): State {
    return new State(this, stateId);
  }

  country(countryId: string | null = null): Country {
    return new Country(this, countryId);
  }

  greeting(greetingId: string | null = null): Greeting {
    return new Greeting(this, greetingId);
  }

  language(languageId: string | null = null): Language {
    return new Language(this, languageId);
  }

  timezone(timezoneId: string | null = null): Timezone {
    return new Timezone(this, timezoneId);
  }

  location(): Location {
    return new Location(this);
  }

  userRole(roleId: string | null = null): UserRole {
    return new UserRole(this, roleId);
  }

  permission(permissionId: string | null = null): Permission {
    return new Permission(this, permissionId);
  }

  faxCoverPage(): FaxCoverPage {
    return new FaxCoverPage(this);
  }

  permissionCategory(
    permissionCategoryId: string | null = null,
  ): PermissionCategory {
    return new PermissionCategory(this, permissionCategoryId);
  }
}
export default Index;
