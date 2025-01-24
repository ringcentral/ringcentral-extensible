class ClosedException extends Error {
  public constructor(message?: string) {
    super(message ?? "WebSocket has been closed");
  }
}

export default ClosedException;
