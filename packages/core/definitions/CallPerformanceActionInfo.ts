class CallPerformanceActionInfo {
  /**
   */
  callAction?:
    | 'HoldOff'
    | 'HoldOn'
    | 'ParkOn'
    | 'ParkOff'
    | 'BlindTransfer'
    | 'WarmTransfer'
    | 'DTMFTransfer';
}
export default CallPerformanceActionInfo;
