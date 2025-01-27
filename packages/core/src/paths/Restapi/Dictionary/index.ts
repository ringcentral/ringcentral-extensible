import PermissionCategory from "./PermissionCategory/index.js";
import FaxCoverPage from "./FaxCoverPage/index.js";
import Permission from "./Permission/index.js";
import UserRole from "./UserRole/index.js";
import Location from "./Location/index.js";
import Timezone from "./Timezone/index.js";
import Greeting from "./Greeting/index.js";
import Language from "./Language/index.js";
import Country from "./Country/index.js";
import State from "./State/index.js";
import Brand from "./Brand/index.js";
import { ParentInterface, RingCentralInterface } from "../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/dictionary`;
  }

  public brand(brandId: string | null = null): Brand {
    return new Brand(this, brandId);
  }

  public state(stateId: string | null = null): State {
    return new State(this, stateId);
  }

  public country(countryId: string | null = null): Country {
    return new Country(this, countryId);
  }

  public language(languageId: string | null = null): Language {
    return new Language(this, languageId);
  }

  public greeting(greetingId: string | null = null): Greeting {
    return new Greeting(this, greetingId);
  }

  public timezone(timezoneId: string | null = null): Timezone {
    return new Timezone(this, timezoneId);
  }

  public location(): Location {
    return new Location(this);
  }

  public userRole(roleId: string | null = null): UserRole {
    return new UserRole(this, roleId);
  }

  public permission(permissionId: string | null = null): Permission {
    return new Permission(this, permissionId);
  }

  public faxCoverPage(): FaxCoverPage {
    return new FaxCoverPage(this);
  }

  public permissionCategory(
    permissionCategoryId: string | null = null,
  ): PermissionCategory {
    return new PermissionCategory(this, permissionCategoryId);
  }
}
export default Index;
