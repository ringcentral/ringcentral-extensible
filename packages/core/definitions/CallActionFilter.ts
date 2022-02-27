class CallActionFilter {
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
export default CallActionFilter;
