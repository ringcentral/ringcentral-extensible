import {SharedLinesInfo} from '.';

class UserAnsweringRuleListRecord {
  /**
   * Canonical URI to an answering rule resource
   */
  uri?: string;

  /**
   * Internal identifier of an asnwering rule
   */
  id?: string;

  /**
   * Type of an answering rule
   */
  type?: 'BusinessHours' | 'AfterHours' | 'Custom';

  /**
   * Name of an answering rule specified by user
   */
  name?: string;

  /**
   * Specifies if an answering rule is active or inactive
   */
  enabled?: boolean;

  /**
   * SharedLines call handling action settings
   */
  sharedLines?: SharedLinesInfo;
}

export default UserAnsweringRuleListRecord;
