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
   * Direction of call
   */
  callDirection?: "Outbound" | "Inbound" | "All";
}

export default CallRecordingExtensionResource;
