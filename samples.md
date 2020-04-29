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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi().list()
await rc.revoke()
```

- `result` is of type [GetVersionsResponse](./src/definitions/GetVersionsResponse.ts)

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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi().oauth().revoke().post(revokeTokenRequest)
await rc.revoke()
```
- Parameter `revokeTokenRequest` is of type [RevokeTokenRequest](./src/definitions/RevokeTokenRequest.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi().oauth().token().post(getTokenRequest)
await rc.revoke()
```
- Parameter `getTokenRequest` is of type [GetTokenRequest](./src/definitions/GetTokenRequest.ts)
- `result` is of type [TokenInfo](./src/definitions/TokenInfo.ts)

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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).get()
await rc.revoke()
```

- `result` is of type [GetVersionResponse](./src/definitions/GetVersionResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).get()
await rc.revoke()
```

- `result` is of type [GetAccountInfoResponse](./src/definitions/GetAccountInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountInfo) in API Explorer.


## Get Company Active Calls

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/active-calls`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).activeCalls().get(listCompanyActiveCallsParameters)
await rc.revoke()
```
- Parameter `listCompanyActiveCallsParameters` is of type [ListCompanyActiveCallsParameters](./src/definitions/ListCompanyActiveCallsParameters.ts)
- `result` is of type [CompanyActiveCallsResponse](./src/definitions/CompanyActiveCallsResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).answeringRule().post(companyAnsweringRuleRequest)
await rc.revoke()
```
- Parameter `companyAnsweringRuleRequest` is of type [CompanyAnsweringRuleRequest](./src/definitions/CompanyAnsweringRuleRequest.ts)
- `result` is of type [CompanyAnsweringRuleInfo](./src/definitions/CompanyAnsweringRuleInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createCompanyAnsweringRule) in API Explorer.


## Get Company Call Handling Rule List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/answering-rule`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyAnsweringRules`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).answeringRule().list(listCompanyAnsweringRulesParameters)
await rc.revoke()
```
- Parameter `listCompanyAnsweringRulesParameters` is of type [ListCompanyAnsweringRulesParameters](./src/definitions/ListCompanyAnsweringRulesParameters.ts)
- `result` is of type [CompanyAnsweringRuleList](./src/definitions/CompanyAnsweringRuleList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listCompanyAnsweringRules) in API Explorer.


## Get Company Call Handling Rule

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyAnsweringRules`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).answeringRule(ruleId).get()
await rc.revoke()
```

- `result` is of type [CompanyAnsweringRuleInfo](./src/definitions/CompanyAnsweringRuleInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readCompanyAnsweringRule) in API Explorer.


## Update Company Call Handling Rule

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyAnsweringRules`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).answeringRule(ruleId).put(companyAnsweringRuleUpdate)
await rc.revoke()
```
- Parameter `companyAnsweringRuleUpdate` is of type [CompanyAnsweringRuleUpdate](./src/definitions/CompanyAnsweringRuleUpdate.ts)
- `result` is of type [CompanyAnsweringRuleInfo](./src/definitions/CompanyAnsweringRuleInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateCompanyAnsweringRule) in API Explorer.


## Delete Company Call Handling Rule

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyAnsweringRules`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).answeringRule(ruleId).delete()
await rc.revoke()
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteCompanyAnsweringRule) in API Explorer.


## Get Account Business Address

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/business-address`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).businessAddress().get()
await rc.revoke()
```

- `result` is of type [AccountBusinessAddressResource](./src/definitions/AccountBusinessAddressResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).businessAddress().put(modifyAccountBusinessAddressRequest)
await rc.revoke()
```
- Parameter `modifyAccountBusinessAddressRequest` is of type [ModifyAccountBusinessAddressRequest](./src/definitions/ModifyAccountBusinessAddressRequest.ts)
- `result` is of type [AccountBusinessAddressResource](./src/definitions/AccountBusinessAddressResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).businessHours().get()
await rc.revoke()
```

- `result` is of type [CompanyBusinessHours](./src/definitions/CompanyBusinessHours.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).businessHours().put(companyBusinessHoursUpdateRequest)
await rc.revoke()
```
- Parameter `companyBusinessHoursUpdateRequest` is of type [CompanyBusinessHoursUpdateRequest](./src/definitions/CompanyBusinessHoursUpdateRequest.ts)
- `result` is of type [CompanyBusinessHours](./src/definitions/CompanyBusinessHours.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callLog().list(readCompanyCallLogParameters)
await rc.revoke()
```
- Parameter `readCompanyCallLogParameters` is of type [ReadCompanyCallLogParameters](./src/definitions/ReadCompanyCallLogParameters.ts)
- `result` is of type [AccountCallLogResponse](./src/definitions/AccountCallLogResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callLogSync().get(syncAccountCallLogParameters)
await rc.revoke()
```
- Parameter `syncAccountCallLogParameters` is of type [SyncAccountCallLogParameters](./src/definitions/SyncAccountCallLogParameters.ts)
- `result` is of type [AccountCallLogSyncResponse](./src/definitions/AccountCallLogSyncResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callLog(callRecordId).get(readCompanyCallRecordParameters)
await rc.revoke()
```
- Parameter `readCompanyCallRecordParameters` is of type [ReadCompanyCallRecordParameters](./src/definitions/ReadCompanyCallRecordParameters.ts)
- `result` is of type [CompanyCallLogRecord](./src/definitions/CompanyCallLogRecord.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups().post(createCallMonitoringGroupRequest)
await rc.revoke()
```
- Parameter `createCallMonitoringGroupRequest` is of type [CreateCallMonitoringGroupRequest](./src/definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type [CallMonitoringGroup](./src/definitions/CallMonitoringGroup.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups().get(listCallMonitoringGroupsParameters)
await rc.revoke()
```
- Parameter `listCallMonitoringGroupsParameters` is of type [ListCallMonitoringGroupsParameters](./src/definitions/ListCallMonitoringGroupsParameters.ts)
- `result` is of type [CallMonitoringGroups](./src/definitions/CallMonitoringGroups.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups(groupId).put(createCallMonitoringGroupRequest)
await rc.revoke()
```
- Parameter `createCallMonitoringGroupRequest` is of type [CreateCallMonitoringGroupRequest](./src/definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type [CallMonitoringGroup](./src/definitions/CallMonitoringGroup.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups(groupId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups(groupId).bulkAssign().post(callMonitoringBulkAssign)
await rc.revoke()
```
- Parameter `callMonitoringBulkAssign` is of type [CallMonitoringBulkAssign](./src/definitions/CallMonitoringBulkAssign.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups(groupId).members().get(listCallMonitoringGroupMembersParameters)
await rc.revoke()
```
- Parameter `listCallMonitoringGroupMembersParameters` is of type [ListCallMonitoringGroupMembersParameters](./src/definitions/ListCallMonitoringGroupMembersParameters.ts)
- `result` is of type [CallMonitoringGroupMemberList](./src/definitions/CallMonitoringGroupMemberList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callQueues().get(listCallQueuesParameters)
await rc.revoke()
```
- Parameter `listCallQueuesParameters` is of type [ListCallQueuesParameters](./src/definitions/ListCallQueuesParameters.ts)
- `result` is of type [CallQueues](./src/definitions/CallQueues.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listCallQueues) in API Explorer.


## Assign Multiple Call Queue Members

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/call-queues/{groupId}/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`Groups`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).bulkAssign().post(callQueueBulkAssignResource)
await rc.revoke()
```
- Parameter `callQueueBulkAssignResource` is of type [CallQueueBulkAssignResource](./src/definitions/CallQueueBulkAssignResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).members().get(listCallQueueMembersParameters)
await rc.revoke()
```
- Parameter `listCallQueueMembersParameters` is of type [ListCallQueueMembersParameters](./src/definitions/ListCallQueueMembersParameters.ts)
- `result` is of type [CallQueueMembers](./src/definitions/CallQueueMembers.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listCallQueueMembers) in API Explorer.


## Get Call Recording Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-recording`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callRecording().get()
await rc.revoke()
```

- `result` is of type [CallRecordingSettingsResource](./src/definitions/CallRecordingSettingsResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readCallRecordingSettings) in API Explorer.


## Update Call Recording Settings

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/call-recording`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyInfo`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callRecording().put(callRecordingSettingsResource)
await rc.revoke()
```
- Parameter `callRecordingSettingsResource` is of type [CallRecordingSettingsResource](./src/definitions/CallRecordingSettingsResource.ts)
- `result` is of type [CallRecordingSettingsResource](./src/definitions/CallRecordingSettingsResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateCallRecordingSettings) in API Explorer.


## Update Call Recording Extension List

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/call-recording/bulk-assign`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callRecording().bulkAssign().post(bulkAccountCallRecordingsResource)
await rc.revoke()
```
- Parameter `bulkAccountCallRecordingsResource` is of type [BulkAccountCallRecordingsResource](./src/definitions/BulkAccountCallRecordingsResource.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateCallRecordingExtensionList) in API Explorer.


## Get Call Recording Custom Greeting List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-recording/custom-greetings`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callRecording().customGreetings().get(listCallRecordingCustomGreetingsParameters)
await rc.revoke()
```
- Parameter `listCallRecordingCustomGreetingsParameters` is of type [ListCallRecordingCustomGreetingsParameters](./src/definitions/ListCallRecordingCustomGreetingsParameters.ts)
- `result` is of type [CallRecordingCustomGreetings](./src/definitions/CallRecordingCustomGreetings.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listCallRecordingCustomGreetings) in API Explorer.


## Delete Call Recording Custom Greeting

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/call-recording/custom-greetings/{greetingId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyInfo`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callRecording().customGreetings(greetingId).delete()
await rc.revoke()
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteCallRecordingCustomGreeting) in API Explorer.


## Get Call Recording Extension List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/call-recording/extensions`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).callRecording().extensions().get()
await rc.revoke()
```

- `result` is of type [CallRecordingExtensions](./src/definitions/CallRecordingExtensions.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listCallRecordingExtensions) in API Explorer.


## Create Custom Field

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/custom-fields`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`Users`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).customFields().post(customFieldCreateRequest)
await rc.revoke()
```
- Parameter `customFieldCreateRequest` is of type [CustomFieldCreateRequest](./src/definitions/CustomFieldCreateRequest.ts)
- `result` is of type [CustomFieldResource](./src/definitions/CustomFieldResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).customFields().get()
await rc.revoke()
```

- `result` is of type [CustomFieldsResource](./src/definitions/CustomFieldsResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).customFields(fieldId).put(customFieldUpdateRequest)
await rc.revoke()
```
- Parameter `customFieldUpdateRequest` is of type [CustomFieldUpdateRequest](./src/definitions/CustomFieldUpdateRequest.ts)
- `result` is of type [CustomFieldResource](./src/definitions/CustomFieldResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).customFields(fieldId).delete()
await rc.revoke()
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-deleteCustomField) in API Explorer.


## Assign Multiple Department Members

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/department/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`UserGroups`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).department().bulkAssign().post(departmentBulkAssignResource)
await rc.revoke()
```
- Parameter `departmentBulkAssignResource` is of type [DepartmentBulkAssignResource](./src/definitions/DepartmentBulkAssignResource.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-assignMultipleDepartmentMembers) in API Explorer.


## Get Department Member List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/department/{departmentId}/members`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).department(departmentId).members().get(listDepartmentMembersParameters)
await rc.revoke()
```
- Parameter `listDepartmentMembersParameters` is of type [ListDepartmentMembersParameters](./src/definitions/ListDepartmentMembersParameters.ts)
- `result` is of type [DepartmentMemberList](./src/definitions/DepartmentMemberList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listDepartmentMembers) in API Explorer.


## Get Device

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/device/{deviceId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyDevices`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).device(deviceId).get(readDeviceParameters)
await rc.revoke()
```
- Parameter `readDeviceParameters` is of type [ReadDeviceParameters](./src/definitions/ReadDeviceParameters.ts)
- `result` is of type [GetDeviceInfoResponse](./src/definitions/GetDeviceInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).device(deviceId).put(accountDeviceUpdate, updateDeviceParameters)
await rc.revoke()
```
- Parameter `accountDeviceUpdate` is of type [AccountDeviceUpdate](./src/definitions/AccountDeviceUpdate.ts)
- Parameter `updateDeviceParameters` is of type [UpdateDeviceParameters](./src/definitions/UpdateDeviceParameters.ts)
- `result` is of type [GetDeviceInfoResponse](./src/definitions/GetDeviceInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).directory().entries().list(listDirectoryEntriesParameters)
await rc.revoke()
```
- Parameter `listDirectoryEntriesParameters` is of type [ListDirectoryEntriesParameters](./src/definitions/ListDirectoryEntriesParameters.ts)
- `result` is of type [DirectoryResource](./src/definitions/DirectoryResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).directory().entries().search().post(searchDirectoryEntriesRequest)
await rc.revoke()
```
- Parameter `searchDirectoryEntriesRequest` is of type [SearchDirectoryEntriesRequest](./src/definitions/SearchDirectoryEntriesRequest.ts)
- `result` is of type [DirectoryResource](./src/definitions/DirectoryResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).directory().entries(entryId).get()
await rc.revoke()
```

- `result` is of type [ContactResource](./src/definitions/ContactResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).directory().federation().get()
await rc.revoke()
```

- `result` is of type [FederationResource](./src/definitions/FederationResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().devices().get(listDevicesAutomaticLocationUpdatesParameters)
await rc.revoke()
```
- Parameter `listDevicesAutomaticLocationUpdatesParameters` is of type [ListDevicesAutomaticLocationUpdatesParameters](./src/definitions/ListDevicesAutomaticLocationUpdatesParameters.ts)
- `result` is of type [ListDevicesAutomaticLocationUpdates](./src/definitions/ListDevicesAutomaticLocationUpdates.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().devices().bulkAssign().post(assignMultipleDevicesAutomaticLocationUpdates)
await rc.revoke()
```
- Parameter `assignMultipleDevicesAutomaticLocationUpdates` is of type [AssignMultipleDevicesAutomaticLocationUpdates](./src/definitions/AssignMultipleDevicesAutomaticLocationUpdates.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks().list()
await rc.revoke()
```

- `result` is of type [NetworksList](./src/definitions/NetworksList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks().post(createNetworkRequest)
await rc.revoke()
```
- Parameter `createNetworkRequest` is of type [CreateNetworkRequest](./src/definitions/CreateNetworkRequest.ts)
- `result` is of type [NetworkInfo](./src/definitions/NetworkInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks(networkId).get()
await rc.revoke()
```

- `result` is of type [NetworkInfo](./src/definitions/NetworkInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks(networkId).put(updateNetworkRequest)
await rc.revoke()
```
- Parameter `updateNetworkRequest` is of type [UpdateNetworkRequest](./src/definitions/UpdateNetworkRequest.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks(networkId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches().list(listAccountSwitchesParameters)
await rc.revoke()
```
- Parameter `listAccountSwitchesParameters` is of type [ListAccountSwitchesParameters](./src/definitions/ListAccountSwitchesParameters.ts)
- `result` is of type [SwitchesList](./src/definitions/SwitchesList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches().post(createSwitchInfo)
await rc.revoke()
```
- Parameter `createSwitchInfo` is of type [CreateSwitchInfo](./src/definitions/CreateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./src/definitions/SwitchInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switchesBulkCreate().post(createMultipleSwitchesRequest)
await rc.revoke()
```
- Parameter `createMultipleSwitchesRequest` is of type [CreateMultipleSwitchesRequest](./src/definitions/CreateMultipleSwitchesRequest.ts)
- `result` is of type [CreateMultipleSwitchesResponse](./src/definitions/CreateMultipleSwitchesResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switchesBulkUpdate().post(updateMultipleSwitchesRequest)
await rc.revoke()
```
- Parameter `updateMultipleSwitchesRequest` is of type [UpdateMultipleSwitchesRequest](./src/definitions/UpdateMultipleSwitchesRequest.ts)
- `result` is of type [UpdateMultipleSwitchesResponse](./src/definitions/UpdateMultipleSwitchesResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switchesBulkValidate().post(validateMultipleSwitchesRequest)
await rc.revoke()
```
- Parameter `validateMultipleSwitchesRequest` is of type [ValidateMultipleSwitchesRequest](./src/definitions/ValidateMultipleSwitchesRequest.ts)
- `result` is of type [ValidateMultipleSwitchesResponse](./src/definitions/ValidateMultipleSwitchesResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches(switchId).get()
await rc.revoke()
```

- `result` is of type [SwitchInfo](./src/definitions/SwitchInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches(switchId).put(updateSwitchInfo)
await rc.revoke()
```
- Parameter `updateSwitchInfo` is of type [UpdateSwitchInfo](./src/definitions/UpdateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./src/definitions/SwitchInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches(switchId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().tasks(taskId).get()
await rc.revoke()
```

- `result` is of type [AutomaticLocationUpdatesTaskInfo](./src/definitions/AutomaticLocationUpdatesTaskInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().users().get(listAutomaticLocationUpdatesUsersParameters)
await rc.revoke()
```
- Parameter `listAutomaticLocationUpdatesUsersParameters` is of type [ListAutomaticLocationUpdatesUsersParameters](./src/definitions/ListAutomaticLocationUpdatesUsersParameters.ts)
- `result` is of type [AutomaticLocationUpdatesUserList](./src/definitions/AutomaticLocationUpdatesUserList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().users().bulkAssign().post(bulkAssignAutomaticaLocationUpdatesUsers)
await rc.revoke()
```
- Parameter `bulkAssignAutomaticaLocationUpdatesUsers` is of type [BulkAssignAutomaticaLocationUpdatesUsers](./src/definitions/BulkAssignAutomaticaLocationUpdatesUsers.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints().list(listWirelessPointsParameters)
await rc.revoke()
```
- Parameter `listWirelessPointsParameters` is of type [ListWirelessPointsParameters](./src/definitions/ListWirelessPointsParameters.ts)
- `result` is of type [WirelessPointsList](./src/definitions/WirelessPointsList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints().post(createWirelessPoint)
await rc.revoke()
```
- Parameter `createWirelessPoint` is of type [CreateWirelessPoint](./src/definitions/CreateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./src/definitions/WirelessPointInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPointsBulkCreate().post(createMultipleWirelessPointsRequest)
await rc.revoke()
```
- Parameter `createMultipleWirelessPointsRequest` is of type [CreateMultipleWirelessPointsRequest](./src/definitions/CreateMultipleWirelessPointsRequest.ts)
- `result` is of type [CreateMultipleWirelessPointsResponse](./src/definitions/CreateMultipleWirelessPointsResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPointsBulkUpdate().post(updateMultipleWirelessPointsRequest)
await rc.revoke()
```
- Parameter `updateMultipleWirelessPointsRequest` is of type [UpdateMultipleWirelessPointsRequest](./src/definitions/UpdateMultipleWirelessPointsRequest.ts)
- `result` is of type [UpdateMultipleWirelessPointsResponse](./src/definitions/UpdateMultipleWirelessPointsResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPointsBulkValidate().post(validateMultipleWirelessPointsRequest)
await rc.revoke()
```
- Parameter `validateMultipleWirelessPointsRequest` is of type [ValidateMultipleWirelessPointsRequest](./src/definitions/ValidateMultipleWirelessPointsRequest.ts)
- `result` is of type [ValidateMultipleWirelessPointsResponse](./src/definitions/ValidateMultipleWirelessPointsResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints(pointId).get()
await rc.revoke()
```

- `result` is of type [WirelessPointInfo](./src/definitions/WirelessPointInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints(pointId).put(updateWirelessPoint)
await rc.revoke()
```
- Parameter `updateWirelessPoint` is of type [UpdateWirelessPoint](./src/definitions/UpdateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./src/definitions/WirelessPointInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints(pointId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyLocations().post(emergencyLocationInfoRequest)
await rc.revoke()
```
- Parameter `emergencyLocationInfoRequest` is of type [EmergencyLocationInfoRequest](./src/definitions/EmergencyLocationInfoRequest.ts)
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
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyLocations().list(listEmergencyLocationsParameters)
await rc.revoke()
```
- Parameter `listEmergencyLocationsParameters` is of type [ListEmergencyLocationsParameters](./src/definitions/ListEmergencyLocationsParameters.ts)
- `result` is of type [EmergencyLocationList](./src/definitions/EmergencyLocationList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyLocations(locationId).get()
await rc.revoke()
```

- `result` is of type [EmergencyLocationInfo](./src/definitions/EmergencyLocationInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).emergencyLocations(locationId).put(emergencyLocationInfoRequest)
await rc.revoke()
```
- Parameter `emergencyLocationInfoRequest` is of type [EmergencyLocationInfoRequest](./src/definitions/EmergencyLocationInfoRequest.ts)
- `result` is of type [EmergencyLocationInfo](./src/definitions/EmergencyLocationInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension().list(listExtensionsParameters)
await rc.revoke()
```
- Parameter `listExtensionsParameters` is of type [ListExtensionsParameters](./src/definitions/ListExtensionsParameters.ts)
- `result` is of type [GetExtensionListResponse](./src/definitions/GetExtensionListResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension().post(extensionCreationRequest)
await rc.revoke()
```
- Parameter `extensionCreationRequest` is of type [ExtensionCreationRequest](./src/definitions/ExtensionCreationRequest.ts)
- `result` is of type [ExtensionCreationResponse](./src/definitions/ExtensionCreationResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).get()
await rc.revoke()
```

- `result` is of type [GetExtensionInfoResponse](./src/definitions/GetExtensionInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).put(extensionUpdateRequest)
await rc.revoke()
```
- Parameter `extensionUpdateRequest` is of type [ExtensionUpdateRequest](./src/definitions/ExtensionUpdateRequest.ts)
- `result` is of type [GetExtensionInfoResponse](./src/definitions/GetExtensionInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).delete(deleteExtensionParameters)
await rc.revoke()
```
- Parameter `deleteExtensionParameters` is of type [DeleteExtensionParameters](./src/definitions/DeleteExtensionParameters.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).activeCalls().get(listExtensionActiveCallsParameters)
await rc.revoke()
```
- Parameter `listExtensionActiveCallsParameters` is of type [ListExtensionActiveCallsParameters](./src/definitions/ListExtensionActiveCallsParameters.ts)
- `result` is of type [UserActiveCallsResponse](./src/definitions/UserActiveCallsResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBookSync().get(syncAddressBookParameters)
await rc.revoke()
```
- Parameter `syncAddressBookParameters` is of type [SyncAddressBookParameters](./src/definitions/SyncAddressBookParameters.ts)
- `result` is of type [AddressBookSync](./src/definitions/AddressBookSync.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact().list(listContactsParameters)
await rc.revoke()
```
- Parameter `listContactsParameters` is of type [ListContactsParameters](./src/definitions/ListContactsParameters.ts)
- `result` is of type [ContactList](./src/definitions/ContactList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact().post(personalContactRequest, createContactParameters)
await rc.revoke()
```
- Parameter `personalContactRequest` is of type [PersonalContactRequest](./src/definitions/PersonalContactRequest.ts)
- Parameter `createContactParameters` is of type [CreateContactParameters](./src/definitions/CreateContactParameters.ts)
- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact(contactId).get()
await rc.revoke()
```

- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact(contactId).put(personalContactRequest, updateContactParameters)
await rc.revoke()
```
- Parameter `personalContactRequest` is of type [PersonalContactRequest](./src/definitions/PersonalContactRequest.ts)
- Parameter `updateContactParameters` is of type [UpdateContactParameters](./src/definitions/UpdateContactParameters.ts)
- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact(contactId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule().list(listAnsweringRulesParameters)
await rc.revoke()
```
- Parameter `listAnsweringRulesParameters` is of type [ListAnsweringRulesParameters](./src/definitions/ListAnsweringRulesParameters.ts)
- `result` is of type [UserAnsweringRuleList](./src/definitions/UserAnsweringRuleList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listAnsweringRules) in API Explorer.


## Create Call Handling Rule

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule().post(createAnsweringRuleRequest)
await rc.revoke()
```
- Parameter `createAnsweringRuleRequest` is of type [CreateAnsweringRuleRequest](./src/definitions/CreateAnsweringRuleRequest.ts)
- `result` is of type [CustomAnsweringRuleInfo](./src/definitions/CustomAnsweringRuleInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createAnsweringRule) in API Explorer.


## Get Call Handling Rule

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserAnsweringRules`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule(ruleId).get(readAnsweringRuleParameters)
await rc.revoke()
```
- Parameter `readAnsweringRuleParameters` is of type [ReadAnsweringRuleParameters](./src/definitions/ReadAnsweringRuleParameters.ts)
- `result` is of type [AnsweringRuleInfo](./src/definitions/AnsweringRuleInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readAnsweringRule) in API Explorer.


## Update Call Handling Rule

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule(ruleId).put(updateAnsweringRuleRequest)
await rc.revoke()
```
- Parameter `updateAnsweringRuleRequest` is of type [UpdateAnsweringRuleRequest](./src/definitions/UpdateAnsweringRuleRequest.ts)
- `result` is of type [AnsweringRuleInfo](./src/definitions/AnsweringRuleInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateAnsweringRule) in API Explorer.


## Delete Call Handling Rule

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule(ruleId).delete()
await rc.revoke()
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteAnsweringRule) in API Explorer.


## Get Authorization Profile

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).authzProfile().get()
await rc.revoke()
```

- `result` is of type [AuthProfileResource](./src/definitions/AuthProfileResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).authzProfile().check().get(checkUserPermissionParameters)
await rc.revoke()
```
- Parameter `checkUserPermissionParameters` is of type [CheckUserPermissionParameters](./src/definitions/CheckUserPermissionParameters.ts)
- `result` is of type [AuthProfileCheckResource](./src/definitions/AuthProfileCheckResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).businessHours().get()
await rc.revoke()
```

- `result` is of type [GetUserBusinessHoursResponse](./src/definitions/GetUserBusinessHoursResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).businessHours().put(userBusinessHoursUpdateRequest)
await rc.revoke()
```
- Parameter `userBusinessHoursUpdateRequest` is of type [UserBusinessHoursUpdateRequest](./src/definitions/UserBusinessHoursUpdateRequest.ts)
- `result` is of type [UserBusinessHoursUpdateResponse](./src/definitions/UserBusinessHoursUpdateResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLog().list(readUserCallLogParameters)
await rc.revoke()
```
- Parameter `readUserCallLogParameters` is of type [ReadUserCallLogParameters](./src/definitions/ReadUserCallLogParameters.ts)
- `result` is of type [UserCallLogResponse](./src/definitions/UserCallLogResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLog().delete(deleteUserCallLogParameters)
await rc.revoke()
```
- Parameter `deleteUserCallLogParameters` is of type [DeleteUserCallLogParameters](./src/definitions/DeleteUserCallLogParameters.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLogSync().get(syncUserCallLogParameters)
await rc.revoke()
```
- Parameter `syncUserCallLogParameters` is of type [SyncUserCallLogParameters](./src/definitions/SyncUserCallLogParameters.ts)
- `result` is of type [CallLogSync](./src/definitions/CallLogSync.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLog(callRecordId).get(readUserCallRecordParameters)
await rc.revoke()
```
- Parameter `readUserCallRecordParameters` is of type [ReadUserCallRecordParameters](./src/definitions/ReadUserCallRecordParameters.ts)
- `result` is of type [UserCallLogRecord](./src/definitions/UserCallLogRecord.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallRecord) in API Explorer.


## Update User Call Queues

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queues`
Rate Limit Group|`Medium`
App Permission|`Accounts`
User Permission|`JoinLeaveCallQueue`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callQueues().put(userCallQueues)
await rc.revoke()
```
- Parameter `userCallQueues` is of type [UserCallQueues](./src/definitions/UserCallQueues.ts)
- `result` is of type [UserCallQueues](./src/definitions/UserCallQueues.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().get()
await rc.revoke()
```

- `result` is of type [CallerBlockingSettings](./src/definitions/CallerBlockingSettings.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().put(callerBlockingSettingsUpdate)
await rc.revoke()
```
- Parameter `callerBlockingSettingsUpdate` is of type [CallerBlockingSettingsUpdate](./src/definitions/CallerBlockingSettingsUpdate.ts)
- `result` is of type [CallerBlockingSettings](./src/definitions/CallerBlockingSettings.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers().list(listBlockedAllowedNumbersParameters)
await rc.revoke()
```
- Parameter `listBlockedAllowedNumbersParameters` is of type [ListBlockedAllowedNumbersParameters](./src/definitions/ListBlockedAllowedNumbersParameters.ts)
- `result` is of type [BlockedAllowedPhoneNumbersList](./src/definitions/BlockedAllowedPhoneNumbersList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers().post(addBlockedAllowedPhoneNumber)
await rc.revoke()
```
- Parameter `addBlockedAllowedPhoneNumber` is of type [AddBlockedAllowedPhoneNumber](./src/definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type [BlockedAllowedPhoneNumberInfo](./src/definitions/BlockedAllowedPhoneNumberInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers(blockedNumberId).get()
await rc.revoke()
```

- `result` is of type [BlockedAllowedPhoneNumberInfo](./src/definitions/BlockedAllowedPhoneNumberInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers(blockedNumberId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers(blockedNumberId).put(addBlockedAllowedPhoneNumber)
await rc.revoke()
```
- Parameter `addBlockedAllowedPhoneNumber` is of type [AddBlockedAllowedPhoneNumber](./src/definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type [BlockedAllowedPhoneNumberInfo](./src/definitions/BlockedAllowedPhoneNumberInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerId().get()
await rc.revoke()
```

- `result` is of type [ExtensionCallerIdInfo](./src/definitions/ExtensionCallerIdInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerId().put(extensionCallerIdInfo)
await rc.revoke()
```
- Parameter `extensionCallerIdInfo` is of type [ExtensionCallerIdInfo](./src/definitions/ExtensionCallerIdInfo.ts)
- `result` is of type [ExtensionCallerIdInfo](./src/definitions/ExtensionCallerIdInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).companyPager().post(createInternalTextMessageRequest)
await rc.revoke()
```
- Parameter `createInternalTextMessageRequest` is of type [CreateInternalTextMessageRequest](./src/definitions/CreateInternalTextMessageRequest.ts)
- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).conferencing().get(readConferencingSettingsParameters)
await rc.revoke()
```
- Parameter `readConferencingSettingsParameters` is of type [ReadConferencingSettingsParameters](./src/definitions/ReadConferencingSettingsParameters.ts)
- `result` is of type [GetConferencingInfoResponse](./src/definitions/GetConferencingInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).conferencing().put(updateConferencingInfoRequest)
await rc.revoke()
```
- Parameter `updateConferencingInfoRequest` is of type [UpdateConferencingInfoRequest](./src/definitions/UpdateConferencingInfoRequest.ts)
- `result` is of type [GetConferencingInfoResponse](./src/definitions/GetConferencingInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).device().get(listExtensionDevicesParameters)
await rc.revoke()
```
- Parameter `listExtensionDevicesParameters` is of type [ListExtensionDevicesParameters](./src/definitions/ListExtensionDevicesParameters.ts)
- `result` is of type [GetExtensionDevicesResponse](./src/definitions/GetExtensionDevicesResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).favorite().get()
await rc.revoke()
```

- `result` is of type [FavoriteContactList](./src/definitions/FavoriteContactList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).favorite().put(favoriteCollection)
await rc.revoke()
```
- Parameter `favoriteCollection` is of type [FavoriteCollection](./src/definitions/FavoriteCollection.ts)
- `result` is of type [FavoriteContactList](./src/definitions/FavoriteContactList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).fax().post(createFaxMessageRequest)
await rc.revoke()
```
- Parameter `createFaxMessageRequest` is of type [CreateFaxMessageRequest](./src/definitions/CreateFaxMessageRequest.ts)
- `result` is of type [FaxResponse](./src/definitions/FaxResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).features().get(readUserFeaturesParameters)
await rc.revoke()
```
- Parameter `readUserFeaturesParameters` is of type [ReadUserFeaturesParameters](./src/definitions/ReadUserFeaturesParameters.ts)
- `result` is of type [FeatureList](./src/definitions/FeatureList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber().list(listForwardingNumbersParameters)
await rc.revoke()
```
- Parameter `listForwardingNumbersParameters` is of type [ListForwardingNumbersParameters](./src/definitions/ListForwardingNumbersParameters.ts)
- `result` is of type [GetExtensionForwardingNumberListResponse](./src/definitions/GetExtensionForwardingNumberListResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber().post(createForwardingNumberRequest)
await rc.revoke()
```
- Parameter `createForwardingNumberRequest` is of type [CreateForwardingNumberRequest](./src/definitions/CreateForwardingNumberRequest.ts)
- `result` is of type [ForwardingNumberInfo](./src/definitions/ForwardingNumberInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber(forwardingNumberId).get()
await rc.revoke()
```

- `result` is of type [ForwardingNumberInfo](./src/definitions/ForwardingNumberInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber(forwardingNumberId).put(updateForwardingNumberRequest)
await rc.revoke()
```
- Parameter `updateForwardingNumberRequest` is of type [UpdateForwardingNumberRequest](./src/definitions/UpdateForwardingNumberRequest.ts)
- `result` is of type [ForwardingNumberInfo](./src/definitions/ForwardingNumberInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber(forwardingNumberId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).grant().get(listExtensionGrantsParameters)
await rc.revoke()
```
- Parameter `listExtensionGrantsParameters` is of type [ListExtensionGrantsParameters](./src/definitions/ListExtensionGrantsParameters.ts)
- `result` is of type [GetExtensionGrantListResponse](./src/definitions/GetExtensionGrantListResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).greeting().post(createCustomUserGreetingRequest)
await rc.revoke()
```
- Parameter `createCustomUserGreetingRequest` is of type [CreateCustomUserGreetingRequest](./src/definitions/CreateCustomUserGreetingRequest.ts)
- `result` is of type [CustomUserGreetingInfo](./src/definitions/CustomUserGreetingInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createCustomUserGreeting) in API Explorer.


## Get Custom Greeting

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadUserInfo`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).greeting(greetingId).get()
await rc.revoke()
```

- `result` is of type [CustomUserGreetingInfo](./src/definitions/CustomUserGreetingInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readCustomGreeting) in API Explorer.


## Get Scheduled Meetings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().list()
await rc.revoke()
```

- `result` is of type [MeetingsResource](./src/definitions/MeetingsResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().post(meetingRequestResource)
await rc.revoke()
```
- Parameter `meetingRequestResource` is of type [MeetingRequestResource](./src/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meetingRecordings().get(listUserMeetingRecordingsParameters)
await rc.revoke()
```
- Parameter `listUserMeetingRecordingsParameters` is of type [ListUserMeetingRecordingsParameters](./src/definitions/ListUserMeetingRecordingsParameters.ts)
- `result` is of type [ListMeetingRecordingsResponse](./src/definitions/ListMeetingRecordingsResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().serviceInfo().get()
await rc.revoke()
```

- `result` is of type [MeetingServiceInfoResource](./src/definitions/MeetingServiceInfoResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().serviceInfo().patch(meetingServiceInfoRequest)
await rc.revoke()
```
- Parameter `meetingServiceInfoRequest` is of type [MeetingServiceInfoRequest](./src/definitions/MeetingServiceInfoRequest.ts)
- `result` is of type [MeetingServiceInfoResource](./src/definitions/MeetingServiceInfoResource.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-updateMeetingServiceInfo) in API Explorer.


## Get Meeting Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).get()
await rc.revoke()
```

- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).put(meetingRequestResource)
await rc.revoke()
```
- Parameter `meetingRequestResource` is of type [MeetingRequestResource](./src/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).end().post()
await rc.revoke()
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-endMeeting) in API Explorer.


## Get Assistants

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meetingsConfiguration().assistants().get()
await rc.revoke()
```

- `result` is of type [AssistantsResource](./src/definitions/AssistantsResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meetingsConfiguration().assisted().get()
await rc.revoke()
```

- `result` is of type [AssistedUsersResource](./src/definitions/AssistedUsersResource.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore().list(listMessagesParameters)
await rc.revoke()
```
- Parameter `listMessagesParameters` is of type [ListMessagesParameters](./src/definitions/ListMessagesParameters.ts)
- `result` is of type [GetMessageList](./src/definitions/GetMessageList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore(messageId).get()
await rc.revoke()
```

- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore(messageId).put(updateMessageRequest, updateMessageParameters)
await rc.revoke()
```
- Parameter `updateMessageRequest` is of type [UpdateMessageRequest](./src/definitions/UpdateMessageRequest.ts)
- Parameter `updateMessageParameters` is of type [UpdateMessageParameters](./src/definitions/UpdateMessageParameters.ts)
- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore(messageId).delete(deleteMessageParameters)
await rc.revoke()
```
- Parameter `deleteMessageParameters` is of type [DeleteMessageParameters](./src/definitions/DeleteMessageParameters.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore(messageId).content(attachmentId).get(readMessageContentParameters)
await rc.revoke()
```
- Parameter `readMessageContentParameters` is of type [ReadMessageContentParameters](./src/definitions/ReadMessageContentParameters.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageSync().get(syncMessagesParameters)
await rc.revoke()
```
- Parameter `syncMessagesParameters` is of type [SyncMessagesParameters](./src/definitions/SyncMessagesParameters.ts)
- `result` is of type [GetMessageSyncResponse](./src/definitions/GetMessageSyncResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-syncMessages) in API Explorer.


## Create MMS Message

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/mms`
Rate Limit Group|`Medium`
App Permission|`SMS`
User Permission|`OutboundSMS`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).mms().post(createMmsMessage)
await rc.revoke()
```
- Parameter `createMmsMessage` is of type [CreateMMSMessage](./src/definitions/CreateMMSMessage.ts)
- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#MMS-createMMS) in API Explorer.


## Get Notification Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadMessagesNotificationsSettings`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).notificationSettings().get()
await rc.revoke()
```

- `result` is of type [NotificationSettings](./src/definitions/NotificationSettings.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).notificationSettings().put(notificationSettingsUpdateRequest)
await rc.revoke()
```
- Parameter `notificationSettingsUpdateRequest` is of type [NotificationSettingsUpdateRequest](./src/definitions/NotificationSettingsUpdateRequest.ts)
- `result` is of type [NotificationSettings](./src/definitions/NotificationSettings.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).phoneNumber().get(listExtensionPhoneNumbersParameters)
await rc.revoke()
```
- Parameter `listExtensionPhoneNumbersParameters` is of type [ListExtensionPhoneNumbersParameters](./src/definitions/ListExtensionPhoneNumbersParameters.ts)
- `result` is of type [GetExtensionPhoneNumbersResponse](./src/definitions/GetExtensionPhoneNumbersResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).presence().get(readUserPresenceStatusParameters)
await rc.revoke()
```
- Parameter `readUserPresenceStatusParameters` is of type [ReadUserPresenceStatusParameters](./src/definitions/ReadUserPresenceStatusParameters.ts)
- `result` is of type [GetPresenceInfo](./src/definitions/GetPresenceInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).presence().put(presenceInfoResource)
await rc.revoke()
```
- Parameter `presenceInfoResource` is of type [PresenceInfoResource](./src/definitions/PresenceInfoResource.ts)
- `result` is of type [PresenceInfoResponse](./src/definitions/PresenceInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage().list()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage().post(createUserProfileImageRequest)
await rc.revoke()
```
- Parameter `createUserProfileImageRequest` is of type [CreateUserProfileImageRequest](./src/definitions/CreateUserProfileImageRequest.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage().put(updateUserProfileImageRequest)
await rc.revoke()
```
- Parameter `updateUserProfileImageRequest` is of type [UpdateUserProfileImageRequest](./src/definitions/UpdateUserProfileImageRequest.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage(scaleSize).get()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).ringOut().post(makeRingOutRequest)
await rc.revoke()
```
- Parameter `makeRingOutRequest` is of type [MakeRingOutRequest](./src/definitions/MakeRingOutRequest.ts)
- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).ringOut(ringoutId).get()
await rc.revoke()
```

- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).ringOut(ringoutId).delete()
await rc.revoke()
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-deleteRingOutCall) in API Explorer.


## Make RingOut Call

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out`
Rate Limit Group|`Heavy`
App Permission|`RingOut`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).ringout().post(makeRingOutRequest)
await rc.revoke()
```
- Parameter `makeRingOutRequest` is of type [MakeRingOutRequest](./src/definitions/MakeRingOutRequest.ts)
- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).ringout(ringoutId).get()
await rc.revoke()
```

- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).ringout(ringoutId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).sms().post(createSmsMessage)
await rc.revoke()
```
- Parameter `createSmsMessage` is of type [CreateSMSMessage](./src/definitions/CreateSMSMessage.ts)
- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).unifiedPresence().get()
await rc.revoke()
```

- `result` is of type [UnifiedPresence](./src/definitions/UnifiedPresence.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).unifiedPresence().patch(updateUnifiedPresence)
await rc.revoke()
```
- Parameter `updateUnifiedPresence` is of type [UpdateUnifiedPresence](./src/definitions/UpdateUnifiedPresence.ts)
- `result` is of type [UnifiedPresence](./src/definitions/UnifiedPresence.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).videoConfiguration().get()
await rc.revoke()
```

- `result` is of type [UserVideoConfiguration](./src/definitions/UserVideoConfiguration.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).videoConfiguration().put(userVideoConfiguration)
await rc.revoke()
```
- Parameter `userVideoConfiguration` is of type [UserVideoConfiguration](./src/definitions/UserVideoConfiguration.ts)
- `result` is of type [UserVideoConfiguration](./src/definitions/UserVideoConfiguration.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).greeting().post(createCompanyGreetingRequest)
await rc.revoke()
```
- Parameter `createCompanyGreetingRequest` is of type [CreateCompanyGreetingRequest](./src/definitions/CreateCompanyGreetingRequest.ts)
- `result` is of type [CustomCompanyGreetingInfo](./src/definitions/CustomCompanyGreetingInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createCompanyGreeting) in API Explorer.


## Create IVR Menu

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-menus`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`AutoReceptionist`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).ivrMenus().post(ivrMenuInfo)
await rc.revoke()
```
- Parameter `ivrMenuInfo` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-createIVRMenu) in API Explorer.


## Get IVR Menu

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`AutoReceptionist`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).ivrMenus(ivrMenuId).get()
await rc.revoke()
```

- `result` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-readIVRMenu) in API Explorer.


## Update IVR Menu

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`AutoReceptionist`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).ivrMenus(ivrMenuId).put(ivrMenuInfo)
await rc.revoke()
```
- Parameter `ivrMenuInfo` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-updateIVRMenu) in API Explorer.


## Create IVR Prompts

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-prompts`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`EditCompanyGreetings`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).ivrPrompts().post(createIvrPromptRequest)
await rc.revoke()
```
- Parameter `createIvrPromptRequest` is of type [CreateIvrPromptRequest](./src/definitions/CreateIvrPromptRequest.ts)
- `result` is of type [PromptInfo](./src/definitions/PromptInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-createIVRPrompt) in API Explorer.


## Get IVR Prompt List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-prompts`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyGreetings`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).ivrPrompts().list()
await rc.revoke()
```

- `result` is of type [IVRPrompts](./src/definitions/IVRPrompts.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-listIVRPrompts) in API Explorer.


## Get IVR Prompt

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyGreetings`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(promptId).get()
await rc.revoke()
```

- `result` is of type [PromptInfo](./src/definitions/PromptInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-readIVRPrompt) in API Explorer.


## Delete IVR Prompt

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`EditCompanyGreetings`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(promptId).delete()
await rc.revoke()
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-deleteIVRPrompt) in API Explorer.


## Update IVR Prompt

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyGreetings`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(promptId).put(updateIvrPromptRequest)
await rc.revoke()
```
- Parameter `updateIvrPromptRequest` is of type [UpdateIVRPromptRequest](./src/definitions/UpdateIVRPromptRequest.ts)
- `result` is of type [PromptInfo](./src/definitions/PromptInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-updateIVRPrompt) in API Explorer.


## Get IVR Prompt Content

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}/content`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyGreetings`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(promptId).content().get()
await rc.revoke()
```

- `result` is of type [Buffer](https://nodejs.org/api/buffer.html)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-readIVRPromptContent) in API Explorer.

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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).meetingRecordings().get(listAccountMeetingRecordingsParameters)
await rc.revoke()
```
- Parameter `listAccountMeetingRecordingsParameters` is of type [ListAccountMeetingRecordingsParameters](./src/definitions/ListAccountMeetingRecordingsParameters.ts)
- `result` is of type [ListMeetingRecordingsResponse](./src/definitions/ListMeetingRecordingsResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Recordings-listAccountMeetingRecordings) in API Explorer.


## Get Message Store Configuration

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/message-store-configuration`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`AccountAdministration`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).messageStoreConfiguration().get()
await rc.revoke()
```

- `result` is of type [MessageStoreConfiguration](./src/definitions/MessageStoreConfiguration.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).messageStoreConfiguration().put(messageStoreConfiguration)
await rc.revoke()
```
- Parameter `messageStoreConfiguration` is of type [MessageStoreConfiguration](./src/definitions/MessageStoreConfiguration.ts)
- `result` is of type [MessageStoreConfiguration](./src/definitions/MessageStoreConfiguration.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).messageStoreReport().post(createMessageStoreReportRequest)
await rc.revoke()
```
- Parameter `createMessageStoreReportRequest` is of type [CreateMessageStoreReportRequest](./src/definitions/CreateMessageStoreReportRequest.ts)
- `result` is of type [MessageStoreReport](./src/definitions/MessageStoreReport.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).messageStoreReport(taskId).get()
await rc.revoke()
```

- `result` is of type [MessageStoreReport](./src/definitions/MessageStoreReport.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).messageStoreReport(taskId).archive().list()
await rc.revoke()
```

- `result` is of type [MessageStoreReportArchive](./src/definitions/MessageStoreReportArchive.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).messageStoreReport(taskId).archive(archiveId).get()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).pagingOnlyGroups(pagingOnlyGroupId).bulkAssign().post(editPagingGroupRequest)
await rc.revoke()
```
- Parameter `editPagingGroupRequest` is of type [EditPagingGroupRequest](./src/definitions/EditPagingGroupRequest.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).pagingOnlyGroups(pagingOnlyGroupId).devices().get(listPagingGroupDevicesParameters)
await rc.revoke()
```
- Parameter `listPagingGroupDevicesParameters` is of type [ListPagingGroupDevicesParameters](./src/definitions/ListPagingGroupDevicesParameters.ts)
- `result` is of type [PagingOnlyGroupDevices](./src/definitions/PagingOnlyGroupDevices.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).pagingOnlyGroups(pagingOnlyGroupId).users().get(listPagingGroupUsersParameters)
await rc.revoke()
```
- Parameter `listPagingGroupUsersParameters` is of type [ListPagingGroupUsersParameters](./src/definitions/ListPagingGroupUsersParameters.ts)
- `result` is of type [PagingOnlyGroupUsers](./src/definitions/PagingOnlyGroupUsers.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).phoneNumber().list(listAccountPhoneNumbersParameters)
await rc.revoke()
```
- Parameter `listAccountPhoneNumbersParameters` is of type [ListAccountPhoneNumbersParameters](./src/definitions/ListAccountPhoneNumbersParameters.ts)
- `result` is of type [AccountPhoneNumbers](./src/definitions/AccountPhoneNumbers.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).phoneNumber(phoneNumberId).get()
await rc.revoke()
```

- `result` is of type [CompanyPhoneNumberInfo](./src/definitions/CompanyPhoneNumberInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).presence().get(readAccountPresenceParameters)
await rc.revoke()
```
- Parameter `readAccountPresenceParameters` is of type [ReadAccountPresenceParameters](./src/definitions/ReadAccountPresenceParameters.ts)
- `result` is of type [AccountPresenceInfo](./src/definitions/AccountPresenceInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).recording(recordingId).get()
await rc.revoke()
```

- `result` is of type [GetCallRecordingResponse](./src/definitions/GetCallRecordingResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).recording(recordingId).content().get()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).serviceInfo().get()
await rc.revoke()
```

- `result` is of type [GetServiceInfoResponse](./src/definitions/GetServiceInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().callOut().post(makeCallOutRequest)
await rc.revoke()
```
- Parameter `makeCallOutRequest` is of type [MakeCallOutRequest](./src/definitions/MakeCallOutRequest.ts)
- `result` is of type [CallSession](./src/definitions/CallSession.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-createCallOutCallSession) in API Explorer.


## Get Call Session Status

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).get(readCallSessionStatusParameters)
await rc.revoke()
```
- Parameter `readCallSessionStatusParameters` is of type [ReadCallSessionStatusParameters](./src/definitions/ReadCallSessionStatusParameters.ts)
- `result` is of type [CallSession](./src/definitions/CallSession.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).delete()
await rc.revoke()
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-deleteCallSession) in API Explorer.


## Get Call Party Status

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).get()
await rc.revoke()
```

- `result` is of type [CallParty](./src/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-readCallPartyStatus) in API Explorer.


## Update Call Party

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).patch(partyUpdateRequest)
await rc.revoke()
```
- Parameter `partyUpdateRequest` is of type [PartyUpdateRequest](./src/definitions/PartyUpdateRequest.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).answer().post(answerTarget)
await rc.revoke()
```
- Parameter `answerTarget` is of type [AnswerTarget](./src/definitions/AnswerTarget.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-answerCallParty) in API Explorer.


## Call Flip on Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).flip().post(callPartyFlip)
await rc.revoke()
```
- Parameter `callPartyFlip` is of type [CallPartyFlip](./src/definitions/CallPartyFlip.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).forward().post(forwardTarget)
await rc.revoke()
```
- Parameter `forwardTarget` is of type [ForwardTarget](./src/definitions/ForwardTarget.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).hold().post()
await rc.revoke()
```

- `result` is of type [CallParty](./src/definitions/CallParty.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).ignore().post(ignoreRequestBody)
await rc.revoke()
```
- Parameter `ignoreRequestBody` is of type [IgnoreRequestBody](./src/definitions/IgnoreRequestBody.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).park().post()
await rc.revoke()
```

- `result` is of type [CallParty](./src/definitions/CallParty.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).pickup().post(pickupTarget)
await rc.revoke()
```
- Parameter `pickupTarget` is of type [PickupTarget](./src/definitions/PickupTarget.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).recordings().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).recordings(recordingId).patch(callRecordingUpdate, pauseResumeCallRecordingParameters)
await rc.revoke()
```
- Parameter `callRecordingUpdate` is of type [CallRecordingUpdate](./src/definitions/CallRecordingUpdate.ts)
- Parameter `pauseResumeCallRecordingParameters` is of type [PauseResumeCallRecordingParameters](./src/definitions/PauseResumeCallRecordingParameters.ts)
- `result` is of type [CallRecording](./src/definitions/CallRecording.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).reject().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).reply().post(callPartyReply)
await rc.revoke()
```
- Parameter `callPartyReply` is of type [CallPartyReply](./src/definitions/CallPartyReply.ts)
- `result` is of type [ReplyParty](./src/definitions/ReplyParty.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).supervise().post(partySuperviseRequest)
await rc.revoke()
```
- Parameter `partySuperviseRequest` is of type [PartySuperviseRequest](./src/definitions/PartySuperviseRequest.ts)
- `result` is of type [PartySuperviseResponse](./src/definitions/PartySuperviseResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).transfer().post(transferTarget)
await rc.revoke()
```
- Parameter `transferTarget` is of type [TransferTarget](./src/definitions/TransferTarget.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).unhold().post()
await rc.revoke()
```

- `result` is of type [CallParty](./src/definitions/CallParty.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).supervise().post(superviseCallSessionRequest)
await rc.revoke()
```
- Parameter `superviseCallSessionRequest` is of type [SuperviseCallSessionRequest](./src/definitions/SuperviseCallSessionRequest.ts)
- `result` is of type [SuperviseCallSession](./src/definitions/SuperviseCallSession.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).templates().list(listUserTemplatesParameters)
await rc.revoke()
```
- Parameter `listUserTemplatesParameters` is of type [ListUserTemplatesParameters](./src/definitions/ListUserTemplatesParameters.ts)
- `result` is of type [UserTemplates](./src/definitions/UserTemplates.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).account(accountId).templates(templateId).get()
await rc.revoke()
```

- `result` is of type [TemplateInfo](./src/definitions/TemplateInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-readUserTemplate) in API Explorer.


## Register SIP Device

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/client-info/sip-provision`
Rate Limit Group|`Heavy`
App Permission|`VoipCalling`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).clientInfo().sipProvision().post(createSipRegistrationRequest)
await rc.revoke()
```
- Parameter `createSipRegistrationRequest` is of type [CreateSipRegistrationRequest](./src/definitions/CreateSipRegistrationRequest.ts)
- `result` is of type [CreateSipRegistrationResponse](./src/definitions/CreateSipRegistrationResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#SIP-createSIPRegistration) in API Explorer.


## Get Country List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/country`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).dictionary().country().list(listCountriesParameters)
await rc.revoke()
```
- Parameter `listCountriesParameters` is of type [ListCountriesParameters](./src/definitions/ListCountriesParameters.ts)
- `result` is of type [GetCountryListResponse](./src/definitions/GetCountryListResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).dictionary().country(countryId).get()
await rc.revoke()
```

- `result` is of type [GetCountryInfoDictionaryResponse](./src/definitions/GetCountryInfoDictionaryResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).dictionary().faxCoverPage().get(listFaxCoverPagesParameters)
await rc.revoke()
```
- Parameter `listFaxCoverPagesParameters` is of type [ListFaxCoverPagesParameters](./src/definitions/ListFaxCoverPagesParameters.ts)
- `result` is of type [ListFaxCoverPagesResponse](./src/definitions/ListFaxCoverPagesResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).dictionary().greeting().list(listStandardGreetingsParameters)
await rc.revoke()
```
- Parameter `listStandardGreetingsParameters` is of type [ListStandardGreetingsParameters](./src/definitions/ListStandardGreetingsParameters.ts)
- `result` is of type [DictionaryGreetingList](./src/definitions/DictionaryGreetingList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listStandardGreetings) in API Explorer.


## Get Standard Greeting

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/greeting/{greetingId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).dictionary().greeting(greetingId).get()
await rc.revoke()
```

- `result` is of type [DictionaryGreetingInfo](./src/definitions/DictionaryGreetingInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readStandardGreeting) in API Explorer.


## Get Language List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/dictionary/language`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).dictionary().language().list()
await rc.revoke()
```

- `result` is of type [LanguageList](./src/definitions/LanguageList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).dictionary().language(languageId).get()
await rc.revoke()
```

- `result` is of type [LanguageInfo](./src/definitions/LanguageInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).dictionary().location().get(listLocationsParameters)
await rc.revoke()
```
- Parameter `listLocationsParameters` is of type [ListLocationsParameters](./src/definitions/ListLocationsParameters.ts)
- `result` is of type [GetLocationListResponse](./src/definitions/GetLocationListResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).dictionary().state().list(listStatesParameters)
await rc.revoke()
```
- Parameter `listStatesParameters` is of type [ListStatesParameters](./src/definitions/ListStatesParameters.ts)
- `result` is of type [GetStateListResponse](./src/definitions/GetStateListResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).dictionary().state(stateId).get()
await rc.revoke()
```

- `result` is of type [GetStateInfoResponse](./src/definitions/GetStateInfoResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).dictionary().timezone().list(listTimezonesParameters)
await rc.revoke()
```
- Parameter `listTimezonesParameters` is of type [ListTimezonesParameters](./src/definitions/ListTimezonesParameters.ts)
- `result` is of type [GetTimezoneListResponse](./src/definitions/GetTimezoneListResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).dictionary().timezone(timezoneId).get(readTimezoneParameters)
await rc.revoke()
```
- Parameter `readTimezoneParameters` is of type [ReadTimezoneParameters](./src/definitions/ReadTimezoneParameters.ts)
- `result` is of type [GetTimezoneInfoResponse](./src/definitions/GetTimezoneInfoResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readTimezone) in API Explorer.


## Create Card

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/cards`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().cards().post(glipMessageAttachmentInfoRequest, createGlipCardParameters)
await rc.revoke()
```
- Parameter `glipMessageAttachmentInfoRequest` is of type [GlipMessageAttachmentInfoRequest](./src/definitions/GlipMessageAttachmentInfoRequest.ts)
- Parameter `createGlipCardParameters` is of type [CreateGlipCardParameters](./src/definitions/CreateGlipCardParameters.ts)
- `result` is of type [GlipMessageAttachmentInfo](./src/definitions/GlipMessageAttachmentInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipCard) in API Explorer.


## Get Card

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/cards/{cardId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().cards(cardId).get()
await rc.revoke()
```

- `result` is of type [GlipMessageAttachmentInfo](./src/definitions/GlipMessageAttachmentInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipCard) in API Explorer.


## Update Card

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/glip/cards/{cardId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().cards(cardId).put(glipMessageAttachmentInfoRequest)
await rc.revoke()
```
- Parameter `glipMessageAttachmentInfoRequest` is of type [GlipMessageAttachmentInfoRequest](./src/definitions/GlipMessageAttachmentInfoRequest.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-updateGlipCard) in API Explorer.


## Delete Card

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/v1.0/glip/cards/{cardId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().cards(cardId).delete()
await rc.revoke()
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-deleteGlipCard) in API Explorer.


## Get Chats

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/chats`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats().list(listGlipChatsParameters)
await rc.revoke()
```
- Parameter `listGlipChatsParameters` is of type [ListGlipChatsParameters](./src/definitions/ListGlipChatsParameters.ts)
- `result` is of type [GlipChatsList](./src/definitions/GlipChatsList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).get()
await rc.revoke()
```

- `result` is of type [GlipChatInfo](./src/definitions/GlipChatInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).favorite().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).notes().post(glipNoteCreate)
await rc.revoke()
```
- Parameter `glipNoteCreate` is of type [GlipNoteCreate](./src/definitions/GlipNoteCreate.ts)
- `result` is of type [GlipNoteInfo](./src/definitions/GlipNoteInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).notes().get(listChatNotesParameters)
await rc.revoke()
```
- Parameter `listChatNotesParameters` is of type [ListChatNotesParameters](./src/definitions/ListChatNotesParameters.ts)
- `result` is of type [GlipNotesInfo](./src/definitions/GlipNotesInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).posts().list(readGlipPostsParameters)
await rc.revoke()
```
- Parameter `readGlipPostsParameters` is of type [ReadGlipPostsParameters](./src/definitions/ReadGlipPostsParameters.ts)
- `result` is of type [GlipPostsList](./src/definitions/GlipPostsList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).posts().post(glipPostPostBody)
await rc.revoke()
```
- Parameter `glipPostPostBody` is of type [GlipPostPostBody](./src/definitions/GlipPostPostBody.ts)
- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).posts(postId).get()
await rc.revoke()
```

- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).posts(postId).patch(glipPatchPostBody)
await rc.revoke()
```
- Parameter `glipPatchPostBody` is of type [GlipPatchPostBody](./src/definitions/GlipPatchPostBody.ts)
- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).posts(postId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).read().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).tasks().get(listChatTasksParameters)
await rc.revoke()
```
- Parameter `listChatTasksParameters` is of type [ListChatTasksParameters](./src/definitions/ListChatTasksParameters.ts)
- `result` is of type [GlipTaskList](./src/definitions/GlipTaskList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).tasks().post(glipCreateTask)
await rc.revoke()
```
- Parameter `glipCreateTask` is of type [GlipCreateTask](./src/definitions/GlipCreateTask.ts)
- `result` is of type [GlipTaskInfo](./src/definitions/GlipTaskInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).unfavorite().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().chats(chatId).unread().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().companies(companyId).get()
await rc.revoke()
```

- `result` is of type [GlipCompany](./src/definitions/GlipCompany.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().conversations().list(listGlipConversationsParameters)
await rc.revoke()
```
- Parameter `listGlipConversationsParameters` is of type [ListGlipConversationsParameters](./src/definitions/ListGlipConversationsParameters.ts)
- `result` is of type [GlipConversationsList](./src/definitions/GlipConversationsList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().conversations().post(createGlipConversationRequest)
await rc.revoke()
```
- Parameter `createGlipConversationRequest` is of type [CreateGlipConversationRequest](./src/definitions/CreateGlipConversationRequest.ts)
- `result` is of type [GlipConversationInfo](./src/definitions/GlipConversationInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().conversations(chatId).get()
await rc.revoke()
```

- `result` is of type [GlipConversationInfo](./src/definitions/GlipConversationInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().dataExport().post(createDataExportTaskRequest)
await rc.revoke()
```
- Parameter `createDataExportTaskRequest` is of type [CreateDataExportTaskRequest](./src/definitions/CreateDataExportTaskRequest.ts)
- `result` is of type [DataExportTask](./src/definitions/DataExportTask.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().dataExport().list(listDataExportTasksParameters)
await rc.revoke()
```
- Parameter `listDataExportTasksParameters` is of type [ListDataExportTasksParameters](./src/definitions/ListDataExportTasksParameters.ts)
- `result` is of type [DataExportTaskList](./src/definitions/DataExportTaskList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().dataExport(taskId).get()
await rc.revoke()
```

- `result` is of type [DataExportTask](./src/definitions/DataExportTask.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().dataExport(taskId).datasets(datasetId).get()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().events().list(readGlipEventsParameters)
await rc.revoke()
```
- Parameter `readGlipEventsParameters` is of type [ReadGlipEventsParameters](./src/definitions/ReadGlipEventsParameters.ts)
- `result` is of type [GlipEventsInfo](./src/definitions/GlipEventsInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().events().post(glipEventCreate)
await rc.revoke()
```
- Parameter `glipEventCreate` is of type [GlipEventCreate](./src/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().events(eventId).get()
await rc.revoke()
```

- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().events(eventId).put(glipEventCreate)
await rc.revoke()
```
- Parameter `glipEventCreate` is of type [GlipEventCreate](./src/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().events(eventId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().everyone().get()
await rc.revoke()
```

- `result` is of type [GlipEveryoneInfo](./src/definitions/GlipEveryoneInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().everyone().patch(updateGlipEveryoneRequest)
await rc.revoke()
```
- Parameter `updateGlipEveryoneRequest` is of type [UpdateGlipEveryoneRequest](./src/definitions/UpdateGlipEveryoneRequest.ts)
- `result` is of type [GlipEveryoneInfo](./src/definitions/GlipEveryoneInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().favorites().get(listFavoriteChatsParameters)
await rc.revoke()
```
- Parameter `listFavoriteChatsParameters` is of type [ListFavoriteChatsParameters](./src/definitions/ListFavoriteChatsParameters.ts)
- `result` is of type [GlipChatsListWithoutNavigation](./src/definitions/GlipChatsListWithoutNavigation.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listFavoriteChats) in API Explorer.


## Get User Groups

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/groups`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().groups().list(listGlipGroupsParameters)
await rc.revoke()
```
- Parameter `listGlipGroupsParameters` is of type [ListGlipGroupsParameters](./src/definitions/ListGlipGroupsParameters.ts)
- `result` is of type [GlipGroupList](./src/definitions/GlipGroupList.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipGroups) in API Explorer.


## Create Group

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/groups`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().groups().post(glipCreateGroup)
await rc.revoke()
```
- Parameter `glipCreateGroup` is of type [GlipCreateGroup](./src/definitions/GlipCreateGroup.ts)
- `result` is of type [GlipGroupInfo](./src/definitions/GlipGroupInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-createGlipGroup) in API Explorer.


## Get Group

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/groups/{groupId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().groups(groupId).get()
await rc.revoke()
```

- `result` is of type [GlipGroupInfo](./src/definitions/GlipGroupInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipGroup) in API Explorer.


## Edit Group Members

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/groups/{groupId}/bulk-assign`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().groups(groupId).bulkAssign().post(editGroupRequest)
await rc.revoke()
```
- Parameter `editGroupRequest` is of type [EditGroupRequest](./src/definitions/EditGroupRequest.ts)
- `result` is of type [GlipGroupInfo](./src/definitions/GlipGroupInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Chats-assignGlipGroupMembers) in API Explorer.


## Create Event by Group ID

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/groups/{groupId}/events`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().groups(groupId).events().post(glipEventCreate)
await rc.revoke()
```
- Parameter `glipEventCreate` is of type [GlipEventCreate](./src/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().groups(groupId).events().get()
await rc.revoke()
```

- `result` is of type [GlipEventInfo](./src/definitions/GlipEventInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-listGroupEvents) in API Explorer.


## Get Group Posts

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/groups/{groupId}/posts`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().groups(groupId).posts().get(listGlipGroupPostsParameters)
await rc.revoke()
```
- Parameter `listGlipGroupPostsParameters` is of type [ListGlipGroupPostsParameters](./src/definitions/ListGlipGroupPostsParameters.ts)
- `result` is of type [GlipPosts](./src/definitions/GlipPosts.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-listGlipGroupPosts) in API Explorer.


## Create Post in Group

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/groups/{groupId}/posts`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().groups(groupId).posts().post(glipCreatePost)
await rc.revoke()
```
- Parameter `glipCreatePost` is of type [GlipCreatePost](./src/definitions/GlipCreatePost.ts)
- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipGroupPost) in API Explorer.


## Update Post

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/glip/groups/{groupId}/posts/{postId}/text`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().groups(groupId).posts(postId).text().put(string)
await rc.revoke()
```
- Parameter `string` is of type [string](./src/definitions/string.ts)
- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-updateGlipPostText) in API Explorer.


## Create Webhook in Group

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/groups/{groupId}/webhooks`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().groups(groupId).webhooks().post()
await rc.revoke()
```

- `result` is of type [GlipWebhookInfo](./src/definitions/GlipWebhookInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().groups(groupId).webhooks().get()
await rc.revoke()
```

- `result` is of type [GlipWebhookList](./src/definitions/GlipWebhookList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().notes(noteId).get()
await rc.revoke()
```

- `result` is of type [GetGlipNoteInfo](./src/definitions/GetGlipNoteInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().notes(noteId).patch(glipNoteCreate)
await rc.revoke()
```
- Parameter `glipNoteCreate` is of type [GlipNoteCreate](./src/definitions/GlipNoteCreate.ts)
- `result` is of type [GlipNoteInfo](./src/definitions/GlipNoteInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().notes(noteId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().notes(noteId).lock().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().notes(noteId).publish().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().notes(noteId).unlock().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().persons(personId).get()
await rc.revoke()
```

- `result` is of type [GlipPersonInfo](./src/definitions/GlipPersonInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipPerson) in API Explorer.


## Get Posts

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/posts`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().posts().get(listGlipPostsParameters)
await rc.revoke()
```
- Parameter `listGlipPostsParameters` is of type [ListGlipPostsParameters](./src/definitions/ListGlipPostsParameters.ts)
- `result` is of type [GlipPosts](./src/definitions/GlipPosts.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-listGlipPosts) in API Explorer.


## Create Post

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/v1.0/glip/posts`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().posts().post(glipCreatePost)
await rc.revoke()
```
- Parameter `glipCreatePost` is of type [GlipCreatePost](./src/definitions/GlipCreatePost.ts)
- `result` is of type [GlipPostInfo](./src/definitions/GlipPostInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createPost) in API Explorer.


## Get Preferences

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/glip/preferences`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().preferences().get()
await rc.revoke()
```

- `result` is of type [GlipPreferencesInfo](./src/definitions/GlipPreferencesInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().recent().chats().get(listRecentChatsParameters)
await rc.revoke()
```
- Parameter `listRecentChatsParameters` is of type [ListRecentChatsParameters](./src/definitions/ListRecentChatsParameters.ts)
- `result` is of type [GlipChatsListWithoutNavigation](./src/definitions/GlipChatsListWithoutNavigation.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().tasks(taskId).get()
await rc.revoke()
```

- `result` is of type [GlipTaskInfo](./src/definitions/GlipTaskInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().tasks(taskId).patch(glipUpdateTask)
await rc.revoke()
```
- Parameter `glipUpdateTask` is of type [GlipUpdateTask](./src/definitions/GlipUpdateTask.ts)
- `result` is of type [GlipTaskList](./src/definitions/GlipTaskList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().tasks(taskId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().tasks(taskId).complete().post(glipCompleteTask)
await rc.revoke()
```
- Parameter `glipCompleteTask` is of type [GlipCompleteTask](./src/definitions/GlipCompleteTask.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().teams().list(listGlipTeamsParameters)
await rc.revoke()
```
- Parameter `listGlipTeamsParameters` is of type [ListGlipTeamsParameters](./src/definitions/ListGlipTeamsParameters.ts)
- `result` is of type [GlipTeamsList](./src/definitions/GlipTeamsList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().teams().post(glipPostTeamBody)
await rc.revoke()
```
- Parameter `glipPostTeamBody` is of type [GlipPostTeamBody](./src/definitions/GlipPostTeamBody.ts)
- `result` is of type [GlipTeamInfo](./src/definitions/GlipTeamInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().teams(chatId).get()
await rc.revoke()
```

- `result` is of type [GlipTeamInfo](./src/definitions/GlipTeamInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().teams(chatId).patch(glipPatchTeamBody)
await rc.revoke()
```
- Parameter `glipPatchTeamBody` is of type [GlipPatchTeamBody](./src/definitions/GlipPatchTeamBody.ts)
- `result` is of type [GlipTeamInfo](./src/definitions/GlipTeamInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().teams(chatId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().teams(chatId).add().post(glipPostMembersListBody)
await rc.revoke()
```
- Parameter `glipPostMembersListBody` is of type [GlipPostMembersListBody](./src/definitions/GlipPostMembersListBody.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().teams(chatId).archive().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().teams(chatId).join().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().teams(chatId).leave().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().teams(chatId).remove().post(glipPostMembersIdsListBody)
await rc.revoke()
```
- Parameter `glipPostMembersIdsListBody` is of type [GlipPostMembersIdsListBody](./src/definitions/GlipPostMembersIdsListBody.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().teams(chatId).unarchive().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().webhooks().list()
await rc.revoke()
```

- `result` is of type [GlipWebhookList](./src/definitions/GlipWebhookList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().webhooks(webhookId).get()
await rc.revoke()
```

- `result` is of type [GlipWebhookList](./src/definitions/GlipWebhookList.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().webhooks(webhookId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().webhooks(webhookId).activate().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).glip().webhooks(webhookId).suspend().post()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).numberParser().parse().post(parsePhoneNumberRequest, parsePhoneNumberParameters)
await rc.revoke()
```
- Parameter `parsePhoneNumberRequest` is of type [ParsePhoneNumberRequest](./src/definitions/ParsePhoneNumberRequest.ts)
- Parameter `parsePhoneNumberParameters` is of type [ParsePhoneNumberParameters](./src/definitions/ParsePhoneNumberParameters.ts)
- `result` is of type [ParsePhoneNumberResponse](./src/definitions/ParsePhoneNumberResponse.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-parsePhoneNumber) in API Explorer.


## Get Service Status

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/status`
Rate Limit Group|`NoThrottling`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).status().get()
await rc.revoke()
```

- `result` is an empty string
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIStatus) in API Explorer.


## Get Subscriptions

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/v1.0/subscription`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).subscription().list()
await rc.revoke()
```

- `result` is of type [RecordsCollectionResourceSubscriptionResponse](./src/definitions/RecordsCollectionResourceSubscriptionResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).subscription().post(createSubscriptionRequest)
await rc.revoke()
```
- Parameter `createSubscriptionRequest` is of type [CreateSubscriptionRequest](./src/definitions/CreateSubscriptionRequest.ts)
- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).subscription(subscriptionId).get()
await rc.revoke()
```

- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)
- Parameter `apiVersion` is optional with default value `v1.0`

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-readSubscription) in API Explorer.


## Renew Subscription / Update Event Filters

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/v1.0/subscription/{subscriptionId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).subscription(subscriptionId).put(modifySubscriptionRequest, updateSubscriptionParameters)
await rc.revoke()
```
- Parameter `modifySubscriptionRequest` is of type [ModifySubscriptionRequest](./src/definitions/ModifySubscriptionRequest.ts)
- Parameter `updateSubscriptionParameters` is of type [UpdateSubscriptionParameters](./src/definitions/UpdateSubscriptionParameters.ts)
- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).subscription(subscriptionId).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.restapi(apiVersion).subscription(subscriptionId).renew().post()
await rc.revoke()
```

- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.scim(version).serviceProviderConfig().get()
await rc.revoke()
```

- `result` is of type [ServiceProviderConfig](./src/definitions/ServiceProviderConfig.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.scim(version).users().list(searchViaGet2Parameters)
await rc.revoke()
```
- Parameter `searchViaGet2Parameters` is of type [SearchViaGet2Parameters](./src/definitions/SearchViaGet2Parameters.ts)
- `result` is of type [UserSearchResponse](./src/definitions/UserSearchResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.scim(version).users().post(createUser)
await rc.revoke()
```
- Parameter `createUser` is of type [CreateUser](./src/definitions/CreateUser.ts)
- `result` is of type [UserResponse](./src/definitions/UserResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.scim(version).users().dotSearch().post(searchRequest)
await rc.revoke()
```
- Parameter `searchRequest` is of type [SearchRequest](./src/definitions/SearchRequest.ts)
- `result` is of type [UserSearchResponse](./src/definitions/UserSearchResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.scim(version).users(id).get()
await rc.revoke()
```

- `result` is of type [UserResponse](./src/definitions/UserResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.scim(version).users(id).put(user)
await rc.revoke()
```
- Parameter `user` is of type [User](./src/definitions/User.ts)
- `result` is of type [UserResponse](./src/definitions/UserResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.scim(version).users(id).delete()
await rc.revoke()
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.scim(version).users(id).patch(userPatch)
await rc.revoke()
```
- Parameter `userPatch` is of type [UserPatch](./src/definitions/UserPatch.ts)
- `result` is of type [UserResponse](./src/definitions/UserResponse.ts)
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
const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL
})
await rc.authorize(username, extension, password)
const result = await rc.scim(version).health().get()
await rc.revoke()
```

- `result` is an empty string
- Parameter `version` is optional with default value `v2`

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-checkHealth2) in API Explorer.