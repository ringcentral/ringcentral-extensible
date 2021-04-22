import {SharedLinesInfo} from './index';

class UserAnsweringRuleListRecord {
  /**
   * Canonical URI to an answering rule resource
   */
  uri?: string;

  /**
   * Internal identifier of an answering rule
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
   */
  sharedLines?: SharedLinesInfo;
}

export default UserAnsweringRuleListRecord;
