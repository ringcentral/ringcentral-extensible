interface Attributes {
  /**
   * Indicates that this party is agent of new call queue
   */
  queueCall?: boolean;

  /**
   * Indicates that it was emergency ringback to party
   */
  emergencyCallback?: boolean;
}

export default Attributes;
