import WebSocketExtension from "@rc-ex/ws";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

describe("WebSocket default autoRecover.checkInterval", () => {
  const spyOnRandom = () => vi.spyOn(Math, "random");
  let randomMock: ReturnType<typeof spyOnRandom>;
  beforeEach(() => {
    randomMock = spyOnRandom();
  });
  afterEach(() => {
    randomMock.mockRestore();
  });

  const checkIntervalOf = () =>
    new WebSocketExtension().options.autoRecover!.checkInterval!;

  test("returns exactly 1,000ms for zero failed recovery attempts", () => {
    const checkInterval = checkIntervalOf();
    expect(checkInterval(0)).toBe(1000);
    expect(checkInterval(0)).toBe(1000);
  });

  test.each([
    { retries: 1, min: 2000, max: 6000 },
    { retries: 2, min: 10000, max: 20000 },
    { retries: 3, min: 20000, max: 40000 },
    { retries: 4, min: 40000, max: 80000 },
    { retries: 5, min: 80000, max: 120000 },
    { retries: 6, min: 80000, max: 120000 },
    { retries: 100, min: 80000, max: 120000 },
  ])("returns a delay within [$min, $max]ms for $retries failed attempts", ({
    retries,
    min,
    max,
  }) => {
    const checkInterval = checkIntervalOf();
    randomMock.mockReturnValueOnce(0);
    expect(checkInterval(retries)).toBe(min); // inclusive lower endpoint
    randomMock.mockReturnValueOnce(0.999999);
    expect(checkInterval(retries)).toBe(max); // inclusive upper endpoint
    randomMock.mockReturnValueOnce(0.5);
    expect(checkInterval(retries)).toBe(
      min + Math.floor(0.5 * (max - min + 1)),
    );
  });

  test("draws fresh random values on separate calls", () => {
    const checkInterval = checkIntervalOf();
    randomMock.mockReturnValueOnce(0).mockReturnValueOnce(0.5);
    const first = checkInterval(1);
    const second = checkInterval(1);
    expect(first).toBe(2000);
    expect(second).toBe(4000);
    expect(first).not.toBe(second);
  });

  test("keeps a custom checkInterval callback authoritative", () => {
    const custom = vi.fn(() => 42);
    const webSocketExtension = new WebSocketExtension({
      autoRecover: { enabled: true, checkInterval: custom },
    });
    expect(webSocketExtension.options.autoRecover!.checkInterval).toBe(custom);
    expect(webSocketExtension.options.autoRecover!.checkInterval!(7)).toBe(42);
    expect(custom).toHaveBeenCalledWith(7);
  });
});
