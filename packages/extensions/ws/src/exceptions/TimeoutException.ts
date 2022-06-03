class TimeoutException extends Error {
  constructor(message?: string) {
    super(message ?? 'Failed to receive expected WebSocket message in time.');
  }
}

export default TimeoutException;
