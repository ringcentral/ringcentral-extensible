import type ScimEmail from './ScimEmail';
import type ScimName from './ScimName';
import type ScimPhoto from './ScimPhoto';
import type ScimEnterpriseUser from './ScimEnterpriseUser';
import type ScimMeta from './ScimMeta';

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

  /**
   */
  photos?: ScimPhoto[];

  /**
   * Required
   */
  schemas?: 'urn:ietf:params:scim:schemas:core:2.0:User'[];

  /**
   * User title
   */
  title?: string;

  /**
   */
  'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User'?: ScimEnterpriseUser;

  /**
   * MUST be same as work type email address
   * Required
   */
  userName?: string;

  /**
   */
  meta?: ScimMeta;
}

export default ScimUserShortInfo;
