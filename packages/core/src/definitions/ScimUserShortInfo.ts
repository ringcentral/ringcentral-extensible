import ScimEmail from "./ScimEmail.js";
import ScimName from "./ScimName.js";
import ScimPhoto from "./ScimPhoto.js";
import ScimEnterpriseUser from "./ScimEnterpriseUser.js";
import ScimMeta from "./ScimMeta.js";

interface ScimUserShortInfo {
  /**
   * User status
   */
  active?: boolean;

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

  /** */
  meta?: ScimMeta;
}

export default ScimUserShortInfo;
