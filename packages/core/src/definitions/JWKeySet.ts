import type JWKey from "./JWKey.js";

interface JWKeySet {
  /**
   * Required
   */
  keys?: JWKey[];
}

export default JWKeySet;
