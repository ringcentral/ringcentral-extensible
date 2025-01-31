import ScimUserAddress from "./ScimUserAddress.js";
import ScimEmail from "./ScimEmail.js";
import ScimName from "./ScimName.js";
import ScimPhoneNumber from "./ScimPhoneNumber.js";
import ScimPhoto from "./ScimPhoto.js";
import ScimEnterpriseUser from "./ScimEnterpriseUser.js";

interface ScimUser {
  /**
   * User status
   */
  active?: boolean;

  /** */
  addresses?: ScimUserAddress[];

  /**
   * Required
   */
  emails?: ScimEmail[];

  /**
   * External unique resource ID defined by provisioning client
   */
  externalId?: string;

  /**
   * Unique resource ID defined by RingCentral
   */
  id?: string;

  /**
   * Required
   */
  name?: ScimName;

  /** */
  phoneNumbers?: ScimPhoneNumber[];

  /** */
  photos?: ScimPhoto[];

  /**
   * Required
   */
  schemas?: ("urn:ietf:params:scim:schemas:core:2.0:User")[];

  /**
   * User title
   */
  title?: string;

  /** */
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"?:
    ScimEnterpriseUser;

  /**
   * MUST be same as work type email address
   * Required
   */
  userName?: string;
}

export default ScimUser;
