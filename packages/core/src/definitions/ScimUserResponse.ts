import type ScimEmail from "./ScimEmail.js";
import type ScimEnterpriseUser from "./ScimEnterpriseUser.js";
import type ScimMeta from "./ScimMeta.js";
import type ScimName from "./ScimName.js";
import type ScimPhoneNumber from "./ScimPhoneNumber.js";
import type ScimPhoto from "./ScimPhoto.js";
import type ScimUserAddress from "./ScimUserAddress.js";

interface ScimUserResponse {
  /**
   * User status
   */
  active?: boolean;

  /**
   */
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

  /**
   */
  phoneNumbers?: ScimPhoneNumber[];

  /**
   */
  photos?: ScimPhoto[];

  /**
   * Required
   */
  schemas?: "urn:ietf:params:scim:schemas:core:2.0:User"[];

  /**
   * User title
   */
  title?: string;

  /**
   */
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"?: ScimEnterpriseUser;

  /**
   * MUST be same as work type email address
   * Required
   */
  userName?: string;

  /**
   */
  meta?: ScimMeta;
}

export default ScimUserResponse;
