# RingCentral TypeScript Code Samples

## readAPIVersions
Get API Versions

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi`
Rate Limit Group|`NoThrottling`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi().list();
await rc.revoke();
```

- `result` is of type [GetVersionsResponse](./packages/core/definitions/GetVersionsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersions) in API Explorer.

## readAPIVersion
Get Version Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}`
Rate Limit Group|`NoThrottling`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GetVersionResponse](./packages/core/definitions/GetVersionResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersion) in API Explorer.

## searchViaGet2
Search/List Users

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/{version}/Users`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).users().list(searchViaGet2Parameters);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `searchViaGet2Parameters` is of type [SearchViaGet2Parameters](./packages/core/definitions/SearchViaGet2Parameters.ts)
- `result` is of type [UserSearchResponse](./packages/core/definitions/UserSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-searchViaGet2) in API Explorer.

## createUser2
Create User

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/scim/{version}/Users`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).users().post(createUser);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `createUser` is of type [CreateUser](./packages/core/definitions/CreateUser.ts)
- `result` is of type [UserResponse](./packages/core/definitions/UserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-createUser2) in API Explorer.

## readUser2
Get User

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/{version}/Users/{id}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).users(id).get();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type [UserResponse](./packages/core/definitions/UserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-readUser2) in API Explorer.

## replaceUser2
Update/Replace User

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/scim/{version}/Users/{id}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).users(id).put(user);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `user` is of type [User](./packages/core/definitions/User.ts)
- `result` is of type [UserResponse](./packages/core/definitions/UserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-replaceUser2) in API Explorer.

## deleteUser2
Delete User

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/scim/{version}/Users/{id}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).users(id).delete();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-deleteUser2) in API Explorer.

## patchUser2
Update/Patch User

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/scim/{version}/Users/{id}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).users(id).patch(userPatch);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `userPatch` is of type [UserPatch](./packages/core/definitions/UserPatch.ts)
- `result` is of type [UserResponse](./packages/core/definitions/UserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-patchUser2) in API Explorer.

## authorize
Authorize

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/oauth/authorize`
Rate Limit Group|`undefined`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi().oauth().authorize().post(authorizeRequest);
await rc.revoke();
```

- `authorizeRequest` is of type [AuthorizeRequest](./packages/core/definitions/AuthorizeRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-2.0-authorize) in API Explorer.

## getToken
Get Token

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/oauth/token`
Rate Limit Group|`Auth`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi().oauth().token().post(getTokenRequest);
await rc.revoke();
```

- `getTokenRequest` is of type [GetTokenRequest](./packages/core/definitions/GetTokenRequest.ts)
- `result` is of type [TokenInfo](./packages/core/definitions/TokenInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-2.0-getToken) in API Explorer.

## readAccountInfo
Get Account Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [GetAccountInfoResponse](./packages/core/definitions/GetAccountInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountInfo) in API Explorer.

## revokeToken
Revoke Token

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/oauth/revoke`
Rate Limit Group|`Auth`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi().oauth().revoke().post(revokeTokenRequest);
await rc.revoke();
```

- `revokeTokenRequest` is of type [RevokeTokenRequest](./packages/core/definitions/RevokeTokenRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-2.0-revokeToken) in API Explorer.

## readCompanyCallLog
Get Company Call Log Records

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-log`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`FullCompanyCallLog`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callLog().list(readCompanyCallLogParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readCompanyCallLogParameters` is of type [ReadCompanyCallLogParameters](./packages/core/definitions/ReadCompanyCallLogParameters.ts)
- `result` is of type [AccountCallLogResponse](./packages/core/definitions/AccountCallLogResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallLog) in API Explorer.

## readCompanyCallRecord
Get Company Call Log Record(s)

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-log/{callRecordId}`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`FullCompanyCallLog`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callLog(callRecordId).get(readCompanyCallRecordParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readCompanyCallRecordParameters` is of type [ReadCompanyCallRecordParameters](./packages/core/definitions/ReadCompanyCallRecordParameters.ts)
- `result` is of type [CompanyCallLogRecord](./packages/core/definitions/CompanyCallLogRecord.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallRecord) in API Explorer.

## readDevice
Get Device

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/device/{deviceId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyDevices`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).device(deviceId).get(readDeviceParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readDeviceParameters` is of type [ReadDeviceParameters](./packages/core/definitions/ReadDeviceParameters.ts)
- `result` is of type [GetDeviceInfoResponse](./packages/core/definitions/GetDeviceInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-readDevice) in API Explorer.

## updateDevice
Update Device

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/device/{deviceId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyDevices`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).device(deviceId).put(accountDeviceUpdate, updateDeviceParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `accountDeviceUpdate` is of type [AccountDeviceUpdate](./packages/core/definitions/AccountDeviceUpdate.ts)
- `updateDeviceParameters` is of type [UpdateDeviceParameters](./packages/core/definitions/UpdateDeviceParameters.ts)
- `result` is of type [GetDeviceInfoResponse](./packages/core/definitions/GetDeviceInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-updateDevice) in API Explorer.

## listExtensions
Get Extension List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension().list(listExtensionsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listExtensionsParameters` is of type [ListExtensionsParameters](./packages/core/definitions/ListExtensionsParameters.ts)
- `result` is of type [GetExtensionListResponse](./packages/core/definitions/GetExtensionListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-listExtensions) in API Explorer.

## createExtension
Create Extension

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`AddRemoveUsers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension().post(extensionCreationRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `extensionCreationRequest` is of type [ExtensionCreationRequest](./packages/core/definitions/ExtensionCreationRequest.ts)
- `result` is of type [ExtensionCreationResponse](./packages/core/definitions/ExtensionCreationResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-createExtension) in API Explorer.

## readExtension
Get Extension

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [GetExtensionInfoResponse](./packages/core/definitions/GetExtensionInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readExtension) in API Explorer.

## updateExtension
Update Extension

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserInfo OR EditUserCredentials`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).put(extensionUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `extensionUpdateRequest` is of type [ExtensionUpdateRequest](./packages/core/definitions/ExtensionUpdateRequest.ts)
- `result` is of type [GetExtensionInfoResponse](./packages/core/definitions/GetExtensionInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateExtension) in API Explorer.

## deleteExtension
Delete Extension

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`AddRemoveUsers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).delete(deleteExtensionParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `deleteExtensionParameters` is of type [DeleteExtensionParameters](./packages/core/definitions/DeleteExtensionParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-deleteExtension) in API Explorer.

## createCompanyGreeting
Create Company Greeting

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/greeting`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ReadUserInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).greeting().post(createCompanyGreetingRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createCompanyGreetingRequest` is of type [CreateCompanyGreetingRequest](./packages/core/definitions/CreateCompanyGreetingRequest.ts)
- `result` is of type [CustomCompanyGreetingInfo](./packages/core/definitions/CustomCompanyGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-createCompanyGreeting) in API Explorer.

## createIVRMenu
Create IVR Menu

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/ivr-menus`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`AutoReceptionist`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).ivrMenus().post(iVRMenuInfo);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `iVRMenuInfo` is of type [IVRMenuInfo](./packages/core/definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./packages/core/definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-createIVRMenu) in API Explorer.

## readIVRMenu
Get IVR Menu

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/ivr-menus/{ivrMenuId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`AutoReceptionist`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).ivrMenus(ivrMenuId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [IVRMenuInfo](./packages/core/definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-readIVRMenu) in API Explorer.

## updateIVRMenu
Update IVR Menu

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/ivr-menus/{ivrMenuId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`AutoReceptionist`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).ivrMenus(ivrMenuId).put(iVRMenuInfo);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `iVRMenuInfo` is of type [IVRMenuInfo](./packages/core/definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./packages/core/definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-updateIVRMenu) in API Explorer.

## readAccountPresence
Get User Presence Status List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/presence`
Rate Limit Group|`Heavy`
App Permission|`ReadPresence`
User Permission|`ReadPresenceStatus`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).presence().get(readAccountPresenceParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readAccountPresenceParameters` is of type [ReadAccountPresenceParameters](./packages/core/definitions/ReadAccountPresenceParameters.ts)
- `result` is of type [AccountPresenceInfo](./packages/core/definitions/AccountPresenceInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readAccountPresence) in API Explorer.

## readCallRecording
Get Call Recording

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/recording/{recordingId}`
Rate Limit Group|`Heavy`
App Permission|`ReadCallRecording`
User Permission|`ReadCallRecording`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).recording(recordingId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [GetCallRecordingResponse](./packages/core/definitions/GetCallRecordingResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recordings-readCallRecording) in API Explorer.

## listUserTemplates
Get User Template List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/templates`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).templates().list(listUserTemplatesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listUserTemplatesParameters` is of type [ListUserTemplatesParameters](./packages/core/definitions/ListUserTemplatesParameters.ts)
- `result` is of type [UserTemplates](./packages/core/definitions/UserTemplates.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-listUserTemplates) in API Explorer.

## readUserTemplate
Get User Template

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/templates/{templateId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).templates(templateId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [TemplateInfo](./packages/core/definitions/TemplateInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-readUserTemplate) in API Explorer.

## listStates
Get States List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/state`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().state().list(listStatesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listStatesParameters` is of type [ListStatesParameters](./packages/core/definitions/ListStatesParameters.ts)
- `result` is of type [GetStateListResponse](./packages/core/definitions/GetStateListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listStates) in API Explorer.

## readState
Get State

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/state/{stateId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().state(stateId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GetStateInfoResponse](./packages/core/definitions/GetStateInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readState) in API Explorer.

## listGlipChats
Get Chats

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/chats`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats().list(listGlipChatsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listGlipChatsParameters` is of type [ListGlipChatsParameters](./packages/core/definitions/ListGlipChatsParameters.ts)
- `result` is of type [GlipChatsList](./packages/core/definitions/GlipChatsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipChats) in API Explorer.

## readGlipChat
Get Chat

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipChatInfo](./packages/core/definitions/GlipChatInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipChat) in API Explorer.

## listChatNotes
Get Chat Notes

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/notes`
Rate Limit Group|`Heavy`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).notes().get(listChatNotesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listChatNotesParameters` is of type [ListChatNotesParameters](./packages/core/definitions/ListChatNotesParameters.ts)
- `result` is of type [GlipNotesInfo](./packages/core/definitions/GlipNotesInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-listChatNotes) in API Explorer.

## createChatNote
Create Note

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/notes`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).notes().post(glipNoteCreate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipNoteCreate` is of type [GlipNoteCreate](./packages/core/definitions/GlipNoteCreate.ts)
- `result` is of type [GlipNoteInfo](./packages/core/definitions/GlipNoteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-createChatNote) in API Explorer.

## readGlipPosts
Get Posts

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/posts`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).posts().list(readGlipPostsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `readGlipPostsParameters` is of type [ReadGlipPostsParameters](./packages/core/definitions/ReadGlipPostsParameters.ts)
- `result` is of type [GlipPostsList](./packages/core/definitions/GlipPostsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPosts) in API Explorer.

## createGlipPost
Create Post

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/posts`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).posts().post(glipPostPostBody);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipPostPostBody` is of type [GlipPostPostBody](./packages/core/definitions/GlipPostPostBody.ts)
- `result` is of type [GlipPostInfo](./packages/core/definitions/GlipPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipPost) in API Explorer.

## readGlipPost
Get Post

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/posts/{postId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).posts(postId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipPostInfo](./packages/core/definitions/GlipPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPost) in API Explorer.

## deleteGlipPost
Delete Post

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/posts/{postId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).posts(postId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Posts-deleteGlipPost) in API Explorer.

## patchGlipPost
Update Post

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/posts/{postId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).posts(postId).patch(glipPatchPostBody);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipPatchPostBody` is of type [GlipPatchPostBody](./packages/core/definitions/GlipPatchPostBody.ts)
- `result` is of type [GlipPostInfo](./packages/core/definitions/GlipPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-patchGlipPost) in API Explorer.

## markChatRead
Mark Chat as Read

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/read`
Rate Limit Group|`Medium`
App Permission|`GlipInternal`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).read().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-markChatRead) in API Explorer.

## listChatTasks
Get Chat Tasks

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/tasks`
Rate Limit Group|`Heavy`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).tasks().get(listChatTasksParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listChatTasksParameters` is of type [ListChatTasksParameters](./packages/core/definitions/ListChatTasksParameters.ts)
- `result` is of type [GlipTaskList](./packages/core/definitions/GlipTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-listChatTasks) in API Explorer.

## createTask
Create Task

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/tasks`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).tasks().post(glipCreateTask);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipCreateTask` is of type [GlipCreateTask](./packages/core/definitions/GlipCreateTask.ts)
- `result` is of type [GlipTaskInfo](./packages/core/definitions/GlipTaskInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-createTask) in API Explorer.

## readGlipCompany
Get Company Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/companies/{companyId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().companies(companyId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipCompany](./packages/core/definitions/GlipCompany.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipCompany) in API Explorer.

## listDataExportTasks
Get Data Export Task List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/data-export`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().dataExport().list(listDataExportTasksParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listDataExportTasksParameters` is of type [ListDataExportTasksParameters](./packages/core/definitions/ListDataExportTasksParameters.ts)
- `result` is of type [DataExportTaskList](./packages/core/definitions/DataExportTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-listDataExportTasks) in API Explorer.

## createDataExportTask
Create Data Export Task

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/data-export`
Rate Limit Group|`Heavy`
App Permission|`Glip`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().dataExport().post(createDataExportTaskRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `createDataExportTaskRequest` is of type [CreateDataExportTaskRequest](./packages/core/definitions/CreateDataExportTaskRequest.ts)
- `result` is of type [DataExportTask](./packages/core/definitions/DataExportTask.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-createDataExportTask) in API Explorer.

## readDataExportTask
Get Data Export Task

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/data-export/{taskId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().dataExport(taskId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [DataExportTask](./packages/core/definitions/DataExportTask.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-readDataExportTask) in API Explorer.

## readGlipEveryone
Get Everyone Chat

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/everyone`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().everyone().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipEveryoneInfo](./packages/core/definitions/GlipEveryoneInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-readGlipEveryone) in API Explorer.

## patchGlipEveryone
Update Everyone Сhat

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/{apiVersion}/glip/everyone`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().everyone().patch(updateGlipEveryoneRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `updateGlipEveryoneRequest` is of type [UpdateGlipEveryoneRequest](./packages/core/definitions/UpdateGlipEveryoneRequest.ts)
- `result` is of type [GlipEveryoneInfo](./packages/core/definitions/GlipEveryoneInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-patchGlipEveryone) in API Explorer.

## listFavoriteChats
Get Favorite Chats

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/favorites`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().favorites().get(listFavoriteChatsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listFavoriteChatsParameters` is of type [ListFavoriteChatsParameters](./packages/core/definitions/ListFavoriteChatsParameters.ts)
- `result` is of type [GlipChatsListWithoutNavigation](./packages/core/definitions/GlipChatsListWithoutNavigation.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listFavoriteChats) in API Explorer.

## readUserNote
Get Note

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/notes/{noteId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().notes(noteId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GetGlipNoteInfo](./packages/core/definitions/GetGlipNoteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-readUserNote) in API Explorer.

## deleteNote
Delete Note

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/glip/notes/{noteId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().notes(noteId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-deleteNote) in API Explorer.

## patchNote
Update Note

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/{apiVersion}/glip/notes/{noteId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().notes(noteId).patch(glipNoteCreate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipNoteCreate` is of type [GlipNoteCreate](./packages/core/definitions/GlipNoteCreate.ts)
- `result` is of type [GlipNoteInfo](./packages/core/definitions/GlipNoteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-patchNote) in API Explorer.

## readTask
Get Task

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/tasks/{taskId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().tasks(taskId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipTaskInfo](./packages/core/definitions/GlipTaskInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-readTask) in API Explorer.

## deleteTask
Delete Task

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/glip/tasks/{taskId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().tasks(taskId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-deleteTask) in API Explorer.

## patchTask
Patch Task

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/{apiVersion}/glip/tasks/{taskId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().tasks(taskId).patch(glipUpdateTask);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipUpdateTask` is of type [GlipUpdateTask](./packages/core/definitions/GlipUpdateTask.ts)
- `result` is of type [GlipTaskList](./packages/core/definitions/GlipTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-patchTask) in API Explorer.

## listGlipTeams
Get Teams

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/teams`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().teams().list(listGlipTeamsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listGlipTeamsParameters` is of type [ListGlipTeamsParameters](./packages/core/definitions/ListGlipTeamsParameters.ts)
- `result` is of type [GlipTeamsList](./packages/core/definitions/GlipTeamsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-listGlipTeams) in API Explorer.

## createGlipTeam
Create Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/teams`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().teams().post(glipPostTeamBody);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipPostTeamBody` is of type [GlipPostTeamBody](./packages/core/definitions/GlipPostTeamBody.ts)
- `result` is of type [GlipTeamInfo](./packages/core/definitions/GlipTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-createGlipTeam) in API Explorer.

## readGlipTeam
Get Team

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/teams/{chatId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().teams(chatId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipTeamInfo](./packages/core/definitions/GlipTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-readGlipTeam) in API Explorer.

## deleteGlipTeam
Delete Team

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/glip/teams/{chatId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().teams(chatId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-deleteGlipTeam) in API Explorer.

## patchGlipTeam
Update Team

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/{apiVersion}/glip/teams/{chatId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().teams(chatId).patch(glipPatchTeamBody);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipPatchTeamBody` is of type [GlipPatchTeamBody](./packages/core/definitions/GlipPatchTeamBody.ts)
- `result` is of type [GlipTeamInfo](./packages/core/definitions/GlipTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-patchGlipTeam) in API Explorer.

## readGlipEvents
Get User Events List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/events`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().events().list(readGlipEventsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `readGlipEventsParameters` is of type [ReadGlipEventsParameters](./packages/core/definitions/ReadGlipEventsParameters.ts)
- `result` is of type [GlipEventsInfo](./packages/core/definitions/GlipEventsInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-readGlipEvents) in API Explorer.

## createEvent
Create Event

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/events`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().events().post(glipEventCreate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipEventCreate` is of type [GlipEventCreate](./packages/core/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./packages/core/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-createEvent) in API Explorer.

## readEvent
Get Event

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/events/{eventId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().events(eventId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipEventInfo](./packages/core/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-readEvent) in API Explorer.

## updateEvent
Update Event

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/glip/events/{eventId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().events(eventId).put(glipEventCreate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipEventCreate` is of type [GlipEventCreate](./packages/core/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./packages/core/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-updateEvent) in API Explorer.

## deleteEvent
Delete Event

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/glip/events/{eventId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().events(eventId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-deleteEvent) in API Explorer.

## lockNote
Lock Note

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/notes/{noteId}/lock`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().notes(noteId).lock().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-lockNote) in API Explorer.

## readGlipPerson
Get Person

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/persons/{personId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().persons(personId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipPersonInfo](./packages/core/definitions/GlipPersonInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipPerson) in API Explorer.

## addGlipTeamMembers
Add Team Members

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/teams/{chatId}/add`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().teams(chatId).add().post(glipPostMembersListBody);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipPostMembersListBody` is of type [GlipPostMembersListBody](./packages/core/definitions/GlipPostMembersListBody.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-addGlipTeamMembers) in API Explorer.

## removeGlipTeamMembers
Remove Team Members

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/teams/{chatId}/remove`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().teams(chatId).remove().post(glipPostMembersIdsListBody);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipPostMembersIdsListBody` is of type [GlipPostMembersIdsListBody](./packages/core/definitions/GlipPostMembersIdsListBody.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-removeGlipTeamMembers) in API Explorer.

## listGlipWebhooks
Get Webhooks

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/webhooks`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().webhooks().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipWebhookList](./packages/core/definitions/GlipWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-listGlipWebhooks) in API Explorer.

## readGlipWebhook
Get Webhook

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/webhooks/{webhookId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().webhooks(webhookId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipWebhookList](./packages/core/definitions/GlipWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-readGlipWebhook) in API Explorer.

## deleteGlipWebhook
Delete Webhook

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/glip/webhooks/{webhookId}`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().webhooks(webhookId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-deleteGlipWebhook) in API Explorer.

## listSubscriptions
Get Subscription List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/subscription`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).subscription().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [RecordsCollectionResourceSubscriptionResponse](./packages/core/definitions/RecordsCollectionResourceSubscriptionResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-listSubscriptions) in API Explorer.

## createSubscription
Create Subscription

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/subscription`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).subscription().post(createSubscriptionRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `createSubscriptionRequest` is of type [CreateSubscriptionRequest](./packages/core/definitions/CreateSubscriptionRequest.ts)
- `result` is of type [SubscriptionInfo](./packages/core/definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-createSubscription) in API Explorer.

## readSubscription
Get Subscription

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/subscription/{subscriptionId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).subscription(subscriptionId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [SubscriptionInfo](./packages/core/definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-readSubscription) in API Explorer.

## updateSubscription
Update Subscription

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/subscription/{subscriptionId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).subscription(subscriptionId).put(modifySubscriptionRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `modifySubscriptionRequest` is of type [ModifySubscriptionRequest](./packages/core/definitions/ModifySubscriptionRequest.ts)
- `result` is of type [SubscriptionInfo](./packages/core/definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-updateSubscription) in API Explorer.

## deleteSubscription
Cancel Subscription

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/subscription/{subscriptionId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).subscription(subscriptionId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-deleteSubscription) in API Explorer.

## searchViaPost2
Search/List Users

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/scim/{version}/Users/dotSearch`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).users().dotSearch().post(searchRequest);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `searchRequest` is of type [SearchRequest](./packages/core/definitions/SearchRequest.ts)
- `result` is of type [UserSearchResponse](./packages/core/definitions/UserSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-searchViaPost2) in API Explorer.

## joinGlipTeam
Join Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/teams/{chatId}/join`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().teams(chatId).join().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-joinGlipTeam) in API Explorer.

## readGlipPreferences
Get Preferences

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/preferences`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().preferences().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipPreferencesInfo](./packages/core/definitions/GlipPreferencesInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipPreferences) in API Explorer.

## leaveGlipTeam
Leave Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/teams/{chatId}/leave`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().teams(chatId).leave().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-leaveGlipTeam) in API Explorer.

## createA2PSMS
Send A2P SMS

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/a2p-sms/batch`
Rate Limit Group|`Light`
App Permission|`A2PSMS`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().batch().post(createSMSMessageBatchRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createSMSMessageBatchRequest` is of type [CreateSMSMessageBatchRequest](./packages/core/definitions/CreateSMSMessageBatchRequest.ts)
- `result` is of type [CreateMessageBatchResponse](./packages/core/definitions/CreateMessageBatchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-createA2PSMS) in API Explorer.

## readA2PBatch
Get A2P SMS Batch

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/a2p-sms/batch/{batchId}`
Rate Limit Group|`Light`
App Permission|`A2PSMS`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().batch(batchId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [MessageBatchResponse](./packages/core/definitions/MessageBatchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-readA2PBatch) in API Explorer.

## listA2PSMS
Get A2P SMS List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/a2p-sms/messages`
Rate Limit Group|`Light`
App Permission|`A2PSMS`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().messages().list(listA2PSMSParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listA2PSMSParameters` is of type [ListA2PSMSParameters](./packages/core/definitions/ListA2PSMSParameters.ts)
- `result` is of type [MessageListResponse](./packages/core/definitions/MessageListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-listA2PSMS) in API Explorer.

## readA2PSMS
Get A2P SMS

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/a2p-sms/messages/{messageId}`
Rate Limit Group|`Light`
App Permission|`A2PSMS`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().messages(messageId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [MessageDetailsResponse](./packages/core/definitions/MessageDetailsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-readA2PSMS) in API Explorer.

## readA2PSMSOptOuts
Get Opted Out Numbers

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/a2p-sms/opt-outs`
Rate Limit Group|`Light`
App Permission|`A2PSMS`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().optOuts().get(readA2PSMSOptOutsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readA2PSMSOptOutsParameters` is of type [ReadA2PSMSOptOutsParameters](./packages/core/definitions/ReadA2PSMSOptOutsParameters.ts)
- `result` is of type [OptOutListResponse](./packages/core/definitions/OptOutListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-readA2PSMSOptOuts) in API Explorer.

## listCompanyActiveCalls
Get Company Active Calls

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/active-calls`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).activeCalls().get(listCompanyActiveCallsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCompanyActiveCallsParameters` is of type [ListCompanyActiveCallsParameters](./packages/core/definitions/ListCompanyActiveCallsParameters.ts)
- `result` is of type [CompanyActiveCallsResponse](./packages/core/definitions/CompanyActiveCallsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-listCompanyActiveCalls) in API Explorer.

## listCompanyAnsweringRules
Get Company Call Handling Rule List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/answering-rule`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).answeringRule().list(listCompanyAnsweringRulesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCompanyAnsweringRulesParameters` is of type [ListCompanyAnsweringRulesParameters](./packages/core/definitions/ListCompanyAnsweringRulesParameters.ts)
- `result` is of type [CompanyAnsweringRuleList](./packages/core/definitions/CompanyAnsweringRuleList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-listCompanyAnsweringRules) in API Explorer.

## createCompanyAnsweringRule
Create Company Call Handling Rule

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/answering-rule`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).answeringRule().post(companyAnsweringRuleRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `companyAnsweringRuleRequest` is of type [CompanyAnsweringRuleRequest](./packages/core/definitions/CompanyAnsweringRuleRequest.ts)
- `result` is of type [CompanyAnsweringRuleInfo](./packages/core/definitions/CompanyAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-createCompanyAnsweringRule) in API Explorer.

## readCompanyAnsweringRule
Get Company Call Handling Rule

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/answering-rule/{ruleId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).answeringRule(ruleId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CompanyAnsweringRuleInfo](./packages/core/definitions/CompanyAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-readCompanyAnsweringRule) in API Explorer.

## updateCompanyAnsweringRule
Update Company Call Handling Rule

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/answering-rule/{ruleId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).answeringRule(ruleId).put(companyAnsweringRuleUpdate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `companyAnsweringRuleUpdate` is of type [CompanyAnsweringRuleUpdate](./packages/core/definitions/CompanyAnsweringRuleUpdate.ts)
- `result` is of type [CompanyAnsweringRuleInfo](./packages/core/definitions/CompanyAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-updateCompanyAnsweringRule) in API Explorer.

## deleteCompanyAnsweringRule
Delete Company Call Handling Rule

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/answering-rule/{ruleId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).answeringRule(ruleId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-deleteCompanyAnsweringRule) in API Explorer.

## readAccountBusinessAddress
Get Account Business Address

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/business-address`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).businessAddress().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [AccountBusinessAddressResource](./packages/core/definitions/AccountBusinessAddressResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountBusinessAddress) in API Explorer.

## updateAccountBusinessAddress
Update Company Business Address

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/business-address`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).businessAddress().put(modifyAccountBusinessAddressRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `modifyAccountBusinessAddressRequest` is of type [ModifyAccountBusinessAddressRequest](./packages/core/definitions/ModifyAccountBusinessAddressRequest.ts)
- `result` is of type [AccountBusinessAddressResource](./packages/core/definitions/AccountBusinessAddressResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-updateAccountBusinessAddress) in API Explorer.

## readCompanyBusinessHours
Get Company Business Hours

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/business-hours`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).businessHours().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CompanyBusinessHours](./packages/core/definitions/CompanyBusinessHours.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-readCompanyBusinessHours) in API Explorer.

## updateCompanyBusinessHours
Update Company Business Hours

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/business-hours`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).businessHours().put(companyBusinessHoursUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `companyBusinessHoursUpdateRequest` is of type [CompanyBusinessHoursUpdateRequest](./packages/core/definitions/CompanyBusinessHoursUpdateRequest.ts)
- `result` is of type [CompanyBusinessHours](./packages/core/definitions/CompanyBusinessHours.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-updateCompanyBusinessHours) in API Explorer.

## syncAccountCallLog
Sync Company Call Log

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-log-sync`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callLogSync().get(syncAccountCallLogParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `syncAccountCallLogParameters` is of type [SyncAccountCallLogParameters](./packages/core/definitions/SyncAccountCallLogParameters.ts)
- `result` is of type [AccountCallLogSyncResponse](./packages/core/definitions/AccountCallLogSyncResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-syncAccountCallLog) in API Explorer.

## listCallQueues
Get Call Queue List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-queues`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callQueues().list(listCallQueuesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCallQueuesParameters` is of type [ListCallQueuesParameters](./packages/core/definitions/ListCallQueuesParameters.ts)
- `result` is of type [CallQueues](./packages/core/definitions/CallQueues.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listCallQueues) in API Explorer.

## readCallQueueInfo
Get Call Queue

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallQueueDetails](./packages/core/definitions/CallQueueDetails.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-readCallQueueInfo) in API Explorer.

## updateCallQueueInfo
Update Call Queue

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}`
Rate Limit Group|`Light`
App Permission|`EditExtensions`
User Permission|`EditUserInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).put(callQueueUpdateDetails);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callQueueUpdateDetails` is of type [CallQueueUpdateDetails](./packages/core/definitions/CallQueueUpdateDetails.ts)
- `result` is of type [CallQueueDetails](./packages/core/definitions/CallQueueDetails.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-updateCallQueueInfo) in API Explorer.

## readCallRecordingSettings
Get Call Recording Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-recording`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callRecording().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallRecordingSettingsResource](./packages/core/definitions/CallRecordingSettingsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-readCallRecordingSettings) in API Explorer.

## updateCallRecordingSettings
Update Call Recording Settings

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-recording`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callRecording().put(callRecordingSettingsResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callRecordingSettingsResource` is of type [CallRecordingSettingsResource](./packages/core/definitions/CallRecordingSettingsResource.ts)
- `result` is of type [CallRecordingSettingsResource](./packages/core/definitions/CallRecordingSettingsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-updateCallRecordingSettings) in API Explorer.

## listCustomFields
Get Custom Field List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/custom-fields`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).customFields().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CustomFieldsResource](./packages/core/definitions/CustomFieldsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-listCustomFields) in API Explorer.

## createCustomField
Create Custom Field

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/custom-fields`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`Users`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).customFields().post(customFieldCreateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `customFieldCreateRequest` is of type [CustomFieldCreateRequest](./packages/core/definitions/CustomFieldCreateRequest.ts)
- `result` is of type [CustomFieldResource](./packages/core/definitions/CustomFieldResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-createCustomField) in API Explorer.

## updateCustomField
Update Сustom Field

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/custom-fields/{fieldId}`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`Users`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).customFields(fieldId).put(customFieldUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `customFieldUpdateRequest` is of type [CustomFieldUpdateRequest](./packages/core/definitions/CustomFieldUpdateRequest.ts)
- `result` is of type [CustomFieldResource](./packages/core/definitions/CustomFieldResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-updateCustomField) in API Explorer.

## deleteCustomField
Delete Custom Field

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/custom-fields/{fieldId}`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`Users`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).customFields(fieldId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-deleteCustomField) in API Explorer.

## listDirectoryEntries
Get Company Directory Entries

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/directory/entries`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).directory().entries().list(listDirectoryEntriesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listDirectoryEntriesParameters` is of type [ListDirectoryEntriesParameters](./packages/core/definitions/ListDirectoryEntriesParameters.ts)
- `result` is of type [DirectoryResource](./packages/core/definitions/DirectoryResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-listDirectoryEntries) in API Explorer.

## readDirectoryEntry
Get Corporate Directory Entry

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/directory/entries/{entryId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).directory().entries(entryId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [ContactResource](./packages/core/definitions/ContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readDirectoryEntry) in API Explorer.

## readUserCallLog
Get User Call Log Records

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLog().list(readUserCallLogParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readUserCallLogParameters` is of type [ReadUserCallLogParameters](./packages/core/definitions/ReadUserCallLogParameters.ts)
- `result` is of type [UserCallLogResponse](./packages/core/definitions/UserCallLogResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallLog) in API Explorer.

## deleteUserCallLog
Delete User Call Log

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log`
Rate Limit Group|`Heavy`
App Permission|`EditCallLog`
User Permission|`EditCallLog`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLog().delete(deleteUserCallLogParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `deleteUserCallLogParameters` is of type [DeleteUserCallLogParameters](./packages/core/definitions/DeleteUserCallLogParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-deleteUserCallLog) in API Explorer.

## readUserCallRecord
Get User Call Record

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLog(callRecordId).get(readUserCallRecordParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readUserCallRecordParameters` is of type [ReadUserCallRecordParameters](./packages/core/definitions/ReadUserCallRecordParameters.ts)
- `result` is of type [UserCallLogRecord](./packages/core/definitions/UserCallLogRecord.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallRecord) in API Explorer.

## listExtensionDevices
Get Extension Device List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/device`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserDevices`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).device().get(listExtensionDevicesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listExtensionDevicesParameters` is of type [ListExtensionDevicesParameters](./packages/core/definitions/ListExtensionDevicesParameters.ts)
- `result` is of type [GetExtensionDevicesResponse](./packages/core/definitions/GetExtensionDevicesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-listExtensionDevices) in API Explorer.

## createFaxMessage
Create Fax Message

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/fax`
Rate Limit Group|`Heavy`
App Permission|`Faxes`
User Permission|`OutboundFaxes`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).fax().post(createFaxMessageRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createFaxMessageRequest` is of type [CreateFaxMessageRequest](./packages/core/definitions/CreateFaxMessageRequest.ts)
- `result` is of type [FaxResponse](./packages/core/definitions/FaxResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Fax-createFaxMessage) in API Explorer.

## listExtensionGrants
Get Extension Grant List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/grant`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).grant().get(listExtensionGrantsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listExtensionGrantsParameters` is of type [ListExtensionGrantsParameters](./packages/core/definitions/ListExtensionGrantsParameters.ts)
- `result` is of type [GetExtensionGrantListResponse](./packages/core/definitions/GetExtensionGrantListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-listExtensionGrants) in API Explorer.

## createCustomUserGreeting
Create Custom User Greeting

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/greeting`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).greeting().post(createCustomUserGreetingRequest, createCustomUserGreetingParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createCustomUserGreetingRequest` is of type [CreateCustomUserGreetingRequest](./packages/core/definitions/CreateCustomUserGreetingRequest.ts)
- `createCustomUserGreetingParameters` is of type [CreateCustomUserGreetingParameters](./packages/core/definitions/CreateCustomUserGreetingParameters.ts)
- `result` is of type [CustomUserGreetingInfo](./packages/core/definitions/CustomUserGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-createCustomUserGreeting) in API Explorer.

## readCustomGreeting
Get Custom Greeting

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/greeting/{greetingId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadUserInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).greeting(greetingId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [CustomUserGreetingInfo](./packages/core/definitions/CustomUserGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-readCustomGreeting) in API Explorer.

## listMeetings
Get Scheduled Meetings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [MeetingsResource](./packages/core/definitions/MeetingsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-listMeetings) in API Explorer.

## createMeeting
Create Meeting

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().post(meetingRequestResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `meetingRequestResource` is of type [MeetingRequestResource](./packages/core/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./packages/core/definitions/MeetingResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-createMeeting) in API Explorer.

## readMeeting
Get Meeting Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [MeetingResponseResource](./packages/core/definitions/MeetingResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-readMeeting) in API Explorer.

## updateMeeting
Update Meeting

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).put(meetingRequestResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `meetingRequestResource` is of type [MeetingRequestResource](./packages/core/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./packages/core/definitions/MeetingResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-updateMeeting) in API Explorer.

## deleteMeeting
Delete Meeting

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-deleteMeeting) in API Explorer.

## createMMS
Send MMS

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/mms`
Rate Limit Group|`Medium`
App Permission|`SMS`
User Permission|`OutboundSMS`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).mms().post(CreateMMSMessage);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `CreateMMSMessage` is of type [CreateMMSMessage](./packages/core/definitions/CreateMMSMessage.ts)
- `result` is of type [GetSMSMessageInfoResponse](./packages/core/definitions/GetSMSMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-createMMS) in API Explorer.

## createRingOutCall
Make RingOut Call

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/ring-out`
Rate Limit Group|`Heavy`
App Permission|`RingOut`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).ringOut().post(makeRingOutRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `makeRingOutRequest` is of type [MakeRingOutRequest](./packages/core/definitions/MakeRingOutRequest.ts)
- `result` is of type [GetRingOutStatusResponse](./packages/core/definitions/GetRingOutStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-createRingOutCall) in API Explorer.

## readRingOutCallStatus
Get RingOut Call Status

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}`
Rate Limit Group|`Light`
App Permission|`RingOut`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).ringOut(ringoutId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [GetRingOutStatusResponse](./packages/core/definitions/GetRingOutStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-readRingOutCallStatus) in API Explorer.

## deleteRingOutCall
Cancel RingOut Call

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}`
Rate Limit Group|`Heavy`
App Permission|`RingOut`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).ringOut(ringoutId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-deleteRingOutCall) in API Explorer.

## createSMSMessage
Send SMS

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/sms`
Rate Limit Group|`Medium`
App Permission|`SMS`
User Permission|`OutboundSMS`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).sms().post(CreateSMSMessage);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `CreateSMSMessage` is of type [CreateSMSMessage](./packages/core/definitions/CreateSMSMessage.ts)
- `result` is of type [GetSMSMessageInfoResponse](./packages/core/definitions/GetSMSMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-createSMSMessage) in API Explorer.

## listIVRPrompts
Get IVR Prompt List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/ivr-prompts`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyGreetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).ivrPrompts().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [IVRPrompts](./packages/core/definitions/IVRPrompts.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-listIVRPrompts) in API Explorer.

## createIVRPrompt
Create IVR Prompts

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/ivr-prompts`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`EditCompanyGreetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).ivrPrompts().post(createIVRPromptRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createIVRPromptRequest` is of type [CreateIVRPromptRequest](./packages/core/definitions/CreateIVRPromptRequest.ts)
- `result` is of type [PromptInfo](./packages/core/definitions/PromptInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-createIVRPrompt) in API Explorer.

## readIVRPrompt
Get IVR Prompt

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyGreetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(promptId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [PromptInfo](./packages/core/definitions/PromptInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-readIVRPrompt) in API Explorer.

## updateIVRPrompt
Update IVR Prompt

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyGreetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(promptId).put(updateIVRPromptRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `updateIVRPromptRequest` is of type [UpdateIVRPromptRequest](./packages/core/definitions/UpdateIVRPromptRequest.ts)
- `result` is of type [PromptInfo](./packages/core/definitions/PromptInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-updateIVRPrompt) in API Explorer.

## deleteIVRPrompt
Delete IVR Prompt

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`EditCompanyGreetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(promptId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#IVR-deleteIVRPrompt) in API Explorer.

## listAccountPhoneNumbers
Get Company Phone Number List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/phone-number`
Rate Limit Group|`Heavy`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyPhoneNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).phoneNumber().list(listAccountPhoneNumbersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listAccountPhoneNumbersParameters` is of type [ListAccountPhoneNumbersParameters](./packages/core/definitions/ListAccountPhoneNumbersParameters.ts)
- `result` is of type [AccountPhoneNumbers](./packages/core/definitions/AccountPhoneNumbers.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-listAccountPhoneNumbers) in API Explorer.

## readAccountPhoneNumber
Get Phone Number

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/phone-number/{phoneNumberId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyPhoneNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).phoneNumber(phoneNumberId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CompanyPhoneNumberInfo](./packages/core/definitions/CompanyPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-readAccountPhoneNumber) in API Explorer.

## listCallRecordingData
Get Call Recordings Data

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/recording/{recordingId}/content`
Rate Limit Group|`Heavy`
App Permission|`ReadCallRecording`
User Permission|`ReadCallRecording`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).recording(recordingId).content().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recordings-listCallRecordingData) in API Explorer.

## readAccountServiceInfo
Get Account Service Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/service-info`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadServicePlanInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).serviceInfo().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [GetServiceInfoResponse](./packages/core/definitions/GetServiceInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountServiceInfo) in API Explorer.

## createSIPRegistration
Register Device

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/client-info/sip-provision`
Rate Limit Group|`Heavy`
App Permission|`VoipCalling`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).clientInfo().sipProvision().post(createSipRegistrationRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `createSipRegistrationRequest` is of type [CreateSipRegistrationRequest](./packages/core/definitions/CreateSipRegistrationRequest.ts)
- `result` is of type [CreateSipRegistrationResponse](./packages/core/definitions/CreateSipRegistrationResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Device-SIP-Registration-createSIPRegistration) in API Explorer.

## listCountries
Get Country List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/country`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().country().list(listCountriesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listCountriesParameters` is of type [ListCountriesParameters](./packages/core/definitions/ListCountriesParameters.ts)
- `result` is of type [GetCountryListResponse](./packages/core/definitions/GetCountryListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listCountries) in API Explorer.

## readCountry
Get Country

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/country/{countryId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().country(countryId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GetCountryInfoDictionaryResponse](./packages/core/definitions/GetCountryInfoDictionaryResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readCountry) in API Explorer.

## listFaxCoverPages
Get Fax Cover Page List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/fax-cover-page`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().faxCoverPage().get(listFaxCoverPagesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listFaxCoverPagesParameters` is of type [ListFaxCoverPagesParameters](./packages/core/definitions/ListFaxCoverPagesParameters.ts)
- `result` is of type [ListFaxCoverPagesResponse](./packages/core/definitions/ListFaxCoverPagesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Fax-listFaxCoverPages) in API Explorer.

## listStandardGreetings
Get Standard Greeting List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/greeting`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().greeting().list(listStandardGreetingsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listStandardGreetingsParameters` is of type [ListStandardGreetingsParameters](./packages/core/definitions/ListStandardGreetingsParameters.ts)
- `result` is of type [DictionaryGreetingList](./packages/core/definitions/DictionaryGreetingList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-listStandardGreetings) in API Explorer.

## readStandardGreeting
Get Standard Greeting

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/greeting/{greetingId}`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().greeting(greetingId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [DictionaryGreetingInfo](./packages/core/definitions/DictionaryGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-readStandardGreeting) in API Explorer.

## listLanguages
Get Language List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/language`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().language().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [LanguageList](./packages/core/definitions/LanguageList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listLanguages) in API Explorer.

## readLanguage
Get Language

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/language/{languageId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().language(languageId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [LanguageInfo](./packages/core/definitions/LanguageInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readLanguage) in API Explorer.

## listLocations
Get Location List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/location`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().location().get(listLocationsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listLocationsParameters` is of type [ListLocationsParameters](./packages/core/definitions/ListLocationsParameters.ts)
- `result` is of type [GetLocationListResponse](./packages/core/definitions/GetLocationListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listLocations) in API Explorer.

## listTimezones
Get Timezone List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/timezone`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().timezone().list(listTimezonesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listTimezonesParameters` is of type [ListTimezonesParameters](./packages/core/definitions/ListTimezonesParameters.ts)
- `result` is of type [GetTimezoneListResponse](./packages/core/definitions/GetTimezoneListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listTimezones) in API Explorer.

## readTimezone
Get Timezone

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/timezone/{timezoneId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().timezone(timezoneId).get(readTimezoneParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `readTimezoneParameters` is of type [ReadTimezoneParameters](./packages/core/definitions/ReadTimezoneParameters.ts)
- `result` is of type [GetTimezoneInfoResponse](./packages/core/definitions/GetTimezoneInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readTimezone) in API Explorer.

## favoriteGlipChat
Add Chat to Favorites

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/favorite`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).favorite().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-favoriteGlipChat) in API Explorer.

## unfavoriteGlipChat
Remove Chat from Favorites

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/unfavorite`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).unfavorite().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-unfavoriteGlipChat) in API Explorer.

## markChatUnread
Mark Chat as Unread

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/chats/{chatId}/unread`
Rate Limit Group|`Medium`
App Permission|`GlipInternal`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().chats(chatId).unread().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-markChatUnread) in API Explorer.

## listGlipConversations
Get Conversations

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/conversations`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().conversations().list(listGlipConversationsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listGlipConversationsParameters` is of type [ListGlipConversationsParameters](./packages/core/definitions/ListGlipConversationsParameters.ts)
- `result` is of type [GlipConversationsList](./packages/core/definitions/GlipConversationsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-listGlipConversations) in API Explorer.

## createGlipConversation
Create/Open Conversation

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/conversations`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().conversations().post(createGlipConversationRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `createGlipConversationRequest` is of type [CreateGlipConversationRequest](./packages/core/definitions/CreateGlipConversationRequest.ts)
- `result` is of type [GlipConversationInfo](./packages/core/definitions/GlipConversationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-createGlipConversation) in API Explorer.

## readGlipConversation
Get Conversation

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/conversations/{chatId}`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().conversations(chatId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipConversationInfo](./packages/core/definitions/GlipConversationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-readGlipConversation) in API Explorer.

## readDataExportTaskDataset
Get Data Export Task Dataset

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/data-export/{taskId}/datasets/{datasetId}`
Rate Limit Group|`Heavy`
App Permission|`Glip`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().dataExport(taskId).datasets(datasetId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-readDataExportTaskDataset) in API Explorer.

## listGroupEvents
Get Group Events

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/groups/{groupId}/events`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().groups(groupId).events().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipEventInfo](./packages/core/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-listGroupEvents) in API Explorer.

## createEventByGroupId
Create Event by Group ID

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/groups/{groupId}/events`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().groups(groupId).events().post(glipEventCreate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipEventCreate` is of type [GlipEventCreate](./packages/core/definitions/GlipEventCreate.ts)
- `result` is of type [GlipEventInfo](./packages/core/definitions/GlipEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-createEventByGroupId) in API Explorer.

## listGlipGroupWebhooks
Get Webhooks in Group

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/groups/{groupId}/webhooks`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().groups(groupId).webhooks().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipWebhookList](./packages/core/definitions/GlipWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-listGlipGroupWebhooks) in API Explorer.

## createGlipGroupWebhook
Create Webhook in Group

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/groups/{groupId}/webhooks`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().groups(groupId).webhooks().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [GlipWebhookInfo](./packages/core/definitions/GlipWebhookInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-createGlipGroupWebhook) in API Explorer.

## publishNote
Publish Note

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/notes/{noteId}/publish`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().notes(noteId).publish().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-publishNote) in API Explorer.

## unlockNote
Unlock Note

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/notes/{noteId}/unlock`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().notes(noteId).unlock().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-unlockNote) in API Explorer.

## listRecentChats
Get Recent Chats

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/glip/recent/chats`
Rate Limit Group|`Light`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().recent().chats().get(listRecentChatsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listRecentChatsParameters` is of type [ListRecentChatsParameters](./packages/core/definitions/ListRecentChatsParameters.ts)
- `result` is of type [GlipChatsListWithoutNavigation](./packages/core/definitions/GlipChatsListWithoutNavigation.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listRecentChats) in API Explorer.

## completeTask
Complete Task

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/tasks/{taskId}/complete`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().tasks(taskId).complete().post(glipCompleteTask);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `glipCompleteTask` is of type [GlipCompleteTask](./packages/core/definitions/GlipCompleteTask.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-completeTask) in API Explorer.

## archiveGlipTeam
Archive Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/teams/{chatId}/archive`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().teams(chatId).archive().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-archiveGlipTeam) in API Explorer.

## unarchiveGlipTeam
Unarchive Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/teams/{chatId}/unarchive`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().teams(chatId).unarchive().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-unarchiveGlipTeam) in API Explorer.

## activateGlipWebhook
Activate Webhook

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/webhooks/{webhookId}/activate`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().webhooks(webhookId).activate().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-activateGlipWebhook) in API Explorer.

## suspendGlipWebhook
Suspend Webhook

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/glip/webhooks/{webhookId}/suspend`
Rate Limit Group|`Medium`
App Permission|`Glip`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).glip().webhooks(webhookId).suspend().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-suspendGlipWebhook) in API Explorer.

## parsePhoneNumber
Parse Phone Number

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/number-parser/parse`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).numberParser().parse().post(parsePhoneNumberRequest, parsePhoneNumberParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `parsePhoneNumberRequest` is of type [ParsePhoneNumberRequest](./packages/core/definitions/ParsePhoneNumberRequest.ts)
- `parsePhoneNumberParameters` is of type [ParsePhoneNumberParameters](./packages/core/definitions/ParsePhoneNumberParameters.ts)
- `result` is of type [ParsePhoneNumberResponse](./packages/core/definitions/ParsePhoneNumberResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-parsePhoneNumber) in API Explorer.

## renewSubscription
Renew Subscription

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/subscription/{subscriptionId}/renew`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).subscription(subscriptionId).renew().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [SubscriptionInfo](./packages/core/definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-renewSubscription) in API Explorer.

## readServiceProviderConfig2
Get Service Provider Config

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/{version}/ServiceProviderConfig`
Rate Limit Group|`NoThrottling`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).serviceProviderConfig().get();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type [ServiceProviderConfig](./packages/core/definitions/ServiceProviderConfig.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-readServiceProviderConfig2) in API Explorer.

## addressBookBulkUpload
Update Multiple Contacts

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/address-book-bulk-upload`
Rate Limit Group|`Heavy`
App Permission|`Contacts`
User Permission|`EditPersonalContacts`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).addressBookBulkUpload().post(addressBookBulkUploadRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `addressBookBulkUploadRequest` is of type [AddressBookBulkUploadRequest](./packages/core/definitions/AddressBookBulkUploadRequest.ts)
- `result` is of type [AddressBookBulkUploadResponse](./packages/core/definitions/AddressBookBulkUploadResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-addressBookBulkUpload) in API Explorer.

## listCallMonitoringGroups
Get Call Monitoring Groups List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-monitoring-groups`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups().get(listCallMonitoringGroupsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCallMonitoringGroupsParameters` is of type [ListCallMonitoringGroupsParameters](./packages/core/definitions/ListCallMonitoringGroupsParameters.ts)
- `result` is of type [CallMonitoringGroups](./packages/core/definitions/CallMonitoringGroups.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-listCallMonitoringGroups) in API Explorer.

## createCallMonitoringGroup
Create Call Monitoring Group

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-monitoring-groups`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`Groups`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups().post(createCallMonitoringGroupRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createCallMonitoringGroupRequest` is of type [CreateCallMonitoringGroupRequest](./packages/core/definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type [CallMonitoringGroup](./packages/core/definitions/CallMonitoringGroup.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-createCallMonitoringGroup) in API Explorer.

## updateCallMonitoringGroup
Updates Call Monitoring Group

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`Groups`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups(groupId).put(createCallMonitoringGroupRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createCallMonitoringGroupRequest` is of type [CreateCallMonitoringGroupRequest](./packages/core/definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type [CallMonitoringGroup](./packages/core/definitions/CallMonitoringGroup.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-updateCallMonitoringGroup) in API Explorer.

## deleteCallMonitoringGroup
Delete Call Monitoring Group

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`Groups`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups(groupId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-deleteCallMonitoringGroup) in API Explorer.

## assignMultipleCallQueueMembers
Assign Multiple Call Queue Members

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`Groups`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).bulkAssign().post(callQueueBulkAssignResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callQueueBulkAssignResource` is of type [CallQueueBulkAssignResource](./packages/core/definitions/CallQueueBulkAssignResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-assignMultipleCallQueueMembers) in API Explorer.

## listCallQueueMembers
Get Call Queue Members

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/members`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).members().get(listCallQueueMembersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCallQueueMembersParameters` is of type [ListCallQueueMembersParameters](./packages/core/definitions/ListCallQueueMembersParameters.ts)
- `result` is of type [CallQueueMembers](./packages/core/definitions/CallQueueMembers.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listCallQueueMembers) in API Explorer.

## readCallQueuePresence
Get Call Queue Presence

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/presence`
Rate Limit Group|`Light`
App Permission|`ReadPresence`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).presence().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallQueuePresence](./packages/core/definitions/CallQueuePresence.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readCallQueuePresence) in API Explorer.

## updateCallQueuePresence
Update Call Queue Presence

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/presence`
Rate Limit Group|`Medium`
App Permission|`EditPresence`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId).presence().put(callQueueUpdatePresence);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callQueueUpdatePresence` is of type [CallQueueUpdatePresence](./packages/core/definitions/CallQueueUpdatePresence.ts)
- `result` is of type [CallQueuePresence](./packages/core/definitions/CallQueuePresence.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateCallQueuePresence) in API Explorer.

## updateCallRecordingExtensionList
Update Call Recording Extension List

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-recording/bulk-assign`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callRecording().bulkAssign().post(bulkAccountCallRecordingsResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `bulkAccountCallRecordingsResource` is of type [BulkAccountCallRecordingsResource](./packages/core/definitions/BulkAccountCallRecordingsResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-updateCallRecordingExtensionList) in API Explorer.

## listCallRecordingExtensions
Get Call Recording Extension List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-recording/extensions`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callRecording().extensions().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallRecordingExtensions](./packages/core/definitions/CallRecordingExtensions.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-listCallRecordingExtensions) in API Explorer.

## searchDirectoryEntries
Search Company Directory Entries

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/directory/entries/search`
Rate Limit Group|`Heavy`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).directory().entries().search().post(searchDirectoryEntriesRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `searchDirectoryEntriesRequest` is of type [SearchDirectoryEntriesRequest](./packages/core/definitions/SearchDirectoryEntriesRequest.ts)
- `result` is of type [DirectoryResource](./packages/core/definitions/DirectoryResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-searchDirectoryEntries) in API Explorer.

## readAccountFederation
Get Account Federation

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/directory/federation`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).directory().federation().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [FederationResource](./packages/core/definitions/FederationResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readAccountFederation) in API Explorer.

## listEmergencyLocations
Get Emergency Location List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-locations`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyLocations().list(listEmergencyLocationsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listEmergencyLocationsParameters` is of type [ListEmergencyLocationsParameters](./packages/core/definitions/ListEmergencyLocationsParameters.ts)
- `result` is of type [EmergencyLocationList](./packages/core/definitions/EmergencyLocationList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listEmergencyLocations) in API Explorer.

## createEmergencyLocation
Add Emergency Location

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-locations`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyLocations().post(emergencyLocationInfoRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `emergencyLocationInfoRequest` is of type [EmergencyLocationInfoRequest](./packages/core/definitions/EmergencyLocationInfoRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createEmergencyLocation) in API Explorer.

## readEmergencyLocation
Get Emergency Location

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-locations/{locationId}`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyLocations(locationId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [EmergencyLocationInfo](./packages/core/definitions/EmergencyLocationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readEmergencyLocation) in API Explorer.

## updateEmergencyLocation
Update Emergency Location

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-locations/{locationId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyLocations(locationId).put(emergencyLocationInfoRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `emergencyLocationInfoRequest` is of type [EmergencyLocationInfoRequest](./packages/core/definitions/EmergencyLocationInfoRequest.ts)
- `result` is of type [EmergencyLocationInfo](./packages/core/definitions/EmergencyLocationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateEmergencyLocation) in API Explorer.

## deleteEmergencyLocation
Delete Emergency Location

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-locations/{locationId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyLocations(locationId).delete(deleteEmergencyLocationParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `deleteEmergencyLocationParameters` is of type [DeleteEmergencyLocationParameters](./packages/core/definitions/DeleteEmergencyLocationParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteEmergencyLocation) in API Explorer.

## extensionBulkUpdate
Update Multiple Extensions

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension-bulk-update`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`EditExtensionInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extensionBulkUpdate().post(extensionBulkUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `extensionBulkUpdateRequest` is of type [ExtensionBulkUpdateRequest](./packages/core/definitions/ExtensionBulkUpdateRequest.ts)
- `result` is of type [ExtensionBulkUpdateTaskResource](./packages/core/definitions/ExtensionBulkUpdateTaskResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-extensionBulkUpdate) in API Explorer.

## getExtensionBulkUpdateTask
Get Update Task Status

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension-bulk-update/tasks/{taskId}`
Rate Limit Group|`Light`
App Permission|`EditExtensions`
User Permission|`EditExtensionInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extensionBulkUpdate().tasks(taskId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [ExtensionBulkUpdateTaskResource](./packages/core/definitions/ExtensionBulkUpdateTaskResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-getExtensionBulkUpdateTask) in API Explorer.

## listExtensionActiveCalls
Get User Active Calls

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/active-calls`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).activeCalls().get(listExtensionActiveCallsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listExtensionActiveCallsParameters` is of type [ListExtensionActiveCallsParameters](./packages/core/definitions/ListExtensionActiveCallsParameters.ts)
- `result` is of type [UserActiveCallsResponse](./packages/core/definitions/UserActiveCallsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-listExtensionActiveCalls) in API Explorer.

## syncAddressBook
Address Book Synchronization

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book-sync`
Rate Limit Group|`Heavy`
App Permission|`ReadContacts`
User Permission|`ReadPersonalContacts`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBookSync().get(syncAddressBookParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `syncAddressBookParameters` is of type [SyncAddressBookParameters](./packages/core/definitions/SyncAddressBookParameters.ts)
- `result` is of type [AddressBookSync](./packages/core/definitions/AddressBookSync.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-syncAddressBook) in API Explorer.

## listAnsweringRules
Get Call Handling Rules

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadUserAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule().list(listAnsweringRulesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listAnsweringRulesParameters` is of type [ListAnsweringRulesParameters](./packages/core/definitions/ListAnsweringRulesParameters.ts)
- `result` is of type [UserAnsweringRuleList](./packages/core/definitions/UserAnsweringRuleList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-listAnsweringRules) in API Explorer.

## createAnsweringRule
Create Call Handling Rule

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule().post(createAnsweringRuleRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createAnsweringRuleRequest` is of type [CreateAnsweringRuleRequest](./packages/core/definitions/CreateAnsweringRuleRequest.ts)
- `result` is of type [CustomAnsweringRuleInfo](./packages/core/definitions/CustomAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-createAnsweringRule) in API Explorer.

## readAnsweringRule
Get Call Handling Rule

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule(ruleId).get(readAnsweringRuleParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readAnsweringRuleParameters` is of type [ReadAnsweringRuleParameters](./packages/core/definitions/ReadAnsweringRuleParameters.ts)
- `result` is of type [AnsweringRuleInfo](./packages/core/definitions/AnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-readAnsweringRule) in API Explorer.

## updateAnsweringRule
Update Call Handling Rule

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule(ruleId).put(updateAnsweringRuleRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `updateAnsweringRuleRequest` is of type [UpdateAnsweringRuleRequest](./packages/core/definitions/UpdateAnsweringRuleRequest.ts)
- `result` is of type [AnsweringRuleInfo](./packages/core/definitions/AnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-updateAnsweringRule) in API Explorer.

## deleteAnsweringRule
Delete Call Handling Rule

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).answeringRule(ruleId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-deleteAnsweringRule) in API Explorer.

## readAuthorizationProfile
Get Authorization Profile

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/authz-profile`
Rate Limit Group|`Medium`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).authzProfile().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [AuthProfileResource](./packages/core/definitions/AuthProfileResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-readAuthorizationProfile) in API Explorer.

## readUserBusinessHours
Get User Business Hours

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/business-hours`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).businessHours().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [GetUserBusinessHoursResponse](./packages/core/definitions/GetUserBusinessHoursResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-readUserBusinessHours) in API Explorer.

## updateUserBusinessHours
Update User Business Hours

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/business-hours`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).businessHours().put(userBusinessHoursUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `userBusinessHoursUpdateRequest` is of type [UserBusinessHoursUpdateRequest](./packages/core/definitions/UserBusinessHoursUpdateRequest.ts)
- `result` is of type [UserBusinessHoursUpdateResponse](./packages/core/definitions/UserBusinessHoursUpdateResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-updateUserBusinessHours) in API Explorer.

## syncUserCallLog
Sync User Call Log

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log-sync`
Rate Limit Group|`Heavy`
App Permission|`ReadCallLog`
User Permission|`ReadCallLog`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLogSync().get(syncUserCallLogParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `syncUserCallLogParameters` is of type [SyncUserCallLogParameters](./packages/core/definitions/SyncUserCallLogParameters.ts)
- `result` is of type [CallLogSync](./packages/core/definitions/CallLogSync.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-syncUserCallLog) in API Explorer.

## updateUserCallQueues
Update User Call Queues

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queues`
Rate Limit Group|`Medium`
App Permission|`Accounts`
User Permission|`JoinLeaveCallQueue`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callQueues().put(userCallQueues);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `userCallQueues` is of type [UserCallQueues](./packages/core/definitions/UserCallQueues.ts)
- `result` is of type [UserCallQueues](./packages/core/definitions/UserCallQueues.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-updateUserCallQueues) in API Explorer.

## readCallerBlockingSettings
Get Caller Blocking Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadBlockedNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [CallerBlockingSettings](./packages/core/definitions/CallerBlockingSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-readCallerBlockingSettings) in API Explorer.

## updateCallerBlockingSettings
Update Caller Blocking Settings

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking`
Rate Limit Group|`Light`
App Permission|`EditExtensions`
User Permission|`EditBlockedNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().put(callerBlockingSettingsUpdate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `callerBlockingSettingsUpdate` is of type [CallerBlockingSettingsUpdate](./packages/core/definitions/CallerBlockingSettingsUpdate.ts)
- `result` is of type [CallerBlockingSettings](./packages/core/definitions/CallerBlockingSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-updateCallerBlockingSettings) in API Explorer.

## readExtensionCallerId
Get Extension Caller ID

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-id`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCallerIDSettings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerId().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [ExtensionCallerIdInfo](./packages/core/definitions/ExtensionCallerIdInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readExtensionCallerId) in API Explorer.

## updateExtensionCallerId
Update Extension Caller ID

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-id`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditCallerIDSettings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerId().put(extensionCallerIdInfo);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `extensionCallerIdInfo` is of type [ExtensionCallerIdInfo](./packages/core/definitions/ExtensionCallerIdInfo.ts)
- `result` is of type [ExtensionCallerIdInfo](./packages/core/definitions/ExtensionCallerIdInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateExtensionCallerId) in API Explorer.

## createInternalTextMessage
Create Internal Text Message

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/company-pager`
Rate Limit Group|`Medium`
App Permission|`InternalMessages`
User Permission|`InternalSMS`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).companyPager().post(createInternalTextMessageRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createInternalTextMessageRequest` is of type [CreateInternalTextMessageRequest](./packages/core/definitions/CreateInternalTextMessageRequest.ts)
- `result` is of type [GetInternalTextMessageInfoResponse](./packages/core/definitions/GetInternalTextMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Pager-Messages-createInternalTextMessage) in API Explorer.

## readConferencingSettings
Get User Conferencing Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/conferencing`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`OrganizeConference`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).conferencing().get(readConferencingSettingsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readConferencingSettingsParameters` is of type [ReadConferencingSettingsParameters](./packages/core/definitions/ReadConferencingSettingsParameters.ts)
- `result` is of type [GetConferencingInfoResponse](./packages/core/definitions/GetConferencingInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readConferencingSettings) in API Explorer.

## updateConferencingSettings
Update User Conferencing Settings

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/conferencing`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`OrganizeConference`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).conferencing().put(updateConferencingInfoRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `updateConferencingInfoRequest` is of type [UpdateConferencingInfoRequest](./packages/core/definitions/UpdateConferencingInfoRequest.ts)
- `result` is of type [GetConferencingInfoResponse](./packages/core/definitions/GetConferencingInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateConferencingSettings) in API Explorer.

## listFavoriteContacts
Get Favorite Contact List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/favorite`
Rate Limit Group|`Light`
App Permission|`ReadContacts`
User Permission|`ReadPersonalContacts`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).favorite().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [FavoriteContactList](./packages/core/definitions/FavoriteContactList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-listFavoriteContacts) in API Explorer.

## updateFavoriteContactList
Update Favorite Contact List

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/favorite`
Rate Limit Group|`Medium`
App Permission|`Contacts`
User Permission|`EditPersonalContacts`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).favorite().put(favoriteCollection);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `favoriteCollection` is of type [FavoriteCollection](./packages/core/definitions/FavoriteCollection.ts)
- `result` is of type [FavoriteContactList](./packages/core/definitions/FavoriteContactList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateFavoriteContactList) in API Explorer.

## readUserFeatures
Get User Features

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/features`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).features().get(readUserFeaturesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readUserFeaturesParameters` is of type [ReadUserFeaturesParameters](./packages/core/definitions/ReadUserFeaturesParameters.ts)
- `result` is of type [FeatureList](./packages/core/definitions/FeatureList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Features-readUserFeatures) in API Explorer.

## listForwardingNumbers
Get Forwarding Number List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserForwardingFlipNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber().list(listForwardingNumbersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listForwardingNumbersParameters` is of type [ListForwardingNumbersParameters](./packages/core/definitions/ListForwardingNumbersParameters.ts)
- `result` is of type [GetExtensionForwardingNumberListResponse](./packages/core/definitions/GetExtensionForwardingNumberListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-listForwardingNumbers) in API Explorer.

## createForwardingNumber
Create Forwarding Number

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserForwardingFlipNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber().post(createForwardingNumberRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createForwardingNumberRequest` is of type [CreateForwardingNumberRequest](./packages/core/definitions/CreateForwardingNumberRequest.ts)
- `result` is of type [ForwardingNumberInfo](./packages/core/definitions/ForwardingNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-createForwardingNumber) in API Explorer.

## readForwardingNumber
Get Forwarding Number

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserForwardingFlipNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber(forwardingNumberId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [ForwardingNumberInfo](./packages/core/definitions/ForwardingNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-readForwardingNumber) in API Explorer.

## updateForwardingNumber
Update Forwarding Number

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserForwardingFlipNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber(forwardingNumberId).put(updateForwardingNumberRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `updateForwardingNumberRequest` is of type [UpdateForwardingNumberRequest](./packages/core/definitions/UpdateForwardingNumberRequest.ts)
- `result` is of type [ForwardingNumberInfo](./packages/core/definitions/ForwardingNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-updateForwardingNumber) in API Explorer.

## deleteForwardingNumber
Delete Forwarding Number

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserForwardingFlipNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber(forwardingNumberId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-deleteForwardingNumber) in API Explorer.

## listUserMeetingRecordings
Get User Meeting Recordings List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting-recordings`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`MeetingsRecordings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meetingRecordings().get(listUserMeetingRecordingsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listUserMeetingRecordingsParameters` is of type [ListUserMeetingRecordingsParameters](./packages/core/definitions/ListUserMeetingRecordingsParameters.ts)
- `result` is of type [ListMeetingRecordingsResponse](./packages/core/definitions/ListMeetingRecordingsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Recordings-listUserMeetingRecordings) in API Explorer.

## endMeeting
End Meeting

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).end().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-endMeeting) in API Explorer.

## readMeetingInvitation
Get Meeting Invitation

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/invitation`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).invitation().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [PublicMeetingInvitationResponse](./packages/core/definitions/PublicMeetingInvitationResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-readMeetingInvitation) in API Explorer.

## listMessages
Get Message List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store`
Rate Limit Group|`Light`
App Permission|`ReadMessages`
User Permission|`ReadMessages`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore().list(listMessagesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listMessagesParameters` is of type [ListMessagesParameters](./packages/core/definitions/ListMessagesParameters.ts)
- `result` is of type [GetMessageList](./packages/core/definitions/GetMessageList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-listMessages) in API Explorer.

## deleteMessageByFilter
Delete Conversation

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store`
Rate Limit Group|`Medium`
App Permission|`EditMessages`
User Permission|`EditMessages`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore().deleteAll(deleteMessageByFilterParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `deleteMessageByFilterParameters` is of type [DeleteMessageByFilterParameters](./packages/core/definitions/DeleteMessageByFilterParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-deleteMessageByFilter) in API Explorer.

## readMessage
Get Message

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}`
Rate Limit Group|`Light`
App Permission|`ReadMessages`
User Permission|`ReadMessages`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore(messageId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [GetMessageInfoResponse](./packages/core/definitions/GetMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessage) in API Explorer.

## updateMessage
Update Message List

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}`
Rate Limit Group|`Medium`
App Permission|`EditMessages`
User Permission|`EditMessages`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore(messageId).put(updateMessageRequest, updateMessageParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `updateMessageRequest` is of type [UpdateMessageRequest](./packages/core/definitions/UpdateMessageRequest.ts)
- `updateMessageParameters` is of type [UpdateMessageParameters](./packages/core/definitions/UpdateMessageParameters.ts)
- `result` is of type [GetMessageInfoResponse](./packages/core/definitions/GetMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-updateMessage) in API Explorer.

## deleteMessage
Delete Message

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}`
Rate Limit Group|`Medium`
App Permission|`EditMessages`
User Permission|`EditMessages`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore(messageId).delete(deleteMessageParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `deleteMessageParameters` is of type [DeleteMessageParameters](./packages/core/definitions/DeleteMessageParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-deleteMessage) in API Explorer.

## syncMessages
Sync Messages

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-sync`
Rate Limit Group|`Light`
App Permission|`ReadMessages`
User Permission|`ReadMessages`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageSync().get(syncMessagesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `syncMessagesParameters` is of type [SyncMessagesParameters](./packages/core/definitions/SyncMessagesParameters.ts)
- `result` is of type [GetMessageSyncResponse](./packages/core/definitions/GetMessageSyncResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-syncMessages) in API Explorer.

## listExtensionPhoneNumbers
Get Extension Phone Number List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/phone-number`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserPhoneNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).phoneNumber().get(listExtensionPhoneNumbersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listExtensionPhoneNumbersParameters` is of type [ListExtensionPhoneNumbersParameters](./packages/core/definitions/ListExtensionPhoneNumbersParameters.ts)
- `result` is of type [GetExtensionPhoneNumbersResponse](./packages/core/definitions/GetExtensionPhoneNumbersResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-listExtensionPhoneNumbers) in API Explorer.

## readUserPresenceStatus
Get User Presence Status

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/presence`
Rate Limit Group|`Light`
App Permission|`ReadPresence`
User Permission|`ReadPresenceStatus`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).presence().get(readUserPresenceStatusParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readUserPresenceStatusParameters` is of type [ReadUserPresenceStatusParameters](./packages/core/definitions/ReadUserPresenceStatusParameters.ts)
- `result` is of type [GetPresenceInfo](./packages/core/definitions/GetPresenceInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readUserPresenceStatus) in API Explorer.

## updateUserPresenceStatus
Update User Presence Status

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/presence`
Rate Limit Group|`Medium`
App Permission|`EditPresence`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).presence().put(presenceInfoRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `presenceInfoRequest` is of type [PresenceInfoRequest](./packages/core/definitions/PresenceInfoRequest.ts)
- `result` is of type [PresenceInfoResponse](./packages/core/definitions/PresenceInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateUserPresenceStatus) in API Explorer.

## readUserProfileImage
Get User Profile Image

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readUserProfileImage) in API Explorer.

## createUserProfileImage
Upload User Profile Image

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`EditUserInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage().post(createUserProfileImageRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createUserProfileImageRequest` is of type [CreateUserProfileImageRequest](./packages/core/definitions/CreateUserProfileImageRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-createUserProfileImage) in API Explorer.

## updateUserProfileImage
Update User Profile Image

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`EditUserInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage().put(updateUserProfileImageRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `updateUserProfileImageRequest` is of type [UpdateUserProfileImageRequest](./packages/core/definitions/UpdateUserProfileImageRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateUserProfileImage) in API Explorer.

## readScaledProfileImage
Get Scaled User Profile Image

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage(scaleSize).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readScaledProfileImage) in API Explorer.

## readUnifiedPresence
Get Unified Presence

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/unified-presence`
Rate Limit Group|`Medium`
App Permission|`ReadPresence`
User Permission|`ReadPresenceStatus`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).unifiedPresence().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [UnifiedPresence](./packages/core/definitions/UnifiedPresence.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readUnifiedPresence) in API Explorer.

## updateUnifiedPresence
Update Unified Presence

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/unified-presence`
Rate Limit Group|`Medium`
App Permission|`EditPresence`
User Permission|`EditPresenceStatus`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).unifiedPresence().patch(updateUnifiedPresence);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `updateUnifiedPresence` is of type [UpdateUnifiedPresence](./packages/core/definitions/UpdateUnifiedPresence.ts)
- `result` is of type [UnifiedPresence](./packages/core/definitions/UnifiedPresence.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateUnifiedPresence) in API Explorer.

## readIVRPromptContent
Get IVR Prompt Content

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}/content`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyGreetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(promptId).content().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#IVR-readIVRPromptContent) in API Explorer.

## listAccountMeetingRecordings
Get Account Meeting Recordings List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/meeting-recordings`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`MeetingsRecordings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).meetingRecordings().get(listAccountMeetingRecordingsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listAccountMeetingRecordingsParameters` is of type [ListAccountMeetingRecordingsParameters](./packages/core/definitions/ListAccountMeetingRecordingsParameters.ts)
- `result` is of type [ListMeetingRecordingsResponse](./packages/core/definitions/ListMeetingRecordingsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Recordings-listAccountMeetingRecordings) in API Explorer.

## GetAccountLockedSetting
Get Locked Meeting Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/meeting/locked-settings`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).meeting().lockedSettings().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [AccountLockedSettingResponse](./packages/core/definitions/AccountLockedSettingResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-GetAccountLockedSetting) in API Explorer.

## readMessageStoreConfiguration
Get Message Store Configuration

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/message-store-configuration`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`AccountAdministration`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).messageStoreConfiguration().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [MessageStoreConfiguration](./packages/core/definitions/MessageStoreConfiguration.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessageStoreConfiguration) in API Explorer.

## updateMessageStoreConfiguration
Update Message Store Configuration

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/message-store-configuration`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`AccountAdministration`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).messageStoreConfiguration().put(messageStoreConfiguration);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `messageStoreConfiguration` is of type [MessageStoreConfiguration](./packages/core/definitions/MessageStoreConfiguration.ts)
- `result` is of type [MessageStoreConfiguration](./packages/core/definitions/MessageStoreConfiguration.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-updateMessageStoreConfiguration) in API Explorer.

## createMessageStoreReport
Create Message Store Report

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/message-store-report`
Rate Limit Group|`Heavy`
App Permission|`ReadMessages`
User Permission|`Users`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).messageStoreReport().post(createMessageStoreReportRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createMessageStoreReportRequest` is of type [CreateMessageStoreReportRequest](./packages/core/definitions/CreateMessageStoreReportRequest.ts)
- `result` is of type [MessageStoreReport](./packages/core/definitions/MessageStoreReport.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-createMessageStoreReport) in API Explorer.

## readMessageStoreReportTask
Get Message Store Report Task

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/message-store-report/{taskId}`
Rate Limit Group|`Heavy`
App Permission|`ReadMessages`
User Permission|`Users`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).messageStoreReport(taskId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [MessageStoreReport](./packages/core/definitions/MessageStoreReport.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportTask) in API Explorer.

## readMessageStoreReportArchive
Get Message Store Report Archive

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/message-store-report/{taskId}/archive`
Rate Limit Group|`Heavy`
App Permission|`ReadMessages`
User Permission|`Users`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).messageStoreReport(taskId).archive().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [MessageStoreReportArchive](./packages/core/definitions/MessageStoreReportArchive.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportArchive) in API Explorer.

## readMessageStoreReportArchiveContent
Get Message Store Report Archive Content

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}`
Rate Limit Group|`Heavy`
App Permission|`ReadMessages`
User Permission|`Users`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).messageStoreReport(taskId).archive(archiveId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportArchiveContent) in API Explorer.

## listPagingGroupDevices
Get Paging Group Devices

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyDevices`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).pagingOnlyGroups(pagingOnlyGroupId).devices().get(listPagingGroupDevicesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listPagingGroupDevicesParameters` is of type [ListPagingGroupDevicesParameters](./packages/core/definitions/ListPagingGroupDevicesParameters.ts)
- `result` is of type [PagingOnlyGroupDevices](./packages/core/definitions/PagingOnlyGroupDevices.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-listPagingGroupDevices) in API Explorer.

## listPagingGroupUsers
Get Paging Group Users

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).pagingOnlyGroups(pagingOnlyGroupId).users().get(listPagingGroupUsersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listPagingGroupUsersParameters` is of type [ListPagingGroupUsersParameters](./packages/core/definitions/ListPagingGroupUsersParameters.ts)
- `result` is of type [PagingOnlyGroupUsers](./packages/core/definitions/PagingOnlyGroupUsers.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-listPagingGroupUsers) in API Explorer.

## createCallOutCallSession
Make CallOut

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/call-out`
Rate Limit Group|`Heavy`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().callOut().post(makeCallOutRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `makeCallOutRequest` is of type [MakeCallOutRequest](./packages/core/definitions/MakeCallOutRequest.ts)
- `result` is of type [CallSession](./packages/core/definitions/CallSession.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-createCallOutCallSession) in API Explorer.

## createConferenceCallSession
Start Conference Call Session

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/conference`
Rate Limit Group|`Heavy`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().conference().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallSessionObject](./packages/core/definitions/CallSessionObject.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-createConferenceCallSession) in API Explorer.

## readCallSessionStatus
Get Call Session Status

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).get(readCallSessionStatusParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readCallSessionStatusParameters` is of type [ReadCallSessionStatusParameters](./packages/core/definitions/ReadCallSessionStatusParameters.ts)
- `result` is of type [CallSessionObject](./packages/core/definitions/CallSessionObject.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-readCallSessionStatus) in API Explorer.

## deleteCallSession
Drop Call Session

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-deleteCallSession) in API Explorer.

## readCallPartyStatus
Get Call Party Status

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-readCallPartyStatus) in API Explorer.

## deleteCallParty
Delete Call Party

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`
Rate Limit Group|`Light`
App Permission|`TelephonySessions`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-deleteCallParty) in API Explorer.

## updateCallParty
Update Call Party

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).patch(partyUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `partyUpdateRequest` is of type [PartyUpdateRequest](./packages/core/definitions/PartyUpdateRequest.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-updateCallParty) in API Explorer.

## superviseCallSession
Supervise Call Session

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/supervise`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).supervise().post(superviseCallSessionRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `superviseCallSessionRequest` is of type [SuperviseCallSessionRequest](./packages/core/definitions/SuperviseCallSessionRequest.ts)
- `result` is of type [SuperviseCallSession](./packages/core/definitions/SuperviseCallSession.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-superviseCallSession) in API Explorer.

## listDomesticCountries
Get Domestic Country List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/brand/{brandId}/contracted-country/{contractedCountryId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().brand(brandId).contractedCountry(contractedCountryId).get(listDomesticCountriesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listDomesticCountriesParameters` is of type [ListDomesticCountriesParameters](./packages/core/definitions/ListDomesticCountriesParameters.ts)
- `result` is of type [GetCountryListResponse](./packages/core/definitions/GetCountryListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-listDomesticCountries) in API Explorer.

## getAddressBookBulkUploadTask
Get Contacts Update Task

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/address-book-bulk-upload/tasks/{taskId}`
Rate Limit Group|`Light`
App Permission|`Contacts`
User Permission|`EditPersonalContacts`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).addressBookBulkUpload().tasks(taskId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [AddressBookBulkUploadResponse](./packages/core/definitions/AddressBookBulkUploadResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-getAddressBookBulkUploadTask) in API Explorer.

## updateCallMonitoringGroupList
Update Call Monitoring Group List

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`Groups`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups(groupId).bulkAssign().post(callMonitoringBulkAssign);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callMonitoringBulkAssign` is of type [CallMonitoringBulkAssign](./packages/core/definitions/CallMonitoringBulkAssign.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-updateCallMonitoringGroupList) in API Explorer.

## listCallMonitoringGroupMembers
Get Call Monitoring Group Member List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}/members`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callMonitoringGroups(groupId).members().get(listCallMonitoringGroupMembersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCallMonitoringGroupMembersParameters` is of type [ListCallMonitoringGroupMembersParameters](./packages/core/definitions/ListCallMonitoringGroupMembersParameters.ts)
- `result` is of type [CallMonitoringGroupMemberList](./packages/core/definitions/CallMonitoringGroupMemberList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-listCallMonitoringGroupMembers) in API Explorer.

## listCallRecordingCustomGreetings
Get Call Recording Custom Greeting List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-recording/custom-greetings`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callRecording().customGreetings().get(listCallRecordingCustomGreetingsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCallRecordingCustomGreetingsParameters` is of type [ListCallRecordingCustomGreetingsParameters](./packages/core/definitions/ListCallRecordingCustomGreetingsParameters.ts)
- `result` is of type [CallRecordingCustomGreetings](./packages/core/definitions/CallRecordingCustomGreetings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-listCallRecordingCustomGreetings) in API Explorer.

## deleteCallRecordingCustomGreetingList
Delete Call Recording Custom Greeting List

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-recording/custom-greetings`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callRecording().customGreetings().deleteAll();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-deleteCallRecordingCustomGreetingList) in API Explorer.

## deleteCallRecordingCustomGreeting
Delete Call Recording Custom Greeting

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/call-recording/custom-greetings/{greetingId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).callRecording().customGreetings(greetingId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-deleteCallRecordingCustomGreeting) in API Explorer.

## listDevicesAutomaticLocationUpdates
Get Device List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/devices`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().devices().get(listDevicesAutomaticLocationUpdatesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listDevicesAutomaticLocationUpdatesParameters` is of type [ListDevicesAutomaticLocationUpdatesParameters](./packages/core/definitions/ListDevicesAutomaticLocationUpdatesParameters.ts)
- `result` is of type [ListDevicesAutomaticLocationUpdates](./packages/core/definitions/ListDevicesAutomaticLocationUpdates.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listDevicesAutomaticLocationUpdates) in API Explorer.

## assignMultipleDevicesAutomaticLocationUpdates
Enable Automatic Location Updates for Devices

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/devices/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().devices().bulkAssign().post(assignMultipleDevicesAutomaticLocationUpdates);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `assignMultipleDevicesAutomaticLocationUpdates` is of type [AssignMultipleDevicesAutomaticLocationUpdates](./packages/core/definitions/AssignMultipleDevicesAutomaticLocationUpdates.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-assignMultipleDevicesAutomaticLocationUpdates) in API Explorer.

## listNetworks
Get Network Map

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [NetworksList](./packages/core/definitions/NetworksList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listNetworks) in API Explorer.

## createNetwork
Create Network

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks().post(createNetworkRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createNetworkRequest` is of type [CreateNetworkRequest](./packages/core/definitions/CreateNetworkRequest.ts)
- `result` is of type [NetworkInfo](./packages/core/definitions/NetworkInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createNetwork) in API Explorer.

## readNetwork
Get Network

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks/{networkId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks(networkId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [NetworkInfo](./packages/core/definitions/NetworkInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readNetwork) in API Explorer.

## updateNetwork
Update Network

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks/{networkId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks(networkId).put(updateNetworkRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `updateNetworkRequest` is of type [UpdateNetworkRequest](./packages/core/definitions/UpdateNetworkRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateNetwork) in API Explorer.

## deleteNetwork
Delete Network

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks/{networkId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks(networkId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteNetwork) in API Explorer.

## readAutomaticLocationUpdatesTask
Get Emergency Map Configuration Task

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/tasks/{taskId}`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().tasks(taskId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [AutomaticLocationUpdatesTaskInfo](./packages/core/definitions/AutomaticLocationUpdatesTaskInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readAutomaticLocationUpdatesTask) in API Explorer.

## listAutomaticLocationUpdatesUsers
Get User List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/users`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().users().get(listAutomaticLocationUpdatesUsersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listAutomaticLocationUpdatesUsersParameters` is of type [ListAutomaticLocationUpdatesUsersParameters](./packages/core/definitions/ListAutomaticLocationUpdatesUsersParameters.ts)
- `result` is of type [AutomaticLocationUpdatesUserList](./packages/core/definitions/AutomaticLocationUpdatesUserList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listAutomaticLocationUpdatesUsers) in API Explorer.

## assignMultipleAutomaticaLocationUpdatesUsers
Enable Automatic Location Updates for Users

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/users/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().users().bulkAssign().post(bulkAssignAutomaticLocationUpdatesUsers);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `bulkAssignAutomaticLocationUpdatesUsers` is of type [BulkAssignAutomaticLocationUpdatesUsers](./packages/core/definitions/BulkAssignAutomaticLocationUpdatesUsers.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-assignMultipleAutomaticaLocationUpdatesUsers) in API Explorer.

## listWirelessPoints
Get Wireless Point List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints().list(listWirelessPointsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listWirelessPointsParameters` is of type [ListWirelessPointsParameters](./packages/core/definitions/ListWirelessPointsParameters.ts)
- `result` is of type [WirelessPointsList](./packages/core/definitions/WirelessPointsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listWirelessPoints) in API Explorer.

## createWirelessPoint
Create Wireless Point

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints().post(createWirelessPoint);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createWirelessPoint` is of type [CreateWirelessPoint](./packages/core/definitions/CreateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./packages/core/definitions/WirelessPointInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createWirelessPoint) in API Explorer.

## readWirelessPoint
Get Wireless Point

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints(pointId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [WirelessPointInfo](./packages/core/definitions/WirelessPointInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readWirelessPoint) in API Explorer.

## updateWirelessPoint
Update Wireless Point

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints(pointId).put(updateWirelessPoint);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `updateWirelessPoint` is of type [UpdateWirelessPoint](./packages/core/definitions/UpdateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./packages/core/definitions/WirelessPointInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateWirelessPoint) in API Explorer.

## deleteWirelessPoint
Delete Wireless Point

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPoints(pointId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteWirelessPoint) in API Explorer.

## listContacts
Get Contact List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact`
Rate Limit Group|`Heavy`
App Permission|`ReadContacts`
User Permission|`ReadPersonalContacts`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact().list(listContactsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listContactsParameters` is of type [ListContactsParameters](./packages/core/definitions/ListContactsParameters.ts)
- `result` is of type [ContactList](./packages/core/definitions/ContactList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-listContacts) in API Explorer.

## createContact
Create Contact

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact`
Rate Limit Group|`Heavy`
App Permission|`Contacts`
User Permission|`EditPersonalContacts`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact().post(personalContactRequest, createContactParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `personalContactRequest` is of type [PersonalContactRequest](./packages/core/definitions/PersonalContactRequest.ts)
- `createContactParameters` is of type [CreateContactParameters](./packages/core/definitions/CreateContactParameters.ts)
- `result` is of type [PersonalContactResource](./packages/core/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-createContact) in API Explorer.

## readContact
Get Contact

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`
Rate Limit Group|`Heavy`
App Permission|`ReadContacts`
User Permission|`ReadPersonalContacts`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact(contactId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [PersonalContactResource](./packages/core/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-readContact) in API Explorer.

## updateContact
Update Contact

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`
Rate Limit Group|`Heavy`
App Permission|`Contacts`
User Permission|`EditPersonalContacts`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact(contactId).put(personalContactRequest, updateContactParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `personalContactRequest` is of type [PersonalContactRequest](./packages/core/definitions/PersonalContactRequest.ts)
- `updateContactParameters` is of type [UpdateContactParameters](./packages/core/definitions/UpdateContactParameters.ts)
- `result` is of type [PersonalContactResource](./packages/core/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateContact) in API Explorer.

## deleteContact
Delete Contact

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`
Rate Limit Group|`Heavy`
App Permission|`Contacts`
User Permission|`EditPersonalContacts`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact(contactId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-deleteContact) in API Explorer.

## checkUserPermission
Check User Permission

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/authz-profile/check`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).authzProfile().check().get(checkUserPermissionParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `checkUserPermissionParameters` is of type [CheckUserPermissionParameters](./packages/core/definitions/CheckUserPermissionParameters.ts)
- `result` is of type [AuthProfileCheckResource](./packages/core/definitions/AuthProfileCheckResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-checkUserPermission) in API Explorer.

## readExtensionCallQueuePresence
Get Agent’s Call Queue Presence

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queue-presence`
Rate Limit Group|`Light`
App Permission|`ReadPresence`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callQueuePresence().get(readExtensionCallQueuePresenceParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readExtensionCallQueuePresenceParameters` is of type [ReadExtensionCallQueuePresenceParameters](./packages/core/definitions/ReadExtensionCallQueuePresenceParameters.ts)
- `result` is of type [ExtensionCallQueuePresenceList](./packages/core/definitions/ExtensionCallQueuePresenceList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readExtensionCallQueuePresence) in API Explorer.

## updateExtensionCallQueuePresence
Update Call Queue Presence

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queue-presence`
Rate Limit Group|`Medium`
App Permission|`EditPresence`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callQueuePresence().put(extensionCallQueueUpdatePresenceList);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `extensionCallQueueUpdatePresenceList` is of type [ExtensionCallQueueUpdatePresenceList](./packages/core/definitions/ExtensionCallQueueUpdatePresenceList.ts)
- `result` is of type [ExtensionCallQueuePresenceList](./packages/core/definitions/ExtensionCallQueuePresenceList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateExtensionCallQueuePresence) in API Explorer.

## getExtensionEmergencyLocations
Get User Emergency Location List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).emergencyLocations().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [UserEmergencyLocationList](./packages/core/definitions/UserEmergencyLocationList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-getExtensionEmergencyLocations) in API Explorer.

## readMeetingServiceInfo
Get Meeting Service Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/service-info`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().serviceInfo().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [MeetingServiceInfoResource](./packages/core/definitions/MeetingServiceInfoResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-readMeetingServiceInfo) in API Explorer.

## updateMeetingServiceInfo
Update Meeting Service Info

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/service-info`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().serviceInfo().patch(meetingServiceInfoRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `meetingServiceInfoRequest` is of type [MeetingServiceInfoRequest](./packages/core/definitions/MeetingServiceInfoRequest.ts)
- `result` is of type [MeetingServiceInfoResource](./packages/core/definitions/MeetingServiceInfoResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-updateMeetingServiceInfo) in API Explorer.

## GetUserSetting
Get Meeting User Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/user-settings`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting().userSettings().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [MeetingUserSettingsResponse](./packages/core/definitions/MeetingUserSettingsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-GetUserSetting) in API Explorer.

## readMessageContent
Get Message Content

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}`
Rate Limit Group|`Medium`
App Permission|`ReadMessages`
User Permission|`ReadMessageContent`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).messageStore(messageId).content(attachmentId).get(readMessageContentParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readMessageContentParameters` is of type [ReadMessageContentParameters](./packages/core/definitions/ReadMessageContentParameters.ts)
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to [Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessageContent) in API Explorer.

## readUserVideoConfiguration
Get User Video Configuration

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/video-configuration`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).videoConfiguration().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [UserVideoConfiguration](./packages/core/definitions/UserVideoConfiguration.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Video-Configuration-readUserVideoConfiguration) in API Explorer.

## updateUserVideoConfiguration
Update User Video Configuration

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/video-configuration`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).videoConfiguration().put(userVideoConfiguration);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `userVideoConfiguration` is of type [UserVideoConfiguration](./packages/core/definitions/UserVideoConfiguration.ts)
- `result` is of type [UserVideoConfiguration](./packages/core/definitions/UserVideoConfiguration.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Video-Configuration-updateUserVideoConfiguration) in API Explorer.

## assignMultiplePagingGroupUsersDevices
Assign Paging Group Users and Devices

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`Groups`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).pagingOnlyGroups(pagingOnlyGroupId).bulkAssign().post(editPagingGroupRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `editPagingGroupRequest` is of type [EditPagingGroupRequest](./packages/core/definitions/EditPagingGroupRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-assignMultiplePagingGroupUsersDevices) in API Explorer.

## listAccountSwitches
Get Account Switch List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches().list(listAccountSwitchesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listAccountSwitchesParameters` is of type [ListAccountSwitchesParameters](./packages/core/definitions/ListAccountSwitchesParameters.ts)
- `result` is of type [SwitchesList](./packages/core/definitions/SwitchesList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listAccountSwitches) in API Explorer.

## createSwitch
Create Switch

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches().post(createSwitchInfo);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createSwitchInfo` is of type [CreateSwitchInfo](./packages/core/definitions/CreateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./packages/core/definitions/SwitchInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createSwitch) in API Explorer.

## readSwitch
Get Switch

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches/{switchId}`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches(switchId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [SwitchInfo](./packages/core/definitions/SwitchInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readSwitch) in API Explorer.

## updateSwitch
Update Switch

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches/{switchId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches(switchId).put(updateSwitchInfo);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `updateSwitchInfo` is of type [UpdateSwitchInfo](./packages/core/definitions/UpdateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./packages/core/definitions/SwitchInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateSwitch) in API Explorer.

## deleteSwitch
Delete Switch

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches/{switchId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switches(switchId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteSwitch) in API Explorer.

## createMultipleSwitches
Create Multiple Switches

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches-bulk-create`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switchesBulkCreate().post(createMultipleSwitchesRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createMultipleSwitchesRequest` is of type [CreateMultipleSwitchesRequest](./packages/core/definitions/CreateMultipleSwitchesRequest.ts)
- `result` is of type [CreateMultipleSwitchesResponse](./packages/core/definitions/CreateMultipleSwitchesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createMultipleSwitches) in API Explorer.

## updateMultipleSwitches
Update Multiple Switches

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches-bulk-update`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switchesBulkUpdate().post(updateMultipleSwitchesRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `updateMultipleSwitchesRequest` is of type [UpdateMultipleSwitchesRequest](./packages/core/definitions/UpdateMultipleSwitchesRequest.ts)
- `result` is of type [UpdateMultipleSwitchesResponse](./packages/core/definitions/UpdateMultipleSwitchesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateMultipleSwitches) in API Explorer.

## validateMultipleSwitches
Validate Multiple Switches

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches-bulk-validate`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().switchesBulkValidate().post(validateMultipleSwitchesRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `validateMultipleSwitchesRequest` is of type [ValidateMultipleSwitchesRequest](./packages/core/definitions/ValidateMultipleSwitchesRequest.ts)
- `result` is of type [ValidateMultipleSwitchesResponse](./packages/core/definitions/ValidateMultipleSwitchesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-validateMultipleSwitches) in API Explorer.

## createMultipleWirelessPoints
Create Multiple Wireless Points

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-create`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPointsBulkCreate().post(createMultipleWirelessPointsRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createMultipleWirelessPointsRequest` is of type [CreateMultipleWirelessPointsRequest](./packages/core/definitions/CreateMultipleWirelessPointsRequest.ts)
- `result` is of type [CreateMultipleWirelessPointsResponse](./packages/core/definitions/CreateMultipleWirelessPointsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createMultipleWirelessPoints) in API Explorer.

## updateMultipleWirelessPoints
Update Multiple Wireless Points

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-update`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPointsBulkUpdate().post(updateMultipleWirelessPointsRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `updateMultipleWirelessPointsRequest` is of type [UpdateMultipleWirelessPointsRequest](./packages/core/definitions/UpdateMultipleWirelessPointsRequest.ts)
- `result` is of type [UpdateMultipleWirelessPointsResponse](./packages/core/definitions/UpdateMultipleWirelessPointsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateMultipleWirelessPoints) in API Explorer.

## validateMultipleWirelessPoints
Validate Multiple Wireless Points

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-validate`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`ConfigureEmergencyMaps`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().wirelessPointsBulkValidate().post(validateMultipleWirelessPointsRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `validateMultipleWirelessPointsRequest` is of type [ValidateMultipleWirelessPointsRequest](./packages/core/definitions/ValidateMultipleWirelessPointsRequest.ts)
- `result` is of type [ValidateMultipleWirelessPointsResponse](./packages/core/definitions/ValidateMultipleWirelessPointsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-validateMultipleWirelessPoints) in API Explorer.

## listBlockedAllowedNumbers
Get Blocked/Allowed Phone Numbers

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadBlockedNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers().list(listBlockedAllowedNumbersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listBlockedAllowedNumbersParameters` is of type [ListBlockedAllowedNumbersParameters](./packages/core/definitions/ListBlockedAllowedNumbersParameters.ts)
- `result` is of type [BlockedAllowedPhoneNumbersList](./packages/core/definitions/BlockedAllowedPhoneNumbersList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-listBlockedAllowedNumbers) in API Explorer.

## createBlockedAllowedNumber
Add Blocked/Allowed Number

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditBlockedNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers().post(addBlockedAllowedPhoneNumber);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `addBlockedAllowedPhoneNumber` is of type [AddBlockedAllowedPhoneNumber](./packages/core/definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type [BlockedAllowedPhoneNumberInfo](./packages/core/definitions/BlockedAllowedPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-createBlockedAllowedNumber) in API Explorer.

## readBlockedAllowedNumber
Get Blocked/Allowed Number

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadBlockedNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers(blockedNumberId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [BlockedAllowedPhoneNumberInfo](./packages/core/definitions/BlockedAllowedPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-readBlockedAllowedNumber) in API Explorer.

## updateBlockedAllowedNumber
Update Blocked/Allowed Number

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditBlockedNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers(blockedNumberId).put(addBlockedAllowedPhoneNumber);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `addBlockedAllowedPhoneNumber` is of type [AddBlockedAllowedPhoneNumber](./packages/core/definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type [BlockedAllowedPhoneNumberInfo](./packages/core/definitions/BlockedAllowedPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-updateBlockedAllowedNumber) in API Explorer.

## deleteBlockedAllowedNumber
Delete Blocked/Allowed Number

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditBlockedNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerBlocking().phoneNumbers(blockedNumberId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-deleteBlockedAllowedNumber) in API Explorer.

## createUserMeetingProfileImage
Upload User Meeting Profile Image

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting-configuration/profile-image`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meetingConfiguration().profileImage().post(createUserMeetingProfileImageRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createUserMeetingProfileImageRequest` is of type [CreateUserMeetingProfileImageRequest](./packages/core/definitions/CreateUserMeetingProfileImageRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-createUserMeetingProfileImage) in API Explorer.

## readAssistants
Get Assistants

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meetingsConfiguration().assistants().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [AssistantsResource](./packages/core/definitions/AssistantsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-readAssistants) in API Explorer.

## readAssistedUsers
Get Assisted Users

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meetings-configuration/assisted`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meetingsConfiguration().assisted().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [AssistedUsersResource](./packages/core/definitions/AssistedUsersResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-readAssistedUsers) in API Explorer.

## readNotificationSettings
Get Notification Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/notification-settings`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadMessagesNotificationsSettings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).notificationSettings().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [NotificationSettings](./packages/core/definitions/NotificationSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readNotificationSettings) in API Explorer.

## updateNotificationSettings
Update Notification Settings

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/notification-settings`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditMessagesNotificationsSettings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).notificationSettings().put(notificationSettingsUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `notificationSettingsUpdateRequest` is of type [NotificationSettingsUpdateRequest](./packages/core/definitions/NotificationSettingsUpdateRequest.ts)
- `result` is of type [NotificationSettings](./packages/core/definitions/NotificationSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateNotificationSettings) in API Explorer.

## createCallPartyWithBringIn
Bring-In Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/bring-in`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties().bringIn().post(addPartyRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `addPartyRequest` is of type [AddPartyRequest](./packages/core/definitions/AddPartyRequest.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-createCallPartyWithBringIn) in API Explorer.

## answerCallParty
Answer Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/answer`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).answer().post(answerTarget);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `answerTarget` is of type [AnswerTarget](./packages/core/definitions/AnswerTarget.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-answerCallParty) in API Explorer.

## bridgeCallParty
Bridge Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/bridge`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).bridge().post(bridgeTargetRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `bridgeTargetRequest` is of type [BridgeTargetRequest](./packages/core/definitions/BridgeTargetRequest.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-bridgeCallParty) in API Explorer.

## callFlipParty
Call Flip on Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).flip().post(callPartyFlip);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callPartyFlip` is of type [CallPartyFlip](./packages/core/definitions/CallPartyFlip.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-callFlipParty) in API Explorer.

## forwardCallParty
Forward Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/forward`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).forward().post(forwardTarget);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `forwardTarget` is of type [ForwardTarget](./packages/core/definitions/ForwardTarget.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-forwardCallParty) in API Explorer.

## holdCallParty
Hold Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/hold`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).hold().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-holdCallParty) in API Explorer.

## ignoreCallInQueue
Ignore Call in Queue

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/ignore`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).ignore().post(ignoreRequestBody);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `ignoreRequestBody` is of type [IgnoreRequestBody](./packages/core/definitions/IgnoreRequestBody.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-ignoreCallInQueue) in API Explorer.

## callParkParty
Call Park

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/park`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).park().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-callParkParty) in API Explorer.

## pickupCallParty
Pickup Call

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/pickup`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).pickup().post(pickupTarget);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `pickupTarget` is of type [PickupTarget](./packages/core/definitions/PickupTarget.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-pickupCallParty) in API Explorer.

## startCallRecording
Create Recording

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).recordings().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-startCallRecording) in API Explorer.

## pauseResumeCallRecording
Pause/Resume Recording

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings/{recordingId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).recordings(recordingId).patch(callRecordingUpdate, pauseResumeCallRecordingParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callRecordingUpdate` is of type [CallRecordingUpdate](./packages/core/definitions/CallRecordingUpdate.ts)
- `pauseResumeCallRecordingParameters` is of type [PauseResumeCallRecordingParameters](./packages/core/definitions/PauseResumeCallRecordingParameters.ts)
- `result` is of type [CallRecording](./packages/core/definitions/CallRecording.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-pauseResumeCallRecording) in API Explorer.

## rejectParty
Reject Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reject`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).reject().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-rejectParty) in API Explorer.

## replyParty
Reply with Text

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reply`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).reply().post(callPartyReply);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callPartyReply` is of type [CallPartyReply](./packages/core/definitions/CallPartyReply.ts)
- `result` is of type [ReplyParty](./packages/core/definitions/ReplyParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-replyParty) in API Explorer.

## superviseCallParty
Supervise Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/supervise`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).supervise().post(partySuperviseRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `partySuperviseRequest` is of type [PartySuperviseRequest](./packages/core/definitions/PartySuperviseRequest.ts)
- `result` is of type [PartySuperviseResponse](./packages/core/definitions/PartySuperviseResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-superviseCallParty) in API Explorer.

## transferCallParty
Transfer Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/transfer`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).transfer().post(transferTarget);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `transferTarget` is of type [TransferTarget](./packages/core/definitions/TransferTarget.ts)
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-transferCallParty) in API Explorer.

## unholdCallParty
Unhold Call Party

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/unhold`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).unhold().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallParty](./packages/core/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-unholdCallParty) in API Explorer.