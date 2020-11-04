# Authorize URI Extension

Generate Authorize URI.


## Install

```
yarn add @rc-ex/authorize-uri
```


## Usage

```ts
import RingCentral from '@rc-ex/core';
import AuthorizeUriExtension from '@rc-ex/authorize-uri';

const rc = new RingCentral(...);
const authorizeUriExtension = new AuthorizeUriExtension();
await rc.installExtension(authorizeUriExtension);
const authorizeUri = authorizeUriExtension.buildUri({
  state: 'hello',
  redirect_uri: 'https://example.com',
});
```

For a working sample, please check this [test case](../../../test/authorize-uri-extension.spec.ts).


## PKCE

Ref: https://medium.com/ringcentral-developers/use-authorization-code-pkce-for-ringcentral-api-in-client-app-e9108f04b5f0

First and foremost, you should not specify client secret in your project, that's the whole point of PKCE.

Secondly, specify `code_challenge_method: 'S256'`:


```ts
const authorizeUri = authorizeUriExtension.buildUri({
  state: 'hello',
  redirect_uri: 'https://example.com',
  code_challenge_method: 'S256'
});
```

And you should save the `codeVerifier`:

```ts
const codeVerifier = authorizeUriExtension.codeVerifier
```

You may need to persist `codeVerifier` in case browser web page refreshes.

And when you make the authorize API call, remember to specify `code_verifier`:

```ts
await rc.authorize({
    code: '...',
    redirect_uri: '...',
    code_verifier: codeVerifier
})
```

### PKCE demo

- [Online demo](https://chuntaoliu.com/pkce-demo-ts/)
- [Source code](https://github.com/tylerlong/pkce-demo-ts)


## Base Authorization URI

Optionally, you can specify `baseAuthorizationUri` as parameter to the constructor of this extension.
If it's not specified, `${rc.rest.server}/restapi/oauth/authorize` is used as `baseAuthorizationUri`.
