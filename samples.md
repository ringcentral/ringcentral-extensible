# RingCentral TypeScript SDK Code Samples


## Get API Versions

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi`
Rate Limit Group|`NoThrottling`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi().list(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GetVersionsResponse](./packages/core/definitions/GetVersionsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersions) in API Explorer.


## Revoke Token

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/oauth/revoke`
Rate Limit Group|`Auth`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi().oauth().revoke().post(revokeTokenRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `revokeTokenRequest` is of type [RevokeTokenRequest](./packages/core/definitions/RevokeTokenRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-2.0-revokeToken) in API Explorer.


## Get Token

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/oauth/token`
Rate Limit Group|`Auth`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi().oauth().token().post(getTokenRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `getTokenRequest` is of type [GetTokenRequest](./packages/core/definitions/GetTokenRequest.ts)
- `result` is of type [TokenInfo](./packages/core/definitions/TokenInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-2.0-getToken) in API Explorer.


## Get Version Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}`
Rate Limit Group|`NoThrottling`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GetVersionResponse](./packages/core/definitions/GetVersionResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersion) in API Explorer.


## Get Account Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GetAccountInfoResponse](./packages/core/definitions/GetAccountInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountInfo) in API Explorer.


## Send A2P SMS

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/a2p-sms/batch`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).a2pSms().batch().post(messageBatchCreateRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `messageBatchCreateRequest` is of type [MessageBatchCreateRequest](./packages/core/definitions/MessageBatchCreateRequest.ts)
- `result` is of type [MessageBatchResponse](./packages/core/definitions/MessageBatchResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-createA2PSMS) in API Explorer.


## Get A2P SMS Batch

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/a2p-sms/batch/{batchId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).a2pSms().batch(batchId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [MessageBatchResponse](./packages/core/definitions/MessageBatchResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-readA2PBatch) in API Explorer.


## Get A2P SMS List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/a2p-sms/messages`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).a2pSms().messages().list(listA2PsmsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listA2PsmsParameters` is of type [ListA2PsmsParameters](./packages/core/definitions/ListA2PsmsParameters.ts)
- `result` is of type [MessageListResponse](./packages/core/definitions/MessageListResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-listA2PSMS) in API Explorer.


## Get A2P SMS

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/a2p-sms/messages/{messageId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).a2pSms().messages(messageId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [MessageDetailsResponse](./packages/core/definitions/MessageDetailsResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-readA2PSMS) in API Explorer.


## Get Opted Out Numbers

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/a2p-sms/opt-outs`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).a2pSms().optOuts().get(readA2PsmsOptOutsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readA2PsmsOptOutsParameters` is of type [ReadA2PsmsOptOutsParameters](./packages/core/definitions/ReadA2PsmsOptOutsParameters.ts)
- `result` is of type [OptOutListResponse](./packages/core/definitions/OptOutListResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-readA2PSMSOptOuts) in API Explorer.


## Get Company Active Calls

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/active-calls`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).activeCalls().get(listCompanyActiveCallsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listCompanyActiveCallsParameters` is of type [ListCompanyActiveCallsParameters](./packages/core/definitions/ListCompanyActiveCallsParameters.ts)
- `result` is of type [CompanyActiveCallsResponse](./packages/core/definitions/CompanyActiveCallsResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-listCompanyActiveCalls) in API Explorer.


## Create Company Call Handling Rule

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/answering-rule`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).answeringRule().post(companyAnsweringRuleRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `companyAnsweringRuleRequest` is of type [CompanyAnsweringRuleRequest](./packages/core/definitions/CompanyAnsweringRuleRequest.ts)
- `result` is of type [CompanyAnsweringRuleInfo](./packages/core/definitions/CompanyAnsweringRuleInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-createCompanyAnsweringRule) in API Explorer.


## Get Company Call Handling Rule List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/answering-rule`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).answeringRule().list(listCompanyAnsweringRulesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listCompanyAnsweringRulesParameters` is of type [ListCompanyAnsweringRulesParameters](./packages/core/definitions/ListCompanyAnsweringRulesParameters.ts)
- `result` is of type [CompanyAnsweringRuleList](./packages/core/definitions/CompanyAnsweringRuleList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-listCompanyAnsweringRules) in API Explorer.


## Get Company Call Handling Rule

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).answeringRule(ruleId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CompanyAnsweringRuleInfo](./packages/core/definitions/CompanyAnsweringRuleInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-readCompanyAnsweringRule) in API Explorer.


## Update Company Call Handling Rule

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).answeringRule(ruleId).put(companyAnsweringRuleUpdate, restRequestConfig);
await rc.revoke();
```
- Parameter `companyAnsweringRuleUpdate` is of type [CompanyAnsweringRuleUpdate](./packages/core/definitions/CompanyAnsweringRuleUpdate.ts)
- `result` is of type [CompanyAnsweringRuleInfo](./packages/core/definitions/CompanyAnsweringRuleInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-updateCompanyAnsweringRule) in API Explorer.


## Delete Company Call Handling Rule

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).answeringRule(ruleId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-deleteCompanyAnsweringRule) in API Explorer.


## Get Account Business Address

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/business-address`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).businessAddress().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [AccountBusinessAddressResource](./packages/core/definitions/AccountBusinessAddressResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountBusinessAddress) in API Explorer.


## Update Company Business Address

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/business-address`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).businessAddress().put(modifyAccountBusinessAddressRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `modifyAccountBusinessAddressRequest` is of type [ModifyAccountBusinessAddressRequest](./packages/core/definitions/ModifyAccountBusinessAddressRequest.ts)
- `result` is of type [AccountBusinessAddressResource](./packages/core/definitions/AccountBusinessAddressResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Company-updateAccountBusinessAddress) in API Explorer.


## Get Company Business Hours

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/business-hours`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).businessHours().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CompanyBusinessHours](./packages/core/definitions/CompanyBusinessHours.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-readCompanyBusinessHours) in API Explorer.


## Update Company Business Hours

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/business-hours`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).businessHours().put(companyBusinessHoursUpdateRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `companyBusinessHoursUpdateRequest` is of type [CompanyBusinessHoursUpdateRequest](./packages/core/definitions/CompanyBusinessHoursUpdateRequest.ts)
- `result` is of type [CompanyBusinessHours](./packages/core/definitions/CompanyBusinessHours.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-updateCompanyBusinessHours) in API Explorer.


## Get Company Call Log Records

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-log`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`FullCompanyCallLog`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callLog().list(readCompanyCallLogParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readCompanyCallLogParameters` is of type [ReadCompanyCallLogParameters](./packages/core/definitions/ReadCompanyCallLogParameters.ts)
- `result` is of type [AccountCallLogResponse](./packages/core/definitions/AccountCallLogResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallLog) in API Explorer.


## Sync Company Call Log

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-log-sync`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callLogSync().get(syncAccountCallLogParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `syncAccountCallLogParameters` is of type [SyncAccountCallLogParameters](./packages/core/definitions/SyncAccountCallLogParameters.ts)
- `result` is of type [AccountCallLogSyncResponse](./packages/core/definitions/AccountCallLogSyncResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-syncAccountCallLog) in API Explorer.


## Get Company Call Log Record(s)

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-log/{callRecordId}`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`FullCompanyCallLog`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callLog(callRecordId).get(readCompanyCallRecordParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readCompanyCallRecordParameters` is of type [ReadCompanyCallRecordParameters](./packages/core/definitions/ReadCompanyCallRecordParameters.ts)
- `result` is of type [CompanyCallLogRecord](./packages/core/definitions/CompanyCallLogRecord.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallRecord) in API Explorer.


## Create Call Monitoring Group

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/call-monitoring-groups`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`Groups`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups().post(createCallMonitoringGroupRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createCallMonitoringGroupRequest` is of type [CreateCallMonitoringGroupRequest](./packages/core/definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type [CallMonitoringGroup](./packages/core/definitions/CallMonitoringGroup.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-createCallMonitoringGroup) in API Explorer.


## Get Call Monitoring Groups List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-monitoring-groups`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups().get(listCallMonitoringGroupsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listCallMonitoringGroupsParameters` is of type [ListCallMonitoringGroupsParameters](./packages/core/definitions/ListCallMonitoringGroupsParameters.ts)
- `result` is of type [CallMonitoringGroups](./packages/core/definitions/CallMonitoringGroups.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-listCallMonitoringGroups) in API Explorer.


## Updates Call Monitoring Group

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`Groups`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups(groupId).put(createCallMonitoringGroupRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createCallMonitoringGroupRequest` is of type [CreateCallMonitoringGroupRequest](./packages/core/definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type [CallMonitoringGroup](./packages/core/definitions/CallMonitoringGroup.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-updateCallMonitoringGroup) in API Explorer.


## Delete Call Monitoring Group

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`Groups`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups(groupId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-deleteCallMonitoringGroup) in API Explorer.


## Update Call Monitoring Group List

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`Groups`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups(groupId).bulkAssign().post(callMonitoringBulkAssign, restRequestConfig);
await rc.revoke();
```
- Parameter `callMonitoringBulkAssign` is of type [CallMonitoringBulkAssign](./packages/core/definitions/CallMonitoringBulkAssign.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-updateCallMonitoringGroupList) in API Explorer.


## Get Call Monitoring Group Member List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/members`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups(groupId).members().get(listCallMonitoringGroupMembersParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listCallMonitoringGroupMembersParameters` is of type [ListCallMonitoringGroupMembersParameters](./packages/core/definitions/ListCallMonitoringGroupMembersParameters.ts)
- `result` is of type [CallMonitoringGroupMemberList](./packages/core/definitions/CallMonitoringGroupMemberList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-listCallMonitoringGroupMembers) in API Explorer.


## Get Call Queue List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-queues`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callQueues().list(listCallQueuesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listCallQueuesParameters` is of type [ListCallQueuesParameters](./packages/core/definitions/ListCallQueuesParameters.ts)
- `result` is of type [CallQueues](./packages/core/definitions/CallQueues.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listCallQueues) in API Explorer.


## Get Call Queue

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-queues/{groupId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CallQueueDetails](./packages/core/definitions/CallQueueDetails.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-readCallQueueInfo) in API Explorer.


## Update Call Queue

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/call-queues/{groupId}`
Rate Limit Group|`Light`
App Permission|`EditExtensions`
User Permission|`EditUserInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).put(callQueueUpdateDetails, restRequestConfig);
await rc.revoke();
```
- Parameter `callQueueUpdateDetails` is of type [CallQueueUpdateDetails](./packages/core/definitions/CallQueueUpdateDetails.ts)
- `result` is of type [CallQueueDetails](./packages/core/definitions/CallQueueDetails.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-updateCallQueueInfo) in API Explorer.


## Assign Multiple Call Queue Members

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/call-queues/{groupId}/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`Groups`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).bulkAssign().post(callQueueBulkAssignResource, restRequestConfig);
await rc.revoke();
```
- Parameter `callQueueBulkAssignResource` is of type [CallQueueBulkAssignResource](./packages/core/definitions/CallQueueBulkAssignResource.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-assignMultipleCallQueueMembers) in API Explorer.


## Get Call Queue Members

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-queues/{groupId}/members`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).members().get(listCallQueueMembersParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listCallQueueMembersParameters` is of type [ListCallQueueMembersParameters](./packages/core/definitions/ListCallQueueMembersParameters.ts)
- `result` is of type [CallQueueMembers](./packages/core/definitions/CallQueueMembers.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listCallQueueMembers) in API Explorer.


## Get Call Queue Presence

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-queues/{groupId}/presence`
Rate Limit Group|`Light`
App Permission|`ReadPresence`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).presence().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CallQueuePresence](./packages/core/definitions/CallQueuePresence.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readCallQueuePresence) in API Explorer.


## Update Call Queue Presence

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/call-queues/{groupId}/presence`
Rate Limit Group|`Medium`
App Permission|`EditPresence`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).presence().put(callQueueUpdatePresence, restRequestConfig);
await rc.revoke();
```
- Parameter `callQueueUpdatePresence` is of type [CallQueueUpdatePresence](./packages/core/definitions/CallQueueUpdatePresence.ts)
- `result` is of type [CallQueuePresence](./packages/core/definitions/CallQueuePresence.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateCallQueuePresence) in API Explorer.


## Get Call Recording Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-recording`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callRecording().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CallRecordingSettingsResource](./packages/core/definitions/CallRecordingSettingsResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-readCallRecordingSettings) in API Explorer.


## Update Call Recording Settings

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/call-recording`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callRecording().put(callRecordingSettingsResource, restRequestConfig);
await rc.revoke();
```
- Parameter `callRecordingSettingsResource` is of type [CallRecordingSettingsResource](./packages/core/definitions/CallRecordingSettingsResource.ts)
- `result` is of type [CallRecordingSettingsResource](./packages/core/definitions/CallRecordingSettingsResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-updateCallRecordingSettings) in API Explorer.


## Update Call Recording Extension List

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/call-recording/bulk-assign`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callRecording().bulkAssign().post(bulkAccountCallRecordingsResource, restRequestConfig);
await rc.revoke();
```
- Parameter `bulkAccountCallRecordingsResource` is of type [BulkAccountCallRecordingsResource](./packages/core/definitions/BulkAccountCallRecordingsResource.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-updateCallRecordingExtensionList) in API Explorer.


## Get Call Recording Custom Greeting List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-recording/custom-greetings`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callRecording().customGreetings().get(listCallRecordingCustomGreetingsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listCallRecordingCustomGreetingsParameters` is of type [ListCallRecordingCustomGreetingsParameters](./packages/core/definitions/ListCallRecordingCustomGreetingsParameters.ts)
- `result` is of type [CallRecordingCustomGreetings](./packages/core/definitions/CallRecordingCustomGreetings.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-listCallRecordingCustomGreetings) in API Explorer.


## Delete Call Recording Custom Greeting

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/call-recording/custom-greetings/{greetingId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callRecording().customGreetings(greetingId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-deleteCallRecordingCustomGreeting) in API Explorer.


## Get Call Recording Extension List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-recording/extensions`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).callRecording().extensions().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CallRecordingExtensions](./packages/core/definitions/CallRecordingExtensions.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-listCallRecordingExtensions) in API Explorer.


## Create Custom Field

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/custom-fields`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`Users`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).customFields().post(customFieldCreateRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `customFieldCreateRequest` is of type [CustomFieldCreateRequest](./packages/core/definitions/CustomFieldCreateRequest.ts)
- `result` is of type [CustomFieldResource](./packages/core/definitions/CustomFieldResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-createCustomField) in API Explorer.


## Get Custom Field List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/custom-fields`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).customFields().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CustomFieldsResource](./packages/core/definitions/CustomFieldsResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-listCustomFields) in API Explorer.


## Update Сustom Field

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/custom-fields/{fieldId}`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`Users`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).customFields(fieldId).put(customFieldUpdateRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `customFieldUpdateRequest` is of type [CustomFieldUpdateRequest](./packages/core/definitions/CustomFieldUpdateRequest.ts)
- `result` is of type [CustomFieldResource](./packages/core/definitions/CustomFieldResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-updateCustomField) in API Explorer.


## Delete Custom Field

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/custom-fields/{fieldId}`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`Users`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).customFields(fieldId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-deleteCustomField) in API Explorer.


## Get Device

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/device/{deviceId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyDevices`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).device(deviceId).get(readDeviceParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readDeviceParameters` is of type [ReadDeviceParameters](./packages/core/definitions/ReadDeviceParameters.ts)
- `result` is of type [GetDeviceInfoResponse](./packages/core/definitions/GetDeviceInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Devices-readDevice) in API Explorer.


## Update Device

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/device/{deviceId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyDevices`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).device(deviceId).put(accountDeviceUpdate, updateDeviceParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `accountDeviceUpdate` is of type [AccountDeviceUpdate](./packages/core/definitions/AccountDeviceUpdate.ts)
- Parameter `updateDeviceParameters` is of type [UpdateDeviceParameters](./packages/core/definitions/UpdateDeviceParameters.ts)
- `result` is of type [GetDeviceInfoResponse](./packages/core/definitions/GetDeviceInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Devices-updateDevice) in API Explorer.


## Get Company Directory Entries

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/directory/entries`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).directory().entries().list(listDirectoryEntriesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listDirectoryEntriesParameters` is of type [ListDirectoryEntriesParameters](./packages/core/definitions/ListDirectoryEntriesParameters.ts)
- `result` is of type [DirectoryResource](./packages/core/definitions/DirectoryResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-listDirectoryEntries) in API Explorer.


## Search Company Directory Entries

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/directory/entries/search`
Rate Limit Group|`Heavy`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).directory().entries().search().post(searchDirectoryEntriesRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `searchDirectoryEntriesRequest` is of type [SearchDirectoryEntriesRequest](./packages/core/definitions/SearchDirectoryEntriesRequest.ts)
- `result` is of type [DirectoryResource](./packages/core/definitions/DirectoryResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-searchDirectoryEntries) in API Explorer.


## Get Corporate Directory Entry

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/directory/entries/{entryId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).directory().entries(entryId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [ContactResource](./packages/core/definitions/ContactResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readDirectoryEntry) in API Explorer.


## Get Account Federation

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/directory/federation`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).directory().federation().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [FederationResource](./packages/core/definitions/FederationResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readAccountFederation) in API Explorer.


## Get Device List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().devices().get(listDevicesAutomaticLocationUpdatesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listDevicesAutomaticLocationUpdatesParameters` is of type [ListDevicesAutomaticLocationUpdatesParameters](./packages/core/definitions/ListDevicesAutomaticLocationUpdatesParameters.ts)
- `result` is of type [ListDevicesAutomaticLocationUpdates](./packages/core/definitions/ListDevicesAutomaticLocationUpdates.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listDevicesAutomaticLocationUpdates) in API Explorer.


## Enable Automatic Location Updates for Devices

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().devices().bulkAssign().post(assignMultipleDevicesAutomaticLocationUpdates, restRequestConfig);
await rc.revoke();
```
- Parameter `assignMultipleDevicesAutomaticLocationUpdates` is of type [AssignMultipleDevicesAutomaticLocationUpdates](./packages/core/definitions/AssignMultipleDevicesAutomaticLocationUpdates.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-assignMultipleDevicesAutomaticLocationUpdates) in API Explorer.


## Get Network Map

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks().list(restRequestConfig);
await rc.revoke();
```

- `result` is of type [NetworksList](./packages/core/definitions/NetworksList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listNetworks) in API Explorer.


## Create Network

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks().post(createNetworkRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createNetworkRequest` is of type [CreateNetworkRequest](./packages/core/definitions/CreateNetworkRequest.ts)
- `result` is of type [NetworkInfo](./packages/core/definitions/NetworkInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createNetwork) in API Explorer.


## Get Network

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks(networkId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [NetworkInfo](./packages/core/definitions/NetworkInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readNetwork) in API Explorer.


## Update Network

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks(networkId).put(updateNetworkRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `updateNetworkRequest` is of type [UpdateNetworkRequest](./packages/core/definitions/UpdateNetworkRequest.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateNetwork) in API Explorer.


## Delete Network

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks(networkId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteNetwork) in API Explorer.


## Get Account Switch List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches().list(listAccountSwitchesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listAccountSwitchesParameters` is of type [ListAccountSwitchesParameters](./packages/core/definitions/ListAccountSwitchesParameters.ts)
- `result` is of type [SwitchesList](./packages/core/definitions/SwitchesList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listAccountSwitches) in API Explorer.


## Create Switch

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches().post(createSwitchInfo, restRequestConfig);
await rc.revoke();
```
- Parameter `createSwitchInfo` is of type [CreateSwitchInfo](./packages/core/definitions/CreateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./packages/core/definitions/SwitchInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createSwitch) in API Explorer.


## Create Multiple Switches

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-create`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switchesBulkCreate().post(createMultipleSwitchesRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createMultipleSwitchesRequest` is of type [CreateMultipleSwitchesRequest](./packages/core/definitions/CreateMultipleSwitchesRequest.ts)
- `result` is of type [CreateMultipleSwitchesResponse](./packages/core/definitions/CreateMultipleSwitchesResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createMultipleSwitches) in API Explorer.


## Update Multiple Switches

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-update`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switchesBulkUpdate().post(updateMultipleSwitchesRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `updateMultipleSwitchesRequest` is of type [UpdateMultipleSwitchesRequest](./packages/core/definitions/UpdateMultipleSwitchesRequest.ts)
- `result` is of type [UpdateMultipleSwitchesResponse](./packages/core/definitions/UpdateMultipleSwitchesResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateMultipleSwitches) in API Explorer.


## Validate Multiple Switches

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-validate`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switchesBulkValidate().post(validateMultipleSwitchesRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `validateMultipleSwitchesRequest` is of type [ValidateMultipleSwitchesRequest](./packages/core/definitions/ValidateMultipleSwitchesRequest.ts)
- `result` is of type [ValidateMultipleSwitchesResponse](./packages/core/definitions/ValidateMultipleSwitchesResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-validateMultipleSwitches) in API Explorer.


## Get Switch

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches(switchId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [SwitchInfo](./packages/core/definitions/SwitchInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readSwitch) in API Explorer.


## Update Switch

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches(switchId).put(updateSwitchInfo, restRequestConfig);
await rc.revoke();
```
- Parameter `updateSwitchInfo` is of type [UpdateSwitchInfo](./packages/core/definitions/UpdateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./packages/core/definitions/SwitchInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateSwitch) in API Explorer.


## Delete Switch

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches(switchId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteSwitch) in API Explorer.


## Get Emergency Map Configuration Task

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/tasks/{taskId}`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().tasks(taskId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [AutomaticLocationUpdatesTaskInfo](./packages/core/definitions/AutomaticLocationUpdatesTaskInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readAutomaticLocationUpdatesTask) in API Explorer.


## Get User List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/users`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().users().get(listAutomaticLocationUpdatesUsersParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listAutomaticLocationUpdatesUsersParameters` is of type [ListAutomaticLocationUpdatesUsersParameters](./packages/core/definitions/ListAutomaticLocationUpdatesUsersParameters.ts)
- `result` is of type [AutomaticLocationUpdatesUserList](./packages/core/definitions/AutomaticLocationUpdatesUserList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listAutomaticLocationUpdatesUsers) in API Explorer.


## Enable Automatic Location Updates for Users

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/users/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().users().bulkAssign().post(bulkAssignAutomaticLocationUpdatesUsers, restRequestConfig);
await rc.revoke();
```
- Parameter `bulkAssignAutomaticLocationUpdatesUsers` is of type [BulkAssignAutomaticLocationUpdatesUsers](./packages/core/definitions/BulkAssignAutomaticLocationUpdatesUsers.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-assignMultipleAutomaticaLocationUpdatesUsers) in API Explorer.


## Get Wireless Point List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints().list(listWirelessPointsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listWirelessPointsParameters` is of type [ListWirelessPointsParameters](./packages/core/definitions/ListWirelessPointsParameters.ts)
- `result` is of type [WirelessPointsList](./packages/core/definitions/WirelessPointsList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listWirelessPoints) in API Explorer.


## Create Wireless Point

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints().post(createWirelessPoint, restRequestConfig);
await rc.revoke();
```
- Parameter `createWirelessPoint` is of type [CreateWirelessPoint](./packages/core/definitions/CreateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./packages/core/definitions/WirelessPointInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createWirelessPoint) in API Explorer.


## Create Multiple Wireless Points

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-create`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPointsBulkCreate().post(createMultipleWirelessPointsRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createMultipleWirelessPointsRequest` is of type [CreateMultipleWirelessPointsRequest](./packages/core/definitions/CreateMultipleWirelessPointsRequest.ts)
- `result` is of type [CreateMultipleWirelessPointsResponse](./packages/core/definitions/CreateMultipleWirelessPointsResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createMultipleWirelessPoints) in API Explorer.


## Update Multiple Wireless Points

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-update`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPointsBulkUpdate().post(updateMultipleWirelessPointsRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `updateMultipleWirelessPointsRequest` is of type [UpdateMultipleWirelessPointsRequest](./packages/core/definitions/UpdateMultipleWirelessPointsRequest.ts)
- `result` is of type [UpdateMultipleWirelessPointsResponse](./packages/core/definitions/UpdateMultipleWirelessPointsResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateMultipleWirelessPoints) in API Explorer.


## Validate Multiple Wireless Points

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-validate`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPointsBulkValidate().post(validateMultipleWirelessPointsRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `validateMultipleWirelessPointsRequest` is of type [ValidateMultipleWirelessPointsRequest](./packages/core/definitions/ValidateMultipleWirelessPointsRequest.ts)
- `result` is of type [ValidateMultipleWirelessPointsResponse](./packages/core/definitions/ValidateMultipleWirelessPointsResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-validateMultipleWirelessPoints) in API Explorer.


## Get Wireless Point

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints(pointId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [WirelessPointInfo](./packages/core/definitions/WirelessPointInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readWirelessPoint) in API Explorer.


## Update Wireless Point

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints(pointId).put(updateWirelessPoint, restRequestConfig);
await rc.revoke();
```
- Parameter `updateWirelessPoint` is of type [UpdateWirelessPoint](./packages/core/definitions/UpdateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./packages/core/definitions/WirelessPointInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateWirelessPoint) in API Explorer.


## Delete Wireless Point

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints(pointId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteWirelessPoint) in API Explorer.


## Add Emergency Location

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-locations`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyLocations().post(emergencyLocationInfoRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `emergencyLocationInfoRequest` is of type [EmergencyLocationInfoRequest](./packages/core/definitions/EmergencyLocationInfoRequest.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createEmergencyLocation) in API Explorer.


## Get Emergency Location List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-locations`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyLocations().list(listEmergencyLocationsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listEmergencyLocationsParameters` is of type [ListEmergencyLocationsParameters](./packages/core/definitions/ListEmergencyLocationsParameters.ts)
- `result` is of type [EmergencyLocationList](./packages/core/definitions/EmergencyLocationList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listEmergencyLocations) in API Explorer.


## Get Emergency Location

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-locations/{locationId}`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyLocations(locationId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [EmergencyLocationInfo](./packages/core/definitions/EmergencyLocationInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readEmergencyLocation) in API Explorer.


## Update Emergency Location

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/emergency-locations/{locationId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).emergencyLocations(locationId).put(emergencyLocationInfoRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `emergencyLocationInfoRequest` is of type [EmergencyLocationInfoRequest](./packages/core/definitions/EmergencyLocationInfoRequest.ts)
- `result` is of type [EmergencyLocationInfo](./packages/core/definitions/EmergencyLocationInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateEmergencyLocation) in API Explorer.


## Get Extension List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension().list(listExtensionsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listExtensionsParameters` is of type [ListExtensionsParameters](./packages/core/definitions/ListExtensionsParameters.ts)
- `result` is of type [GetExtensionListResponse](./packages/core/definitions/GetExtensionListResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-listExtensions) in API Explorer.


## Create Extension

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`AddRemoveUsers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension().post(extensionCreationRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `extensionCreationRequest` is of type [ExtensionCreationRequest](./packages/core/definitions/ExtensionCreationRequest.ts)
- `result` is of type [ExtensionCreationResponse](./packages/core/definitions/ExtensionCreationResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-createExtension) in API Explorer.


## Get Extension

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GetExtensionInfoResponse](./packages/core/definitions/GetExtensionInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readExtension) in API Explorer.


## Update Extension

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserInfo OR EditUserCredentials`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).put(extensionUpdateRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `extensionUpdateRequest` is of type [ExtensionUpdateRequest](./packages/core/definitions/ExtensionUpdateRequest.ts)
- `result` is of type [GetExtensionInfoResponse](./packages/core/definitions/GetExtensionInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateExtension) in API Explorer.


## Delete Extension

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`AddRemoveUsers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).delete(deleteExtensionParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `deleteExtensionParameters` is of type [DeleteExtensionParameters](./packages/core/definitions/DeleteExtensionParameters.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-deleteExtension) in API Explorer.


## Get User Active Calls

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).activeCalls().get(listExtensionActiveCallsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listExtensionActiveCallsParameters` is of type [ListExtensionActiveCallsParameters](./packages/core/definitions/ListExtensionActiveCallsParameters.ts)
- `result` is of type [UserActiveCallsResponse](./packages/core/definitions/UserActiveCallsResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-listExtensionActiveCalls) in API Explorer.


## Address Book Synchronization

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book-sync`
Rate Limit Group|`Heavy`
App Permission|`ReadContacts`
User Permission|`ReadPersonalContacts`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBookSync().get(syncAddressBookParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `syncAddressBookParameters` is of type [SyncAddressBookParameters](./packages/core/definitions/SyncAddressBookParameters.ts)
- `result` is of type [AddressBookSync](./packages/core/definitions/AddressBookSync.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-syncAddressBook) in API Explorer.


## Get Contact List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact`
Rate Limit Group|`Heavy`
App Permission|`ReadContacts`
User Permission|`ReadPersonalContacts`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact().list(listContactsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listContactsParameters` is of type [ListContactsParameters](./packages/core/definitions/ListContactsParameters.ts)
- `result` is of type [ContactList](./packages/core/definitions/ContactList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-listContacts) in API Explorer.


## Create Contact

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact`
Rate Limit Group|`Heavy`
App Permission|`Contacts`
User Permission|`EditPersonalContacts`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact().post(personalContactRequest, createContactParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `personalContactRequest` is of type [PersonalContactRequest](./packages/core/definitions/PersonalContactRequest.ts)
- Parameter `createContactParameters` is of type [CreateContactParameters](./packages/core/definitions/CreateContactParameters.ts)
- `result` is of type [PersonalContactResource](./packages/core/definitions/PersonalContactResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-createContact) in API Explorer.


## Get Contact

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`
Rate Limit Group|`Heavy`
App Permission|`ReadContacts`
User Permission|`ReadPersonalContacts`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact(contactId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [PersonalContactResource](./packages/core/definitions/PersonalContactResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-readContact) in API Explorer.


## Update Contact

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`
Rate Limit Group|`Heavy`
App Permission|`Contacts`
User Permission|`EditPersonalContacts`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact(contactId).put(personalContactRequest, updateContactParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `personalContactRequest` is of type [PersonalContactRequest](./packages/core/definitions/PersonalContactRequest.ts)
- Parameter `updateContactParameters` is of type [UpdateContactParameters](./packages/core/definitions/UpdateContactParameters.ts)
- `result` is of type [PersonalContactResource](./packages/core/definitions/PersonalContactResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateContact) in API Explorer.


## Delete Contact

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`
Rate Limit Group|`Heavy`
App Permission|`Contacts`
User Permission|`EditPersonalContacts`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact(contactId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-deleteContact) in API Explorer.


## Get Call Handling Rules

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadUserAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule().list(listAnsweringRulesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listAnsweringRulesParameters` is of type [ListAnsweringRulesParameters](./packages/core/definitions/ListAnsweringRulesParameters.ts)
- `result` is of type [UserAnsweringRuleList](./packages/core/definitions/UserAnsweringRuleList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-listAnsweringRules) in API Explorer.


## Create Call Handling Rule

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule().post(createAnsweringRuleRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createAnsweringRuleRequest` is of type [CreateAnsweringRuleRequest](./packages/core/definitions/CreateAnsweringRuleRequest.ts)
- `result` is of type [CustomAnsweringRuleInfo](./packages/core/definitions/CustomAnsweringRuleInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-createAnsweringRule) in API Explorer.


## Get Call Handling Rule

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule(ruleId).get(readAnsweringRuleParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readAnsweringRuleParameters` is of type [ReadAnsweringRuleParameters](./packages/core/definitions/ReadAnsweringRuleParameters.ts)
- `result` is of type [AnsweringRuleInfo](./packages/core/definitions/AnsweringRuleInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-readAnsweringRule) in API Explorer.


## Update Call Handling Rule

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule(ruleId).put(updateAnsweringRuleRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `updateAnsweringRuleRequest` is of type [UpdateAnsweringRuleRequest](./packages/core/definitions/UpdateAnsweringRuleRequest.ts)
- `result` is of type [AnsweringRuleInfo](./packages/core/definitions/AnsweringRuleInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-updateAnsweringRule) in API Explorer.


## Delete Call Handling Rule

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule(ruleId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-deleteAnsweringRule) in API Explorer.


## Get Authorization Profile

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).authzProfile().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [AuthProfileResource](./packages/core/definitions/AuthProfileResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-readAuthorizationProfile) in API Explorer.


## Check User Permission

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile/check`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).authzProfile().check().get(checkUserPermissionParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `checkUserPermissionParameters` is of type [CheckUserPermissionParameters](./packages/core/definitions/CheckUserPermissionParameters.ts)
- `result` is of type [AuthProfileCheckResource](./packages/core/definitions/AuthProfileCheckResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-checkUserPermission) in API Explorer.


## Get User Business Hours

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).businessHours().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GetUserBusinessHoursResponse](./packages/core/definitions/GetUserBusinessHoursResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-readUserBusinessHours) in API Explorer.


## Update User Business Hours

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).businessHours().put(userBusinessHoursUpdateRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `userBusinessHoursUpdateRequest` is of type [UserBusinessHoursUpdateRequest](./packages/core/definitions/UserBusinessHoursUpdateRequest.ts)
- `result` is of type [UserBusinessHoursUpdateResponse](./packages/core/definitions/UserBusinessHoursUpdateResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-updateUserBusinessHours) in API Explorer.


## Get User Call Log Records

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLog().list(readUserCallLogParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readUserCallLogParameters` is of type [ReadUserCallLogParameters](./packages/core/definitions/ReadUserCallLogParameters.ts)
- `result` is of type [UserCallLogResponse](./packages/core/definitions/UserCallLogResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallLog) in API Explorer.


## Delete User Call Log

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log`
Rate Limit Group|`Heavy`
App Permission|`EditCallLog`
User Permission|`EditCallLog`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLog().delete(deleteUserCallLogParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `deleteUserCallLogParameters` is of type [DeleteUserCallLogParameters](./packages/core/definitions/DeleteUserCallLogParameters.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-deleteUserCallLog) in API Explorer.


## Sync User Call Log

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log-sync`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLogSync().get(syncUserCallLogParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `syncUserCallLogParameters` is of type [SyncUserCallLogParameters](./packages/core/definitions/SyncUserCallLogParameters.ts)
- `result` is of type [CallLogSync](./packages/core/definitions/CallLogSync.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-syncUserCallLog) in API Explorer.


## Get User Call Record

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLog(callRecordId).get(readUserCallRecordParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readUserCallRecordParameters` is of type [ReadUserCallRecordParameters](./packages/core/definitions/ReadUserCallRecordParameters.ts)
- `result` is of type [UserCallLogRecord](./packages/core/definitions/UserCallLogRecord.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallRecord) in API Explorer.


## Get Agent’s Call Queue Presence

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queue-presence`
Rate Limit Group|`Light`
App Permission|`ReadPresence`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callQueuePresence().get(readExtensionCallQueuePresenceParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readExtensionCallQueuePresenceParameters` is of type [ReadExtensionCallQueuePresenceParameters](./packages/core/definitions/ReadExtensionCallQueuePresenceParameters.ts)
- `result` is of type [ExtensionCallQueuePresenceList](./packages/core/definitions/ExtensionCallQueuePresenceList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readExtensionCallQueuePresence) in API Explorer.


## Update Call Queue Presence

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queue-presence`
Rate Limit Group|`Medium`
App Permission|`EditPresence`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callQueuePresence().put(extensionCallQueueUpdatePresenceList, restRequestConfig);
await rc.revoke();
```
- Parameter `extensionCallQueueUpdatePresenceList` is of type [ExtensionCallQueueUpdatePresenceList](./packages/core/definitions/ExtensionCallQueueUpdatePresenceList.ts)
- `result` is of type [ExtensionCallQueuePresenceList](./packages/core/definitions/ExtensionCallQueuePresenceList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateExtensionCallQueuePresence) in API Explorer.


## Update User Call Queues

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queues`
Rate Limit Group|`Medium`
App Permission|`Accounts`
User Permission|`JoinLeaveCallQueue`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callQueues().put(userCallQueues, restRequestConfig);
await rc.revoke();
```
- Parameter `userCallQueues` is of type [UserCallQueues](./packages/core/definitions/UserCallQueues.ts)
- `result` is of type [UserCallQueues](./packages/core/definitions/UserCallQueues.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-updateUserCallQueues) in API Explorer.


## Get Caller Blocking Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadBlockedNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CallerBlockingSettings](./packages/core/definitions/CallerBlockingSettings.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-readCallerBlockingSettings) in API Explorer.


## Update Caller Blocking Settings

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking`
Rate Limit Group|`Light`
App Permission|`EditExtensions`
User Permission|`EditBlockedNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().put(callerBlockingSettingsUpdate, restRequestConfig);
await rc.revoke();
```
- Parameter `callerBlockingSettingsUpdate` is of type [CallerBlockingSettingsUpdate](./packages/core/definitions/CallerBlockingSettingsUpdate.ts)
- `result` is of type [CallerBlockingSettings](./packages/core/definitions/CallerBlockingSettings.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-updateCallerBlockingSettings) in API Explorer.


## Get Blocked/Allowed Phone Numbers

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadBlockedNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers().list(listBlockedAllowedNumbersParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listBlockedAllowedNumbersParameters` is of type [ListBlockedAllowedNumbersParameters](./packages/core/definitions/ListBlockedAllowedNumbersParameters.ts)
- `result` is of type [BlockedAllowedPhoneNumbersList](./packages/core/definitions/BlockedAllowedPhoneNumbersList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-listBlockedAllowedNumbers) in API Explorer.


## Add Blocked/Allowed Number

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditBlockedNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers().post(addBlockedAllowedPhoneNumber, restRequestConfig);
await rc.revoke();
```
- Parameter `addBlockedAllowedPhoneNumber` is of type [AddBlockedAllowedPhoneNumber](./packages/core/definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type [BlockedAllowedPhoneNumberInfo](./packages/core/definitions/BlockedAllowedPhoneNumberInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-createBlockedAllowedNumber) in API Explorer.


## Get Blocked/Allowed Number

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadBlockedNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers(blockedNumberId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [BlockedAllowedPhoneNumberInfo](./packages/core/definitions/BlockedAllowedPhoneNumberInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-readBlockedAllowedNumber) in API Explorer.


## Delete Blocked/Allowed Number

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditBlockedNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers(blockedNumberId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-deleteBlockedAllowedNumber) in API Explorer.


## Update Blocked/Allowed Number

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditBlockedNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers(blockedNumberId).put(addBlockedAllowedPhoneNumber, restRequestConfig);
await rc.revoke();
```
- Parameter `addBlockedAllowedPhoneNumber` is of type [AddBlockedAllowedPhoneNumber](./packages/core/definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type [BlockedAllowedPhoneNumberInfo](./packages/core/definitions/BlockedAllowedPhoneNumberInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-updateBlockedAllowedNumber) in API Explorer.


## Get Extension Caller ID

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCallerIDSettings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerId().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [ExtensionCallerIdInfo](./packages/core/definitions/ExtensionCallerIdInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readExtensionCallerId) in API Explorer.


## Update Extension Caller ID

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditCallerIDSettings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerId().put(extensionCallerIdInfo, restRequestConfig);
await rc.revoke();
```
- Parameter `extensionCallerIdInfo` is of type [ExtensionCallerIdInfo](./packages/core/definitions/ExtensionCallerIdInfo.ts)
- `result` is of type [ExtensionCallerIdInfo](./packages/core/definitions/ExtensionCallerIdInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateExtensionCallerId) in API Explorer.


## Create Internal Text Message

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager`
Rate Limit Group|`Medium`
App Permission|`InternalMessages`
User Permission|`InternalSMS`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).companyPager().post(createInternalTextMessageRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createInternalTextMessageRequest` is of type [CreateInternalTextMessageRequest](./packages/core/definitions/CreateInternalTextMessageRequest.ts)
- `result` is of type [GetInternalTextMessageInfoResponse](./packages/core/definitions/GetInternalTextMessageInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Pager-Messages-createInternalTextMessage) in API Explorer.


## Get User Conferencing Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`OrganizeConference`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).conferencing().get(readConferencingSettingsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readConferencingSettingsParameters` is of type [ReadConferencingSettingsParameters](./packages/core/definitions/ReadConferencingSettingsParameters.ts)
- `result` is of type [GetConferencingInfoResponse](./packages/core/definitions/GetConferencingInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readConferencingSettings) in API Explorer.


## Update User Conferencing Settings

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`OrganizeConference`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).conferencing().put(updateConferencingInfoRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `updateConferencingInfoRequest` is of type [UpdateConferencingInfoRequest](./packages/core/definitions/UpdateConferencingInfoRequest.ts)
- `result` is of type [GetConferencingInfoResponse](./packages/core/definitions/GetConferencingInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateConferencingSettings) in API Explorer.


## Get Extension Device List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/device`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserDevices`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).device().get(listExtensionDevicesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listExtensionDevicesParameters` is of type [ListExtensionDevicesParameters](./packages/core/definitions/ListExtensionDevicesParameters.ts)
- `result` is of type [GetExtensionDevicesResponse](./packages/core/definitions/GetExtensionDevicesResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Devices-listExtensionDevices) in API Explorer.


## Get Favorite Contact List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite`
Rate Limit Group|`Light`
App Permission|`ReadContacts`
User Permission|`ReadPersonalContacts`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).favorite().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [FavoriteContactList](./packages/core/definitions/FavoriteContactList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-listFavoriteContacts) in API Explorer.


## Update Favorite Contact List

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite`
Rate Limit Group|`Medium`
App Permission|`Contacts`
User Permission|`EditPersonalContacts`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).favorite().put(favoriteCollection, restRequestConfig);
await rc.revoke();
```
- Parameter `favoriteCollection` is of type [FavoriteCollection](./packages/core/definitions/FavoriteCollection.ts)
- `result` is of type [FavoriteContactList](./packages/core/definitions/FavoriteContactList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateFavoriteContactList) in API Explorer.


## Create Fax Message

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax`
Rate Limit Group|`Heavy`
App Permission|`Faxes`
User Permission|`OutboundFaxes`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).fax().post(createFaxMessageRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createFaxMessageRequest` is of type [CreateFaxMessageRequest](./packages/core/definitions/CreateFaxMessageRequest.ts)
- `result` is of type [FaxResponse](./packages/core/definitions/FaxResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Fax-createFaxMessage) in API Explorer.


## Get User Features

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/features`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).features().get(readUserFeaturesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readUserFeaturesParameters` is of type [ReadUserFeaturesParameters](./packages/core/definitions/ReadUserFeaturesParameters.ts)
- `result` is of type [FeatureList](./packages/core/definitions/FeatureList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Features-readUserFeatures) in API Explorer.


## Get Forwarding Number List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserForwardingFlipNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber().list(listForwardingNumbersParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listForwardingNumbersParameters` is of type [ListForwardingNumbersParameters](./packages/core/definitions/ListForwardingNumbersParameters.ts)
- `result` is of type [GetExtensionForwardingNumberListResponse](./packages/core/definitions/GetExtensionForwardingNumberListResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-listForwardingNumbers) in API Explorer.


## Create Forwarding Number

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserForwardingFlipNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber().post(createForwardingNumberRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createForwardingNumberRequest` is of type [CreateForwardingNumberRequest](./packages/core/definitions/CreateForwardingNumberRequest.ts)
- `result` is of type [ForwardingNumberInfo](./packages/core/definitions/ForwardingNumberInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-createForwardingNumber) in API Explorer.


## Get Forwarding Number

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserForwardingFlipNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber(forwardingNumberId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [ForwardingNumberInfo](./packages/core/definitions/ForwardingNumberInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-readForwardingNumber) in API Explorer.


## Update Forwarding Number

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserForwardingFlipNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber(forwardingNumberId).put(updateForwardingNumberRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `updateForwardingNumberRequest` is of type [UpdateForwardingNumberRequest](./packages/core/definitions/UpdateForwardingNumberRequest.ts)
- `result` is of type [ForwardingNumberInfo](./packages/core/definitions/ForwardingNumberInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-updateForwardingNumber) in API Explorer.


## Delete Forwarding Number

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserForwardingFlipNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber(forwardingNumberId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-deleteForwardingNumber) in API Explorer.


## Get Extension Grant List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/grant`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).grant().get(listExtensionGrantsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listExtensionGrantsParameters` is of type [ListExtensionGrantsParameters](./packages/core/definitions/ListExtensionGrantsParameters.ts)
- `result` is of type [GetExtensionGrantListResponse](./packages/core/definitions/GetExtensionGrantListResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-listExtensionGrants) in API Explorer.


## Create Custom User Greeting

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).greeting().post(createCustomUserGreetingRequest, createCustomUserGreetingParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `createCustomUserGreetingRequest` is of type [CreateCustomUserGreetingRequest](./packages/core/definitions/CreateCustomUserGreetingRequest.ts)
- Parameter `createCustomUserGreetingParameters` is of type [CreateCustomUserGreetingParameters](./packages/core/definitions/CreateCustomUserGreetingParameters.ts)
- `result` is of type [CustomUserGreetingInfo](./packages/core/definitions/CustomUserGreetingInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-createCustomUserGreeting) in API Explorer.


## Get Custom Greeting

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadUserInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).greeting(greetingId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CustomUserGreetingInfo](./packages/core/definitions/CustomUserGreetingInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-readCustomGreeting) in API Explorer.


## Get Scheduled Meetings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().list(restRequestConfig);
await rc.revoke();
```

- `result` is of type [MeetingsResource](./packages/core/definitions/MeetingsResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-listMeetings) in API Explorer.


## Create Meeting

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().post(meetingRequestResource, restRequestConfig);
await rc.revoke();
```
- Parameter `meetingRequestResource` is of type [MeetingRequestResource](./packages/core/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./packages/core/definitions/MeetingResponseResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-createMeeting) in API Explorer.


## Get User Meeting Recordings List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting-recordings`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`MeetingsRecordings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meetingRecordings().get(listUserMeetingRecordingsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listUserMeetingRecordingsParameters` is of type [ListUserMeetingRecordingsParameters](./packages/core/definitions/ListUserMeetingRecordingsParameters.ts)
- `result` is of type [ListMeetingRecordingsResponse](./packages/core/definitions/ListMeetingRecordingsResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Recordings-listUserMeetingRecordings) in API Explorer.


## Get Meeting Service Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().serviceInfo().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [MeetingServiceInfoResource](./packages/core/definitions/MeetingServiceInfoResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-readMeetingServiceInfo) in API Explorer.


## Update Meeting Service Info

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().serviceInfo().patch(meetingServiceInfoRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `meetingServiceInfoRequest` is of type [MeetingServiceInfoRequest](./packages/core/definitions/MeetingServiceInfoRequest.ts)
- `result` is of type [MeetingServiceInfoResource](./packages/core/definitions/MeetingServiceInfoResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-updateMeetingServiceInfo) in API Explorer.


## Get Meeting User Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/user-settings`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().userSettings().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [MeetingUserSettingsResponse](./packages/core/definitions/MeetingUserSettingsResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-GetUserSetting) in API Explorer.


## Get Meeting Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [MeetingResponseResource](./packages/core/definitions/MeetingResponseResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-readMeeting) in API Explorer.


## Update Meeting

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).put(meetingRequestResource, restRequestConfig);
await rc.revoke();
```
- Parameter `meetingRequestResource` is of type [MeetingRequestResource](./packages/core/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./packages/core/definitions/MeetingResponseResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-updateMeeting) in API Explorer.


## Delete Meeting

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-deleteMeeting) in API Explorer.


## End Meeting

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).end().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-endMeeting) in API Explorer.


## Get Meeting Invitation

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/invitation`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).invitation().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [PublicMeetingInvitationResponse](./packages/core/definitions/PublicMeetingInvitationResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-readMeetingInvitation) in API Explorer.


## Get Assistants

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meetingsConfiguration().assistants().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [AssistantsResource](./packages/core/definitions/AssistantsResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-readAssistants) in API Explorer.


## Get Assisted Users

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assisted`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meetingsConfiguration().assisted().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [AssistedUsersResource](./packages/core/definitions/AssistedUsersResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-readAssistedUsers) in API Explorer.


## Get Message List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store`
Rate Limit Group|`Light`
App Permission|`ReadMessages`
User Permission|`ReadMessages`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore().list(listMessagesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listMessagesParameters` is of type [ListMessagesParameters](./packages/core/definitions/ListMessagesParameters.ts)
- `result` is of type [GetMessageList](./packages/core/definitions/GetMessageList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-listMessages) in API Explorer.


## Get Message

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}`
Rate Limit Group|`Light`
App Permission|`ReadMessages`
User Permission|`ReadMessages`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore(messageId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GetMessageInfoResponse](./packages/core/definitions/GetMessageInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessage) in API Explorer.


## Update Message List

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}`
Rate Limit Group|`Medium`
App Permission|`EditMessages`
User Permission|`EditMessages`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore(messageId).put(updateMessageRequest, updateMessageParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `updateMessageRequest` is of type [UpdateMessageRequest](./packages/core/definitions/UpdateMessageRequest.ts)
- Parameter `updateMessageParameters` is of type [UpdateMessageParameters](./packages/core/definitions/UpdateMessageParameters.ts)
- `result` is of type [GetMessageInfoResponse](./packages/core/definitions/GetMessageInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-updateMessage) in API Explorer.


## Delete Message

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}`
Rate Limit Group|`Medium`
App Permission|`EditMessages`
User Permission|`EditMessages`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore(messageId).delete(deleteMessageParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `deleteMessageParameters` is of type [DeleteMessageParameters](./packages/core/definitions/DeleteMessageParameters.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-deleteMessage) in API Explorer.


## Get Message Content

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}`
Rate Limit Group|`Medium`
App Permission|`ReadMessages`
User Permission|`ReadMessageContent`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore(messageId).content(attachmentId).get(readMessageContentParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readMessageContentParameters` is of type [ReadMessageContentParameters](./packages/core/definitions/ReadMessageContentParameters.ts)
- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessageContent) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Sync Messages

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync`
Rate Limit Group|`Light`
App Permission|`ReadMessages`
User Permission|`ReadMessages`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageSync().get(syncMessagesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `syncMessagesParameters` is of type [SyncMessagesParameters](./packages/core/definitions/SyncMessagesParameters.ts)
- `result` is of type [GetMessageSyncResponse](./packages/core/definitions/GetMessageSyncResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-syncMessages) in API Explorer.


## Send MMS

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/mms`
Rate Limit Group|`Medium`
App Permission|`SMS`
User Permission|`OutboundSMS`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).mms().post(createMmsMessage, restRequestConfig);
await rc.revoke();
```
- Parameter `createMmsMessage` is of type [CreateMMSMessage](./packages/core/definitions/CreateMMSMessage.ts)
- `result` is of type [GetSMSMessageInfoResponse](./packages/core/definitions/GetSMSMessageInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#SMS-createMMS) in API Explorer.


## Get Notification Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadMessagesNotificationsSettings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).notificationSettings().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [NotificationSettings](./packages/core/definitions/NotificationSettings.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readNotificationSettings) in API Explorer.


## Update Notification Settings

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditMessagesNotificationsSettings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).notificationSettings().put(notificationSettingsUpdateRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `notificationSettingsUpdateRequest` is of type [NotificationSettingsUpdateRequest](./packages/core/definitions/NotificationSettingsUpdateRequest.ts)
- `result` is of type [NotificationSettings](./packages/core/definitions/NotificationSettings.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateNotificationSettings) in API Explorer.


## Get Extension Phone Number List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserPhoneNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).phoneNumber().get(listExtensionPhoneNumbersParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listExtensionPhoneNumbersParameters` is of type [ListExtensionPhoneNumbersParameters](./packages/core/definitions/ListExtensionPhoneNumbersParameters.ts)
- `result` is of type [GetExtensionPhoneNumbersResponse](./packages/core/definitions/GetExtensionPhoneNumbersResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-listExtensionPhoneNumbers) in API Explorer.


## Get User Presence Status

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence`
Rate Limit Group|`Light`
App Permission|`ReadPresence`
User Permission|`ReadPresenceStatus`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).presence().get(readUserPresenceStatusParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readUserPresenceStatusParameters` is of type [ReadUserPresenceStatusParameters](./packages/core/definitions/ReadUserPresenceStatusParameters.ts)
- `result` is of type [GetPresenceInfo](./packages/core/definitions/GetPresenceInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readUserPresenceStatus) in API Explorer.


## Update User Presence Status

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence`
Rate Limit Group|`Medium`
App Permission|`EditPresence`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).presence().put(presenceInfoResource, restRequestConfig);
await rc.revoke();
```
- Parameter `presenceInfoResource` is of type [PresenceInfoResource](./packages/core/definitions/PresenceInfoResource.ts)
- `result` is of type [PresenceInfoResponse](./packages/core/definitions/PresenceInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateUserPresenceStatus) in API Explorer.


## Get User Profile Image

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage().list(restRequestConfig);
await rc.revoke();
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readUserProfileImage) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Upload User Profile Image

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`EditUserInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage().post(createUserProfileImageRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createUserProfileImageRequest` is of type [CreateUserProfileImageRequest](./packages/core/definitions/CreateUserProfileImageRequest.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-createUserProfileImage) in API Explorer.


## Update User Profile Image

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`EditUserInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage().put(updateUserProfileImageRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `updateUserProfileImageRequest` is of type [UpdateUserProfileImageRequest](./packages/core/definitions/UpdateUserProfileImageRequest.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateUserProfileImage) in API Explorer.


## Get Scaled User Profile Image

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage(scaleSize).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readScaledPofileImage) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Make RingOut Call

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out`
Rate Limit Group|`Heavy`
App Permission|`RingOut`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).ringOut().post(makeRingOutRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `makeRingOutRequest` is of type [MakeRingOutRequest](./packages/core/definitions/MakeRingOutRequest.ts)
- `result` is of type [GetRingOutStatusResponse](./packages/core/definitions/GetRingOutStatusResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-createRingOutCall) in API Explorer.


## Get RingOut Call Status

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}`
Rate Limit Group|`Light`
App Permission|`RingOut`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).ringOut(ringoutId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GetRingOutStatusResponse](./packages/core/definitions/GetRingOutStatusResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-readRingOutCallStatus) in API Explorer.


## Cancel RingOut Call

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}`
Rate Limit Group|`Heavy`
App Permission|`RingOut`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).ringOut(ringoutId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-deleteRingOutCall) in API Explorer.


## Send SMS

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms`
Rate Limit Group|`Medium`
App Permission|`SMS`
User Permission|`OutboundSMS`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).sms().post(createSmsMessage, restRequestConfig);
await rc.revoke();
```
- Parameter `createSmsMessage` is of type [CreateSMSMessage](./packages/core/definitions/CreateSMSMessage.ts)
- `result` is of type [GetSMSMessageInfoResponse](./packages/core/definitions/GetSMSMessageInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#SMS-createSMSMessage) in API Explorer.


## Get Unified Presence

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/unified-presence`
Rate Limit Group|`Medium`
App Permission|`ReadPresence`
User Permission|`ReadPresenceStatus`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).unifiedPresence().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [UnifiedPresence](./packages/core/definitions/UnifiedPresence.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readUnifiedPresence) in API Explorer.


## Update Unified Presence

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/unified-presence`
Rate Limit Group|`Medium`
App Permission|`EditPresence`
User Permission|`EditPresenceStatus`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).unifiedPresence().patch(updateUnifiedPresence, restRequestConfig);
await rc.revoke();
```
- Parameter `updateUnifiedPresence` is of type [UpdateUnifiedPresence](./packages/core/definitions/UpdateUnifiedPresence.ts)
- `result` is of type [UnifiedPresence](./packages/core/definitions/UnifiedPresence.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateUnifiedPresence) in API Explorer.


## Get User Video Configuration

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/video-configuration`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).videoConfiguration().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [UserVideoConfiguration](./packages/core/definitions/UserVideoConfiguration.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Video-Configuration-readUserVideoConfiguration) in API Explorer.


## Update User Video Configuration

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/video-configuration`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).videoConfiguration().put(userVideoConfiguration, restRequestConfig);
await rc.revoke();
```
- Parameter `userVideoConfiguration` is of type [UserVideoConfiguration](./packages/core/definitions/UserVideoConfiguration.ts)
- `result` is of type [UserVideoConfiguration](./packages/core/definitions/UserVideoConfiguration.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Video-Configuration-updateUserVideoConfiguration) in API Explorer.


## Create Company Greeting

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/greeting`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ReadUserInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).greeting().post(createCompanyGreetingRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createCompanyGreetingRequest` is of type [CreateCompanyGreetingRequest](./packages/core/definitions/CreateCompanyGreetingRequest.ts)
- `result` is of type [CustomCompanyGreetingInfo](./packages/core/definitions/CustomCompanyGreetingInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-createCompanyGreeting) in API Explorer.


## Create IVR Menu

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-menus`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`AutoReceptionist`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).ivrMenus().post(ivrMenuInfo, restRequestConfig);
await rc.revoke();
```
- Parameter `ivrMenuInfo` is of type [IVRMenuInfo](./packages/core/definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./packages/core/definitions/IVRMenuInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#IVR-createIVRMenu) in API Explorer.


## Get IVR Menu

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`AutoReceptionist`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).ivrMenus(ivrMenuId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [IVRMenuInfo](./packages/core/definitions/IVRMenuInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#IVR-readIVRMenu) in API Explorer.


## Update IVR Menu

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`AutoReceptionist`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).ivrMenus(ivrMenuId).put(ivrMenuInfo, restRequestConfig);
await rc.revoke();
```
- Parameter `ivrMenuInfo` is of type [IVRMenuInfo](./packages/core/definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./packages/core/definitions/IVRMenuInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#IVR-updateIVRMenu) in API Explorer.


## Create IVR Prompts

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-prompts`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`EditCompanyGreetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).ivrPrompts().post(createIvrPromptRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createIvrPromptRequest` is of type [CreateIvrPromptRequest](./packages/core/definitions/CreateIvrPromptRequest.ts)
- `result` is of type [PromptInfo](./packages/core/definitions/PromptInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#IVR-createIVRPrompt) in API Explorer.


## Get IVR Prompt List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-prompts`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyGreetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).ivrPrompts().list(restRequestConfig);
await rc.revoke();
```

- `result` is of type [IVRPrompts](./packages/core/definitions/IVRPrompts.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#IVR-listIVRPrompts) in API Explorer.


## Get IVR Prompt

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyGreetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(promptId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [PromptInfo](./packages/core/definitions/PromptInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#IVR-readIVRPrompt) in API Explorer.


## Delete IVR Prompt

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`EditCompanyGreetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(promptId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#IVR-deleteIVRPrompt) in API Explorer.


## Update IVR Prompt

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyGreetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(promptId).put(updateIvrPromptRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `updateIvrPromptRequest` is of type [UpdateIVRPromptRequest](./packages/core/definitions/UpdateIVRPromptRequest.ts)
- `result` is of type [PromptInfo](./packages/core/definitions/PromptInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#IVR-updateIVRPrompt) in API Explorer.


## Get IVR Prompt Content

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}/content`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyGreetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(promptId).content().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#IVR-readIVRPromptContent) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Get Account Meeting Recordings List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/meeting-recordings`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`MeetingsRecordings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).meetingRecordings().get(listAccountMeetingRecordingsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listAccountMeetingRecordingsParameters` is of type [ListAccountMeetingRecordingsParameters](./packages/core/definitions/ListAccountMeetingRecordingsParameters.ts)
- `result` is of type [ListMeetingRecordingsResponse](./packages/core/definitions/ListMeetingRecordingsResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Recordings-listAccountMeetingRecordings) in API Explorer.


## Get Locked Meeting Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/meeting/locked-settings`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).meeting().lockedSettings().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [AccountLockedSettingResponse](./packages/core/definitions/AccountLockedSettingResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-GetAccountLockedSetting) in API Explorer.


## Get Message Store Configuration

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/message-store-configuration`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`AccountAdministration`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).messageStoreConfiguration().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [MessageStoreConfiguration](./packages/core/definitions/MessageStoreConfiguration.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessageStoreConfiguration) in API Explorer.


## Update Message Store Configuration

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/message-store-configuration`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`AccountAdministration`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).messageStoreConfiguration().put(messageStoreConfiguration, restRequestConfig);
await rc.revoke();
```
- Parameter `messageStoreConfiguration` is of type [MessageStoreConfiguration](./packages/core/definitions/MessageStoreConfiguration.ts)
- `result` is of type [MessageStoreConfiguration](./packages/core/definitions/MessageStoreConfiguration.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-updateMessageStoreConfiguration) in API Explorer.


## Create Message Store Report

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/message-store-report`
Rate Limit Group|`Heavy`
App Permission|`ReadMessages`
User Permission|`Users`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).messageStoreReport().post(createMessageStoreReportRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createMessageStoreReportRequest` is of type [CreateMessageStoreReportRequest](./packages/core/definitions/CreateMessageStoreReportRequest.ts)
- `result` is of type [MessageStoreReport](./packages/core/definitions/MessageStoreReport.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-createMessageStoreReport) in API Explorer.


## Get Message Store Report Task

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/message-store-report/{taskId}`
Rate Limit Group|`Heavy`
App Permission|`ReadMessages`
User Permission|`Users`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).messageStoreReport(taskId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [MessageStoreReport](./packages/core/definitions/MessageStoreReport.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportTask) in API Explorer.


## Get Message Store Report Archive

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive`
Rate Limit Group|`Heavy`
App Permission|`ReadMessages`
User Permission|`Users`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).messageStoreReport(taskId).archive().list(restRequestConfig);
await rc.revoke();
```

- `result` is of type [MessageStoreReportArchive](./packages/core/definitions/MessageStoreReportArchive.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportArchive) in API Explorer.


## Get Message Store Report Archive Content

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}`
Rate Limit Group|`Heavy`
App Permission|`ReadMessages`
User Permission|`Users`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).messageStoreReport(taskId).archive(archiveId).get(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportArchiveContent) in API Explorer.


## Assign Paging Group Users and Devices

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`Groups`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).pagingOnlyGroups(pagingOnlyGroupId).bulkAssign().post(editPagingGroupRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `editPagingGroupRequest` is of type [EditPagingGroupRequest](./packages/core/definitions/EditPagingGroupRequest.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-assignMultiplePagingGroupUsersDevices) in API Explorer.


## Get Paging Group Devices

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyDevices`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).pagingOnlyGroups(pagingOnlyGroupId).devices().get(listPagingGroupDevicesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listPagingGroupDevicesParameters` is of type [ListPagingGroupDevicesParameters](./packages/core/definitions/ListPagingGroupDevicesParameters.ts)
- `result` is of type [PagingOnlyGroupDevices](./packages/core/definitions/PagingOnlyGroupDevices.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-listPagingGroupDevices) in API Explorer.


## Get Paging Group Users

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).pagingOnlyGroups(pagingOnlyGroupId).users().get(listPagingGroupUsersParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listPagingGroupUsersParameters` is of type [ListPagingGroupUsersParameters](./packages/core/definitions/ListPagingGroupUsersParameters.ts)
- `result` is of type [PagingOnlyGroupUsers](./packages/core/definitions/PagingOnlyGroupUsers.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-listPagingGroupUsers) in API Explorer.


## Get Company Phone Number List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/phone-number`
Rate Limit Group|`Heavy`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyPhoneNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).phoneNumber().list(listAccountPhoneNumbersParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listAccountPhoneNumbersParameters` is of type [ListAccountPhoneNumbersParameters](./packages/core/definitions/ListAccountPhoneNumbersParameters.ts)
- `result` is of type [AccountPhoneNumbers](./packages/core/definitions/AccountPhoneNumbers.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-listAccountPhoneNumbers) in API Explorer.


## Get Phone Number

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyPhoneNumbers`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).phoneNumber(phoneNumberId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CompanyPhoneNumberInfo](./packages/core/definitions/CompanyPhoneNumberInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-readAccountPhoneNumber) in API Explorer.


## Get User Presence Status List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/presence`
Rate Limit Group|`Heavy`
App Permission|`ReadPresence`
User Permission|`ReadPresenceStatus`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).presence().get(readAccountPresenceParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readAccountPresenceParameters` is of type [ReadAccountPresenceParameters](./packages/core/definitions/ReadAccountPresenceParameters.ts)
- `result` is of type [AccountPresenceInfo](./packages/core/definitions/AccountPresenceInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readAccountPresence) in API Explorer.


## Get Call Recording

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/recording/{recordingId}`
Rate Limit Group|`Heavy`
App Permission|`ReadCallRecording`
User Permission|`ReadCallRecording`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).recording(recordingId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GetCallRecordingResponse](./packages/core/definitions/GetCallRecordingResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recordings-readCallRecording) in API Explorer.


## Get Call Recordings Data

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/recording/{recordingId}/content`
Rate Limit Group|`Heavy`
App Permission|`ReadCallRecording`
User Permission|`ReadCallRecording`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).recording(recordingId).content().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recordings-listCallRecordingData) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Get Account Service Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/service-info`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadServicePlanInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).serviceInfo().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GetServiceInfoResponse](./packages/core/definitions/GetServiceInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountServiceInfo) in API Explorer.


## Make CallOut

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/call-out`
Rate Limit Group|`Heavy`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().callOut().post(makeCallOutRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `makeCallOutRequest` is of type [MakeCallOutRequest](./packages/core/definitions/MakeCallOutRequest.ts)
- `result` is of type [CallSession](./packages/core/definitions/CallSession.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-createCallOutCallSession) in API Explorer.


## Start Conference Call Session

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/conference`
Rate Limit Group|`Heavy`
App Permission|`TelephonySessions`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().conference().post(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CallSessionObject](./packages/core/definitions/CallSessionObject.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-createConferenceCallSession) in API Explorer.


## Get Call Session Status

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).get(readCallSessionStatusParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readCallSessionStatusParameters` is of type [ReadCallSessionStatusParameters](./packages/core/definitions/ReadCallSessionStatusParameters.ts)
- `result` is of type [CallSession](./packages/core/definitions/CallSession.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-readCallSessionStatus) in API Explorer.


## Drop Call Session

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-deleteCallSession) in API Explorer.


## Bring-In Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/bring-in`
Rate Limit Group|`Light`
App Permission|`TelephonySessions`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties().bringIn().post(addPartyRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `addPartyRequest` is of type [AddPartyRequest](./packages/core/definitions/AddPartyRequest.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-createCallPartyWithBringIn) in API Explorer.


## Get Call Party Status

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-readCallPartyStatus) in API Explorer.


## Delete Call Party

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`
Rate Limit Group|`Light`
App Permission|`TelephonySessions`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-deleteCallParty) in API Explorer.


## Update Call Party

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).patch(partyUpdateRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `partyUpdateRequest` is of type [PartyUpdateRequest](./packages/core/definitions/PartyUpdateRequest.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-updateCallParty) in API Explorer.


## Answer Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/answer`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).answer().post(answerTarget, restRequestConfig);
await rc.revoke();
```
- Parameter `answerTarget` is of type [AnswerTarget](./packages/core/definitions/AnswerTarget.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-answerCallParty) in API Explorer.


## Bridge Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/bridge`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).bridge().post(bridgeTargetRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `bridgeTargetRequest` is of type [BridgeTargetRequest](./packages/core/definitions/BridgeTargetRequest.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-bridgeCallParty) in API Explorer.


## Call Flip on Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).flip().post(callPartyFlip, restRequestConfig);
await rc.revoke();
```
- Parameter `callPartyFlip` is of type [CallPartyFlip](./packages/core/definitions/CallPartyFlip.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-callFlipParty) in API Explorer.


## Forward Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/forward`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).forward().post(forwardTarget, restRequestConfig);
await rc.revoke();
```
- Parameter `forwardTarget` is of type [ForwardTarget](./packages/core/definitions/ForwardTarget.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-forwardCallParty) in API Explorer.


## Hold Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/hold`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).hold().post(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-holdCallParty) in API Explorer.


## Ignore Call in Queue

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/ignore`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).ignore().post(ignoreRequestBody, restRequestConfig);
await rc.revoke();
```
- Parameter `ignoreRequestBody` is of type [IgnoreRequestBody](./packages/core/definitions/IgnoreRequestBody.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-ignoreCallInQueue) in API Explorer.


## Call Park

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/park`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).park().post(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-callParkParty) in API Explorer.


## Pickup Call

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/pickup`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).pickup().post(pickupTarget, restRequestConfig);
await rc.revoke();
```
- Parameter `pickupTarget` is of type [PickupTarget](./packages/core/definitions/PickupTarget.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-pickupCallParty) in API Explorer.


## Create Recording

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).recordings().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-startCallRecording) in API Explorer.


## Pause/Resume Recording

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings/{recordingId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).recordings(recordingId).patch(callRecordingUpdate, pauseResumeCallRecordingParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `callRecordingUpdate` is of type [CallRecordingUpdate](./packages/core/definitions/CallRecordingUpdate.ts)
- Parameter `pauseResumeCallRecordingParameters` is of type [PauseResumeCallRecordingParameters](./packages/core/definitions/PauseResumeCallRecordingParameters.ts)
- `result` is of type [CallRecording](./packages/core/definitions/CallRecording.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-pauseResumeCallRecording) in API Explorer.


## Reject Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reject`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).reject().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-rejectParty) in API Explorer.


## Reply with Text

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reply`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).reply().post(callPartyReply, restRequestConfig);
await rc.revoke();
```
- Parameter `callPartyReply` is of type [CallPartyReply](./packages/core/definitions/CallPartyReply.ts)
- `result` is of type [ReplyParty](./packages/core/definitions/ReplyParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-replyParty) in API Explorer.


## Supervise Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/supervise`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).supervise().post(partySuperviseRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `partySuperviseRequest` is of type [PartySuperviseRequest](./packages/core/definitions/PartySuperviseRequest.ts)
- `result` is of type [PartySuperviseResponse](./packages/core/definitions/PartySuperviseResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-superviseCallParty) in API Explorer.


## Transfer Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/transfer`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).transfer().post(transferTarget, restRequestConfig);
await rc.revoke();
```
- Parameter `transferTarget` is of type [TransferTarget](./packages/core/definitions/TransferTarget.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-transferCallParty) in API Explorer.


## Unhold Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/unhold`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).unhold().post(restRequestConfig);
await rc.revoke();
```

- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-unholdCallParty) in API Explorer.


## Supervise Call Session

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/supervise`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).supervise().post(superviseCallSessionRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `superviseCallSessionRequest` is of type [SuperviseCallSessionRequest](./packages/core/definitions/SuperviseCallSessionRequest.ts)
- `result` is of type [SuperviseCallSession](./packages/core/definitions/SuperviseCallSession.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-superviseCallSession) in API Explorer.


## Get User Template List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/templates`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).templates().list(listUserTemplatesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listUserTemplatesParameters` is of type [ListUserTemplatesParameters](./packages/core/definitions/ListUserTemplatesParameters.ts)
- `result` is of type [UserTemplates](./packages/core/definitions/UserTemplates.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-listUserTemplates) in API Explorer.


## Get User Template

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/templates/{templateId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).account(accountId).templates(templateId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [TemplateInfo](./packages/core/definitions/TemplateInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-readUserTemplate) in API Explorer.


## Register Device

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/client-info/sip-provision`
Rate Limit Group|`Heavy`
App Permission|`VoipCalling`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).clientInfo().sipProvision().post(createSipRegistrationRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createSipRegistrationRequest` is of type [CreateSipRegistrationRequest](./packages/core/definitions/CreateSipRegistrationRequest.ts)
- `result` is of type [CreateSipRegistrationResponse](./packages/core/definitions/CreateSipRegistrationResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Device-SIP-Registration-createSIPRegistration) in API Explorer.


## Get Country List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/country`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).dictionary().country().list(listCountriesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listCountriesParameters` is of type [ListCountriesParameters](./packages/core/definitions/ListCountriesParameters.ts)
- `result` is of type [GetCountryListResponse](./packages/core/definitions/GetCountryListResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listCountries) in API Explorer.


## Get Country

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/country/{countryId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).dictionary().country(countryId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GetCountryInfoDictionaryResponse](./packages/core/definitions/GetCountryInfoDictionaryResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readCountry) in API Explorer.


## Get Fax Cover Page List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/fax-cover-page`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).dictionary().faxCoverPage().get(listFaxCoverPagesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listFaxCoverPagesParameters` is of type [ListFaxCoverPagesParameters](./packages/core/definitions/ListFaxCoverPagesParameters.ts)
- `result` is of type [ListFaxCoverPagesResponse](./packages/core/definitions/ListFaxCoverPagesResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Fax-listFaxCoverPages) in API Explorer.


## Get Standard Greeting List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/greeting`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).dictionary().greeting().list(listStandardGreetingsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listStandardGreetingsParameters` is of type [ListStandardGreetingsParameters](./packages/core/definitions/ListStandardGreetingsParameters.ts)
- `result` is of type [DictionaryGreetingList](./packages/core/definitions/DictionaryGreetingList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-listStandardGreetings) in API Explorer.


## Get Standard Greeting

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/greeting/{greetingId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).dictionary().greeting(greetingId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [DictionaryGreetingInfo](./packages/core/definitions/DictionaryGreetingInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-readStandardGreeting) in API Explorer.


## Get Language List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/language`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).dictionary().language().list(restRequestConfig);
await rc.revoke();
```

- `result` is of type [LanguageList](./packages/core/definitions/LanguageList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listLanguages) in API Explorer.


## Get Language

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/language/{languageId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).dictionary().language(languageId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [LanguageInfo](./packages/core/definitions/LanguageInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readLanguage) in API Explorer.


## Get Location List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/location`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).dictionary().location().get(listLocationsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listLocationsParameters` is of type [ListLocationsParameters](./packages/core/definitions/ListLocationsParameters.ts)
- `result` is of type [GetLocationListResponse](./packages/core/definitions/GetLocationListResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listLocations) in API Explorer.


## Get States List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/state`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).dictionary().state().list(listStatesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listStatesParameters` is of type [ListStatesParameters](./packages/core/definitions/ListStatesParameters.ts)
- `result` is of type [GetStateListResponse](./packages/core/definitions/GetStateListResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listStates) in API Explorer.


## Get State

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/state/{stateId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).dictionary().state(stateId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GetStateInfoResponse](./packages/core/definitions/GetStateInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readState) in API Explorer.


## Get Timezone List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/timezone`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).dictionary().timezone().list(listTimezonesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listTimezonesParameters` is of type [ListTimezonesParameters](./packages/core/definitions/ListTimezonesParameters.ts)
- `result` is of type [GetTimezoneListResponse](./packages/core/definitions/GetTimezoneListResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listTimezones) in API Explorer.


## Get Timezone

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/timezone/{timezoneId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).dictionary().timezone(timezoneId).get(readTimezoneParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readTimezoneParameters` is of type [ReadTimezoneParameters](./packages/core/definitions/ReadTimezoneParameters.ts)
- `result` is of type [GetTimezoneInfoResponse](./packages/core/definitions/GetTimezoneInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readTimezone) in API Explorer.


## Get Chats

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/chats`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats().list(listGlipChatsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listGlipChatsParameters` is of type [ListGlipChatsParameters](./packages/core/definitions/ListGlipChatsParameters.ts)
- `result` is of type [GlipChatsList](./packages/core/definitions/GlipChatsList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipChats) in API Explorer.


## Get Chat

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipChatInfo](./packages/core/definitions/GlipChatInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipChat) in API Explorer.


## Add Chat to Favorites

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/favorite`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).favorite().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-favoriteGlipChat) in API Explorer.


## Create Note

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/notes`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).notes().post(glipNoteCreate, restRequestConfig);
await rc.revoke();
```
- Parameter `glipNoteCreate` is of type [GlipNoteCreate](./packages/core/definitions/GlipNoteCreate.ts)
- `result` is of type [GlipNoteInfo](./packages/core/definitions/GlipNoteInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Notes-createChatNote) in API Explorer.


## Get Chat Notes

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/notes`
Rate Limit Group|`Heavy`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).notes().get(listChatNotesParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listChatNotesParameters` is of type [ListChatNotesParameters](./packages/core/definitions/ListChatNotesParameters.ts)
- `result` is of type [GlipNotesInfo](./packages/core/definitions/GlipNotesInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Notes-listChatNotes) in API Explorer.


## Get Posts

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/posts`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).posts().list(readGlipPostsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readGlipPostsParameters` is of type [ReadGlipPostsParameters](./packages/core/definitions/ReadGlipPostsParameters.ts)
- `result` is of type [GlipPostsList](./packages/core/definitions/GlipPostsList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPosts) in API Explorer.


## Create Post

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/posts`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).posts().post(glipPostPostBody, restRequestConfig);
await rc.revoke();
```
- Parameter `glipPostPostBody` is of type [GlipPostPostBody](./packages/core/definitions/GlipPostPostBody.ts)
- `result` is of type [GlipPostInfo](./packages/core/definitions/GlipPostInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipPost) in API Explorer.


## Get Post

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/posts/{postId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).posts(postId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipPostInfo](./packages/core/definitions/GlipPostInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPost) in API Explorer.


## Update Post

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/posts/{postId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).posts(postId).patch(glipPatchPostBody, restRequestConfig);
await rc.revoke();
```
- Parameter `glipPatchPostBody` is of type [GlipPatchPostBody](./packages/core/definitions/GlipPatchPostBody.ts)
- `result` is of type [GlipPostInfo](./packages/core/definitions/GlipPostInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-patchGlipPost) in API Explorer.


## Delete Post

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/posts/{postId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).posts(postId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-deleteGlipPost) in API Explorer.


## Mark Chat as Read

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/read`
Rate Limit Group|`Medium`
App Permission|`GlipInternal`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).read().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-markChatRead) in API Explorer.


## Get Chat Tasks

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/tasks`
Rate Limit Group|`Heavy`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).tasks().get(listChatTasksParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listChatTasksParameters` is of type [ListChatTasksParameters](./packages/core/definitions/ListChatTasksParameters.ts)
- `result` is of type [GlipTaskList](./packages/core/definitions/GlipTaskList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-listChatTasks) in API Explorer.


## Create Task

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/tasks`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).tasks().post(glipCreateTask, restRequestConfig);
await rc.revoke();
```
- Parameter `glipCreateTask` is of type [GlipCreateTask](./packages/core/definitions/GlipCreateTask.ts)
- `result` is of type [GlipTaskInfo](./packages/core/definitions/GlipTaskInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-createTask) in API Explorer.


## Remove Chat from Favorites

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/unfavorite`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).unfavorite().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-unfavoriteGlipChat) in API Explorer.


## Mark Chat as Unread

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/chats/{chatId}/unread`
Rate Limit Group|`Medium`
App Permission|`GlipInternal`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().chats(chatId).unread().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-markChatUnread) in API Explorer.


## Get Company Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/companies/{companyId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().companies(companyId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipCompany](./packages/core/definitions/GlipCompany.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipCompany) in API Explorer.


## Get Conversations

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/conversations`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().conversations().list(listGlipConversationsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listGlipConversationsParameters` is of type [ListGlipConversationsParameters](./packages/core/definitions/ListGlipConversationsParameters.ts)
- `result` is of type [GlipConversationsList](./packages/core/definitions/GlipConversationsList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-listGlipConversations) in API Explorer.


## Create/Open Conversation

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/conversations`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().conversations().post(createGlipConversationRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createGlipConversationRequest` is of type [CreateGlipConversationRequest](./packages/core/definitions/CreateGlipConversationRequest.ts)
- `result` is of type [GlipConversationInfo](./packages/core/definitions/GlipConversationInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-createGlipConversation) in API Explorer.


## Get Conversation

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/conversations/{chatId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().conversations(chatId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipConversationInfo](./packages/core/definitions/GlipConversationInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-readGlipConversation) in API Explorer.


## Create Data Export Task

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/data-export`
Rate Limit Group|`Heavy`
App Permission|`Glip`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().dataExport().post(createDataExportTaskRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createDataExportTaskRequest` is of type [CreateDataExportTaskRequest](./packages/core/definitions/CreateDataExportTaskRequest.ts)
- `result` is of type [DataExportTask](./packages/core/definitions/DataExportTask.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-createDataExportTask) in API Explorer.


## Get Data Export Task List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/data-export`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().dataExport().list(listDataExportTasksParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listDataExportTasksParameters` is of type [ListDataExportTasksParameters](./packages/core/definitions/ListDataExportTasksParameters.ts)
- `result` is of type [DataExportTaskList](./packages/core/definitions/DataExportTaskList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-listDataExportTasks) in API Explorer.


## Get Data Export Task

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/data-export/{taskId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().dataExport(taskId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [DataExportTask](./packages/core/definitions/DataExportTask.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-readDataExportTask) in API Explorer.


## Get Data Export Task Dataset

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/data-export/{taskId}/datasets/{datasetId}`
Rate Limit Group|`Heavy`
App Permission|`Glip`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().dataExport(taskId).datasets(datasetId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-readDataExportTaskDataset) in API Explorer.

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).


## Get User Events List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/events`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().events().list(readGlipEventsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `readGlipEventsParameters` is of type [ReadGlipEventsParameters](./packages/core/definitions/ReadGlipEventsParameters.ts)
- `result` is of type [GlipEventsInfo](./packages/core/definitions/GlipEventsInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-readGlipEvents) in API Explorer.


## Create Event

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/events`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().events().post(glipEventCreate, restRequestConfig);
await rc.revoke();
```
- Parameter `glipEventCreate` is of type [GlipEventCreate](./packages/core/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./packages/core/definitions/GlipEventInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-createEvent) in API Explorer.


## Get Event

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/events/{eventId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().events(eventId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipEventInfo](./packages/core/definitions/GlipEventInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-readEvent) in API Explorer.


## Update Event

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/glip/events/{eventId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().events(eventId).put(glipEventCreate, restRequestConfig);
await rc.revoke();
```
- Parameter `glipEventCreate` is of type [GlipEventCreate](./packages/core/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./packages/core/definitions/GlipEventInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-updateEvent) in API Explorer.


## Delete Event

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/glip/events/{eventId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().events(eventId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-deleteEvent) in API Explorer.


## Get Everyone Chat

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/everyone`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().everyone().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipEveryoneInfo](./packages/core/definitions/GlipEveryoneInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-readGlipEveryone) in API Explorer.


## Update Everyone Сhat

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/v1.0/glip/everyone`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().everyone().patch(updateGlipEveryoneRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `updateGlipEveryoneRequest` is of type [UpdateGlipEveryoneRequest](./packages/core/definitions/UpdateGlipEveryoneRequest.ts)
- `result` is of type [GlipEveryoneInfo](./packages/core/definitions/GlipEveryoneInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-patchGlipEveryone) in API Explorer.


## Get Favorite Chats

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/favorites`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().favorites().get(listFavoriteChatsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listFavoriteChatsParameters` is of type [ListFavoriteChatsParameters](./packages/core/definitions/ListFavoriteChatsParameters.ts)
- `result` is of type [GlipChatsListWithoutNavigation](./packages/core/definitions/GlipChatsListWithoutNavigation.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listFavoriteChats) in API Explorer.


## Create Event by Group ID

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/groups/{groupId}/events`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().groups(groupId).events().post(glipEventCreate, restRequestConfig);
await rc.revoke();
```
- Parameter `glipEventCreate` is of type [GlipEventCreate](./packages/core/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./packages/core/definitions/GlipEventInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-createEventbyGroupId) in API Explorer.


## Get Group Events

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/groups/{groupId}/events`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().groups(groupId).events().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipEventInfo](./packages/core/definitions/GlipEventInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-listGroupEvents) in API Explorer.


## Create Post in Group

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/groups/{groupId}/posts`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().groups(groupId).posts().post(glipCreatePost, restRequestConfig);
await rc.revoke();
```
- Parameter `glipCreatePost` is of type [GlipCreatePost](./packages/core/definitions/GlipCreatePost.ts)
- `result` is of type [GlipPostInfo](./packages/core/definitions/GlipPostInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipGroupPost) in API Explorer.


## Create Webhook in Group

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/groups/{groupId}/webhooks`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().groups(groupId).webhooks().post(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipWebhookInfo](./packages/core/definitions/GlipWebhookInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-createGlipGroupWebhook) in API Explorer.


## Get Webhooks in Group

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/groups/{groupId}/webhooks`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().groups(groupId).webhooks().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipWebhookList](./packages/core/definitions/GlipWebhookList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-listGlipGroupWebhooks) in API Explorer.


## Get Note

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/notes/{noteId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().notes(noteId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GetGlipNoteInfo](./packages/core/definitions/GetGlipNoteInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Notes-readUserNote) in API Explorer.


## Update Note

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/v1.0/glip/notes/{noteId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().notes(noteId).patch(glipNoteCreate, restRequestConfig);
await rc.revoke();
```
- Parameter `glipNoteCreate` is of type [GlipNoteCreate](./packages/core/definitions/GlipNoteCreate.ts)
- `result` is of type [GlipNoteInfo](./packages/core/definitions/GlipNoteInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Notes-patchNote) in API Explorer.


## Delete Note

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/glip/notes/{noteId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().notes(noteId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Notes-deleteNote) in API Explorer.


## Lock Note

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/notes/{noteId}/lock`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().notes(noteId).lock().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Notes-lockNote) in API Explorer.


## Publish Note

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/notes/{noteId}/publish`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().notes(noteId).publish().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Notes-publishNote) in API Explorer.


## Unlock Note

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/notes/{noteId}/unlock`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().notes(noteId).unlock().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Notes-unlockNote) in API Explorer.


## Get Person

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/persons/{personId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().persons(personId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipPersonInfo](./packages/core/definitions/GlipPersonInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipPerson) in API Explorer.


## Get Preferences

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/preferences`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().preferences().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipPreferencesInfo](./packages/core/definitions/GlipPreferencesInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipPreferences) in API Explorer.


## Get Recent Chats

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/recent/chats`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().recent().chats().get(listRecentChatsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listRecentChatsParameters` is of type [ListRecentChatsParameters](./packages/core/definitions/ListRecentChatsParameters.ts)
- `result` is of type [GlipChatsListWithoutNavigation](./packages/core/definitions/GlipChatsListWithoutNavigation.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listRecentChats) in API Explorer.


## Get Task

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/tasks/{taskId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().tasks(taskId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipTaskInfo](./packages/core/definitions/GlipTaskInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-readTask) in API Explorer.


## Patch Task

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/v1.0/glip/tasks/{taskId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().tasks(taskId).patch(glipUpdateTask, restRequestConfig);
await rc.revoke();
```
- Parameter `glipUpdateTask` is of type [GlipUpdateTask](./packages/core/definitions/GlipUpdateTask.ts)
- `result` is of type [GlipTaskList](./packages/core/definitions/GlipTaskList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-patchTask) in API Explorer.


## Delete Task

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/glip/tasks/{taskId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().tasks(taskId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-deleteTask) in API Explorer.


## Complete Task

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/tasks/{taskId}/complete`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().tasks(taskId).complete().post(glipCompleteTask, restRequestConfig);
await rc.revoke();
```
- Parameter `glipCompleteTask` is of type [GlipCompleteTask](./packages/core/definitions/GlipCompleteTask.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-completeTask) in API Explorer.


## Get Teams

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/teams`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().teams().list(listGlipTeamsParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `listGlipTeamsParameters` is of type [ListGlipTeamsParameters](./packages/core/definitions/ListGlipTeamsParameters.ts)
- `result` is of type [GlipTeamsList](./packages/core/definitions/GlipTeamsList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-listGlipTeams) in API Explorer.


## Create Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/teams`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().teams().post(glipPostTeamBody, restRequestConfig);
await rc.revoke();
```
- Parameter `glipPostTeamBody` is of type [GlipPostTeamBody](./packages/core/definitions/GlipPostTeamBody.ts)
- `result` is of type [GlipTeamInfo](./packages/core/definitions/GlipTeamInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-createGlipTeam) in API Explorer.


## Get Team

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/teams/{chatId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().teams(chatId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipTeamInfo](./packages/core/definitions/GlipTeamInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-readGlipTeam) in API Explorer.


## Update Team

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/v1.0/glip/teams/{chatId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().teams(chatId).patch(glipPatchTeamBody, restRequestConfig);
await rc.revoke();
```
- Parameter `glipPatchTeamBody` is of type [GlipPatchTeamBody](./packages/core/definitions/GlipPatchTeamBody.ts)
- `result` is of type [GlipTeamInfo](./packages/core/definitions/GlipTeamInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-patchGlipTeam) in API Explorer.


## Delete Team

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/glip/teams/{chatId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().teams(chatId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-deleteGlipTeam) in API Explorer.


## Add Team Members

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/teams/{chatId}/add`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().teams(chatId).add().post(glipPostMembersListBody, restRequestConfig);
await rc.revoke();
```
- Parameter `glipPostMembersListBody` is of type [GlipPostMembersListBody](./packages/core/definitions/GlipPostMembersListBody.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-addGlipTeamMembers) in API Explorer.


## Archive Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/teams/{chatId}/archive`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().teams(chatId).archive().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-archiveGlipTeam) in API Explorer.


## Join Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/teams/{chatId}/join`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().teams(chatId).join().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-joinGlipTeam) in API Explorer.


## Leave Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/teams/{chatId}/leave`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().teams(chatId).leave().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-leaveGlipTeam) in API Explorer.


## Remove Team Members

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/teams/{chatId}/remove`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().teams(chatId).remove().post(glipPostMembersIdsListBody, restRequestConfig);
await rc.revoke();
```
- Parameter `glipPostMembersIdsListBody` is of type [GlipPostMembersIdsListBody](./packages/core/definitions/GlipPostMembersIdsListBody.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-removeGlipTeamMembers) in API Explorer.


## Unarchive Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/teams/{chatId}/unarchive`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().teams(chatId).unarchive().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Teams-unarchiveGlipTeam) in API Explorer.


## Get Webhooks

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/webhooks`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().webhooks().list(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipWebhookList](./packages/core/definitions/GlipWebhookList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-listGlipWebhooks) in API Explorer.


## Get Webhook

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/webhooks/{webhookId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().webhooks(webhookId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [GlipWebhookList](./packages/core/definitions/GlipWebhookList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-readGlipWebhook) in API Explorer.


## Delete Webhook

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/glip/webhooks/{webhookId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().webhooks(webhookId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-deleteGlipWebhook) in API Explorer.


## Activate Webhook

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/webhooks/{webhookId}/activate`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().webhooks(webhookId).activate().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-activateGlipWebhook) in API Explorer.


## Suspend Webhook

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/webhooks/{webhookId}/suspend`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).glip().webhooks(webhookId).suspend().post(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-suspendGlipWebhook) in API Explorer.


## Parse Phone Number

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/number-parser/parse`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).numberParser().parse().post(parsePhoneNumberRequest, parsePhoneNumberParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `parsePhoneNumberRequest` is of type [ParsePhoneNumberRequest](./packages/core/definitions/ParsePhoneNumberRequest.ts)
- Parameter `parsePhoneNumberParameters` is of type [ParsePhoneNumberParameters](./packages/core/definitions/ParsePhoneNumberParameters.ts)
- `result` is of type [ParsePhoneNumberResponse](./packages/core/definitions/ParsePhoneNumberResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-parsePhoneNumber) in API Explorer.


## Get Subscription List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/subscription`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).subscription().list(restRequestConfig);
await rc.revoke();
```

- `result` is of type [RecordsCollectionResourceSubscriptionResponse](./packages/core/definitions/RecordsCollectionResourceSubscriptionResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-listSubscriptions) in API Explorer.


## Create Subscription

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/subscription`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).subscription().post(createSubscriptionRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `createSubscriptionRequest` is of type [CreateSubscriptionRequest](./packages/core/definitions/CreateSubscriptionRequest.ts)
- `result` is of type [SubscriptionInfo](./packages/core/definitions/SubscriptionInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-createSubscription) in API Explorer.


## Get Subscription

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/subscription/{subscriptionId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).subscription(subscriptionId).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [SubscriptionInfo](./packages/core/definitions/SubscriptionInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-readSubscription) in API Explorer.


## Update Subscription

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/subscription/{subscriptionId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).subscription(subscriptionId).put(modifySubscriptionRequest, updateSubscriptionParameters, restRequestConfig);
await rc.revoke();
```
- Parameter `modifySubscriptionRequest` is of type [ModifySubscriptionRequest](./packages/core/definitions/ModifySubscriptionRequest.ts)
- Parameter `updateSubscriptionParameters` is of type [UpdateSubscriptionParameters](./packages/core/definitions/UpdateSubscriptionParameters.ts)
- `result` is of type [SubscriptionInfo](./packages/core/definitions/SubscriptionInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-updateSubscription) in API Explorer.


## Cancel Subscription

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/subscription/{subscriptionId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).subscription(subscriptionId).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-deleteSubscription) in API Explorer.


## Renew Subscription

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/subscription/{subscriptionId}/renew`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.restapi(apiVersion).subscription(subscriptionId).renew().post(restRequestConfig);
await rc.revoke();
```

- `result` is of type [SubscriptionInfo](./packages/core/definitions/SubscriptionInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-renewSubscription) in API Explorer.


## Get Service Provider Config

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/v2/ServiceProviderConfig`
Rate Limit Group|`NoThrottling`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.scim(version).serviceProviderConfig().get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [ServiceProviderConfig](./packages/core/definitions/ServiceProviderConfig.ts)
- Parameter `version` is optional with default value `v2`

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-readServiceProviderConfig2) in API Explorer.


## Search/List Users

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/v2/Users`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.scim(version).users().list(searchViaGet2Parameters, restRequestConfig);
await rc.revoke();
```
- Parameter `searchViaGet2Parameters` is of type [SearchViaGet2Parameters](./packages/core/definitions/SearchViaGet2Parameters.ts)
- `result` is of type [UserSearchResponse](./packages/core/definitions/UserSearchResponse.ts)
- Parameter `version` is optional with default value `v2`

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-searchViaGet2) in API Explorer.


## Create User

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/scim/v2/Users`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.scim(version).users().post(createUser, restRequestConfig);
await rc.revoke();
```
- Parameter `createUser` is of type [CreateUser](./packages/core/definitions/CreateUser.ts)
- `result` is of type [UserResponse](./packages/core/definitions/UserResponse.ts)
- Parameter `version` is optional with default value `v2`

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-createUser2) in API Explorer.


## Search/List Users

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/scim/v2/Users/.search`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.scim(version).users().dotSearch().post(searchRequest, restRequestConfig);
await rc.revoke();
```
- Parameter `searchRequest` is of type [SearchRequest](./packages/core/definitions/SearchRequest.ts)
- `result` is of type [UserSearchResponse](./packages/core/definitions/UserSearchResponse.ts)
- Parameter `version` is optional with default value `v2`

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-searchViaPost2) in API Explorer.


## Get User

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/v2/Users/{id}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.scim(version).users(id).get(restRequestConfig);
await rc.revoke();
```

- `result` is of type [UserResponse](./packages/core/definitions/UserResponse.ts)
- Parameter `version` is optional with default value `v2`

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-readUser2) in API Explorer.


## Update/Replace User

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/scim/v2/Users/{id}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.scim(version).users(id).put(user, restRequestConfig);
await rc.revoke();
```
- Parameter `user` is of type [User](./packages/core/definitions/User.ts)
- `result` is of type [UserResponse](./packages/core/definitions/UserResponse.ts)
- Parameter `version` is optional with default value `v2`

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-replaceUser2) in API Explorer.


## Delete User

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/scim/v2/Users/{id}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.scim(version).users(id).delete(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `version` is optional with default value `v2`

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-deleteUser2) in API Explorer.


## Update/Patch User

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/scim/v2/Users/{id}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.scim(version).users(id).patch(userPatch, restRequestConfig);
await rc.revoke();
```
- Parameter `userPatch` is of type [UserPatch](./packages/core/definitions/UserPatch.ts)
- `result` is of type [UserResponse](./packages/core/definitions/UserResponse.ts)
- Parameter `version` is optional with default value `v2`

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-patchUser2) in API Explorer.


## Check Health

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/v2/health`
Rate Limit Group|`NoThrottling`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({ clientId, clientSecret, serverURL });
await rc.authorize({ username, extension, password });
const result = await rc.scim(version).health().get(restRequestConfig);
await rc.revoke();
```

- `result` is an empty string
- Parameter `version` is optional with default value `v2`

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-checkHealth2) in API Explorer.