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

- `result` is of type [ApiVersionsList](./src/definitions/ApiVersionsList.ts)

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
- `result` is of type [ApiVersionInfo](./src/definitions/ApiVersionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersion) in API Explorer.

## authorize
OAuth 2.0 Authorization

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/oauth/authorize`
Rate Limit Group|`Auth`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi().oauth().authorize().get();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#OAuth/OIDC-authorize) in API Explorer.

## authorize2
OAuth 2.0 Authorization (POST)

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/oauth/authorize`
Rate Limit Group|`Auth`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi().oauth().authorize().post(AuthorizeRequest);
await rc.revoke();
```

- `AuthorizeRequest` is of type [AuthorizeRequest](./src/definitions/AuthorizeRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#OAuth/OIDC-authorize2) in API Explorer.

## getToken
Get OAuth Token

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
var result = await rc.restapi().oauth().token().post(GetTokenRequest);
await rc.revoke();
```

- `GetTokenRequest` is of type [GetTokenRequest](./src/definitions/GetTokenRequest.ts)
- `result` is of type [TokenInfo](./src/definitions/TokenInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#OAuth/OIDC-getToken) in API Explorer.

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
- `result` is of type [GetAccountInfoResponse](./src/definitions/GetAccountInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountInfo) in API Explorer.

## readCompanyCallLog
List Company Call Records

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
- `readCompanyCallLogParameters` is of type [ReadCompanyCallLogParameters](./src/definitions/ReadCompanyCallLogParameters.ts)
- `result` is of type [AccountCallLogResponse](./src/definitions/AccountCallLogResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallLog) in API Explorer.

## readCompanyCallRecord
Get Company Call Record(s)

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
var result = await rc.restapi(apiVersion).account(accountId).callLog(callRecordId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CompanyCallLogRecord](./src/definitions/CompanyCallLogRecord.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallRecord) in API Explorer.

## listExtensions
List Extensions

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
- `listExtensionsParameters` is of type [ListExtensionsParameters](./src/definitions/ListExtensionsParameters.ts)
- `result` is of type [GetExtensionListResponse](./src/definitions/GetExtensionListResponse.ts)

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
- `extensionCreationRequest` is of type [ExtensionCreationRequest](./src/definitions/ExtensionCreationRequest.ts)
- `result` is of type [ExtensionCreationResponse](./src/definitions/ExtensionCreationResponse.ts)

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
- `result` is of type [GetExtensionInfoResponse](./src/definitions/GetExtensionInfoResponse.ts)

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
- `extensionUpdateRequest` is of type [ExtensionUpdateRequest](./src/definitions/ExtensionUpdateRequest.ts)
- `result` is of type [GetExtensionInfoResponse](./src/definitions/GetExtensionInfoResponse.ts)

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
- `deleteExtensionParameters` is of type [DeleteExtensionParameters](./src/definitions/DeleteExtensionParameters.ts)
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
- `createCompanyGreetingRequest` is of type [CreateCompanyGreetingRequest](./src/definitions/CreateCompanyGreetingRequest.ts)
- `result` is of type [CustomCompanyGreetingInfo](./src/definitions/CustomCompanyGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-createCompanyGreeting) in API Explorer.

## readIVRMenuList
Get IVR Menu list

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/ivr-menus`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).ivrMenus().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [IVRMenuList](./src/definitions/IVRMenuList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-readIVRMenuList) in API Explorer.

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
- `iVRMenuInfo` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)

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
- `result` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)

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
- `iVRMenuInfo` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./src/definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-updateIVRMenu) in API Explorer.

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
- `result` is of type [GetCallRecordingResponse](./src/definitions/GetCallRecordingResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recordings-readCallRecording) in API Explorer.

## listCountries
List Countries

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
- `listCountriesParameters` is of type [ListCountriesParameters](./src/definitions/ListCountriesParameters.ts)
- `result` is of type [CountryListDictionaryModel](./src/definitions/CountryListDictionaryModel.ts)

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
- `result` is of type [CountryInfoDictionaryModel](./src/definitions/CountryInfoDictionaryModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readCountry) in API Explorer.

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
- `result` is of type [SubscriptionListResource](./src/definitions/SubscriptionListResource.ts)

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
- `createSubscriptionRequest` is of type [CreateSubscriptionRequest](./src/definitions/CreateSubscriptionRequest.ts)
- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)

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
- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)

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
var result = await rc.restapi(apiVersion).subscription(subscriptionId).put(updateSubscriptionRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `updateSubscriptionRequest` is of type [UpdateSubscriptionRequest](./src/definitions/UpdateSubscriptionRequest.ts)
- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)

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
- `result` is of type [SubscriptionInfo](./src/definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-renewSubscription) in API Explorer.

## scimListResourceTypes2
List Resource Types

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/{version}/ResourceTypes`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).resourceTypes().list();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type [ScimResourceTypeSearchResponse](./src/definitions/ScimResourceTypeSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimListResourceTypes2) in API Explorer.

## scimGetResourceType2
Get Resource Type

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/{version}/ResourceTypes/{type}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).resourceTypes(type).get();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type [ScimResourceTypeResponse](./src/definitions/ScimResourceTypeResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimGetResourceType2) in API Explorer.

## scimListSchemas2
List Schemas

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/{version}/Schemas`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).schemas().list();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type [ScimSchemaSearchResponse](./src/definitions/ScimSchemaSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimListSchemas2) in API Explorer.

## scimGetSchema2
Get Schema

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/{version}/Schemas/{uri}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).schemas(uri).get();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type [ScimSchemaResponse](./src/definitions/ScimSchemaResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimGetSchema2) in API Explorer.

## scimSearchViaGet2
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
var result = await rc.scim(version).users().list(scimSearchViaGet2Parameters);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `scimSearchViaGet2Parameters` is of type [ScimSearchViaGet2Parameters](./src/definitions/ScimSearchViaGet2Parameters.ts)
- `result` is of type [ScimUserSearchResponse](./src/definitions/ScimUserSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimSearchViaGet2) in API Explorer.

## scimCreateUser2
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
var result = await rc.scim(version).users().post(scimUser);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `scimUser` is of type [ScimUser](./src/definitions/ScimUser.ts)
- `result` is of type [ScimUserResponse](./src/definitions/ScimUserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimCreateUser2) in API Explorer.

## scimGetUser2
Get User

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/{version}/Users/{scimUserId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).users(scimUserId).get();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type [ScimUserResponse](./src/definitions/ScimUserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimGetUser2) in API Explorer.

## scimUpdateUser2
Update/Replace User

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/scim/{version}/Users/{scimUserId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).users(scimUserId).put(scimUser);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `scimUser` is of type [ScimUser](./src/definitions/ScimUser.ts)
- `result` is of type [ScimUserResponse](./src/definitions/ScimUserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimUpdateUser2) in API Explorer.

## scimDeleteUser2
Delete User

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/scim/{version}/Users/{scimUserId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).users(scimUserId).delete();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimDeleteUser2) in API Explorer.

## scimPatchUser2
Update/Patch User

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/scim/{version}/Users/{scimUserId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).users(scimUserId).patch(scimUserPatch);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `scimUserPatch` is of type [ScimUserPatch](./src/definitions/ScimUserPatch.ts)
- `result` is of type [ScimUserResponse](./src/definitions/ScimUserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimPatchUser2) in API Explorer.

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
var result = await rc.restapi().oauth().revoke().post(RevokeTokenRequest);
await rc.revoke();
```

- `RevokeTokenRequest` is of type [RevokeTokenRequest](./src/definitions/RevokeTokenRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#OAuth/OIDC-revokeToken) in API Explorer.

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
- `readDeviceParameters` is of type [ReadDeviceParameters](./src/definitions/ReadDeviceParameters.ts)
- `result` is of type [GetDeviceInfoResponse](./src/definitions/GetDeviceInfoResponse.ts)

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
- `accountDeviceUpdate` is of type [AccountDeviceUpdate](./src/definitions/AccountDeviceUpdate.ts)
- `updateDeviceParameters` is of type [UpdateDeviceParameters](./src/definitions/UpdateDeviceParameters.ts)
- `result` is of type [GetDeviceInfoResponse](./src/definitions/GetDeviceInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-updateDevice) in API Explorer.

## readAccountMeeting
Get Account-level Meeting Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/meeting/{meetingId}`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).meeting(meetingId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-readAccountMeeting) in API Explorer.

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
- `readAccountPresenceParameters` is of type [ReadAccountPresenceParameters](./src/definitions/ReadAccountPresenceParameters.ts)
- `result` is of type [AccountPresenceInfo](./src/definitions/AccountPresenceInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readAccountPresence) in API Explorer.

## listStates
List States

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
- `listStatesParameters` is of type [ListStatesParameters](./src/definitions/ListStatesParameters.ts)
- `result` is of type [GetStateListResponse](./src/definitions/GetStateListResponse.ts)

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
- `result` is of type [GetStateInfoResponse](./src/definitions/GetStateInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readState) in API Explorer.

## scimGetProviderConfig2
Get Provider Config

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/scim/{version}/ServiceProviderConfig`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.scim(version).serviceProviderConfig().get();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type [ScimProviderConfig](./src/definitions/ScimProviderConfig.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimGetProviderConfig2) in API Explorer.

## scimSearchViaPost2
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
var result = await rc.scim(version).users().dotSearch().post(scimSearchRequest);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `scimSearchRequest` is of type [ScimSearchRequest](./src/definitions/ScimSearchRequest.ts)
- `result` is of type [ScimUserSearchResponse](./src/definitions/ScimUserSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimSearchViaPost2) in API Explorer.

## listGlipChatsNew
List Chats

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/chats`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats().list(listGlipChatsNewParameters);
await rc.revoke();
```

- `listGlipChatsNewParameters` is of type [ListGlipChatsNewParameters](./src/definitions/ListGlipChatsNewParameters.ts)
- `result` is of type [TMChatList](./src/definitions/TMChatList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipChatsNew) in API Explorer.

## readGlipChatNew
Get Chat

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/chats/{chatId}`
Rate Limit Group|`Light`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).get();
await rc.revoke();
```

- `result` is of type [TMChatInfo](./src/definitions/TMChatInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipChatNew) in API Explorer.

## readGlipPostsNew
List Posts

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/chats/{chatId}/posts`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).posts().list(readGlipPostsNewParameters);
await rc.revoke();
```

- `readGlipPostsNewParameters` is of type [ReadGlipPostsNewParameters](./src/definitions/ReadGlipPostsNewParameters.ts)
- `result` is of type [TMPostsList](./src/definitions/TMPostsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPostsNew) in API Explorer.

## createGlipPostNew
Create Post

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/chats/{chatId}/posts`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).posts().post(tMCreatePostRequest);
await rc.revoke();
```

- `tMCreatePostRequest` is of type [TMCreatePostRequest](./src/definitions/TMCreatePostRequest.ts)
- `result` is of type [TMPostInfo](./src/definitions/TMPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipPostNew) in API Explorer.

## readGlipPostNew
Get Post

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/chats/{chatId}/posts/{postId}`
Rate Limit Group|`Light`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).posts(postId).get();
await rc.revoke();
```

- `result` is of type [TMPostInfo](./src/definitions/TMPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPostNew) in API Explorer.

## deleteGlipPostNew
Delete Post

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/team-messaging/{version}/chats/{chatId}/posts/{postId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).posts(postId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Posts-deleteGlipPostNew) in API Explorer.

## patchGlipPostNew
Update Post

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/team-messaging/{version}/chats/{chatId}/posts/{postId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).posts(postId).patch(tMUpdatePostRequest);
await rc.revoke();
```

- `tMUpdatePostRequest` is of type [TMUpdatePostRequest](./src/definitions/TMUpdatePostRequest.ts)
- `result` is of type [TMPostInfo](./src/definitions/TMPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-patchGlipPostNew) in API Explorer.

## listChatTasksNew
List Chat Tasks

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/chats/{chatId}/tasks`
Rate Limit Group|`Heavy`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).tasks().get(listChatTasksNewParameters);
await rc.revoke();
```

- `listChatTasksNewParameters` is of type [ListChatTasksNewParameters](./src/definitions/ListChatTasksNewParameters.ts)
- `result` is of type [TMTaskList](./src/definitions/TMTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-listChatTasksNew) in API Explorer.

## createTaskNew
Create Task

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/chats/{chatId}/tasks`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).tasks().post(tMCreateTaskRequest);
await rc.revoke();
```

- `tMCreateTaskRequest` is of type [TMCreateTaskRequest](./src/definitions/TMCreateTaskRequest.ts)
- `result` is of type [TMTaskInfo](./src/definitions/TMTaskInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-createTaskNew) in API Explorer.

## readTMCompanyInfoNew
Get Company Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/companies/{companyId}`
Rate Limit Group|`Light`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).companies(companyId).get();
await rc.revoke();
```

- `result` is of type [TMCompanyInfo](./src/definitions/TMCompanyInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Profile-readTMCompanyInfoNew) in API Explorer.

## readGlipEventsNew
List User Events

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/events`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).events().list(readGlipEventsNewParameters);
await rc.revoke();
```

- `readGlipEventsNewParameters` is of type [ReadGlipEventsNewParameters](./src/definitions/ReadGlipEventsNewParameters.ts)
- `result` is of type [TMEventList](./src/definitions/TMEventList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-readGlipEventsNew) in API Explorer.

## createEventNew
Create Event

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/events`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).events().post(tMCreateEventRequest);
await rc.revoke();
```

- `tMCreateEventRequest` is of type [TMCreateEventRequest](./src/definitions/TMCreateEventRequest.ts)
- `result` is of type [TMEventInfo](./src/definitions/TMEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-createEventNew) in API Explorer.

## readEventNew
Get Event

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/events/{eventId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).events(eventId).get();
await rc.revoke();
```

- `result` is of type [TMEventInfo](./src/definitions/TMEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-readEventNew) in API Explorer.

## updateEventNew
Update Event

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/team-messaging/{version}/events/{eventId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).events(eventId).put(tMCreateEventRequest);
await rc.revoke();
```

- `tMCreateEventRequest` is of type [TMCreateEventRequest](./src/definitions/TMCreateEventRequest.ts)
- `result` is of type [TMEventInfo](./src/definitions/TMEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-updateEventNew) in API Explorer.

## deleteEventNew
Delete Event

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/team-messaging/{version}/events/{eventId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).events(eventId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-deleteEventNew) in API Explorer.

## readGlipEveryoneNew
Get Everyone Chat

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/everyone`
Rate Limit Group|`Light`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).everyone().get();
await rc.revoke();
```

- `result` is of type [EveryoneTeamInfo](./src/definitions/EveryoneTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-readGlipEveryoneNew) in API Explorer.

## patchGlipEveryoneNew
Update Everyone Chat

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/team-messaging/{version}/everyone`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).everyone().patch(updateEveryoneTeamRequest);
await rc.revoke();
```

- `updateEveryoneTeamRequest` is of type [UpdateEveryoneTeamRequest](./src/definitions/UpdateEveryoneTeamRequest.ts)
- `result` is of type [EveryoneTeamInfo](./src/definitions/EveryoneTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-patchGlipEveryoneNew) in API Explorer.

## listFavoriteChatsNew
List Favorite Chats

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/favorites`
Rate Limit Group|`Light`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).favorites().get(listFavoriteChatsNewParameters);
await rc.revoke();
```

- `listFavoriteChatsNewParameters` is of type [ListFavoriteChatsNewParameters](./src/definitions/ListFavoriteChatsNewParameters.ts)
- `result` is of type [TMChatListWithoutNavigation](./src/definitions/TMChatListWithoutNavigation.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listFavoriteChatsNew) in API Explorer.

## createGlipFileNew
Upload File

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/files`
Rate Limit Group|`Heavy`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).files().post(createGlipFileNewRequest, createGlipFileNewParameters);
await rc.revoke();
```

- `createGlipFileNewRequest` is of type [CreateGlipFileNewRequest](./src/definitions/CreateGlipFileNewRequest.ts)
- `createGlipFileNewParameters` is of type [CreateGlipFileNewParameters](./src/definitions/CreateGlipFileNewParameters.ts)
- `result` is of type [TMAddFileRequest](./src/definitions/TMAddFileRequest.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipFileNew) in API Explorer.

## readUserNoteNew
Get Note

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/notes/{noteId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).notes(noteId).get();
await rc.revoke();
```

- `result` is of type [TMNoteWithBodyInfo](./src/definitions/TMNoteWithBodyInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-readUserNoteNew) in API Explorer.

## deleteNoteNew
Delete Note

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/team-messaging/{version}/notes/{noteId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).notes(noteId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-deleteNoteNew) in API Explorer.

## patchNoteNew
Update Note

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/team-messaging/{version}/notes/{noteId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).notes(noteId).patch(tMCreateNoteRequest, patchNoteNewParameters);
await rc.revoke();
```

- `tMCreateNoteRequest` is of type [TMCreateNoteRequest](./src/definitions/TMCreateNoteRequest.ts)
- `patchNoteNewParameters` is of type [PatchNoteNewParameters](./src/definitions/PatchNoteNewParameters.ts)
- `result` is of type [TMNoteInfo](./src/definitions/TMNoteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-patchNoteNew) in API Explorer.

## readTaskNew
Get Task

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/tasks/{taskId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).tasks(taskId).get();
await rc.revoke();
```

- `result` is of type [TMTaskInfo](./src/definitions/TMTaskInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-readTaskNew) in API Explorer.

## deleteTaskNew
Delete Task

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/team-messaging/{version}/tasks/{taskId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).tasks(taskId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-deleteTaskNew) in API Explorer.

## patchTaskNew
Update Task

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/team-messaging/{version}/tasks/{taskId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).tasks(taskId).patch(tMUpdateTaskRequest);
await rc.revoke();
```

- `tMUpdateTaskRequest` is of type [TMUpdateTaskRequest](./src/definitions/TMUpdateTaskRequest.ts)
- `result` is of type [TMTaskList](./src/definitions/TMTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-patchTaskNew) in API Explorer.

## listGlipTeamsNew
List Teams

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/teams`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).teams().list(listGlipTeamsNewParameters);
await rc.revoke();
```

- `listGlipTeamsNewParameters` is of type [ListGlipTeamsNewParameters](./src/definitions/ListGlipTeamsNewParameters.ts)
- `result` is of type [TMTeamList](./src/definitions/TMTeamList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-listGlipTeamsNew) in API Explorer.

## createGlipTeamNew
Create Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/teams`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).teams().post(tMCreateTeamRequest);
await rc.revoke();
```

- `tMCreateTeamRequest` is of type [TMCreateTeamRequest](./src/definitions/TMCreateTeamRequest.ts)
- `result` is of type [TMTeamInfo](./src/definitions/TMTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-createGlipTeamNew) in API Explorer.

## readGlipTeamNew
Get Team

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/teams/{chatId}`
Rate Limit Group|`Light`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).teams(chatId).get();
await rc.revoke();
```

- `result` is of type [TMTeamInfo](./src/definitions/TMTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-readGlipTeamNew) in API Explorer.

## deleteGlipTeamNew
Delete Team

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/team-messaging/{version}/teams/{chatId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).teams(chatId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-deleteGlipTeamNew) in API Explorer.

## patchGlipTeamNew
Update Team

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/team-messaging/{version}/teams/{chatId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).teams(chatId).patch(tMUpdateTeamRequest);
await rc.revoke();
```

- `tMUpdateTeamRequest` is of type [TMUpdateTeamRequest](./src/definitions/TMUpdateTeamRequest.ts)
- `result` is of type [TMTeamInfo](./src/definitions/TMTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-patchGlipTeamNew) in API Explorer.

## listChatNotesNew
List Notes

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/chats/{chatId}/notes`
Rate Limit Group|`Heavy`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).notes().get(listChatNotesNewParameters);
await rc.revoke();
```

- `listChatNotesNewParameters` is of type [ListChatNotesNewParameters](./src/definitions/ListChatNotesNewParameters.ts)
- `result` is of type [TMNoteList](./src/definitions/TMNoteList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-listChatNotesNew) in API Explorer.

## createChatNoteNew
Create Note

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/chats/{chatId}/notes`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).notes().post(tMCreateNoteRequest);
await rc.revoke();
```

- `tMCreateNoteRequest` is of type [TMCreateNoteRequest](./src/definitions/TMCreateNoteRequest.ts)
- `result` is of type [TMNoteInfo](./src/definitions/TMNoteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-createChatNoteNew) in API Explorer.

## listDataExportTasksNew
List Data Export Tasks

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/data-export`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).dataExport().list(listDataExportTasksNewParameters);
await rc.revoke();
```

- `listDataExportTasksNewParameters` is of type [ListDataExportTasksNewParameters](./src/definitions/ListDataExportTasksNewParameters.ts)
- `result` is of type [DataExportTaskList](./src/definitions/DataExportTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Compliance-Exports-listDataExportTasksNew) in API Explorer.

## createDataExportTaskNew
Create Data Export Task

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/data-export`
Rate Limit Group|`Heavy`
App Permission|`TeamMessaging`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).dataExport().post(createDataExportTaskRequest);
await rc.revoke();
```

- `createDataExportTaskRequest` is of type [CreateDataExportTaskRequest](./src/definitions/CreateDataExportTaskRequest.ts)
- `result` is of type [DataExportTask](./src/definitions/DataExportTask.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Compliance-Exports-createDataExportTaskNew) in API Explorer.

## readDataExportTaskNew
Get Data Export Task

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/data-export/{taskId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`Glip`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).dataExport(taskId).get();
await rc.revoke();
```

- `result` is of type [DataExportTask](./src/definitions/DataExportTask.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Compliance-Exports-readDataExportTaskNew) in API Explorer.

## lockNoteNew
Lock Note

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/notes/{noteId}/lock`
Rate Limit Group|`Light`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).notes(noteId).lock().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-lockNoteNew) in API Explorer.

## readGlipPersonNew
Get Person

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/persons/{personId}`
Rate Limit Group|`Light`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).persons(personId).get();
await rc.revoke();
```

- `result` is of type [TMPersonInfo](./src/definitions/TMPersonInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Profile-readGlipPersonNew) in API Explorer.

## listGlipWebhooksNew
List Webhooks

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/webhooks`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).webhooks().list();
await rc.revoke();
```

- `result` is of type [TMWebhookList](./src/definitions/TMWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-listGlipWebhooksNew) in API Explorer.

## readGlipWebhookNew
Get Webhook

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/webhooks/{webhookId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).webhooks(webhookId).get();
await rc.revoke();
```

- `result` is of type [TMWebhookList](./src/definitions/TMWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-readGlipWebhookNew) in API Explorer.

## deleteGlipWebhookNew
Delete Webhook

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/team-messaging/{version}/webhooks/{webhookId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).webhooks(webhookId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-deleteGlipWebhookNew) in API Explorer.

## addGlipTeamMembersNew
Add Team Members

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/teams/{chatId}/add`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).teams(chatId).add().post(tMAddTeamMembersRequest);
await rc.revoke();
```

- `tMAddTeamMembersRequest` is of type [TMAddTeamMembersRequest](./src/definitions/TMAddTeamMembersRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-addGlipTeamMembersNew) in API Explorer.

## listUserTemplates
List User Templates

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
- `listUserTemplatesParameters` is of type [ListUserTemplatesParameters](./src/definitions/ListUserTemplatesParameters.ts)
- `result` is of type [UserTemplates](./src/definitions/UserTemplates.ts)

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
- `result` is of type [TemplateInfo](./src/definitions/TemplateInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-readUserTemplate) in API Explorer.

## listUserRoles
Get Account User Role List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/user-role`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadUserRoles`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).userRole().list(listUserRolesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listUserRolesParameters` is of type [ListUserRolesParameters](./src/definitions/ListUserRolesParameters.ts)
- `result` is of type [RolesCollectionResource](./src/definitions/RolesCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-listUserRoles) in API Explorer.

## createCustomRole
Create Custom Role

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/user-role`
Rate Limit Group|`Medium`
App Permission|`RoleManagement`
User Permission|`EditUserRoles`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).userRole().post(roleResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `roleResource` is of type [RoleResource](./src/definitions/RoleResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-createCustomRole) in API Explorer.

## readUserRole
Get User Role

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/user-role/{roleId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadUserRoles`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).userRole(roleId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [RoleResource](./src/definitions/RoleResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-readUserRole) in API Explorer.

## updateUserRole
Update User Role

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/user-role/{roleId}`
Rate Limit Group|`Medium`
App Permission|`RoleManagement`
User Permission|`EditUserRoles`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).userRole(roleId).put(roleResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `roleResource` is of type [RoleResource](./src/definitions/RoleResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-updateUserRole) in API Explorer.

## deleteCustomRole
Delete Custom Role

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/user-role/{roleId}`
Rate Limit Group|`Medium`
App Permission|`RoleManagement`
User Permission|`EditUserRoles`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).userRole(roleId).delete(deleteCustomRoleParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `deleteCustomRoleParameters` is of type [DeleteCustomRoleParameters](./src/definitions/DeleteCustomRoleParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-deleteCustomRole) in API Explorer.

## markChatReadNew
Mark Chat as Read

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/chats/{chatId}/read`
Rate Limit Group|`Medium`
App Permission|`TeamMessagingInternal`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).read().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-markChatReadNew) in API Explorer.

## readGlipPreferencesNew
Get Preferences

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/preferences`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).preferences().get();
await rc.revoke();
```

- `result` is of type [TMPreferencesInfo](./src/definitions/TMPreferencesInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Profile-readGlipPreferencesNew) in API Explorer.

## joinGlipTeamNew
Join Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/teams/{chatId}/join`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).teams(chatId).join().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-joinGlipTeamNew) in API Explorer.

## listA2PBatches
Get A2P SMS Batches

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/a2p-sms/batches`
Rate Limit Group|`Light`
App Permission|`A2PSMS`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().batches().list(listA2PBatchesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listA2PBatchesParameters` is of type [ListA2PBatchesParameters](./src/definitions/ListA2PBatchesParameters.ts)
- `result` is of type [BatchListResponse](./src/definitions/BatchListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-listA2PBatches) in API Explorer.

## createA2PSMS
Send A2P SMS

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/a2p-sms/batches`
Rate Limit Group|`Light`
App Permission|`A2PSMS`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().batches().post(messageBatchCreateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `messageBatchCreateRequest` is of type [MessageBatchCreateRequest](./src/definitions/MessageBatchCreateRequest.ts)
- `result` is of type [MessageBatchResponse](./src/definitions/MessageBatchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-createA2PSMS) in API Explorer.

## readA2PBatch
Get A2P SMS Batch

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/a2p-sms/batches/{batchId}`
Rate Limit Group|`Light`
App Permission|`A2PSMS`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().batches(batchId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [MessageBatchResponse](./src/definitions/MessageBatchResponse.ts)

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
- `listA2PSMSParameters` is of type [ListA2PSMSParameters](./src/definitions/ListA2PSMSParameters.ts)
- `result` is of type [MessageListResponse](./src/definitions/MessageListResponse.ts)

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
- `result` is of type [MessageDetailsResponse](./src/definitions/MessageDetailsResponse.ts)

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
- `readA2PSMSOptOutsParameters` is of type [ReadA2PSMSOptOutsParameters](./src/definitions/ReadA2PSMSOptOutsParameters.ts)
- `result` is of type [OptOutListResponse](./src/definitions/OptOutListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-readA2PSMSOptOuts) in API Explorer.

## aggregateA2PSMSStatuses
List A2P SMS Statuses

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/a2p-sms/statuses`
Rate Limit Group|`Light`
App Permission|`A2PSMS`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().statuses().get(aggregateA2PSMSStatusesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `aggregateA2PSMSStatusesParameters` is of type [AggregateA2PSMSStatusesParameters](./src/definitions/AggregateA2PSMSStatusesParameters.ts)
- `result` is of type [MessageStatusesResponse](./src/definitions/MessageStatusesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-aggregateA2PSMSStatuses) in API Explorer.

## listCompanyActiveCalls
List Company Active Calls

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
- `listCompanyActiveCallsParameters` is of type [ListCompanyActiveCallsParameters](./src/definitions/ListCompanyActiveCallsParameters.ts)
- `result` is of type [CompanyActiveCallsResponse](./src/definitions/CompanyActiveCallsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-listCompanyActiveCalls) in API Explorer.

## listCompanyAnsweringRules
List Company Call Handling Rules

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
var result = await rc.restapi(apiVersion).account(accountId).answeringRule().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CompanyAnsweringRuleList](./src/definitions/CompanyAnsweringRuleList.ts)

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
- `companyAnsweringRuleRequest` is of type [CompanyAnsweringRuleRequest](./src/definitions/CompanyAnsweringRuleRequest.ts)
- `result` is of type [CompanyAnsweringRuleInfo](./src/definitions/CompanyAnsweringRuleInfo.ts)

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
- `result` is of type [CompanyAnsweringRuleInfo](./src/definitions/CompanyAnsweringRuleInfo.ts)

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
- `companyAnsweringRuleUpdate` is of type [CompanyAnsweringRuleUpdate](./src/definitions/CompanyAnsweringRuleUpdate.ts)
- `result` is of type [CompanyAnsweringRuleInfo](./src/definitions/CompanyAnsweringRuleInfo.ts)

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

## listAssignedRoles
Get Assigned Role List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/assigned-role`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadAssignedRoles`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).assignedRole().get(listAssignedRolesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listAssignedRolesParameters` is of type [ListAssignedRolesParameters](./src/definitions/ListAssignedRolesParameters.ts)
- `result` is of type [ExtensionWithRolesCollectionResource](./src/definitions/ExtensionWithRolesCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-listAssignedRoles) in API Explorer.

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
- `result` is of type [AccountBusinessAddressResource](./src/definitions/AccountBusinessAddressResource.ts)

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
- `modifyAccountBusinessAddressRequest` is of type [ModifyAccountBusinessAddressRequest](./src/definitions/ModifyAccountBusinessAddressRequest.ts)
- `result` is of type [AccountBusinessAddressResource](./src/definitions/AccountBusinessAddressResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-updateAccountBusinessAddress) in API Explorer.

## readCompanyBusinessHours
Get Company Business Hours

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/business-hours`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).businessHours().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CompanyBusinessHours](./src/definitions/CompanyBusinessHours.ts)

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
- `companyBusinessHoursUpdateRequest` is of type [CompanyBusinessHoursUpdateRequest](./src/definitions/CompanyBusinessHoursUpdateRequest.ts)
- `result` is of type [CompanyBusinessHours](./src/definitions/CompanyBusinessHours.ts)

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
- `syncAccountCallLogParameters` is of type [SyncAccountCallLogParameters](./src/definitions/SyncAccountCallLogParameters.ts)
- `result` is of type [AccountCallLogSyncResponse](./src/definitions/AccountCallLogSyncResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-syncAccountCallLog) in API Explorer.

## listCallQueues
List Call Queues

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
- `listCallQueuesParameters` is of type [ListCallQueuesParameters](./src/definitions/ListCallQueuesParameters.ts)
- `result` is of type [CallQueues](./src/definitions/CallQueues.ts)

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
- `result` is of type [CallQueueDetails](./src/definitions/CallQueueDetails.ts)

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
- `callQueueUpdateDetails` is of type [CallQueueUpdateDetails](./src/definitions/CallQueueUpdateDetails.ts)
- `result` is of type [CallQueueDetails](./src/definitions/CallQueueDetails.ts)

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
- `result` is of type [CallRecordingSettingsResource](./src/definitions/CallRecordingSettingsResource.ts)

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
- `callRecordingSettingsResource` is of type [CallRecordingSettingsResource](./src/definitions/CallRecordingSettingsResource.ts)
- `result` is of type [CallRecordingSettingsResource](./src/definitions/CallRecordingSettingsResource.ts)

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
- `result` is of type [CustomFieldsResource](./src/definitions/CustomFieldsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-listCustomFields) in API Explorer.

## createCustomField
Create Custom Field

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/custom-fields`
Rate Limit Group|`Medium`
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
- `customFieldCreateRequest` is of type [CustomFieldCreateRequest](./src/definitions/CustomFieldCreateRequest.ts)
- `result` is of type [CustomFieldResource](./src/definitions/CustomFieldResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-createCustomField) in API Explorer.

## updateCustomField
Update Custom Field

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/custom-fields/{fieldId}`
Rate Limit Group|`Medium`
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
- `customFieldUpdateRequest` is of type [CustomFieldUpdateRequest](./src/definitions/CustomFieldUpdateRequest.ts)
- `result` is of type [CustomFieldResource](./src/definitions/CustomFieldResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-updateCustomField) in API Explorer.

## deleteCustomField
Delete Custom Field

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/custom-fields/{fieldId}`
Rate Limit Group|`Medium`
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

## readDeviceSIPInfo
Get Device SIP Info

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/device/{deviceId}/sip-info`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyDevices`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).device(deviceId).sipInfo().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [SipInfoResource](./src/definitions/SipInfoResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-readDeviceSIPInfo) in API Explorer.

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
- `listDirectoryEntriesParameters` is of type [ListDirectoryEntriesParameters](./src/definitions/ListDirectoryEntriesParameters.ts)
- `result` is of type [DirectoryResource](./src/definitions/DirectoryResource.ts)

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
- `result` is of type [ContactResource](./src/definitions/ContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readDirectoryEntry) in API Explorer.

## readUserCallLog
List User Call Records

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
- `readUserCallLogParameters` is of type [ReadUserCallLogParameters](./src/definitions/ReadUserCallLogParameters.ts)
- `result` is of type [UserCallLogResponse](./src/definitions/UserCallLogResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallLog) in API Explorer.

## deleteUserCallLog
Delete User Call Records

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
- `deleteUserCallLogParameters` is of type [DeleteUserCallLogParameters](./src/definitions/DeleteUserCallLogParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-deleteUserCallLog) in API Explorer.

## readUserCallRecord
Get User Call Record(s)

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
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callLog(callRecordId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [UserCallLogRecord](./src/definitions/UserCallLogRecord.ts)

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
- `listExtensionDevicesParameters` is of type [ListExtensionDevicesParameters](./src/definitions/ListExtensionDevicesParameters.ts)
- `result` is of type [GetExtensionDevicesResponse](./src/definitions/GetExtensionDevicesResponse.ts)

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
- `createFaxMessageRequest` is of type [CreateFaxMessageRequest](./src/definitions/CreateFaxMessageRequest.ts)
- `result` is of type [FaxResponse](./src/definitions/FaxResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Fax-createFaxMessage) in API Explorer.

## listExtensionGrants
List Extension Grants

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
- `listExtensionGrantsParameters` is of type [ListExtensionGrantsParameters](./src/definitions/ListExtensionGrantsParameters.ts)
- `result` is of type [GetExtensionGrantListResponse](./src/definitions/GetExtensionGrantListResponse.ts)

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
- `createCustomUserGreetingRequest` is of type [CreateCustomUserGreetingRequest](./src/definitions/CreateCustomUserGreetingRequest.ts)
- `createCustomUserGreetingParameters` is of type [CreateCustomUserGreetingParameters](./src/definitions/CreateCustomUserGreetingParameters.ts)
- `result` is of type [CustomUserGreetingInfo](./src/definitions/CustomUserGreetingInfo.ts)

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
- `result` is of type [CustomUserGreetingInfo](./src/definitions/CustomUserGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-readCustomGreeting) in API Explorer.

## listMeetings
List Scheduled Meetings

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
- `result` is of type [MeetingsResource](./src/definitions/MeetingsResource.ts)

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
- `meetingRequestResource` is of type [MeetingRequestResource](./src/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)

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
- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)

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
- `meetingRequestResource` is of type [MeetingRequestResource](./src/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)

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
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).delete(deleteMeetingParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `deleteMeetingParameters` is of type [DeleteMeetingParameters](./src/definitions/DeleteMeetingParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-deleteMeeting) in API Explorer.

## patchMeeting
Update Meeting

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meeting(meetingId).patch(meetingRequestResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `meetingRequestResource` is of type [MeetingRequestResource](./src/definitions/MeetingRequestResource.ts)
- `result` is of type [MeetingResponseResource](./src/definitions/MeetingResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Management-patchMeeting) in API Explorer.

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
- `CreateMMSMessage` is of type [CreateMMSMessage](./src/definitions/CreateMMSMessage.ts)
- `result` is of type [GetSMSMessageInfoResponse](./src/definitions/GetSMSMessageInfoResponse.ts)

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
- `makeRingOutRequest` is of type [MakeRingOutRequest](./src/definitions/MakeRingOutRequest.ts)
- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)

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
- `result` is of type [GetRingOutStatusResponse](./src/definitions/GetRingOutStatusResponse.ts)

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
- `CreateSMSMessage` is of type [CreateSMSMessage](./src/definitions/CreateSMSMessage.ts)
- `result` is of type [GetSMSMessageInfoResponse](./src/definitions/GetSMSMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-createSMSMessage) in API Explorer.

## getForwardAllCompanyCalls
Get Forward All Company Calls

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/forward-all-calls`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadCompanyAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).forwardAllCalls().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [ForwardAllCompanyCallsInfo](./src/definitions/ForwardAllCompanyCallsInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-getForwardAllCompanyCalls) in API Explorer.

## updateForwardAllCompanyCalls
Update Forward All Company Calls

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/forward-all-calls`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCompanyAnsweringRules`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).forwardAllCalls().patch(forwardAllCompanyCallsInfo);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `forwardAllCompanyCallsInfo` is of type [ForwardAllCompanyCallsInfo](./src/definitions/ForwardAllCompanyCallsInfo.ts)
- `result` is of type [ForwardAllCompanyCallsInfo](./src/definitions/ForwardAllCompanyCallsInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-updateForwardAllCompanyCalls) in API Explorer.

## listIvrPrompts
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
- `result` is of type [IvrPrompts](./src/definitions/IvrPrompts.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-listIvrPrompts) in API Explorer.

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
- `createIVRPromptRequest` is of type [CreateIVRPromptRequest](./src/definitions/CreateIVRPromptRequest.ts)
- `result` is of type [PromptInfo](./src/definitions/PromptInfo.ts)

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
- `result` is of type [PromptInfo](./src/definitions/PromptInfo.ts)

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
- `updateIVRPromptRequest` is of type [UpdateIVRPromptRequest](./src/definitions/UpdateIVRPromptRequest.ts)
- `result` is of type [PromptInfo](./src/definitions/PromptInfo.ts)

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
List Company Phone Numbers

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
- `listAccountPhoneNumbersParameters` is of type [ListAccountPhoneNumbersParameters](./src/definitions/ListAccountPhoneNumbersParameters.ts)
- `result` is of type [AccountPhoneNumbers](./src/definitions/AccountPhoneNumbers.ts)

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
- `result` is of type [CompanyPhoneNumberInfo](./src/definitions/CompanyPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-readAccountPhoneNumber) in API Explorer.

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
- `result` is of type [AccountServiceInfo](./src/definitions/AccountServiceInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountServiceInfo) in API Explorer.

## readDefaultRole
Get Default User Role

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/user-role/default`
Rate Limit Group|`Light`
App Permission|`RoleManagement`
User Permission|`Roles`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).userRole().default().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-readDefaultRole) in API Explorer.

## updateDefaultUserRole
Set Default User Role

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/user-role/default`
Rate Limit Group|`Medium`
App Permission|`RoleManagement`
User Permission|`Roles`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).userRole().default().put(defaultUserRoleRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `defaultUserRoleRequest` is of type [DefaultUserRoleRequest](./src/definitions/DefaultUserRoleRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-updateDefaultUserRole) in API Explorer.

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
- `createSipRegistrationRequest` is of type [CreateSipRegistrationRequest](./src/definitions/CreateSipRegistrationRequest.ts)
- `result` is of type [CreateSipRegistrationResponse](./src/definitions/CreateSipRegistrationResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Device-SIP-Registration-createSIPRegistration) in API Explorer.

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
- `listFaxCoverPagesParameters` is of type [ListFaxCoverPagesParameters](./src/definitions/ListFaxCoverPagesParameters.ts)
- `result` is of type [ListFaxCoverPagesResponse](./src/definitions/ListFaxCoverPagesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Fax-listFaxCoverPages) in API Explorer.

## listStandardGreetings
List Standard Greetings

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
- `listStandardGreetingsParameters` is of type [ListStandardGreetingsParameters](./src/definitions/ListStandardGreetingsParameters.ts)
- `result` is of type [DictionaryGreetingList](./src/definitions/DictionaryGreetingList.ts)

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
- `result` is of type [DictionaryGreetingInfo](./src/definitions/DictionaryGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-readStandardGreeting) in API Explorer.

## listLanguages
List Languages

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
- `result` is of type [LanguageList](./src/definitions/LanguageList.ts)

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
- `result` is of type [LanguageInfo](./src/definitions/LanguageInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readLanguage) in API Explorer.

## listLocations
List Locations

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
- `listLocationsParameters` is of type [ListLocationsParameters](./src/definitions/ListLocationsParameters.ts)
- `result` is of type [GetLocationListResponse](./src/definitions/GetLocationListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listLocations) in API Explorer.

## listPermissions
Get Permission List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/permission`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().permission().list(listPermissionsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listPermissionsParameters` is of type [ListPermissionsParameters](./src/definitions/ListPermissionsParameters.ts)
- `result` is of type [PermissionCollectionResource](./src/definitions/PermissionCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Permissions-listPermissions) in API Explorer.

## readPermission
Get Permission

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/permission/{permissionId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().permission(permissionId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [PermissionResource](./src/definitions/PermissionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Permissions-readPermission) in API Explorer.

## listTimezones
List Timezones

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
- `listTimezonesParameters` is of type [ListTimezonesParameters](./src/definitions/ListTimezonesParameters.ts)
- `result` is of type [GetTimezoneListResponse](./src/definitions/GetTimezoneListResponse.ts)

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
- `readTimezoneParameters` is of type [ReadTimezoneParameters](./src/definitions/ReadTimezoneParameters.ts)
- `result` is of type [GetTimezoneInfoResponse](./src/definitions/GetTimezoneInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readTimezone) in API Explorer.

## listStandardUserRole
Get Standard User Role List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/user-role`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().userRole().list(listStandardUserRoleParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listStandardUserRoleParameters` is of type [ListStandardUserRoleParameters](./src/definitions/ListStandardUserRoleParameters.ts)
- `result` is of type [RolesCollectionResource](./src/definitions/RolesCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-listStandardUserRole) in API Explorer.

## readStandardUserRole
Get Standard User Role

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/user-role/{roleId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().userRole(roleId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [RoleResource](./src/definitions/RoleResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-readStandardUserRole) in API Explorer.

## parsePhoneNumber
Parse Phone Number(s)

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
- `parsePhoneNumberRequest` is of type [ParsePhoneNumberRequest](./src/definitions/ParsePhoneNumberRequest.ts)
- `parsePhoneNumberParameters` is of type [ParsePhoneNumberParameters](./src/definitions/ParsePhoneNumberParameters.ts)
- `result` is of type [ParsePhoneNumberResponse](./src/definitions/ParsePhoneNumberResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-parsePhoneNumber) in API Explorer.

## getGlipAdaptiveCardNew
Get Adaptive Card

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/adaptive-cards/{cardId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).adaptiveCards(cardId).get();
await rc.revoke();
```

- `result` is of type [AdaptiveCardInfo](./src/definitions/AdaptiveCardInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Adaptive-Cards-getGlipAdaptiveCardNew) in API Explorer.

## updateGlipAdaptiveCardNew
Update Adaptive Card

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/team-messaging/{version}/adaptive-cards/{cardId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).adaptiveCards(cardId).put(adaptiveCardRequest);
await rc.revoke();
```

- `adaptiveCardRequest` is of type [AdaptiveCardRequest](./src/definitions/AdaptiveCardRequest.ts)
- `result` is of type [AdaptiveCardShortInfo](./src/definitions/AdaptiveCardShortInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Adaptive-Cards-updateGlipAdaptiveCardNew) in API Explorer.

## deleteGlipAdaptiveCardNew
Delete Adaptive Card

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/team-messaging/{version}/adaptive-cards/{cardId}`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).adaptiveCards(cardId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Adaptive-Cards-deleteGlipAdaptiveCardNew) in API Explorer.

## favoriteGlipChatNew
Add Chat to Favorites

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/chats/{chatId}/favorite`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).favorite().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-favoriteGlipChatNew) in API Explorer.

## unfavoriteGlipChatNew
Remove Chat from Favorites

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/chats/{chatId}/unfavorite`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).unfavorite().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-unfavoriteGlipChatNew) in API Explorer.

## markChatUnreadNew
Mark Chat as Unread

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/chats/{chatId}/unread`
Rate Limit Group|`Medium`
App Permission|`TeamMessagingInternal`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).unread().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-markChatUnreadNew) in API Explorer.

## listGlipConversationsNew
List Conversations

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/conversations`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).conversations().list(listGlipConversationsNewParameters);
await rc.revoke();
```

- `listGlipConversationsNewParameters` is of type [ListGlipConversationsNewParameters](./src/definitions/ListGlipConversationsNewParameters.ts)
- `result` is of type [TMConversationList](./src/definitions/TMConversationList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-listGlipConversationsNew) in API Explorer.

## createGlipConversationNew
Create/Open Conversation

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/conversations`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).conversations().post(createConversationRequest);
await rc.revoke();
```

- `createConversationRequest` is of type [CreateConversationRequest](./src/definitions/CreateConversationRequest.ts)
- `result` is of type [TMConversationInfo](./src/definitions/TMConversationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-createGlipConversationNew) in API Explorer.

## readGlipConversationNew
Get Conversation

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/conversations/{chatId}`
Rate Limit Group|`Light`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).conversations(chatId).get();
await rc.revoke();
```

- `result` is of type [TMConversationInfo](./src/definitions/TMConversationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-readGlipConversationNew) in API Explorer.

## listGroupEventsNew
List Group Events

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/groups/{groupId}/events`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).groups(groupId).events().get();
await rc.revoke();
```

- `result` is of type [TMEventInfo](./src/definitions/TMEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-listGroupEventsNew) in API Explorer.

## createEventByGroupIdNew
Create Event by Group ID

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/groups/{groupId}/events`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).groups(groupId).events().post(tMCreateEventRequest);
await rc.revoke();
```

- `tMCreateEventRequest` is of type [TMCreateEventRequest](./src/definitions/TMCreateEventRequest.ts)
- `result` is of type [TMEventInfo](./src/definitions/TMEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-createEventByGroupIdNew) in API Explorer.

## listGlipGroupWebhooksNew
List Webhooks in Group

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/groups/{groupId}/webhooks`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).groups(groupId).webhooks().get();
await rc.revoke();
```

- `result` is of type [TMWebhookList](./src/definitions/TMWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-listGlipGroupWebhooksNew) in API Explorer.

## createGlipGroupWebhookNew
Create Webhook in Group

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/groups/{groupId}/webhooks`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).groups(groupId).webhooks().post();
await rc.revoke();
```

- `result` is of type [TMWebhookInfo](./src/definitions/TMWebhookInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-createGlipGroupWebhookNew) in API Explorer.

## publishNoteNew
Publish Note

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/notes/{noteId}/publish`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).notes(noteId).publish().post();
await rc.revoke();
```

- `result` is of type [TMNoteInfo](./src/definitions/TMNoteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-publishNoteNew) in API Explorer.

## unlockNoteNew
Unlock Note

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/notes/{noteId}/unlock`
Rate Limit Group|`Light`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).notes(noteId).unlock().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-unlockNoteNew) in API Explorer.

## listRecentChatsNew
List Recent Chats

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/team-messaging/{version}/recent/chats`
Rate Limit Group|`Light`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).recent().chats().get(listRecentChatsNewParameters);
await rc.revoke();
```

- `listRecentChatsNewParameters` is of type [ListRecentChatsNewParameters](./src/definitions/ListRecentChatsNewParameters.ts)
- `result` is of type [TMChatListWithoutNavigation](./src/definitions/TMChatListWithoutNavigation.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listRecentChatsNew) in API Explorer.

## completeTaskNew
Complete Task

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/tasks/{taskId}/complete`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).tasks(taskId).complete().post(tMCompleteTaskRequest);
await rc.revoke();
```

- `tMCompleteTaskRequest` is of type [TMCompleteTaskRequest](./src/definitions/TMCompleteTaskRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-completeTaskNew) in API Explorer.

## archiveGlipTeamNew
Archive Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/teams/{chatId}/archive`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).teams(chatId).archive().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-archiveGlipTeamNew) in API Explorer.

## leaveGlipTeamNew
Leave Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/teams/{chatId}/leave`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).teams(chatId).leave().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-leaveGlipTeamNew) in API Explorer.

## removeGlipTeamMembersNew
Remove Team Members

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/teams/{chatId}/remove`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).teams(chatId).remove().post(tMRemoveTeamMembersRequest);
await rc.revoke();
```

- `tMRemoveTeamMembersRequest` is of type [TMRemoveTeamMembersRequest](./src/definitions/TMRemoveTeamMembersRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-removeGlipTeamMembersNew) in API Explorer.

## unarchiveGlipTeamNew
Unarchive Team

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/teams/{chatId}/unarchive`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).teams(chatId).unarchive().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-unarchiveGlipTeamNew) in API Explorer.

## activateGlipWebhookNew
Activate Webhook

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/webhooks/{webhookId}/activate`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).webhooks(webhookId).activate().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-activateGlipWebhookNew) in API Explorer.

## suspendGlipWebhookNew
Suspend Webhook

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/webhooks/{webhookId}/suspend`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).webhooks(webhookId).suspend().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-suspendGlipWebhookNew) in API Explorer.

## analyticsCallsAggregationFetch
Calls Aggregation Data

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/analytics/calls/{version}/accounts/{accountId}/aggregation/fetch`
Rate Limit Group|`Light`
App Permission|`Analytics`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.analytics().calls(version).accounts(accountId).aggregation().fetch().post(aggregationRequest, analyticsCallsAggregationFetchParameters);
await rc.revoke();
```

- `aggregationRequest` is of type [AggregationRequest](./src/definitions/AggregationRequest.ts)
- `analyticsCallsAggregationFetchParameters` is of type [AnalyticsCallsAggregationFetchParameters](./src/definitions/AnalyticsCallsAggregationFetchParameters.ts)
- `result` is of type [AggregationResponse](./src/definitions/AggregationResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Line-Of-Business-Analytics-analyticsCallsAggregationFetch) in API Explorer.

## analyticsCallsTimelineFetch
Calls Timeline Data

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/analytics/calls/{version}/accounts/{accountId}/timeline/fetch`
Rate Limit Group|`Light`
App Permission|`Analytics`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.analytics().calls(version).accounts(accountId).timeline().fetch().post(timelineRequest, analyticsCallsTimelineFetchParameters);
await rc.revoke();
```

- `timelineRequest` is of type [TimelineRequest](./src/definitions/TimelineRequest.ts)
- `analyticsCallsTimelineFetchParameters` is of type [AnalyticsCallsTimelineFetchParameters](./src/definitions/AnalyticsCallsTimelineFetchParameters.ts)
- `result` is of type [TimelineResponse](./src/definitions/TimelineResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Line-Of-Business-Analytics-analyticsCallsTimelineFetch) in API Explorer.

## addressBookBulkUpload
Upload Multiple User Contacts

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
- `addressBookBulkUploadRequest` is of type [AddressBookBulkUploadRequest](./src/definitions/AddressBookBulkUploadRequest.ts)
- `result` is of type [AddressBookBulkUploadResponse](./src/definitions/AddressBookBulkUploadResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-addressBookBulkUpload) in API Explorer.

## auditTrailSearch
Search Audit Trail Data

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/audit-trail/search`
Rate Limit Group|`Heavy`
App Permission|`ReadAuditTrail`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).auditTrail().search().post(accountHistorySearchPublicRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `accountHistorySearchPublicRequest` is of type [AccountHistorySearchPublicRequest](./src/definitions/AccountHistorySearchPublicRequest.ts)
- `result` is of type [AccountHistorySearchPublicResponse](./src/definitions/AccountHistorySearchPublicResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Audit-Trail-auditTrailSearch) in API Explorer.

## listCallMonitoringGroups
List Call Monitoring Groups

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
- `listCallMonitoringGroupsParameters` is of type [ListCallMonitoringGroupsParameters](./src/definitions/ListCallMonitoringGroupsParameters.ts)
- `result` is of type [CallMonitoringGroups](./src/definitions/CallMonitoringGroups.ts)

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
- `createCallMonitoringGroupRequest` is of type [CreateCallMonitoringGroupRequest](./src/definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type [CallMonitoringGroup](./src/definitions/CallMonitoringGroup.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-createCallMonitoringGroup) in API Explorer.

## updateCallMonitoringGroup
Update Call Monitoring Group

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
- `createCallMonitoringGroupRequest` is of type [CreateCallMonitoringGroupRequest](./src/definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type [CallMonitoringGroup](./src/definitions/CallMonitoringGroup.ts)

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
- `callQueueBulkAssignResource` is of type [CallQueueBulkAssignResource](./src/definitions/CallQueueBulkAssignResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-assignMultipleCallQueueMembers) in API Explorer.

## listCallQueueMembers
List Call Queue Members

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
- `listCallQueueMembersParameters` is of type [ListCallQueueMembersParameters](./src/definitions/ListCallQueueMembersParameters.ts)
- `result` is of type [CallQueueMembers](./src/definitions/CallQueueMembers.ts)

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
- `result` is of type [CallQueuePresence](./src/definitions/CallQueuePresence.ts)

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
- `callQueueUpdatePresence` is of type [CallQueueUpdatePresence](./src/definitions/CallQueueUpdatePresence.ts)
- `result` is of type [CallQueuePresence](./src/definitions/CallQueuePresence.ts)

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
- `bulkAccountCallRecordingsResource` is of type [BulkAccountCallRecordingsResource](./src/definitions/BulkAccountCallRecordingsResource.ts)
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
- `result` is of type [CallRecordingExtensions](./src/definitions/CallRecordingExtensions.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-listCallRecordingExtensions) in API Explorer.

## directoryGetDeviceTypes
Get types of devices which are present on the account

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/directory/device-types`
Rate Limit Group|`Heavy`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).directory().deviceTypes().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [DeviceTypesResource](./src/definitions/DeviceTypesResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-directoryGetDeviceTypes) in API Explorer.

## directorySearchDevices
Search devices within Federated accounts

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/directory/devices/search`
Rate Limit Group|`Heavy`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).directory().devices().search().post(devicesSearch);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `devicesSearch` is of type [DevicesSearch](./src/definitions/DevicesSearch.ts)
- `result` is of type [DevicesPaginationResource](./src/definitions/DevicesPaginationResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-directorySearchDevices) in API Explorer.

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
var result = await rc.restapi(apiVersion).account(accountId).directory().entries().search().post(searchDirectoryEntriesRequest, searchDirectoryEntriesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `searchDirectoryEntriesRequest` is of type [SearchDirectoryEntriesRequest](./src/definitions/SearchDirectoryEntriesRequest.ts)
- `searchDirectoryEntriesParameters` is of type [SearchDirectoryEntriesParameters](./src/definitions/SearchDirectoryEntriesParameters.ts)
- `result` is of type [DirectoryResource](./src/definitions/DirectoryResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-searchDirectoryEntries) in API Explorer.

## readDirectoryFederation
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
var result = await rc.restapi(apiVersion).account(accountId).directory().federation().get(readDirectoryFederationParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readDirectoryFederationParameters` is of type [ReadDirectoryFederationParameters](./src/definitions/ReadDirectoryFederationParameters.ts)
- `result` is of type [FederationResource](./src/definitions/FederationResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readDirectoryFederation) in API Explorer.

## listEmergencyLocations
List Emergency Locations

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
- `listEmergencyLocationsParameters` is of type [ListEmergencyLocationsParameters](./src/definitions/ListEmergencyLocationsParameters.ts)
- `result` is of type [EmergencyLocationsResource](./src/definitions/EmergencyLocationsResource.ts)

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
- `emergencyLocationInfoRequest` is of type [EmergencyLocationInfoRequest](./src/definitions/EmergencyLocationInfoRequest.ts)
- `result` is of type [EmergencyLocationResource](./src/definitions/EmergencyLocationResource.ts)

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
var result = await rc.restapi(apiVersion).account(accountId).emergencyLocations(locationId).get(readEmergencyLocationParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readEmergencyLocationParameters` is of type [ReadEmergencyLocationParameters](./src/definitions/ReadEmergencyLocationParameters.ts)
- `result` is of type [EmergencyLocationResource](./src/definitions/EmergencyLocationResource.ts)

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
- `emergencyLocationInfoRequest` is of type [EmergencyLocationInfoRequest](./src/definitions/EmergencyLocationInfoRequest.ts)
- `result` is of type [EmergencyLocationResource](./src/definitions/EmergencyLocationResource.ts)

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
- `deleteEmergencyLocationParameters` is of type [DeleteEmergencyLocationParameters](./src/definitions/DeleteEmergencyLocationParameters.ts)
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
- `extensionBulkUpdateRequest` is of type [ExtensionBulkUpdateRequest](./src/definitions/ExtensionBulkUpdateRequest.ts)
- `result` is of type [ExtensionBulkUpdateTaskResource](./src/definitions/ExtensionBulkUpdateTaskResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-extensionBulkUpdate) in API Explorer.

## getExtensionBulkUpdateTask
Get Extension Update Task Status

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
- `result` is of type [ExtensionBulkUpdateTaskResource](./src/definitions/ExtensionBulkUpdateTaskResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-getExtensionBulkUpdateTask) in API Explorer.

## getCallQueueOverflowSettings
Get Call Queue Overflow Settings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{callQueueId}/overflow-settings`
Rate Limit Group|`Heavy`
App Permission|`ReadAccounts`
User Permission|`CallQueueToCallQueue`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(callQueueId).overflowSettings().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallQueueOverflowSettings](./src/definitions/CallQueueOverflowSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-getCallQueueOverflowSettings) in API Explorer.

## updateCallQueueOverflowSettings
Update Call Queue Overflow Settings

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{callQueueId}/overflow-settings`
Rate Limit Group|`Heavy`
App Permission|`EditExtensions`
User Permission|`CallQueueToCallQueue`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(callQueueId).overflowSettings().put(callQueueOverflowSettingsRequestResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callQueueOverflowSettingsRequestResource` is of type [CallQueueOverflowSettingsRequestResource](./src/definitions/CallQueueOverflowSettingsRequestResource.ts)
- `result` is of type [CallQueueOverflowSettings](./src/definitions/CallQueueOverflowSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-updateCallQueueOverflowSettings) in API Explorer.

## listExtensionActiveCalls
List User Active Calls

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
- `listExtensionActiveCallsParameters` is of type [ListExtensionActiveCallsParameters](./src/definitions/ListExtensionActiveCallsParameters.ts)
- `result` is of type [ActiveCallsResponse](./src/definitions/ActiveCallsResponse.ts)

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
- `syncAddressBookParameters` is of type [SyncAddressBookParameters](./src/definitions/SyncAddressBookParameters.ts)
- `result` is of type [AddressBookSync](./src/definitions/AddressBookSync.ts)

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
- `listAnsweringRulesParameters` is of type [ListAnsweringRulesParameters](./src/definitions/ListAnsweringRulesParameters.ts)
- `result` is of type [UserAnsweringRuleList](./src/definitions/UserAnsweringRuleList.ts)

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
- `createAnsweringRuleRequest` is of type [CreateAnsweringRuleRequest](./src/definitions/CreateAnsweringRuleRequest.ts)
- `result` is of type [CustomAnsweringRuleInfo](./src/definitions/CustomAnsweringRuleInfo.ts)

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
- `readAnsweringRuleParameters` is of type [ReadAnsweringRuleParameters](./src/definitions/ReadAnsweringRuleParameters.ts)
- `result` is of type [AnsweringRuleInfo](./src/definitions/AnsweringRuleInfo.ts)

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
- `updateAnsweringRuleRequest` is of type [UpdateAnsweringRuleRequest](./src/definitions/UpdateAnsweringRuleRequest.ts)
- `result` is of type [AnsweringRuleInfo](./src/definitions/AnsweringRuleInfo.ts)

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

## listUserAssignedRoles
Get User Assigned Role List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).assignedRole().get(listUserAssignedRolesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listUserAssignedRolesParameters` is of type [ListUserAssignedRolesParameters](./src/definitions/ListUserAssignedRolesParameters.ts)
- `result` is of type [AssignedRolesResource](./src/definitions/AssignedRolesResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-listUserAssignedRoles) in API Explorer.

## updateUserAssignedRoles
Update User Assigned Roles

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role`
Rate Limit Group|`Medium`
App Permission|`RoleManagement`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).assignedRole().put(assignedRolesResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `assignedRolesResource` is of type [AssignedRolesResource](./src/definitions/AssignedRolesResource.ts)
- `result` is of type [AssignedRolesResource](./src/definitions/AssignedRolesResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-updateUserAssignedRoles) in API Explorer.

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
- `result` is of type [AuthProfileResource](./src/definitions/AuthProfileResource.ts)

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
- `result` is of type [GetUserBusinessHoursResponse](./src/definitions/GetUserBusinessHoursResponse.ts)

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
- `userBusinessHoursUpdateRequest` is of type [UserBusinessHoursUpdateRequest](./src/definitions/UserBusinessHoursUpdateRequest.ts)
- `result` is of type [UserBusinessHoursUpdateResponse](./src/definitions/UserBusinessHoursUpdateResponse.ts)

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
- `syncUserCallLogParameters` is of type [SyncUserCallLogParameters](./src/definitions/SyncUserCallLogParameters.ts)
- `result` is of type [CallLogSync](./src/definitions/CallLogSync.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-syncUserCallLog) in API Explorer.

## updateUserCallQueues
Update User Call Queues

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queues`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditCallQueuePresence`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callQueues().put(userCallQueues);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `userCallQueues` is of type [UserCallQueues](./src/definitions/UserCallQueues.ts)
- `result` is of type [UserCallQueues](./src/definitions/UserCallQueues.ts)

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
- `result` is of type [CallerBlockingSettings](./src/definitions/CallerBlockingSettings.ts)

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
- `callerBlockingSettingsUpdate` is of type [CallerBlockingSettingsUpdate](./src/definitions/CallerBlockingSettingsUpdate.ts)
- `result` is of type [CallerBlockingSettings](./src/definitions/CallerBlockingSettings.ts)

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
- `result` is of type [ExtensionCallerIdInfo](./src/definitions/ExtensionCallerIdInfo.ts)

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
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).callerId().put(extensionCallerIdInfoRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `extensionCallerIdInfoRequest` is of type [ExtensionCallerIdInfoRequest](./src/definitions/ExtensionCallerIdInfoRequest.ts)
- `result` is of type [ExtensionCallerIdInfo](./src/definitions/ExtensionCallerIdInfo.ts)

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
- `createInternalTextMessageRequest` is of type [CreateInternalTextMessageRequest](./src/definitions/CreateInternalTextMessageRequest.ts)
- `result` is of type [GetInternalTextMessageInfoResponse](./src/definitions/GetInternalTextMessageInfoResponse.ts)

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
- `readConferencingSettingsParameters` is of type [ReadConferencingSettingsParameters](./src/definitions/ReadConferencingSettingsParameters.ts)
- `result` is of type [GetConferencingInfoResponse](./src/definitions/GetConferencingInfoResponse.ts)

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
- `updateConferencingInfoRequest` is of type [UpdateConferencingInfoRequest](./src/definitions/UpdateConferencingInfoRequest.ts)
- `result` is of type [GetConferencingInfoResponse](./src/definitions/GetConferencingInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateConferencingSettings) in API Explorer.

## listFavoriteContacts
List Favorite Contacts

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
- `result` is of type [FavoriteContactList](./src/definitions/FavoriteContactList.ts)

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
- `favoriteCollection` is of type [FavoriteCollection](./src/definitions/FavoriteCollection.ts)
- `result` is of type [FavoriteContactList](./src/definitions/FavoriteContactList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateFavoriteContactList) in API Explorer.

## readExtensionFeatures
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
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).features().get(readExtensionFeaturesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readExtensionFeaturesParameters` is of type [ReadExtensionFeaturesParameters](./src/definitions/ReadExtensionFeaturesParameters.ts)
- `result` is of type [FeatureList](./src/definitions/FeatureList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Features-readExtensionFeatures) in API Explorer.

## listForwardingNumbers
List Forwarding Numbers

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
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [GetExtensionForwardingNumberListResponse](./src/definitions/GetExtensionForwardingNumberListResponse.ts)

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
- `createForwardingNumberRequest` is of type [CreateForwardingNumberRequest](./src/definitions/CreateForwardingNumberRequest.ts)
- `result` is of type [ForwardingNumberInfo](./src/definitions/ForwardingNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-createForwardingNumber) in API Explorer.

## deleteForwardingNumbers
Delete Forwarding Numbers

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserForwardingFlipNumbers`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).forwardingNumber().deleteAll(deleteForwardingNumbersRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `deleteForwardingNumbersRequest` is of type [DeleteForwardingNumbersRequest](./src/definitions/DeleteForwardingNumbersRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-deleteForwardingNumbers) in API Explorer.

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
- `result` is of type [ForwardingNumberResource](./src/definitions/ForwardingNumberResource.ts)

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
- `updateForwardingNumberRequest` is of type [UpdateForwardingNumberRequest](./src/definitions/UpdateForwardingNumberRequest.ts)
- `result` is of type [ForwardingNumberInfo](./src/definitions/ForwardingNumberInfo.ts)

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
- `result` is of type [PublicMeetingInvitationResponse](./src/definitions/PublicMeetingInvitationResponse.ts)

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
- `listMessagesParameters` is of type [ListMessagesParameters](./src/definitions/ListMessagesParameters.ts)
- `result` is of type [GetMessageList](./src/definitions/GetMessageList.ts)

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
- `deleteMessageByFilterParameters` is of type [DeleteMessageByFilterParameters](./src/definitions/DeleteMessageByFilterParameters.ts)
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
- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)

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
- `updateMessageRequest` is of type [UpdateMessageRequest](./src/definitions/UpdateMessageRequest.ts)
- `updateMessageParameters` is of type [UpdateMessageParameters](./src/definitions/UpdateMessageParameters.ts)
- `result` is of type [GetMessageInfoResponse](./src/definitions/GetMessageInfoResponse.ts)

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
- `deleteMessageParameters` is of type [DeleteMessageParameters](./src/definitions/DeleteMessageParameters.ts)
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
- `syncMessagesParameters` is of type [SyncMessagesParameters](./src/definitions/SyncMessagesParameters.ts)
- `result` is of type [GetMessageSyncResponse](./src/definitions/GetMessageSyncResponse.ts)

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
- `listExtensionPhoneNumbersParameters` is of type [ListExtensionPhoneNumbersParameters](./src/definitions/ListExtensionPhoneNumbersParameters.ts)
- `result` is of type [GetExtensionPhoneNumbersResponse](./src/definitions/GetExtensionPhoneNumbersResponse.ts)

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
- `readUserPresenceStatusParameters` is of type [ReadUserPresenceStatusParameters](./src/definitions/ReadUserPresenceStatusParameters.ts)
- `result` is of type [GetPresenceInfo](./src/definitions/GetPresenceInfo.ts)

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
- `presenceInfoRequest` is of type [PresenceInfoRequest](./src/definitions/PresenceInfoRequest.ts)
- `result` is of type [PresenceInfoResponse](./src/definitions/PresenceInfoResponse.ts)

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
- `createUserProfileImageRequest` is of type [CreateUserProfileImageRequest](./src/definitions/CreateUserProfileImageRequest.ts)
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
- `updateUserProfileImageRequest` is of type [UpdateUserProfileImageRequest](./src/definitions/UpdateUserProfileImageRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateUserProfileImage) in API Explorer.

## deleteUserProfileImage
Delete User Profile Image

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image`
Rate Limit Group|`Medium`
App Permission|`EditExtensions`
User Permission|`EditUserInfo`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).profileImage().delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-deleteUserProfileImage) in API Explorer.

## readScaledProfileImage
Get Scaled Profile Image

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
- `result` is of type [UnifiedPresence](./src/definitions/UnifiedPresence.ts)

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
- `updateUnifiedPresence` is of type [UpdateUnifiedPresence](./src/definitions/UpdateUnifiedPresence.ts)
- `result` is of type [UnifiedPresence](./src/definitions/UnifiedPresence.ts)

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
List Account Meeting Recordings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/meeting-recordings`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).meetingRecordings().get(listAccountMeetingRecordingsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listAccountMeetingRecordingsParameters` is of type [ListAccountMeetingRecordingsParameters](./src/definitions/ListAccountMeetingRecordingsParameters.ts)
- `result` is of type [ListMeetingRecordingsResponse](./src/definitions/ListMeetingRecordingsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Recordings-listAccountMeetingRecordings) in API Explorer.

## getAccountLockedSetting
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
- `result` is of type [AccountLockedSettingResponse](./src/definitions/AccountLockedSettingResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-getAccountLockedSetting) in API Explorer.

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
- `result` is of type [MessageStoreConfiguration](./src/definitions/MessageStoreConfiguration.ts)

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
- `messageStoreConfiguration` is of type [MessageStoreConfiguration](./src/definitions/MessageStoreConfiguration.ts)
- `result` is of type [MessageStoreConfiguration](./src/definitions/MessageStoreConfiguration.ts)

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
- `createMessageStoreReportRequest` is of type [CreateMessageStoreReportRequest](./src/definitions/CreateMessageStoreReportRequest.ts)
- `result` is of type [MessageStoreReport](./src/definitions/MessageStoreReport.ts)

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
- `result` is of type [MessageStoreReport](./src/definitions/MessageStoreReport.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportTask) in API Explorer.

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
- `listPagingGroupDevicesParameters` is of type [ListPagingGroupDevicesParameters](./src/definitions/ListPagingGroupDevicesParameters.ts)
- `result` is of type [PagingOnlyGroupDevices](./src/definitions/PagingOnlyGroupDevices.ts)

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
- `listPagingGroupUsersParameters` is of type [ListPagingGroupUsersParameters](./src/definitions/ListPagingGroupUsersParameters.ts)
- `result` is of type [PagingOnlyGroupUsers](./src/definitions/PagingOnlyGroupUsers.ts)

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
- `makeCallOutRequest` is of type [MakeCallOutRequest](./src/definitions/MakeCallOutRequest.ts)
- `result` is of type [CallSession](./src/definitions/CallSession.ts)

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
- `result` is of type [CallSession](./src/definitions/CallSession.ts)

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
- `readCallSessionStatusParameters` is of type [ReadCallSessionStatusParameters](./src/definitions/ReadCallSessionStatusParameters.ts)
- `result` is of type [CallSessionObject](./src/definitions/CallSessionObject.ts)

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
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-readCallPartyStatus) in API Explorer.

## deleteCallParty
Delete Call Party

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
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
- `partyUpdateRequest` is of type [PartyUpdateRequest](./src/definitions/PartyUpdateRequest.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

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
- `superviseCallSessionRequest` is of type [SuperviseCallSessionRequest](./src/definitions/SuperviseCallSessionRequest.ts)
- `result` is of type [SuperviseCallSessionResponse](./src/definitions/SuperviseCallSessionResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-superviseCallSession) in API Explorer.

## assignMultipleUserRoles
Assign Multiple User Roles

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/user-role/{roleId}/bulk-assign`
Rate Limit Group|`Heavy`
App Permission|`RoleManagement`
User Permission|`EditUserRoles`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).userRole(roleId).bulkAssign().post(bulkRoleAssignResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `bulkRoleAssignResource` is of type [BulkRoleAssignResource](./src/definitions/BulkRoleAssignResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-assignMultipleUserRoles) in API Explorer.

## listContractedCountries
List Contracted Countries

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/brand/{brandId}/contracted-country`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().brand(brandId).contractedCountry().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [ContractedCountryListResponse](./src/definitions/ContractedCountryListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-listContractedCountries) in API Explorer.

## listDomesticCountries
List Domestic Countries

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
- `listDomesticCountriesParameters` is of type [ListDomesticCountriesParameters](./src/definitions/ListDomesticCountriesParameters.ts)
- `result` is of type [CountryListDictionaryModel](./src/definitions/CountryListDictionaryModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-listDomesticCountries) in API Explorer.

## listPermissionCategories
Get Permission Category List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/permission-category`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().permissionCategory().list(listPermissionCategoriesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listPermissionCategoriesParameters` is of type [ListPermissionCategoriesParameters](./src/definitions/ListPermissionCategoriesParameters.ts)
- `result` is of type [PermissionCategoryCollectionResource](./src/definitions/PermissionCategoryCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Permissions-listPermissionCategories) in API Explorer.

## readPermissionCategory
Get Permission Category

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/dictionary/permission-category/{permissionCategoryId}`
Rate Limit Group|`Light`
App Permission|`N/A`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).dictionary().permissionCategory(permissionCategoryId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [PermissionCategoryResource](./src/definitions/PermissionCategoryResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Permissions-readPermissionCategory) in API Explorer.

## createGlipAdaptiveCardNew
Create Adaptive Card

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/team-messaging/{version}/chats/{chatId}/adaptive-cards`
Rate Limit Group|`Medium`
App Permission|`TeamMessaging`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.teamMessaging(version).chats(chatId).adaptiveCards().post(adaptiveCardRequest);
await rc.revoke();
```

- `adaptiveCardRequest` is of type [AdaptiveCardRequest](./src/definitions/AdaptiveCardRequest.ts)
- `result` is of type [AdaptiveCardShortInfo](./src/definitions/AdaptiveCardShortInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Adaptive-Cards-createGlipAdaptiveCardNew) in API Explorer.

## addA2PSMSOptOuts
Assign Multiple Opted Out/In Numbers

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/a2p-sms/opt-outs/bulk-assign`
Rate Limit Group|`Light`
App Permission|`A2PSMS`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().optOuts().bulkAssign().post(optOutBulkAssignRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `optOutBulkAssignRequest` is of type [OptOutBulkAssignRequest](./src/definitions/OptOutBulkAssignRequest.ts)
- `result` is of type [OptOutBulkAssignResponse](./src/definitions/OptOutBulkAssignResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-addA2PSMSOptOuts) in API Explorer.

## getAddressBookBulkUploadTask
Get Contacts Upload Task

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
- `result` is of type [AddressBookBulkUploadResponse](./src/definitions/AddressBookBulkUploadResponse.ts)

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
- `callMonitoringBulkAssign` is of type [CallMonitoringBulkAssign](./src/definitions/CallMonitoringBulkAssign.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-updateCallMonitoringGroupList) in API Explorer.

## listCallMonitoringGroupMembers
List Call Monitoring Group Members

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
- `listCallMonitoringGroupMembersParameters` is of type [ListCallMonitoringGroupMembersParameters](./src/definitions/ListCallMonitoringGroupMembersParameters.ts)
- `result` is of type [CallMonitoringGroupMemberList](./src/definitions/CallMonitoringGroupMemberList.ts)

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
- `listCallRecordingCustomGreetingsParameters` is of type [ListCallRecordingCustomGreetingsParameters](./src/definitions/ListCallRecordingCustomGreetingsParameters.ts)
- `result` is of type [CallRecordingCustomGreetings](./src/definitions/CallRecordingCustomGreetings.ts)

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
List Devices

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
- `listDevicesAutomaticLocationUpdatesParameters` is of type [ListDevicesAutomaticLocationUpdatesParameters](./src/definitions/ListDevicesAutomaticLocationUpdatesParameters.ts)
- `result` is of type [ListDevicesAutomaticLocationUpdates](./src/definitions/ListDevicesAutomaticLocationUpdates.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listDevicesAutomaticLocationUpdates) in API Explorer.

## assignMultipleDevicesAutomaticLocationUpdates
Enable Automatic Location Updates Feature

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
- `assignMultipleDevicesAutomaticLocationUpdates` is of type [AssignMultipleDevicesAutomaticLocationUpdates](./src/definitions/AssignMultipleDevicesAutomaticLocationUpdates.ts)
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
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().networks().list(listNetworksParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listNetworksParameters` is of type [ListNetworksParameters](./src/definitions/ListNetworksParameters.ts)
- `result` is of type [NetworksList](./src/definitions/NetworksList.ts)

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
- `createNetworkRequest` is of type [CreateNetworkRequest](./src/definitions/CreateNetworkRequest.ts)
- `result` is of type [NetworkInfo](./src/definitions/NetworkInfo.ts)

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
- `result` is of type [NetworkInfo](./src/definitions/NetworkInfo.ts)

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
- `updateNetworkRequest` is of type [UpdateNetworkRequest](./src/definitions/UpdateNetworkRequest.ts)
- `result` is of type [NetworkInfo](./src/definitions/NetworkInfo.ts)

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

## listAccountSwitches
List Account Switches

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
- `listAccountSwitchesParameters` is of type [ListAccountSwitchesParameters](./src/definitions/ListAccountSwitchesParameters.ts)
- `result` is of type [SwitchesList](./src/definitions/SwitchesList.ts)

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
- `createSwitchInfo` is of type [CreateSwitchInfo](./src/definitions/CreateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./src/definitions/SwitchInfo.ts)

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
- `result` is of type [SwitchInfo](./src/definitions/SwitchInfo.ts)

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
- `updateSwitchInfo` is of type [UpdateSwitchInfo](./src/definitions/UpdateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./src/definitions/SwitchInfo.ts)

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
- `createMultipleSwitchesRequest` is of type [CreateMultipleSwitchesRequest](./src/definitions/CreateMultipleSwitchesRequest.ts)
- `result` is of type [CreateMultipleSwitchesResponse](./src/definitions/CreateMultipleSwitchesResponse.ts)

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
- `updateMultipleSwitchesRequest` is of type [UpdateMultipleSwitchesRequest](./src/definitions/UpdateMultipleSwitchesRequest.ts)
- `result` is of type [UpdateMultipleSwitchesResponse](./src/definitions/UpdateMultipleSwitchesResponse.ts)

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
- `validateMultipleSwitchesRequest` is of type [ValidateMultipleSwitchesRequest](./src/definitions/ValidateMultipleSwitchesRequest.ts)
- `result` is of type [ValidateMultipleSwitchesResponse](./src/definitions/ValidateMultipleSwitchesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-validateMultipleSwitches) in API Explorer.

## assignMultipleAutomaticLocationUpdatesUsers
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
var result = await rc.restapi(apiVersion).account(accountId).emergencyAddressAutoUpdate().users().bulkAssign().post(emergencyAddressAutoUpdateUsersBulkAssignResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `emergencyAddressAutoUpdateUsersBulkAssignResource` is of type [EmergencyAddressAutoUpdateUsersBulkAssignResource](./src/definitions/EmergencyAddressAutoUpdateUsersBulkAssignResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-assignMultipleAutomaticLocationUpdatesUsers) in API Explorer.

## listContacts
List Contacts

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
- `listContactsParameters` is of type [ListContactsParameters](./src/definitions/ListContactsParameters.ts)
- `result` is of type [ContactList](./src/definitions/ContactList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-listContacts) in API Explorer.

## createContact
Create User Contact

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
- `personalContactRequest` is of type [PersonalContactRequest](./src/definitions/PersonalContactRequest.ts)
- `createContactParameters` is of type [CreateContactParameters](./src/definitions/CreateContactParameters.ts)
- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-createContact) in API Explorer.

## readContact
Get User Contact(s)

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
- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-readContact) in API Explorer.

## updateContact
Update User Contact(s)

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
- `personalContactRequest` is of type [PersonalContactRequest](./src/definitions/PersonalContactRequest.ts)
- `updateContactParameters` is of type [UpdateContactParameters](./src/definitions/UpdateContactParameters.ts)
- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateContact) in API Explorer.

## deleteContact
Delete User Contact(s)

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

## patchContact
Update Contact Attributes

Name|Value
-|-
HTTP Method|`PATCH`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`
Rate Limit Group|`Heavy`
App Permission|`Contacts`
User Permission|`EditPersonalContacts`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).addressBook().contact(contactId).patch(personalContactRequest, patchContactParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `personalContactRequest` is of type [PersonalContactRequest](./src/definitions/PersonalContactRequest.ts)
- `patchContactParameters` is of type [PatchContactParameters](./src/definitions/PatchContactParameters.ts)
- `result` is of type [PersonalContactResource](./src/definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-patchContact) in API Explorer.

## listAdministeredSites
Get User Administered Site List

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/administered-sites`
Rate Limit Group|`Medium`
App Permission|`ReadAccounts`
User Permission|`ReadExtensions`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).administeredSites().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Site-Administration-listAdministeredSites) in API Explorer.

## updateUserAdministeredSites
Update User Administered Sites

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/administered-sites`
Rate Limit Group|`Medium`
App Permission|`EditAccounts`
User Permission|`EditAssignedRoles`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).administeredSites().put(businessSiteCollectionRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `businessSiteCollectionRequest` is of type [BusinessSiteCollectionRequest](./src/definitions/BusinessSiteCollectionRequest.ts)
- `result` is of type [BusinessSiteCollectionResource](./src/definitions/BusinessSiteCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Site-Administration-updateUserAdministeredSites) in API Explorer.

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
- `checkUserPermissionParameters` is of type [CheckUserPermissionParameters](./src/definitions/CheckUserPermissionParameters.ts)
- `result` is of type [AuthProfileCheckResource](./src/definitions/AuthProfileCheckResource.ts)

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
- `readExtensionCallQueuePresenceParameters` is of type [ReadExtensionCallQueuePresenceParameters](./src/definitions/ReadExtensionCallQueuePresenceParameters.ts)
- `result` is of type [ExtensionCallQueuePresenceList](./src/definitions/ExtensionCallQueuePresenceList.ts)

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
- `extensionCallQueueUpdatePresenceList` is of type [ExtensionCallQueueUpdatePresenceList](./src/definitions/ExtensionCallQueueUpdatePresenceList.ts)
- `result` is of type [ExtensionCallQueuePresenceList](./src/definitions/ExtensionCallQueuePresenceList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateExtensionCallQueuePresence) in API Explorer.

## getExtensionEmergencyLocations
List User Emergency Locations

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
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).emergencyLocations().list(getExtensionEmergencyLocationsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `getExtensionEmergencyLocationsParameters` is of type [GetExtensionEmergencyLocationsParameters](./src/definitions/GetExtensionEmergencyLocationsParameters.ts)
- `result` is of type [EmergencyLocationsResource](./src/definitions/EmergencyLocationsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-getExtensionEmergencyLocations) in API Explorer.

## createExtensionEmergencyLocation
Create User Emergency Location

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`EmergencyFramework`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).emergencyLocations().post(createUserEmergencyLocationRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createUserEmergencyLocationRequest` is of type [CreateUserEmergencyLocationRequest](./src/definitions/CreateUserEmergencyLocationRequest.ts)
- `result` is of type [EmergencyLocationResource](./src/definitions/EmergencyLocationResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createExtensionEmergencyLocation) in API Explorer.

## getExtensionEmergencyLocation
Get User Emergency Location

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations/{locationId}`
Rate Limit Group|`Light`
App Permission|`ReadAccounts`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).emergencyLocations(locationId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [EmergencyLocationResource](./src/definitions/EmergencyLocationResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-getExtensionEmergencyLocation) in API Explorer.

## updateExtensionEmergencyLocation
Update User Emergency Location

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations/{locationId}`
Rate Limit Group|`Light`
App Permission|`EditAccounts`
User Permission|`EmergencyFramework`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).emergencyLocations(locationId).put(emergencyLocationResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `emergencyLocationResource` is of type [EmergencyLocationResource](./src/definitions/EmergencyLocationResource.ts)
- `result` is of type [EmergencyLocationResource](./src/definitions/EmergencyLocationResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateExtensionEmergencyLocation) in API Explorer.

## deleteExtensionEmergencyLocation
Delete User Emergency Location

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations/{locationId}`
Rate Limit Group|`Heavy`
App Permission|`EditAccounts`
User Permission|`EmergencyFramework`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).emergencyLocations(locationId).delete(deleteExtensionEmergencyLocationParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `deleteExtensionEmergencyLocationParameters` is of type [DeleteExtensionEmergencyLocationParameters](./src/definitions/DeleteExtensionEmergencyLocationParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteExtensionEmergencyLocation) in API Explorer.

## listUserMeetingRecordings
List User Meeting Recordings

Name|Value
-|-
HTTP Method|`GET`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting-recordings`
Rate Limit Group|`Medium`
App Permission|`Meetings`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meetingRecordings().get(listUserMeetingRecordingsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listUserMeetingRecordingsParameters` is of type [ListUserMeetingRecordingsParameters](./src/definitions/ListUserMeetingRecordingsParameters.ts)
- `result` is of type [ListMeetingRecordingsResponse](./src/definitions/ListMeetingRecordingsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Recordings-listUserMeetingRecordings) in API Explorer.

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
- `result` is of type [MessageStoreReportArchive](./src/definitions/MessageStoreReportArchive.ts)

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

## assignDefaultRole
Assign Default Role

Name|Value
-|-
HTTP Method|`PUT`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role/default`
Rate Limit Group|`Medium`
App Permission|`RoleManagement`
User Permission|`Users`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).assignedRole().default().put();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [AssignedRolesResource](./src/definitions/AssignedRolesResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-assignDefaultRole) in API Explorer.

## createUserMeetingProfileImage
Upload User Meeting Profile Image

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting-configuration/profile-image`
Rate Limit Group|`Light`
App Permission|`Meetings`
User Permission|`Meetings`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).extension(extensionId).meetingConfiguration().profileImage().post(createUserMeetingProfileImageRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createUserMeetingProfileImageRequest` is of type [CreateUserMeetingProfileImageRequest](./src/definitions/CreateUserMeetingProfileImageRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-createUserMeetingProfileImage) in API Explorer.

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
- `result` is of type [MeetingServiceInfoResource](./src/definitions/MeetingServiceInfoResource.ts)

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
- `meetingServiceInfoRequest` is of type [MeetingServiceInfoRequest](./src/definitions/MeetingServiceInfoRequest.ts)
- `result` is of type [MeetingServiceInfoResource](./src/definitions/MeetingServiceInfoResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-updateMeetingServiceInfo) in API Explorer.

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
- `readMessageContentParameters` is of type [ReadMessageContentParameters](./src/definitions/ReadMessageContentParameters.ts)
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
- `result` is of type [UserVideoConfiguration](./src/definitions/UserVideoConfiguration.ts)

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
- `userVideoConfiguration` is of type [UserVideoConfiguration](./src/definitions/UserVideoConfiguration.ts)
- `result` is of type [UserVideoConfiguration](./src/definitions/UserVideoConfiguration.ts)

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
- `editPagingGroupRequest` is of type [EditPagingGroupRequest](./src/definitions/EditPagingGroupRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-assignMultiplePagingGroupUsersDevices) in API Explorer.

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
- `result` is of type [AutomaticLocationUpdatesTaskInfo](./src/definitions/AutomaticLocationUpdatesTaskInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readAutomaticLocationUpdatesTask) in API Explorer.

## listAutomaticLocationUpdatesUsers
List Users

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
- `listAutomaticLocationUpdatesUsersParameters` is of type [ListAutomaticLocationUpdatesUsersParameters](./src/definitions/ListAutomaticLocationUpdatesUsersParameters.ts)
- `result` is of type [AutomaticLocationUpdatesUserList](./src/definitions/AutomaticLocationUpdatesUserList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listAutomaticLocationUpdatesUsers) in API Explorer.

## listWirelessPoints
List Wireless Points

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
- `listWirelessPointsParameters` is of type [ListWirelessPointsParameters](./src/definitions/ListWirelessPointsParameters.ts)
- `result` is of type [WirelessPointsList](./src/definitions/WirelessPointsList.ts)

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
- `createWirelessPoint` is of type [CreateWirelessPoint](./src/definitions/CreateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./src/definitions/WirelessPointInfo.ts)

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
- `result` is of type [WirelessPointInfo](./src/definitions/WirelessPointInfo.ts)

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
- `updateWirelessPoint` is of type [UpdateWirelessPoint](./src/definitions/UpdateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./src/definitions/WirelessPointInfo.ts)

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

## getUserSetting
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
- `result` is of type [MeetingUserSettingsResponse](./src/definitions/MeetingUserSettingsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-getUserSetting) in API Explorer.

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
- `result` is of type [NotificationSettings](./src/definitions/NotificationSettings.ts)

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
- `notificationSettingsUpdateRequest` is of type [NotificationSettingsUpdateRequest](./src/definitions/NotificationSettingsUpdateRequest.ts)
- `result` is of type [NotificationSettings](./src/definitions/NotificationSettings.ts)

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
- `addPartyRequest` is of type [AddPartyRequest](./src/definitions/AddPartyRequest.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

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
- `answerTarget` is of type [AnswerTarget](./src/definitions/AnswerTarget.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

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
- `bridgeTargetRequest` is of type [BridgeTargetRequest](./src/definitions/BridgeTargetRequest.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

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
- `callPartyFlip` is of type [CallPartyFlip](./src/definitions/CallPartyFlip.ts)
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
- `forwardTarget` is of type [ForwardTarget](./src/definitions/ForwardTarget.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

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
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-holdCallParty) in API Explorer.

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
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-callParkParty) in API Explorer.

## stopPlayCallParty
Stop Playing Audio File

Name|Value
-|-
HTTP Method|`DELETE`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/play/{playId}`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).play(playId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-stopPlayCallParty) in API Explorer.

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
- `createMultipleWirelessPointsRequest` is of type [CreateMultipleWirelessPointsRequest](./src/definitions/CreateMultipleWirelessPointsRequest.ts)
- `result` is of type [CreateMultipleWirelessPointsResponse](./src/definitions/CreateMultipleWirelessPointsResponse.ts)

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
- `updateMultipleWirelessPointsRequest` is of type [UpdateMultipleWirelessPointsRequest](./src/definitions/UpdateMultipleWirelessPointsRequest.ts)
- `result` is of type [UpdateMultipleWirelessPointsResponse](./src/definitions/UpdateMultipleWirelessPointsResponse.ts)

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
- `validateMultipleWirelessPointsRequest` is of type [ValidateMultipleWirelessPointsRequest](./src/definitions/ValidateMultipleWirelessPointsRequest.ts)
- `result` is of type [ValidateMultipleWirelessPointsResponse](./src/definitions/ValidateMultipleWirelessPointsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-validateMultipleWirelessPoints) in API Explorer.

## listBlockedAllowedNumbers
List Blocked/Allowed Phone Numbers

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
- `listBlockedAllowedNumbersParameters` is of type [ListBlockedAllowedNumbersParameters](./src/definitions/ListBlockedAllowedNumbersParameters.ts)
- `result` is of type [BlockedAllowedPhoneNumbersList](./src/definitions/BlockedAllowedPhoneNumbersList.ts)

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
- `addBlockedAllowedPhoneNumber` is of type [AddBlockedAllowedPhoneNumber](./src/definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type [BlockedAllowedPhoneNumberInfo](./src/definitions/BlockedAllowedPhoneNumberInfo.ts)

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
- `result` is of type [BlockedAllowedPhoneNumberInfo](./src/definitions/BlockedAllowedPhoneNumberInfo.ts)

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
- `addBlockedAllowedPhoneNumber` is of type [AddBlockedAllowedPhoneNumber](./src/definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type [BlockedAllowedPhoneNumberInfo](./src/definitions/BlockedAllowedPhoneNumberInfo.ts)

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
- `result` is of type [AssistantsResource](./src/definitions/AssistantsResource.ts)

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
- `result` is of type [AssistedUsersResource](./src/definitions/AssistedUsersResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Configuration-readAssistedUsers) in API Explorer.

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
- `ignoreRequestBody` is of type [IgnoreRequestBody](./src/definitions/IgnoreRequestBody.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-ignoreCallInQueue) in API Explorer.

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
- `pickupTarget` is of type [PickupTarget](./src/definitions/PickupTarget.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-pickupCallParty) in API Explorer.

## pausePlayCallParty
Pause Playing Audio File

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/play/{playId}/pause`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).play(playId).pause().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-pausePlayCallParty) in API Explorer.

## resumePlayCallParty
Resume Playing Audio File

Name|Value
-|-
HTTP Method|`POST`
Endpoint|`/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/play/{playId}/resume`
Rate Limit Group|`Light`
App Permission|`CallControl`
User Permission|`N/A`

```ts
const rc = new RingCentral({clientId, clientSecret, serverURL});
await rc.authorize({username, extension, password});
var result = await rc.restapi(apiVersion).account(accountId).telephony().sessions(telephonySessionId).parties(partyId).play(playId).resume().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-resumePlayCallParty) in API Explorer.

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
- `callRecordingUpdate` is of type [CallRecordingUpdate](./src/definitions/CallRecordingUpdate.ts)
- `pauseResumeCallRecordingParameters` is of type [PauseResumeCallRecordingParameters](./src/definitions/PauseResumeCallRecordingParameters.ts)
- `result` is of type [CallRecording](./src/definitions/CallRecording.ts)

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
- `callPartyReply` is of type [CallPartyReply](./src/definitions/CallPartyReply.ts)
- `result` is of type [ReplyParty](./src/definitions/ReplyParty.ts)

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
- `partySuperviseRequest` is of type [PartySuperviseRequest](./src/definitions/PartySuperviseRequest.ts)
- `result` is of type [PartySuperviseResponse](./src/definitions/PartySuperviseResponse.ts)

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
- `transferTarget` is of type [TransferTarget](./src/definitions/TransferTarget.ts)
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

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
- `result` is of type [CallParty](./src/definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-unholdCallParty) in API Explorer.