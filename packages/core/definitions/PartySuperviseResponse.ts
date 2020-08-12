import {PartyInfo, OwnerInfo, CallStatusInfo} from './index';

class PartySuperviseResponse {
  /**
   * Information about a call party that monitors a call
   */
  from?: PartyInfo;

  /**
   * Information about a call party that is monitored
   */
  to?: PartyInfo;

  /**
   * Direction of a call
   */
  direction?: 'Outbound' | 'Inbound';

  /**
   * Internal identifier of a party that monitors a call
   */
  id?: string;

  /**
   * Internal identifier of an account that monitors a call
   */
  accountId?: string;

  /**
   * Internal identifier of an extension that monitors a call
   */
  extensionId?: string;

  /**
   * Specifies if a call party is muted
   */
  muted?: boolean;

  /**
   * Deprecated. Infromation a call owner
   */
  owner?: OwnerInfo;

  /**
   * Specifies if a device is stand-alone
   */
  standAlone?: boolean;

  /**
   */
  status?: CallStatusInfo;
}

export default PartySuperviseResponse;
