import WebSocketExtension from "@rc-ex/ws";
import { describe, expect, test } from "vitest";

describe("WebSocket", () => {
  test("requests wstoken with connection close in Node", async () => {
    const webSocketExtension = new WebSocketExtension();
    const error = new Error("stop");
    const calls: unknown[][] = [];
    webSocketExtension.rc = {
      post: async (...args: unknown[]) => {
        calls.push(args);
        throw error;
      },
    } as WebSocketExtension["rc"];

    await expect(webSocketExtension._connect()).rejects.toBe(error);
    expect(calls).toEqual([
      [
        "/restapi/oauth/wstoken",
        undefined,
        undefined,
        { headers: { Connection: "close" } },
      ],
    ]);
  });
});
