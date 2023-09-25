class TimeoutException extends Error {
  public constructor(message?: string) {
    super(message ?? 'Failed to receive expected WebSocket message in time.');
  }
}

export default TimeoutException;
