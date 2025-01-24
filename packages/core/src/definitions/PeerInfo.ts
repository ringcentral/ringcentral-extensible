/**
 * Peer (linked) session/party details. Valid in 'Gone' state of a call
 */
interface PeerInfo {
  /** */
  sessionId?: string;

  /** */
  telephonySessionId?: string;

  /** */
  partyId?: string;
}

export default PeerInfo;
