interface BridgePstnPins {
  /**
   * Host PSTN PIN. If it is not specified while creation, then a PIN will be generated.
   * Example: 432331057631
   */
  host?: string;

  /**
   * Participant PSTN PIN. If it is not specified while creation, then a PIN will be generated.
   * Example: 013409241367
   */
  participant?: string;
}

export default BridgePstnPins;
