class ClosedException extends Error {
  constructor(message?: string) {
    super(message ?? 'WebSocket has been closed');
  }
}

export default ClosedException;
