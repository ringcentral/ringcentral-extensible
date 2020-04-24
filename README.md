# RingCentral TypeScript SDK

This SDK is modelled after the [RingCentral.NET](https://github.com/ringcentral/ringcentral.net) SDK which is the most popular RingCentral SDK for static compiled languages.


## Installation

```
yarn add ringcentral-typescript
```


## Sample code

#### [Sample code for all the endpoints](./sample.md)

You can also find lots of useful code snippets from the [test cases](./test).

Since this library is model after the [RingCentral.NET](https://github.com/ringcentral/ringcentral.net) SDK, you can also reference the samples in C#. It should be straightforward to translate C# code into TypeScript or JavaScript since this two SDKs are very similar.


## For maintainers

### Regenerate code using latest swagger spec

Get the latest swagger spec [here])(https://github.com/ringcentral/RingCentral.Net/blob/master/code-generator/rc-platform-adjusted.yml) and run:

```
yarn generate
```


### Compile

```
yarn tsc
```


### Test

```
yarn test
```


### Todo

- sdk version in user agent. adjust project structure before publishing
- Generate API reference
    - go to dotnet SDK
- check other tsconfig options as well
- Travis
- Replace axios with @ringcentral/sdk ?
- Make it an RingCentral official project
- PubNub
    - if use @ringcentral/sdk, then no need to implement
- Support events
    - if use @ringcentral/sdk, then no need to implement
