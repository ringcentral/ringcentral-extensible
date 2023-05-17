import PermissionCategory from './PermissionCategory';
import FaxCoverPage from './FaxCoverPage';
import Permission from './Permission';
import UserRole from './UserRole';
import Location from './Location';
import Timezone from './Timezone';
import Greeting from './Greeting';
import Language from './Language';
import Country from './Country';
import State from './State';
import Brand from './Brand';
import { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/dictionary`;
  }

  public brand(brandId: (string | null) = null): Brand {
    return new Brand(this, brandId);
  }

  public state(stateId: (string | null) = null): State {
    return new State(this, stateId);
  }

  public country(countryId: (string | null) = null): Country {
    return new Country(this, countryId);
  }

  public language(languageId: (string | null) = null): Language {
    return new Language(this, languageId);
  }

  public greeting(greetingId: (string | null) = null): Greeting {
    return new Greeting(this, greetingId);
  }

  public timezone(timezoneId: (string | null) = null): Timezone {
    return new Timezone(this, timezoneId);
  }

  public location(): Location {
    return new Location(this);
  }

  public userRole(roleId: (string | null) = null): UserRole {
    return new UserRole(this, roleId);
  }

  public permission(permissionId: (string | null) = null): Permission {
    return new Permission(this, permissionId);
  }

  public faxCoverPage(): FaxCoverPage {
    return new FaxCoverPage(this);
  }

  public permissionCategory(permissionCategoryId: (string | null) = null): PermissionCategory {
    return new PermissionCategory(this, permissionCategoryId);
  }
}
export default Index;
