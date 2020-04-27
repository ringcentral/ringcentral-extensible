# RingCentral TypeScript SDK Code Samples


## Get API Versions

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi</code></td></tr><tr><td>Rate Limit Group</td><td><code>NoThrottling</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi().list()
await rc.revoke()
```

- `result` is of type [GetVersionsResponse](./src/definitions/GetVersionsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersions) in API Explorer.


## Get Version Info

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/{apiVersion}</code></td></tr><tr><td>Rate Limit Group</td><td><code>NoThrottling</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi().get()
await rc.revoke()
```

- `result` is of type [GetVersionResponse](./src/definitions/GetVersionResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersion) in API Explorer.


## Revoke Token

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/oauth/revoke</code></td></tr><tr><td>Rate Limit Group</td><td><code>Auth</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi().Oauth().Revoke().post(revokeTokenRequest)
await rc.revoke()
```
- Parameter `revokeTokenRequest` is of type [RevokeTokenRequest](./src/definitions/RevokeTokenRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-2.0-revokeToken) in API Explorer.


## Get Token

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/oauth/token</code></td></tr><tr><td>Rate Limit Group</td><td><code>Auth</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi().Oauth().Token().post(getTokenRequest)
await rc.revoke()
```
- Parameter `getTokenRequest` is of type [GetTokenRequest](./src/definitions/GetTokenRequest.ts)
- `result` is of type [TokenInfo](./src/definitions/TokenInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-2.0-getToken) in API Explorer.


## Get API Versions

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi</code></td></tr><tr><td>Rate Limit Group</td><td><code>NoThrottling</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).list()
await rc.revoke()
```

- `result` is of type [GetVersionsResponse](./src/definitions/GetVersionsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersions) in API Explorer.


## Get Version Info

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/{apiVersion}</code></td></tr><tr><td>Rate Limit Group</td><td><code>NoThrottling</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).get()
await rc.revoke()
```

- `result` is of type [GetVersionResponse](./src/definitions/GetVersionResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersion) in API Explorer.


## Get Account Info

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).get()
await rc.revoke()
```

- `result` is of type [GetAccountInfoResponse](./src/definitions/GetAccountInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountInfo) in API Explorer.


## Get Company Active Calls

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/active-calls</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallLog</code></td></tr><tr><td>User Permission</td><td><code>ReadCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).ActiveCalls().get(listCompanyActiveCallsParameters)
await rc.revoke()
```
- Parameter `listCompanyActiveCallsParameters` is of type [ListCompanyActiveCallsParameters](./src/definitions/ListCompanyActiveCallsParameters.ts)
- `result` is of type [CompanyActiveCallsResponse](./src/definitions/CompanyActiveCallsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-listCompanyActiveCalls) in API Explorer.


## Create Company Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/answering-rule</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).AnsweringRule().post(companyAnsweringRuleRequest)
await rc.revoke()
```
- Parameter `companyAnsweringRuleRequest` is of type [CompanyAnsweringRuleRequest](./src/definitions/CompanyAnsweringRuleRequest.ts)
- `result` is of type [CompanyAnsweringRuleInfo](./src/definitions/CompanyAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createCompanyAnsweringRule) in API Explorer.


## Get Company Call Handling Rule List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/answering-rule</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).AnsweringRule().list(listCompanyAnsweringRulesParameters)
await rc.revoke()
```
- Parameter `listCompanyAnsweringRulesParameters` is of type [ListCompanyAnsweringRulesParameters](./src/definitions/ListCompanyAnsweringRulesParameters.ts)
- `result` is of type [CompanyAnsweringRuleList](./src/definitions/CompanyAnsweringRuleList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listCompanyAnsweringRules) in API Explorer.


## Get Company Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).AnsweringRule().get()
await rc.revoke()
```

- `result` is of type [CompanyAnsweringRuleInfo](./src/definitions/CompanyAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readCompanyAnsweringRule) in API Explorer.


## Update Company Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).AnsweringRule().put(companyAnsweringRuleUpdate)
await rc.revoke()
```
- Parameter `companyAnsweringRuleUpdate` is of type [CompanyAnsweringRuleUpdate](./src/definitions/CompanyAnsweringRuleUpdate.ts)
- `result` is of type [CompanyAnsweringRuleInfo](./src/definitions/CompanyAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateCompanyAnsweringRule) in API Explorer.


## Delete Company Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).AnsweringRule().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteCompanyAnsweringRule) in API Explorer.


## Create Company Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/answering-rule</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).AnsweringRule(ruleId).post(companyAnsweringRuleRequest)
await rc.revoke()
```
- Parameter `companyAnsweringRuleRequest` is of type [CompanyAnsweringRuleRequest](./src/definitions/CompanyAnsweringRuleRequest.ts)
- `result` is of type [CompanyAnsweringRuleInfo](./src/definitions/CompanyAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createCompanyAnsweringRule) in API Explorer.


## Get Company Call Handling Rule List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/answering-rule</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).AnsweringRule(ruleId).list(listCompanyAnsweringRulesParameters)
await rc.revoke()
```
- Parameter `listCompanyAnsweringRulesParameters` is of type [ListCompanyAnsweringRulesParameters](./src/definitions/ListCompanyAnsweringRulesParameters.ts)
- `result` is of type [CompanyAnsweringRuleList](./src/definitions/CompanyAnsweringRuleList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listCompanyAnsweringRules) in API Explorer.


## Get Company Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).AnsweringRule(ruleId).get()
await rc.revoke()
```

- `result` is of type [CompanyAnsweringRuleInfo](./src/definitions/CompanyAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readCompanyAnsweringRule) in API Explorer.


## Update Company Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).AnsweringRule(ruleId).put(companyAnsweringRuleUpdate)
await rc.revoke()
```
- Parameter `companyAnsweringRuleUpdate` is of type [CompanyAnsweringRuleUpdate](./src/definitions/CompanyAnsweringRuleUpdate.ts)
- `result` is of type [CompanyAnsweringRuleInfo](./src/definitions/CompanyAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateCompanyAnsweringRule) in API Explorer.


## Delete Company Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).AnsweringRule(ruleId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteCompanyAnsweringRule) in API Explorer.


## Get Account Business Address

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/business-address</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).BusinessAddress().get()
await rc.revoke()
```

- `result` is of type [AccountBusinessAddressResource](./src/definitions/AccountBusinessAddressResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountBusinessAddress) in API Explorer.


## Update Company Business Address

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/business-address</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).BusinessAddress().put(modifyAccountBusinessAddressRequest)
await rc.revoke()
```
- Parameter `modifyAccountBusinessAddressRequest` is of type [ModifyAccountBusinessAddressRequest](./src/definitions/ModifyAccountBusinessAddressRequest.ts)
- `result` is of type [AccountBusinessAddressResource](./src/definitions/AccountBusinessAddressResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-updateAccountBusinessAddress) in API Explorer.


## Get Company Business Hours

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/business-hours</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).BusinessHours().get()
await rc.revoke()
```

- `result` is of type [CompanyBusinessHours](./src/definitions/CompanyBusinessHours.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-readCompanyBusinessHours) in API Explorer.


## Update Company Business Hours

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/business-hours</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).BusinessHours().put(companyBusinessHoursUpdateRequest)
await rc.revoke()
```
- Parameter `companyBusinessHoursUpdateRequest` is of type [CompanyBusinessHoursUpdateRequest](./src/definitions/CompanyBusinessHoursUpdateRequest.ts)
- `result` is of type [CompanyBusinessHours](./src/definitions/CompanyBusinessHours.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-updateCompanyBusinessHours) in API Explorer.


## Get Company Call Log Records

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-log</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallLog</code></td></tr><tr><td>User Permission</td><td><code>FullCompanyCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallLog().list(readCompanyCallLogParameters)
await rc.revoke()
```
- Parameter `readCompanyCallLogParameters` is of type [ReadCompanyCallLogParameters](./src/definitions/ReadCompanyCallLogParameters.ts)
- `result` is of type [AccountCallLogResponse](./src/definitions/AccountCallLogResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallLog) in API Explorer.


## Get Company Call Log Record(s)

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-log/{callRecordId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallLog</code></td></tr><tr><td>User Permission</td><td><code>FullCompanyCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallLog().get(readCompanyCallRecordParameters)
await rc.revoke()
```
- Parameter `readCompanyCallRecordParameters` is of type [ReadCompanyCallRecordParameters](./src/definitions/ReadCompanyCallRecordParameters.ts)
- `result` is of type [CompanyCallLogRecord](./src/definitions/CompanyCallLogRecord.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallRecord) in API Explorer.


## Sync Company Call Log

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-log-sync</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallLog</code></td></tr><tr><td>User Permission</td><td><code>ReadCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallLogSync().get(syncAccountCallLogParameters)
await rc.revoke()
```
- Parameter `syncAccountCallLogParameters` is of type [SyncAccountCallLogParameters](./src/definitions/SyncAccountCallLogParameters.ts)
- `result` is of type [AccountCallLogSyncResponse](./src/definitions/AccountCallLogSyncResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-syncAccountCallLog) in API Explorer.


## Get Company Call Log Records

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-log</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallLog</code></td></tr><tr><td>User Permission</td><td><code>FullCompanyCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallLog(callRecordId).list(readCompanyCallLogParameters)
await rc.revoke()
```
- Parameter `readCompanyCallLogParameters` is of type [ReadCompanyCallLogParameters](./src/definitions/ReadCompanyCallLogParameters.ts)
- `result` is of type [AccountCallLogResponse](./src/definitions/AccountCallLogResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallLog) in API Explorer.


## Get Company Call Log Record(s)

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-log/{callRecordId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallLog</code></td></tr><tr><td>User Permission</td><td><code>FullCompanyCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallLog(callRecordId).get(readCompanyCallRecordParameters)
await rc.revoke()
```
- Parameter `readCompanyCallRecordParameters` is of type [ReadCompanyCallRecordParameters](./src/definitions/ReadCompanyCallRecordParameters.ts)
- `result` is of type [CompanyCallLogRecord](./src/definitions/CompanyCallLogRecord.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallRecord) in API Explorer.


## Create Call Monitoring Group

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-monitoring-groups</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>Groups</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallMonitoringGroups().post(createCallMonitoringGroupRequest)
await rc.revoke()
```
- Parameter `createCallMonitoringGroupRequest` is of type [CreateCallMonitoringGroupRequest](./src/definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type [CallMonitoringGroup](./src/definitions/CallMonitoringGroup.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-createCallMonitoringGroup) in API Explorer.


## Get Call Monitoring Groups List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-monitoring-groups</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallMonitoringGroups().get(listCallMonitoringGroupsParameters)
await rc.revoke()
```
- Parameter `listCallMonitoringGroupsParameters` is of type [ListCallMonitoringGroupsParameters](./src/definitions/ListCallMonitoringGroupsParameters.ts)
- `result` is of type [CallMonitoringGroups](./src/definitions/CallMonitoringGroups.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-listCallMonitoringGroups) in API Explorer.


## Updates Call Monitoring Group

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>Groups</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallMonitoringGroups().put(createCallMonitoringGroupRequest)
await rc.revoke()
```
- Parameter `createCallMonitoringGroupRequest` is of type [CreateCallMonitoringGroupRequest](./src/definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type [CallMonitoringGroup](./src/definitions/CallMonitoringGroup.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-updateCallMonitoringGroup) in API Explorer.


## Delete Call Monitoring Group

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>Groups</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallMonitoringGroups().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-deleteCallMonitoringGroup) in API Explorer.


## Create Call Monitoring Group

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-monitoring-groups</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>Groups</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallMonitoringGroups(groupId).post(createCallMonitoringGroupRequest)
await rc.revoke()
```
- Parameter `createCallMonitoringGroupRequest` is of type [CreateCallMonitoringGroupRequest](./src/definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type [CallMonitoringGroup](./src/definitions/CallMonitoringGroup.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-createCallMonitoringGroup) in API Explorer.


## Get Call Monitoring Groups List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-monitoring-groups</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallMonitoringGroups(groupId).get(listCallMonitoringGroupsParameters)
await rc.revoke()
```
- Parameter `listCallMonitoringGroupsParameters` is of type [ListCallMonitoringGroupsParameters](./src/definitions/ListCallMonitoringGroupsParameters.ts)
- `result` is of type [CallMonitoringGroups](./src/definitions/CallMonitoringGroups.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-listCallMonitoringGroups) in API Explorer.


## Updates Call Monitoring Group

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>Groups</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallMonitoringGroups(groupId).put(createCallMonitoringGroupRequest)
await rc.revoke()
```
- Parameter `createCallMonitoringGroupRequest` is of type [CreateCallMonitoringGroupRequest](./src/definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type [CallMonitoringGroup](./src/definitions/CallMonitoringGroup.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-updateCallMonitoringGroup) in API Explorer.


## Delete Call Monitoring Group

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>Groups</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallMonitoringGroups(groupId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-deleteCallMonitoringGroup) in API Explorer.


## Update Call Monitoring Group List

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>Groups</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallMonitoringGroups(groupId).BulkAssign().post(callMonitoringBulkAssign)
await rc.revoke()
```
- Parameter `callMonitoringBulkAssign` is of type [CallMonitoringBulkAssign](./src/definitions/CallMonitoringBulkAssign.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-updateCallMonitoringGroupList) in API Explorer.


## Get Call Monitoring Group Member List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/members</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallMonitoringGroups(groupId).Members().get(listCallMonitoringGroupMembersParameters)
await rc.revoke()
```
- Parameter `listCallMonitoringGroupMembersParameters` is of type [ListCallMonitoringGroupMembersParameters](./src/definitions/ListCallMonitoringGroupMembersParameters.ts)
- `result` is of type [CallMonitoringGroupMemberList](./src/definitions/CallMonitoringGroupMemberList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-listCallMonitoringGroupMembers) in API Explorer.


## Get Call Queue List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-queues</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallQueues().get(listCallQueuesParameters)
await rc.revoke()
```
- Parameter `listCallQueuesParameters` is of type [ListCallQueuesParameters](./src/definitions/ListCallQueuesParameters.ts)
- `result` is of type [CallQueues](./src/definitions/CallQueues.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listCallQueues) in API Explorer.


## Assign Multiple Call Queue Members

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-queues/{groupId}/bulk-assign</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>Groups</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallQueues(groupId).BulkAssign().post(callQueueBulkAssignResource)
await rc.revoke()
```
- Parameter `callQueueBulkAssignResource` is of type [CallQueueBulkAssignResource](./src/definitions/CallQueueBulkAssignResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-assignMultipleCallQueueMembers) in API Explorer.


## Get Call Queue Members

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-queues/{groupId}/members</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallQueues(groupId).Members().get(listCallQueueMembersParameters)
await rc.revoke()
```
- Parameter `listCallQueueMembersParameters` is of type [ListCallQueueMembersParameters](./src/definitions/ListCallQueueMembersParameters.ts)
- `result` is of type [CallQueueMembers](./src/definitions/CallQueueMembers.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listCallQueueMembers) in API Explorer.


## Get Call Recording Settings

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-recording</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallRecording().get()
await rc.revoke()
```

- `result` is of type [CallRecordingSettingsResource](./src/definitions/CallRecordingSettingsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readCallRecordingSettings) in API Explorer.


## Update Call Recording Settings

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-recording</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallRecording().put(callRecordingSettingsResource)
await rc.revoke()
```
- Parameter `callRecordingSettingsResource` is of type [CallRecordingSettingsResource](./src/definitions/CallRecordingSettingsResource.ts)
- `result` is of type [CallRecordingSettingsResource](./src/definitions/CallRecordingSettingsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateCallRecordingSettings) in API Explorer.


## Update Call Recording Extension List

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-recording/bulk-assign</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallRecording().BulkAssign().post(bulkAccountCallRecordingsResource)
await rc.revoke()
```
- Parameter `bulkAccountCallRecordingsResource` is of type [BulkAccountCallRecordingsResource](./src/definitions/BulkAccountCallRecordingsResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateCallRecordingExtensionList) in API Explorer.


## Get Call Recording Custom Greeting List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-recording/custom-greetings</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallRecording().CustomGreetings().get(listCallRecordingCustomGreetingsParameters)
await rc.revoke()
```
- Parameter `listCallRecordingCustomGreetingsParameters` is of type [ListCallRecordingCustomGreetingsParameters](./src/definitions/ListCallRecordingCustomGreetingsParameters.ts)
- `result` is of type [CallRecordingCustomGreetings](./src/definitions/CallRecordingCustomGreetings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listCallRecordingCustomGreetings) in API Explorer.


## Delete Call Recording Custom Greeting

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-recording/custom-greetings/{greetingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallRecording().CustomGreetings().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteCallRecordingCustomGreeting) in API Explorer.


## Get Call Recording Custom Greeting List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-recording/custom-greetings</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallRecording().CustomGreetings(greetingId).get(listCallRecordingCustomGreetingsParameters)
await rc.revoke()
```
- Parameter `listCallRecordingCustomGreetingsParameters` is of type [ListCallRecordingCustomGreetingsParameters](./src/definitions/ListCallRecordingCustomGreetingsParameters.ts)
- `result` is of type [CallRecordingCustomGreetings](./src/definitions/CallRecordingCustomGreetings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listCallRecordingCustomGreetings) in API Explorer.


## Delete Call Recording Custom Greeting

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-recording/custom-greetings/{greetingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallRecording().CustomGreetings(greetingId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteCallRecordingCustomGreeting) in API Explorer.


## Get Call Recording Extension List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/call-recording/extensions</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CallRecording().Extensions().get()
await rc.revoke()
```

- `result` is of type [CallRecordingExtensions](./src/definitions/CallRecordingExtensions.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listCallRecordingExtensions) in API Explorer.


## Create Custom Field

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/custom-fields</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CustomFields().post(customFieldCreateRequest)
await rc.revoke()
```
- Parameter `customFieldCreateRequest` is of type [CustomFieldCreateRequest](./src/definitions/CustomFieldCreateRequest.ts)
- `result` is of type [CustomFieldResource](./src/definitions/CustomFieldResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-createCustomField) in API Explorer.


## Get Custom Field List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/custom-fields</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CustomFields().get()
await rc.revoke()
```

- `result` is of type [CustomFieldsResource](./src/definitions/CustomFieldsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-listCustomFields) in API Explorer.


## Update Сustom Field

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/custom-fields/{fieldId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CustomFields().put(customFieldUpdateRequest)
await rc.revoke()
```
- Parameter `customFieldUpdateRequest` is of type [CustomFieldUpdateRequest](./src/definitions/CustomFieldUpdateRequest.ts)
- `result` is of type [CustomFieldResource](./src/definitions/CustomFieldResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-updateCustomField) in API Explorer.


## Delete Custom Field

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/custom-fields/{fieldId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CustomFields().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-deleteCustomField) in API Explorer.


## Create Custom Field

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/custom-fields</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CustomFields(fieldId).post(customFieldCreateRequest)
await rc.revoke()
```
- Parameter `customFieldCreateRequest` is of type [CustomFieldCreateRequest](./src/definitions/CustomFieldCreateRequest.ts)
- `result` is of type [CustomFieldResource](./src/definitions/CustomFieldResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-createCustomField) in API Explorer.


## Get Custom Field List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/custom-fields</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CustomFields(fieldId).get()
await rc.revoke()
```

- `result` is of type [CustomFieldsResource](./src/definitions/CustomFieldsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-listCustomFields) in API Explorer.


## Update Сustom Field

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/custom-fields/{fieldId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CustomFields(fieldId).put(customFieldUpdateRequest)
await rc.revoke()
```
- Parameter `customFieldUpdateRequest` is of type [CustomFieldUpdateRequest](./src/definitions/CustomFieldUpdateRequest.ts)
- `result` is of type [CustomFieldResource](./src/definitions/CustomFieldResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-updateCustomField) in API Explorer.


## Delete Custom Field

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/custom-fields/{fieldId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).CustomFields(fieldId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-deleteCustomField) in API Explorer.


## Assign Multiple Department Members

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/department/bulk-assign</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>UserGroups</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Department().BulkAssign().post(departmentBulkAssignResource)
await rc.revoke()
```
- Parameter `departmentBulkAssignResource` is of type [DepartmentBulkAssignResource](./src/definitions/DepartmentBulkAssignResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-assignMultipleDepartmentMembers) in API Explorer.


## Get Department Member List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/department/{departmentId}/members</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Department(departmentId).Members().get(listDepartmentMembersParameters)
await rc.revoke()
```
- Parameter `listDepartmentMembersParameters` is of type [ListDepartmentMembersParameters](./src/definitions/ListDepartmentMembersParameters.ts)
- `result` is of type [DepartmentMemberList](./src/definitions/DepartmentMemberList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listDepartmentMembers) in API Explorer.


## Get Device

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/device/{deviceId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyDevices</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Device(deviceId).get(readDeviceParameters)
await rc.revoke()
```
- Parameter `readDeviceParameters` is of type [ReadDeviceParameters](./src/definitions/ReadDeviceParameters.ts)
- `result` is of type [GetDeviceInfoResponse](./src/definitions/GetDeviceInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-readDevice) in API Explorer.


## Update Device

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/device/{deviceId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyDevices</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Device(deviceId).put(accountDeviceUpdate, updateDeviceParameters)
await rc.revoke()
```
- Parameter `accountDeviceUpdate` is of type [AccountDeviceUpdate](./src/definitions/AccountDeviceUpdate.ts)
- Parameter `updateDeviceParameters` is of type [UpdateDeviceParameters](./src/definitions/UpdateDeviceParameters.ts)
- `result` is of type [GetDeviceInfoResponse](./src/definitions/GetDeviceInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-updateDevice) in API Explorer.


## Get Company Directory Entries

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/directory/entries</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Directory().Entries().list(listDirectoryEntriesParameters)
await rc.revoke()
```
- Parameter `listDirectoryEntriesParameters` is of type [ListDirectoryEntriesParameters](./src/definitions/ListDirectoryEntriesParameters.ts)
- `result` is of type [DirectoryResource](./src/definitions/DirectoryResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-listDirectoryEntries) in API Explorer.


## Get Corporate Directory Entry

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/directory/entries/{entryId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Directory().Entries().get()
await rc.revoke()
```

- `result` is of type [ContactResource](./src/definitions/ContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readDirectoryEntry) in API Explorer.


## Search Company Directory Entries

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/directory/entries/search</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Directory().Entries().Search().post(searchDirectoryEntriesRequest)
await rc.revoke()
```
- Parameter `searchDirectoryEntriesRequest` is of type [SearchDirectoryEntriesRequest](./src/definitions/SearchDirectoryEntriesRequest.ts)
- `result` is of type [DirectoryResource](./src/definitions/DirectoryResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-searchDirectoryEntries) in API Explorer.


## Get Company Directory Entries

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/directory/entries</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Directory().Entries(entryId).list(listDirectoryEntriesParameters)
await rc.revoke()
```
- Parameter `listDirectoryEntriesParameters` is of type [ListDirectoryEntriesParameters](./src/definitions/ListDirectoryEntriesParameters.ts)
- `result` is of type [DirectoryResource](./src/definitions/DirectoryResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-listDirectoryEntries) in API Explorer.


## Get Corporate Directory Entry

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/directory/entries/{entryId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Directory().Entries(entryId).get()
await rc.revoke()
```

- `result` is of type [ContactResource](./src/definitions/ContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readDirectoryEntry) in API Explorer.


## Get Account Federation

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/directory/federation</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Directory().Federation().get()
await rc.revoke()
```

- `result` is of type [FederationResource](./src/definitions/FederationResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readAccountFederation) in API Explorer.


## Get Device List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Devices().get(listDevicesAutomaticLocationUpdatesParameters)
await rc.revoke()
```
- Parameter `listDevicesAutomaticLocationUpdatesParameters` is of type [ListDevicesAutomaticLocationUpdatesParameters](./src/definitions/ListDevicesAutomaticLocationUpdatesParameters.ts)
- `result` is of type [ListDevicesAutomaticLocationUpdates](./src/definitions/ListDevicesAutomaticLocationUpdates.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listDevicesAutomaticLocationUpdates) in API Explorer.


## Enable Automatic Location Updates for Devices

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices/bulk-assign</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Devices().BulkAssign().post(assignMultipleDevicesAutomaticLocationUpdates)
await rc.revoke()
```
- Parameter `assignMultipleDevicesAutomaticLocationUpdates` is of type [AssignMultipleDevicesAutomaticLocationUpdates](./src/definitions/AssignMultipleDevicesAutomaticLocationUpdates.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-assignMultipleDevicesAutomaticLocationUpdates) in API Explorer.


## Get Network Map

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Networks().list()
await rc.revoke()
```

- `result` is of type [NetworksList](./src/definitions/NetworksList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listNetworks) in API Explorer.


## Create Network

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Networks().post(createNetworkRequest)
await rc.revoke()
```
- Parameter `createNetworkRequest` is of type [CreateNetworkRequest](./src/definitions/CreateNetworkRequest.ts)
- `result` is of type [NetworkInfo](./src/definitions/NetworkInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createNetwork) in API Explorer.


## Get Network

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Networks().get()
await rc.revoke()
```

- `result` is of type [NetworkInfo](./src/definitions/NetworkInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readNetwork) in API Explorer.


## Update Network

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Networks().put(updateNetworkRequest)
await rc.revoke()
```
- Parameter `updateNetworkRequest` is of type [UpdateNetworkRequest](./src/definitions/UpdateNetworkRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateNetwork) in API Explorer.


## Delete Network

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Networks().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteNetwork) in API Explorer.


## Get Network Map

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Networks(networkId).list()
await rc.revoke()
```

- `result` is of type [NetworksList](./src/definitions/NetworksList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listNetworks) in API Explorer.


## Create Network

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Networks(networkId).post(createNetworkRequest)
await rc.revoke()
```
- Parameter `createNetworkRequest` is of type [CreateNetworkRequest](./src/definitions/CreateNetworkRequest.ts)
- `result` is of type [NetworkInfo](./src/definitions/NetworkInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createNetwork) in API Explorer.


## Get Network

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Networks(networkId).get()
await rc.revoke()
```

- `result` is of type [NetworkInfo](./src/definitions/NetworkInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readNetwork) in API Explorer.


## Update Network

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Networks(networkId).put(updateNetworkRequest)
await rc.revoke()
```
- Parameter `updateNetworkRequest` is of type [UpdateNetworkRequest](./src/definitions/UpdateNetworkRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateNetwork) in API Explorer.


## Delete Network

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Networks(networkId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteNetwork) in API Explorer.


## Get Account Switch List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Switches().list(listAccountSwitchesParameters)
await rc.revoke()
```
- Parameter `listAccountSwitchesParameters` is of type [ListAccountSwitchesParameters](./src/definitions/ListAccountSwitchesParameters.ts)
- `result` is of type [SwitchesList](./src/definitions/SwitchesList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listAccountSwitches) in API Explorer.


## Create Switch

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Switches().post(createSwitchInfo)
await rc.revoke()
```
- Parameter `createSwitchInfo` is of type [CreateSwitchInfo](./src/definitions/CreateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./src/definitions/SwitchInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createSwitch) in API Explorer.


## Get Switch

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Switches().get()
await rc.revoke()
```

- `result` is of type [SwitchInfo](./src/definitions/SwitchInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readSwitch) in API Explorer.


## Update Switch

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Switches().put(updateSwitchInfo)
await rc.revoke()
```
- Parameter `updateSwitchInfo` is of type [UpdateSwitchInfo](./src/definitions/UpdateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./src/definitions/SwitchInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateSwitch) in API Explorer.


## Delete Switch

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Switches().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteSwitch) in API Explorer.


## Create Multiple Switches

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-create</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().SwitchesBulkCreate().post(createMultipleSwitchesRequest)
await rc.revoke()
```
- Parameter `createMultipleSwitchesRequest` is of type [CreateMultipleSwitchesRequest](./src/definitions/CreateMultipleSwitchesRequest.ts)
- `result` is of type [CreateMultipleSwitchesResponse](./src/definitions/CreateMultipleSwitchesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createMultipleSwitches) in API Explorer.


## Update Multiple Switches

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-update</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().SwitchesBulkUpdate().post(updateMultipleSwitchesRequest)
await rc.revoke()
```
- Parameter `updateMultipleSwitchesRequest` is of type [UpdateMultipleSwitchesRequest](./src/definitions/UpdateMultipleSwitchesRequest.ts)
- `result` is of type [UpdateMultipleSwitchesResponse](./src/definitions/UpdateMultipleSwitchesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateMultipleSwitches) in API Explorer.


## Validate Multiple Switches

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-validate</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().SwitchesBulkValidate().post(validateMultipleSwitchesRequest)
await rc.revoke()
```
- Parameter `validateMultipleSwitchesRequest` is of type [ValidateMultipleSwitchesRequest](./src/definitions/ValidateMultipleSwitchesRequest.ts)
- `result` is of type [ValidateMultipleSwitchesResponse](./src/definitions/ValidateMultipleSwitchesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-validateMultipleSwitches) in API Explorer.


## Get Account Switch List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Switches(switchId).list(listAccountSwitchesParameters)
await rc.revoke()
```
- Parameter `listAccountSwitchesParameters` is of type [ListAccountSwitchesParameters](./src/definitions/ListAccountSwitchesParameters.ts)
- `result` is of type [SwitchesList](./src/definitions/SwitchesList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listAccountSwitches) in API Explorer.


## Create Switch

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Switches(switchId).post(createSwitchInfo)
await rc.revoke()
```
- Parameter `createSwitchInfo` is of type [CreateSwitchInfo](./src/definitions/CreateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./src/definitions/SwitchInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createSwitch) in API Explorer.


## Get Switch

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Switches(switchId).get()
await rc.revoke()
```

- `result` is of type [SwitchInfo](./src/definitions/SwitchInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readSwitch) in API Explorer.


## Update Switch

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Switches(switchId).put(updateSwitchInfo)
await rc.revoke()
```
- Parameter `updateSwitchInfo` is of type [UpdateSwitchInfo](./src/definitions/UpdateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./src/definitions/SwitchInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateSwitch) in API Explorer.


## Delete Switch

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Switches(switchId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteSwitch) in API Explorer.


## Get Emergency Map Configuration Task

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/tasks/{taskId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Tasks(taskId).get()
await rc.revoke()
```

- `result` is of type [AutomaticLocationUpdatesTaskInfo](./src/definitions/AutomaticLocationUpdatesTaskInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readAutomaticLocationUpdatesTask) in API Explorer.


## Get User List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/users</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Users().get(listAutomaticLocationUpdatesUsersParameters)
await rc.revoke()
```
- Parameter `listAutomaticLocationUpdatesUsersParameters` is of type [ListAutomaticLocationUpdatesUsersParameters](./src/definitions/ListAutomaticLocationUpdatesUsersParameters.ts)
- `result` is of type [AutomaticLocationUpdatesUserList](./src/definitions/AutomaticLocationUpdatesUserList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listAutomaticLocationUpdatesUsers) in API Explorer.


## Enable Automatic Location Updates for Users

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/users/bulk-assign</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().Users().BulkAssign().post(bulkAssignAutomaticaLocationUpdatesUsers)
await rc.revoke()
```
- Parameter `bulkAssignAutomaticaLocationUpdatesUsers` is of type [BulkAssignAutomaticaLocationUpdatesUsers](./src/definitions/BulkAssignAutomaticaLocationUpdatesUsers.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-assignMultipleAutomaticaLocationUpdatesUsers) in API Explorer.


## Get Wireless Point List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPoints().list(listWirelessPointsParameters)
await rc.revoke()
```
- Parameter `listWirelessPointsParameters` is of type [ListWirelessPointsParameters](./src/definitions/ListWirelessPointsParameters.ts)
- `result` is of type [WirelessPointsList](./src/definitions/WirelessPointsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listWirelessPoints) in API Explorer.


## Create Wireless Point

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPoints().post(createWirelessPoint)
await rc.revoke()
```
- Parameter `createWirelessPoint` is of type [CreateWirelessPoint](./src/definitions/CreateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./src/definitions/WirelessPointInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createWirelessPoint) in API Explorer.


## Get Wireless Point

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPoints().get()
await rc.revoke()
```

- `result` is of type [WirelessPointInfo](./src/definitions/WirelessPointInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readWirelessPoint) in API Explorer.


## Update Wireless Point

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPoints().put(updateWirelessPoint)
await rc.revoke()
```
- Parameter `updateWirelessPoint` is of type [UpdateWirelessPoint](./src/definitions/UpdateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./src/definitions/WirelessPointInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateWirelessPoint) in API Explorer.


## Delete Wireless Point

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPoints().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteWirelessPoint) in API Explorer.


## Create Multiple Wireless Points

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-create</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPointsBulkCreate().post(createMultipleWirelessPointsRequest)
await rc.revoke()
```
- Parameter `createMultipleWirelessPointsRequest` is of type [CreateMultipleWirelessPointsRequest](./src/definitions/CreateMultipleWirelessPointsRequest.ts)
- `result` is of type [CreateMultipleWirelessPointsResponse](./src/definitions/CreateMultipleWirelessPointsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createMultipleWirelessPoints) in API Explorer.


## Update Multiple Wireless Points

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-update</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPointsBulkUpdate().post(updateMultipleWirelessPointsRequest)
await rc.revoke()
```
- Parameter `updateMultipleWirelessPointsRequest` is of type [UpdateMultipleWirelessPointsRequest](./src/definitions/UpdateMultipleWirelessPointsRequest.ts)
- `result` is of type [UpdateMultipleWirelessPointsResponse](./src/definitions/UpdateMultipleWirelessPointsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateMultipleWirelessPoints) in API Explorer.


## Validate Multiple Wireless Points

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-validate</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPointsBulkValidate().post(validateMultipleWirelessPointsRequest)
await rc.revoke()
```
- Parameter `validateMultipleWirelessPointsRequest` is of type [ValidateMultipleWirelessPointsRequest](./src/definitions/ValidateMultipleWirelessPointsRequest.ts)
- `result` is of type [ValidateMultipleWirelessPointsResponse](./src/definitions/ValidateMultipleWirelessPointsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-validateMultipleWirelessPoints) in API Explorer.


## Get Wireless Point List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPoints(pointId).list(listWirelessPointsParameters)
await rc.revoke()
```
- Parameter `listWirelessPointsParameters` is of type [ListWirelessPointsParameters](./src/definitions/ListWirelessPointsParameters.ts)
- `result` is of type [WirelessPointsList](./src/definitions/WirelessPointsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listWirelessPoints) in API Explorer.


## Create Wireless Point

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPoints(pointId).post(createWirelessPoint)
await rc.revoke()
```
- Parameter `createWirelessPoint` is of type [CreateWirelessPoint](./src/definitions/CreateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./src/definitions/WirelessPointInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createWirelessPoint) in API Explorer.


## Get Wireless Point

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPoints(pointId).get()
await rc.revoke()
```

- `result` is of type [WirelessPointInfo](./src/definitions/WirelessPointInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readWirelessPoint) in API Explorer.


## Update Wireless Point

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPoints(pointId).put(updateWirelessPoint)
await rc.revoke()
```
- Parameter `updateWirelessPoint` is of type [UpdateWirelessPoint](./src/definitions/UpdateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./src/definitions/WirelessPointInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateWirelessPoint) in API Explorer.


## Delete Wireless Point

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyAddressAutoUpdate().WirelessPoints(pointId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteWirelessPoint) in API Explorer.


## Add Emergency Location

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-locations</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyLocations().post(emergencyLocationInfoRequest)
await rc.revoke()
```
- Parameter `emergencyLocationInfoRequest` is of type [EmergencyLocationInfoRequest](./src/definitions/EmergencyLocationInfoRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createEmergencyLocation) in API Explorer.


## Get Emergency Location List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-locations</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyLocations().list(listEmergencyLocationsParameters)
await rc.revoke()
```
- Parameter `listEmergencyLocationsParameters` is of type [ListEmergencyLocationsParameters](./src/definitions/ListEmergencyLocationsParameters.ts)
- `result` is of type [EmergencyLocationList](./src/definitions/EmergencyLocationList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listEmergencyLocations) in API Explorer.


## Get Emergency Location

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-locations/{locationId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyLocations().get()
await rc.revoke()
```

- `result` is of type [EmergencyLocationInfo](./src/definitions/EmergencyLocationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readEmergencyLocation) in API Explorer.


## Update Emergency Location

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-locations/{locationId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyLocations().put(emergencyLocationInfoRequest)
await rc.revoke()
```
- Parameter `emergencyLocationInfoRequest` is of type [EmergencyLocationInfoRequest](./src/definitions/EmergencyLocationInfoRequest.ts)
- `result` is of type [EmergencyLocationInfo](./src/definitions/EmergencyLocationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateEmergencyLocation) in API Explorer.


## Add Emergency Location

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-locations</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyLocations(locationId).post(emergencyLocationInfoRequest)
await rc.revoke()
```
- Parameter `emergencyLocationInfoRequest` is of type [EmergencyLocationInfoRequest](./src/definitions/EmergencyLocationInfoRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createEmergencyLocation) in API Explorer.


## Get Emergency Location List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-locations</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyLocations(locationId).list(listEmergencyLocationsParameters)
await rc.revoke()
```
- Parameter `listEmergencyLocationsParameters` is of type [ListEmergencyLocationsParameters](./src/definitions/ListEmergencyLocationsParameters.ts)
- `result` is of type [EmergencyLocationList](./src/definitions/EmergencyLocationList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listEmergencyLocations) in API Explorer.


## Get Emergency Location

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-locations/{locationId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyLocations(locationId).get()
await rc.revoke()
```

- `result` is of type [EmergencyLocationInfo](./src/definitions/EmergencyLocationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readEmergencyLocation) in API Explorer.


## Update Emergency Location

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/emergency-locations/{locationId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ConfigureEmergencyMaps</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).EmergencyLocations(locationId).put(emergencyLocationInfoRequest)
await rc.revoke()
```
- Parameter `emergencyLocationInfoRequest` is of type [EmergencyLocationInfoRequest](./src/definitions/EmergencyLocationInfoRequest.ts)
- `result` is of type [EmergencyLocationInfo](./src/definitions/EmergencyLocationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateEmergencyLocation) in API Explorer.


## Get Extension List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension().list(listExtensionsParameters)
await rc.revoke()
```
- Parameter `listExtensionsParameters` is of type [ListExtensionsParameters](./src/definitions/ListExtensionsParameters.ts)
- `result` is of type [GetExtensionListResponse](./src/definitions/GetExtensionListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-listExtensions) in API Explorer.


## Create Extension

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>AddRemoveUsers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension().post(extensionCreationRequest)
await rc.revoke()
```
- Parameter `extensionCreationRequest` is of type [ExtensionCreationRequest](./src/definitions/ExtensionCreationRequest.ts)
- `result` is of type [ExtensionCreationResponse](./src/definitions/ExtensionCreationResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-createExtension) in API Explorer.


## Get Extension

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension().get()
await rc.revoke()
```

- `result` is of type [GetExtensionInfoResponse](./src/definitions/GetExtensionInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readExtension) in API Explorer.


## Update Extension

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserInfo OR EditUserCredentials</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension().put(extensionUpdateRequest)
await rc.revoke()
```
- Parameter `extensionUpdateRequest` is of type [ExtensionUpdateRequest](./src/definitions/ExtensionUpdateRequest.ts)
- `result` is of type [GetExtensionInfoResponse](./src/definitions/GetExtensionInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateExtension) in API Explorer.


## Delete Extension

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>AddRemoveUsers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension().delete(deleteExtensionParameters)
await rc.revoke()
```
- Parameter `deleteExtensionParameters` is of type [DeleteExtensionParameters](./src/definitions/DeleteExtensionParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-deleteExtension) in API Explorer.


## Get Extension List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).list(listExtensionsParameters)
await rc.revoke()
```
- Parameter `listExtensionsParameters` is of type [ListExtensionsParameters](./src/definitions/ListExtensionsParameters.ts)
- `result` is of type [GetExtensionListResponse](./src/definitions/GetExtensionListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-listExtensions) in API Explorer.


## Create Extension

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>AddRemoveUsers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).post(extensionCreationRequest)
await rc.revoke()
```
- Parameter `extensionCreationRequest` is of type [ExtensionCreationRequest](./src/definitions/ExtensionCreationRequest.ts)
- `result` is of type [ExtensionCreationResponse](./src/definitions/ExtensionCreationResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-createExtension) in API Explorer.


## Get Extension

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).get()
await rc.revoke()
```

- `result` is of type [GetExtensionInfoResponse](./src/definitions/GetExtensionInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readExtension) in API Explorer.


## Update Extension

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserInfo OR EditUserCredentials</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).put(extensionUpdateRequest)
await rc.revoke()
```
- Parameter `extensionUpdateRequest` is of type [ExtensionUpdateRequest](./src/definitions/ExtensionUpdateRequest.ts)
- `result` is of type [GetExtensionInfoResponse](./src/definitions/GetExtensionInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateExtension) in API Explorer.


## Delete Extension

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>AddRemoveUsers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).delete(deleteExtensionParameters)
await rc.revoke()
```
- Parameter `deleteExtensionParameters` is of type [DeleteExtensionParameters](./src/definitions/DeleteExtensionParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-deleteExtension) in API Explorer.


## Get User Active Calls

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallLog</code></td></tr><tr><td>User Permission</td><td><code>ReadCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ActiveCalls().get(listExtensionActiveCallsParameters)
await rc.revoke()
```
- Parameter `listExtensionActiveCallsParameters` is of type [ListExtensionActiveCallsParameters](./src/definitions/ListExtensionActiveCallsParameters.ts)
- `result` is of type [UserActiveCallsResponse](./src/definitions/UserActiveCallsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-listExtensionActiveCalls) in API Explorer.


## Address Book Synchronization

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book-sync</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadContacts</code></td></tr><tr><td>User Permission</td><td><code>ReadPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AddressBookSync().get(syncAddressBookParameters)
await rc.revoke()
```
- Parameter `syncAddressBookParameters` is of type [SyncAddressBookParameters](./src/definitions/SyncAddressBookParameters.ts)
- `result` is of type [AddressBookSync](./src/definitions/AddressBookSync.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-syncAddressBook) in API Explorer.


## Get Contact List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadContacts</code></td></tr><tr><td>User Permission</td><td><code>ReadPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AddressBook().Contact().list(listContactsParameters)
await rc.revoke()
```
- Parameter `listContactsParameters` is of type [ListContactsParameters](./src/definitions/ListContactsParameters.ts)
- `result` is of type [ContactList](./src/definitions/ContactList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-listContacts) in API Explorer.


## Create Contact

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>Contacts</code></td></tr><tr><td>User Permission</td><td><code>EditPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AddressBook().Contact().post(personalContactRequest, createContactParameters)
await rc.revoke()
```
- Parameter `personalContactRequest` is of type [PersonalContactRequest](./src/definitions/PersonalContactRequest.ts)
- Parameter `createContactParameters` is of type [CreateContactParameters](./src/definitions/CreateContactParameters.ts)
- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-createContact) in API Explorer.


## Get Contact

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadContacts</code></td></tr><tr><td>User Permission</td><td><code>ReadPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AddressBook().Contact().get()
await rc.revoke()
```

- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-readContact) in API Explorer.


## Update Contact

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>Contacts</code></td></tr><tr><td>User Permission</td><td><code>EditPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AddressBook().Contact().put(personalContactRequest, updateContactParameters)
await rc.revoke()
```
- Parameter `personalContactRequest` is of type [PersonalContactRequest](./src/definitions/PersonalContactRequest.ts)
- Parameter `updateContactParameters` is of type [UpdateContactParameters](./src/definitions/UpdateContactParameters.ts)
- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateContact) in API Explorer.


## Delete Contact

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>Contacts</code></td></tr><tr><td>User Permission</td><td><code>EditPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AddressBook().Contact().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-deleteContact) in API Explorer.


## Get Contact List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadContacts</code></td></tr><tr><td>User Permission</td><td><code>ReadPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AddressBook().Contact(contactId).list(listContactsParameters)
await rc.revoke()
```
- Parameter `listContactsParameters` is of type [ListContactsParameters](./src/definitions/ListContactsParameters.ts)
- `result` is of type [ContactList](./src/definitions/ContactList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-listContacts) in API Explorer.


## Create Contact

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>Contacts</code></td></tr><tr><td>User Permission</td><td><code>EditPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AddressBook().Contact(contactId).post(personalContactRequest, createContactParameters)
await rc.revoke()
```
- Parameter `personalContactRequest` is of type [PersonalContactRequest](./src/definitions/PersonalContactRequest.ts)
- Parameter `createContactParameters` is of type [CreateContactParameters](./src/definitions/CreateContactParameters.ts)
- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-createContact) in API Explorer.


## Get Contact

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadContacts</code></td></tr><tr><td>User Permission</td><td><code>ReadPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AddressBook().Contact(contactId).get()
await rc.revoke()
```

- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-readContact) in API Explorer.


## Update Contact

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>Contacts</code></td></tr><tr><td>User Permission</td><td><code>EditPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AddressBook().Contact(contactId).put(personalContactRequest, updateContactParameters)
await rc.revoke()
```
- Parameter `personalContactRequest` is of type [PersonalContactRequest](./src/definitions/PersonalContactRequest.ts)
- Parameter `updateContactParameters` is of type [UpdateContactParameters](./src/definitions/UpdateContactParameters.ts)
- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateContact) in API Explorer.


## Delete Contact

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>Contacts</code></td></tr><tr><td>User Permission</td><td><code>EditPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AddressBook().Contact(contactId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-deleteContact) in API Explorer.


## Get Call Handling Rules

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AnsweringRule().list(listAnsweringRulesParameters)
await rc.revoke()
```
- Parameter `listAnsweringRulesParameters` is of type [ListAnsweringRulesParameters](./src/definitions/ListAnsweringRulesParameters.ts)
- `result` is of type [UserAnsweringRuleList](./src/definitions/UserAnsweringRuleList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listAnsweringRules) in API Explorer.


## Create Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AnsweringRule().post(createAnsweringRuleRequest)
await rc.revoke()
```
- Parameter `createAnsweringRuleRequest` is of type [CreateAnsweringRuleRequest](./src/definitions/CreateAnsweringRuleRequest.ts)
- `result` is of type [CustomAnsweringRuleInfo](./src/definitions/CustomAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createAnsweringRule) in API Explorer.


## Get Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AnsweringRule().get(readAnsweringRuleParameters)
await rc.revoke()
```
- Parameter `readAnsweringRuleParameters` is of type [ReadAnsweringRuleParameters](./src/definitions/ReadAnsweringRuleParameters.ts)
- `result` is of type [AnsweringRuleInfo](./src/definitions/AnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readAnsweringRule) in API Explorer.


## Update Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AnsweringRule().put(updateAnsweringRuleRequest)
await rc.revoke()
```
- Parameter `updateAnsweringRuleRequest` is of type [UpdateAnsweringRuleRequest](./src/definitions/UpdateAnsweringRuleRequest.ts)
- `result` is of type [AnsweringRuleInfo](./src/definitions/AnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateAnsweringRule) in API Explorer.


## Delete Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AnsweringRule().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteAnsweringRule) in API Explorer.


## Get Call Handling Rules

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AnsweringRule(ruleId).list(listAnsweringRulesParameters)
await rc.revoke()
```
- Parameter `listAnsweringRulesParameters` is of type [ListAnsweringRulesParameters](./src/definitions/ListAnsweringRulesParameters.ts)
- `result` is of type [UserAnsweringRuleList](./src/definitions/UserAnsweringRuleList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listAnsweringRules) in API Explorer.


## Create Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AnsweringRule(ruleId).post(createAnsweringRuleRequest)
await rc.revoke()
```
- Parameter `createAnsweringRuleRequest` is of type [CreateAnsweringRuleRequest](./src/definitions/CreateAnsweringRuleRequest.ts)
- `result` is of type [CustomAnsweringRuleInfo](./src/definitions/CustomAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createAnsweringRule) in API Explorer.


## Get Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AnsweringRule(ruleId).get(readAnsweringRuleParameters)
await rc.revoke()
```
- Parameter `readAnsweringRuleParameters` is of type [ReadAnsweringRuleParameters](./src/definitions/ReadAnsweringRuleParameters.ts)
- `result` is of type [AnsweringRuleInfo](./src/definitions/AnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readAnsweringRule) in API Explorer.


## Update Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AnsweringRule(ruleId).put(updateAnsweringRuleRequest)
await rc.revoke()
```
- Parameter `updateAnsweringRuleRequest` is of type [UpdateAnsweringRuleRequest](./src/definitions/UpdateAnsweringRuleRequest.ts)
- `result` is of type [AnsweringRuleInfo](./src/definitions/AnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateAnsweringRule) in API Explorer.


## Delete Call Handling Rule

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AnsweringRule(ruleId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteAnsweringRule) in API Explorer.


## Get Authorization Profile

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AuthzProfile().get()
await rc.revoke()
```

- `result` is of type [AuthProfileResource](./src/definitions/AuthProfileResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-readAuthorizationProfile) in API Explorer.


## Check User Permission

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile/check</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).AuthzProfile().Check().get(checkUserPermissionParameters)
await rc.revoke()
```
- Parameter `checkUserPermissionParameters` is of type [CheckUserPermissionParameters](./src/definitions/CheckUserPermissionParameters.ts)
- `result` is of type [AuthProfileCheckResource](./src/definitions/AuthProfileCheckResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-checkUserPermission) in API Explorer.


## Get User Business Hours

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).BusinessHours().get()
await rc.revoke()
```

- `result` is of type [GetUserBusinessHoursResponse](./src/definitions/GetUserBusinessHoursResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-readUserBusinessHours) in API Explorer.


## Update User Business Hours

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).BusinessHours().put(userBusinessHoursUpdateRequest)
await rc.revoke()
```
- Parameter `userBusinessHoursUpdateRequest` is of type [UserBusinessHoursUpdateRequest](./src/definitions/UserBusinessHoursUpdateRequest.ts)
- `result` is of type [UserBusinessHoursUpdateResponse](./src/definitions/UserBusinessHoursUpdateResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-updateUserBusinessHours) in API Explorer.


## Get User Call Log Records

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallLog</code></td></tr><tr><td>User Permission</td><td><code>ReadCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallLog().list(readUserCallLogParameters)
await rc.revoke()
```
- Parameter `readUserCallLogParameters` is of type [ReadUserCallLogParameters](./src/definitions/ReadUserCallLogParameters.ts)
- `result` is of type [UserCallLogResponse](./src/definitions/UserCallLogResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallLog) in API Explorer.


## Delete User Call Log

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditCallLog</code></td></tr><tr><td>User Permission</td><td><code>EditCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallLog().delete(deleteUserCallLogParameters)
await rc.revoke()
```
- Parameter `deleteUserCallLogParameters` is of type [DeleteUserCallLogParameters](./src/definitions/DeleteUserCallLogParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-deleteUserCallLog) in API Explorer.


## Get User Call Record

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallLog</code></td></tr><tr><td>User Permission</td><td><code>ReadCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallLog().get(readUserCallRecordParameters)
await rc.revoke()
```
- Parameter `readUserCallRecordParameters` is of type [ReadUserCallRecordParameters](./src/definitions/ReadUserCallRecordParameters.ts)
- `result` is of type [UserCallLogRecord](./src/definitions/UserCallLogRecord.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallRecord) in API Explorer.


## Sync User Call Log

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log-sync</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallLog</code></td></tr><tr><td>User Permission</td><td><code>ReadCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallLogSync().get(syncUserCallLogParameters)
await rc.revoke()
```
- Parameter `syncUserCallLogParameters` is of type [SyncUserCallLogParameters](./src/definitions/SyncUserCallLogParameters.ts)
- `result` is of type [CallLogSync](./src/definitions/CallLogSync.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-syncUserCallLog) in API Explorer.


## Get User Call Log Records

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallLog</code></td></tr><tr><td>User Permission</td><td><code>ReadCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallLog(callRecordId).list(readUserCallLogParameters)
await rc.revoke()
```
- Parameter `readUserCallLogParameters` is of type [ReadUserCallLogParameters](./src/definitions/ReadUserCallLogParameters.ts)
- `result` is of type [UserCallLogResponse](./src/definitions/UserCallLogResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallLog) in API Explorer.


## Delete User Call Log

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditCallLog</code></td></tr><tr><td>User Permission</td><td><code>EditCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallLog(callRecordId).delete(deleteUserCallLogParameters)
await rc.revoke()
```
- Parameter `deleteUserCallLogParameters` is of type [DeleteUserCallLogParameters](./src/definitions/DeleteUserCallLogParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-deleteUserCallLog) in API Explorer.


## Get User Call Record

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallLog</code></td></tr><tr><td>User Permission</td><td><code>ReadCallLog</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallLog(callRecordId).get(readUserCallRecordParameters)
await rc.revoke()
```
- Parameter `readUserCallRecordParameters` is of type [ReadUserCallRecordParameters](./src/definitions/ReadUserCallRecordParameters.ts)
- `result` is of type [UserCallLogRecord](./src/definitions/UserCallLogRecord.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallRecord) in API Explorer.


## Update User Call Queues

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queues</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Accounts</code></td></tr><tr><td>User Permission</td><td><code>JoinLeaveCallQueue</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallQueues().put(userCallQueues)
await rc.revoke()
```
- Parameter `userCallQueues` is of type [UserCallQueues](./src/definitions/UserCallQueues.ts)
- `result` is of type [UserCallQueues](./src/definitions/UserCallQueues.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-updateUserCallQueues) in API Explorer.


## Get Caller Blocking Settings

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadBlockedNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerBlocking().get()
await rc.revoke()
```

- `result` is of type [CallerBlockingSettings](./src/definitions/CallerBlockingSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-readCallerBlockingSettings) in API Explorer.


## Update Caller Blocking Settings

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditBlockedNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerBlocking().put(callerBlockingSettingsUpdate)
await rc.revoke()
```
- Parameter `callerBlockingSettingsUpdate` is of type [CallerBlockingSettingsUpdate](./src/definitions/CallerBlockingSettingsUpdate.ts)
- `result` is of type [CallerBlockingSettings](./src/definitions/CallerBlockingSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-updateCallerBlockingSettings) in API Explorer.


## Get Blocked/Allowed Phone Numbers

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadBlockedNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerBlocking().PhoneNumbers().list(listBlockedAllowedNumbersParameters)
await rc.revoke()
```
- Parameter `listBlockedAllowedNumbersParameters` is of type [ListBlockedAllowedNumbersParameters](./src/definitions/ListBlockedAllowedNumbersParameters.ts)
- `result` is of type [BlockedAllowedPhoneNumbersList](./src/definitions/BlockedAllowedPhoneNumbersList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-listBlockedAllowedNumbers) in API Explorer.


## Add Blocked/Allowed Number

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditBlockedNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerBlocking().PhoneNumbers().post(addBlockedAllowedPhoneNumber)
await rc.revoke()
```
- Parameter `addBlockedAllowedPhoneNumber` is of type [AddBlockedAllowedPhoneNumber](./src/definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type [BlockedAllowedPhoneNumberInfo](./src/definitions/BlockedAllowedPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-createBlockedAllowedNumber) in API Explorer.


## Get Blocked/Allowed Number

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadBlockedNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerBlocking().PhoneNumbers().get()
await rc.revoke()
```

- `result` is of type [BlockedAllowedPhoneNumberInfo](./src/definitions/BlockedAllowedPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-readBlockedAllowedNumber) in API Explorer.


## Delete Blocked/Allowed Number

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditBlockedNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerBlocking().PhoneNumbers().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-deleteBlockedAllowedNumber) in API Explorer.


## Update Blocked/Allowed Number

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditBlockedNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerBlocking().PhoneNumbers().put(addBlockedAllowedPhoneNumber)
await rc.revoke()
```
- Parameter `addBlockedAllowedPhoneNumber` is of type [AddBlockedAllowedPhoneNumber](./src/definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type [BlockedAllowedPhoneNumberInfo](./src/definitions/BlockedAllowedPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-updateBlockedAllowedNumber) in API Explorer.


## Get Blocked/Allowed Phone Numbers

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadBlockedNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerBlocking().PhoneNumbers(blockedNumberId).list(listBlockedAllowedNumbersParameters)
await rc.revoke()
```
- Parameter `listBlockedAllowedNumbersParameters` is of type [ListBlockedAllowedNumbersParameters](./src/definitions/ListBlockedAllowedNumbersParameters.ts)
- `result` is of type [BlockedAllowedPhoneNumbersList](./src/definitions/BlockedAllowedPhoneNumbersList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-listBlockedAllowedNumbers) in API Explorer.


## Add Blocked/Allowed Number

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditBlockedNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerBlocking().PhoneNumbers(blockedNumberId).post(addBlockedAllowedPhoneNumber)
await rc.revoke()
```
- Parameter `addBlockedAllowedPhoneNumber` is of type [AddBlockedAllowedPhoneNumber](./src/definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type [BlockedAllowedPhoneNumberInfo](./src/definitions/BlockedAllowedPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-createBlockedAllowedNumber) in API Explorer.


## Get Blocked/Allowed Number

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadBlockedNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerBlocking().PhoneNumbers(blockedNumberId).get()
await rc.revoke()
```

- `result` is of type [BlockedAllowedPhoneNumberInfo](./src/definitions/BlockedAllowedPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-readBlockedAllowedNumber) in API Explorer.


## Delete Blocked/Allowed Number

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditBlockedNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerBlocking().PhoneNumbers(blockedNumberId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-deleteBlockedAllowedNumber) in API Explorer.


## Update Blocked/Allowed Number

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditBlockedNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerBlocking().PhoneNumbers(blockedNumberId).put(addBlockedAllowedPhoneNumber)
await rc.revoke()
```
- Parameter `addBlockedAllowedPhoneNumber` is of type [AddBlockedAllowedPhoneNumber](./src/definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type [BlockedAllowedPhoneNumberInfo](./src/definitions/BlockedAllowedPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-updateBlockedAllowedNumber) in API Explorer.


## Get Extension Caller ID

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCallerIDSettings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerId().get()
await rc.revoke()
```

- `result` is of type [ExtensionCallerIdInfo](./src/definitions/ExtensionCallerIdInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readExtensionCallerId) in API Explorer.


## Update Extension Caller ID

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditCallerIDSettings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CallerId().put(extensionCallerIdInfo)
await rc.revoke()
```
- Parameter `extensionCallerIdInfo` is of type [ExtensionCallerIdInfo](./src/definitions/ExtensionCallerIdInfo.ts)
- `result` is of type [ExtensionCallerIdInfo](./src/definitions/ExtensionCallerIdInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateExtensionCallerId) in API Explorer.


## Create Internal Text Message

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>InternalMessages</code></td></tr><tr><td>User Permission</td><td><code>InternalSMS</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).CompanyPager().post(createInternalTextMessageRequest)
await rc.revoke()
```
- Parameter `createInternalTextMessageRequest` is of type [CreateInternalTextMessageRequest](./src/definitions/CreateInternalTextMessageRequest.ts)
- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Pager-Messages-createInternalTextMessage) in API Explorer.


## Get User Conferencing Settings

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>OrganizeConference</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Conferencing().get(readConferencingSettingsParameters)
await rc.revoke()
```
- Parameter `readConferencingSettingsParameters` is of type [ReadConferencingSettingsParameters](./src/definitions/ReadConferencingSettingsParameters.ts)
- `result` is of type [GetConferencingInfoResponse](./src/definitions/GetConferencingInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readConferencingSettings) in API Explorer.


## Update User Conferencing Settings

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>OrganizeConference</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Conferencing().put(updateConferencingInfoRequest)
await rc.revoke()
```
- Parameter `updateConferencingInfoRequest` is of type [UpdateConferencingInfoRequest](./src/definitions/UpdateConferencingInfoRequest.ts)
- `result` is of type [GetConferencingInfoResponse](./src/definitions/GetConferencingInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateConferencingSettings) in API Explorer.


## Get Extension Device List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/device</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserDevices</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Device().get(listExtensionDevicesParameters)
await rc.revoke()
```
- Parameter `listExtensionDevicesParameters` is of type [ListExtensionDevicesParameters](./src/definitions/ListExtensionDevicesParameters.ts)
- `result` is of type [GetExtensionDevicesResponse](./src/definitions/GetExtensionDevicesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-listExtensionDevices) in API Explorer.


## Get Favorite Contact List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadContacts</code></td></tr><tr><td>User Permission</td><td><code>ReadPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Favorite().get()
await rc.revoke()
```

- `result` is of type [FavoriteContactList](./src/definitions/FavoriteContactList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-listFavoriteContacts) in API Explorer.


## Update Favorite Contact List

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Contacts</code></td></tr><tr><td>User Permission</td><td><code>EditPersonalContacts</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Favorite().put(favoriteCollection)
await rc.revoke()
```
- Parameter `favoriteCollection` is of type [FavoriteCollection](./src/definitions/FavoriteCollection.ts)
- `result` is of type [FavoriteContactList](./src/definitions/FavoriteContactList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateFavoriteContactList) in API Explorer.


## Create Fax Message

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>Faxes</code></td></tr><tr><td>User Permission</td><td><code>OutboundFaxes</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Fax().post(createFaxMessageRequest)
await rc.revoke()
```
- Parameter `createFaxMessageRequest` is of type [CreateFaxMessageRequest](./src/definitions/CreateFaxMessageRequest.ts)
- `result` is of type [FaxResponse](./src/definitions/FaxResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Fax-createFaxMessage) in API Explorer.


## Get User Features

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/features</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Features().get(readUserFeaturesParameters)
await rc.revoke()
```
- Parameter `readUserFeaturesParameters` is of type [ReadUserFeaturesParameters](./src/definitions/ReadUserFeaturesParameters.ts)
- `result` is of type [FeatureList](./src/definitions/FeatureList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Features-readUserFeatures) in API Explorer.


## Get Forwarding Number List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserForwardingFlipNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ForwardingNumber().list(listForwardingNumbersParameters)
await rc.revoke()
```
- Parameter `listForwardingNumbersParameters` is of type [ListForwardingNumbersParameters](./src/definitions/ListForwardingNumbersParameters.ts)
- `result` is of type [GetExtensionForwardingNumberListResponse](./src/definitions/GetExtensionForwardingNumberListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-listForwardingNumbers) in API Explorer.


## Create Forwarding Number

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserForwardingFlipNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ForwardingNumber().post(createForwardingNumberRequest)
await rc.revoke()
```
- Parameter `createForwardingNumberRequest` is of type [CreateForwardingNumberRequest](./src/definitions/CreateForwardingNumberRequest.ts)
- `result` is of type [ForwardingNumberInfo](./src/definitions/ForwardingNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-createForwardingNumber) in API Explorer.


## Get Forwarding Number

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserForwardingFlipNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ForwardingNumber().get()
await rc.revoke()
```

- `result` is of type [ForwardingNumberInfo](./src/definitions/ForwardingNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-readForwardingNumber) in API Explorer.


## Update Forwarding Number

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserForwardingFlipNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ForwardingNumber().put(updateForwardingNumberRequest)
await rc.revoke()
```
- Parameter `updateForwardingNumberRequest` is of type [UpdateForwardingNumberRequest](./src/definitions/UpdateForwardingNumberRequest.ts)
- `result` is of type [ForwardingNumberInfo](./src/definitions/ForwardingNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-updateForwardingNumber) in API Explorer.


## Delete Forwarding Number

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserForwardingFlipNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ForwardingNumber().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-deleteForwardingNumber) in API Explorer.


## Get Forwarding Number List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserForwardingFlipNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ForwardingNumber(forwardingNumberId).list(listForwardingNumbersParameters)
await rc.revoke()
```
- Parameter `listForwardingNumbersParameters` is of type [ListForwardingNumbersParameters](./src/definitions/ListForwardingNumbersParameters.ts)
- `result` is of type [GetExtensionForwardingNumberListResponse](./src/definitions/GetExtensionForwardingNumberListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-listForwardingNumbers) in API Explorer.


## Create Forwarding Number

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserForwardingFlipNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ForwardingNumber(forwardingNumberId).post(createForwardingNumberRequest)
await rc.revoke()
```
- Parameter `createForwardingNumberRequest` is of type [CreateForwardingNumberRequest](./src/definitions/CreateForwardingNumberRequest.ts)
- `result` is of type [ForwardingNumberInfo](./src/definitions/ForwardingNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-createForwardingNumber) in API Explorer.


## Get Forwarding Number

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserForwardingFlipNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ForwardingNumber(forwardingNumberId).get()
await rc.revoke()
```

- `result` is of type [ForwardingNumberInfo](./src/definitions/ForwardingNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-readForwardingNumber) in API Explorer.


## Update Forwarding Number

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserForwardingFlipNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ForwardingNumber(forwardingNumberId).put(updateForwardingNumberRequest)
await rc.revoke()
```
- Parameter `updateForwardingNumberRequest` is of type [UpdateForwardingNumberRequest](./src/definitions/UpdateForwardingNumberRequest.ts)
- `result` is of type [ForwardingNumberInfo](./src/definitions/ForwardingNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-updateForwardingNumber) in API Explorer.


## Delete Forwarding Number

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserForwardingFlipNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ForwardingNumber(forwardingNumberId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-deleteForwardingNumber) in API Explorer.


## Get Extension Grant List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/grant</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Grant().get(listExtensionGrantsParameters)
await rc.revoke()
```
- Parameter `listExtensionGrantsParameters` is of type [ListExtensionGrantsParameters](./src/definitions/ListExtensionGrantsParameters.ts)
- `result` is of type [GetExtensionGrantListResponse](./src/definitions/GetExtensionGrantListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-listExtensionGrants) in API Explorer.


## Create Custom User Greeting

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Greeting().post(createCustomUserGreetingRequest)
await rc.revoke()
```
- Parameter `createCustomUserGreetingRequest` is of type [CreateCustomUserGreetingRequest](./src/definitions/CreateCustomUserGreetingRequest.ts)
- `result` is of type [CustomUserGreetingInfo](./src/definitions/CustomUserGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createCustomUserGreeting) in API Explorer.


## Get Custom Greeting

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Greeting().get()
await rc.revoke()
```

- `result` is of type [CustomUserGreetingInfo](./src/definitions/CustomUserGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readCustomGreeting) in API Explorer.


## Create Custom User Greeting

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserAnsweringRules</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Greeting(greetingId).post(createCustomUserGreetingRequest)
await rc.revoke()
```
- Parameter `createCustomUserGreetingRequest` is of type [CreateCustomUserGreetingRequest](./src/definitions/CreateCustomUserGreetingRequest.ts)
- `result` is of type [CustomUserGreetingInfo](./src/definitions/CustomUserGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createCustomUserGreeting) in API Explorer.


## Get Custom Greeting

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Greeting(greetingId).get()
await rc.revoke()
```

- `result` is of type [CustomUserGreetingInfo](./src/definitions/CustomUserGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readCustomGreeting) in API Explorer.


## Get Scheduled Meetings

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting().list()
await rc.revoke()
```

- `result` is of type [MeetingsResource](./src/definitions/MeetingsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-listMeetings) in API Explorer.


## Create Meeting

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting().post(meetingRequestResource)
await rc.revoke()
```
- Parameter `meetingRequestResource` is of type [MeetingRequestResource](./src/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-createMeeting) in API Explorer.


## Get Meeting Info

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting().get()
await rc.revoke()
```

- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-readMeeting) in API Explorer.


## Update Meeting

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting().put(meetingRequestResource)
await rc.revoke()
```
- Parameter `meetingRequestResource` is of type [MeetingRequestResource](./src/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-updateMeeting) in API Explorer.


## Delete Meeting

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-deleteMeeting) in API Explorer.


## Get User Meeting Recordings List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting-recordings</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>MeetingsRecordings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MeetingRecordings().get(listUserMeetingRecordingsParameters)
await rc.revoke()
```
- Parameter `listUserMeetingRecordingsParameters` is of type [ListUserMeetingRecordingsParameters](./src/definitions/ListUserMeetingRecordingsParameters.ts)
- `result` is of type [ListMeetingRecordingsResponse](./src/definitions/ListMeetingRecordingsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Recordings-listUserMeetingRecordings) in API Explorer.


## Get Meeting Service Info

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting().ServiceInfo().get()
await rc.revoke()
```

- `result` is of type [MeetingServiceInfoResource](./src/definitions/MeetingServiceInfoResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-readMeetingServiceInfo) in API Explorer.


## Update Meeting Service Info

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting().ServiceInfo().patch(meetingServiceInfoRequest)
await rc.revoke()
```
- Parameter `meetingServiceInfoRequest` is of type [MeetingServiceInfoRequest](./src/definitions/MeetingServiceInfoRequest.ts)
- `result` is of type [MeetingServiceInfoResource](./src/definitions/MeetingServiceInfoResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-updateMeetingServiceInfo) in API Explorer.


## Get Scheduled Meetings

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting(meetingId).list()
await rc.revoke()
```

- `result` is of type [MeetingsResource](./src/definitions/MeetingsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-listMeetings) in API Explorer.


## Create Meeting

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting(meetingId).post(meetingRequestResource)
await rc.revoke()
```
- Parameter `meetingRequestResource` is of type [MeetingRequestResource](./src/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-createMeeting) in API Explorer.


## Get Meeting Info

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting(meetingId).get()
await rc.revoke()
```

- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-readMeeting) in API Explorer.


## Update Meeting

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting(meetingId).put(meetingRequestResource)
await rc.revoke()
```
- Parameter `meetingRequestResource` is of type [MeetingRequestResource](./src/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-updateMeeting) in API Explorer.


## Delete Meeting

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting(meetingId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-deleteMeeting) in API Explorer.


## End Meeting

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Meeting(meetingId).End().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-endMeeting) in API Explorer.


## Get Assistants

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MeetingsConfiguration().Assistants().get()
await rc.revoke()
```

- `result` is of type [AssistantsResource](./src/definitions/AssistantsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-readAssistants) in API Explorer.


## Get Assisted Users

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assisted</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MeetingsConfiguration().Assisted().get()
await rc.revoke()
```

- `result` is of type [AssistedUsersResource](./src/definitions/AssistedUsersResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-readAssistedUsers) in API Explorer.


## Get Message List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>ReadMessages</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MessageStore().list(listMessagesParameters)
await rc.revoke()
```
- Parameter `listMessagesParameters` is of type [ListMessagesParameters](./src/definitions/ListMessagesParameters.ts)
- `result` is of type [GetMessageList](./src/definitions/GetMessageList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-listMessages) in API Explorer.


## Get Message

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>ReadMessages</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MessageStore().get()
await rc.revoke()
```

- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessage) in API Explorer.


## Update Message List

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditMessages</code></td></tr><tr><td>User Permission</td><td><code>EditMessages</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MessageStore().put(updateMessageRequest, updateMessageParameters)
await rc.revoke()
```
- Parameter `updateMessageRequest` is of type [UpdateMessageRequest](./src/definitions/UpdateMessageRequest.ts)
- Parameter `updateMessageParameters` is of type [UpdateMessageParameters](./src/definitions/UpdateMessageParameters.ts)
- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-updateMessage) in API Explorer.


## Delete Message

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditMessages</code></td></tr><tr><td>User Permission</td><td><code>EditMessages</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MessageStore().delete(deleteMessageParameters)
await rc.revoke()
```
- Parameter `deleteMessageParameters` is of type [DeleteMessageParameters](./src/definitions/DeleteMessageParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-deleteMessage) in API Explorer.


## Get Message List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>ReadMessages</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MessageStore(messageId).list(listMessagesParameters)
await rc.revoke()
```
- Parameter `listMessagesParameters` is of type [ListMessagesParameters](./src/definitions/ListMessagesParameters.ts)
- `result` is of type [GetMessageList](./src/definitions/GetMessageList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-listMessages) in API Explorer.


## Get Message

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>ReadMessages</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MessageStore(messageId).get()
await rc.revoke()
```

- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessage) in API Explorer.


## Update Message List

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditMessages</code></td></tr><tr><td>User Permission</td><td><code>EditMessages</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MessageStore(messageId).put(updateMessageRequest, updateMessageParameters)
await rc.revoke()
```
- Parameter `updateMessageRequest` is of type [UpdateMessageRequest](./src/definitions/UpdateMessageRequest.ts)
- Parameter `updateMessageParameters` is of type [UpdateMessageParameters](./src/definitions/UpdateMessageParameters.ts)
- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-updateMessage) in API Explorer.


## Delete Message

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditMessages</code></td></tr><tr><td>User Permission</td><td><code>EditMessages</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MessageStore(messageId).delete(deleteMessageParameters)
await rc.revoke()
```
- Parameter `deleteMessageParameters` is of type [DeleteMessageParameters](./src/definitions/DeleteMessageParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-deleteMessage) in API Explorer.


## Get Message Content

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>ReadMessageContent</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MessageStore(messageId).Content(attachmentId).get(readMessageContentParameters)
await rc.revoke()
```
- Parameter `readMessageContentParameters` is of type [ReadMessageContentParameters](./src/definitions/ReadMessageContentParameters.ts)
- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessageContent) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Sync Messages

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>ReadMessages</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).MessageSync().get(syncMessagesParameters)
await rc.revoke()
```
- Parameter `syncMessagesParameters` is of type [SyncMessagesParameters](./src/definitions/SyncMessagesParameters.ts)
- `result` is of type [GetMessageSyncResponse](./src/definitions/GetMessageSyncResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-syncMessages) in API Explorer.


## Create MMS Message

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/mms</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>SMS</code></td></tr><tr><td>User Permission</td><td><code>OutboundSMS</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Mms().post(createMmsMessage)
await rc.revoke()
```
- Parameter `createMmsMessage` is of type [CreateMMSMessage](./src/definitions/CreateMMSMessage.ts)
- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#MMS-createMMS) in API Explorer.


## Get Notification Settings

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadMessagesNotificationsSettings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).NotificationSettings().get()
await rc.revoke()
```

- `result` is of type [NotificationSettings](./src/definitions/NotificationSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readNotificationSettings) in API Explorer.


## Update Notification Settings

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditMessagesNotificationsSettings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).NotificationSettings().put(notificationSettingsUpdateRequest)
await rc.revoke()
```
- Parameter `notificationSettingsUpdateRequest` is of type [NotificationSettingsUpdateRequest](./src/definitions/NotificationSettingsUpdateRequest.ts)
- `result` is of type [NotificationSettings](./src/definitions/NotificationSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateNotificationSettings) in API Explorer.


## Get Extension Phone Number List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserPhoneNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).PhoneNumber().get(listExtensionPhoneNumbersParameters)
await rc.revoke()
```
- Parameter `listExtensionPhoneNumbersParameters` is of type [ListExtensionPhoneNumbersParameters](./src/definitions/ListExtensionPhoneNumbersParameters.ts)
- `result` is of type [GetExtensionPhoneNumbersResponse](./src/definitions/GetExtensionPhoneNumbersResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-listExtensionPhoneNumbers) in API Explorer.


## Get User Presence Status

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadPresence</code></td></tr><tr><td>User Permission</td><td><code>ReadPresenceStatus</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Presence().get(readUserPresenceStatusParameters)
await rc.revoke()
```
- Parameter `readUserPresenceStatusParameters` is of type [ReadUserPresenceStatusParameters](./src/definitions/ReadUserPresenceStatusParameters.ts)
- `result` is of type [GetPresenceInfo](./src/definitions/GetPresenceInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readUserPresenceStatus) in API Explorer.


## Update User Presence Status

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditPresence</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Presence().put(presenceInfoResource)
await rc.revoke()
```
- Parameter `presenceInfoResource` is of type [PresenceInfoResource](./src/definitions/PresenceInfoResource.ts)
- `result` is of type [PresenceInfoResponse](./src/definitions/PresenceInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateUserPresenceStatus) in API Explorer.


## Get User Profile Image

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ProfileImage().list()
await rc.revoke()
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readUserProfileImage) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Upload User Profile Image

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ProfileImage().post(createUserProfileImageRequest)
await rc.revoke()
```
- Parameter `createUserProfileImageRequest` is of type [CreateUserProfileImageRequest](./src/definitions/CreateUserProfileImageRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-createUserProfileImage) in API Explorer.


## Update User Profile Image

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ProfileImage().put(updateUserProfileImageRequest)
await rc.revoke()
```
- Parameter `updateUserProfileImageRequest` is of type [UpdateUserProfileImageRequest](./src/definitions/UpdateUserProfileImageRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateUserProfileImage) in API Explorer.


## Get Scaled User Profile Image

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ProfileImage().get()
await rc.revoke()
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readScaledPofileImage) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Get User Profile Image

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ProfileImage(scaleSize).list()
await rc.revoke()
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readUserProfileImage) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Upload User Profile Image

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ProfileImage(scaleSize).post(createUserProfileImageRequest)
await rc.revoke()
```
- Parameter `createUserProfileImageRequest` is of type [CreateUserProfileImageRequest](./src/definitions/CreateUserProfileImageRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-createUserProfileImage) in API Explorer.


## Update User Profile Image

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditExtensions</code></td></tr><tr><td>User Permission</td><td><code>EditUserInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ProfileImage(scaleSize).put(updateUserProfileImageRequest)
await rc.revoke()
```
- Parameter `updateUserProfileImageRequest` is of type [UpdateUserProfileImageRequest](./src/definitions/UpdateUserProfileImageRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateUserProfileImage) in API Explorer.


## Get Scaled User Profile Image

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadExtensions</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).ProfileImage(scaleSize).get()
await rc.revoke()
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readScaledPofileImage) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Make RingOut Call

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>RingOut</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).RingOut().post(makeRingOutRequest)
await rc.revoke()
```
- Parameter `makeRingOutRequest` is of type [MakeRingOutRequest](./src/definitions/MakeRingOutRequest.ts)
- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-createRingOutCall) in API Explorer.


## Get RingOut Call Status

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>RingOut</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).RingOut().get()
await rc.revoke()
```

- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-readRingOutCallStatus) in API Explorer.


## Cancel RingOut Call

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>RingOut</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).RingOut().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-deleteRingOutCall) in API Explorer.


## Make RingOut Call

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>RingOut</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).RingOut(ringoutId).post(makeRingOutRequest)
await rc.revoke()
```
- Parameter `makeRingOutRequest` is of type [MakeRingOutRequest](./src/definitions/MakeRingOutRequest.ts)
- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-createRingOutCall) in API Explorer.


## Get RingOut Call Status

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>RingOut</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).RingOut(ringoutId).get()
await rc.revoke()
```

- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-readRingOutCallStatus) in API Explorer.


## Cancel RingOut Call

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>RingOut</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).RingOut(ringoutId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-deleteRingOutCall) in API Explorer.


## Make RingOut Call

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>RingOut</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Ringout().post(makeRingOutRequest)
await rc.revoke()
```
- Parameter `makeRingOutRequest` is of type [MakeRingOutRequest](./src/definitions/MakeRingOutRequest.ts)
- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-createRingOutCall) in API Explorer.


## Get RingOut Call Status

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>RingOut</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Ringout().get()
await rc.revoke()
```

- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-readRingOutCallStatus) in API Explorer.


## Cancel RingOut Call

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>RingOut</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Ringout().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-deleteRingOutCall) in API Explorer.


## Make RingOut Call

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>RingOut</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Ringout(ringoutId).post(makeRingOutRequest)
await rc.revoke()
```
- Parameter `makeRingOutRequest` is of type [MakeRingOutRequest](./src/definitions/MakeRingOutRequest.ts)
- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-createRingOutCall) in API Explorer.


## Get RingOut Call Status

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>RingOut</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Ringout(ringoutId).get()
await rc.revoke()
```

- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-readRingOutCallStatus) in API Explorer.


## Cancel RingOut Call

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>RingOut</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Ringout(ringoutId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-deleteRingOutCall) in API Explorer.


## Send SMS

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>SMS</code></td></tr><tr><td>User Permission</td><td><code>OutboundSMS</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).Sms().post(createSmsMessage)
await rc.revoke()
```
- Parameter `createSmsMessage` is of type [CreateSMSMessage](./src/definitions/CreateSMSMessage.ts)
- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-createSMSMessage) in API Explorer.


## Get Unified Presence

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/unified-presence</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadPresence</code></td></tr><tr><td>User Permission</td><td><code>ReadPresenceStatus</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).UnifiedPresence().get()
await rc.revoke()
```

- `result` is of type [UnifiedPresence](./src/definitions/UnifiedPresence.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readUnifiedPresence) in API Explorer.


## Update Unified Presence

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/unified-presence</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditPresence</code></td></tr><tr><td>User Permission</td><td><code>EditPresenceStatus</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).UnifiedPresence().patch(updateUnifiedPresence)
await rc.revoke()
```
- Parameter `updateUnifiedPresence` is of type [UpdateUnifiedPresence](./src/definitions/UpdateUnifiedPresence.ts)
- `result` is of type [UnifiedPresence](./src/definitions/UnifiedPresence.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateUnifiedPresence) in API Explorer.


## Get User Video Configuration

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/video-configuration</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>Meetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).VideoConfiguration().get()
await rc.revoke()
```

- `result` is of type [UserVideoConfiguration](./src/definitions/UserVideoConfiguration.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Video-Configuration-readUserVideoConfiguration) in API Explorer.


## Update User Video Configuration

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/extension/{extensionId}/video-configuration</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Extension(extensionId).VideoConfiguration().put(userVideoConfiguration)
await rc.revoke()
```
- Parameter `userVideoConfiguration` is of type [UserVideoConfiguration](./src/definitions/UserVideoConfiguration.ts)
- `result` is of type [UserVideoConfiguration](./src/definitions/UserVideoConfiguration.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Video-Configuration-updateUserVideoConfiguration) in API Explorer.


## Create Company Greeting

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/greeting</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Greeting().post(createCompanyGreetingRequest)
await rc.revoke()
```
- Parameter `createCompanyGreetingRequest` is of type [CreateCompanyGreetingRequest](./src/definitions/CreateCompanyGreetingRequest.ts)
- `result` is of type [CustomCompanyGreetingInfo](./src/definitions/CustomCompanyGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createCompanyGreeting) in API Explorer.


## Create IVR Menu

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-menus</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>AutoReceptionist</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrMenus().post(ivrMenuInfo)
await rc.revoke()
```
- Parameter `ivrMenuInfo` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-createIVRMenu) in API Explorer.


## Get IVR Menu

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>AutoReceptionist</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrMenus().get()
await rc.revoke()
```

- `result` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-readIVRMenu) in API Explorer.


## Update IVR Menu

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>AutoReceptionist</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrMenus().put(ivrMenuInfo)
await rc.revoke()
```
- Parameter `ivrMenuInfo` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-updateIVRMenu) in API Explorer.


## Create IVR Menu

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-menus</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>AutoReceptionist</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrMenus(ivrMenuId).post(ivrMenuInfo)
await rc.revoke()
```
- Parameter `ivrMenuInfo` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-createIVRMenu) in API Explorer.


## Get IVR Menu

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>AutoReceptionist</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrMenus(ivrMenuId).get()
await rc.revoke()
```

- `result` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-readIVRMenu) in API Explorer.


## Update IVR Menu

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>AutoReceptionist</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrMenus(ivrMenuId).put(ivrMenuInfo)
await rc.revoke()
```
- Parameter `ivrMenuInfo` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-updateIVRMenu) in API Explorer.


## Create IVR Prompts

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-prompts</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyGreetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrPrompts().post(createIvrPromptRequest)
await rc.revoke()
```
- Parameter `createIvrPromptRequest` is of type [CreateIvrPromptRequest](./src/definitions/CreateIvrPromptRequest.ts)
- `result` is of type [PromptInfo](./src/definitions/PromptInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-createIVRPrompt) in API Explorer.


## Get IVR Prompt List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-prompts</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyGreetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrPrompts().list()
await rc.revoke()
```

- `result` is of type [IVRPrompts](./src/definitions/IVRPrompts.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-listIVRPrompts) in API Explorer.


## Get IVR Prompt

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyGreetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrPrompts().get()
await rc.revoke()
```

- `result` is of type [PromptInfo](./src/definitions/PromptInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-readIVRPrompt) in API Explorer.


## Delete IVR Prompt

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyGreetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrPrompts().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-deleteIVRPrompt) in API Explorer.


## Update IVR Prompt

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyGreetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrPrompts().put(updateIvrPromptRequest)
await rc.revoke()
```
- Parameter `updateIvrPromptRequest` is of type [UpdateIVRPromptRequest](./src/definitions/UpdateIVRPromptRequest.ts)
- `result` is of type [PromptInfo](./src/definitions/PromptInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-updateIVRPrompt) in API Explorer.


## Create IVR Prompts

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-prompts</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyGreetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrPrompts(promptId).post(createIvrPromptRequest)
await rc.revoke()
```
- Parameter `createIvrPromptRequest` is of type [CreateIvrPromptRequest](./src/definitions/CreateIvrPromptRequest.ts)
- `result` is of type [PromptInfo](./src/definitions/PromptInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-createIVRPrompt) in API Explorer.


## Get IVR Prompt List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-prompts</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyGreetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrPrompts(promptId).list()
await rc.revoke()
```

- `result` is of type [IVRPrompts](./src/definitions/IVRPrompts.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-listIVRPrompts) in API Explorer.


## Get IVR Prompt

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyGreetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrPrompts(promptId).get()
await rc.revoke()
```

- `result` is of type [PromptInfo](./src/definitions/PromptInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-readIVRPrompt) in API Explorer.


## Delete IVR Prompt

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyGreetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrPrompts(promptId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-deleteIVRPrompt) in API Explorer.


## Update IVR Prompt

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>EditCompanyGreetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrPrompts(promptId).put(updateIvrPromptRequest)
await rc.revoke()
```
- Parameter `updateIvrPromptRequest` is of type [UpdateIVRPromptRequest](./src/definitions/UpdateIVRPromptRequest.ts)
- `result` is of type [PromptInfo](./src/definitions/PromptInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-updateIVRPrompt) in API Explorer.


## Get IVR Prompt Content

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}/content</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyGreetings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).IvrPrompts(promptId).Content().get()
await rc.revoke()
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-readIVRPromptContent) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Get Account Meeting Recordings List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/meeting-recordings</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Meetings</code></td></tr><tr><td>User Permission</td><td><code>MeetingsRecordings</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).MeetingRecordings().get(listAccountMeetingRecordingsParameters)
await rc.revoke()
```
- Parameter `listAccountMeetingRecordingsParameters` is of type [ListAccountMeetingRecordingsParameters](./src/definitions/ListAccountMeetingRecordingsParameters.ts)
- `result` is of type [ListMeetingRecordingsResponse](./src/definitions/ListMeetingRecordingsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Recordings-listAccountMeetingRecordings) in API Explorer.


## Get Message Store Configuration

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/message-store-configuration</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>AccountAdministration</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).MessageStoreConfiguration().get()
await rc.revoke()
```

- `result` is of type [MessageStoreConfiguration](./src/definitions/MessageStoreConfiguration.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessageStoreConfiguration) in API Explorer.


## Update Message Store Configuration

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/message-store-configuration</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>AccountAdministration</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).MessageStoreConfiguration().put(messageStoreConfiguration)
await rc.revoke()
```
- Parameter `messageStoreConfiguration` is of type [MessageStoreConfiguration](./src/definitions/MessageStoreConfiguration.ts)
- `result` is of type [MessageStoreConfiguration](./src/definitions/MessageStoreConfiguration.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-updateMessageStoreConfiguration) in API Explorer.


## Create Message Store Report

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/message-store-report</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).MessageStoreReport().post(createMessageStoreReportRequest)
await rc.revoke()
```
- Parameter `createMessageStoreReportRequest` is of type [CreateMessageStoreReportRequest](./src/definitions/CreateMessageStoreReportRequest.ts)
- `result` is of type [MessageStoreReport](./src/definitions/MessageStoreReport.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-createMessageStoreReport) in API Explorer.


## Get Message Store Report Task

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/message-store-report/{taskId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).MessageStoreReport().get()
await rc.revoke()
```

- `result` is of type [MessageStoreReport](./src/definitions/MessageStoreReport.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportTask) in API Explorer.


## Create Message Store Report

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/message-store-report</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).MessageStoreReport(taskId).post(createMessageStoreReportRequest)
await rc.revoke()
```
- Parameter `createMessageStoreReportRequest` is of type [CreateMessageStoreReportRequest](./src/definitions/CreateMessageStoreReportRequest.ts)
- `result` is of type [MessageStoreReport](./src/definitions/MessageStoreReport.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-createMessageStoreReport) in API Explorer.


## Get Message Store Report Task

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/message-store-report/{taskId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).MessageStoreReport(taskId).get()
await rc.revoke()
```

- `result` is of type [MessageStoreReport](./src/definitions/MessageStoreReport.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportTask) in API Explorer.


## Get Message Store Report Archive

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).MessageStoreReport(taskId).Archive().list()
await rc.revoke()
```

- `result` is of type [MessageStoreReportArchive](./src/definitions/MessageStoreReportArchive.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportArchive) in API Explorer.


## Get Message Store Report Archive Content

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).MessageStoreReport(taskId).Archive().get()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportArchiveContent) in API Explorer.


## Get Message Store Report Archive

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).MessageStoreReport(taskId).Archive(archiveId).list()
await rc.revoke()
```

- `result` is of type [MessageStoreReportArchive](./src/definitions/MessageStoreReportArchive.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportArchive) in API Explorer.


## Get Message Store Report Archive Content

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadMessages</code></td></tr><tr><td>User Permission</td><td><code>Users</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).MessageStoreReport(taskId).Archive(archiveId).get()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportArchiveContent) in API Explorer.


## Assign Paging Group Users and Devices

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>Groups</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).PagingOnlyGroups(pagingOnlyGroupId).BulkAssign().post(editPagingGroupRequest)
await rc.revoke()
```
- Parameter `editPagingGroupRequest` is of type [EditPagingGroupRequest](./src/definitions/EditPagingGroupRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-assignMultiplePagingGroupUsersDevices) in API Explorer.


## Get Paging Group Devices

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyDevices</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).PagingOnlyGroups(pagingOnlyGroupId).Devices().get(listPagingGroupDevicesParameters)
await rc.revoke()
```
- Parameter `listPagingGroupDevicesParameters` is of type [ListPagingGroupDevicesParameters](./src/definitions/ListPagingGroupDevicesParameters.ts)
- `result` is of type [PagingOnlyGroupDevices](./src/definitions/PagingOnlyGroupDevices.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-listPagingGroupDevices) in API Explorer.


## Get Paging Group Users

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadUserInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).PagingOnlyGroups(pagingOnlyGroupId).Users().get(listPagingGroupUsersParameters)
await rc.revoke()
```
- Parameter `listPagingGroupUsersParameters` is of type [ListPagingGroupUsersParameters](./src/definitions/ListPagingGroupUsersParameters.ts)
- `result` is of type [PagingOnlyGroupUsers](./src/definitions/PagingOnlyGroupUsers.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-listPagingGroupUsers) in API Explorer.


## Get Company Phone Number List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/phone-number</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyPhoneNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).PhoneNumber().list(listAccountPhoneNumbersParameters)
await rc.revoke()
```
- Parameter `listAccountPhoneNumbersParameters` is of type [ListAccountPhoneNumbersParameters](./src/definitions/ListAccountPhoneNumbersParameters.ts)
- `result` is of type [AccountPhoneNumbers](./src/definitions/AccountPhoneNumbers.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-listAccountPhoneNumbers) in API Explorer.


## Get Phone Number

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyPhoneNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).PhoneNumber().get()
await rc.revoke()
```

- `result` is of type [CompanyPhoneNumberInfo](./src/definitions/CompanyPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-readAccountPhoneNumber) in API Explorer.


## Get Company Phone Number List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/phone-number</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyPhoneNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).PhoneNumber(phoneNumberId).list(listAccountPhoneNumbersParameters)
await rc.revoke()
```
- Parameter `listAccountPhoneNumbersParameters` is of type [ListAccountPhoneNumbersParameters](./src/definitions/ListAccountPhoneNumbersParameters.ts)
- `result` is of type [AccountPhoneNumbers](./src/definitions/AccountPhoneNumbers.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-listAccountPhoneNumbers) in API Explorer.


## Get Phone Number

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyPhoneNumbers</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).PhoneNumber(phoneNumberId).get()
await rc.revoke()
```

- `result` is of type [CompanyPhoneNumberInfo](./src/definitions/CompanyPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-readAccountPhoneNumber) in API Explorer.


## Get User Presence Status List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/presence</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadPresence</code></td></tr><tr><td>User Permission</td><td><code>ReadPresenceStatus</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Presence().get(readAccountPresenceParameters)
await rc.revoke()
```
- Parameter `readAccountPresenceParameters` is of type [ReadAccountPresenceParameters](./src/definitions/ReadAccountPresenceParameters.ts)
- `result` is of type [AccountPresenceInfo](./src/definitions/AccountPresenceInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readAccountPresence) in API Explorer.


## Get Call Recording

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/recording/{recordingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallRecording</code></td></tr><tr><td>User Permission</td><td><code>ReadCallRecording</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Recording(recordingId).get()
await rc.revoke()
```

- `result` is of type [GetCallRecordingResponse](./src/definitions/GetCallRecordingResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recordings-readCallRecording) in API Explorer.


## Get Call Recordings Data

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/recording/{recordingId}/content</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>ReadCallRecording</code></td></tr><tr><td>User Permission</td><td><code>ReadCallRecording</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Recording(recordingId).Content().get()
await rc.revoke()
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recordings-listCallRecordingData) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Get Account Service Info

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/service-info</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadServicePlanInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).ServiceInfo().get()
await rc.revoke()
```

- `result` is of type [GetServiceInfoResponse](./src/definitions/GetServiceInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountServiceInfo) in API Explorer.


## Make CallOut

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/call-out</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().CallOut().post(makeCallOutRequest)
await rc.revoke()
```
- Parameter `makeCallOutRequest` is of type [MakeCallOutRequest](./src/definitions/MakeCallOutRequest.ts)
- `result` is of type [CallSession](./src/definitions/CallSession.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-createCallOutCallSession) in API Explorer.


## Get Call Session Status

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).get(readCallSessionStatusParameters)
await rc.revoke()
```
- Parameter `readCallSessionStatusParameters` is of type [ReadCallSessionStatusParameters](./src/definitions/ReadCallSessionStatusParameters.ts)
- `result` is of type [CallSession](./src/definitions/CallSession.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-readCallSessionStatus) in API Explorer.


## Drop Call Session

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-deleteCallSession) in API Explorer.


## Get Call Party Status

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).get()
await rc.revoke()
```

- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-readCallPartyStatus) in API Explorer.


## Update Call Party

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).patch(partyUpdateRequest)
await rc.revoke()
```
- Parameter `partyUpdateRequest` is of type [PartyUpdateRequest](./src/definitions/PartyUpdateRequest.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-updateCallParty) in API Explorer.


## Answer Call Party

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/answer</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Answer().post(answerTarget)
await rc.revoke()
```
- Parameter `answerTarget` is of type [AnswerTarget](./src/definitions/AnswerTarget.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-answerCallParty) in API Explorer.


## Call Flip on Party

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Flip().post(callPartyFlip)
await rc.revoke()
```
- Parameter `callPartyFlip` is of type [CallPartyFlip](./src/definitions/CallPartyFlip.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-callFlipParty) in API Explorer.


## Forward Call Party

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/forward</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Forward().post(forwardTarget)
await rc.revoke()
```
- Parameter `forwardTarget` is of type [ForwardTarget](./src/definitions/ForwardTarget.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-forwardCallParty) in API Explorer.


## Hold Call Party

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/hold</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Hold().post()
await rc.revoke()
```

- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-holdCallParty) in API Explorer.


## Ignore Call in Queue

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/ignore</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Ignore().post(ignoreRequestBody)
await rc.revoke()
```
- Parameter `ignoreRequestBody` is of type [IgnoreRequestBody](./src/definitions/IgnoreRequestBody.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-ignoreCallInQueue) in API Explorer.


## Call Park

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/park</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Park().post()
await rc.revoke()
```

- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-callParkParty) in API Explorer.


## Pickup Call

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/pickup</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Pickup().post(pickupTarget)
await rc.revoke()
```
- Parameter `pickupTarget` is of type [PickupTarget](./src/definitions/PickupTarget.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-pickupCallParty) in API Explorer.


## Create Recording

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Recordings().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-startCallRecording) in API Explorer.


## Pause/Resume Recording

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings/{recordingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Recordings().patch(callRecordingUpdate, pauseResumeCallRecordingParameters)
await rc.revoke()
```
- Parameter `callRecordingUpdate` is of type [CallRecordingUpdate](./src/definitions/CallRecordingUpdate.ts)
- Parameter `pauseResumeCallRecordingParameters` is of type [PauseResumeCallRecordingParameters](./src/definitions/PauseResumeCallRecordingParameters.ts)
- `result` is of type [CallRecording](./src/definitions/CallRecording.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-pauseResumeCallRecording) in API Explorer.


## Create Recording

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Recordings(recordingId).post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-startCallRecording) in API Explorer.


## Pause/Resume Recording

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings/{recordingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Recordings(recordingId).patch(callRecordingUpdate, pauseResumeCallRecordingParameters)
await rc.revoke()
```
- Parameter `callRecordingUpdate` is of type [CallRecordingUpdate](./src/definitions/CallRecordingUpdate.ts)
- Parameter `pauseResumeCallRecordingParameters` is of type [PauseResumeCallRecordingParameters](./src/definitions/PauseResumeCallRecordingParameters.ts)
- `result` is of type [CallRecording](./src/definitions/CallRecording.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-pauseResumeCallRecording) in API Explorer.


## Reject Call Party

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reject</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Reject().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-rejectParty) in API Explorer.


## Reply with Text

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reply</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Reply().post(callPartyReply)
await rc.revoke()
```
- Parameter `callPartyReply` is of type [CallPartyReply](./src/definitions/CallPartyReply.ts)
- `result` is of type [ReplyParty](./src/definitions/ReplyParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-replyParty) in API Explorer.


## Supervise Call Party

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/supervise</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Supervise().post(partySuperviseRequest)
await rc.revoke()
```
- Parameter `partySuperviseRequest` is of type [PartySuperviseRequest](./src/definitions/PartySuperviseRequest.ts)
- `result` is of type [PartySuperviseResponse](./src/definitions/PartySuperviseResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-superviseCallParty) in API Explorer.


## Transfer Call Party

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/transfer</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Transfer().post(transferTarget)
await rc.revoke()
```
- Parameter `transferTarget` is of type [TransferTarget](./src/definitions/TransferTarget.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-transferCallParty) in API Explorer.


## Unhold Call Party

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/unhold</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Parties(partyId).Unhold().post()
await rc.revoke()
```

- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-unholdCallParty) in API Explorer.


## Supervise Call Session

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/supervise</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>CallControl</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Telephony().Sessions(telephonySessionId).Supervise().post(superviseCallSessionRequest)
await rc.revoke()
```
- Parameter `superviseCallSessionRequest` is of type [SuperviseCallSessionRequest](./src/definitions/SuperviseCallSessionRequest.ts)
- `result` is of type [SuperviseCallSession](./src/definitions/SuperviseCallSession.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-superviseCallSession) in API Explorer.


## Get User Template List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/templates</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Templates().list(listUserTemplatesParameters)
await rc.revoke()
```
- Parameter `listUserTemplatesParameters` is of type [ListUserTemplatesParameters](./src/definitions/ListUserTemplatesParameters.ts)
- `result` is of type [UserTemplates](./src/definitions/UserTemplates.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-listUserTemplates) in API Explorer.


## Get User Template

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/templates/{templateId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Templates().get()
await rc.revoke()
```

- `result` is of type [TemplateInfo](./src/definitions/TemplateInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-readUserTemplate) in API Explorer.


## Get User Template List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/templates</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Templates(templateId).list(listUserTemplatesParameters)
await rc.revoke()
```
- Parameter `listUserTemplatesParameters` is of type [ListUserTemplatesParameters](./src/definitions/ListUserTemplatesParameters.ts)
- `result` is of type [UserTemplates](./src/definitions/UserTemplates.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-listUserTemplates) in API Explorer.


## Get User Template

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/account/{accountId}/templates/{templateId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>ReadCompanyInfo</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Account(accountId).Templates(templateId).get()
await rc.revoke()
```

- `result` is of type [TemplateInfo](./src/definitions/TemplateInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-readUserTemplate) in API Explorer.


## Register SIP Device

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/client-info/sip-provision</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>VoipCalling</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).ClientInfo().SipProvision().post(createSipRegistrationRequest)
await rc.revoke()
```
- Parameter `createSipRegistrationRequest` is of type [CreateSipRegistrationRequest](./src/definitions/CreateSipRegistrationRequest.ts)
- `result` is of type [CreateSipRegistrationResponse](./src/definitions/CreateSipRegistrationResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SIP-createSIPRegistration) in API Explorer.


## Get Country List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/country</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Country().list(listCountriesParameters)
await rc.revoke()
```
- Parameter `listCountriesParameters` is of type [ListCountriesParameters](./src/definitions/ListCountriesParameters.ts)
- `result` is of type [GetCountryListResponse](./src/definitions/GetCountryListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listCountries) in API Explorer.


## Get Country

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/country/{countryId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Country().get()
await rc.revoke()
```

- `result` is of type [GetCountryInfoDictionaryResponse](./src/definitions/GetCountryInfoDictionaryResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readCountry) in API Explorer.


## Get Country List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/country</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Country(countryId).list(listCountriesParameters)
await rc.revoke()
```
- Parameter `listCountriesParameters` is of type [ListCountriesParameters](./src/definitions/ListCountriesParameters.ts)
- `result` is of type [GetCountryListResponse](./src/definitions/GetCountryListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listCountries) in API Explorer.


## Get Country

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/country/{countryId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Country(countryId).get()
await rc.revoke()
```

- `result` is of type [GetCountryInfoDictionaryResponse](./src/definitions/GetCountryInfoDictionaryResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readCountry) in API Explorer.


## Get Fax Cover Page List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/fax-cover-page</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().FaxCoverPage().get(listFaxCoverPagesParameters)
await rc.revoke()
```
- Parameter `listFaxCoverPagesParameters` is of type [ListFaxCoverPagesParameters](./src/definitions/ListFaxCoverPagesParameters.ts)
- `result` is of type [ListFaxCoverPagesResponse](./src/definitions/ListFaxCoverPagesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Fax-listFaxCoverPages) in API Explorer.


## Get Standard Greeting List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/greeting</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Greeting().list(listStandardGreetingsParameters)
await rc.revoke()
```
- Parameter `listStandardGreetingsParameters` is of type [ListStandardGreetingsParameters](./src/definitions/ListStandardGreetingsParameters.ts)
- `result` is of type [DictionaryGreetingList](./src/definitions/DictionaryGreetingList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listStandardGreetings) in API Explorer.


## Get Standard Greeting

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/greeting/{greetingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Greeting().get()
await rc.revoke()
```

- `result` is of type [DictionaryGreetingInfo](./src/definitions/DictionaryGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readStandardGreeting) in API Explorer.


## Get Standard Greeting List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/greeting</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Greeting(greetingId).list(listStandardGreetingsParameters)
await rc.revoke()
```
- Parameter `listStandardGreetingsParameters` is of type [ListStandardGreetingsParameters](./src/definitions/ListStandardGreetingsParameters.ts)
- `result` is of type [DictionaryGreetingList](./src/definitions/DictionaryGreetingList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listStandardGreetings) in API Explorer.


## Get Standard Greeting

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/greeting/{greetingId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Greeting(greetingId).get()
await rc.revoke()
```

- `result` is of type [DictionaryGreetingInfo](./src/definitions/DictionaryGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readStandardGreeting) in API Explorer.


## Get Language List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/language</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Language().list()
await rc.revoke()
```

- `result` is of type [LanguageList](./src/definitions/LanguageList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listLanguages) in API Explorer.


## Get Language

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/language/{languageId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Language().get()
await rc.revoke()
```

- `result` is of type [LanguageInfo](./src/definitions/LanguageInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readLanguage) in API Explorer.


## Get Language List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/language</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Language(languageId).list()
await rc.revoke()
```

- `result` is of type [LanguageList](./src/definitions/LanguageList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listLanguages) in API Explorer.


## Get Language

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/language/{languageId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Language(languageId).get()
await rc.revoke()
```

- `result` is of type [LanguageInfo](./src/definitions/LanguageInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readLanguage) in API Explorer.


## Get Location List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/location</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Location().get(listLocationsParameters)
await rc.revoke()
```
- Parameter `listLocationsParameters` is of type [ListLocationsParameters](./src/definitions/ListLocationsParameters.ts)
- `result` is of type [GetLocationListResponse](./src/definitions/GetLocationListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listLocations) in API Explorer.


## Get States List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/state</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().State().list(listStatesParameters)
await rc.revoke()
```
- Parameter `listStatesParameters` is of type [ListStatesParameters](./src/definitions/ListStatesParameters.ts)
- `result` is of type [GetStateListResponse](./src/definitions/GetStateListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listStates) in API Explorer.


## Get State

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/state/{stateId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().State().get()
await rc.revoke()
```

- `result` is of type [GetStateInfoResponse](./src/definitions/GetStateInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readState) in API Explorer.


## Get States List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/state</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().State(stateId).list(listStatesParameters)
await rc.revoke()
```
- Parameter `listStatesParameters` is of type [ListStatesParameters](./src/definitions/ListStatesParameters.ts)
- `result` is of type [GetStateListResponse](./src/definitions/GetStateListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listStates) in API Explorer.


## Get State

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/state/{stateId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().State(stateId).get()
await rc.revoke()
```

- `result` is of type [GetStateInfoResponse](./src/definitions/GetStateInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readState) in API Explorer.


## Get Timezone List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/timezone</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Timezone().list(listTimezonesParameters)
await rc.revoke()
```
- Parameter `listTimezonesParameters` is of type [ListTimezonesParameters](./src/definitions/ListTimezonesParameters.ts)
- `result` is of type [GetTimezoneListResponse](./src/definitions/GetTimezoneListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listTimezones) in API Explorer.


## Get Timezone

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/timezone/{timezoneId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Timezone().get(readTimezoneParameters)
await rc.revoke()
```
- Parameter `readTimezoneParameters` is of type [ReadTimezoneParameters](./src/definitions/ReadTimezoneParameters.ts)
- `result` is of type [GetTimezoneInfoResponse](./src/definitions/GetTimezoneInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readTimezone) in API Explorer.


## Get Timezone List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/timezone</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Timezone(timezoneId).list(listTimezonesParameters)
await rc.revoke()
```
- Parameter `listTimezonesParameters` is of type [ListTimezonesParameters](./src/definitions/ListTimezonesParameters.ts)
- `result` is of type [GetTimezoneListResponse](./src/definitions/GetTimezoneListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listTimezones) in API Explorer.


## Get Timezone

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/dictionary/timezone/{timezoneId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Dictionary().Timezone(timezoneId).get(readTimezoneParameters)
await rc.revoke()
```
- Parameter `readTimezoneParameters` is of type [ReadTimezoneParameters](./src/definitions/ReadTimezoneParameters.ts)
- `result` is of type [GetTimezoneInfoResponse](./src/definitions/GetTimezoneInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readTimezone) in API Explorer.


## Create Card

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/cards</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Cards().post(glipMessageAttachmentInfoRequest, createGlipCardParameters)
await rc.revoke()
```
- Parameter `glipMessageAttachmentInfoRequest` is of type [GlipMessageAttachmentInfoRequest](./src/definitions/GlipMessageAttachmentInfoRequest.ts)
- Parameter `createGlipCardParameters` is of type [CreateGlipCardParameters](./src/definitions/CreateGlipCardParameters.ts)
- `result` is of type [GlipMessageAttachmentInfo](./src/definitions/GlipMessageAttachmentInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipCard) in API Explorer.


## Get Card

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/cards/{cardId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Cards().get()
await rc.revoke()
```

- `result` is of type [GlipMessageAttachmentInfo](./src/definitions/GlipMessageAttachmentInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipCard) in API Explorer.


## Update Card

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/cards/{cardId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Cards().put(glipMessageAttachmentInfoRequest)
await rc.revoke()
```
- Parameter `glipMessageAttachmentInfoRequest` is of type [GlipMessageAttachmentInfoRequest](./src/definitions/GlipMessageAttachmentInfoRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Posts-updateGlipCard) in API Explorer.


## Delete Card

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/cards/{cardId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Cards().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Posts-deleteGlipCard) in API Explorer.


## Create Card

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/cards</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Cards(cardId).post(glipMessageAttachmentInfoRequest, createGlipCardParameters)
await rc.revoke()
```
- Parameter `glipMessageAttachmentInfoRequest` is of type [GlipMessageAttachmentInfoRequest](./src/definitions/GlipMessageAttachmentInfoRequest.ts)
- Parameter `createGlipCardParameters` is of type [CreateGlipCardParameters](./src/definitions/CreateGlipCardParameters.ts)
- `result` is of type [GlipMessageAttachmentInfo](./src/definitions/GlipMessageAttachmentInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipCard) in API Explorer.


## Get Card

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/cards/{cardId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Cards(cardId).get()
await rc.revoke()
```

- `result` is of type [GlipMessageAttachmentInfo](./src/definitions/GlipMessageAttachmentInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipCard) in API Explorer.


## Update Card

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/cards/{cardId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Cards(cardId).put(glipMessageAttachmentInfoRequest)
await rc.revoke()
```
- Parameter `glipMessageAttachmentInfoRequest` is of type [GlipMessageAttachmentInfoRequest](./src/definitions/GlipMessageAttachmentInfoRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Posts-updateGlipCard) in API Explorer.


## Delete Card

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/cards/{cardId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Cards(cardId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Posts-deleteGlipCard) in API Explorer.


## Get Chats

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats().list(listGlipChatsParameters)
await rc.revoke()
```
- Parameter `listGlipChatsParameters` is of type [ListGlipChatsParameters](./src/definitions/ListGlipChatsParameters.ts)
- `result` is of type [GlipChatsList](./src/definitions/GlipChatsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipChats) in API Explorer.


## Get Chat

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats().get()
await rc.revoke()
```

- `result` is of type [GlipChatInfo](./src/definitions/GlipChatInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipChat) in API Explorer.


## Get Chats

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).list(listGlipChatsParameters)
await rc.revoke()
```
- Parameter `listGlipChatsParameters` is of type [ListGlipChatsParameters](./src/definitions/ListGlipChatsParameters.ts)
- `result` is of type [GlipChatsList](./src/definitions/GlipChatsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipChats) in API Explorer.


## Get Chat

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).get()
await rc.revoke()
```

- `result` is of type [GlipChatInfo](./src/definitions/GlipChatInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipChat) in API Explorer.


## Add Chat to Favorites

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/favorite</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Favorite().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-favoriteGlipChat) in API Explorer.


## Create Note

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/notes</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Notes().post(glipNoteCreate)
await rc.revoke()
```
- Parameter `glipNoteCreate` is of type [GlipNoteCreate](./src/definitions/GlipNoteCreate.ts)
- `result` is of type [GlipNoteInfo](./src/definitions/GlipNoteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-createChatNote) in API Explorer.


## Get Chat Notes

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/notes</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Notes().get(listChatNotesParameters)
await rc.revoke()
```
- Parameter `listChatNotesParameters` is of type [ListChatNotesParameters](./src/definitions/ListChatNotesParameters.ts)
- `result` is of type [GlipNotesInfo](./src/definitions/GlipNotesInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-listChatNotes) in API Explorer.


## Get Posts

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/posts</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Posts().list(readGlipPostsParameters)
await rc.revoke()
```
- Parameter `readGlipPostsParameters` is of type [ReadGlipPostsParameters](./src/definitions/ReadGlipPostsParameters.ts)
- `result` is of type [GlipPostsList](./src/definitions/GlipPostsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPosts) in API Explorer.


## Create Post

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/posts</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Posts().post(glipPostPostBody)
await rc.revoke()
```
- Parameter `glipPostPostBody` is of type [GlipPostPostBody](./src/definitions/GlipPostPostBody.ts)
- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipPost) in API Explorer.


## Get Post

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/posts/{postId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Posts().get()
await rc.revoke()
```

- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPost) in API Explorer.


## Update Post

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/posts/{postId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Posts().patch(glipPatchPostBody)
await rc.revoke()
```
- Parameter `glipPatchPostBody` is of type [GlipPatchPostBody](./src/definitions/GlipPatchPostBody.ts)
- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-patchGlipPost) in API Explorer.


## Delete Post

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/posts/{postId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Posts().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Posts-deleteGlipPost) in API Explorer.


## Get Posts

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/posts</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Posts(postId).list(readGlipPostsParameters)
await rc.revoke()
```
- Parameter `readGlipPostsParameters` is of type [ReadGlipPostsParameters](./src/definitions/ReadGlipPostsParameters.ts)
- `result` is of type [GlipPostsList](./src/definitions/GlipPostsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPosts) in API Explorer.


## Create Post

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/posts</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Posts(postId).post(glipPostPostBody)
await rc.revoke()
```
- Parameter `glipPostPostBody` is of type [GlipPostPostBody](./src/definitions/GlipPostPostBody.ts)
- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipPost) in API Explorer.


## Get Post

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/posts/{postId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Posts(postId).get()
await rc.revoke()
```

- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPost) in API Explorer.


## Update Post

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/posts/{postId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Posts(postId).patch(glipPatchPostBody)
await rc.revoke()
```
- Parameter `glipPatchPostBody` is of type [GlipPatchPostBody](./src/definitions/GlipPatchPostBody.ts)
- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-patchGlipPost) in API Explorer.


## Delete Post

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/posts/{postId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Posts(postId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Posts-deleteGlipPost) in API Explorer.


## Mark Chat as Read

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/read</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>GlipInternal</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Read().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-markChatRead) in API Explorer.


## Get Chat Tasks

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/tasks</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Tasks().get(listChatTasksParameters)
await rc.revoke()
```
- Parameter `listChatTasksParameters` is of type [ListChatTasksParameters](./src/definitions/ListChatTasksParameters.ts)
- `result` is of type [GlipTaskList](./src/definitions/GlipTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-listChatTasks) in API Explorer.


## Create Task

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/tasks</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Tasks().post(glipCreateTask)
await rc.revoke()
```
- Parameter `glipCreateTask` is of type [GlipCreateTask](./src/definitions/GlipCreateTask.ts)
- `result` is of type [GlipTaskInfo](./src/definitions/GlipTaskInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-createTask) in API Explorer.


## Remove Chat from Favorites

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/unfavorite</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Unfavorite().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-unfavoriteGlipChat) in API Explorer.


## Mark Chat as Unread

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/chats/{chatId}/unread</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>GlipInternal</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Chats(chatId).Unread().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-markChatUnread) in API Explorer.


## Get Company Info

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/companies/{companyId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Companies(companyId).get()
await rc.revoke()
```

- `result` is of type [GlipCompany](./src/definitions/GlipCompany.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipCompany) in API Explorer.


## Get Conversations

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/conversations</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Conversations().list(listGlipConversationsParameters)
await rc.revoke()
```
- Parameter `listGlipConversationsParameters` is of type [ListGlipConversationsParameters](./src/definitions/ListGlipConversationsParameters.ts)
- `result` is of type [GlipConversationsList](./src/definitions/GlipConversationsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-listGlipConversations) in API Explorer.


## Create/Open Conversation

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/conversations</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Conversations().post(createGlipConversationRequest)
await rc.revoke()
```
- Parameter `createGlipConversationRequest` is of type [CreateGlipConversationRequest](./src/definitions/CreateGlipConversationRequest.ts)
- `result` is of type [GlipConversationInfo](./src/definitions/GlipConversationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-createGlipConversation) in API Explorer.


## Get Conversation

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/conversations/{chatId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Conversations().get()
await rc.revoke()
```

- `result` is of type [GlipConversationInfo](./src/definitions/GlipConversationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-readGlipConversation) in API Explorer.


## Get Conversations

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/conversations</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Conversations(chatId).list(listGlipConversationsParameters)
await rc.revoke()
```
- Parameter `listGlipConversationsParameters` is of type [ListGlipConversationsParameters](./src/definitions/ListGlipConversationsParameters.ts)
- `result` is of type [GlipConversationsList](./src/definitions/GlipConversationsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-listGlipConversations) in API Explorer.


## Create/Open Conversation

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/conversations</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Conversations(chatId).post(createGlipConversationRequest)
await rc.revoke()
```
- Parameter `createGlipConversationRequest` is of type [CreateGlipConversationRequest](./src/definitions/CreateGlipConversationRequest.ts)
- `result` is of type [GlipConversationInfo](./src/definitions/GlipConversationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-createGlipConversation) in API Explorer.


## Get Conversation

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/conversations/{chatId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Conversations(chatId).get()
await rc.revoke()
```

- `result` is of type [GlipConversationInfo](./src/definitions/GlipConversationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-readGlipConversation) in API Explorer.


## Create Data Export Task

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/data-export</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().DataExport().post(createDataExportTaskRequest)
await rc.revoke()
```
- Parameter `createDataExportTaskRequest` is of type [CreateDataExportTaskRequest](./src/definitions/CreateDataExportTaskRequest.ts)
- `result` is of type [DataExportTask](./src/definitions/DataExportTask.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-createDataExportTask) in API Explorer.


## Get Data Export Task List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/data-export</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().DataExport().list(listDataExportTasksParameters)
await rc.revoke()
```
- Parameter `listDataExportTasksParameters` is of type [ListDataExportTasksParameters](./src/definitions/ListDataExportTasksParameters.ts)
- `result` is of type [DataExportTaskList](./src/definitions/DataExportTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-listDataExportTasks) in API Explorer.


## Get Data Export Task

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/data-export/{taskId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().DataExport().get()
await rc.revoke()
```

- `result` is of type [DataExportTask](./src/definitions/DataExportTask.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-readDataExportTask) in API Explorer.


## Create Data Export Task

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/data-export</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().DataExport(taskId).post(createDataExportTaskRequest)
await rc.revoke()
```
- Parameter `createDataExportTaskRequest` is of type [CreateDataExportTaskRequest](./src/definitions/CreateDataExportTaskRequest.ts)
- `result` is of type [DataExportTask](./src/definitions/DataExportTask.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-createDataExportTask) in API Explorer.


## Get Data Export Task List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/data-export</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().DataExport(taskId).list(listDataExportTasksParameters)
await rc.revoke()
```
- Parameter `listDataExportTasksParameters` is of type [ListDataExportTasksParameters](./src/definitions/ListDataExportTasksParameters.ts)
- `result` is of type [DataExportTaskList](./src/definitions/DataExportTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-listDataExportTasks) in API Explorer.


## Get Data Export Task

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/data-export/{taskId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().DataExport(taskId).get()
await rc.revoke()
```

- `result` is of type [DataExportTask](./src/definitions/DataExportTask.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-readDataExportTask) in API Explorer.


## Get Data Export Task Dataset

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/data-export/{taskId}/datasets/{datasetId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().DataExport(taskId).Datasets(datasetId).get()
await rc.revoke()
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-readDataExportTaskDataset) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Get User Events List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/events</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Events().list(readGlipEventsParameters)
await rc.revoke()
```
- Parameter `readGlipEventsParameters` is of type [ReadGlipEventsParameters](./src/definitions/ReadGlipEventsParameters.ts)
- `result` is of type [GlipEventsInfo](./src/definitions/GlipEventsInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-readGlipEvents) in API Explorer.


## Create Event

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/events</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Events().post(glipEventCreate)
await rc.revoke()
```
- Parameter `glipEventCreate` is of type [GlipEventCreate](./src/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-createEvent) in API Explorer.


## Get Event

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/events/{eventId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Events().get()
await rc.revoke()
```

- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-readEvent) in API Explorer.


## Update Event

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/events/{eventId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Events().put(glipEventCreate)
await rc.revoke()
```
- Parameter `glipEventCreate` is of type [GlipEventCreate](./src/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-updateEvent) in API Explorer.


## Delete Event

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/events/{eventId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Events().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-deleteEvent) in API Explorer.


## Get User Events List

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/events</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Events(eventId).list(readGlipEventsParameters)
await rc.revoke()
```
- Parameter `readGlipEventsParameters` is of type [ReadGlipEventsParameters](./src/definitions/ReadGlipEventsParameters.ts)
- `result` is of type [GlipEventsInfo](./src/definitions/GlipEventsInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-readGlipEvents) in API Explorer.


## Create Event

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/events</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Events(eventId).post(glipEventCreate)
await rc.revoke()
```
- Parameter `glipEventCreate` is of type [GlipEventCreate](./src/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-createEvent) in API Explorer.


## Get Event

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/events/{eventId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Events(eventId).get()
await rc.revoke()
```

- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-readEvent) in API Explorer.


## Update Event

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/events/{eventId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Events(eventId).put(glipEventCreate)
await rc.revoke()
```
- Parameter `glipEventCreate` is of type [GlipEventCreate](./src/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-updateEvent) in API Explorer.


## Delete Event

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/events/{eventId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Events(eventId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-deleteEvent) in API Explorer.


## Get Everyone Chat

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/everyone</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Everyone().get()
await rc.revoke()
```

- `result` is of type [GlipEveryoneInfo](./src/definitions/GlipEveryoneInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-readGlipEveryone) in API Explorer.


## Update Everyone Сhat

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/everyone</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Everyone().patch(updateGlipEveryoneRequest)
await rc.revoke()
```
- Parameter `updateGlipEveryoneRequest` is of type [UpdateGlipEveryoneRequest](./src/definitions/UpdateGlipEveryoneRequest.ts)
- `result` is of type [GlipEveryoneInfo](./src/definitions/GlipEveryoneInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-patchGlipEveryone) in API Explorer.


## Get Favorite Chats

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/favorites</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Favorites().get(listFavoriteChatsParameters)
await rc.revoke()
```
- Parameter `listFavoriteChatsParameters` is of type [ListFavoriteChatsParameters](./src/definitions/ListFavoriteChatsParameters.ts)
- `result` is of type [GlipChatsListWithoutNavigation](./src/definitions/GlipChatsListWithoutNavigation.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listFavoriteChats) in API Explorer.


## Get User Groups

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups().list(listGlipGroupsParameters)
await rc.revoke()
```
- Parameter `listGlipGroupsParameters` is of type [ListGlipGroupsParameters](./src/definitions/ListGlipGroupsParameters.ts)
- `result` is of type [GlipGroupList](./src/definitions/GlipGroupList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipGroups) in API Explorer.


## Create Group

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups().post(glipCreateGroup)
await rc.revoke()
```
- Parameter `glipCreateGroup` is of type [GlipCreateGroup](./src/definitions/GlipCreateGroup.ts)
- `result` is of type [GlipGroupInfo](./src/definitions/GlipGroupInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-createGlipGroup) in API Explorer.


## Get Group

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups/{groupId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups().get()
await rc.revoke()
```

- `result` is of type [GlipGroupInfo](./src/definitions/GlipGroupInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipGroup) in API Explorer.


## Get User Groups

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups(groupId).list(listGlipGroupsParameters)
await rc.revoke()
```
- Parameter `listGlipGroupsParameters` is of type [ListGlipGroupsParameters](./src/definitions/ListGlipGroupsParameters.ts)
- `result` is of type [GlipGroupList](./src/definitions/GlipGroupList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipGroups) in API Explorer.


## Create Group

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups(groupId).post(glipCreateGroup)
await rc.revoke()
```
- Parameter `glipCreateGroup` is of type [GlipCreateGroup](./src/definitions/GlipCreateGroup.ts)
- `result` is of type [GlipGroupInfo](./src/definitions/GlipGroupInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-createGlipGroup) in API Explorer.


## Get Group

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups/{groupId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups(groupId).get()
await rc.revoke()
```

- `result` is of type [GlipGroupInfo](./src/definitions/GlipGroupInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipGroup) in API Explorer.


## Edit Group Members

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups/{groupId}/bulk-assign</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups(groupId).BulkAssign().post(editGroupRequest)
await rc.revoke()
```
- Parameter `editGroupRequest` is of type [EditGroupRequest](./src/definitions/EditGroupRequest.ts)
- `result` is of type [GlipGroupInfo](./src/definitions/GlipGroupInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-assignGlipGroupMembers) in API Explorer.


## Create Event by Group ID

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups/{groupId}/events</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups(groupId).Events().post(glipEventCreate)
await rc.revoke()
```
- Parameter `glipEventCreate` is of type [GlipEventCreate](./src/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-createEventbyGroupId) in API Explorer.


## Get Group Events

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups/{groupId}/events</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups(groupId).Events().get()
await rc.revoke()
```

- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-listGroupEvents) in API Explorer.


## Get Group Posts

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups/{groupId}/posts</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups(groupId).Posts().get(listGlipGroupPostsParameters)
await rc.revoke()
```
- Parameter `listGlipGroupPostsParameters` is of type [ListGlipGroupPostsParameters](./src/definitions/ListGlipGroupPostsParameters.ts)
- `result` is of type [GlipPosts](./src/definitions/GlipPosts.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-listGlipGroupPosts) in API Explorer.


## Create Post in Group

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups/{groupId}/posts</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups(groupId).Posts().post(glipCreatePost)
await rc.revoke()
```
- Parameter `glipCreatePost` is of type [GlipCreatePost](./src/definitions/GlipCreatePost.ts)
- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipGroupPost) in API Explorer.


## Update Post

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups/{groupId}/posts/{postId}/text</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups(groupId).Posts(postId).Text().put(string)
await rc.revoke()
```
- Parameter `string` is of type [string](./src/definitions/string.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Posts-updateGlipPostText) in API Explorer.


## Create Webhook in Group

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups/{groupId}/webhooks</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups(groupId).Webhooks().post()
await rc.revoke()
```

- `result` is of type [GlipWebhookInfo](./src/definitions/GlipWebhookInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-createGlipGroupWebhook) in API Explorer.


## Get Webhooks in Group

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/groups/{groupId}/webhooks</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Groups(groupId).Webhooks().get()
await rc.revoke()
```

- `result` is of type [GlipWebhookList](./src/definitions/GlipWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-listGlipGroupWebhooks) in API Explorer.


## Get Note

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/notes/{noteId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Notes(noteId).get()
await rc.revoke()
```

- `result` is of type [GetGlipNoteInfo](./src/definitions/GetGlipNoteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-readUserNote) in API Explorer.


## Update Note

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/notes/{noteId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Notes(noteId).patch(glipNoteCreate)
await rc.revoke()
```
- Parameter `glipNoteCreate` is of type [GlipNoteCreate](./src/definitions/GlipNoteCreate.ts)
- `result` is of type [GlipNoteInfo](./src/definitions/GlipNoteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-patchNote) in API Explorer.


## Delete Note

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/notes/{noteId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Notes(noteId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-deleteNote) in API Explorer.


## Lock Note

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/notes/{noteId}/lock</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Notes(noteId).Lock().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-lockNote) in API Explorer.


## Publish Note

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/notes/{noteId}/publish</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Notes(noteId).Publish().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-publishNote) in API Explorer.


## Unlock Note

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/notes/{noteId}/unlock</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Notes(noteId).Unlock().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-unlockNote) in API Explorer.


## Get Person

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/persons/{personId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Persons(personId).get()
await rc.revoke()
```

- `result` is of type [GlipPersonInfo](./src/definitions/GlipPersonInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipPerson) in API Explorer.


## Get Posts

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/posts</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Posts().get(listGlipPostsParameters)
await rc.revoke()
```
- Parameter `listGlipPostsParameters` is of type [ListGlipPostsParameters](./src/definitions/ListGlipPostsParameters.ts)
- `result` is of type [GlipPosts](./src/definitions/GlipPosts.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-listGlipPosts) in API Explorer.


## Create Post

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/posts</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Posts().post(glipCreatePost)
await rc.revoke()
```
- Parameter `glipCreatePost` is of type [GlipCreatePost](./src/definitions/GlipCreatePost.ts)
- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createPost) in API Explorer.


## Get Preferences

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/preferences</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Preferences().get()
await rc.revoke()
```

- `result` is of type [GlipPreferencesInfo](./src/definitions/GlipPreferencesInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipPreferences) in API Explorer.


## Get Recent Chats

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/recent/chats</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Recent().Chats().get(listRecentChatsParameters)
await rc.revoke()
```
- Parameter `listRecentChatsParameters` is of type [ListRecentChatsParameters](./src/definitions/ListRecentChatsParameters.ts)
- `result` is of type [GlipChatsListWithoutNavigation](./src/definitions/GlipChatsListWithoutNavigation.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listRecentChats) in API Explorer.


## Get Task

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/tasks/{taskId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Tasks(taskId).get()
await rc.revoke()
```

- `result` is of type [GlipTaskInfo](./src/definitions/GlipTaskInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-readTask) in API Explorer.


## Patch Task

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/tasks/{taskId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Tasks(taskId).patch(glipUpdateTask)
await rc.revoke()
```
- Parameter `glipUpdateTask` is of type [GlipUpdateTask](./src/definitions/GlipUpdateTask.ts)
- `result` is of type [GlipTaskList](./src/definitions/GlipTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-patchTask) in API Explorer.


## Delete Task

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/tasks/{taskId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Tasks(taskId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-deleteTask) in API Explorer.


## Complete Task

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/tasks/{taskId}/complete</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Tasks(taskId).Complete().post(glipCompleteTask)
await rc.revoke()
```
- Parameter `glipCompleteTask` is of type [GlipCompleteTask](./src/definitions/GlipCompleteTask.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-completeTask) in API Explorer.


## Get Teams

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams().list(listGlipTeamsParameters)
await rc.revoke()
```
- Parameter `listGlipTeamsParameters` is of type [ListGlipTeamsParameters](./src/definitions/ListGlipTeamsParameters.ts)
- `result` is of type [GlipTeamsList](./src/definitions/GlipTeamsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-listGlipTeams) in API Explorer.


## Create Team

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams().post(glipPostTeamBody)
await rc.revoke()
```
- Parameter `glipPostTeamBody` is of type [GlipPostTeamBody](./src/definitions/GlipPostTeamBody.ts)
- `result` is of type [GlipTeamInfo](./src/definitions/GlipTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-createGlipTeam) in API Explorer.


## Get Team

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams/{chatId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams().get()
await rc.revoke()
```

- `result` is of type [GlipTeamInfo](./src/definitions/GlipTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-readGlipTeam) in API Explorer.


## Update Team

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams/{chatId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams().patch(glipPatchTeamBody)
await rc.revoke()
```
- Parameter `glipPatchTeamBody` is of type [GlipPatchTeamBody](./src/definitions/GlipPatchTeamBody.ts)
- `result` is of type [GlipTeamInfo](./src/definitions/GlipTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-patchGlipTeam) in API Explorer.


## Delete Team

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams/{chatId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-deleteGlipTeam) in API Explorer.


## Get Teams

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams(chatId).list(listGlipTeamsParameters)
await rc.revoke()
```
- Parameter `listGlipTeamsParameters` is of type [ListGlipTeamsParameters](./src/definitions/ListGlipTeamsParameters.ts)
- `result` is of type [GlipTeamsList](./src/definitions/GlipTeamsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-listGlipTeams) in API Explorer.


## Create Team

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams(chatId).post(glipPostTeamBody)
await rc.revoke()
```
- Parameter `glipPostTeamBody` is of type [GlipPostTeamBody](./src/definitions/GlipPostTeamBody.ts)
- `result` is of type [GlipTeamInfo](./src/definitions/GlipTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-createGlipTeam) in API Explorer.


## Get Team

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams/{chatId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams(chatId).get()
await rc.revoke()
```

- `result` is of type [GlipTeamInfo](./src/definitions/GlipTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-readGlipTeam) in API Explorer.


## Update Team

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams/{chatId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams(chatId).patch(glipPatchTeamBody)
await rc.revoke()
```
- Parameter `glipPatchTeamBody` is of type [GlipPatchTeamBody](./src/definitions/GlipPatchTeamBody.ts)
- `result` is of type [GlipTeamInfo](./src/definitions/GlipTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-patchGlipTeam) in API Explorer.


## Delete Team

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams/{chatId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams(chatId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-deleteGlipTeam) in API Explorer.


## Add Team Members

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams/{chatId}/add</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams(chatId).Add().post(glipPostMembersListBody)
await rc.revoke()
```
- Parameter `glipPostMembersListBody` is of type [GlipPostMembersListBody](./src/definitions/GlipPostMembersListBody.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-addGlipTeamMembers) in API Explorer.


## Archive Team

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams/{chatId}/archive</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams(chatId).Archive().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-archiveGlipTeam) in API Explorer.


## Join Team

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams/{chatId}/join</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams(chatId).Join().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-joinGlipTeam) in API Explorer.


## Leave Team

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams/{chatId}/leave</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams(chatId).Leave().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-leaveGlipTeam) in API Explorer.


## Remove Team Members

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams/{chatId}/remove</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams(chatId).Remove().post(glipPostMembersIdsListBody)
await rc.revoke()
```
- Parameter `glipPostMembersIdsListBody` is of type [GlipPostMembersIdsListBody](./src/definitions/GlipPostMembersIdsListBody.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-removeGlipTeamMembers) in API Explorer.


## Unarchive Team

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/teams/{chatId}/unarchive</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Teams(chatId).Unarchive().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-unarchiveGlipTeam) in API Explorer.


## Get Webhooks

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/webhooks</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Webhooks().list()
await rc.revoke()
```

- `result` is of type [GlipWebhookList](./src/definitions/GlipWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-listGlipWebhooks) in API Explorer.


## Get Webhook

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/webhooks/{webhookId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Webhooks().get()
await rc.revoke()
```

- `result` is of type [GlipWebhookList](./src/definitions/GlipWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-readGlipWebhook) in API Explorer.


## Delete Webhook

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/webhooks/{webhookId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Webhooks().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-deleteGlipWebhook) in API Explorer.


## Get Webhooks

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/webhooks</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Webhooks(webhookId).list()
await rc.revoke()
```

- `result` is of type [GlipWebhookList](./src/definitions/GlipWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-listGlipWebhooks) in API Explorer.


## Get Webhook

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/webhooks/{webhookId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Webhooks(webhookId).get()
await rc.revoke()
```

- `result` is of type [GlipWebhookList](./src/definitions/GlipWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-readGlipWebhook) in API Explorer.


## Delete Webhook

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/webhooks/{webhookId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Webhooks(webhookId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-deleteGlipWebhook) in API Explorer.


## Activate Webhook

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/webhooks/{webhookId}/activate</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Webhooks(webhookId).Activate().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-activateGlipWebhook) in API Explorer.


## Suspend Webhook

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/glip/webhooks/{webhookId}/suspend</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>Glip</code></td></tr><tr><td>User Permission</td><td><code>Glip</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Glip().Webhooks(webhookId).Suspend().post()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-suspendGlipWebhook) in API Explorer.


## Parse Phone Number

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/number-parser/parse</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).NumberParser().Parse().post(parsePhoneNumberRequest, parsePhoneNumberParameters)
await rc.revoke()
```
- Parameter `parsePhoneNumberRequest` is of type [ParsePhoneNumberRequest](./src/definitions/ParsePhoneNumberRequest.ts)
- Parameter `parsePhoneNumberParameters` is of type [ParsePhoneNumberParameters](./src/definitions/ParsePhoneNumberParameters.ts)
- `result` is of type [ParsePhoneNumberResponse](./src/definitions/ParsePhoneNumberResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-parsePhoneNumber) in API Explorer.


## Get Service Status

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/status</code></td></tr><tr><td>Rate Limit Group</td><td><code>NoThrottling</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Status().get()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIStatus) in API Explorer.


## Get Subscriptions

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/subscription</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Subscription().list()
await rc.revoke()
```

- `result` is of type [RecordsCollectionResourceSubscriptionResponse](./src/definitions/RecordsCollectionResourceSubscriptionResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-listSubscriptions) in API Explorer.


## Create Subscription

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/subscription</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Subscription().post(createSubscriptionRequest)
await rc.revoke()
```
- Parameter `createSubscriptionRequest` is of type [CreateSubscriptionRequest](./src/definitions/CreateSubscriptionRequest.ts)
- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-createSubscription) in API Explorer.


## Get Subscription

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/subscription/{subscriptionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Subscription().get()
await rc.revoke()
```

- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-readSubscription) in API Explorer.


## Renew Subscription / Update Event Filters

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/subscription/{subscriptionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Subscription().put(modifySubscriptionRequest, updateSubscriptionParameters)
await rc.revoke()
```
- Parameter `modifySubscriptionRequest` is of type [ModifySubscriptionRequest](./src/definitions/ModifySubscriptionRequest.ts)
- Parameter `updateSubscriptionParameters` is of type [UpdateSubscriptionParameters](./src/definitions/UpdateSubscriptionParameters.ts)
- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-updateSubscription) in API Explorer.


## Cancel Subscription

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/subscription/{subscriptionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Subscription().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-deleteSubscription) in API Explorer.


## Get Subscriptions

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/subscription</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Subscription(subscriptionId).list()
await rc.revoke()
```

- `result` is of type [RecordsCollectionResourceSubscriptionResponse](./src/definitions/RecordsCollectionResourceSubscriptionResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-listSubscriptions) in API Explorer.


## Create Subscription

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/subscription</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Subscription(subscriptionId).post(createSubscriptionRequest)
await rc.revoke()
```
- Parameter `createSubscriptionRequest` is of type [CreateSubscriptionRequest](./src/definitions/CreateSubscriptionRequest.ts)
- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-createSubscription) in API Explorer.


## Get Subscription

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/subscription/{subscriptionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Subscription(subscriptionId).get()
await rc.revoke()
```

- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-readSubscription) in API Explorer.


## Renew Subscription / Update Event Filters

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/subscription/{subscriptionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Subscription(subscriptionId).put(modifySubscriptionRequest, updateSubscriptionParameters)
await rc.revoke()
```
- Parameter `modifySubscriptionRequest` is of type [ModifySubscriptionRequest](./src/definitions/ModifySubscriptionRequest.ts)
- Parameter `updateSubscriptionParameters` is of type [UpdateSubscriptionParameters](./src/definitions/UpdateSubscriptionParameters.ts)
- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-updateSubscription) in API Explorer.


## Cancel Subscription

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/subscription/{subscriptionId}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Medium</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Subscription(subscriptionId).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-deleteSubscription) in API Explorer.


## Renew Subscription

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/restapi/v1.0/subscription/{subscriptionId}/renew</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Restapi(apiVersion).Subscription(subscriptionId).Renew().post()
await rc.revoke()
```

- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-renewSubscription) in API Explorer.


## Get Service Provider Config

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/ServiceProviderConfig</code></td></tr><tr><td>Rate Limit Group</td><td><code>NoThrottling</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).ServiceProviderConfig().get()
await rc.revoke()
```

- `result` is of type [ServiceProviderConfig](./src/definitions/ServiceProviderConfig.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-readServiceProviderConfig2) in API Explorer.


## Search/List Users

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users().list(searchViaGet2Parameters)
await rc.revoke()
```
- Parameter `searchViaGet2Parameters` is of type [SearchViaGet2Parameters](./src/definitions/SearchViaGet2Parameters.ts)
- `result` is of type [UserSearchResponse](./src/definitions/UserSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-searchViaGet2) in API Explorer.


## Create User

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users().post(createUser)
await rc.revoke()
```
- Parameter `createUser` is of type [CreateUser](./src/definitions/CreateUser.ts)
- `result` is of type [UserResponse](./src/definitions/UserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-createUser2) in API Explorer.


## Get User

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users/{id}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users().get()
await rc.revoke()
```

- `result` is of type [UserResponse](./src/definitions/UserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-readUser2) in API Explorer.


## Update/Replace User

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users/{id}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users().put(user)
await rc.revoke()
```
- Parameter `user` is of type [User](./src/definitions/User.ts)
- `result` is of type [UserResponse](./src/definitions/UserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-replaceUser2) in API Explorer.


## Delete User

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users/{id}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users().delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-deleteUser2) in API Explorer.


## Update/Patch User

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users/{id}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users().patch(userPatch)
await rc.revoke()
```
- Parameter `userPatch` is of type [UserPatch](./src/definitions/UserPatch.ts)
- `result` is of type [UserResponse](./src/definitions/UserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-patchUser2) in API Explorer.


## Search/List Users

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users/.search</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users().DotSearch().post(searchRequest)
await rc.revoke()
```
- Parameter `searchRequest` is of type [SearchRequest](./src/definitions/SearchRequest.ts)
- `result` is of type [UserSearchResponse](./src/definitions/UserSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-searchViaPost2) in API Explorer.


## Search/List Users

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users(id).list(searchViaGet2Parameters)
await rc.revoke()
```
- Parameter `searchViaGet2Parameters` is of type [SearchViaGet2Parameters](./src/definitions/SearchViaGet2Parameters.ts)
- `result` is of type [UserSearchResponse](./src/definitions/UserSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-searchViaGet2) in API Explorer.


## Create User

<table><tr><td>HTTP Method</td><td><code>POST</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users(id).post(createUser)
await rc.revoke()
```
- Parameter `createUser` is of type [CreateUser](./src/definitions/CreateUser.ts)
- `result` is of type [UserResponse](./src/definitions/UserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-createUser2) in API Explorer.


## Get User

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users/{id}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Light</code></td></tr><tr><td>App Permission</td><td><code>ReadAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users(id).get()
await rc.revoke()
```

- `result` is of type [UserResponse](./src/definitions/UserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-readUser2) in API Explorer.


## Update/Replace User

<table><tr><td>HTTP Method</td><td><code>PUT</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users/{id}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users(id).put(user)
await rc.revoke()
```
- Parameter `user` is of type [User](./src/definitions/User.ts)
- `result` is of type [UserResponse](./src/definitions/UserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-replaceUser2) in API Explorer.


## Delete User

<table><tr><td>HTTP Method</td><td><code>DELETE</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users/{id}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users(id).delete()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-deleteUser2) in API Explorer.


## Update/Patch User

<table><tr><td>HTTP Method</td><td><code>PATCH</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/Users/{id}</code></td></tr><tr><td>Rate Limit Group</td><td><code>Heavy</code></td></tr><tr><td>App Permission</td><td><code>EditAccounts</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Users(id).patch(userPatch)
await rc.revoke()
```
- Parameter `userPatch` is of type [UserPatch](./src/definitions/UserPatch.ts)
- `result` is of type [UserResponse](./src/definitions/UserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-patchUser2) in API Explorer.


## Check Health

<table><tr><td>HTTP Method</td><td><code>GET</code></td></tr><tr><td>Endpoint</td><td><code>/scim/v2/health</code></td></tr><tr><td>Rate Limit Group</td><td><code>NoThrottling</code></td></tr><tr><td>App Permission</td><td><code>N/A</code></td></tr><tr><td>User Permission</td><td><code>N/A</code></td></tr></table>

```ts
const rc = new RestClient(clientId, clientSecret, serverURL)
await rc.authorize(username, extension, password)
const result = await rc.Scim(version).Health().get()
await rc.revoke()
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-checkHealth2) in API Explorer.