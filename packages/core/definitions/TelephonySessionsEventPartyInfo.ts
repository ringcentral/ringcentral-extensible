import {CallPartyInfo, CallSessionStatusInfo} from '.';

class TelephonySessionsEventPartyInfo {
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
