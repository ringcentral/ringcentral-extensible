import type CallPartyInfo from './CallPartyInfo';
import type CallSessionStatusInfo from './CallSessionStatusInfo';

interface TelephonySessionsEventPartyInfo {
  /**
   */
  accountId?: string;

  /**
   */
  extensionId?: string;

  /**
   */
  id?: string;

  /**
   */
  direction?: 'Inbound' | 'Outbound';

  /**
   */
  to?: CallPartyInfo;

  /**
   */
  from?: CallPartyInfo;

  /**
   */
  status?: CallSessionStatusInfo;
}

export default TelephonySessionsEventPartyInfo;
