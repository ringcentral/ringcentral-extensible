interface CallRecordingExtensionResource {
  /**
   * Internal identifier of an extension
   */
  id?: string;

  /**
   * Format: uri
   */
  uri?: string;

  /** */
  extensionNumber?: string;

  /** */
  type?: string;

  /**
   * Direction of a call
   */
  callDirection?: "Outbound" | "Inbound" | "All";

  /**
   * Alternate call recording setting. Status of the smart ACR for outbound call recordings.
   *  Supported for "Outbound" and "All" call directions.
   */
  alternateOutboundCallRecordingMode?: boolean;
}

export default CallRecordingExtensionResource;
