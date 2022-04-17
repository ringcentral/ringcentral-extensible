class UpdateUnifiedPresenceTelephony {
  /**
   * Telephony DND status
   */
  availability?:
  | 'TakeAllCalls'
  | 'DoNotAcceptAnyCalls'
  | 'DoNotAcceptQueueCalls';
}
export default UpdateUnifiedPresenceTelephony;
