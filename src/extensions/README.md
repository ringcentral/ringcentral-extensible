# Extensions

This folder contains features which are not considered to be the core of the SDK.

## [Debug Mode](./debugMode)

Debug mode prints details about API traffic so you can inspect the request and response data.


## Rate Limiting

The RingCentral Platform enforces rate limits to reduce network traffic and avoid DOS issues.

[Here's](https://medium.com/ringcentral-developers/new-features-in-ringcentral-net-sdk-4-0-e2c596f63f43) a blog article discussing it in detail.

This SDK has the option of handling rate limits automatically by passing `handleRateLimit: (boolean | number)` into the constructor.

Options:

- boolean
    - When set to true, this will pause requests for however many seconds are indicated in the `rate-limit-window` header (defaulting to 60 is there header is somehow missing)
- number
    - When set to a number, this overrides using the header, or the default, and instead pauses for x seconds (where x is your number in the constructor)
