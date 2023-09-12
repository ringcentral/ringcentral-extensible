interface PubNubDeliveryModeRequest {
  /**
   * The transport type for this subscription, or the channel by which an app should be notified of an event
   * Required
   */
  transportType?: ('PubNub');

  /**
   * Optional. Specifies if notification messages will be encrypted
 *  or not. Please note that for some event filters (e.g. presence) encryption is mandatory and
 *  `false` value provided by caller will be ignored.
   */
  encryption?: boolean;
}

export default PubNubDeliveryModeRequest;
