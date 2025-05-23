# Debug Extension

Provide debug mode for this SDK.

## Install

```
yarn add @rc-ex/debug
```

## Usage

```ts
import RingCentral from '@rc-ex/core';
import DebugExtension from '@rc-ex/debug';

const rc = new RingCentral(...);
const debugExtension = new DebugExtension();
await rc.installExtension(debugExtension);
```

With this extension installed, details for every API request traffic will be
printed using `console.debug`.

Below is sample output for
`await rc.restapi().account().extension().messageStore().list()`:

```
console.debug
HTTP 200 OK

Response:
{
    "data": {
    "uri": "https://platform.devtest.ringcentral.com/restapi/v1.0/account/233676004/extension/233676004/message-store?availability=Alive&dateFrom=2020-06-03T01:35:00.000Z&page=1&perPage=100",
    "records": [],
    "paging": {
        "page": 1,
        "totalPages": 1,
        "perPage": 100,
        "totalElements": 0
    },
    "navigation": {
        "firstPage": {
        "uri": "https://platform.devtest.ringcentral.com/restapi/v1.0/account/233676004/extension/233676004/message-store?availability=Alive&dateFrom=2020-06-03T01:35:00.000Z&page=1&perPage=100"
        },
        "lastPage": {
        "uri": "https://platform.devtest.ringcentral.com/restapi/v1.0/account/233676004/extension/233676004/message-store?availability=Alive&dateFrom=2020-06-03T01:35:00.000Z&page=1&perPage=100"
        }
    }
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
    "server": "nginx",
    "date": "Thu, 04 Jun 2020 01:34:47 GMT",
    "content-type": "application/json;charset=utf-8",
    "content-length": "779",
    "connection": "close",
    "rcrequestid": "9379f134-a603-11ea-899e-005056bbcdd9",
    "routingkey": "SJC11P01PAS02",
    "content-language": "en-US",
    "vary": "Accept-Encoding, User-Agent",
    "x-rate-limit-group": "light",
    "x-rate-limit-limit": "100",
    "x-rate-limit-remaining": "99",
    "x-rate-limit-window": "60"
    }
}

Request:
{
    "method": "get",
    "baseURL": "https://platform.devtest.ringcentral.com",
    "url": "/restapi/v1.0/account/~/extension/~/message-store",
    "headers": {
    "Accept": "application/json, text/plain, */*",
    "X-User-Agent": "Unknown/0.0.1 ringcentral-extensible/core/0.5.5",
    "Authorization": "Bearer U0pDMTFQMDFQQVMwMHxBQUFmUXE0dG9FbTBBNll2eDlWYUhoNkQyblBWVXlXZnc0b0VxWldtVjNTZkw1MGExNG8wbHdscU4tOVEwU1RiWU9IYUt3NUY2Y2lVQk9oaDE4amlSN2VqTDl0VlhNMnZNYzVOa1FLZWJyejJRRDk3VnFESkdIV3k2U1RuU28zeG52RHlPdW5OcXFIR3FkbU1IQWhTaUluY0psN3A2ckQxbEhPRG1MdkIxX0FpSlhQeXlES2tYaURWejkwWFdiVjlfQXxrRjF4RVF8S1BrdVJvLVhBMlhIMXdlcnV6VVdjd3xBUQ",
    "User-Agent": "axios/0.19.2"
    }
}
```

For a working sample, please check this
[test case](../../../test/debug-extension.spec.ts).

## loggingAction

Optionally, you can specify a `loggingAction` function to the extension
constructor.

```ts
export type LoggingAction = (message: string) => void;
```

`loggingAction` determines how debug messages are logged. By default it is:

```ts
((message) => console.debug(message));
```
