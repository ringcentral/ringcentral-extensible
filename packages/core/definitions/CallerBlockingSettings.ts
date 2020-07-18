import {BlockedCallerGreetingInfo} from '.';

// Returns the lists of blocked and allowed phone numbers
class CallerBlockingSettings {
  /**
   * Call blocking options: either specific or all calls and faxes
   */
  mode?: 'Specific' | 'All';

  /**
   * Determines how to handle calls with no caller ID in 'Specific' mode
   */
  noCallerId?: 'BlockCallsAndFaxes' | 'BlockFaxes' | 'Allow';

  /**
   * Blocking settings for pay phones
   */
  payPhones?: 'Block' | 'Allow';

  /**
   * List of greetings played for blocked callers
   */
  greetings?: BlockedCallerGreetingInfo[];
}

export default CallerBlockingSettings;
