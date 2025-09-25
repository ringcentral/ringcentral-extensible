# RingCentral TypeScript Code Samples

## readAPIVersions

Get API Versions

| Name             | Value          |
| ---------------- | -------------- |
| HTTP Method      | `GET`          |
| Endpoint         | `/restapi`     |
| Rate Limit Group | `NoThrottling` |
| App Permission   | `N/A`          |
| User Permission  | `N/A`          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().list();
await rc.revoke();
```

- `result` is of type [ApiVersionsList](./definitions/ApiVersionsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersions)
in API Explorer.

## readAPIVersion

Get Version Info

| Name             | Value                   |
| ---------------- | ----------------------- |
| HTTP Method      | `GET`                   |
| Endpoint         | `/restapi/{apiVersion}` |
| Rate Limit Group | `NoThrottling`          |
| App Permission   | `N/A`                   |
| User Permission  | `N/A`                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [ApiVersionInfo](./definitions/ApiVersionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersion)
in API Explorer.

## scimSearchViaGet2

Search/List Users

| Name             | Value                   |
| ---------------- | ----------------------- |
| HTTP Method      | `GET`                   |
| Endpoint         | `/scim/{version}/Users` |
| Rate Limit Group | `Light`                 |
| App Permission   | `ReadAccounts`          |
| User Permission  | `N/A`                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.scim(version).users().list(scimSearchViaGet2Parameters);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `scimSearchViaGet2Parameters` is of type
  [ScimSearchViaGet2Parameters](./definitions/ScimSearchViaGet2Parameters.ts)
- `result` is of type
  [ScimUserSearchResponse](./definitions/ScimUserSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimSearchViaGet2)
in API Explorer.

## scimCreateUser2

Create User

| Name             | Value                   |
| ---------------- | ----------------------- |
| HTTP Method      | `POST`                  |
| Endpoint         | `/scim/{version}/Users` |
| Rate Limit Group | `Heavy`                 |
| App Permission   | `EditAccounts`          |
| User Permission  | `N/A`                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.scim(version).users().post(scimUser);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `scimUser` is of type [ScimUser](./definitions/ScimUser.ts)
- `result` is of type [ScimUserResponse](./definitions/ScimUserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimCreateUser2)
in API Explorer.

## scimGetUser2

Get User

| Name             | Value                                |
| ---------------- | ------------------------------------ |
| HTTP Method      | `GET`                                |
| Endpoint         | `/scim/{version}/Users/{scimUserId}` |
| Rate Limit Group | `Light`                              |
| App Permission   | `ReadAccounts`                       |
| User Permission  | `N/A`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.scim(version).users(scimUserId).get();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type [ScimUserResponse](./definitions/ScimUserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimGetUser2)
in API Explorer.

## scimUpdateUser2

Update/Replace User

| Name             | Value                                |
| ---------------- | ------------------------------------ |
| HTTP Method      | `PUT`                                |
| Endpoint         | `/scim/{version}/Users/{scimUserId}` |
| Rate Limit Group | `Heavy`                              |
| App Permission   | `EditAccounts`                       |
| User Permission  | `N/A`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.scim(version).users(scimUserId).put(scimUser);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `scimUser` is of type [ScimUser](./definitions/ScimUser.ts)
- `result` is of type [ScimUserResponse](./definitions/ScimUserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimUpdateUser2)
in API Explorer.

## scimDeleteUser2

Delete User

| Name             | Value                                |
| ---------------- | ------------------------------------ |
| HTTP Method      | `DELETE`                             |
| Endpoint         | `/scim/{version}/Users/{scimUserId}` |
| Rate Limit Group | `Heavy`                              |
| App Permission   | `EditAccounts`                       |
| User Permission  | `N/A`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.scim(version).users(scimUserId).delete();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimDeleteUser2)
in API Explorer.

## scimPatchUser2

Update/Patch User

| Name             | Value                                |
| ---------------- | ------------------------------------ |
| HTTP Method      | `PATCH`                              |
| Endpoint         | `/scim/{version}/Users/{scimUserId}` |
| Rate Limit Group | `Heavy`                              |
| App Permission   | `EditAccounts`                       |
| User Permission  | `N/A`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.scim(version).users(scimUserId).patch(scimUserPatch);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `scimUserPatch` is of type [ScimUserPatch](./definitions/ScimUserPatch.ts)
- `result` is of type [ScimUserResponse](./definitions/ScimUserResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimPatchUser2)
in API Explorer.

## authJwks

JSON Web Key Set (JWKS)

| Name             | Value                 |
| ---------------- | --------------------- |
| HTTP Method      | `GET`                 |
| Endpoint         | `/restapi/oauth/jwks` |
| Rate Limit Group | `NoThrottling`        |
| App Permission   | `N/A`                 |
| User Permission  | `N/A`                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().oauth().jwks().get();
await rc.revoke();
```

- `result` is of type [JWKeySet](./definitions/JWKeySet.ts)

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-and-OIDC-authJwks)
in API Explorer.

## scimListSchemas2

List Schemas

| Name             | Value                     |
| ---------------- | ------------------------- |
| HTTP Method      | `GET`                     |
| Endpoint         | `/scim/{version}/Schemas` |
| Rate Limit Group | `Light`                   |
| App Permission   | `ReadAccounts`            |
| User Permission  | `N/A`                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.scim(version).schemas().list();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type
  [ScimSchemaSearchResponse](./definitions/ScimSchemaSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimListSchemas2)
in API Explorer.

## scimGetSchema2

Get Schema

| Name             | Value                           |
| ---------------- | ------------------------------- |
| HTTP Method      | `GET`                           |
| Endpoint         | `/scim/{version}/Schemas/{uri}` |
| Rate Limit Group | `Light`                         |
| App Permission   | `ReadAccounts`                  |
| User Permission  | `N/A`                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.scim(version).schemas(uri).get();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type [ScimSchemaResponse](./definitions/ScimSchemaResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimGetSchema2)
in API Explorer.

## caiSpeakerDiarize

Speaker Diarization

| Name             | Value                                |
| ---------------- | ------------------------------------ |
| HTTP Method      | `POST`                               |
| Endpoint         | `/ai/audio/v1/async/speaker-diarize` |
| Rate Limit Group | `Heavy`                              |
| App Permission   | `AI`                                 |
| User Permission  | `N/A`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().audio().v1().async().speakerDiarize().post(
  diarizeInput,
  caiSpeakerDiarizeParameters,
);
await rc.revoke();
```

- `diarizeInput` is of type [DiarizeInput](./definitions/DiarizeInput.ts)
- `caiSpeakerDiarizeParameters` is of type
  [CaiSpeakerDiarizeParameters](./definitions/CaiSpeakerDiarizeParameters.ts)
- `result` is of type
  [CaiAsyncApiResponse](./definitions/CaiAsyncApiResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Audio-caiSpeakerDiarize)
in API Explorer.

## caiSpeakerIdentify

Speaker Identification

| Name             | Value                                 |
| ---------------- | ------------------------------------- |
| HTTP Method      | `POST`                                |
| Endpoint         | `/ai/audio/v1/async/speaker-identify` |
| Rate Limit Group | `Heavy`                               |
| App Permission   | `AI`                                  |
| User Permission  | `N/A`                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().audio().v1().async().speakerIdentify().post(
  identifyInput,
  caiSpeakerIdentifyParameters,
);
await rc.revoke();
```

- `identifyInput` is of type [IdentifyInput](./definitions/IdentifyInput.ts)
- `caiSpeakerIdentifyParameters` is of type
  [CaiSpeakerIdentifyParameters](./definitions/CaiSpeakerIdentifyParameters.ts)
- `result` is of type
  [CaiAsyncApiResponse](./definitions/CaiAsyncApiResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Audio-caiSpeakerIdentify)
in API Explorer.

## listAccountMeetings

List Account Video Meetings

| Name             | Value                                              |
| ---------------- | -------------------------------------------------- |
| HTTP Method      | `GET`                                              |
| Endpoint         | `/rcvideo/v1/history/account/{accountId}/meetings` |
| Rate Limit Group | `Light`                                            |
| App Permission   | `Video`                                            |
| User Permission  | `N/A`                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v1().history().account(accountId).meetings()
  .get(listAccountMeetingsParameters);
await rc.revoke();
```

- Parameter `accountId` is optional with default value `~`
- `listAccountMeetingsParameters` is of type
  [ListAccountMeetingsParameters](./definitions/ListAccountMeetingsParameters.ts)
- `result` is of type
  [AdminAccessMeetings](./definitions/AdminAccessMeetings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meetings-History-listAccountMeetings)
in API Explorer.

## createBridge

Create Bridge

| Name             | Value                                                             |
| ---------------- | ----------------------------------------------------------------- |
| HTTP Method      | `POST`                                                            |
| Endpoint         | `/rcvideo/v2/account/{accountId}/extension/{extensionId}/bridges` |
| Rate Limit Group | `Heavy`                                                           |
| App Permission   | `Video`                                                           |
| User Permission  | `N/A`                                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v2().account(accountId).extension(extensionId)
  .bridges().post(createBridgeRequest);
await rc.revoke();
```

- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createBridgeRequest` is of type
  [CreateBridgeRequest](./definitions/CreateBridgeRequest.ts)
- `result` is of type [BridgeResponse](./definitions/BridgeResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Bridge-Management-createBridge)
in API Explorer.

## addDeviceToInventory

Add Phone to Inventory

| Name             | Value                                               |
| ---------------- | --------------------------------------------------- |
| HTTP Method      | `POST`                                              |
| Endpoint         | `/restapi/v2/accounts/{accountId}/device-inventory` |
| Rate Limit Group | `Heavy`                                             |
| App Permission   | `EditAccounts`                                      |
| User Permission  | `N/A`                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).deviceInventory().post(
  addDeviceToInventoryRequest,
);
await rc.revoke();
```

- `addDeviceToInventoryRequest` is of type
  [AddDeviceToInventoryRequest](./definitions/AddDeviceToInventoryRequest.ts)
- `result` is of type
  [AddDeviceToInventoryResponse](./definitions/AddDeviceToInventoryResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-addDeviceToInventory)
in API Explorer.

## deleteDeviceFromInventory

Delete Device from Inventory

| Name             | Value                                               |
| ---------------- | --------------------------------------------------- |
| HTTP Method      | `DELETE`                                            |
| Endpoint         | `/restapi/v2/accounts/{accountId}/device-inventory` |
| Rate Limit Group | `Heavy`                                             |
| App Permission   | `EditAccounts`                                      |
| User Permission  | `N/A`                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).deviceInventory()
  .delete(deleteDeviceFromInventoryRequest);
await rc.revoke();
```

- `deleteDeviceFromInventoryRequest` is of type
  [DeleteDeviceFromInventoryRequest](./definitions/DeleteDeviceFromInventoryRequest.ts)
- `result` is of type
  [DeleteDeviceFromInventoryResponse](./definitions/DeleteDeviceFromInventoryResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-deleteDeviceFromInventory)
in API Explorer.

## bulkAddDevicesV2

Add BYOD Devices

| Name             | Value                                               |
| ---------------- | --------------------------------------------------- |
| HTTP Method      | `POST`                                              |
| Endpoint         | `/restapi/v2/accounts/{accountId}/devices/bulk-add` |
| Rate Limit Group | `Heavy`                                             |
| App Permission   | `EditAccounts`                                      |
| User Permission  | `AddRemoveDevices`                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).devices().bulkAdd()
  .post(bulkAddDevicesRequest);
await rc.revoke();
```

- `bulkAddDevicesRequest` is of type
  [BulkAddDevicesRequest](./definitions/BulkAddDevicesRequest.ts)
- `result` is of type
  [BulkAddDevicesResponse](./definitions/BulkAddDevicesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-bulkAddDevicesV2)
in API Explorer.

## getAccountRegionalSettings

Get Account Regional Settings

| Name             | Value                                                |
| ---------------- | ---------------------------------------------------- |
| HTTP Method      | `GET`                                                |
| Endpoint         | `/restapi/v2/accounts/{accountId}/regional-settings` |
| Rate Limit Group | `Light`                                              |
| App Permission   | `ReadAccounts`                                       |
| User Permission  | `N/A`                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).regionalSettings()
  .get();
await rc.revoke();
```

- `result` is of type [RegionalSettings](./definitions/RegionalSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-getAccountRegionalSettings)
in API Explorer.

## patchAccountRegionalSettings

Update Account Regional Settings

| Name             | Value                                                |
| ---------------- | ---------------------------------------------------- |
| HTTP Method      | `PATCH`                                              |
| Endpoint         | `/restapi/v2/accounts/{accountId}/regional-settings` |
| Rate Limit Group | `Medium`                                             |
| App Permission   | `EditAccounts`                                       |
| User Permission  | `N/A`                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).regionalSettings()
  .patch(accountRegionalSettingRequest);
await rc.revoke();
```

- `accountRegionalSettingRequest` is of type
  [AccountRegionalSettingRequest](./definitions/AccountRegionalSettingRequest.ts)
- `result` is of type [RegionalSettings](./definitions/RegionalSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-patchAccountRegionalSettings)
in API Explorer.

## readAccountInfo

Get Account Info

| Name             | Value                                       |
| ---------------- | ------------------------------------------- |
| HTTP Method      | `GET`                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}` |
| Rate Limit Group | `Light`                                     |
| App Permission   | `ReadAccounts`                              |
| User Permission  | `ReadCompanyInfo`                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [GetAccountInfoResponse](./definitions/GetAccountInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountInfo)
in API Explorer.

## caiJobStatusGet

Get Async Task Status

| Name             | Value                        |
| ---------------- | ---------------------------- |
| HTTP Method      | `GET`                        |
| Endpoint         | `/ai/status/v1/jobs/{jobId}` |
| Rate Limit Group | `Heavy`                      |
| App Permission   | `AI`                         |
| User Permission  | `N/A`                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().status().v1().jobs(jobId).get();
await rc.revoke();
```

- `result` is of type [JobStatusResponse](./definitions/JobStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Status-caiJobStatusGet)
in API Explorer.

## getBridge

Get Bridge

| Name             | Value                            |
| ---------------- | -------------------------------- |
| HTTP Method      | `GET`                            |
| Endpoint         | `/rcvideo/v2/bridges/{bridgeId}` |
| Rate Limit Group | `Medium`                         |
| App Permission   | `Video`                          |
| User Permission  | `N/A`                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v2().bridges(bridgeId).get(getBridgeParameters);
await rc.revoke();
```

- `getBridgeParameters` is of type
  [GetBridgeParameters](./definitions/GetBridgeParameters.ts)
- `result` is of type [BridgeResponse](./definitions/BridgeResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Bridge-Management-getBridge)
in API Explorer.

## deleteBridge

Delete Bridge

| Name             | Value                            |
| ---------------- | -------------------------------- |
| HTTP Method      | `DELETE`                         |
| Endpoint         | `/rcvideo/v2/bridges/{bridgeId}` |
| Rate Limit Group | `Medium`                         |
| App Permission   | `Video`                          |
| User Permission  | `N/A`                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v2().bridges(bridgeId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Bridge-Management-deleteBridge)
in API Explorer.

## updateBridge

Update Bridge

| Name             | Value                            |
| ---------------- | -------------------------------- |
| HTTP Method      | `PATCH`                          |
| Endpoint         | `/rcvideo/v2/bridges/{bridgeId}` |
| Rate Limit Group | `Medium`                         |
| App Permission   | `Video`                          |
| User Permission  | `N/A`                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v2().bridges(bridgeId).patch(
  updateBridgeRequest,
);
await rc.revoke();
```

- `updateBridgeRequest` is of type
  [UpdateBridgeRequest](./definitions/UpdateBridgeRequest.ts)
- `result` is of type [BridgeResponse](./definitions/BridgeResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Bridge-Management-updateBridge)
in API Explorer.

## scimListResourceTypes2

List Resource Types

| Name             | Value                           |
| ---------------- | ------------------------------- |
| HTTP Method      | `GET`                           |
| Endpoint         | `/scim/{version}/ResourceTypes` |
| Rate Limit Group | `Light`                         |
| App Permission   | `ReadAccounts`                  |
| User Permission  | `N/A`                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.scim(version).resourceTypes().list();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type
  [ScimResourceTypeSearchResponse](./definitions/ScimResourceTypeSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimListResourceTypes2)
in API Explorer.

## scimGetResourceType2

Get Resource Type

| Name             | Value                                  |
| ---------------- | -------------------------------------- |
| HTTP Method      | `GET`                                  |
| Endpoint         | `/scim/{version}/ResourceTypes/{type}` |
| Rate Limit Group | `Light`                                |
| App Permission   | `ReadAccounts`                         |
| User Permission  | `N/A`                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.scim(version).resourceTypes(type).get();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type
  [ScimResourceTypeResponse](./definitions/ScimResourceTypeResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimGetResourceType2)
in API Explorer.

## getToken

OAuth Token

| Name             | Value                  |
| ---------------- | ---------------------- |
| HTTP Method      | `POST`                 |
| Endpoint         | `/restapi/oauth/token` |
| Rate Limit Group | `Auth`                 |
| App Permission   | `N/A`                  |
| User Permission  | `N/A`                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().oauth().token().post(getTokenRequest);
await rc.revoke();
```

- `getTokenRequest` is of type
  [GetTokenRequest](./definitions/GetTokenRequest.ts)
- `result` is of type [TokenInfo](./definitions/TokenInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-and-OIDC-getToken)
in API Explorer.

## caiEnrollmentsList

List Enrolled Speakers

| Name             | Value                      |
| ---------------- | -------------------------- |
| HTTP Method      | `GET`                      |
| Endpoint         | `/ai/audio/v1/enrollments` |
| Rate Limit Group | `Heavy`                    |
| App Permission   | `AI`                       |
| User Permission  | `N/A`                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().audio().v1().enrollments().list(
  caiEnrollmentsListParameters,
);
await rc.revoke();
```

- `caiEnrollmentsListParameters` is of type
  [CaiEnrollmentsListParameters](./definitions/CaiEnrollmentsListParameters.ts)
- `result` is of type
  [ListEnrolledSpeakers](./definitions/ListEnrolledSpeakers.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Audio-caiEnrollmentsList)
in API Explorer.

## caiEnrollmentsCreate

Create Speaker Enrollment

| Name             | Value                      |
| ---------------- | -------------------------- |
| HTTP Method      | `POST`                     |
| Endpoint         | `/ai/audio/v1/enrollments` |
| Rate Limit Group | `Heavy`                    |
| App Permission   | `AI`                       |
| User Permission  | `N/A`                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().audio().v1().enrollments().post(enrollmentInput);
await rc.revoke();
```

- `enrollmentInput` is of type
  [EnrollmentInput](./definitions/EnrollmentInput.ts)
- `result` is of type [EnrollmentStatus](./definitions/EnrollmentStatus.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Audio-caiEnrollmentsCreate)
in API Explorer.

## caiEnrollmentsGet

Get Speaker Enrollment Status

| Name             | Value                                  |
| ---------------- | -------------------------------------- |
| HTTP Method      | `GET`                                  |
| Endpoint         | `/ai/audio/v1/enrollments/{speakerId}` |
| Rate Limit Group | `Heavy`                                |
| App Permission   | `AI`                                   |
| User Permission  | `N/A`                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().audio().v1().enrollments(speakerId).get();
await rc.revoke();
```

- `result` is of type [EnrollmentStatus](./definitions/EnrollmentStatus.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Audio-caiEnrollmentsGet)
in API Explorer.

## caiEnrollmentsDelete

Delete Speaker Enrollment

| Name             | Value                                  |
| ---------------- | -------------------------------------- |
| HTTP Method      | `DELETE`                               |
| Endpoint         | `/ai/audio/v1/enrollments/{speakerId}` |
| Rate Limit Group | `Heavy`                                |
| App Permission   | `AI`                                   |
| User Permission  | `N/A`                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().audio().v1().enrollments(speakerId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Audio-caiEnrollmentsDelete)
in API Explorer.

## caiEnrollmentsUpdate

Update Speaker Enrollment

| Name             | Value                                  |
| ---------------- | -------------------------------------- |
| HTTP Method      | `PATCH`                                |
| Endpoint         | `/ai/audio/v1/enrollments/{speakerId}` |
| Rate Limit Group | `Heavy`                                |
| App Permission   | `AI`                                   |
| User Permission  | `N/A`                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().audio().v1().enrollments(speakerId).patch(
  enrollmentPatchInput,
);
await rc.revoke();
```

- `enrollmentPatchInput` is of type
  [EnrollmentPatchInput](./definitions/EnrollmentPatchInput.ts)
- `result` is of type [EnrollmentStatus](./definitions/EnrollmentStatus.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Audio-caiEnrollmentsUpdate)
in API Explorer.

## revokeToken

OAuth Revoke

| Name             | Value                   |
| ---------------- | ----------------------- |
| HTTP Method      | `POST`                  |
| Endpoint         | `/restapi/oauth/revoke` |
| Rate Limit Group | `Auth`                  |
| App Permission   | `N/A`                   |
| User Permission  | `N/A`                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().oauth().revoke().post(
  revokeTokenRequest,
  revokeTokenParameters,
);
await rc.revoke();
```

- `revokeTokenRequest` is of type
  [RevokeTokenRequest](./definitions/RevokeTokenRequest.ts)
- `revokeTokenParameters` is of type
  [RevokeTokenParameters](./definitions/RevokeTokenParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-and-OIDC-revokeToken)
in API Explorer.

## authUserInfo

OIDC User Info

| Name             | Value                     |
| ---------------- | ------------------------- |
| HTTP Method      | `GET`                     |
| Endpoint         | `/restapi/oauth/userinfo` |
| Rate Limit Group | `Auth`                    |
| App Permission   | `N/A`                     |
| User Permission  | `N/A`                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().oauth().userinfo().get();
await rc.revoke();
```

- `result` is of type [UserInfoResource](./definitions/UserInfoResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-and-OIDC-authUserInfo)
in API Explorer.

## authWsToken

WebSocket Token

| Name             | Value                    |
| ---------------- | ------------------------ |
| HTTP Method      | `POST`                   |
| Endpoint         | `/restapi/oauth/wstoken` |
| Rate Limit Group | `Auth`                   |
| App Permission   | `WebSocket`              |
| User Permission  | `N/A`                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().oauth().wstoken().post();
await rc.revoke();
```

- `result` is of type [WsTokenResponse](./definitions/WsTokenResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-and-OIDC-authWsToken)
in API Explorer.

## getAccountInfoV2

Get Account Info

| Name             | Value                              |
| ---------------- | ---------------------------------- |
| HTTP Method      | `GET`                              |
| Endpoint         | `/restapi/v2/accounts/{accountId}` |
| Rate Limit Group | `Light`                            |
| App Permission   | `ReadAccounts`                     |
| User Permission  | `ReadCompanyInfo`                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).get();
await rc.revoke();
```

- `result` is of type [AccountInfo](./definitions/AccountInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-getAccountInfoV2)
in API Explorer.

## readDevice

Get Device

| Name             | Value                                                         |
| ---------------- | ------------------------------------------------------------- |
| HTTP Method      | `GET`                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/device/{deviceId}` |
| Rate Limit Group | `Light`                                                       |
| App Permission   | `ReadAccounts`                                                |
| User Permission  | `ReadCompanyDevices`                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).device(deviceId)
  .get(readDeviceParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readDeviceParameters` is of type
  [ReadDeviceParameters](./definitions/ReadDeviceParameters.ts)
- `result` is of type [DeviceResource](./definitions/DeviceResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-readDevice)
in API Explorer.

## updateDevice

Update Device

| Name             | Value                                                         |
| ---------------- | ------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/device/{deviceId}` |
| Rate Limit Group | `Medium`                                                      |
| App Permission   | `EditAccounts`                                                |
| User Permission  | `EditCompanyDevices`                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).device(deviceId)
  .put(accountDeviceUpdate, updateDeviceParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `accountDeviceUpdate` is of type
  [AccountDeviceUpdate](./definitions/AccountDeviceUpdate.ts)
- `updateDeviceParameters` is of type
  [UpdateDeviceParameters](./definitions/UpdateDeviceParameters.ts)
- `result` is of type [DeviceResource](./definitions/DeviceResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-updateDevice)
in API Explorer.

## listSites

List Sites

| Name             | Value                                             |
| ---------------- | ------------------------------------------------- |
| HTTP Method      | `GET`                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/sites` |
| Rate Limit Group | `Light`                                           |
| App Permission   | `ReadAccounts`                                    |
| User Permission  | `ReadExtensions`                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).sites().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [SitesList](./definitions/SitesList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Multi-Site-listSites)
in API Explorer.

## createSite

Create Site

| Name             | Value                                             |
| ---------------- | ------------------------------------------------- |
| HTTP Method      | `POST`                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/sites` |
| Rate Limit Group | `Medium`                                          |
| App Permission   | `EditAccounts`                                    |
| User Permission  | `N/A`                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).sites().post(
  createSiteRequest,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createSiteRequest` is of type
  [CreateSiteRequest](./definitions/CreateSiteRequest.ts)
- `result` is of type [SiteInfo](./definitions/SiteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Multi-Site-createSite)
in API Explorer.

## readSite

Get Site

| Name             | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| HTTP Method      | `GET`                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/sites/{siteId}` |
| Rate Limit Group | `Light`                                                    |
| App Permission   | `ReadAccounts`                                             |
| User Permission  | `ReadExtensions`                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).sites(siteId)
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [SiteInfo](./definitions/SiteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Multi-Site-readSite)
in API Explorer.

## updateSite

Update Site

| Name             | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| HTTP Method      | `PUT`                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/sites/{siteId}` |
| Rate Limit Group | `Light`                                                    |
| App Permission   | `EditExtensions`                                           |
| User Permission  | `Sites`                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).sites(siteId).put(
  siteUpdateRequest,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `siteUpdateRequest` is of type
  [SiteUpdateRequest](./definitions/SiteUpdateRequest.ts)
- `result` is of type [SiteInfo](./definitions/SiteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Multi-Site-updateSite)
in API Explorer.

## deleteSite

Delete Site

| Name             | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/sites/{siteId}` |
| Rate Limit Group | `Light`                                                    |
| App Permission   | `EditAccounts`                                             |
| User Permission  | `Sites`                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).sites(siteId)
  .delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Multi-Site-deleteSite)
in API Explorer.

## listSubscriptions

List Subscriptions

| Name             | Value                                |
| ---------------- | ------------------------------------ |
| HTTP Method      | `GET`                                |
| Endpoint         | `/restapi/{apiVersion}/subscription` |
| Rate Limit Group | `Light`                              |
| App Permission   | `N/A`                                |
| User Permission  | `N/A`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).subscription().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type
  [SubscriptionListResource](./definitions/SubscriptionListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-listSubscriptions)
in API Explorer.

## createSubscription

Create Subscription

| Name             | Value                                |
| ---------------- | ------------------------------------ |
| HTTP Method      | `POST`                               |
| Endpoint         | `/restapi/{apiVersion}/subscription` |
| Rate Limit Group | `Medium`                             |
| App Permission   | `N/A`                                |
| User Permission  | `N/A`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).subscription().post(
  createSubscriptionRequest,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `createSubscriptionRequest` is of type
  [CreateSubscriptionRequest](./definitions/CreateSubscriptionRequest.ts)
- `result` is of type [SubscriptionInfo](./definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-createSubscription)
in API Explorer.

## readSubscription

Get Subscription

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `GET`                                                 |
| Endpoint         | `/restapi/{apiVersion}/subscription/{subscriptionId}` |
| Rate Limit Group | `Light`                                               |
| App Permission   | `N/A`                                                 |
| User Permission  | `N/A`                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).subscription(subscriptionId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [SubscriptionInfo](./definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-readSubscription)
in API Explorer.

## updateSubscription

Update Subscription

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `PUT`                                                 |
| Endpoint         | `/restapi/{apiVersion}/subscription/{subscriptionId}` |
| Rate Limit Group | `Medium`                                              |
| App Permission   | `N/A`                                                 |
| User Permission  | `N/A`                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).subscription(subscriptionId).put(
  updateSubscriptionRequest,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `updateSubscriptionRequest` is of type
  [UpdateSubscriptionRequest](./definitions/UpdateSubscriptionRequest.ts)
- `result` is of type [SubscriptionInfo](./definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-updateSubscription)
in API Explorer.

## deleteSubscription

Cancel Subscription

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `DELETE`                                              |
| Endpoint         | `/restapi/{apiVersion}/subscription/{subscriptionId}` |
| Rate Limit Group | `Medium`                                              |
| App Permission   | `N/A`                                                 |
| User Permission  | `N/A`                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).subscription(subscriptionId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-deleteSubscription)
in API Explorer.

## scimSearchViaPost2

Search/List Users

| Name             | Value                             |
| ---------------- | --------------------------------- |
| HTTP Method      | `POST`                            |
| Endpoint         | `/scim/{version}/Users/dotSearch` |
| Rate Limit Group | `Light`                           |
| App Permission   | `ReadAccounts`                    |
| User Permission  | `N/A`                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.scim(version).users().dotSearch().post(scimSearchRequest);
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `scimSearchRequest` is of type
  [ScimSearchRequest](./definitions/ScimSearchRequest.ts)
- `result` is of type
  [ScimUserSearchResponse](./definitions/ScimUserSearchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimSearchViaPost2)
in API Explorer.

## authorize

OAuth Authorization

| Name             | Value                      |
| ---------------- | -------------------------- |
| HTTP Method      | `GET`                      |
| Endpoint         | `/restapi/oauth/authorize` |
| Rate Limit Group | `Auth`                     |
| App Permission   | `N/A`                      |
| User Permission  | `N/A`                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().oauth().authorize().get(authorizeParameters);
await rc.revoke();
```

- `authorizeParameters` is of type
  [AuthorizeParameters](./definitions/AuthorizeParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-and-OIDC-authorize)
in API Explorer.

## authorize2

OAuth Authorization (POST)

| Name             | Value                      |
| ---------------- | -------------------------- |
| HTTP Method      | `POST`                     |
| Endpoint         | `/restapi/oauth/authorize` |
| Rate Limit Group | `Auth`                     |
| App Permission   | `N/A`                      |
| User Permission  | `N/A`                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().oauth().authorize().post(authorizeRequest);
await rc.revoke();
```

- `authorizeRequest` is of type
  [AuthorizeRequest](./definitions/AuthorizeRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-and-OIDC-authorize2)
in API Explorer.

## readCompanyCallLog

List Company Call Records

| Name             | Value                                                |
| ---------------- | ---------------------------------------------------- |
| HTTP Method      | `GET`                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-log` |
| Rate Limit Group | `Heavy`                                              |
| App Permission   | `ReadCallLog`                                        |
| User Permission  | `FullCompanyCallLog`                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callLog().list(
  readCompanyCallLogParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readCompanyCallLogParameters` is of type
  [ReadCompanyCallLogParameters](./definitions/ReadCompanyCallLogParameters.ts)
- `result` is of type [CallLogResponse](./definitions/CallLogResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallLog)
in API Explorer.

## readCompanyCallRecord

Get Company Call Record(s)

| Name             | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-log/{callRecordId}` |
| Rate Limit Group | `Heavy`                                                             |
| App Permission   | `ReadCallLog`                                                       |
| User Permission  | `FullCompanyCallLog`                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callLog(
  callRecordId,
).get(readCompanyCallRecordParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readCompanyCallRecordParameters` is of type
  [ReadCompanyCallRecordParameters](./definitions/ReadCompanyCallRecordParameters.ts)
- `result` is of type [CallLogRecord](./definitions/CallLogRecord.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallRecord)
in API Explorer.

## listExtensions

List Extensions

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `GET`                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension` |
| Rate Limit Group | `Medium`                                              |
| App Permission   | `ReadAccounts`                                        |
| User Permission  | `ReadExtensions`                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension().list(
  listExtensionsParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listExtensionsParameters` is of type
  [ListExtensionsParameters](./definitions/ListExtensionsParameters.ts)
- `result` is of type
  [GetExtensionListResponse](./definitions/GetExtensionListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-listExtensions)
in API Explorer.

## createExtension

Create Extension

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `POST`                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension` |
| Rate Limit Group | `Medium`                                              |
| App Permission   | `EditAccounts`                                        |
| User Permission  | `AddRemoveUsers`                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension().post(
  extensionCreationRequest,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `extensionCreationRequest` is of type
  [ExtensionCreationRequest](./definitions/ExtensionCreationRequest.ts)
- `result` is of type
  [ExtensionCreationResponse](./definitions/ExtensionCreationResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-createExtension)
in API Explorer.

## readExtension

Get Extension

| Name             | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}` |
| Rate Limit Group | `Light`                                                             |
| App Permission   | `ReadAccounts`                                                      |
| User Permission  | `ReadExtensions`                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [GetExtensionInfoResponse](./definitions/GetExtensionInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readExtension)
in API Explorer.

## updateExtension

Update Extension

| Name             | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}` |
| Rate Limit Group | `Medium`                                                            |
| App Permission   | `EditExtensions`                                                    |
| User Permission  | `EditUserInfo OR EditUserCredentials`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).put(extensionUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `extensionUpdateRequest` is of type
  [ExtensionUpdateRequest](./definitions/ExtensionUpdateRequest.ts)
- `result` is of type
  [GetExtensionInfoResponse](./definitions/GetExtensionInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateExtension)
in API Explorer.

## createCompanyGreeting

Create Company Greeting

| Name             | Value                                                |
| ---------------- | ---------------------------------------------------- |
| HTTP Method      | `POST`                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/greeting` |
| Rate Limit Group | `Medium`                                             |
| App Permission   | `EditAccounts`                                       |
| User Permission  | `ReadUserInfo`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).greeting().post(
  createCompanyGreetingRequest,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createCompanyGreetingRequest` is of type
  [CreateCompanyGreetingRequest](./definitions/CreateCompanyGreetingRequest.ts)
- `result` is of type
  [CustomCompanyGreetingInfo](./definitions/CustomCompanyGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-createCompanyGreeting)
in API Explorer.

## readIVRMenuList

List IVR Menus

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `GET`                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/ivr-menus` |
| Rate Limit Group | `Medium`                                              |
| App Permission   | `ReadAccounts`                                        |
| User Permission  | `N/A`                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).ivrMenus().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [IVRMenuList](./definitions/IVRMenuList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-readIVRMenuList)
in API Explorer.

## createIVRMenu

Create IVR Menu

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `POST`                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/ivr-menus` |
| Rate Limit Group | `Heavy`                                               |
| App Permission   | `EditAccounts`                                        |
| User Permission  | `AutoReceptionist`                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).ivrMenus().post(
  iVRMenuInfo,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `iVRMenuInfo` is of type [IVRMenuInfo](./definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-createIVRMenu)
in API Explorer.

## readIVRMenu

Get IVR Menu

| Name             | Value                                                             |
| ---------------- | ----------------------------------------------------------------- |
| HTTP Method      | `GET`                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/ivr-menus/{ivrMenuId}` |
| Rate Limit Group | `Medium`                                                          |
| App Permission   | `ReadAccounts`                                                    |
| User Permission  | `AutoReceptionist`                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).ivrMenus(ivrMenuId)
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [IVRMenuInfo](./definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-readIVRMenu) in
API Explorer.

## updateIVRMenu

Update IVR Menu

| Name             | Value                                                             |
| ---------------- | ----------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/ivr-menus/{ivrMenuId}` |
| Rate Limit Group | `Medium`                                                          |
| App Permission   | `ReadAccounts`                                                    |
| User Permission  | `AutoReceptionist`                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).ivrMenus(ivrMenuId)
  .put(iVRMenuInfo);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `iVRMenuInfo` is of type [IVRMenuInfo](./definitions/IVRMenuInfo.ts)
- `result` is of type [IVRMenuInfo](./definitions/IVRMenuInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-updateIVRMenu)
in API Explorer.

## readAccountPresence

Get User Presence Status List

| Name             | Value                                                |
| ---------------- | ---------------------------------------------------- |
| HTTP Method      | `GET`                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/presence` |
| Rate Limit Group | `Heavy`                                              |
| App Permission   | `ReadPresence`                                       |
| User Permission  | `ReadPresenceStatus`                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).presence().get(
  readAccountPresenceParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readAccountPresenceParameters` is of type
  [ReadAccountPresenceParameters](./definitions/ReadAccountPresenceParameters.ts)
- `result` is of type
  [AccountPresenceInfo](./definitions/AccountPresenceInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readAccountPresence)
in API Explorer.

## readCallRecording

Get Call Recording

| Name             | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/recording/{recordingId}` |
| Rate Limit Group | `Heavy`                                                             |
| App Permission   | `ReadCallRecording`                                                 |
| User Permission  | `ReadCallRecording`                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).recording(
  recordingId,
).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [GetCallRecordingResponse](./definitions/GetCallRecordingResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recordings-readCallRecording)
in API Explorer.

## readSiteIvrSettings

Get Site IVR Settings

| Name             | Value                                                          |
| ---------------- | -------------------------------------------------------------- |
| HTTP Method      | `GET`                                                          |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/sites/{siteId}/ivr` |
| Rate Limit Group | `Medium`                                                       |
| App Permission   | `ReadAccounts`                                                 |
| User Permission  | `ReadExtensions`                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).sites(siteId).ivr()
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [SiteIVRSettings](./definitions/SiteIVRSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Multi-Site-readSiteIvrSettings)
in API Explorer.

## updateSiteIvrSettings

Update Site IVR Settings

| Name             | Value                                                          |
| ---------------- | -------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                          |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/sites/{siteId}/ivr` |
| Rate Limit Group | `Medium`                                                       |
| App Permission   | `EditAccounts`                                                 |
| User Permission  | `Sites`                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).sites(siteId).ivr()
  .put(siteIVRSettingsUpdate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `siteIVRSettingsUpdate` is of type
  [SiteIVRSettingsUpdate](./definitions/SiteIVRSettingsUpdate.ts)
- `result` is of type [SiteIVRSettings](./definitions/SiteIVRSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Multi-Site-updateSiteIvrSettings)
in API Explorer.

## listUserTemplates

List User Templates

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `GET`                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/templates` |
| Rate Limit Group | `Medium`                                              |
| App Permission   | `ReadAccounts`                                        |
| User Permission  | `ReadCompanyInfo`                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).templates().list(
  listUserTemplatesParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listUserTemplatesParameters` is of type
  [ListUserTemplatesParameters](./definitions/ListUserTemplatesParameters.ts)
- `result` is of type [UserTemplates](./definitions/UserTemplates.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-listUserTemplates)
in API Explorer.

## readUserTemplate

Get User Template

| Name             | Value                                                              |
| ---------------- | ------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/templates/{templateId}` |
| Rate Limit Group | `Light`                                                            |
| App Permission   | `ReadAccounts`                                                     |
| User Permission  | `ReadCompanyInfo`                                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).templates(
  templateId,
).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [TemplateInfo](./definitions/TemplateInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-readUserTemplate)
in API Explorer.

## listUserRoles

List Company User Roles

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `GET`                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/user-role` |
| Rate Limit Group | `Medium`                                              |
| App Permission   | `ReadAccounts`                                        |
| User Permission  | `ReadUserRoles`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).userRole().list(
  listUserRolesParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listUserRolesParameters` is of type
  [ListUserRolesParameters](./definitions/ListUserRolesParameters.ts)
- `result` is of type
  [RolesCollectionResource](./definitions/RolesCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-listUserRoles)
in API Explorer.

## createCustomRole

Create Custom Role

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `POST`                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/user-role` |
| Rate Limit Group | `Medium`                                              |
| App Permission   | `RoleManagement`                                      |
| User Permission  | `EditUserRoles`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).userRole().post(
  roleResource,
  createCustomRoleParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `roleResource` is of type [RoleResource](./definitions/RoleResource.ts)
- `createCustomRoleParameters` is of type
  [CreateCustomRoleParameters](./definitions/CreateCustomRoleParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-createCustomRole)
in API Explorer.

## readUserRole

Get User Role

| Name             | Value                                                          |
| ---------------- | -------------------------------------------------------------- |
| HTTP Method      | `GET`                                                          |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/user-role/{roleId}` |
| Rate Limit Group | `Light`                                                        |
| App Permission   | `ReadAccounts`                                                 |
| User Permission  | `ReadUserRoles`                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).userRole(roleId)
  .get(readUserRoleParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readUserRoleParameters` is of type
  [ReadUserRoleParameters](./definitions/ReadUserRoleParameters.ts)
- `result` is of type [RoleResource](./definitions/RoleResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-readUserRole)
in API Explorer.

## updateUserRole

Update User Role

| Name             | Value                                                          |
| ---------------- | -------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                          |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/user-role/{roleId}` |
| Rate Limit Group | `Medium`                                                       |
| App Permission   | `RoleManagement`                                               |
| User Permission  | `EditUserRoles`                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).userRole(roleId)
  .put(roleResource, updateUserRoleParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `roleResource` is of type [RoleResource](./definitions/RoleResource.ts)
- `updateUserRoleParameters` is of type
  [UpdateUserRoleParameters](./definitions/UpdateUserRoleParameters.ts)
- `result` is of type [RoleResource](./definitions/RoleResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-updateUserRole)
in API Explorer.

## deleteCustomRole

Delete Custom Role

| Name             | Value                                                          |
| ---------------- | -------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/user-role/{roleId}` |
| Rate Limit Group | `Medium`                                                       |
| App Permission   | `RoleManagement`                                               |
| User Permission  | `EditUserRoles`                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).userRole(roleId)
  .delete(deleteCustomRoleParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `deleteCustomRoleParameters` is of type
  [DeleteCustomRoleParameters](./definitions/DeleteCustomRoleParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-deleteCustomRole)
in API Explorer.

## listStates

List States

| Name             | Value                                    |
| ---------------- | ---------------------------------------- |
| HTTP Method      | `GET`                                    |
| Endpoint         | `/restapi/{apiVersion}/dictionary/state` |
| Rate Limit Group | `Light`                                  |
| App Permission   | `N/A`                                    |
| User Permission  | `N/A`                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().state().list(
  listStatesParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listStatesParameters` is of type
  [ListStatesParameters](./definitions/ListStatesParameters.ts)
- `result` is of type
  [GetStateListResponse](./definitions/GetStateListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listStates)
in API Explorer.

## readState

Get State

| Name             | Value                                              |
| ---------------- | -------------------------------------------------- |
| HTTP Method      | `GET`                                              |
| Endpoint         | `/restapi/{apiVersion}/dictionary/state/{stateId}` |
| Rate Limit Group | `Light`                                            |
| App Permission   | `N/A`                                              |
| User Permission  | `N/A`                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().state(stateId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type
  [GetStateInfoResponse](./definitions/GetStateInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readState)
in API Explorer.

## listGlipChatsNew

List Chats

| Name             | Value                      |
| ---------------- | -------------------------- |
| HTTP Method      | `GET`                      |
| Endpoint         | `/team-messaging/v1/chats` |
| Rate Limit Group | `Medium`                   |
| App Permission   | `TeamMessaging`            |
| User Permission  | `N/A`                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats().list(
  listGlipChatsNewParameters,
);
await rc.revoke();
```

- `listGlipChatsNewParameters` is of type
  [ListGlipChatsNewParameters](./definitions/ListGlipChatsNewParameters.ts)
- `result` is of type [TMChatList](./definitions/TMChatList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipChatsNew)
in API Explorer.

## readGlipChatNew

Get Chat

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `GET`                               |
| Endpoint         | `/team-messaging/v1/chats/{chatId}` |
| Rate Limit Group | `Light`                             |
| App Permission   | `TeamMessaging`                     |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).get();
await rc.revoke();
```

- `result` is of type [TMChatInfo](./definitions/TMChatInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipChatNew)
in API Explorer.

## readGlipEventsNew

List User Events

| Name             | Value                       |
| ---------------- | --------------------------- |
| HTTP Method      | `GET`                       |
| Endpoint         | `/team-messaging/v1/events` |
| Rate Limit Group | `Medium`                    |
| App Permission   | `TeamMessaging`             |
| User Permission  | `N/A`                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().events().list(
  readGlipEventsNewParameters,
);
await rc.revoke();
```

- `readGlipEventsNewParameters` is of type
  [ReadGlipEventsNewParameters](./definitions/ReadGlipEventsNewParameters.ts)
- `result` is of type [TMEventList](./definitions/TMEventList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-readGlipEventsNew)
in API Explorer.

## createEventNew

Create Event

| Name             | Value                       |
| ---------------- | --------------------------- |
| HTTP Method      | `POST`                      |
| Endpoint         | `/team-messaging/v1/events` |
| Rate Limit Group | `Medium`                    |
| App Permission   | `TeamMessaging`             |
| User Permission  | `N/A`                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().events().post(tMCreateEventRequest);
await rc.revoke();
```

- `tMCreateEventRequest` is of type
  [TMCreateEventRequest](./definitions/TMCreateEventRequest.ts)
- `result` is of type [TMEventInfo](./definitions/TMEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-createEventNew)
in API Explorer.

## readEventNew

Get Event

| Name             | Value                                 |
| ---------------- | ------------------------------------- |
| HTTP Method      | `GET`                                 |
| Endpoint         | `/team-messaging/v1/events/{eventId}` |
| Rate Limit Group | `Medium`                              |
| App Permission   | `TeamMessaging`                       |
| User Permission  | `N/A`                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().events(eventId).get();
await rc.revoke();
```

- `result` is of type [TMEventInfo](./definitions/TMEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-readEventNew)
in API Explorer.

## updateEventNew

Update Event

| Name             | Value                                 |
| ---------------- | ------------------------------------- |
| HTTP Method      | `PUT`                                 |
| Endpoint         | `/team-messaging/v1/events/{eventId}` |
| Rate Limit Group | `Medium`                              |
| App Permission   | `TeamMessaging`                       |
| User Permission  | `N/A`                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().events(eventId).put(
  tMCreateEventRequest,
);
await rc.revoke();
```

- `tMCreateEventRequest` is of type
  [TMCreateEventRequest](./definitions/TMCreateEventRequest.ts)
- `result` is of type [TMEventInfo](./definitions/TMEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-updateEventNew)
in API Explorer.

## deleteEventNew

Delete Event

| Name             | Value                                 |
| ---------------- | ------------------------------------- |
| HTTP Method      | `DELETE`                              |
| Endpoint         | `/team-messaging/v1/events/{eventId}` |
| Rate Limit Group | `Medium`                              |
| App Permission   | `TeamMessaging`                       |
| User Permission  | `N/A`                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().events(eventId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-deleteEventNew)
in API Explorer.

## createGlipFileNew

Upload File

| Name             | Value                      |
| ---------------- | -------------------------- |
| HTTP Method      | `POST`                     |
| Endpoint         | `/team-messaging/v1/files` |
| Rate Limit Group | `Heavy`                    |
| App Permission   | `TeamMessaging`            |
| User Permission  | `N/A`                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().files().post(
  createGlipFileNewRequest,
  createGlipFileNewParameters,
);
await rc.revoke();
```

- `createGlipFileNewRequest` is of type
  [CreateGlipFileNewRequest](./definitions/CreateGlipFileNewRequest.ts)
- `createGlipFileNewParameters` is of type
  [CreateGlipFileNewParameters](./definitions/CreateGlipFileNewParameters.ts)
- `result` is of type [TMAddFile](./definitions/TMAddFile.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipFileNew)
in API Explorer.

## readUserNoteNew

Get Note

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `GET`                               |
| Endpoint         | `/team-messaging/v1/notes/{noteId}` |
| Rate Limit Group | `Medium`                            |
| App Permission   | `TeamMessaging`                     |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().notes(noteId).get();
await rc.revoke();
```

- `result` is of type [TMNoteWithBodyInfo](./definitions/TMNoteWithBodyInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-readUserNoteNew)
in API Explorer.

## deleteNoteNew

Delete Note

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `DELETE`                            |
| Endpoint         | `/team-messaging/v1/notes/{noteId}` |
| Rate Limit Group | `Medium`                            |
| App Permission   | `TeamMessaging`                     |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().notes(noteId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-deleteNoteNew)
in API Explorer.

## patchNoteNew

Update Note

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `PATCH`                             |
| Endpoint         | `/team-messaging/v1/notes/{noteId}` |
| Rate Limit Group | `Medium`                            |
| App Permission   | `TeamMessaging`                     |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().notes(noteId).patch(
  tMCreateNoteRequest,
  patchNoteNewParameters,
);
await rc.revoke();
```

- `tMCreateNoteRequest` is of type
  [TMCreateNoteRequest](./definitions/TMCreateNoteRequest.ts)
- `patchNoteNewParameters` is of type
  [PatchNoteNewParameters](./definitions/PatchNoteNewParameters.ts)
- `result` is of type [TMNoteInfo](./definitions/TMNoteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-patchNoteNew)
in API Explorer.

## readTaskNew

Get Task

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `GET`                               |
| Endpoint         | `/team-messaging/v1/tasks/{taskId}` |
| Rate Limit Group | `Medium`                            |
| App Permission   | `TeamMessaging`                     |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().tasks(taskId).get();
await rc.revoke();
```

- `result` is of type [TMTaskInfo](./definitions/TMTaskInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-readTaskNew)
in API Explorer.

## deleteTaskNew

Delete Task

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `DELETE`                            |
| Endpoint         | `/team-messaging/v1/tasks/{taskId}` |
| Rate Limit Group | `Medium`                            |
| App Permission   | `TeamMessaging`                     |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().tasks(taskId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-deleteTaskNew)
in API Explorer.

## patchTaskNew

Update Task

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `PATCH`                             |
| Endpoint         | `/team-messaging/v1/tasks/{taskId}` |
| Rate Limit Group | `Medium`                            |
| App Permission   | `TeamMessaging`                     |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().tasks(taskId).patch(
  tMUpdateTaskRequest,
);
await rc.revoke();
```

- `tMUpdateTaskRequest` is of type
  [TMUpdateTaskRequest](./definitions/TMUpdateTaskRequest.ts)
- `result` is of type [TMTaskList](./definitions/TMTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-patchTaskNew)
in API Explorer.

## listGlipTeamsNew

List Teams

| Name             | Value                      |
| ---------------- | -------------------------- |
| HTTP Method      | `GET`                      |
| Endpoint         | `/team-messaging/v1/teams` |
| Rate Limit Group | `Medium`                   |
| App Permission   | `TeamMessaging`            |
| User Permission  | `N/A`                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().teams().list(
  listGlipTeamsNewParameters,
);
await rc.revoke();
```

- `listGlipTeamsNewParameters` is of type
  [ListGlipTeamsNewParameters](./definitions/ListGlipTeamsNewParameters.ts)
- `result` is of type [TMTeamList](./definitions/TMTeamList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-listGlipTeamsNew)
in API Explorer.

## createGlipTeamNew

Create Team

| Name             | Value                      |
| ---------------- | -------------------------- |
| HTTP Method      | `POST`                     |
| Endpoint         | `/team-messaging/v1/teams` |
| Rate Limit Group | `Medium`                   |
| App Permission   | `TeamMessaging`            |
| User Permission  | `N/A`                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().teams().post(tMCreateTeamRequest);
await rc.revoke();
```

- `tMCreateTeamRequest` is of type
  [TMCreateTeamRequest](./definitions/TMCreateTeamRequest.ts)
- `result` is of type [TMTeamInfo](./definitions/TMTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-createGlipTeamNew)
in API Explorer.

## readGlipTeamNew

Get Team

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `GET`                               |
| Endpoint         | `/team-messaging/v1/teams/{chatId}` |
| Rate Limit Group | `Light`                             |
| App Permission   | `TeamMessaging`                     |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().teams(chatId).get();
await rc.revoke();
```

- `result` is of type [TMTeamInfo](./definitions/TMTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-readGlipTeamNew)
in API Explorer.

## deleteGlipTeamNew

Delete Team

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `DELETE`                            |
| Endpoint         | `/team-messaging/v1/teams/{chatId}` |
| Rate Limit Group | `Medium`                            |
| App Permission   | `TeamMessaging`                     |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().teams(chatId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-deleteGlipTeamNew)
in API Explorer.

## patchGlipTeamNew

Update Team

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `PATCH`                             |
| Endpoint         | `/team-messaging/v1/teams/{chatId}` |
| Rate Limit Group | `Medium`                            |
| App Permission   | `TeamMessaging`                     |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().teams(chatId).patch(
  tMUpdateTeamRequest,
);
await rc.revoke();
```

- `tMUpdateTeamRequest` is of type
  [TMUpdateTeamRequest](./definitions/TMUpdateTeamRequest.ts)
- `result` is of type [TMTeamInfo](./definitions/TMTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-patchGlipTeamNew)
in API Explorer.

## readGlipPersonNew

Get Person

| Name             | Value                                   |
| ---------------- | --------------------------------------- |
| HTTP Method      | `GET`                                   |
| Endpoint         | `/team-messaging/v1/persons/{personId}` |
| Rate Limit Group | `Light`                                 |
| App Permission   | `TeamMessaging`                         |
| User Permission  | `N/A`                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().persons(personId).get();
await rc.revoke();
```

- `result` is of type [TMPersonInfo](./definitions/TMPersonInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Profile-readGlipPersonNew)
in API Explorer.

## caiPunctuate

Smart Punctuation

| Name             | Value                         |
| ---------------- | ----------------------------- |
| HTTP Method      | `POST`                        |
| Endpoint         | `/ai/text/v1/async/punctuate` |
| Rate Limit Group | `Heavy`                       |
| App Permission   | `AI`                          |
| User Permission  | `N/A`                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().text().v1().async().punctuate().post(
  punctuateInput,
  caiPunctuateParameters,
);
await rc.revoke();
```

- `punctuateInput` is of type [PunctuateInput](./definitions/PunctuateInput.ts)
- `caiPunctuateParameters` is of type
  [CaiPunctuateParameters](./definitions/CaiPunctuateParameters.ts)
- `result` is of type
  [CaiAsyncApiResponse](./definitions/CaiAsyncApiResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Text-caiPunctuate)
in API Explorer.

## caiSummarize

Conversational Summarization

| Name             | Value                         |
| ---------------- | ----------------------------- |
| HTTP Method      | `POST`                        |
| Endpoint         | `/ai/text/v1/async/summarize` |
| Rate Limit Group | `Heavy`                       |
| App Permission   | `AI`                          |
| User Permission  | `N/A`                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().text().v1().async().summarize().post(
  summaryInput,
  caiSummarizeParameters,
);
await rc.revoke();
```

- `summaryInput` is of type [SummaryInput](./definitions/SummaryInput.ts)
- `caiSummarizeParameters` is of type
  [CaiSummarizeParameters](./definitions/CaiSummarizeParameters.ts)
- `result` is of type
  [CaiAsyncApiResponse](./definitions/CaiAsyncApiResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Text-caiSummarize)
in API Explorer.

## listVideoMeetings

List Video Meetings

| Name             | Value                          |
| ---------------- | ------------------------------ |
| HTTP Method      | `GET`                          |
| Endpoint         | `/rcvideo/v1/history/meetings` |
| Rate Limit Group | `Light`                        |
| App Permission   | `Video`                        |
| User Permission  | `N/A`                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v1().history().meetings().list(
  listVideoMeetingsParameters,
);
await rc.revoke();
```

- `listVideoMeetingsParameters` is of type
  [ListVideoMeetingsParameters](./definitions/ListVideoMeetingsParameters.ts)
- `result` is of type [MeetingPage](./definitions/MeetingPage.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meetings-History-listVideoMeetings)
in API Explorer.

## getVideoMeeting

Get Video Meeting

| Name             | Value                                      |
| ---------------- | ------------------------------------------ |
| HTTP Method      | `GET`                                      |
| Endpoint         | `/rcvideo/v1/history/meetings/{meetingId}` |
| Rate Limit Group | `Light`                                    |
| App Permission   | `Video`                                    |
| User Permission  | `N/A`                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v1().history().meetings(meetingId).get();
await rc.revoke();
```

- `result` is of type [Meeting](./definitions/Meeting.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meetings-History-getVideoMeeting)
in API Explorer.

## getBridgeByPstnPin

Search Bridge by PSTN PIN

| Name             | Value                                |
| ---------------- | ------------------------------------ |
| HTTP Method      | `GET`                                |
| Endpoint         | `/rcvideo/v2/bridges/pin/pstn/{pin}` |
| Rate Limit Group | `Medium`                             |
| App Permission   | `Video`                              |
| User Permission  | `N/A`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v2().bridges().pin().pstn(pin).get(
  getBridgeByPstnPinParameters,
);
await rc.revoke();
```

- `getBridgeByPstnPinParameters` is of type
  [GetBridgeByPstnPinParameters](./definitions/GetBridgeByPstnPinParameters.ts)
- `result` is of type [BridgeResponse](./definitions/BridgeResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Bridge-Management-getBridgeByPstnPin)
in API Explorer.

## getBridgeByWebPin

Search Bridge by Web PIN

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `GET`                               |
| Endpoint         | `/rcvideo/v2/bridges/pin/web/{pin}` |
| Rate Limit Group | `Medium`                            |
| App Permission   | `Video`                             |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v2().bridges().pin().web(pin).get(
  getBridgeByWebPinParameters,
);
await rc.revoke();
```

- `getBridgeByWebPinParameters` is of type
  [GetBridgeByWebPinParameters](./definitions/GetBridgeByWebPinParameters.ts)
- `result` is of type [BridgeResponse](./definitions/BridgeResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Bridge-Management-getBridgeByWebPin)
in API Explorer.

## removeLineJWSPublic

Remove Phone Line

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `DELETE`                                              |
| Endpoint         | `/restapi/v2/accounts/{accountId}/devices/{deviceId}` |
| Rate Limit Group | `Medium`                                              |
| App Permission   | `EditAccounts`                                        |
| User Permission  | `EditAccountDevices`                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).devices(deviceId)
  .delete(removeLineRequest);
await rc.revoke();
```

- `removeLineRequest` is of type
  [RemoveLineRequest](./definitions/RemoveLineRequest.ts)
- `result` is of type [RemoveLineResponse](./definitions/RemoveLineResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-removeLineJWSPublic)
in API Explorer.

## listCompanyActiveCalls

List Company Active Calls

| Name             | Value                                                    |
| ---------------- | -------------------------------------------------------- |
| HTTP Method      | `GET`                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/active-calls` |
| Rate Limit Group | `Heavy`                                                  |
| App Permission   | `ReadCallLog`                                            |
| User Permission  | `ReadCallLog`                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).activeCalls().get(
  listCompanyActiveCallsParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCompanyActiveCallsParameters` is of type
  [ListCompanyActiveCallsParameters](./definitions/ListCompanyActiveCallsParameters.ts)
- `result` is of type [CallLogResponse](./definitions/CallLogResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-listCompanyActiveCalls)
in API Explorer.

## listCallQueues

List Call Queues

| Name             | Value                                                   |
| ---------------- | ------------------------------------------------------- |
| HTTP Method      | `GET`                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-queues` |
| Rate Limit Group | `Medium`                                                |
| App Permission   | `ReadAccounts`                                          |
| User Permission  | `ReadExtensions`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callQueues().list(
  listCallQueuesParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCallQueuesParameters` is of type
  [ListCallQueuesParameters](./definitions/ListCallQueuesParameters.ts)
- `result` is of type [CallQueueList](./definitions/CallQueueList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listCallQueues)
in API Explorer.

## readCallQueueInfo

Get Call Queue

| Name             | Value                                                             |
| ---------------- | ----------------------------------------------------------------- |
| HTTP Method      | `GET`                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}` |
| Rate Limit Group | `Light`                                                           |
| App Permission   | `ReadAccounts`                                                    |
| User Permission  | `ReadExtensions`                                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId)
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallQueueDetails](./definitions/CallQueueDetails.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-readCallQueueInfo)
in API Explorer.

## updateCallQueueInfo

Update Call Queue

| Name             | Value                                                             |
| ---------------- | ----------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}` |
| Rate Limit Group | `Light`                                                           |
| App Permission   | `EditExtensions`                                                  |
| User Permission  | `EditUserInfo`                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId)
  .put(callQueueDetailsForUpdate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callQueueDetailsForUpdate` is of type
  [CallQueueDetailsForUpdate](./definitions/CallQueueDetailsForUpdate.ts)
- `result` is of type [CallQueueDetails](./definitions/CallQueueDetails.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-updateCallQueueInfo)
in API Explorer.

## listCustomFields

Get Custom Field List

| Name             | Value                                                     |
| ---------------- | --------------------------------------------------------- |
| HTTP Method      | `GET`                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/custom-fields` |
| Rate Limit Group | `Light`                                                   |
| App Permission   | `ReadAccounts`                                            |
| User Permission  | `ReadUserInfo`                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).customFields()
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CustomFieldList](./definitions/CustomFieldList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-listCustomFields)
in API Explorer.

## createCustomField

Create Custom Field

| Name             | Value                                                     |
| ---------------- | --------------------------------------------------------- |
| HTTP Method      | `POST`                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/custom-fields` |
| Rate Limit Group | `Medium`                                                  |
| App Permission   | `EditAccounts`                                            |
| User Permission  | `Users`                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).customFields()
  .post(customFieldCreateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `customFieldCreateRequest` is of type
  [CustomFieldCreateRequest](./definitions/CustomFieldCreateRequest.ts)
- `result` is of type [CustomFieldModel](./definitions/CustomFieldModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-createCustomField)
in API Explorer.

## updateCustomField

Update Custom Field

| Name             | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/custom-fields/{fieldId}` |
| Rate Limit Group | `Medium`                                                            |
| App Permission   | `EditAccounts`                                                      |
| User Permission  | `Users`                                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).customFields(
  fieldId,
).put(customFieldUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `customFieldUpdateRequest` is of type
  [CustomFieldUpdateRequest](./definitions/CustomFieldUpdateRequest.ts)
- `result` is of type [CustomFieldModel](./definitions/CustomFieldModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-updateCustomField)
in API Explorer.

## deleteCustomField

Delete Custom Field

| Name             | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/custom-fields/{fieldId}` |
| Rate Limit Group | `Medium`                                                            |
| App Permission   | `EditAccounts`                                                      |
| User Permission  | `Users`                                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).customFields(
  fieldId,
).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Custom-Fields-deleteCustomField)
in API Explorer.

## createFaxMessage

Create Fax Message

| Name             | Value                                                                   |
| ---------------- | ----------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                  |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/fax` |
| Rate Limit Group | `Heavy`                                                                 |
| App Permission   | `Faxes`                                                                 |
| User Permission  | `OutboundFaxes`                                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).fax().post(createFaxMessageRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createFaxMessageRequest` is of type
  [CreateFaxMessageRequest](./definitions/CreateFaxMessageRequest.ts)
- `result` is of type [FaxResponse](./definitions/FaxResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Fax-createFaxMessage)
in API Explorer.

## createMMS

Send MMS

| Name             | Value                                                                   |
| ---------------- | ----------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                  |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/mms` |
| Rate Limit Group | `Medium`                                                                |
| App Permission   | `SMS`                                                                   |
| User Permission  | `OutboundSMS`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).mms().post(createMMSMessage);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createMMSMessage` is of type
  [CreateMMSMessage](./definitions/CreateMMSMessage.ts)
- `result` is of type
  [GetSMSMessageInfoResponse](./definitions/GetSMSMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-createMMS) in
API Explorer.

## createSMSMessage

Send SMS

| Name             | Value                                                                   |
| ---------------- | ----------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                  |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/sms` |
| Rate Limit Group | `Medium`                                                                |
| App Permission   | `SMS`                                                                   |
| User Permission  | `OutboundSMS`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).sms().post(createSMSMessage);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createSMSMessage` is of type
  [CreateSMSMessage](./definitions/CreateSMSMessage.ts)
- `result` is of type
  [GetSMSMessageInfoResponse](./definitions/GetSMSMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-createSMSMessage)
in API Explorer.

## listIvrPrompts

List IVR Prompts

| Name             | Value                                                   |
| ---------------- | ------------------------------------------------------- |
| HTTP Method      | `GET`                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/ivr-prompts` |
| Rate Limit Group | `Medium`                                                |
| App Permission   | `ReadAccounts`                                          |
| User Permission  | `ReadCompanyGreetings`                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).ivrPrompts()
  .list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [IvrPrompts](./definitions/IvrPrompts.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-listIvrPrompts)
in API Explorer.

## createIVRPrompt

Create IVR Prompts

| Name             | Value                                                   |
| ---------------- | ------------------------------------------------------- |
| HTTP Method      | `POST`                                                  |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/ivr-prompts` |
| Rate Limit Group | `Heavy`                                                 |
| App Permission   | `EditAccounts`                                          |
| User Permission  | `EditCompanyGreetings`                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).ivrPrompts().post(
  createIVRPromptRequest,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createIVRPromptRequest` is of type
  [CreateIVRPromptRequest](./definitions/CreateIVRPromptRequest.ts)
- `result` is of type [PromptInfo](./definitions/PromptInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-createIVRPrompt)
in API Explorer.

## readIVRPrompt

Get IVR Prompt

| Name             | Value                                                              |
| ---------------- | ------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}` |
| Rate Limit Group | `Medium`                                                           |
| App Permission   | `ReadAccounts`                                                     |
| User Permission  | `ReadCompanyGreetings`                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(
  promptId,
).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [PromptInfo](./definitions/PromptInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-readIVRPrompt)
in API Explorer.

## updateIVRPrompt

Update IVR Prompt

| Name             | Value                                                              |
| ---------------- | ------------------------------------------------------------------ |
| HTTP Method      | `PUT`                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}` |
| Rate Limit Group | `Medium`                                                           |
| App Permission   | `EditAccounts`                                                     |
| User Permission  | `EditCompanyGreetings`                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(
  promptId,
).put(updateIVRPromptRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `updateIVRPromptRequest` is of type
  [UpdateIVRPromptRequest](./definitions/UpdateIVRPromptRequest.ts)
- `result` is of type [PromptInfo](./definitions/PromptInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#IVR-updateIVRPrompt)
in API Explorer.

## deleteIVRPrompt

Delete IVR Prompt

| Name             | Value                                                              |
| ---------------- | ------------------------------------------------------------------ |
| HTTP Method      | `DELETE`                                                           |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}` |
| Rate Limit Group | `Heavy`                                                            |
| App Permission   | `EditAccounts`                                                     |
| User Permission  | `EditCompanyGreetings`                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(
  promptId,
).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#IVR-deleteIVRPrompt)
in API Explorer.

## listAccountPhoneNumbers

List Company Phone Numbers

| Name             | Value                                                    |
| ---------------- | -------------------------------------------------------- |
| HTTP Method      | `GET`                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/phone-number` |
| Rate Limit Group | `Heavy`                                                  |
| App Permission   | `ReadAccounts`                                           |
| User Permission  | `ReadCompanyPhoneNumbers`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).phoneNumber().list(
  listAccountPhoneNumbersParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listAccountPhoneNumbersParameters` is of type
  [ListAccountPhoneNumbersParameters](./definitions/ListAccountPhoneNumbersParameters.ts)
- `result` is of type
  [AccountPhoneNumbers](./definitions/AccountPhoneNumbers.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-listAccountPhoneNumbers)
in API Explorer.

## readAccountPhoneNumber

Get Phone Number

| Name             | Value                                                                    |
| ---------------- | ------------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/phone-number/{phoneNumberId}` |
| Rate Limit Group | `Light`                                                                  |
| App Permission   | `ReadAccounts`                                                           |
| User Permission  | `ReadCompanyPhoneNumbers`                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).phoneNumber(
  phoneNumberId,
).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [CompanyPhoneNumberInfo](./definitions/CompanyPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-readAccountPhoneNumber)
in API Explorer.

## readAccountServiceInfo

Get Account Service Info

| Name             | Value                                                    |
| ---------------- | -------------------------------------------------------- |
| HTTP Method      | `GET`                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/service-info` |
| Rate Limit Group | `Light`                                                  |
| App Permission   | `ReadAccounts`                                           |
| User Permission  | `ReadCompanyInfo`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).serviceInfo()
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [AccountServiceInfo](./definitions/AccountServiceInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountServiceInfo)
in API Explorer.

## listSiteMembers

List Site Members

| Name             | Value                                                              |
| ---------------- | ------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/sites/{siteId}/members` |
| Rate Limit Group | `Medium`                                                           |
| App Permission   | `ReadAccounts`                                                     |
| User Permission  | `ReadExtensions`                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).sites(siteId)
  .members().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [SiteMembersList](./definitions/SiteMembersList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Multi-Site-listSiteMembers)
in API Explorer.

## listCountries

List Countries

| Name             | Value                                      |
| ---------------- | ------------------------------------------ |
| HTTP Method      | `GET`                                      |
| Endpoint         | `/restapi/{apiVersion}/dictionary/country` |
| Rate Limit Group | `Light`                                    |
| App Permission   | `N/A`                                      |
| User Permission  | `N/A`                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().country().list(
  listCountriesParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listCountriesParameters` is of type
  [ListCountriesParameters](./definitions/ListCountriesParameters.ts)
- `result` is of type
  [CountryListDictionaryModel](./definitions/CountryListDictionaryModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listCountries)
in API Explorer.

## readCountry

Get Country

| Name             | Value                                                  |
| ---------------- | ------------------------------------------------------ |
| HTTP Method      | `GET`                                                  |
| Endpoint         | `/restapi/{apiVersion}/dictionary/country/{countryId}` |
| Rate Limit Group | `Light`                                                |
| App Permission   | `N/A`                                                  |
| User Permission  | `N/A`                                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().country(countryId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type
  [CountryInfoDictionaryModel](./definitions/CountryInfoDictionaryModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readCountry)
in API Explorer.

## listStandardGreetings

List Standard Greetings

| Name             | Value                                       |
| ---------------- | ------------------------------------------- |
| HTTP Method      | `GET`                                       |
| Endpoint         | `/restapi/{apiVersion}/dictionary/greeting` |
| Rate Limit Group | `Medium`                                    |
| App Permission   | `N/A`                                       |
| User Permission  | `N/A`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().greeting().list(
  listStandardGreetingsParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listStandardGreetingsParameters` is of type
  [ListStandardGreetingsParameters](./definitions/ListStandardGreetingsParameters.ts)
- `result` is of type
  [DictionaryGreetingList](./definitions/DictionaryGreetingList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-listStandardGreetings)
in API Explorer.

## readStandardGreeting

Get Standard Greeting

| Name             | Value                                                    |
| ---------------- | -------------------------------------------------------- |
| HTTP Method      | `GET`                                                    |
| Endpoint         | `/restapi/{apiVersion}/dictionary/greeting/{greetingId}` |
| Rate Limit Group | `Medium`                                                 |
| App Permission   | `N/A`                                                    |
| User Permission  | `N/A`                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().greeting(greetingId)
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type
  [DictionaryGreetingInfo](./definitions/DictionaryGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-readStandardGreeting)
in API Explorer.

## listLanguages

List Languages

| Name             | Value                                       |
| ---------------- | ------------------------------------------- |
| HTTP Method      | `GET`                                       |
| Endpoint         | `/restapi/{apiVersion}/dictionary/language` |
| Rate Limit Group | `Light`                                     |
| App Permission   | `N/A`                                       |
| User Permission  | `N/A`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().language().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [LanguageList](./definitions/LanguageList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listLanguages)
in API Explorer.

## readLanguage

Get Language

| Name             | Value                                                    |
| ---------------- | -------------------------------------------------------- |
| HTTP Method      | `GET`                                                    |
| Endpoint         | `/restapi/{apiVersion}/dictionary/language/{languageId}` |
| Rate Limit Group | `Light`                                                  |
| App Permission   | `N/A`                                                    |
| User Permission  | `N/A`                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().language(languageId)
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [LanguageInfo](./definitions/LanguageInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readLanguage)
in API Explorer.

## listLocations

List Locations

| Name             | Value                                       |
| ---------------- | ------------------------------------------- |
| HTTP Method      | `GET`                                       |
| Endpoint         | `/restapi/{apiVersion}/dictionary/location` |
| Rate Limit Group | `Light`                                     |
| App Permission   | `N/A`                                       |
| User Permission  | `N/A`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().location().get(
  listLocationsParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listLocationsParameters` is of type
  [ListLocationsParameters](./definitions/ListLocationsParameters.ts)
- `result` is of type
  [GetLocationListResponse](./definitions/GetLocationListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listLocations)
in API Explorer.

## listPermissions

List Permissions

| Name             | Value                                         |
| ---------------- | --------------------------------------------- |
| HTTP Method      | `GET`                                         |
| Endpoint         | `/restapi/{apiVersion}/dictionary/permission` |
| Rate Limit Group | `Light`                                       |
| App Permission   | `N/A`                                         |
| User Permission  | `N/A`                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().permission().list(
  listPermissionsParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listPermissionsParameters` is of type
  [ListPermissionsParameters](./definitions/ListPermissionsParameters.ts)
- `result` is of type
  [PermissionCollectionResource](./definitions/PermissionCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-listPermissions)
in API Explorer.

## readPermission

Get Permission

| Name             | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| HTTP Method      | `GET`                                                        |
| Endpoint         | `/restapi/{apiVersion}/dictionary/permission/{permissionId}` |
| Rate Limit Group | `Light`                                                      |
| App Permission   | `N/A`                                                        |
| User Permission  | `N/A`                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().permission(permissionId)
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [PermissionResource](./definitions/PermissionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-readPermission)
in API Explorer.

## listTimezones

List Timezones

| Name             | Value                                       |
| ---------------- | ------------------------------------------- |
| HTTP Method      | `GET`                                       |
| Endpoint         | `/restapi/{apiVersion}/dictionary/timezone` |
| Rate Limit Group | `Light`                                     |
| App Permission   | `N/A`                                       |
| User Permission  | `N/A`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().timezone().list(
  listTimezonesParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listTimezonesParameters` is of type
  [ListTimezonesParameters](./definitions/ListTimezonesParameters.ts)
- `result` is of type
  [GetTimezoneListResponse](./definitions/GetTimezoneListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listTimezones)
in API Explorer.

## readTimezone

Get Timezone

| Name             | Value                                                    |
| ---------------- | -------------------------------------------------------- |
| HTTP Method      | `GET`                                                    |
| Endpoint         | `/restapi/{apiVersion}/dictionary/timezone/{timezoneId}` |
| Rate Limit Group | `Light`                                                  |
| App Permission   | `N/A`                                                    |
| User Permission  | `N/A`                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().timezone(timezoneId)
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [TimezoneInfoBase](./definitions/TimezoneInfoBase.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readTimezone)
in API Explorer.

## listStandardUserRole

List Standard User Roles

| Name             | Value                                        |
| ---------------- | -------------------------------------------- |
| HTTP Method      | `GET`                                        |
| Endpoint         | `/restapi/{apiVersion}/dictionary/user-role` |
| Rate Limit Group | `Light`                                      |
| App Permission   | `N/A`                                        |
| User Permission  | `N/A`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().userRole().list(
  listStandardUserRoleParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listStandardUserRoleParameters` is of type
  [ListStandardUserRoleParameters](./definitions/ListStandardUserRoleParameters.ts)
- `result` is of type
  [RolesCollectionResource](./definitions/RolesCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-listStandardUserRole)
in API Explorer.

## readStandardUserRole

Get Standard User Role

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `GET`                                                 |
| Endpoint         | `/restapi/{apiVersion}/dictionary/user-role/{roleId}` |
| Rate Limit Group | `Light`                                               |
| App Permission   | `N/A`                                                 |
| User Permission  | `N/A`                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().userRole(roleId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [RoleResource](./definitions/RoleResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-readStandardUserRole)
in API Explorer.

## parsePhoneNumber

Parse Phone Number(s)

| Name             | Value                                       |
| ---------------- | ------------------------------------------- |
| HTTP Method      | `POST`                                      |
| Endpoint         | `/restapi/{apiVersion}/number-parser/parse` |
| Rate Limit Group | `Light`                                     |
| App Permission   | `N/A`                                       |
| User Permission  | `N/A`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).numberParser().parse().post(
  parsePhoneNumberRequest,
  parsePhoneNumberParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `parsePhoneNumberRequest` is of type
  [ParsePhoneNumberRequest](./definitions/ParsePhoneNumberRequest.ts)
- `parsePhoneNumberParameters` is of type
  [ParsePhoneNumberParameters](./definitions/ParsePhoneNumberParameters.ts)
- `result` is of type
  [ParsePhoneNumberResponse](./definitions/ParsePhoneNumberResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-parsePhoneNumber)
in API Explorer.

## renewSubscription

Renew Subscription

| Name             | Value                                                       |
| ---------------- | ----------------------------------------------------------- |
| HTTP Method      | `POST`                                                      |
| Endpoint         | `/restapi/{apiVersion}/subscription/{subscriptionId}/renew` |
| Rate Limit Group | `Light`                                                     |
| App Permission   | `N/A`                                                       |
| User Permission  | `N/A`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).subscription(subscriptionId).renew()
  .post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type [SubscriptionInfo](./definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-renewSubscription)
in API Explorer.

## scimGetProviderConfig2

Get Provider Config

| Name             | Value                                   |
| ---------------- | --------------------------------------- |
| HTTP Method      | `GET`                                   |
| Endpoint         | `/scim/{version}/ServiceProviderConfig` |
| Rate Limit Group | `Light`                                 |
| App Permission   | `ReadAccounts`                          |
| User Permission  | `N/A`                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.scim(version).serviceProviderConfig().get();
await rc.revoke();
```

- Parameter `version` is optional with default value `v2`
- `result` is of type [ScimProviderConfig](./definitions/ScimProviderConfig.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-scimGetProviderConfig2)
in API Explorer.

## readGlipPostsNew

List Posts

| Name             | Value                                     |
| ---------------- | ----------------------------------------- |
| HTTP Method      | `GET`                                     |
| Endpoint         | `/team-messaging/v1/chats/{chatId}/posts` |
| Rate Limit Group | `Medium`                                  |
| App Permission   | `TeamMessaging`                           |
| User Permission  | `N/A`                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).posts().list(
  readGlipPostsNewParameters,
);
await rc.revoke();
```

- `readGlipPostsNewParameters` is of type
  [ReadGlipPostsNewParameters](./definitions/ReadGlipPostsNewParameters.ts)
- `result` is of type [TMPostsList](./definitions/TMPostsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPostsNew)
in API Explorer.

## createGlipPostNew

Create Post

| Name             | Value                                     |
| ---------------- | ----------------------------------------- |
| HTTP Method      | `POST`                                    |
| Endpoint         | `/team-messaging/v1/chats/{chatId}/posts` |
| Rate Limit Group | `Medium`                                  |
| App Permission   | `TeamMessaging`                           |
| User Permission  | `N/A`                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).posts().post(
  tMCreatePostRequest,
);
await rc.revoke();
```

- `tMCreatePostRequest` is of type
  [TMCreatePostRequest](./definitions/TMCreatePostRequest.ts)
- `result` is of type [TMPostInfo](./definitions/TMPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipPostNew)
in API Explorer.

## readGlipPostNew

Get Post

| Name             | Value                                              |
| ---------------- | -------------------------------------------------- |
| HTTP Method      | `GET`                                              |
| Endpoint         | `/team-messaging/v1/chats/{chatId}/posts/{postId}` |
| Rate Limit Group | `Light`                                            |
| App Permission   | `TeamMessaging`                                    |
| User Permission  | `N/A`                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).posts(postId).get();
await rc.revoke();
```

- `result` is of type [TMPostInfo](./definitions/TMPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPostNew)
in API Explorer.

## deleteGlipPostNew

Delete Post

| Name             | Value                                              |
| ---------------- | -------------------------------------------------- |
| HTTP Method      | `DELETE`                                           |
| Endpoint         | `/team-messaging/v1/chats/{chatId}/posts/{postId}` |
| Rate Limit Group | `Medium`                                           |
| App Permission   | `TeamMessaging`                                    |
| User Permission  | `N/A`                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).posts(postId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Posts-deleteGlipPostNew)
in API Explorer.

## patchGlipPostNew

Update Post

| Name             | Value                                              |
| ---------------- | -------------------------------------------------- |
| HTTP Method      | `PATCH`                                            |
| Endpoint         | `/team-messaging/v1/chats/{chatId}/posts/{postId}` |
| Rate Limit Group | `Medium`                                           |
| App Permission   | `TeamMessaging`                                    |
| User Permission  | `N/A`                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).posts(postId).patch(
  tMUpdatePostRequest,
);
await rc.revoke();
```

- `tMUpdatePostRequest` is of type
  [TMUpdatePostRequest](./definitions/TMUpdatePostRequest.ts)
- `result` is of type [TMPostInfo](./definitions/TMPostInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-patchGlipPostNew)
in API Explorer.

## readGlipEveryoneNew

Get Everyone Chat

| Name             | Value                         |
| ---------------- | ----------------------------- |
| HTTP Method      | `GET`                         |
| Endpoint         | `/team-messaging/v1/everyone` |
| Rate Limit Group | `Light`                       |
| App Permission   | `TeamMessaging`               |
| User Permission  | `N/A`                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().everyone().get();
await rc.revoke();
```

- `result` is of type [EveryoneTeamInfo](./definitions/EveryoneTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-readGlipEveryoneNew)
in API Explorer.

## patchGlipEveryoneNew

Update Everyone Chat

| Name             | Value                         |
| ---------------- | ----------------------------- |
| HTTP Method      | `PATCH`                       |
| Endpoint         | `/team-messaging/v1/everyone` |
| Rate Limit Group | `Medium`                      |
| App Permission   | `TeamMessaging`               |
| User Permission  | `N/A`                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().everyone().patch(
  updateEveryoneTeamRequest,
);
await rc.revoke();
```

- `updateEveryoneTeamRequest` is of type
  [UpdateEveryoneTeamRequest](./definitions/UpdateEveryoneTeamRequest.ts)
- `result` is of type [EveryoneTeamInfo](./definitions/EveryoneTeamInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Teams-patchGlipEveryoneNew)
in API Explorer.

## listFavoriteChatsNew

List Favorite Chats

| Name             | Value                          |
| ---------------- | ------------------------------ |
| HTTP Method      | `GET`                          |
| Endpoint         | `/team-messaging/v1/favorites` |
| Rate Limit Group | `Light`                        |
| App Permission   | `TeamMessaging`                |
| User Permission  | `N/A`                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().favorites().get(
  listFavoriteChatsNewParameters,
);
await rc.revoke();
```

- `listFavoriteChatsNewParameters` is of type
  [ListFavoriteChatsNewParameters](./definitions/ListFavoriteChatsNewParameters.ts)
- `result` is of type
  [TMChatListWithoutNavigation](./definitions/TMChatListWithoutNavigation.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listFavoriteChatsNew)
in API Explorer.

## lockNoteNew

Lock Note

| Name             | Value                                    |
| ---------------- | ---------------------------------------- |
| HTTP Method      | `POST`                                   |
| Endpoint         | `/team-messaging/v1/notes/{noteId}/lock` |
| Rate Limit Group | `Light`                                  |
| App Permission   | `TeamMessaging`                          |
| User Permission  | `N/A`                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().notes(noteId).lock().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-lockNoteNew)
in API Explorer.

## addGlipTeamMembersNew

Add Team Members

| Name             | Value                                   |
| ---------------- | --------------------------------------- |
| HTTP Method      | `POST`                                  |
| Endpoint         | `/team-messaging/v1/teams/{chatId}/add` |
| Rate Limit Group | `Medium`                                |
| App Permission   | `TeamMessaging`                         |
| User Permission  | `N/A`                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().teams(chatId).add().post(
  tMAddTeamMembersRequest,
);
await rc.revoke();
```

- `tMAddTeamMembersRequest` is of type
  [TMAddTeamMembersRequest](./definitions/TMAddTeamMembersRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-addGlipTeamMembersNew)
in API Explorer.

## joinGlipTeamNew

Join Team

| Name             | Value                                    |
| ---------------- | ---------------------------------------- |
| HTTP Method      | `POST`                                   |
| Endpoint         | `/team-messaging/v1/teams/{chatId}/join` |
| Rate Limit Group | `Medium`                                 |
| App Permission   | `TeamMessaging`                          |
| User Permission  | `N/A`                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().teams(chatId).join().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-joinGlipTeamNew)
in API Explorer.

## listGlipWebhooksNew

List Webhooks

| Name             | Value                         |
| ---------------- | ----------------------------- |
| HTTP Method      | `GET`                         |
| Endpoint         | `/team-messaging/v1/webhooks` |
| Rate Limit Group | `Medium`                      |
| App Permission   | `TeamMessaging`               |
| User Permission  | `N/A`                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().webhooks().list();
await rc.revoke();
```

- `result` is of type [TMWebhookList](./definitions/TMWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-listGlipWebhooksNew)
in API Explorer.

## readGlipWebhookNew

Get Webhook

| Name             | Value                                     |
| ---------------- | ----------------------------------------- |
| HTTP Method      | `GET`                                     |
| Endpoint         | `/team-messaging/v1/webhooks/{webhookId}` |
| Rate Limit Group | `Medium`                                  |
| App Permission   | `TeamMessaging`                           |
| User Permission  | `N/A`                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().webhooks(webhookId).get();
await rc.revoke();
```

- `result` is of type [TMWebhookList](./definitions/TMWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-readGlipWebhookNew)
in API Explorer.

## deleteGlipWebhookNew

Delete Webhook

| Name             | Value                                     |
| ---------------- | ----------------------------------------- |
| HTTP Method      | `DELETE`                                  |
| Endpoint         | `/team-messaging/v1/webhooks/{webhookId}` |
| Rate Limit Group | `Medium`                                  |
| App Permission   | `TeamMessaging`                           |
| User Permission  | `N/A`                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().webhooks(webhookId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-deleteGlipWebhookNew)
in API Explorer.

## readTMCompanyInfoNew

Get Company Info

| Name             | Value                                      |
| ---------------- | ------------------------------------------ |
| HTTP Method      | `GET`                                      |
| Endpoint         | `/team-messaging/v1/companies/{companyId}` |
| Rate Limit Group | `Light`                                    |
| App Permission   | `TeamMessaging`                            |
| User Permission  | `N/A`                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().companies(companyId).get();
await rc.revoke();
```

- `result` is of type [TMCompanyInfo](./definitions/TMCompanyInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Profile-readTMCompanyInfoNew)
in API Explorer.

## rcwHistoryListAllSessions

List Historical Webinar Sessions across Multiple Webinars

| Name             | Value                          |
| ---------------- | ------------------------------ |
| HTTP Method      | `GET`                          |
| Endpoint         | `/webinar/history/v1/sessions` |
| Rate Limit Group | `Heavy`                        |
| App Permission   | `ReadWebinars`                 |
| User Permission  | `N/A`                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().sessions().get(
  rcwHistoryListAllSessionsParameters,
);
await rc.revoke();
```

- `rcwHistoryListAllSessionsParameters` is of type
  [RcwHistoryListAllSessionsParameters](./definitions/RcwHistoryListAllSessionsParameters.ts)
- `result` is of type
  [SessionGlobalListResource](./definitions/SessionGlobalListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Webinars-rcwHistoryListAllSessions)
in API Explorer.

## rcwHistoryGetWebinar

Get Historical Webinar

| Name             | Value                                      |
| ---------------- | ------------------------------------------ |
| HTTP Method      | `GET`                                      |
| Endpoint         | `/webinar/history/v1/webinars/{webinarId}` |
| Rate Limit Group | `Heavy`                                    |
| App Permission   | `ReadWebinars`                             |
| User Permission  | `N/A`                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().webinars(webinarId).get();
await rc.revoke();
```

- `result` is of type
  [HistoryWebinarResource](./definitions/HistoryWebinarResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Webinars-rcwHistoryGetWebinar)
in API Explorer.

## readOpenIdConfiguration

OIDC Provider Configuration

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `GET`                               |
| Endpoint         | `/.well-known/openid-configuration` |
| Rate Limit Group | `NoThrottling`                      |
| App Permission   | `N/A`                               |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.wellKnown().openidConfiguration().get();
await rc.revoke();
```

- `result` is of type [OpenIdDiscovery](./definitions/OpenIdDiscovery.ts)

[Try it out](https://developer.ringcentral.com/api-reference#OAuth-and-OIDC-readOpenIdConfiguration)
in API Explorer.

## caiSpeechToText

Speech to Text Conversion

| Name             | Value                               |
| ---------------- | ----------------------------------- |
| HTTP Method      | `POST`                              |
| Endpoint         | `/ai/audio/v1/async/speech-to-text` |
| Rate Limit Group | `Heavy`                             |
| App Permission   | `AI`                                |
| User Permission  | `N/A`                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().audio().v1().async().speechToText().post(
  asrInput,
  caiSpeechToTextParameters,
);
await rc.revoke();
```

- `asrInput` is of type [AsrInput](./definitions/AsrInput.ts)
- `caiSpeechToTextParameters` is of type
  [CaiSpeechToTextParameters](./definitions/CaiSpeechToTextParameters.ts)
- `result` is of type
  [CaiAsyncApiResponse](./definitions/CaiAsyncApiResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Audio-caiSpeechToText)
in API Explorer.

## getAccountRecordings

List Account Recordings

| Name             | Value                                        |
| ---------------- | -------------------------------------------- |
| HTTP Method      | `GET`                                        |
| Endpoint         | `/rcvideo/v1/account/{accountId}/recordings` |
| Rate Limit Group | `Light`                                      |
| App Permission   | `Video`                                      |
| User Permission  | `N/A`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v1().account(accountId).recordings().get(
  getAccountRecordingsParameters,
);
await rc.revoke();
```

- Parameter `accountId` is optional with default value `~`
- `getAccountRecordingsParameters` is of type
  [GetAccountRecordingsParameters](./definitions/GetAccountRecordingsParameters.ts)
- `result` is of type [CloudRecordings](./definitions/CloudRecordings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Recordings-getAccountRecordings)
in API Explorer.

## listCostCenters

List Cost Centers

| Name             | Value                                           |
| ---------------- | ----------------------------------------------- |
| HTTP Method      | `GET`                                           |
| Endpoint         | `/restapi/v2/accounts/{accountId}/cost-centers` |
| Rate Limit Group | `Light`                                         |
| App Permission   | `ReadAccounts`                                  |
| User Permission  | `CostCenterManagement`                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).costCenters().get();
await rc.revoke();
```

- `result` is of type [CostCenterList](./definitions/CostCenterList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Cost-Centers-listCostCenters)
in API Explorer.

## bulkDeleteUsersV2

Delete Multiple Extensions

| Name             | Value                                         |
| ---------------- | --------------------------------------------- |
| HTTP Method      | `DELETE`                                      |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions` |
| Rate Limit Group | `Heavy`                                       |
| App Permission   | `EditAccounts`                                |
| User Permission  | `Users`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions().delete(
  bulkDeleteUsersRequest,
);
await rc.revoke();
```

- `bulkDeleteUsersRequest` is of type
  [BulkDeleteUsersRequest](./definitions/BulkDeleteUsersRequest.ts)
- `result` is of type
  [BulkDeleteUsersResponse](./definitions/BulkDeleteUsersResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-bulkDeleteUsersV2)
in API Explorer.

## listAccountPhoneNumbersV2

List Account Phone Numbers

| Name             | Value                                            |
| ---------------- | ------------------------------------------------ |
| HTTP Method      | `GET`                                            |
| Endpoint         | `/restapi/v2/accounts/{accountId}/phone-numbers` |
| Rate Limit Group | `Heavy`                                          |
| App Permission   | `ReadAccounts`                                   |
| User Permission  | `ReadCompanyPhoneNumbers`                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).phoneNumbers().get(
  listAccountPhoneNumbersV2Parameters,
);
await rc.revoke();
```

- `listAccountPhoneNumbersV2Parameters` is of type
  [ListAccountPhoneNumbersV2Parameters](./definitions/ListAccountPhoneNumbersV2Parameters.ts)
- `result` is of type
  [AccountPhoneNumberList](./definitions/AccountPhoneNumberList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-listAccountPhoneNumbersV2)
in API Explorer.

## deleteNumbersFromInventoryV2

Delete Numbers from Inventory

| Name             | Value                                            |
| ---------------- | ------------------------------------------------ |
| HTTP Method      | `DELETE`                                         |
| Endpoint         | `/restapi/v2/accounts/{accountId}/phone-numbers` |
| Rate Limit Group | `Medium`                                         |
| App Permission   | `EditAccounts`                                   |
| User Permission  | `EditCompanyPhoneNumbers`                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).phoneNumbers().delete(
  deletePhoneNumbersRequest,
);
await rc.revoke();
```

- `deletePhoneNumbersRequest` is of type
  [DeletePhoneNumbersRequest](./definitions/DeletePhoneNumbersRequest.ts)
- `result` is of type
  [DeletePhoneNumbersResponse](./definitions/DeletePhoneNumbersResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-deleteNumbersFromInventoryV2)
in API Explorer.

## assignPhoneNumberV2

Assign Phone Number

| Name             | Value                                                            |
| ---------------- | ---------------------------------------------------------------- |
| HTTP Method      | `PATCH`                                                          |
| Endpoint         | `/restapi/v2/accounts/{accountId}/phone-numbers/{phoneNumberId}` |
| Rate Limit Group | `Medium`                                                         |
| App Permission   | `EditAccounts`                                                   |
| User Permission  | `EditCompanyPhoneNumbers`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).phoneNumbers(
  phoneNumberId,
).patch(assignPhoneNumberRequest);
await rc.revoke();
```

- `assignPhoneNumberRequest` is of type
  [AssignPhoneNumberRequest](./definitions/AssignPhoneNumberRequest.ts)
- `result` is of type
  [AccountPhoneNumberInfo](./definitions/AccountPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-assignPhoneNumberV2)
in API Explorer.

## listSmsConsentRecords

List SMS Consent Records

| Name             | Value                                           |
| ---------------- | ----------------------------------------------- |
| HTTP Method      | `GET`                                           |
| Endpoint         | `/restapi/v2/accounts/{accountId}/sms/consents` |
| Rate Limit Group | `Light`                                         |
| App Permission   | `SMS`                                           |
| User Permission  | `N/A`                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).sms().consents().get(
  listSmsConsentRecordsParameters,
);
await rc.revoke();
```

- `listSmsConsentRecordsParameters` is of type
  [ListSmsConsentRecordsParameters](./definitions/ListSmsConsentRecordsParameters.ts)
- `result` is of type [OptRecordList](./definitions/OptRecordList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Consents-listSmsConsentRecords)
in API Explorer.

## deleteSmsConsentRecords

Delete SMS Consent Records

| Name             | Value                                           |
| ---------------- | ----------------------------------------------- |
| HTTP Method      | `DELETE`                                        |
| Endpoint         | `/restapi/v2/accounts/{accountId}/sms/consents` |
| Rate Limit Group | `Light`                                         |
| App Permission   | `SMS`                                           |
| User Permission  | `N/A`                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).sms().consents()
  .delete(deleteOptRecordList);
await rc.revoke();
```

- `deleteOptRecordList` is of type
  [DeleteOptRecordList](./definitions/DeleteOptRecordList.ts)
- `result` is of type
  [OptRecordsModificationSummary](./definitions/OptRecordsModificationSummary.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Consents-deleteSmsConsentRecords)
in API Explorer.

## editSmsConsentRecords

Add/Update SMS Consent Records

| Name             | Value                                           |
| ---------------- | ----------------------------------------------- |
| HTTP Method      | `PATCH`                                         |
| Endpoint         | `/restapi/v2/accounts/{accountId}/sms/consents` |
| Rate Limit Group | `Light`                                         |
| App Permission   | `SMS`                                           |
| User Permission  | `N/A`                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).sms().consents().patch(
  updateOptRecordList,
);
await rc.revoke();
```

- `updateOptRecordList` is of type
  [UpdateOptRecordList](./definitions/UpdateOptRecordList.ts)
- `result` is of type
  [OptRecordsModificationSummary](./definitions/OptRecordsModificationSummary.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Consents-editSmsConsentRecords)
in API Explorer.

## listA2PBatches

List A2P SMS Batches

| Name             | Value                                                       |
| ---------------- | ----------------------------------------------------------- |
| HTTP Method      | `GET`                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/a2p-sms/batches` |
| Rate Limit Group | `Light`                                                     |
| App Permission   | `A2PSMS`                                                    |
| User Permission  | `N/A`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().batches()
  .list(listA2PBatchesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listA2PBatchesParameters` is of type
  [ListA2PBatchesParameters](./definitions/ListA2PBatchesParameters.ts)
- `result` is of type [BatchListResponse](./definitions/BatchListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-listA2PBatches)
in API Explorer.

## createA2PSMS

Send A2P SMS

| Name             | Value                                                       |
| ---------------- | ----------------------------------------------------------- |
| HTTP Method      | `POST`                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/a2p-sms/batches` |
| Rate Limit Group | `Light`                                                     |
| App Permission   | `A2PSMS`                                                    |
| User Permission  | `N/A`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().batches()
  .post(messageBatchCreateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `messageBatchCreateRequest` is of type
  [MessageBatchCreateRequest](./definitions/MessageBatchCreateRequest.ts)
- `result` is of type
  [MessageBatchResponse](./definitions/MessageBatchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-createA2PSMS)
in API Explorer.

## readA2PBatch

Get A2P SMS Batch

| Name             | Value                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/a2p-sms/batches/{batchId}` |
| Rate Limit Group | `Light`                                                               |
| App Permission   | `A2PSMS`                                                              |
| User Permission  | `N/A`                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().batches(
  batchId,
).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [MessageBatchResponse](./definitions/MessageBatchResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-readA2PBatch)
in API Explorer.

## listA2PSMS

List A2P SMS Messages

| Name             | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| HTTP Method      | `GET`                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/a2p-sms/messages` |
| Rate Limit Group | `Light`                                                      |
| App Permission   | `A2PSMS`                                                     |
| User Permission  | `N/A`                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().messages()
  .list(listA2PSMSParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listA2PSMSParameters` is of type
  [ListA2PSMSParameters](./definitions/ListA2PSMSParameters.ts)
- `result` is of type
  [MessageListResponse](./definitions/MessageListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-listA2PSMS)
in API Explorer.

## readA2PSMS

Get A2P SMS

| Name             | Value                                                                    |
| ---------------- | ------------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/a2p-sms/messages/{messageId}` |
| Rate Limit Group | `Light`                                                                  |
| App Permission   | `A2PSMS`                                                                 |
| User Permission  | `N/A`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().messages(
  messageId,
).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [MessageDetailsResponse](./definitions/MessageDetailsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-readA2PSMS)
in API Explorer.

## aggregateA2PSMSStatuses

List A2P SMS Statuses

| Name             | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| HTTP Method      | `GET`                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/a2p-sms/statuses` |
| Rate Limit Group | `Light`                                                      |
| App Permission   | `A2PSMS`                                                     |
| User Permission  | `N/A`                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).a2pSms().statuses()
  .get(aggregateA2PSMSStatusesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `aggregateA2PSMSStatusesParameters` is of type
  [AggregateA2PSMSStatusesParameters](./definitions/AggregateA2PSMSStatusesParameters.ts)
- `result` is of type
  [MessageStatusesResponse](./definitions/MessageStatusesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#High-Volume-SMS-aggregateA2PSMSStatuses)
in API Explorer.

## listCompanyAnsweringRules

List Company Call Handling Rules

| Name             | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| HTTP Method      | `GET`                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/answering-rule` |
| Rate Limit Group | `Medium`                                                   |
| App Permission   | `ReadAccounts`                                             |
| User Permission  | `ReadCompanyAnsweringRules`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).answeringRule()
  .list(listCompanyAnsweringRulesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCompanyAnsweringRulesParameters` is of type
  [ListCompanyAnsweringRulesParameters](./definitions/ListCompanyAnsweringRulesParameters.ts)
- `result` is of type
  [CompanyAnsweringRuleList](./definitions/CompanyAnsweringRuleList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-listCompanyAnsweringRules)
in API Explorer.

## createCompanyAnsweringRule

Create Company Call Handling Rule

| Name             | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| HTTP Method      | `POST`                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/answering-rule` |
| Rate Limit Group | `Medium`                                                   |
| App Permission   | `EditAccounts`                                             |
| User Permission  | `EditCompanyAnsweringRules`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).answeringRule()
  .post(companyAnsweringRuleRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `companyAnsweringRuleRequest` is of type
  [CompanyAnsweringRuleRequest](./definitions/CompanyAnsweringRuleRequest.ts)
- `result` is of type
  [CompanyAnsweringRuleInfo](./definitions/CompanyAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-createCompanyAnsweringRule)
in API Explorer.

## readCompanyAnsweringRule

Get Company Call Handling Rule

| Name             | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/answering-rule/{ruleId}` |
| Rate Limit Group | `Light`                                                             |
| App Permission   | `ReadAccounts`                                                      |
| User Permission  | `ReadCompanyAnsweringRules`                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).answeringRule(
  ruleId,
).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [CompanyAnsweringRuleInfo](./definitions/CompanyAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-readCompanyAnsweringRule)
in API Explorer.

## updateCompanyAnsweringRule

Update Company Call Handling Rule

| Name             | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/answering-rule/{ruleId}` |
| Rate Limit Group | `Medium`                                                            |
| App Permission   | `EditAccounts`                                                      |
| User Permission  | `EditCompanyAnsweringRules`                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).answeringRule(
  ruleId,
).put(companyAnsweringRuleUpdate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `companyAnsweringRuleUpdate` is of type
  [CompanyAnsweringRuleUpdate](./definitions/CompanyAnsweringRuleUpdate.ts)
- `result` is of type
  [CompanyAnsweringRuleInfo](./definitions/CompanyAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-updateCompanyAnsweringRule)
in API Explorer.

## deleteCompanyAnsweringRule

Delete Company Call Handling Rule

| Name             | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/answering-rule/{ruleId}` |
| Rate Limit Group | `Medium`                                                            |
| App Permission   | `EditAccounts`                                                      |
| User Permission  | `EditCompanyAnsweringRules`                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).answeringRule(
  ruleId,
).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-deleteCompanyAnsweringRule)
in API Explorer.

## listAssignedRoles

List Company Assigned Roles

| Name             | Value                                                     |
| ---------------- | --------------------------------------------------------- |
| HTTP Method      | `GET`                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/assigned-role` |
| Rate Limit Group | `Medium`                                                  |
| App Permission   | `ReadAccounts`                                            |
| User Permission  | `ReadAssignedRoles`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).assignedRole().get(
  listAssignedRolesParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listAssignedRolesParameters` is of type
  [ListAssignedRolesParameters](./definitions/ListAssignedRolesParameters.ts)
- `result` is of type
  [ExtensionWithRolesCollectionResource](./definitions/ExtensionWithRolesCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-listAssignedRoles)
in API Explorer.

## auditTrailSearch

Search Audit Trail Data

| Name             | Value                                                          |
| ---------------- | -------------------------------------------------------------- |
| HTTP Method      | `POST`                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/audit-trail/search` |
| Rate Limit Group | `Heavy`                                                        |
| App Permission   | `ReadAuditTrail`                                               |
| User Permission  | `N/A`                                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).auditTrail()
  .search().post(accountHistorySearchPublicRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `accountHistorySearchPublicRequest` is of type
  [AccountHistorySearchPublicRequest](./definitions/AccountHistorySearchPublicRequest.ts)
- `result` is of type
  [AccountHistorySearchPublicResponse](./definitions/AccountHistorySearchPublicResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Audit-Trail-auditTrailSearch)
in API Explorer.

## readAccountBusinessAddress

Get Account Business Address

| Name             | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| HTTP Method      | `GET`                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/business-address` |
| Rate Limit Group | `Light`                                                      |
| App Permission   | `ReadAccounts`                                               |
| User Permission  | `ReadCompanyInfo`                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).businessAddress()
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [AccountBusinessAddressResource](./definitions/AccountBusinessAddressResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountBusinessAddress)
in API Explorer.

## updateAccountBusinessAddress

Update Company Business Address

| Name             | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| HTTP Method      | `PUT`                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/business-address` |
| Rate Limit Group | `Medium`                                                     |
| App Permission   | `EditAccounts`                                               |
| User Permission  | `EditCompanyInfo`                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).businessAddress()
  .put(modifyAccountBusinessAddressRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `modifyAccountBusinessAddressRequest` is of type
  [ModifyAccountBusinessAddressRequest](./definitions/ModifyAccountBusinessAddressRequest.ts)
- `result` is of type
  [AccountBusinessAddressResource](./definitions/AccountBusinessAddressResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-updateAccountBusinessAddress)
in API Explorer.

## readCompanyBusinessHours

Get Company Business Hours

| Name             | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| HTTP Method      | `GET`                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/business-hours` |
| Rate Limit Group | `Light`                                                    |
| App Permission   | `ReadAccounts`                                             |
| User Permission  | `ReadCompanyAnsweringRules`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).businessHours()
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [CompanyBusinessHours](./definitions/CompanyBusinessHours.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-readCompanyBusinessHours)
in API Explorer.

## updateCompanyBusinessHours

Update Company Business Hours

| Name             | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| HTTP Method      | `PUT`                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/business-hours` |
| Rate Limit Group | `Medium`                                                   |
| App Permission   | `EditExtensions`                                           |
| User Permission  | `EditUserAnsweringRules`                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).businessHours()
  .put(companyBusinessHoursUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `companyBusinessHoursUpdateRequest` is of type
  [CompanyBusinessHoursUpdateRequest](./definitions/CompanyBusinessHoursUpdateRequest.ts)
- `result` is of type
  [CompanyBusinessHours](./definitions/CompanyBusinessHours.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-updateCompanyBusinessHours)
in API Explorer.

## extractSyncAccountCallLog

Extract Sync Company Call Log

| Name             | Value                                                             |
| ---------------- | ----------------------------------------------------------------- |
| HTTP Method      | `GET`                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-log-extract-sync` |
| Rate Limit Group | `Heavy`                                                           |
| App Permission   | `ReadCallLog`                                                     |
| User Permission  | `ReadCallLog`                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .callLogExtractSync().get(extractSyncAccountCallLogParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `extractSyncAccountCallLogParameters` is of type
  [ExtractSyncAccountCallLogParameters](./definitions/ExtractSyncAccountCallLogParameters.ts)
- `result` is of type
  [CallLogExtractSyncResponse](./definitions/CallLogExtractSyncResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-extractSyncAccountCallLog)
in API Explorer.

## syncAccountCallLog

Sync Company Call Log

| Name             | Value                                                     |
| ---------------- | --------------------------------------------------------- |
| HTTP Method      | `GET`                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-log-sync` |
| Rate Limit Group | `Heavy`                                                   |
| App Permission   | `ReadCallLog`                                             |
| User Permission  | `ReadCallLog`                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callLogSync().get(
  syncAccountCallLogParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `syncAccountCallLogParameters` is of type
  [SyncAccountCallLogParameters](./definitions/SyncAccountCallLogParameters.ts)
- `result` is of type
  [CallLogSyncResponse](./definitions/CallLogSyncResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-syncAccountCallLog)
in API Explorer.

## listCallQueueMembers

List Call Queue Members

| Name             | Value                                                                     |
| ---------------- | ------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/members` |
| Rate Limit Group | `Light`                                                                   |
| App Permission   | `ReadAccounts`                                                            |
| User Permission  | `ReadExtensions`                                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId)
  .members().get(listCallQueueMembersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCallQueueMembersParameters` is of type
  [ListCallQueueMembersParameters](./definitions/ListCallQueueMembersParameters.ts)
- `result` is of type [CallQueueMembers](./definitions/CallQueueMembers.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listCallQueueMembers)
in API Explorer.

## readCallQueuePresence

Get Call Queue Presence

| Name             | Value                                                                      |
| ---------------- | -------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/presence` |
| Rate Limit Group | `Light`                                                                    |
| App Permission   | `ReadPresence`                                                             |
| User Permission  | `N/A`                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId)
  .presence().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallQueuePresence](./definitions/CallQueuePresence.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readCallQueuePresence)
in API Explorer.

## updateCallQueuePresence

Update Call Queue Presence

| Name             | Value                                                                      |
| ---------------- | -------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/presence` |
| Rate Limit Group | `Medium`                                                                   |
| App Permission   | `EditPresence`                                                             |
| User Permission  | `N/A`                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId)
  .presence().put(callQueueUpdatePresence);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callQueueUpdatePresence` is of type
  [CallQueueUpdatePresence](./definitions/CallQueueUpdatePresence.ts)
- `result` is of type [CallQueuePresence](./definitions/CallQueuePresence.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateCallQueuePresence)
in API Explorer.

## readCallRecordingSettings

Get Call Recording Settings

| Name             | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| HTTP Method      | `GET`                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-recording` |
| Rate Limit Group | `Light`                                                    |
| App Permission   | `ReadAccounts`                                             |
| User Permission  | `ReadCompanyInfo`                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callRecording()
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [CallRecordingSettingsResource](./definitions/CallRecordingSettingsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-readCallRecordingSettings)
in API Explorer.

## updateCallRecordingSettings

Update Call Recording Settings

| Name             | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| HTTP Method      | `PUT`                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-recording` |
| Rate Limit Group | `Medium`                                                   |
| App Permission   | `EditAccounts`                                             |
| User Permission  | `EditCompanyInfo`                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callRecording()
  .put(callRecordingSettingsResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callRecordingSettingsResource` is of type
  [CallRecordingSettingsResource](./definitions/CallRecordingSettingsResource.ts)
- `result` is of type
  [CallRecordingSettingsResource](./definitions/CallRecordingSettingsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-updateCallRecordingSettings)
in API Explorer.

## deleteCompanyCallRecordings

Delete Company Call Recordings

| Name             | Value                                                       |
| ---------------- | ----------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-recordings` |
| Rate Limit Group | `Heavy`                                                     |
| App Permission   | `EditCallLog`                                               |
| User Permission  | `EditCompanyCallRecordings`                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callRecordings()
  .delete(callRecordingIds);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callRecordingIds` is of type
  [CallRecordingIds](./definitions/CallRecordingIds.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recordings-deleteCompanyCallRecordings)
in API Explorer.

## updateDeviceEmergency

Update Device Emergency Info

| Name             | Value                                                                   |
| ---------------- | ----------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/device/{deviceId}/emergency` |
| Rate Limit Group | `Medium`                                                                |
| App Permission   | `EditAccounts`                                                          |
| User Permission  | `EditCompanyDevices`                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).device(deviceId)
  .emergency().put(accountDeviceUpdate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `accountDeviceUpdate` is of type
  [AccountDeviceUpdate](./definitions/AccountDeviceUpdate.ts)
- `result` is of type [DeviceResource](./definitions/DeviceResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-updateDeviceEmergency)
in API Explorer.

## readDeviceSipInfo

Get Device SIP Info

| Name             | Value                                                                  |
| ---------------- | ---------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                  |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/device/{deviceId}/sip-info` |
| Rate Limit Group | `Light`                                                                |
| App Permission   | `ReadAccounts`                                                         |
| User Permission  | `ReadCompanyDevices`                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).device(deviceId)
  .sipInfo().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [SipInfoResource](./definitions/SipInfoResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-readDeviceSipInfo)
in API Explorer.

## listDirectoryEntries

Get Company Directory Entries

| Name             | Value                                                         |
| ---------------- | ------------------------------------------------------------- |
| HTTP Method      | `GET`                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/directory/entries` |
| Rate Limit Group | `Medium`                                                      |
| App Permission   | `ReadAccounts`                                                |
| User Permission  | `N/A`                                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).directory()
  .entries().list(listDirectoryEntriesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listDirectoryEntriesParameters` is of type
  [ListDirectoryEntriesParameters](./definitions/ListDirectoryEntriesParameters.ts)
- `result` is of type [DirectoryResource](./definitions/DirectoryResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-listDirectoryEntries)
in API Explorer.

## readDirectoryEntry

Get Corporate Directory Entry

| Name             | Value                                                                   |
| ---------------- | ----------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/directory/entries/{entryId}` |
| Rate Limit Group | `Medium`                                                                |
| App Permission   | `ReadAccounts`                                                          |
| User Permission  | `N/A`                                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).directory()
  .entries(entryId).get(readDirectoryEntryParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readDirectoryEntryParameters` is of type
  [ReadDirectoryEntryParameters](./definitions/ReadDirectoryEntryParameters.ts)
- `result` is of type [ContactResource](./definitions/ContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readDirectoryEntry)
in API Explorer.

## readDirectoryFederation

Get Account Federation

| Name             | Value                                                            |
| ---------------- | ---------------------------------------------------------------- |
| HTTP Method      | `GET`                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/directory/federation` |
| Rate Limit Group | `Medium`                                                         |
| App Permission   | `ReadAccounts`                                                   |
| User Permission  | `ReadCompanyInfo`                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).directory()
  .federation().get(readDirectoryFederationParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readDirectoryFederationParameters` is of type
  [ReadDirectoryFederationParameters](./definitions/ReadDirectoryFederationParameters.ts)
- `result` is of type [FederationResource](./definitions/FederationResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readDirectoryFederation)
in API Explorer.

## listEmergencyLocations

List Emergency Locations

| Name             | Value                                                           |
| ---------------- | --------------------------------------------------------------- |
| HTTP Method      | `GET`                                                           |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-locations` |
| Rate Limit Group | `Light`                                                         |
| App Permission   | `ReadAccounts`                                                  |
| User Permission  | `ConfigureEmergencyMaps`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyLocations().list(listEmergencyLocationsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listEmergencyLocationsParameters` is of type
  [ListEmergencyLocationsParameters](./definitions/ListEmergencyLocationsParameters.ts)
- `result` is of type
  [EmergencyLocationsResource](./definitions/EmergencyLocationsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listEmergencyLocations)
in API Explorer.

## createEmergencyLocation

Add Emergency Location

| Name             | Value                                                           |
| ---------------- | --------------------------------------------------------------- |
| HTTP Method      | `POST`                                                          |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-locations` |
| Rate Limit Group | `Medium`                                                        |
| App Permission   | `EditAccounts`                                                  |
| User Permission  | `ConfigureEmergencyMaps`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyLocations().post(emergencyLocationRequestResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `emergencyLocationRequestResource` is of type
  [EmergencyLocationRequestResource](./definitions/EmergencyLocationRequestResource.ts)
- `result` is of type
  [EmergencyLocationResponseResource](./definitions/EmergencyLocationResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createEmergencyLocation)
in API Explorer.

## readEmergencyLocation

Get Emergency Location

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-locations/{locationId}` |
| Rate Limit Group | `Light`                                                                      |
| App Permission   | `EditAccounts`                                                               |
| User Permission  | `ConfigureEmergencyMaps`                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).emergencyLocations(
  locationId,
).get(readEmergencyLocationParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readEmergencyLocationParameters` is of type
  [ReadEmergencyLocationParameters](./definitions/ReadEmergencyLocationParameters.ts)
- `result` is of type
  [CommonEmergencyLocationResource](./definitions/CommonEmergencyLocationResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readEmergencyLocation)
in API Explorer.

## updateEmergencyLocation

Update Emergency Location

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-locations/{locationId}` |
| Rate Limit Group | `Heavy`                                                                      |
| App Permission   | `EditAccounts`                                                               |
| User Permission  | `ConfigureEmergencyMaps`                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).emergencyLocations(
  locationId,
).put(emergencyLocationRequestResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `emergencyLocationRequestResource` is of type
  [EmergencyLocationRequestResource](./definitions/EmergencyLocationRequestResource.ts)
- `result` is of type
  [EmergencyLocationResponseResource](./definitions/EmergencyLocationResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateEmergencyLocation)
in API Explorer.

## deleteEmergencyLocation

Delete Emergency Location

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-locations/{locationId}` |
| Rate Limit Group | `Heavy`                                                                      |
| App Permission   | `EditAccounts`                                                               |
| User Permission  | `ConfigureEmergencyMaps`                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).emergencyLocations(
  locationId,
).delete(deleteEmergencyLocationParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `deleteEmergencyLocationParameters` is of type
  [DeleteEmergencyLocationParameters](./definitions/DeleteEmergencyLocationParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteEmergencyLocation)
in API Explorer.

## extensionBulkUpdate

Update Multiple Extensions

| Name             | Value                                                             |
| ---------------- | ----------------------------------------------------------------- |
| HTTP Method      | `POST`                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension-bulk-update` |
| Rate Limit Group | `Heavy`                                                           |
| App Permission   | `EditExtensions`                                                  |
| User Permission  | `EditExtensionInfo`                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .extensionBulkUpdate().post(extensionBulkUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `extensionBulkUpdateRequest` is of type
  [ExtensionBulkUpdateRequest](./definitions/ExtensionBulkUpdateRequest.ts)
- `result` is of type
  [ExtensionBulkUpdateTaskResource](./definitions/ExtensionBulkUpdateTaskResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-extensionBulkUpdate)
in API Explorer.

## readUserCallLog

List User Call Records

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log` |
| Rate Limit Group | `Heavy`                                                                      |
| App Permission   | `ReadCallLog`                                                                |
| User Permission  | `ReadCallLog`                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callLog().list(readUserCallLogParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readUserCallLogParameters` is of type
  [ReadUserCallLogParameters](./definitions/ReadUserCallLogParameters.ts)
- `result` is of type [CallLogResponse](./definitions/CallLogResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallLog)
in API Explorer.

## deleteUserCallLog

Delete User Call Records

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log` |
| Rate Limit Group | `Heavy`                                                                      |
| App Permission   | `EditCallLog`                                                                |
| User Permission  | `EditCallLog`                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callLog().delete(deleteUserCallLogParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `deleteUserCallLogParameters` is of type
  [DeleteUserCallLogParameters](./definitions/DeleteUserCallLogParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-deleteUserCallLog)
in API Explorer.

## readUserCallRecord

Get User Call Record(s)

| Name             | Value                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}` |
| Rate Limit Group | `Heavy`                                                                                     |
| App Permission   | `ReadCallLog`                                                                               |
| User Permission  | `ReadCallLog`                                                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callLog(callRecordId).get(readUserCallRecordParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readUserCallRecordParameters` is of type
  [ReadUserCallRecordParameters](./definitions/ReadUserCallRecordParameters.ts)
- `result` is of type [CallLogRecord](./definitions/CallLogRecord.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallRecord)
in API Explorer.

## updateUserCallQueues

Update User Call Queues

| Name             | Value                                                                           |
| ---------------- | ------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                           |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queues` |
| Rate Limit Group | `Medium`                                                                        |
| App Permission   | `EditAccounts`                                                                  |
| User Permission  | `EditCallQueuePresence`                                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callQueues().put(userCallQueues);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `userCallQueues` is of type [UserCallQueues](./definitions/UserCallQueues.ts)
- `result` is of type [UserCallQueues](./definitions/UserCallQueues.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-updateUserCallQueues)
in API Explorer.

## readExtensionCallerId

Get Extension Caller ID

| Name             | Value                                                                         |
| ---------------- | ----------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-id` |
| Rate Limit Group | `Light`                                                                       |
| App Permission   | `ReadAccounts`                                                                |
| User Permission  | `ReadCallerIDSettings`                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callerId().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [ExtensionCallerIdInfo](./definitions/ExtensionCallerIdInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readExtensionCallerId)
in API Explorer.

## updateExtensionCallerId

Update Extension Caller ID

| Name             | Value                                                                         |
| ---------------- | ----------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-id` |
| Rate Limit Group | `Medium`                                                                      |
| App Permission   | `EditExtensions`                                                              |
| User Permission  | `EditCallerIDSettings`                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callerId().put(extensionCallerIdInfoRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `extensionCallerIdInfoRequest` is of type
  [ExtensionCallerIdInfoRequest](./definitions/ExtensionCallerIdInfoRequest.ts)
- `result` is of type
  [ExtensionCallerIdInfo](./definitions/ExtensionCallerIdInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateExtensionCallerId)
in API Explorer.

## listExtensionDevices

List Extension Devices

| Name             | Value                                                                      |
| ---------------- | -------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/device` |
| Rate Limit Group | `Light`                                                                    |
| App Permission   | `ReadAccounts`                                                             |
| User Permission  | `ReadUserDevices`                                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).device().get(listExtensionDevicesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listExtensionDevicesParameters` is of type
  [ListExtensionDevicesParameters](./definitions/ListExtensionDevicesParameters.ts)
- `result` is of type
  [GetExtensionDevicesResponse](./definitions/GetExtensionDevicesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-listExtensionDevices)
in API Explorer.

## listFavoriteContacts

List Favorite Contacts

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/favorite` |
| Rate Limit Group | `Light`                                                                      |
| App Permission   | `ReadContacts`                                                               |
| User Permission  | `ReadPersonalContacts`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).favorite().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [FavoriteContactList](./definitions/FavoriteContactList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-listFavoriteContacts)
in API Explorer.

## updateFavoriteContactList

Update Favorite Contact List

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/favorite` |
| Rate Limit Group | `Medium`                                                                     |
| App Permission   | `Contacts`                                                                   |
| User Permission  | `EditPersonalContacts`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).favorite().put(favoriteCollection);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `favoriteCollection` is of type
  [FavoriteCollection](./definitions/FavoriteCollection.ts)
- `result` is of type
  [FavoriteContactList](./definitions/FavoriteContactList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateFavoriteContactList)
in API Explorer.

## readExtensionFeatures

Get User Features

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/features` |
| Rate Limit Group | `Medium`                                                                     |
| App Permission   | `ReadAccounts`                                                               |
| User Permission  | `ReadExtensions`                                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).features().get(readExtensionFeaturesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readExtensionFeaturesParameters` is of type
  [ReadExtensionFeaturesParameters](./definitions/ReadExtensionFeaturesParameters.ts)
- `result` is of type [FeatureList](./definitions/FeatureList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readExtensionFeatures)
in API Explorer.

## listExtensionGrants

List Extension Grants

| Name             | Value                                                                     |
| ---------------- | ------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/grant` |
| Rate Limit Group | `Light`                                                                   |
| App Permission   | `ReadAccounts`                                                            |
| User Permission  | `ReadExtensions`                                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).grant().get(listExtensionGrantsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listExtensionGrantsParameters` is of type
  [ListExtensionGrantsParameters](./definitions/ListExtensionGrantsParameters.ts)
- `result` is of type
  [GetExtensionGrantListResponse](./definitions/GetExtensionGrantListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-listExtensionGrants)
in API Explorer.

## createCustomUserGreeting

Create Custom User Greeting

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/greeting` |
| Rate Limit Group | `Heavy`                                                                      |
| App Permission   | `EditExtensions`                                                             |
| User Permission  | `EditUserAnsweringRules`                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).greeting().post(
  createCustomUserGreetingRequest,
  createCustomUserGreetingParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createCustomUserGreetingRequest` is of type
  [CreateCustomUserGreetingRequest](./definitions/CreateCustomUserGreetingRequest.ts)
- `createCustomUserGreetingParameters` is of type
  [CreateCustomUserGreetingParameters](./definitions/CreateCustomUserGreetingParameters.ts)
- `result` is of type
  [CustomUserGreetingInfo](./definitions/CustomUserGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-createCustomUserGreeting)
in API Explorer.

## readCustomGreeting

Get Custom Greeting

| Name             | Value                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/greeting/{greetingId}` |
| Rate Limit Group | `Medium`                                                                                  |
| App Permission   | `ReadAccounts`                                                                            |
| User Permission  | `ReadUserInfo`                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).greeting(greetingId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [CustomUserGreetingInfo](./definitions/CustomUserGreetingInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-readCustomGreeting)
in API Explorer.

## readUserPresenceStatus

Get User Presence Status

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/presence` |
| Rate Limit Group | `Light`                                                                      |
| App Permission   | `ReadPresence`                                                               |
| User Permission  | `ReadPresenceStatus`                                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).presence().get(readUserPresenceStatusParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readUserPresenceStatusParameters` is of type
  [ReadUserPresenceStatusParameters](./definitions/ReadUserPresenceStatusParameters.ts)
- `result` is of type [GetPresenceInfo](./definitions/GetPresenceInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readUserPresenceStatus)
in API Explorer.

## updateUserPresenceStatus

Update User Presence Status

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/presence` |
| Rate Limit Group | `Medium`                                                                     |
| App Permission   | `EditPresence`                                                               |
| User Permission  | `N/A`                                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).presence().put(presenceInfoRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `presenceInfoRequest` is of type
  [PresenceInfoRequest](./definitions/PresenceInfoRequest.ts)
- `result` is of type
  [PresenceInfoResponse](./definitions/PresenceInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateUserPresenceStatus)
in API Explorer.

## createRingOutCall

Make RingOut Call

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/ring-out` |
| Rate Limit Group | `Heavy`                                                                      |
| App Permission   | `RingOut`                                                                    |
| User Permission  | `N/A`                                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).ringOut().post(makeRingOutRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `makeRingOutRequest` is of type
  [MakeRingOutRequest](./definitions/MakeRingOutRequest.ts)
- `result` is of type
  [GetRingOutStatusResponse](./definitions/GetRingOutStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-createRingOutCall)
in API Explorer.

## readRingOutCallStatus

Get RingOut Call Status

| Name             | Value                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}` |
| Rate Limit Group | `Light`                                                                                  |
| App Permission   | `RingOut`                                                                                |
| User Permission  | `N/A`                                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).ringOut(ringoutId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [GetRingOutStatusResponse](./definitions/GetRingOutStatusResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-readRingOutCallStatus)
in API Explorer.

## deleteRingOutCall

Cancel RingOut Call

| Name             | Value                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}` |
| Rate Limit Group | `Heavy`                                                                                  |
| App Permission   | `RingOut`                                                                                |
| User Permission  | `N/A`                                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).ringOut(ringoutId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-deleteRingOutCall)
in API Explorer.

## getForwardAllCompanyCalls

Get Forward All Company Calls

| Name             | Value                                                         |
| ---------------- | ------------------------------------------------------------- |
| HTTP Method      | `GET`                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/forward-all-calls` |
| Rate Limit Group | `Light`                                                       |
| App Permission   | `ReadAccounts`                                                |
| User Permission  | `ReadCompanyAnsweringRules`                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).forwardAllCalls()
  .get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [ForwardAllCompanyCallsInfo](./definitions/ForwardAllCompanyCallsInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-getForwardAllCompanyCalls)
in API Explorer.

## updateForwardAllCompanyCalls

Update Forward All Company Calls

| Name             | Value                                                         |
| ---------------- | ------------------------------------------------------------- |
| HTTP Method      | `PATCH`                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/forward-all-calls` |
| Rate Limit Group | `Medium`                                                      |
| App Permission   | `EditAccounts`                                                |
| User Permission  | `EditCompanyAnsweringRules`                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).forwardAllCalls()
  .patch(forwardAllCompanyCallsRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `forwardAllCompanyCallsRequest` is of type
  [ForwardAllCompanyCallsRequest](./definitions/ForwardAllCompanyCallsRequest.ts)
- `result` is of type
  [ForwardAllCompanyCallsInfo](./definitions/ForwardAllCompanyCallsInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-updateForwardAllCompanyCalls)
in API Explorer.

## readAccountGreetingContent

Get Account Greeting Media Content

| Name             | Value                                                                     |
| ---------------- | ------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/greeting/{greetingId}/content` |
| Rate Limit Group | `Heavy`                                                                   |
| App Permission   | `ReadAccounts`                                                            |
| User Permission  | `N/A`                                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).greeting(
  greetingId,
).content().get(readAccountGreetingContentParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readAccountGreetingContentParameters` is of type
  [ReadAccountGreetingContentParameters](./definitions/ReadAccountGreetingContentParameters.ts)
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to
[Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-readAccountGreetingContent)
in API Explorer.

## readIVRPromptContent

Get IVR Prompt Content

| Name             | Value                                                                      |
| ---------------- | -------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}/content` |
| Rate Limit Group | `Heavy`                                                                    |
| App Permission   | `ReadAccounts`                                                             |
| User Permission  | `N/A`                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).ivrPrompts(
  promptId,
).content().get(readIVRPromptContentParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readIVRPromptContentParameters` is of type
  [ReadIVRPromptContentParameters](./definitions/ReadIVRPromptContentParameters.ts)
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to
[Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#IVR-readIVRPromptContent)
in API Explorer.

## createMessageStoreReport

Create Message Store Report

| Name             | Value                                                            |
| ---------------- | ---------------------------------------------------------------- |
| HTTP Method      | `POST`                                                           |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/message-store-report` |
| Rate Limit Group | `Heavy`                                                          |
| App Permission   | `ReadMessages`                                                   |
| User Permission  | `Users`                                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .messageStoreReport().post(createMessageStoreReportRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createMessageStoreReportRequest` is of type
  [CreateMessageStoreReportRequest](./definitions/CreateMessageStoreReportRequest.ts)
- `result` is of type [MessageStoreReport](./definitions/MessageStoreReport.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-createMessageStoreReport)
in API Explorer.

## readMessageStoreReportTask

Get Message Store Report Task

| Name             | Value                                                                     |
| ---------------- | ------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/message-store-report/{taskId}` |
| Rate Limit Group | `Heavy`                                                                   |
| App Permission   | `ReadMessages`                                                            |
| User Permission  | `Users`                                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).messageStoreReport(
  taskId,
).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [MessageStoreReport](./definitions/MessageStoreReport.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportTask)
in API Explorer.

## readCallRecordingContent

Get Call Recording Content

| Name             | Value                                                                       |
| ---------------- | --------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/recording/{recordingId}/content` |
| Rate Limit Group | `Heavy`                                                                     |
| App Permission   | `ReadCallRecording`                                                         |
| User Permission  | `N/A`                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).recording(
  recordingId,
).content().get(readCallRecordingContentParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readCallRecordingContentParameters` is of type
  [ReadCallRecordingContentParameters](./definitions/ReadCallRecordingContentParameters.ts)
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to
[Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recordings-readCallRecordingContent)
in API Explorer.

## assignMultipleSites

Edit Sites

| Name             | Value                                                                  |
| ---------------- | ---------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/sites/{siteId}/bulk-assign` |
| Rate Limit Group | `Medium`                                                               |
| App Permission   | `EditExtensions`                                                       |
| User Permission  | `Sites`                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).sites(siteId)
  .bulkAssign().post(siteMembersBulkUpdate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `siteMembersBulkUpdate` is of type
  [SiteMembersBulkUpdate](./definitions/SiteMembersBulkUpdate.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Multi-Site-assignMultipleSites)
in API Explorer.

## createCallOutCallSession

Make CallOut

| Name             | Value                                                          |
| ---------------- | -------------------------------------------------------------- |
| HTTP Method      | `POST`                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/call-out` |
| Rate Limit Group | `Heavy`                                                        |
| App Permission   | `CallControl`                                                  |
| User Permission  | `N/A`                                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .callOut().post(makeCallOutRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `makeCallOutRequest` is of type
  [MakeCallOutRequest](./definitions/MakeCallOutRequest.ts)
- `result` is of type [CallSession](./definitions/CallSession.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-createCallOutCallSession)
in API Explorer.

## createConferenceCallSession

Start Conference Call Session

| Name             | Value                                                            |
| ---------------- | ---------------------------------------------------------------- |
| HTTP Method      | `POST`                                                           |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/conference` |
| Rate Limit Group | `Heavy`                                                          |
| App Permission   | `CallControl`                                                    |
| User Permission  | `N/A`                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .conference().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallSession](./definitions/CallSession.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-createConferenceCallSession)
in API Explorer.

## readCallSessionStatus

Get Call Session Status

| Name             | Value                                                                               |
| ---------------- | ----------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}` |
| Rate Limit Group | `Light`                                                                             |
| App Permission   | `CallControl`                                                                       |
| User Permission  | `N/A`                                                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).get(readCallSessionStatusParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `readCallSessionStatusParameters` is of type
  [ReadCallSessionStatusParameters](./definitions/ReadCallSessionStatusParameters.ts)
- `result` is of type [CallSessionObject](./definitions/CallSessionObject.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-readCallSessionStatus)
in API Explorer.

## deleteCallSession

Drop Call Session

| Name             | Value                                                                               |
| ---------------- | ----------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}` |
| Rate Limit Group | `Light`                                                                             |
| App Permission   | `CallControl`                                                                       |
| User Permission  | `N/A`                                                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-deleteCallSession)
in API Explorer.

## readDefaultRole

Get Default User Role

| Name             | Value                                                         |
| ---------------- | ------------------------------------------------------------- |
| HTTP Method      | `GET`                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/user-role/default` |
| Rate Limit Group | `Light`                                                       |
| App Permission   | `RoleManagement`                                              |
| User Permission  | `Roles`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).userRole()
  .default().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [DefaultUserRole](./definitions/DefaultUserRole.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-readDefaultRole)
in API Explorer.

## updateDefaultUserRole

Set Default User Role

| Name             | Value                                                         |
| ---------------- | ------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/user-role/default` |
| Rate Limit Group | `Medium`                                                      |
| App Permission   | `RoleManagement`                                              |
| User Permission  | `Roles`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).userRole()
  .default().put(defaultUserRoleRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `defaultUserRoleRequest` is of type
  [DefaultUserRoleRequest](./definitions/DefaultUserRoleRequest.ts)
- `result` is of type [DefaultUserRole](./definitions/DefaultUserRole.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-updateDefaultUserRole)
in API Explorer.

## assignMultipleUserRoles

Assign Multiple User Roles

| Name             | Value                                                                      |
| ---------------- | -------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/user-role/{roleId}/bulk-assign` |
| Rate Limit Group | `Heavy`                                                                    |
| App Permission   | `RoleManagement`                                                           |
| User Permission  | `EditUserRoles`                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).userRole(roleId)
  .bulkAssign().post(bulkRoleAssignResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `bulkRoleAssignResource` is of type
  [BulkRoleAssignResource](./definitions/BulkRoleAssignResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-assignMultipleUserRoles)
in API Explorer.

## createSIPRegistration

Register Device

| Name             | Value                                             |
| ---------------- | ------------------------------------------------- |
| HTTP Method      | `POST`                                            |
| Endpoint         | `/restapi/{apiVersion}/client-info/sip-provision` |
| Rate Limit Group | `Heavy`                                           |
| App Permission   | `VoipCalling`                                     |
| User Permission  | `N/A`                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).clientInfo().sipProvision().post(
  createSipRegistrationRequest,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `createSipRegistrationRequest` is of type
  [CreateSipRegistrationRequest](./definitions/CreateSipRegistrationRequest.ts)
- `result` is of type
  [CreateSipRegistrationResponse](./definitions/CreateSipRegistrationResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Device-SIP-Registration-createSIPRegistration)
in API Explorer.

## listFaxCoverPages

List Fax Cover Pages

| Name             | Value                                             |
| ---------------- | ------------------------------------------------- |
| HTTP Method      | `GET`                                             |
| Endpoint         | `/restapi/{apiVersion}/dictionary/fax-cover-page` |
| Rate Limit Group | `Light`                                           |
| App Permission   | `N/A`                                             |
| User Permission  | `N/A`                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().faxCoverPage().get(
  listFaxCoverPagesParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listFaxCoverPagesParameters` is of type
  [ListFaxCoverPagesParameters](./definitions/ListFaxCoverPagesParameters.ts)
- `result` is of type
  [ListFaxCoverPagesResponse](./definitions/ListFaxCoverPagesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Fax-listFaxCoverPages)
in API Explorer.

## getGlipAdaptiveCardNew

Get Adaptive Card

| Name             | Value                                        |
| ---------------- | -------------------------------------------- |
| HTTP Method      | `GET`                                        |
| Endpoint         | `/team-messaging/v1/adaptive-cards/{cardId}` |
| Rate Limit Group | `Medium`                                     |
| App Permission   | `TeamMessaging`                              |
| User Permission  | `N/A`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().adaptiveCards(cardId).get();
await rc.revoke();
```

- `result` is of type [AdaptiveCardInfo](./definitions/AdaptiveCardInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Adaptive-Cards-getGlipAdaptiveCardNew)
in API Explorer.

## updateGlipAdaptiveCardNew

Update Adaptive Card

| Name             | Value                                        |
| ---------------- | -------------------------------------------- |
| HTTP Method      | `PUT`                                        |
| Endpoint         | `/team-messaging/v1/adaptive-cards/{cardId}` |
| Rate Limit Group | `Medium`                                     |
| App Permission   | `TeamMessaging`                              |
| User Permission  | `N/A`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().adaptiveCards(cardId).put(
  adaptiveCardRequest,
);
await rc.revoke();
```

- `adaptiveCardRequest` is of type
  [AdaptiveCardRequest](./definitions/AdaptiveCardRequest.ts)
- `result` is of type
  [AdaptiveCardShortInfo](./definitions/AdaptiveCardShortInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Adaptive-Cards-updateGlipAdaptiveCardNew)
in API Explorer.

## deleteGlipAdaptiveCardNew

Delete Adaptive Card

| Name             | Value                                        |
| ---------------- | -------------------------------------------- |
| HTTP Method      | `DELETE`                                     |
| Endpoint         | `/team-messaging/v1/adaptive-cards/{cardId}` |
| Rate Limit Group | `Medium`                                     |
| App Permission   | `TeamMessaging`                              |
| User Permission  | `N/A`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().adaptiveCards(cardId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Adaptive-Cards-deleteGlipAdaptiveCardNew)
in API Explorer.

## favoriteGlipChatNew

Add Chat to Favorites

| Name             | Value                                        |
| ---------------- | -------------------------------------------- |
| HTTP Method      | `POST`                                       |
| Endpoint         | `/team-messaging/v1/chats/{chatId}/favorite` |
| Rate Limit Group | `Medium`                                     |
| App Permission   | `TeamMessaging`                              |
| User Permission  | `N/A`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).favorite().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-favoriteGlipChatNew)
in API Explorer.

## listChatNotesNew

List Notes

| Name             | Value                                     |
| ---------------- | ----------------------------------------- |
| HTTP Method      | `GET`                                     |
| Endpoint         | `/team-messaging/v1/chats/{chatId}/notes` |
| Rate Limit Group | `Heavy`                                   |
| App Permission   | `TeamMessaging`                           |
| User Permission  | `N/A`                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).notes().get(
  listChatNotesNewParameters,
);
await rc.revoke();
```

- `listChatNotesNewParameters` is of type
  [ListChatNotesNewParameters](./definitions/ListChatNotesNewParameters.ts)
- `result` is of type [TMNoteList](./definitions/TMNoteList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-listChatNotesNew)
in API Explorer.

## createChatNoteNew

Create Note

| Name             | Value                                     |
| ---------------- | ----------------------------------------- |
| HTTP Method      | `POST`                                    |
| Endpoint         | `/team-messaging/v1/chats/{chatId}/notes` |
| Rate Limit Group | `Medium`                                  |
| App Permission   | `TeamMessaging`                           |
| User Permission  | `N/A`                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).notes().post(
  tMCreateNoteRequest,
);
await rc.revoke();
```

- `tMCreateNoteRequest` is of type
  [TMCreateNoteRequest](./definitions/TMCreateNoteRequest.ts)
- `result` is of type [TMNoteInfo](./definitions/TMNoteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-createChatNoteNew)
in API Explorer.

## listChatTasksNew

List Chat Tasks

| Name             | Value                                     |
| ---------------- | ----------------------------------------- |
| HTTP Method      | `GET`                                     |
| Endpoint         | `/team-messaging/v1/chats/{chatId}/tasks` |
| Rate Limit Group | `Heavy`                                   |
| App Permission   | `TeamMessaging`                           |
| User Permission  | `N/A`                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).tasks().get(
  listChatTasksNewParameters,
);
await rc.revoke();
```

- `listChatTasksNewParameters` is of type
  [ListChatTasksNewParameters](./definitions/ListChatTasksNewParameters.ts)
- `result` is of type [TMTaskList](./definitions/TMTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-listChatTasksNew)
in API Explorer.

## createTaskNew

Create Task

| Name             | Value                                     |
| ---------------- | ----------------------------------------- |
| HTTP Method      | `POST`                                    |
| Endpoint         | `/team-messaging/v1/chats/{chatId}/tasks` |
| Rate Limit Group | `Medium`                                  |
| App Permission   | `TeamMessaging`                           |
| User Permission  | `N/A`                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).tasks().post(
  tMCreateTaskRequest,
);
await rc.revoke();
```

- `tMCreateTaskRequest` is of type
  [TMCreateTaskRequest](./definitions/TMCreateTaskRequest.ts)
- `result` is of type [TMTaskInfo](./definitions/TMTaskInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-createTaskNew)
in API Explorer.

## unfavoriteGlipChatNew

Remove Chat from Favorites

| Name             | Value                                          |
| ---------------- | ---------------------------------------------- |
| HTTP Method      | `POST`                                         |
| Endpoint         | `/team-messaging/v1/chats/{chatId}/unfavorite` |
| Rate Limit Group | `Medium`                                       |
| App Permission   | `TeamMessaging`                                |
| User Permission  | `N/A`                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).unfavorite().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Chats-unfavoriteGlipChatNew)
in API Explorer.

## listGlipConversationsNew

List Conversations

| Name             | Value                              |
| ---------------- | ---------------------------------- |
| HTTP Method      | `GET`                              |
| Endpoint         | `/team-messaging/v1/conversations` |
| Rate Limit Group | `Medium`                           |
| App Permission   | `TeamMessaging`                    |
| User Permission  | `N/A`                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().conversations().list(
  listGlipConversationsNewParameters,
);
await rc.revoke();
```

- `listGlipConversationsNewParameters` is of type
  [ListGlipConversationsNewParameters](./definitions/ListGlipConversationsNewParameters.ts)
- `result` is of type [TMConversationList](./definitions/TMConversationList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-listGlipConversationsNew)
in API Explorer.

## createGlipConversationNew

Create/Open Conversation

| Name             | Value                              |
| ---------------- | ---------------------------------- |
| HTTP Method      | `POST`                             |
| Endpoint         | `/team-messaging/v1/conversations` |
| Rate Limit Group | `Medium`                           |
| App Permission   | `TeamMessaging`                    |
| User Permission  | `N/A`                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().conversations().post(
  createConversationRequest,
);
await rc.revoke();
```

- `createConversationRequest` is of type
  [CreateConversationRequest](./definitions/CreateConversationRequest.ts)
- `result` is of type [TMConversationInfo](./definitions/TMConversationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-createGlipConversationNew)
in API Explorer.

## readGlipConversationNew

Get Conversation

| Name             | Value                                       |
| ---------------- | ------------------------------------------- |
| HTTP Method      | `GET`                                       |
| Endpoint         | `/team-messaging/v1/conversations/{chatId}` |
| Rate Limit Group | `Light`                                     |
| App Permission   | `TeamMessaging`                             |
| User Permission  | `N/A`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().conversations(chatId).get();
await rc.revoke();
```

- `result` is of type [TMConversationInfo](./definitions/TMConversationInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Conversations-readGlipConversationNew)
in API Explorer.

## listDataExportTasksNew

List Data Export Tasks

| Name             | Value                            |
| ---------------- | -------------------------------- |
| HTTP Method      | `GET`                            |
| Endpoint         | `/team-messaging/v1/data-export` |
| Rate Limit Group | `Medium`                         |
| App Permission   | `TeamMessaging`                  |
| User Permission  | `Glip`                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().dataExport().list(
  listDataExportTasksNewParameters,
);
await rc.revoke();
```

- `listDataExportTasksNewParameters` is of type
  [ListDataExportTasksNewParameters](./definitions/ListDataExportTasksNewParameters.ts)
- `result` is of type [DataExportTaskList](./definitions/DataExportTaskList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Compliance-Exports-listDataExportTasksNew)
in API Explorer.

## createDataExportTaskNew

Create Data Export Task

| Name             | Value                            |
| ---------------- | -------------------------------- |
| HTTP Method      | `POST`                           |
| Endpoint         | `/team-messaging/v1/data-export` |
| Rate Limit Group | `Heavy`                          |
| App Permission   | `TeamMessaging`                  |
| User Permission  | `Glip`                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().dataExport().post(
  createDataExportTaskRequest,
);
await rc.revoke();
```

- `createDataExportTaskRequest` is of type
  [CreateDataExportTaskRequest](./definitions/CreateDataExportTaskRequest.ts)
- `result` is of type [DataExportTask](./definitions/DataExportTask.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Compliance-Exports-createDataExportTaskNew)
in API Explorer.

## readDataExportTaskNew

Get Data Export Task

| Name             | Value                                     |
| ---------------- | ----------------------------------------- |
| HTTP Method      | `GET`                                     |
| Endpoint         | `/team-messaging/v1/data-export/{taskId}` |
| Rate Limit Group | `Medium`                                  |
| App Permission   | `TeamMessaging`                           |
| User Permission  | `Glip`                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().dataExport(taskId).get();
await rc.revoke();
```

- `result` is of type [DataExportTask](./definitions/DataExportTask.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Compliance-Exports-readDataExportTaskNew)
in API Explorer.

## listGroupEventsNew

List Group Events

| Name             | Value                                        |
| ---------------- | -------------------------------------------- |
| HTTP Method      | `GET`                                        |
| Endpoint         | `/team-messaging/v1/groups/{groupId}/events` |
| Rate Limit Group | `Medium`                                     |
| App Permission   | `TeamMessaging`                              |
| User Permission  | `N/A`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().groups(groupId).events().get();
await rc.revoke();
```

- `result` is of type [TMEventInfo](./definitions/TMEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-listGroupEventsNew)
in API Explorer.

## createEventByGroupIdNew

Create Event by Group ID

| Name             | Value                                        |
| ---------------- | -------------------------------------------- |
| HTTP Method      | `POST`                                       |
| Endpoint         | `/team-messaging/v1/groups/{groupId}/events` |
| Rate Limit Group | `Medium`                                     |
| App Permission   | `TeamMessaging`                              |
| User Permission  | `N/A`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().groups(groupId).events().post(
  tMCreateEventRequest,
);
await rc.revoke();
```

- `tMCreateEventRequest` is of type
  [TMCreateEventRequest](./definitions/TMCreateEventRequest.ts)
- `result` is of type [TMEventInfo](./definitions/TMEventInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Calendar-Events-createEventByGroupIdNew)
in API Explorer.

## listGlipGroupWebhooksNew

List Webhooks in Group

| Name             | Value                                          |
| ---------------- | ---------------------------------------------- |
| HTTP Method      | `GET`                                          |
| Endpoint         | `/team-messaging/v1/groups/{groupId}/webhooks` |
| Rate Limit Group | `Medium`                                       |
| App Permission   | `TeamMessaging`                                |
| User Permission  | `N/A`                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().groups(groupId).webhooks().get();
await rc.revoke();
```

- `result` is of type [TMWebhookList](./definitions/TMWebhookList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-listGlipGroupWebhooksNew)
in API Explorer.

## createGlipGroupWebhookNew

Create Webhook in Group

| Name             | Value                                          |
| ---------------- | ---------------------------------------------- |
| HTTP Method      | `POST`                                         |
| Endpoint         | `/team-messaging/v1/groups/{groupId}/webhooks` |
| Rate Limit Group | `Medium`                                       |
| App Permission   | `TeamMessaging`                                |
| User Permission  | `N/A`                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().groups(groupId).webhooks().post();
await rc.revoke();
```

- `result` is of type [TMWebhookInfo](./definitions/TMWebhookInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-createGlipGroupWebhookNew)
in API Explorer.

## publishNoteNew

Publish Note

| Name             | Value                                       |
| ---------------- | ------------------------------------------- |
| HTTP Method      | `POST`                                      |
| Endpoint         | `/team-messaging/v1/notes/{noteId}/publish` |
| Rate Limit Group | `Medium`                                    |
| App Permission   | `TeamMessaging`                             |
| User Permission  | `N/A`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().notes(noteId).publish().post();
await rc.revoke();
```

- `result` is of type [TMNoteInfo](./definitions/TMNoteInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Notes-publishNoteNew)
in API Explorer.

## unlockNoteNew

Unlock Note

| Name             | Value                                      |
| ---------------- | ------------------------------------------ |
| HTTP Method      | `POST`                                     |
| Endpoint         | `/team-messaging/v1/notes/{noteId}/unlock` |
| Rate Limit Group | `Light`                                    |
| App Permission   | `TeamMessaging`                            |
| User Permission  | `N/A`                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().notes(noteId).unlock().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Notes-unlockNoteNew)
in API Explorer.

## listRecentChatsNew

List Recent Chats

| Name             | Value                             |
| ---------------- | --------------------------------- |
| HTTP Method      | `GET`                             |
| Endpoint         | `/team-messaging/v1/recent/chats` |
| Rate Limit Group | `Light`                           |
| App Permission   | `TeamMessaging`                   |
| User Permission  | `N/A`                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().recent().chats().get(
  listRecentChatsNewParameters,
);
await rc.revoke();
```

- `listRecentChatsNewParameters` is of type
  [ListRecentChatsNewParameters](./definitions/ListRecentChatsNewParameters.ts)
- `result` is of type
  [TMChatListWithoutNavigation](./definitions/TMChatListWithoutNavigation.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listRecentChatsNew)
in API Explorer.

## leaveGlipTeamNew

Leave Team

| Name             | Value                                     |
| ---------------- | ----------------------------------------- |
| HTTP Method      | `POST`                                    |
| Endpoint         | `/team-messaging/v1/teams/{chatId}/leave` |
| Rate Limit Group | `Medium`                                  |
| App Permission   | `TeamMessaging`                           |
| User Permission  | `N/A`                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().teams(chatId).leave().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-leaveGlipTeamNew)
in API Explorer.

## unarchiveGlipTeamNew

Unarchive Team

| Name             | Value                                         |
| ---------------- | --------------------------------------------- |
| HTTP Method      | `POST`                                        |
| Endpoint         | `/team-messaging/v1/teams/{chatId}/unarchive` |
| Rate Limit Group | `Medium`                                      |
| App Permission   | `TeamMessaging`                               |
| User Permission  | `N/A`                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().teams(chatId).unarchive().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-unarchiveGlipTeamNew)
in API Explorer.

## activateGlipWebhookNew

Activate Webhook

| Name             | Value                                              |
| ---------------- | -------------------------------------------------- |
| HTTP Method      | `POST`                                             |
| Endpoint         | `/team-messaging/v1/webhooks/{webhookId}/activate` |
| Rate Limit Group | `Medium`                                           |
| App Permission   | `TeamMessaging`                                    |
| User Permission  | `N/A`                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().webhooks(webhookId).activate()
  .post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-activateGlipWebhookNew)
in API Explorer.

## suspendGlipWebhookNew

Suspend Webhook

| Name             | Value                                             |
| ---------------- | ------------------------------------------------- |
| HTTP Method      | `POST`                                            |
| Endpoint         | `/team-messaging/v1/webhooks/{webhookId}/suspend` |
| Rate Limit Group | `Medium`                                          |
| App Permission   | `TeamMessaging`                                   |
| User Permission  | `N/A`                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().webhooks(webhookId).suspend().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Incoming-Webhooks-suspendGlipWebhookNew)
in API Explorer.

## rcwConfigListAllSessions

List Sessions across Multiple Webinars

| Name             | Value                                |
| ---------------- | ------------------------------------ |
| HTTP Method      | `GET`                                |
| Endpoint         | `/webinar/configuration/v1/sessions` |
| Rate Limit Group | `Heavy`                              |
| App Permission   | `ReadWebinars`                       |
| User Permission  | `N/A`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().sessions().get(
  rcwConfigListAllSessionsParameters,
);
await rc.revoke();
```

- `rcwConfigListAllSessionsParameters` is of type
  [RcwConfigListAllSessionsParameters](./definitions/RcwConfigListAllSessionsParameters.ts)
- `result` is of type
  [WcsSessionGlobalListResource](./definitions/WcsSessionGlobalListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinars-and-Sessions-rcwConfigListAllSessions)
in API Explorer.

## rcwConfigListWebinars

List User's Webinars

| Name             | Value                                |
| ---------------- | ------------------------------------ |
| HTTP Method      | `GET`                                |
| Endpoint         | `/webinar/configuration/v1/webinars` |
| Rate Limit Group | `Heavy`                              |
| App Permission   | `ReadWebinars`                       |
| User Permission  | `N/A`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars().list(
  rcwConfigListWebinarsParameters,
);
await rc.revoke();
```

- `rcwConfigListWebinarsParameters` is of type
  [RcwConfigListWebinarsParameters](./definitions/RcwConfigListWebinarsParameters.ts)
- `result` is of type
  [WebinarListResource](./definitions/WebinarListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinars-and-Sessions-rcwConfigListWebinars)
in API Explorer.

## rcwConfigCreateWebinar

Create Webinar

| Name             | Value                                |
| ---------------- | ------------------------------------ |
| HTTP Method      | `POST`                               |
| Endpoint         | `/webinar/configuration/v1/webinars` |
| Rate Limit Group | `Heavy`                              |
| App Permission   | `EditWebinars`                       |
| User Permission  | `N/A`                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars().post(
  webinarCreationRequest,
);
await rc.revoke();
```

- `webinarCreationRequest` is of type
  [WebinarCreationRequest](./definitions/WebinarCreationRequest.ts)
- `result` is of type [WcsWebinarResource](./definitions/WcsWebinarResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinars-and-Sessions-rcwConfigCreateWebinar)
in API Explorer.

## rcwConfigGetWebinar

Get Webinar

| Name             | Value                                            |
| ---------------- | ------------------------------------------------ |
| HTTP Method      | `GET`                                            |
| Endpoint         | `/webinar/configuration/v1/webinars/{webinarId}` |
| Rate Limit Group | `Heavy`                                          |
| App Permission   | `ReadWebinars`                                   |
| User Permission  | `N/A`                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars(webinarId).get();
await rc.revoke();
```

- `result` is of type [WcsWebinarResource](./definitions/WcsWebinarResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinars-and-Sessions-rcwConfigGetWebinar)
in API Explorer.

## rcwConfigDeleteWebinar

Delete Webinar

| Name             | Value                                            |
| ---------------- | ------------------------------------------------ |
| HTTP Method      | `DELETE`                                         |
| Endpoint         | `/webinar/configuration/v1/webinars/{webinarId}` |
| Rate Limit Group | `Heavy`                                          |
| App Permission   | `EditWebinars`                                   |
| User Permission  | `N/A`                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars(webinarId)
  .delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Webinars-and-Sessions-rcwConfigDeleteWebinar)
in API Explorer.

## rcwConfigUpdateWebinar

Update Webinar

| Name             | Value                                            |
| ---------------- | ------------------------------------------------ |
| HTTP Method      | `PATCH`                                          |
| Endpoint         | `/webinar/configuration/v1/webinars/{webinarId}` |
| Rate Limit Group | `Heavy`                                          |
| App Permission   | `EditWebinars`                                   |
| User Permission  | `N/A`                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars(webinarId).patch(
  webinarBaseModel,
);
await rc.revoke();
```

- `webinarBaseModel` is of type
  [WebinarBaseModel](./definitions/WebinarBaseModel.ts)
- `result` is of type [WcsWebinarResource](./definitions/WcsWebinarResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinars-and-Sessions-rcwConfigUpdateWebinar)
in API Explorer.

## rcwHistoryListRecordings

List Webinar Recordings

| Name             | Value                            |
| ---------------- | -------------------------------- |
| HTTP Method      | `GET`                            |
| Endpoint         | `/webinar/history/v1/recordings` |
| Rate Limit Group | `Heavy`                          |
| App Permission   | `ReadWebinars`                   |
| User Permission  | `N/A`                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().recordings().list(
  rcwHistoryListRecordingsParameters,
);
await rc.revoke();
```

- `rcwHistoryListRecordingsParameters` is of type
  [RcwHistoryListRecordingsParameters](./definitions/RcwHistoryListRecordingsParameters.ts)
- `result` is of type
  [RecordingListResource](./definitions/RecordingListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Recordings-rcwHistoryListRecordings)
in API Explorer.

## rcwHistoryGetRecording

Get Webinar Recording

| Name             | Value                                          |
| ---------------- | ---------------------------------------------- |
| HTTP Method      | `GET`                                          |
| Endpoint         | `/webinar/history/v1/recordings/{recordingId}` |
| Rate Limit Group | `Heavy`                                        |
| App Permission   | `ReadWebinars`                                 |
| User Permission  | `N/A`                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().recordings(recordingId).get();
await rc.revoke();
```

- `result` is of type
  [RecordingItemExtendedModel](./definitions/RecordingItemExtendedModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Recordings-rcwHistoryGetRecording)
in API Explorer.

## removeGlipTeamMembersNew

Remove Team Members

| Name             | Value                                      |
| ---------------- | ------------------------------------------ |
| HTTP Method      | `POST`                                     |
| Endpoint         | `/team-messaging/v1/teams/{chatId}/remove` |
| Rate Limit Group | `Medium`                                   |
| App Permission   | `TeamMessaging`                            |
| User Permission  | `N/A`                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().teams(chatId).remove().post(
  tMRemoveTeamMembersRequest,
);
await rc.revoke();
```

- `tMRemoveTeamMembersRequest` is of type
  [TMRemoveTeamMembersRequest](./definitions/TMRemoveTeamMembersRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-removeGlipTeamMembersNew)
in API Explorer.

## archiveGlipTeamNew

Archive Team

| Name             | Value                                       |
| ---------------- | ------------------------------------------- |
| HTTP Method      | `POST`                                      |
| Endpoint         | `/team-messaging/v1/teams/{chatId}/archive` |
| Rate Limit Group | `Medium`                                    |
| App Permission   | `TeamMessaging`                             |
| User Permission  | `N/A`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().teams(chatId).archive().post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Teams-archiveGlipTeamNew)
in API Explorer.

## completeTaskNew

Complete Task

| Name             | Value                                        |
| ---------------- | -------------------------------------------- |
| HTTP Method      | `POST`                                       |
| Endpoint         | `/team-messaging/v1/tasks/{taskId}/complete` |
| Rate Limit Group | `Medium`                                     |
| App Permission   | `TeamMessaging`                              |
| User Permission  | `N/A`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().tasks(taskId).complete().post(
  tMCompleteTaskRequest,
);
await rc.revoke();
```

- `tMCompleteTaskRequest` is of type
  [TMCompleteTaskRequest](./definitions/TMCompleteTaskRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Tasks-completeTaskNew)
in API Explorer.

## rcwHistoryAdminListRecordings

List Webinar Recordings (Admin)

| Name             | Value                                    |
| ---------------- | ---------------------------------------- |
| HTTP Method      | `GET`                                    |
| Endpoint         | `/webinar/history/v1/company/recordings` |
| Rate Limit Group | `Heavy`                                  |
| App Permission   | `ReadWebinars`                           |
| User Permission  | `N/A`                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().company().recordings().list(
  rcwHistoryAdminListRecordingsParameters,
);
await rc.revoke();
```

- `rcwHistoryAdminListRecordingsParameters` is of type
  [RcwHistoryAdminListRecordingsParameters](./definitions/RcwHistoryAdminListRecordingsParameters.ts)
- `result` is of type
  [RecordingAdminListResource](./definitions/RecordingAdminListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Recordings-rcwHistoryAdminListRecordings)
in API Explorer.

## rcwHistoryAdminGetRecording

Get Webinar Recording (Admin)

| Name             | Value                                                  |
| ---------------- | ------------------------------------------------------ |
| HTTP Method      | `GET`                                                  |
| Endpoint         | `/webinar/history/v1/company/recordings/{recordingId}` |
| Rate Limit Group | `Heavy`                                                |
| App Permission   | `ReadWebinars`                                         |
| User Permission  | `N/A`                                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().company().recordings(recordingId)
  .get();
await rc.revoke();
```

- `result` is of type
  [RecordingAdminExtendedItemModel](./definitions/RecordingAdminExtendedItemModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Recordings-rcwHistoryAdminGetRecording)
in API Explorer.

## rcwHistoryListAllCompanySessions

List Historical Webinar Sessions across Multiple Webinars / Hosts

| Name             | Value                                  |
| ---------------- | -------------------------------------- |
| HTTP Method      | `GET`                                  |
| Endpoint         | `/webinar/history/v1/company/sessions` |
| Rate Limit Group | `Heavy`                                |
| App Permission   | `ReadWebinars`                         |
| User Permission  | `N/A`                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().company().sessions().get(
  rcwHistoryListAllCompanySessionsParameters,
);
await rc.revoke();
```

- `rcwHistoryListAllCompanySessionsParameters` is of type
  [RcwHistoryListAllCompanySessionsParameters](./definitions/RcwHistoryListAllCompanySessionsParameters.ts)
- `result` is of type
  [SessionGlobalListResource](./definitions/SessionGlobalListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Webinars-rcwHistoryListAllCompanySessions)
in API Explorer.

## rcwHistoryGetSession

Get Historical Webinar Session

| Name             | Value                                                           |
| ---------------- | --------------------------------------------------------------- |
| HTTP Method      | `GET`                                                           |
| Endpoint         | `/webinar/history/v1/webinars/{webinarId}/sessions/{sessionId}` |
| Rate Limit Group | `Heavy`                                                         |
| App Permission   | `ReadWebinars`                                                  |
| User Permission  | `N/A`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().webinars(webinarId).sessions(
  sessionId,
).get();
await rc.revoke();
```

- `result` is of type
  [HistorySessionResource](./definitions/HistorySessionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Webinars-rcwHistoryGetSession)
in API Explorer.

## caiAnalyzeInteraction

Interaction Analytics

| Name             | Value                                       |
| ---------------- | ------------------------------------------- |
| HTTP Method      | `POST`                                      |
| Endpoint         | `/ai/insights/v1/async/analyze-interaction` |
| Rate Limit Group | `Heavy`                                     |
| App Permission   | `AI`                                        |
| User Permission  | `N/A`                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().insights().v1().async().analyzeInteraction().post(
  interactionInput,
  caiAnalyzeInteractionParameters,
);
await rc.revoke();
```

- `interactionInput` is of type
  [InteractionInput](./definitions/InteractionInput.ts)
- `caiAnalyzeInteractionParameters` is of type
  [CaiAnalyzeInteractionParameters](./definitions/CaiAnalyzeInteractionParameters.ts)
- `result` is of type
  [CaiAsyncApiResponse](./definitions/CaiAsyncApiResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Insights-caiAnalyzeInteraction)
in API Explorer.

## getExtensionRecordings

List User Recordings

| Name             | Value                                                                |
| ---------------- | -------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                |
| Endpoint         | `/rcvideo/v1/account/{accountId}/extension/{extensionId}/recordings` |
| Rate Limit Group | `Light`                                                              |
| App Permission   | `Video`                                                              |
| User Permission  | `N/A`                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v1().account(accountId).extension(extensionId)
  .recordings().get(getExtensionRecordingsParameters);
await rc.revoke();
```

- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `getExtensionRecordingsParameters` is of type
  [GetExtensionRecordingsParameters](./definitions/GetExtensionRecordingsParameters.ts)
- `result` is of type [CloudRecordings](./definitions/CloudRecordings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Recordings-getExtensionRecordings)
in API Explorer.

## rcvListDelegators

List Delegators

| Name             | Value                                                                  |
| ---------------- | ---------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                  |
| Endpoint         | `/rcvideo/v1/accounts/{accountId}/extensions/{extensionId}/delegators` |
| Rate Limit Group | `Medium`                                                               |
| App Permission   | `Video`                                                                |
| User Permission  | `N/A`                                                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v1().accounts(accountId).extensions(extensionId)
  .delegators().get();
await rc.revoke();
```

- `result` is of type
  [DelegatorsListResult](./definitions/DelegatorsListResult.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Delegation-Management-rcvListDelegators)
in API Explorer.

## replacePhoneNumberV2

Replace Phone Number

| Name             | Value                                                                    |
| ---------------- | ------------------------------------------------------------------------ |
| HTTP Method      | `POST`                                                                   |
| Endpoint         | `/restapi/v2/accounts/{accountId}/phone-numbers/{phoneNumberId}/replace` |
| Rate Limit Group | `Medium`                                                                 |
| App Permission   | `EditAccounts`                                                           |
| User Permission  | `EditCompanyPhoneNumbers`                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).phoneNumbers(
  phoneNumberId,
).replace().post(replacePhoneNumberRequest);
await rc.revoke();
```

- `replacePhoneNumberRequest` is of type
  [ReplacePhoneNumberRequest](./definitions/ReplacePhoneNumberRequest.ts)
- `result` is of type
  [AccountPhoneNumberInfo](./definitions/AccountPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-replacePhoneNumberV2)
in API Explorer.

## sendActivationEmailV2

Send/Resend Activation Email

| Name             | Value                                                    |
| ---------------- | -------------------------------------------------------- |
| HTTP Method      | `POST`                                                   |
| Endpoint         | `/restapi/v2/accounts/{accountId}/send-activation-email` |
| Rate Limit Group | `Medium`                                                 |
| App Permission   | `EditAccounts`                                           |
| User Permission  | `AccountAdministration`                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).sendActivationEmail()
  .post();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Company-sendActivationEmailV2)
in API Explorer.

## sendWelcomeEmailV2

Send Welcome Email

| Name             | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| HTTP Method      | `POST`                                                |
| Endpoint         | `/restapi/v2/accounts/{accountId}/send-welcome-email` |
| Rate Limit Group | `Medium`                                              |
| App Permission   | `EditExtensions`                                      |
| User Permission  | `Users`                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).sendWelcomeEmail()
  .post(sendWelcomeEmailV2Request);
await rc.revoke();
```

- `sendWelcomeEmailV2Request` is of type
  [SendWelcomeEmailV2Request](./definitions/SendWelcomeEmailV2Request.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Company-sendWelcomeEmailV2)
in API Explorer.

## exportSmsConsentRecords

Export SMS Consent Records

| Name             | Value                                                  |
| ---------------- | ------------------------------------------------------ |
| HTTP Method      | `GET`                                                  |
| Endpoint         | `/restapi/v2/accounts/{accountId}/sms/consents/export` |
| Rate Limit Group | `Light`                                                |
| App Permission   | `SMS`                                                  |
| User Permission  | `N/A`                                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).sms().consents()
  .export().get();
await rc.revoke();
```

- `result` is a string

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Consents-exportSmsConsentRecords)
in API Explorer.

## addressBookBulkUpload

Upload Multiple User Contacts

| Name             | Value                                                                |
| ---------------- | -------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/address-book-bulk-upload` |
| Rate Limit Group | `Heavy`                                                              |
| App Permission   | `Contacts`                                                           |
| User Permission  | `EditPersonalContacts`                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .addressBookBulkUpload().post(addressBookBulkUploadRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `addressBookBulkUploadRequest` is of type
  [AddressBookBulkUploadRequest](./definitions/AddressBookBulkUploadRequest.ts)
- `result` is of type
  [AddressBookBulkUploadResponse](./definitions/AddressBookBulkUploadResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-addressBookBulkUpload)
in API Explorer.

## listCallMonitoringGroups

List Call Monitoring Groups

| Name             | Value                                                              |
| ---------------- | ------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-monitoring-groups` |
| Rate Limit Group | `Medium`                                                           |
| App Permission   | `ReadAccounts`                                                     |
| User Permission  | `ReadExtensions`                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .callMonitoringGroups().get(listCallMonitoringGroupsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCallMonitoringGroupsParameters` is of type
  [ListCallMonitoringGroupsParameters](./definitions/ListCallMonitoringGroupsParameters.ts)
- `result` is of type
  [CallMonitoringGroups](./definitions/CallMonitoringGroups.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-listCallMonitoringGroups)
in API Explorer.

## createCallMonitoringGroup

Create Call Monitoring Group

| Name             | Value                                                              |
| ---------------- | ------------------------------------------------------------------ |
| HTTP Method      | `POST`                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-monitoring-groups` |
| Rate Limit Group | `Medium`                                                           |
| App Permission   | `EditExtensions`                                                   |
| User Permission  | `Groups`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .callMonitoringGroups().post(createCallMonitoringGroupRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createCallMonitoringGroupRequest` is of type
  [CreateCallMonitoringGroupRequest](./definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type
  [CallMonitoringGroup](./definitions/CallMonitoringGroup.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-createCallMonitoringGroup)
in API Explorer.

## updateCallMonitoringGroup

Update Call Monitoring Group

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}` |
| Rate Limit Group | `Medium`                                                                     |
| App Permission   | `EditExtensions`                                                             |
| User Permission  | `Groups`                                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .callMonitoringGroups(groupId).put(createCallMonitoringGroupRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createCallMonitoringGroupRequest` is of type
  [CreateCallMonitoringGroupRequest](./definitions/CreateCallMonitoringGroupRequest.ts)
- `result` is of type
  [CallMonitoringGroup](./definitions/CallMonitoringGroup.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-updateCallMonitoringGroup)
in API Explorer.

## deleteCallMonitoringGroup

Delete Call Monitoring Group

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}` |
| Rate Limit Group | `Medium`                                                                     |
| App Permission   | `EditExtensions`                                                             |
| User Permission  | `Groups`                                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .callMonitoringGroups(groupId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-deleteCallMonitoringGroup)
in API Explorer.

## assignMultipleCallQueueMembers

Assign Multiple Call Queue Members

| Name             | Value                                                                         |
| ---------------- | ----------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/bulk-assign` |
| Rate Limit Group | `Heavy`                                                                       |
| App Permission   | `EditExtensions`                                                              |
| User Permission  | `Groups`                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callQueues(groupId)
  .bulkAssign().post(callQueueBulkAssignResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callQueueBulkAssignResource` is of type
  [CallQueueBulkAssignResource](./definitions/CallQueueBulkAssignResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-assignMultipleCallQueueMembers)
in API Explorer.

## listCallRecordingExtensions

Get Call Recording Extension List

| Name             | Value                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-recording/extensions` |
| Rate Limit Group | `Medium`                                                              |
| App Permission   | `ReadAccounts`                                                        |
| User Permission  | `ReadCompanyInfo`                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callRecording()
  .extensions().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [CallRecordingExtensions](./definitions/CallRecordingExtensions.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-listCallRecordingExtensions)
in API Explorer.

## searchDirectoryEntries

Search Company Directory Entries

| Name             | Value                                                                |
| ---------------- | -------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/directory/entries/search` |
| Rate Limit Group | `Heavy`                                                              |
| App Permission   | `ReadAccounts`                                                       |
| User Permission  | `ReadExtensions`                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).directory()
  .entries().search().post(
    searchDirectoryEntriesRequest,
    searchDirectoryEntriesParameters,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `searchDirectoryEntriesRequest` is of type
  [SearchDirectoryEntriesRequest](./definitions/SearchDirectoryEntriesRequest.ts)
- `searchDirectoryEntriesParameters` is of type
  [SearchDirectoryEntriesParameters](./definitions/SearchDirectoryEntriesParameters.ts)
- `result` is of type [DirectoryResource](./definitions/DirectoryResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-searchDirectoryEntries)
in API Explorer.

## listExtensionActiveCalls

List User Active Calls

| Name             | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/active-calls` |
| Rate Limit Group | `Heavy`                                                                          |
| App Permission   | `ReadCallLog`                                                                    |
| User Permission  | `ReadCallLog`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).activeCalls().get(listExtensionActiveCallsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listExtensionActiveCallsParameters` is of type
  [ListExtensionActiveCallsParameters](./definitions/ListExtensionActiveCallsParameters.ts)
- `result` is of type [CallLogResponse](./definitions/CallLogResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-listExtensionActiveCalls)
in API Explorer.

## listAnsweringRules

List Call Handling Rules

| Name             | Value                                                                              |
| ---------------- | ---------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule` |
| Rate Limit Group | `Medium`                                                                           |
| App Permission   | `ReadAccounts`                                                                     |
| User Permission  | `ReadUserAnsweringRules`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).answeringRule().list(listAnsweringRulesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listAnsweringRulesParameters` is of type
  [ListAnsweringRulesParameters](./definitions/ListAnsweringRulesParameters.ts)
- `result` is of type
  [UserAnsweringRuleList](./definitions/UserAnsweringRuleList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-listAnsweringRules)
in API Explorer.

## createAnsweringRule

Create Call Handling Rule

| Name             | Value                                                                              |
| ---------------- | ---------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule` |
| Rate Limit Group | `Medium`                                                                           |
| App Permission   | `EditExtensions`                                                                   |
| User Permission  | `EditUserAnsweringRules`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).answeringRule().post(createAnsweringRuleRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createAnsweringRuleRequest` is of type
  [CreateAnsweringRuleRequest](./definitions/CreateAnsweringRuleRequest.ts)
- `result` is of type
  [CustomAnsweringRuleInfo](./definitions/CustomAnsweringRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-createAnsweringRule)
in API Explorer.

## readAnsweringRule

Get Call Handling Rule

| Name             | Value                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}` |
| Rate Limit Group | `Light`                                                                                     |
| App Permission   | `ReadAccounts`                                                                              |
| User Permission  | `ReadUserAnsweringRules`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).answeringRule(ruleId).get(readAnsweringRuleParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readAnsweringRuleParameters` is of type
  [ReadAnsweringRuleParameters](./definitions/ReadAnsweringRuleParameters.ts)
- `result` is of type
  [CallHandlingRuleInfo](./definitions/CallHandlingRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-readAnsweringRule)
in API Explorer.

## updateAnsweringRule

Update Call Handling Rule

| Name             | Value                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}` |
| Rate Limit Group | `Medium`                                                                                    |
| App Permission   | `EditExtensions`                                                                            |
| User Permission  | `EditUserAnsweringRules`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).answeringRule(ruleId).put(updateAnsweringRuleRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `updateAnsweringRuleRequest` is of type
  [UpdateAnsweringRuleRequest](./definitions/UpdateAnsweringRuleRequest.ts)
- `result` is of type
  [CallHandlingRuleInfo](./definitions/CallHandlingRuleInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-updateAnsweringRule)
in API Explorer.

## deleteAnsweringRule

Delete Call Handling Rule

| Name             | Value                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}` |
| Rate Limit Group | `Medium`                                                                                    |
| App Permission   | `EditExtensions`                                                                            |
| User Permission  | `EditUserAnsweringRules`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).answeringRule(ruleId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Handling-Rules-deleteAnsweringRule)
in API Explorer.

## listOfAvailableForAssigningRoles

List Assignable Roles

| Name             | Value                                                                                |
| ---------------- | ------------------------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assignable-roles` |
| Rate Limit Group | `Medium`                                                                             |
| App Permission   | `RoleManagement`                                                                     |
| User Permission  | `N/A`                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).assignableRoles().get(listOfAvailableForAssigningRolesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listOfAvailableForAssigningRolesParameters` is of type
  [ListOfAvailableForAssigningRolesParameters](./definitions/ListOfAvailableForAssigningRolesParameters.ts)
- `result` is of type
  [RolesCollectionResource](./definitions/RolesCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-listOfAvailableForAssigningRoles)
in API Explorer.

## listUserAssignedRoles

List User Assigned Roles

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role` |
| Rate Limit Group | `Light`                                                                           |
| App Permission   | `ReadAccounts`                                                                    |
| User Permission  | `ReadAssignedRoles`                                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).assignedRole().get(listUserAssignedRolesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listUserAssignedRolesParameters` is of type
  [ListUserAssignedRolesParameters](./definitions/ListUserAssignedRolesParameters.ts)
- `result` is of type
  [AssignedRolesResource](./definitions/AssignedRolesResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-listUserAssignedRoles)
in API Explorer.

## updateUserAssignedRoles

Update User Assigned Roles

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role` |
| Rate Limit Group | `Medium`                                                                          |
| App Permission   | `RoleManagement`                                                                  |
| User Permission  | `EditAssignedRoles`                                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).assignedRole().put(assignedRolesResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `assignedRolesResource` is of type
  [AssignedRolesResource](./definitions/AssignedRolesResource.ts)
- `result` is of type
  [AssignedRolesResource](./definitions/AssignedRolesResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-updateUserAssignedRoles)
in API Explorer.

## readAuthorizationProfile

Get Authorization Profile

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/authz-profile` |
| Rate Limit Group | `Medium`                                                                          |
| App Permission   | `N/A`                                                                             |
| User Permission  | `N/A`                                                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).authzProfile().get(readAuthorizationProfileParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readAuthorizationProfileParameters` is of type
  [ReadAuthorizationProfileParameters](./definitions/ReadAuthorizationProfileParameters.ts)
- `result` is of type
  [AuthProfileResource](./definitions/AuthProfileResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-readAuthorizationProfile)
in API Explorer.

## readUserBusinessHours

Get User Business Hours

| Name             | Value                                                                              |
| ---------------- | ---------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/business-hours` |
| Rate Limit Group | `Light`                                                                            |
| App Permission   | `ReadAccounts`                                                                     |
| User Permission  | `ReadExtensions`                                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).businessHours().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [GetUserBusinessHoursResponse](./definitions/GetUserBusinessHoursResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-readUserBusinessHours)
in API Explorer.

## updateUserBusinessHours

Update User Business Hours

| Name             | Value                                                                              |
| ---------------- | ---------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/business-hours` |
| Rate Limit Group | `Medium`                                                                           |
| App Permission   | `EditExtensions`                                                                   |
| User Permission  | `EditUserAnsweringRules`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).businessHours().put(userBusinessHoursUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `userBusinessHoursUpdateRequest` is of type
  [UserBusinessHoursUpdateRequest](./definitions/UserBusinessHoursUpdateRequest.ts)
- `result` is of type
  [UserBusinessHoursUpdateResponse](./definitions/UserBusinessHoursUpdateResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-updateUserBusinessHours)
in API Explorer.

## syncUserCallLog

Sync User Call Log

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log-sync` |
| Rate Limit Group | `Heavy`                                                                           |
| App Permission   | `ReadCallLog`                                                                     |
| User Permission  | `ReadCallLog`                                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callLogSync().get(syncUserCallLogParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `syncUserCallLogParameters` is of type
  [SyncUserCallLogParameters](./definitions/SyncUserCallLogParameters.ts)
- `result` is of type
  [CallLogSyncResponse](./definitions/CallLogSyncResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-syncUserCallLog)
in API Explorer.

## readCallerBlockingSettings

Get Caller Blocking Settings

| Name             | Value                                                                               |
| ---------------- | ----------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking` |
| Rate Limit Group | `Light`                                                                             |
| App Permission   | `ReadAccounts`                                                                      |
| User Permission  | `ReadBlockedNumbers`                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callerBlocking().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [CallerBlockingSettings](./definitions/CallerBlockingSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-readCallerBlockingSettings)
in API Explorer.

## updateCallerBlockingSettings

Update Caller Blocking Settings

| Name             | Value                                                                               |
| ---------------- | ----------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking` |
| Rate Limit Group | `Light`                                                                             |
| App Permission   | `EditExtensions`                                                                    |
| User Permission  | `EditBlockedNumbers`                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callerBlocking().put(callerBlockingSettingsUpdate);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `callerBlockingSettingsUpdate` is of type
  [CallerBlockingSettingsUpdate](./definitions/CallerBlockingSettingsUpdate.ts)
- `result` is of type
  [CallerBlockingSettings](./definitions/CallerBlockingSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-updateCallerBlockingSettings)
in API Explorer.

## createInternalTextMessage

Create Internal Text Message

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/company-pager` |
| Rate Limit Group | `Medium`                                                                          |
| App Permission   | `InternalMessages`                                                                |
| User Permission  | `InternalSMS`                                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).companyPager().post(createInternalTextMessageRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createInternalTextMessageRequest` is of type
  [CreateInternalTextMessageRequest](./definitions/CreateInternalTextMessageRequest.ts)
- `result` is of type
  [GetInternalTextMessageInfoResponse](./definitions/GetInternalTextMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Pager-Messages-createInternalTextMessage)
in API Explorer.

## readConferencingSettings

Get User Conferencing Settings

| Name             | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/conferencing` |
| Rate Limit Group | `Light`                                                                          |
| App Permission   | `ReadAccounts`                                                                   |
| User Permission  | `OrganizeConference`                                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).conferencing().get(readConferencingSettingsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readConferencingSettingsParameters` is of type
  [ReadConferencingSettingsParameters](./definitions/ReadConferencingSettingsParameters.ts)
- `result` is of type
  [GetConferencingInfoResponse](./definitions/GetConferencingInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readConferencingSettings)
in API Explorer.

## updateConferencingSettings

Update User Conferencing Settings

| Name             | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/conferencing` |
| Rate Limit Group | `Medium`                                                                         |
| App Permission   | `EditExtensions`                                                                 |
| User Permission  | `OrganizeConference`                                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).conferencing().put(updateConferencingInfoRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `updateConferencingInfoRequest` is of type
  [UpdateConferencingInfoRequest](./definitions/UpdateConferencingInfoRequest.ts)
- `result` is of type
  [GetConferencingInfoResponse](./definitions/GetConferencingInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateConferencingSettings)
in API Explorer.

## readGreetingContent

Get Extension Greeting Media Content

| Name             | Value                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/greeting/{greetingId}/content` |
| Rate Limit Group | `Heavy`                                                                                           |
| App Permission   | `ReadAccounts`                                                                                    |
| User Permission  | `N/A`                                                                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).greeting(greetingId).content().get(readGreetingContentParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readGreetingContentParameters` is of type
  [ReadGreetingContentParameters](./definitions/ReadGreetingContentParameters.ts)
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to
[Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#Greetings-readGreetingContent)
in API Explorer.

## listMessages

List Messages

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store` |
| Rate Limit Group | `Light`                                                                           |
| App Permission   | `ReadMessages`                                                                    |
| User Permission  | `ReadMessages`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageStore().list(listMessagesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listMessagesParameters` is of type
  [ListMessagesParameters](./definitions/ListMessagesParameters.ts)
- `result` is of type [GetMessageList](./definitions/GetMessageList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-listMessages)
in API Explorer.

## deleteMessageByFilter

Delete Conversation

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                          |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store` |
| Rate Limit Group | `Medium`                                                                          |
| App Permission   | `EditMessages`                                                                    |
| User Permission  | `EditMessages`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageStore().deleteAll(deleteMessageByFilterParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `deleteMessageByFilterParameters` is of type
  [DeleteMessageByFilterParameters](./definitions/DeleteMessageByFilterParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-deleteMessageByFilter)
in API Explorer.

## readMessage

Get Message(s)

| Name             | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}` |
| Rate Limit Group | `Light`                                                                                       |
| App Permission   | `ReadMessages`                                                                                |
| User Permission  | `ReadMessages`                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageStore(messageId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [GetMessageInfoResponse](./definitions/GetMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessage)
in API Explorer.

## updateMessage

Update Message(s)

| Name             | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}` |
| Rate Limit Group | `Medium`                                                                                      |
| App Permission   | `EditMessages`                                                                                |
| User Permission  | `EditMessages`                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageStore(messageId).put(updateMessageRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `updateMessageRequest` is of type
  [UpdateMessageRequest](./definitions/UpdateMessageRequest.ts)
- `result` is of type
  [GetMessageInfoResponse](./definitions/GetMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-updateMessage)
in API Explorer.

## deleteMessage

Delete Message

| Name             | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}` |
| Rate Limit Group | `Medium`                                                                                      |
| App Permission   | `EditMessages`                                                                                |
| User Permission  | `EditMessages`                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageStore(messageId).delete(
  deleteMessageBulkRequest,
  deleteMessageParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `deleteMessageBulkRequest` is of type
  [DeleteMessageBulkRequest](./definitions/DeleteMessageBulkRequest.ts)
- `deleteMessageParameters` is of type
  [DeleteMessageParameters](./definitions/DeleteMessageParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-deleteMessage)
in API Explorer.

## patchMessage

Patch Message(s)

| Name             | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| HTTP Method      | `PATCH`                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}` |
| Rate Limit Group | `Medium`                                                                                      |
| App Permission   | `EditMessages`                                                                                |
| User Permission  | `EditMessages`                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageStore(messageId).patch(patchMessageRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `patchMessageRequest` is of type
  [PatchMessageRequest](./definitions/PatchMessageRequest.ts)
- `result` is of type
  [GetMessageInfoResponse](./definitions/GetMessageInfoResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-patchMessage)
in API Explorer.

## syncMessages

Sync Messages

| Name             | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-sync` |
| Rate Limit Group | `Light`                                                                          |
| App Permission   | `ReadMessages`                                                                   |
| User Permission  | `ReadMessages`                                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageSync().get(syncMessagesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `syncMessagesParameters` is of type
  [SyncMessagesParameters](./definitions/SyncMessagesParameters.ts)
- `result` is of type
  [GetMessageSyncResponse](./definitions/GetMessageSyncResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-syncMessages)
in API Explorer.

## listExtensionPhoneNumbers

Get Extension Phone Number List

| Name             | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/phone-number` |
| Rate Limit Group | `Light`                                                                          |
| App Permission   | `ReadAccounts`                                                                   |
| User Permission  | `ReadUserPhoneNumbers`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).phoneNumber().get(listExtensionPhoneNumbersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listExtensionPhoneNumbersParameters` is of type
  [ListExtensionPhoneNumbersParameters](./definitions/ListExtensionPhoneNumbersParameters.ts)
- `result` is of type
  [GetExtensionPhoneNumbersResponse](./definitions/GetExtensionPhoneNumbersResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-listExtensionPhoneNumbers)
in API Explorer.

## readUserProfileImageLegacy

Get User Profile Image

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image` |
| Rate Limit Group | `Medium`                                                                          |
| App Permission   | `ReadAccounts`                                                                    |
| User Permission  | `ReadExtensions`                                                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).profileImage().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to
[Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readUserProfileImageLegacy)
in API Explorer.

## createUserProfileImage

Upload User Profile Image

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image` |
| Rate Limit Group | `Heavy`                                                                           |
| App Permission   | `EditExtensions`                                                                  |
| User Permission  | `EditUserInfo`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).profileImage().post(createUserProfileImageRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createUserProfileImageRequest` is of type
  [CreateUserProfileImageRequest](./definitions/CreateUserProfileImageRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-createUserProfileImage)
in API Explorer.

## updateUserProfileImage

Update User Profile Image

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image` |
| Rate Limit Group | `Heavy`                                                                           |
| App Permission   | `EditExtensions`                                                                  |
| User Permission  | `EditUserInfo`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).profileImage().put(updateUserProfileImageRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `updateUserProfileImageRequest` is of type
  [UpdateUserProfileImageRequest](./definitions/UpdateUserProfileImageRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateUserProfileImage)
in API Explorer.

## deleteUserProfileImage

Delete User Profile Image

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                          |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image` |
| Rate Limit Group | `Medium`                                                                          |
| App Permission   | `EditExtensions`                                                                  |
| User Permission  | `EditUserInfo`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).profileImage().delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-deleteUserProfileImage)
in API Explorer.

## readScaledProfileImage

Get Scaled Profile Image

| Name             | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}` |
| Rate Limit Group | `Medium`                                                                                      |
| App Permission   | `ReadAccounts`                                                                                |
| User Permission  | `N/A`                                                                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).profileImage(scaleSize).get(readScaledProfileImageParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readScaledProfileImageParameters` is of type
  [ReadScaledProfileImageParameters](./definitions/ReadScaledProfileImageParameters.ts)
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to
[Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readScaledProfileImage)
in API Explorer.

## listCompanyMessageTemplates

List Company Message Templates

| Name             | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/message-store-templates` |
| Rate Limit Group | `Light`                                                             |
| App Permission   | `ReadAccounts`                                                      |
| User Permission  | `N/A`                                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .messageStoreTemplates().list(listCompanyMessageTemplatesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCompanyMessageTemplatesParameters` is of type
  [ListCompanyMessageTemplatesParameters](./definitions/ListCompanyMessageTemplatesParameters.ts)
- `result` is of type
  [MessageTemplatesListResponse](./definitions/MessageTemplatesListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Templates-listCompanyMessageTemplates)
in API Explorer.

## createCompanyMessageTemplate

Create Company Message Template

| Name             | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/message-store-templates` |
| Rate Limit Group | `Medium`                                                            |
| App Permission   | `EditAccounts`                                                      |
| User Permission  | `N/A`                                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .messageStoreTemplates().post(messageTemplateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `messageTemplateRequest` is of type
  [MessageTemplateRequest](./definitions/MessageTemplateRequest.ts)
- `result` is of type
  [MessageTemplateResponse](./definitions/MessageTemplateResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Templates-createCompanyMessageTemplate)
in API Explorer.

## readCompanyMessageTemplate

Get Company Message Template

| Name             | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/message-store-templates/{templateId}` |
| Rate Limit Group | `Light`                                                                          |
| App Permission   | `ReadAccounts`                                                                   |
| User Permission  | `N/A`                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .messageStoreTemplates(templateId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [MessageTemplateResponse](./definitions/MessageTemplateResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Templates-readCompanyMessageTemplate)
in API Explorer.

## updateCompanyMessageTemplate

Update Company Message Template

| Name             | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/message-store-templates/{templateId}` |
| Rate Limit Group | `Medium`                                                                         |
| App Permission   | `EditAccounts`                                                                   |
| User Permission  | `N/A`                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .messageStoreTemplates(templateId).put(messageTemplateUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `messageTemplateUpdateRequest` is of type
  [MessageTemplateUpdateRequest](./definitions/MessageTemplateUpdateRequest.ts)
- `result` is of type
  [MessageTemplateResponse](./definitions/MessageTemplateResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Templates-updateCompanyMessageTemplate)
in API Explorer.

## deleteCompanyMessageTemplate

Delete Company Message Template

| Name             | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/message-store-templates/{templateId}` |
| Rate Limit Group | `Medium`                                                                         |
| App Permission   | `EditAccounts`                                                                   |
| User Permission  | `N/A`                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .messageStoreTemplates(templateId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Templates-deleteCompanyMessageTemplate)
in API Explorer.

## listPagingGroupDevices

Get Paging Group Devices

| Name             | Value                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices` |
| Rate Limit Group | `Light`                                                                                    |
| App Permission   | `ReadAccounts`                                                                             |
| User Permission  | `ReadCompanyDevices`                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).pagingOnlyGroups(
  pagingOnlyGroupId,
).devices().get(listPagingGroupDevicesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listPagingGroupDevicesParameters` is of type
  [ListPagingGroupDevicesParameters](./definitions/ListPagingGroupDevicesParameters.ts)
- `result` is of type
  [PagingOnlyGroupDevices](./definitions/PagingOnlyGroupDevices.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-listPagingGroupDevices)
in API Explorer.

## listPagingGroupUsers

Get Paging Group Users

| Name             | Value                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users` |
| Rate Limit Group | `Light`                                                                                  |
| App Permission   | `ReadAccounts`                                                                           |
| User Permission  | `ReadUserInfo`                                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).pagingOnlyGroups(
  pagingOnlyGroupId,
).users().get(listPagingGroupUsersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listPagingGroupUsersParameters` is of type
  [ListPagingGroupUsersParameters](./definitions/ListPagingGroupUsersParameters.ts)
- `result` is of type
  [PagingOnlyGroupUsers](./definitions/PagingOnlyGroupUsers.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-listPagingGroupUsers)
in API Explorer.

## readCallPartyStatus

Get Call Party Status

| Name             | Value                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}` |
| Rate Limit Group | `Light`                                                                                               |
| App Permission   | `CallControl`                                                                                         |
| User Permission  | `N/A`                                                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallParty](./definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-readCallPartyStatus)
in API Explorer.

## deleteCallParty

Delete Call Party

| Name             | Value                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}` |
| Rate Limit Group | `Light`                                                                                               |
| App Permission   | `CallControl`                                                                                         |
| User Permission  | `N/A`                                                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-deleteCallParty)
in API Explorer.

## updateCallParty

Update Call Party

| Name             | Value                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| HTTP Method      | `PATCH`                                                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}` |
| Rate Limit Group | `Light`                                                                                               |
| App Permission   | `CallControl`                                                                                         |
| User Permission  | `N/A`                                                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).patch(partyUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `partyUpdateRequest` is of type
  [PartyUpdateRequest](./definitions/PartyUpdateRequest.ts)
- `result` is of type [CallParty](./definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-updateCallParty)
in API Explorer.

## listPermissionCategories

List Permission Categories

| Name             | Value                                                  |
| ---------------- | ------------------------------------------------------ |
| HTTP Method      | `GET`                                                  |
| Endpoint         | `/restapi/{apiVersion}/dictionary/permission-category` |
| Rate Limit Group | `Light`                                                |
| App Permission   | `N/A`                                                  |
| User Permission  | `N/A`                                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().permissionCategory()
  .list(listPermissionCategoriesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listPermissionCategoriesParameters` is of type
  [ListPermissionCategoriesParameters](./definitions/ListPermissionCategoriesParameters.ts)
- `result` is of type
  [PermissionCategoryCollectionResource](./definitions/PermissionCategoryCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-listPermissionCategories)
in API Explorer.

## readPermissionCategory

Get Permission Category

| Name             | Value                                                                         |
| ---------------- | ----------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                         |
| Endpoint         | `/restapi/{apiVersion}/dictionary/permission-category/{permissionCategoryId}` |
| Rate Limit Group | `Light`                                                                       |
| App Permission   | `N/A`                                                                         |
| User Permission  | `N/A`                                                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().permissionCategory(
  permissionCategoryId,
).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type
  [PermissionCategoryResource](./definitions/PermissionCategoryResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-readPermissionCategory)
in API Explorer.

## createGlipAdaptiveCardNew

Create Adaptive Card

| Name             | Value                                              |
| ---------------- | -------------------------------------------------- |
| HTTP Method      | `POST`                                             |
| Endpoint         | `/team-messaging/v1/chats/{chatId}/adaptive-cards` |
| Rate Limit Group | `Medium`                                           |
| App Permission   | `TeamMessaging`                                    |
| User Permission  | `N/A`                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.teamMessaging().v1().chats(chatId).adaptiveCards().post(
  adaptiveCardRequest,
);
await rc.revoke();
```

- `adaptiveCardRequest` is of type
  [AdaptiveCardRequest](./definitions/AdaptiveCardRequest.ts)
- `result` is of type
  [AdaptiveCardShortInfo](./definitions/AdaptiveCardShortInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Adaptive-Cards-createGlipAdaptiveCardNew)
in API Explorer.

## rcwConfigListAllCompanySessions

List Sessions across Multiple Webinars/Hosts

| Name             | Value                                        |
| ---------------- | -------------------------------------------- |
| HTTP Method      | `GET`                                        |
| Endpoint         | `/webinar/configuration/v1/company/sessions` |
| Rate Limit Group | `Heavy`                                      |
| App Permission   | `ReadWebinars`                               |
| User Permission  | `N/A`                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().company().sessions().get(
  rcwConfigListAllCompanySessionsParameters,
);
await rc.revoke();
```

- `rcwConfigListAllCompanySessionsParameters` is of type
  [RcwConfigListAllCompanySessionsParameters](./definitions/RcwConfigListAllCompanySessionsParameters.ts)
- `result` is of type
  [WcsSessionGlobalListResource](./definitions/WcsSessionGlobalListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinars-and-Sessions-rcwConfigListAllCompanySessions)
in API Explorer.

## rcwHistoryGetRecordingDownload

Get Webinar Recording Download Resource

| Name             | Value                                                   |
| ---------------- | ------------------------------------------------------- |
| HTTP Method      | `GET`                                                   |
| Endpoint         | `/webinar/history/v1/recordings/{recordingId}/download` |
| Rate Limit Group | `Heavy`                                                 |
| App Permission   | `ReadWebinars`                                          |
| User Permission  | `N/A`                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().recordings(recordingId)
  .download().get(rcwHistoryGetRecordingDownloadParameters);
await rc.revoke();
```

- `rcwHistoryGetRecordingDownloadParameters` is of type
  [RcwHistoryGetRecordingDownloadParameters](./definitions/RcwHistoryGetRecordingDownloadParameters.ts)
- `result` is of type
  [RecordingDownloadModel](./definitions/RecordingDownloadModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Recordings-rcwHistoryGetRecordingDownload)
in API Explorer.

## rcwN11sListSubscriptions

List Webinar Subscriptions

| Name             | Value                                     |
| ---------------- | ----------------------------------------- |
| HTTP Method      | `GET`                                     |
| Endpoint         | `/webinar/notifications/v1/subscriptions` |
| Rate Limit Group | `Light`                                   |
| App Permission   | `N/A`                                     |
| User Permission  | `N/A`                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().notifications().v1().subscriptions().list();
await rc.revoke();
```

- `result` is of type
  [SubscriptionListResource](./definitions/SubscriptionListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinar-Subscriptions-rcwN11sListSubscriptions)
in API Explorer.

## rcwN11sCreateSubscription

Create Webinar Subscription

| Name             | Value                                     |
| ---------------- | ----------------------------------------- |
| HTTP Method      | `POST`                                    |
| Endpoint         | `/webinar/notifications/v1/subscriptions` |
| Rate Limit Group | `Medium`                                  |
| App Permission   | `N/A`                                     |
| User Permission  | `N/A`                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().notifications().v1().subscriptions().post(
  createWebhookSubscriptionRequest,
);
await rc.revoke();
```

- `createWebhookSubscriptionRequest` is of type
  [CreateWebhookSubscriptionRequest](./definitions/CreateWebhookSubscriptionRequest.ts)
- `result` is of type [SubscriptionInfo](./definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinar-Subscriptions-rcwN11sCreateSubscription)
in API Explorer.

## rcwN11sGetSubscription

Get Webinar Subscription

| Name             | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| HTTP Method      | `GET`                                                      |
| Endpoint         | `/webinar/notifications/v1/subscriptions/{subscriptionId}` |
| Rate Limit Group | `Light`                                                    |
| App Permission   | `N/A`                                                      |
| User Permission  | `N/A`                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().notifications().v1().subscriptions(
  subscriptionId,
).get();
await rc.revoke();
```

- `result` is of type [SubscriptionInfo](./definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinar-Subscriptions-rcwN11sGetSubscription)
in API Explorer.

## rcwN11sUpdateSubscription

Update Webinar Subscription

| Name             | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| HTTP Method      | `PUT`                                                      |
| Endpoint         | `/webinar/notifications/v1/subscriptions/{subscriptionId}` |
| Rate Limit Group | `Medium`                                                   |
| App Permission   | `N/A`                                                      |
| User Permission  | `N/A`                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().notifications().v1().subscriptions(
  subscriptionId,
).put(updateSubscriptionRequest);
await rc.revoke();
```

- `updateSubscriptionRequest` is of type
  [UpdateSubscriptionRequest](./definitions/UpdateSubscriptionRequest.ts)
- `result` is of type [SubscriptionInfo](./definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinar-Subscriptions-rcwN11sUpdateSubscription)
in API Explorer.

## rcwN11sDeleteSubscription

Cancel Webinar Subscription

| Name             | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                   |
| Endpoint         | `/webinar/notifications/v1/subscriptions/{subscriptionId}` |
| Rate Limit Group | `Medium`                                                   |
| App Permission   | `N/A`                                                      |
| User Permission  | `N/A`                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().notifications().v1().subscriptions(
  subscriptionId,
).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Webinar-Subscriptions-rcwN11sDeleteSubscription)
in API Explorer.

## analyticsCallsAggregationFetch

Calls Aggregation Data

| Name             | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| HTTP Method      | `POST`                                                       |
| Endpoint         | `/analytics/calls/v1/accounts/{accountId}/aggregation/fetch` |
| Rate Limit Group | `Light`                                                      |
| App Permission   | `Analytics`                                                  |
| User Permission  | `N/A`                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.analytics().calls().v1().accounts(accountId).aggregation()
  .fetch().post(aggregationRequest, analyticsCallsAggregationFetchParameters);
await rc.revoke();
```

- `aggregationRequest` is of type
  [AggregationRequest](./definitions/AggregationRequest.ts)
- `analyticsCallsAggregationFetchParameters` is of type
  [AnalyticsCallsAggregationFetchParameters](./definitions/AnalyticsCallsAggregationFetchParameters.ts)
- `result` is of type
  [AggregationResponse](./definitions/AggregationResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Analytics-analyticsCallsAggregationFetch)
in API Explorer.

## analyticsCallsTimelineFetch

Calls Timeline Data

| Name             | Value                                                     |
| ---------------- | --------------------------------------------------------- |
| HTTP Method      | `POST`                                                    |
| Endpoint         | `/analytics/calls/v1/accounts/{accountId}/timeline/fetch` |
| Rate Limit Group | `Light`                                                   |
| App Permission   | `Analytics`                                               |
| User Permission  | `N/A`                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.analytics().calls().v1().accounts(accountId).timeline()
  .fetch().post(timelineRequest, analyticsCallsTimelineFetchParameters);
await rc.revoke();
```

- `timelineRequest` is of type
  [TimelineRequest](./definitions/TimelineRequest.ts)
- `analyticsCallsTimelineFetchParameters` is of type
  [AnalyticsCallsTimelineFetchParameters](./definitions/AnalyticsCallsTimelineFetchParameters.ts)
- `result` is of type [TimelineResponse](./definitions/TimelineResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Analytics-analyticsCallsTimelineFetch)
in API Explorer.

## getDefaultBridge

Get User's Default Bridge

| Name             | Value                                                                     |
| ---------------- | ------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                     |
| Endpoint         | `/rcvideo/v2/account/{accountId}/extension/{extensionId}/bridges/default` |
| Rate Limit Group | `Medium`                                                                  |
| App Permission   | `Video`                                                                   |
| User Permission  | `N/A`                                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.rcvideo().v2().account(accountId).extension(extensionId)
  .bridges().default().get();
await rc.revoke();
```

- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [BridgeResponse](./definitions/BridgeResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Bridge-Management-getDefaultBridge)
in API Explorer.

## postBatchProvisionUsers

Create Multiple User Extensions

| Name             | Value                                                       |
| ---------------- | ----------------------------------------------------------- |
| HTTP Method      | `POST`                                                      |
| Endpoint         | `/restapi/v2/accounts/{accountId}/batch-provisioning/users` |
| Rate Limit Group | `Heavy`                                                     |
| App Permission   | `EditAccounts`                                              |
| User Permission  | `N/A`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).batchProvisioning()
  .users().post(batchProvisionUsersRequest);
await rc.revoke();
```

- `batchProvisionUsersRequest` is of type
  [BatchProvisionUsersRequest](./definitions/BatchProvisionUsersRequest.ts)
- `result` is of type
  [BatchProvisionUsersResponse](./definitions/BatchProvisionUsersResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-postBatchProvisionUsers)
in API Explorer.

## readCallFlipSettings

Get Call Flip Settings

| Name             | Value                                                                         |
| ---------------- | ----------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                         |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/call-flip-numbers` |
| Rate Limit Group | `Light`                                                                       |
| App Permission   | `ReadAccounts`                                                                |
| User Permission  | `N/A`                                                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .callFlipNumbers().get();
await rc.revoke();
```

- `result` is of type
  [CallFlipNumberListResource](./definitions/CallFlipNumberListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Flip-readCallFlipSettings)
in API Explorer.

## updateCallFlipSettings

Update Call Flip Settings

| Name             | Value                                                                         |
| ---------------- | ----------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                         |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/call-flip-numbers` |
| Rate Limit Group | `Medium`                                                                      |
| App Permission   | `EditExtensions`                                                              |
| User Permission  | `N/A`                                                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .callFlipNumbers().put(callFlipNumberListResource);
await rc.revoke();
```

- `callFlipNumberListResource` is of type
  [CallFlipNumberListResource](./definitions/CallFlipNumberListResource.ts)
- `result` is of type
  [CallFlipNumberListResource](./definitions/CallFlipNumberListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Flip-updateCallFlipSettings)
in API Explorer.

## replaceDevicesJWSPublic

Swap Devices

| Name             | Value                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                 |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/devices/{deviceId}/replace` |
| Rate Limit Group | `Medium`                                                                               |
| App Permission   | `EditAccounts`                                                                         |
| User Permission  | `EditUserDevices`                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .devices(deviceId).replace().post(swapDeviceRequest);
await rc.revoke();
```

- `swapDeviceRequest` is of type
  [SwapDeviceRequest](./definitions/SwapDeviceRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Devices-replaceDevicesJWSPublic)
in API Explorer.

## addNumbersToInventoryV2

Add Numbers to Inventory

| Name             | Value                                                     |
| ---------------- | --------------------------------------------------------- |
| HTTP Method      | `POST`                                                    |
| Endpoint         | `/restapi/v2/accounts/{accountId}/phone-numbers/bulk-add` |
| Rate Limit Group | `Heavy`                                                   |
| App Permission   | `EditAccounts`                                            |
| User Permission  | `EditCompanyPhoneNumbers`                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).phoneNumbers()
  .bulkAdd().post(addPhoneNumbersRequest);
await rc.revoke();
```

- `addPhoneNumbersRequest` is of type
  [AddPhoneNumbersRequest](./definitions/AddPhoneNumbersRequest.ts)
- `result` is of type
  [AddPhoneNumbersResponse](./definitions/AddPhoneNumbersResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-addNumbersToInventoryV2)
in API Explorer.

## getBulkAddTaskResultsV2

Get Add Numbers Task Results

| Name             | Value                                                              |
| ---------------- | ------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                              |
| Endpoint         | `/restapi/v2/accounts/{accountId}/phone-numbers/bulk-add/{taskId}` |
| Rate Limit Group | `Heavy`                                                            |
| App Permission   | `EditAccounts`                                                     |
| User Permission  | `EditCompanyPhoneNumbers`                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).phoneNumbers().bulkAdd(
  taskId,
).get();
await rc.revoke();
```

- `result` is of type
  [GetBulkAddTaskResultsV2Response](./definitions/GetBulkAddTaskResultsV2Response.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-getBulkAddTaskResultsV2)
in API Explorer.

## getAddressBookBulkUploadTask

Get Contacts Upload Task

| Name             | Value                                                                               |
| ---------------- | ----------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/address-book-bulk-upload/tasks/{taskId}` |
| Rate Limit Group | `Light`                                                                             |
| App Permission   | `Contacts`                                                                          |
| User Permission  | `EditPersonalContacts`                                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .addressBookBulkUpload().tasks(taskId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [AddressBookBulkUploadResponse](./definitions/AddressBookBulkUploadResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-getAddressBookBulkUploadTask)
in API Explorer.

## listCallMonitoringGroupMembers

List Call Monitoring Group Members

| Name             | Value                                                                                |
| ---------------- | ------------------------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}/members` |
| Rate Limit Group | `Medium`                                                                             |
| App Permission   | `ReadAccounts`                                                                       |
| User Permission  | `ReadExtensions`                                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .callMonitoringGroups(groupId).members().get(
    listCallMonitoringGroupMembersParameters,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCallMonitoringGroupMembersParameters` is of type
  [ListCallMonitoringGroupMembersParameters](./definitions/ListCallMonitoringGroupMembersParameters.ts)
- `result` is of type
  [CallMonitoringGroupMemberList](./definitions/CallMonitoringGroupMemberList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-listCallMonitoringGroupMembers)
in API Explorer.

## updateCallRecordingExtensionList

Update Call Recording Extension List

| Name             | Value                                                                  |
| ---------------- | ---------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-recording/bulk-assign` |
| Rate Limit Group | `Medium`                                                               |
| App Permission   | `ReadAccounts`                                                         |
| User Permission  | `ReadCompanyInfo`                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callRecording()
  .bulkAssign().post(bulkAccountCallRecordingsResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `bulkAccountCallRecordingsResource` is of type
  [BulkAccountCallRecordingsResource](./definitions/BulkAccountCallRecordingsResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-updateCallRecordingExtensionList)
in API Explorer.

## listCallRecordingCustomGreetings

Get Call Recording Custom Greeting List

| Name             | Value                                                                       |
| ---------------- | --------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-recording/custom-greetings` |
| Rate Limit Group | `Medium`                                                                    |
| App Permission   | `ReadAccounts`                                                              |
| User Permission  | `ReadCompanyInfo`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callRecording()
  .customGreetings().get(listCallRecordingCustomGreetingsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listCallRecordingCustomGreetingsParameters` is of type
  [ListCallRecordingCustomGreetingsParameters](./definitions/ListCallRecordingCustomGreetingsParameters.ts)
- `result` is of type
  [CallRecordingCustomGreetings](./definitions/CallRecordingCustomGreetings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-listCallRecordingCustomGreetings)
in API Explorer.

## deleteCallRecordingCustomGreetingList

Delete Call Recording Custom Greeting List

| Name             | Value                                                                       |
| ---------------- | --------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-recording/custom-greetings` |
| Rate Limit Group | `Medium`                                                                    |
| App Permission   | `EditAccounts`                                                              |
| User Permission  | `EditCompanyInfo`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callRecording()
  .customGreetings().deleteAll();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-deleteCallRecordingCustomGreetingList)
in API Explorer.

## deleteCallRecordingCustomGreeting

Delete Call Recording Custom Greeting

| Name             | Value                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-recording/custom-greetings/{greetingId}` |
| Rate Limit Group | `Medium`                                                                                 |
| App Permission   | `EditAccounts`                                                                           |
| User Permission  | `EditCompanyInfo`                                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).callRecording()
  .customGreetings(greetingId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Recording-Settings-deleteCallRecordingCustomGreeting)
in API Explorer.

## getExtensionBulkUpdateTask

Get Extension Update Task Status

| Name             | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension-bulk-update/tasks/{taskId}` |
| Rate Limit Group | `Light`                                                                          |
| App Permission   | `EditExtensions`                                                                 |
| User Permission  | `EditExtensionInfo`                                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .extensionBulkUpdate().tasks(taskId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [ExtensionBulkUpdateTaskResource](./definitions/ExtensionBulkUpdateTaskResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-getExtensionBulkUpdateTask)
in API Explorer.

## getCallQueueOverflowSettings

Get Call Queue Overflow Settings

| Name             | Value                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{callQueueId}/overflow-settings` |
| Rate Limit Group | `Heavy`                                                                               |
| App Permission   | `ReadAccounts`                                                                        |
| User Permission  | `CallQueueToCallQueue`                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  callQueueId,
).overflowSettings().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [CallQueueOverflowSettings](./definitions/CallQueueOverflowSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-getCallQueueOverflowSettings)
in API Explorer.

## updateCallQueueOverflowSettings

Update Call Queue Overflow Settings

| Name             | Value                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{callQueueId}/overflow-settings` |
| Rate Limit Group | `Heavy`                                                                               |
| App Permission   | `EditExtensions`                                                                      |
| User Permission  | `CallQueueToCallQueue`                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  callQueueId,
).overflowSettings().put(callQueueOverflowSettingsRequestResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callQueueOverflowSettingsRequestResource` is of type
  [CallQueueOverflowSettingsRequestResource](./definitions/CallQueueOverflowSettingsRequestResource.ts)
- `result` is of type
  [CallQueueOverflowSettings](./definitions/CallQueueOverflowSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-updateCallQueueOverflowSettings)
in API Explorer.

## syncAddressBook

Address Book Synchronization

| Name             | Value                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book-sync` |
| Rate Limit Group | `Heavy`                                                                               |
| App Permission   | `ReadContacts`                                                                        |
| User Permission  | `ReadPersonalContacts`                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).addressBookSync().get(syncAddressBookParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `syncAddressBookParameters` is of type
  [SyncAddressBookParameters](./definitions/SyncAddressBookParameters.ts)
- `result` is of type [AddressBookSync](./definitions/AddressBookSync.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-syncAddressBook)
in API Explorer.

## listContacts

List Contacts

| Name             | Value                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact` |
| Rate Limit Group | `Heavy`                                                                                  |
| App Permission   | `ReadContacts`                                                                           |
| User Permission  | `ReadPersonalContacts`                                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).addressBook().contact().list(listContactsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listContactsParameters` is of type
  [ListContactsParameters](./definitions/ListContactsParameters.ts)
- `result` is of type [ContactList](./definitions/ContactList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-listContacts)
in API Explorer.

## createContact

Create User Contact

| Name             | Value                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact` |
| Rate Limit Group | `Heavy`                                                                                  |
| App Permission   | `Contacts`                                                                               |
| User Permission  | `EditPersonalContacts`                                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).addressBook().contact().post(personalContactRequest, createContactParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `personalContactRequest` is of type
  [PersonalContactRequest](./definitions/PersonalContactRequest.ts)
- `createContactParameters` is of type
  [CreateContactParameters](./definitions/CreateContactParameters.ts)
- `result` is of type
  [PersonalContactResource](./definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-createContact)
in API Explorer.

## readContact

Get User Contact(s)

| Name             | Value                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}` |
| Rate Limit Group | `Heavy`                                                                                              |
| App Permission   | `ReadContacts`                                                                                       |
| User Permission  | `ReadPersonalContacts`                                                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).addressBook().contact(contactId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [PersonalContactResource](./definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-readContact)
in API Explorer.

## updateContact

Update User Contact(s)

| Name             | Value                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}` |
| Rate Limit Group | `Heavy`                                                                                              |
| App Permission   | `Contacts`                                                                                           |
| User Permission  | `EditPersonalContacts`                                                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).addressBook().contact(contactId).put(
  personalContactRequest,
  updateContactParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `personalContactRequest` is of type
  [PersonalContactRequest](./definitions/PersonalContactRequest.ts)
- `updateContactParameters` is of type
  [UpdateContactParameters](./definitions/UpdateContactParameters.ts)
- `result` is of type
  [PersonalContactResource](./definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateContact)
in API Explorer.

## deleteContact

Delete User Contact(s)

| Name             | Value                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}` |
| Rate Limit Group | `Heavy`                                                                                              |
| App Permission   | `Contacts`                                                                                           |
| User Permission  | `EditPersonalContacts`                                                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).addressBook().contact(contactId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-deleteContact)
in API Explorer.

## patchContact

Update Contact Attributes

| Name             | Value                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| HTTP Method      | `PATCH`                                                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}` |
| Rate Limit Group | `Heavy`                                                                                              |
| App Permission   | `Contacts`                                                                                           |
| User Permission  | `EditPersonalContacts`                                                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).addressBook().contact(contactId).patch(
  personalContactRequest,
  patchContactParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `personalContactRequest` is of type
  [PersonalContactRequest](./definitions/PersonalContactRequest.ts)
- `patchContactParameters` is of type
  [PatchContactParameters](./definitions/PatchContactParameters.ts)
- `result` is of type
  [PersonalContactResource](./definitions/PersonalContactResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-patchContact)
in API Explorer.

## listAdministeredSites

List User Administered Sites

| Name             | Value                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                  |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/administered-sites` |
| Rate Limit Group | `Medium`                                                                               |
| App Permission   | `ReadAccounts`                                                                         |
| User Permission  | `ReadExtensions`                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).administeredSites().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [BusinessSiteCollectionResource](./definitions/BusinessSiteCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Site-Administration-listAdministeredSites)
in API Explorer.

## updateUserAdministeredSites

Update User Administered Sites

| Name             | Value                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                  |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/administered-sites` |
| Rate Limit Group | `Medium`                                                                               |
| App Permission   | `EditAccounts`                                                                         |
| User Permission  | `EditAssignedRoles`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).administeredSites().put(businessSiteCollectionRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `businessSiteCollectionRequest` is of type
  [BusinessSiteCollectionRequest](./definitions/BusinessSiteCollectionRequest.ts)
- `result` is of type
  [BusinessSiteCollectionResource](./definitions/BusinessSiteCollectionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Site-Administration-updateUserAdministeredSites)
in API Explorer.

## assignDefaultRole

Assign Default Role

| Name             | Value                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role/default` |
| Rate Limit Group | `Medium`                                                                                  |
| App Permission   | `RoleManagement`                                                                          |
| User Permission  | `Users`                                                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).assignedRole().default().put();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [AssignedRolesResource](./definitions/AssignedRolesResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Role-Management-assignDefaultRole)
in API Explorer.

## checkUserPermission

Check User Permission

| Name             | Value                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/authz-profile/check` |
| Rate Limit Group | `Light`                                                                                 |
| App Permission   | `N/A`                                                                                   |
| User Permission  | `N/A`                                                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).authzProfile().check().get(checkUserPermissionParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `checkUserPermissionParameters` is of type
  [CheckUserPermissionParameters](./definitions/CheckUserPermissionParameters.ts)
- `result` is of type
  [AuthProfileCheckResource](./definitions/AuthProfileCheckResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-checkUserPermission)
in API Explorer.

## readExtensionCallQueuePresence

Get Agent’s Call Queue Presence

| Name             | Value                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queue-presence` |
| Rate Limit Group | `Light`                                                                                 |
| App Permission   | `ReadPresence`                                                                          |
| User Permission  | `N/A`                                                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callQueuePresence().get(readExtensionCallQueuePresenceParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readExtensionCallQueuePresenceParameters` is of type
  [ReadExtensionCallQueuePresenceParameters](./definitions/ReadExtensionCallQueuePresenceParameters.ts)
- `result` is of type
  [ExtensionCallQueuePresenceList](./definitions/ExtensionCallQueuePresenceList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readExtensionCallQueuePresence)
in API Explorer.

## updateExtensionCallQueuePresence

Update Call Queue Presence

| Name             | Value                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queue-presence` |
| Rate Limit Group | `Medium`                                                                                |
| App Permission   | `EditPresence`                                                                          |
| User Permission  | `N/A`                                                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callQueuePresence().put(extensionCallQueueUpdatePresenceList);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `extensionCallQueueUpdatePresenceList` is of type
  [ExtensionCallQueueUpdatePresenceList](./definitions/ExtensionCallQueueUpdatePresenceList.ts)
- `result` is of type
  [ExtensionCallQueuePresenceList](./definitions/ExtensionCallQueuePresenceList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateExtensionCallQueuePresence)
in API Explorer.

## getExtensionEmergencyLocations

List User Emergency Locations

| Name             | Value                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations` |
| Rate Limit Group | `Light`                                                                                 |
| App Permission   | `ReadAccounts`                                                                          |
| User Permission  | `N/A`                                                                                   |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).emergencyLocations().list(getExtensionEmergencyLocationsParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `getExtensionEmergencyLocationsParameters` is of type
  [GetExtensionEmergencyLocationsParameters](./definitions/GetExtensionEmergencyLocationsParameters.ts)
- `result` is of type
  [EmergencyLocationsResource](./definitions/EmergencyLocationsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-getExtensionEmergencyLocations)
in API Explorer.

## createExtensionEmergencyLocation

Create User Emergency Location

| Name             | Value                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                  |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations` |
| Rate Limit Group | `Heavy`                                                                                 |
| App Permission   | `EditAccounts`                                                                          |
| User Permission  | `EmergencyFramework`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).emergencyLocations().post(createUserEmergencyLocationRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createUserEmergencyLocationRequest` is of type
  [CreateUserEmergencyLocationRequest](./definitions/CreateUserEmergencyLocationRequest.ts)
- `result` is of type
  [EmergencyLocationResponseResource](./definitions/EmergencyLocationResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createExtensionEmergencyLocation)
in API Explorer.

## getExtensionEmergencyLocation

Get User Emergency Location

| Name             | Value                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations/{locationId}` |
| Rate Limit Group | `Light`                                                                                              |
| App Permission   | `ReadAccounts`                                                                                       |
| User Permission  | `N/A`                                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).emergencyLocations(locationId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [CommonEmergencyLocationResource](./definitions/CommonEmergencyLocationResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-getExtensionEmergencyLocation)
in API Explorer.

## updateExtensionEmergencyLocation

Update User Emergency Location

| Name             | Value                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations/{locationId}` |
| Rate Limit Group | `Light`                                                                                              |
| App Permission   | `EditAccounts`                                                                                       |
| User Permission  | `EmergencyFramework`                                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).emergencyLocations(locationId).put(emergencyLocationRequestResource);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `emergencyLocationRequestResource` is of type
  [EmergencyLocationRequestResource](./definitions/EmergencyLocationRequestResource.ts)
- `result` is of type
  [EmergencyLocationResponseResource](./definitions/EmergencyLocationResponseResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateExtensionEmergencyLocation)
in API Explorer.

## deleteExtensionEmergencyLocation

Delete User Emergency Location

| Name             | Value                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/emergency-locations/{locationId}` |
| Rate Limit Group | `Heavy`                                                                                              |
| App Permission   | `EditAccounts`                                                                                       |
| User Permission  | `EmergencyFramework`                                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).emergencyLocations(locationId).delete(
  deleteExtensionEmergencyLocationParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `deleteExtensionEmergencyLocationParameters` is of type
  [DeleteExtensionEmergencyLocationParameters](./definitions/DeleteExtensionEmergencyLocationParameters.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteExtensionEmergencyLocation)
in API Explorer.

## listForwardingNumbers

List Forwarding Numbers

| Name             | Value                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number` |
| Rate Limit Group | `Light`                                                                               |
| App Permission   | `ReadAccounts`                                                                        |
| User Permission  | `ReadUserForwardingFlipNumbers`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).forwardingNumber().list(listForwardingNumbersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listForwardingNumbersParameters` is of type
  [ListForwardingNumbersParameters](./definitions/ListForwardingNumbersParameters.ts)
- `result` is of type
  [GetExtensionForwardingNumberListResponse](./definitions/GetExtensionForwardingNumberListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-listForwardingNumbers)
in API Explorer.

## createForwardingNumber

Create Forwarding Number

| Name             | Value                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number` |
| Rate Limit Group | `Medium`                                                                              |
| App Permission   | `EditExtensions`                                                                      |
| User Permission  | `EditUserForwardingFlipNumbers`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).forwardingNumber().post(createForwardingNumberRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `createForwardingNumberRequest` is of type
  [CreateForwardingNumberRequest](./definitions/CreateForwardingNumberRequest.ts)
- `result` is of type
  [ForwardingNumberInfo](./definitions/ForwardingNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-createForwardingNumber)
in API Explorer.

## deleteForwardingNumbers

Delete Forwarding Numbers

| Name             | Value                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number` |
| Rate Limit Group | `Medium`                                                                              |
| App Permission   | `EditExtensions`                                                                      |
| User Permission  | `EditUserForwardingFlipNumbers`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).forwardingNumber().deleteAll(deleteForwardingNumbersRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `deleteForwardingNumbersRequest` is of type
  [DeleteForwardingNumbersRequest](./definitions/DeleteForwardingNumbersRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-deleteForwardingNumbers)
in API Explorer.

## readForwardingNumber

Get Forwarding Number

| Name             | Value                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}` |
| Rate Limit Group | `Light`                                                                                                    |
| App Permission   | `ReadAccounts`                                                                                             |
| User Permission  | `ReadUserForwardingFlipNumbers`                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).forwardingNumber(forwardingNumberId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [ForwardingNumberResource](./definitions/ForwardingNumberResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-readForwardingNumber)
in API Explorer.

## updateForwardingNumber

Update Forwarding Number

| Name             | Value                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}` |
| Rate Limit Group | `Medium`                                                                                                   |
| App Permission   | `EditExtensions`                                                                                           |
| User Permission  | `EditUserForwardingFlipNumbers`                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).forwardingNumber(forwardingNumberId).put(updateForwardingNumberRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `updateForwardingNumberRequest` is of type
  [UpdateForwardingNumberRequest](./definitions/UpdateForwardingNumberRequest.ts)
- `result` is of type
  [ForwardingNumberInfo](./definitions/ForwardingNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-updateForwardingNumber)
in API Explorer.

## deleteForwardingNumber

Delete Forwarding Number

| Name             | Value                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}` |
| Rate Limit Group | `Medium`                                                                                                   |
| App Permission   | `EditExtensions`                                                                                           |
| User Permission  | `EditUserForwardingFlipNumbers`                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).forwardingNumber(forwardingNumberId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-deleteForwardingNumber)
in API Explorer.

## readMessageContent

Get Message Attachment Content

| Name             | Value                                                                                                                |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}` |
| Rate Limit Group | `Medium`                                                                                                             |
| App Permission   | `ReadMessages`                                                                                                       |
| User Permission  | `N/A`                                                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageStore(messageId).content(attachmentId).get(
  readMessageContentParameters,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `readMessageContentParameters` is of type
  [ReadMessageContentParameters](./definitions/ReadMessageContentParameters.ts)
- `result` is of type `byte[]`

### ❗❗❗ Code sample above may not work

Please refer to
[Binary content downloading](/README.md#Binary-content-downloading).

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessageContent)
in API Explorer.

## readNotificationSettings

Get Notification Settings

| Name             | Value                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/notification-settings` |
| Rate Limit Group | `Light`                                                                                   |
| App Permission   | `ReadAccounts`                                                                            |
| User Permission  | `ReadMessagesNotificationsSettings`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).notificationSettings().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [NotificationSettings](./definitions/NotificationSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readNotificationSettings)
in API Explorer.

## updateNotificationSettings

Update Notification Settings

| Name             | Value                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/notification-settings` |
| Rate Limit Group | `Medium`                                                                                  |
| App Permission   | `EditExtensions`                                                                          |
| User Permission  | `EditMessagesNotificationsSettings`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).notificationSettings().put(notificationSettingsUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `notificationSettingsUpdateRequest` is of type
  [NotificationSettingsUpdateRequest](./definitions/NotificationSettingsUpdateRequest.ts)
- `result` is of type
  [NotificationSettings](./definitions/NotificationSettings.ts)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateNotificationSettings)
in API Explorer.

## readUnifiedPresence

Get Unified Presence

| Name             | Value                                                                                |
| ---------------- | ------------------------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/unified-presence` |
| Rate Limit Group | `Medium`                                                                             |
| App Permission   | `ReadPresence`                                                                       |
| User Permission  | `ReadPresenceStatus`                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).unifiedPresence().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type [UnifiedPresence](./definitions/UnifiedPresence.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readUnifiedPresence)
in API Explorer.

## updateUnifiedPresence

Update Unified Presence

| Name             | Value                                                                                |
| ---------------- | ------------------------------------------------------------------------------------ |
| HTTP Method      | `PATCH`                                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/unified-presence` |
| Rate Limit Group | `Medium`                                                                             |
| App Permission   | `EditPresence`                                                                       |
| User Permission  | `EditPresenceStatus`                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).unifiedPresence().patch(updateUnifiedPresence);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `updateUnifiedPresence` is of type
  [UpdateUnifiedPresence](./definitions/UpdateUnifiedPresence.ts)
- `result` is of type [UnifiedPresence](./definitions/UnifiedPresence.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateUnifiedPresence)
in API Explorer.

## readUserVideoConfiguration

Get User Video Configuration

| Name             | Value                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/video-configuration` |
| Rate Limit Group | `Light`                                                                                 |
| App Permission   | `ReadAccounts`                                                                          |
| User Permission  | `Meetings`                                                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).videoConfiguration().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [UserVideoConfiguration](./definitions/UserVideoConfiguration.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Video-Configuration-readUserVideoConfiguration)
in API Explorer.

## readMessageStoreConfiguration

Get Message Store Configuration

| Name             | Value                                                                   |
| ---------------- | ----------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/message-store-configuration` |
| Rate Limit Group | `Light`                                                                 |
| App Permission   | `EditAccounts`                                                          |
| User Permission  | `AccountAdministration`                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .messageStoreConfiguration().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [MessageStoreConfiguration](./definitions/MessageStoreConfiguration.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessageStoreConfiguration)
in API Explorer.

## updateMessageStoreConfiguration

Update Message Store Configuration

| Name             | Value                                                                   |
| ---------------- | ----------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/message-store-configuration` |
| Rate Limit Group | `Light`                                                                 |
| App Permission   | `EditAccounts`                                                          |
| User Permission  | `AccountAdministration`                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .messageStoreConfiguration().put(messageStoreConfiguration);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `messageStoreConfiguration` is of type
  [MessageStoreConfiguration](./definitions/MessageStoreConfiguration.ts)
- `result` is of type
  [MessageStoreConfiguration](./definitions/MessageStoreConfiguration.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-updateMessageStoreConfiguration)
in API Explorer.

## readMessageStoreReportArchive

Get Message Store Report Archive

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/message-store-report/{taskId}/archive` |
| Rate Limit Group | `Heavy`                                                                           |
| App Permission   | `ReadMessages`                                                                    |
| User Permission  | `Users`                                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).messageStoreReport(
  taskId,
).archive().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [MessageStoreReportArchive](./definitions/MessageStoreReportArchive.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportArchive)
in API Explorer.

## assignMultiplePagingGroupUsersDevices

Assign Paging Group Users and Devices

| Name             | Value                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign` |
| Rate Limit Group | `Heavy`                                                                                        |
| App Permission   | `EditAccounts`                                                                                 |
| User Permission  | `Groups`                                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).pagingOnlyGroups(
  pagingOnlyGroupId,
).bulkAssign().post(editPagingGroupRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `editPagingGroupRequest` is of type
  [EditPagingGroupRequest](./definitions/EditPagingGroupRequest.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-assignMultiplePagingGroupUsersDevices)
in API Explorer.

## callFlipParty

Call Flip on Party

| Name             | Value                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip` |
| Rate Limit Group | `Light`                                                                                                    |
| App Permission   | `CallControl`                                                                                              |
| User Permission  | `N/A`                                                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).flip().post(callPartyFlip);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callPartyFlip` is of type [CallPartyFlip](./definitions/CallPartyFlip.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-callFlipParty)
in API Explorer.

## holdCallParty

Hold Call Party

| Name             | Value                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/hold` |
| Rate Limit Group | `Light`                                                                                                    |
| App Permission   | `CallControl`                                                                                              |
| User Permission  | `N/A`                                                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).hold().post(
    holdCallPartyRequest,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `holdCallPartyRequest` is of type
  [HoldCallPartyRequest](./definitions/HoldCallPartyRequest.ts)
- `result` is of type [CallParty](./definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-holdCallParty)
in API Explorer.

## callParkParty

Call Park

| Name             | Value                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/park` |
| Rate Limit Group | `Light`                                                                                                    |
| App Permission   | `CallControl`                                                                                              |
| User Permission  | `N/A`                                                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).park().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallParty](./definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-callParkParty)
in API Explorer.

## replyParty

Reply with Text

| Name             | Value                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reply` |
| Rate Limit Group | `Light`                                                                                                     |
| App Permission   | `CallControl`                                                                                               |
| User Permission  | `N/A`                                                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).reply().post(callPartyReply);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callPartyReply` is of type [CallPartyReply](./definitions/CallPartyReply.ts)
- `result` is of type [ReplyParty](./definitions/ReplyParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-replyParty)
in API Explorer.

## unholdCallParty

Un-hold Call Party

| Name             | Value                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| HTTP Method      | `POST`                                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/unhold` |
| Rate Limit Group | `Light`                                                                                                      |
| App Permission   | `CallControl`                                                                                                |
| User Permission  | `N/A`                                                                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).unhold().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [CallParty](./definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-unholdCallParty)
in API Explorer.

## superviseCallSession

Supervise Call Session

| Name             | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/supervise` |
| Rate Limit Group | `Light`                                                                                       |
| App Permission   | `CallControl`                                                                                 |
| User Permission  | `N/A`                                                                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).supervise().post(superviseCallSessionRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `superviseCallSessionRequest` is of type
  [SuperviseCallSessionRequest](./definitions/SuperviseCallSessionRequest.ts)
- `result` is of type
  [SuperviseCallSessionResponse](./definitions/SuperviseCallSessionResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-superviseCallSession)
in API Explorer.

## listContractedCountries

List Contracted Countries

| Name             | Value                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                 |
| Endpoint         | `/restapi/{apiVersion}/dictionary/brand/{brandId}/contracted-country` |
| Rate Limit Group | `Light`                                                               |
| App Permission   | `N/A`                                                                 |
| User Permission  | `N/A`                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().brand(brandId)
  .contractedCountry().list();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `result` is of type
  [ContractedCountryListResponse](./definitions/ContractedCountryListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-listContractedCountries)
in API Explorer.

## listDomesticCountries

List Domestic Countries

| Name             | Value                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/dictionary/brand/{brandId}/contracted-country/{contractedCountryId}` |
| Rate Limit Group | `Light`                                                                                     |
| App Permission   | `N/A`                                                                                       |
| User Permission  | `N/A`                                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).dictionary().brand(brandId)
  .contractedCountry(contractedCountryId).get(listDomesticCountriesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- `listDomesticCountriesParameters` is of type
  [ListDomesticCountriesParameters](./definitions/ListDomesticCountriesParameters.ts)
- `result` is of type
  [CountryListDictionaryModel](./definitions/CountryListDictionaryModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Company-listDomesticCountries)
in API Explorer.

## rcwConfigCreateSession

Create Webinar Session

| Name             | Value                                                     |
| ---------------- | --------------------------------------------------------- |
| HTTP Method      | `POST`                                                    |
| Endpoint         | `/webinar/configuration/v1/webinars/{webinarId}/sessions` |
| Rate Limit Group | `Heavy`                                                   |
| App Permission   | `EditWebinars`                                            |
| User Permission  | `N/A`                                                     |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars(webinarId)
  .sessions().post(wcsSessionWithLocaleCodeModel);
await rc.revoke();
```

- `wcsSessionWithLocaleCodeModel` is of type
  [WcsSessionWithLocaleCodeModel](./definitions/WcsSessionWithLocaleCodeModel.ts)
- `result` is of type [WcsSessionResource](./definitions/WcsSessionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinars-and-Sessions-rcwConfigCreateSession)
in API Explorer.

## rcwConfigGetSession

Get Webinar Session

| Name             | Value                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                 |
| Endpoint         | `/webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}` |
| Rate Limit Group | `Heavy`                                                               |
| App Permission   | `ReadWebinars`                                                        |
| User Permission  | `N/A`                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars(webinarId)
  .sessions(sessionId).get();
await rc.revoke();
```

- `result` is of type [WcsSessionResource](./definitions/WcsSessionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinars-and-Sessions-rcwConfigGetSession)
in API Explorer.

## rcwConfigDeleteSession

Delete Webinar Session

| Name             | Value                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                              |
| Endpoint         | `/webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}` |
| Rate Limit Group | `Heavy`                                                               |
| App Permission   | `EditWebinars`                                                        |
| User Permission  | `N/A`                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars(webinarId)
  .sessions(sessionId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Webinars-and-Sessions-rcwConfigDeleteSession)
in API Explorer.

## rcwConfigUpdateSession

Update Webinar Session

| Name             | Value                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| HTTP Method      | `PATCH`                                                               |
| Endpoint         | `/webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}` |
| Rate Limit Group | `Heavy`                                                               |
| App Permission   | `EditWebinars`                                                        |
| User Permission  | `N/A`                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars(webinarId)
  .sessions(sessionId).patch(wcsSessionWithLocaleCodeModel);
await rc.revoke();
```

- `wcsSessionWithLocaleCodeModel` is of type
  [WcsSessionWithLocaleCodeModel](./definitions/WcsSessionWithLocaleCodeModel.ts)
- `result` is of type [WcsSessionResource](./definitions/WcsSessionResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinars-and-Sessions-rcwConfigUpdateSession)
in API Explorer.

## rcwHistoryListInvitees

List Session Invitees

| Name             | Value                                                                    |
| ---------------- | ------------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                                    |
| Endpoint         | `/webinar/history/v1/webinars/{webinarId}/sessions/{sessionId}/invitees` |
| Rate Limit Group | `Heavy`                                                                  |
| App Permission   | `ReadWebinars`                                                           |
| User Permission  | `N/A`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().webinars(webinarId).sessions(
  sessionId,
).invitees().list(rcwHistoryListInviteesParameters);
await rc.revoke();
```

- `rcwHistoryListInviteesParameters` is of type
  [RcwHistoryListInviteesParameters](./definitions/RcwHistoryListInviteesParameters.ts)
- `result` is of type
  [InviteeListResource](./definitions/InviteeListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Webinars-rcwHistoryListInvitees)
in API Explorer.

## rcwHistoryGetInvitee

Get Session Invitee

| Name             | Value                                                                                |
| ---------------- | ------------------------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                                                |
| Endpoint         | `/webinar/history/v1/webinars/{webinarId}/sessions/{sessionId}/invitees/{inviteeId}` |
| Rate Limit Group | `Heavy`                                                                              |
| App Permission   | `ReadWebinars`                                                                       |
| User Permission  | `N/A`                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().webinars(webinarId).sessions(
  sessionId,
).invitees(inviteeId).get();
await rc.revoke();
```

- `result` is of type [InviteeModel](./definitions/InviteeModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Webinars-rcwHistoryGetInvitee)
in API Explorer.

## rcwN11sRenewSubscription

Renew Webinar Subscription

| Name             | Value                                                            |
| ---------------- | ---------------------------------------------------------------- |
| HTTP Method      | `POST`                                                           |
| Endpoint         | `/webinar/notifications/v1/subscriptions/{subscriptionId}/renew` |
| Rate Limit Group | `Light`                                                          |
| App Permission   | `N/A`                                                            |
| User Permission  | `N/A`                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().notifications().v1().subscriptions(
  subscriptionId,
).renew().post();
await rc.revoke();
```

- `result` is of type [SubscriptionInfo](./definitions/SubscriptionInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Webinar-Subscriptions-rcwN11sRenewSubscription)
in API Explorer.

## rcwRegListRegistrants

List Session Registrants

| Name             | Value                                                       |
| ---------------- | ----------------------------------------------------------- |
| HTTP Method      | `GET`                                                       |
| Endpoint         | `/webinar/registration/v1/sessions/{sessionId}/registrants` |
| Rate Limit Group | `Heavy`                                                     |
| App Permission   | `ReadWebinars`                                              |
| User Permission  | `N/A`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().registration().v1().sessions(sessionId)
  .registrants().list(rcwRegListRegistrantsParameters);
await rc.revoke();
```

- `rcwRegListRegistrantsParameters` is of type
  [RcwRegListRegistrantsParameters](./definitions/RcwRegListRegistrantsParameters.ts)
- `result` is of type
  [RegistrantListResource](./definitions/RegistrantListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Registrants-rcwRegListRegistrants)
in API Explorer.

## rcwRegCreateRegistrant

Create Registrant

| Name             | Value                                                       |
| ---------------- | ----------------------------------------------------------- |
| HTTP Method      | `POST`                                                      |
| Endpoint         | `/webinar/registration/v1/sessions/{sessionId}/registrants` |
| Rate Limit Group | `Heavy`                                                     |
| App Permission   | `EditWebinars`                                              |
| User Permission  | `N/A`                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().registration().v1().sessions(sessionId)
  .registrants().post(registrantBaseModelWithQuestionnaire);
await rc.revoke();
```

- `registrantBaseModelWithQuestionnaire` is of type
  [RegistrantBaseModelWithQuestionnaire](./definitions/RegistrantBaseModelWithQuestionnaire.ts)
- `result` is of type
  [RegistrantModelResponsePostWithQuestionnaire](./definitions/RegistrantModelResponsePostWithQuestionnaire.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Registrants-rcwRegCreateRegistrant)
in API Explorer.

## rcwRegGetRegistrant

Get Registrant

| Name             | Value                                                                      |
| ---------------- | -------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                      |
| Endpoint         | `/webinar/registration/v1/sessions/{sessionId}/registrants/{registrantId}` |
| Rate Limit Group | `Heavy`                                                                    |
| App Permission   | `ReadWebinars`                                                             |
| User Permission  | `N/A`                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().registration().v1().sessions(sessionId)
  .registrants(registrantId).get(rcwRegGetRegistrantParameters);
await rc.revoke();
```

- `rcwRegGetRegistrantParameters` is of type
  [RcwRegGetRegistrantParameters](./definitions/RcwRegGetRegistrantParameters.ts)
- `result` is of type
  [RegistrantModelWithQuestionnaire](./definitions/RegistrantModelWithQuestionnaire.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Registrants-rcwRegGetRegistrant)
in API Explorer.

## rcwRegDeleteRegistrant

Delete Registrant

| Name             | Value                                                                      |
| ---------------- | -------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                   |
| Endpoint         | `/webinar/registration/v1/sessions/{sessionId}/registrants/{registrantId}` |
| Rate Limit Group | `Heavy`                                                                    |
| App Permission   | `EditWebinars`                                                             |
| User Permission  | `N/A`                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().registration().v1().sessions(sessionId)
  .registrants(registrantId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Registrants-rcwRegDeleteRegistrant)
in API Explorer.

## getRecordingInsights

Get Recording Insights

| Name             | Value                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                             |
| Endpoint         | `/ai/ringsense/v1/public/accounts/{accountId}/domains/{domain}/records/{sourceRecordId}/insights` |
| Rate Limit Group | `Light`                                                                                           |
| App Permission   | `RingSense`                                                                                       |
| User Permission  | `N/A`                                                                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().ringsense().v1().public().accounts(accountId)
  .domains(domain).records(sourceRecordId).insights().get(
    getRecordingInsightsParameters,
  );
await rc.revoke();
```

- `getRecordingInsightsParameters` is of type
  [GetRecordingInsightsParameters](./definitions/GetRecordingInsightsParameters.ts)
- `result` is of type [RecordingInsights](./definitions/RecordingInsights.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingSense-getRecordingInsights)
in API Explorer.

## getSessionInsights

Get Session Insights

| Name             | Value                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                               |
| Endpoint         | `/ai/ringsense/v1/public/accounts/{accountId}/domains/{domain}/sessions/{sourceSessionId}/insights` |
| Rate Limit Group | `Light`                                                                                             |
| App Permission   | `RingSense`                                                                                         |
| User Permission  | `N/A`                                                                                               |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.ai().ringsense().v1().public().accounts(accountId)
  .domains(domain).sessions(sourceSessionId).insights().get(
    getSessionInsightsParameters,
  );
await rc.revoke();
```

- `getSessionInsightsParameters` is of type
  [GetSessionInsightsParameters](./definitions/GetSessionInsightsParameters.ts)
- `result` is of type
  [SessionsInsightsResource](./definitions/SessionsInsightsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#RingSense-getSessionInsights)
in API Explorer.

## listCicStates

List Comm Handling States

| Name             | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                            |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/states` |
| Rate Limit Group | `Medium`                                                                         |
| App Permission   | `ReadAccounts`                                                                   |
| User Permission  | `N/A`                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().states().list(listCicStatesParameters);
await rc.revoke();
```

- `listCicStatesParameters` is of type
  [ListCicStatesParameters](./definitions/ListCicStatesParameters.ts)
- `result` is of type [CommStatesResource](./definitions/CommStatesResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#States-listCicStates)
in API Explorer.

## readCicState

Comm Handling State

| Name             | Value                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                                                      |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/states/{stateId}` |
| Rate Limit Group | `Medium`                                                                                   |
| App Permission   | `ReadAccounts`                                                                             |
| User Permission  | `N/A`                                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().states(stateId).get();
await rc.revoke();
```

- `result` is of type [CommStateResource](./definitions/CommStateResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#States-readCicState)
in API Explorer.

## updateCicState

Update Comm Handling State

| Name             | Value                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------ |
| HTTP Method      | `PATCH`                                                                                    |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/states/{stateId}` |
| Rate Limit Group | `Medium`                                                                                   |
| App Permission   | `ReadAccounts`                                                                             |
| User Permission  | `N/A`                                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().states(stateId).patch(commStateUpdateRequest);
await rc.revoke();
```

- `commStateUpdateRequest` is of type
  [CommStateUpdateRequest](./definitions/CommStateUpdateRequest.ts)
- `result` is of type [CommStateResource](./definitions/CommStateResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#States-updateCicState)
in API Explorer.

## readForwardingTargets

Get Forwarding Targets

| Name             | Value                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                              |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/forwarding-targets` |
| Rate Limit Group | `Medium`                                                                                           |
| App Permission   | `ReadAccounts`                                                                                     |
| User Permission  | `N/A`                                                                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().voice().forwardingTargets().get(
    readForwardingTargetsParameters,
  );
await rc.revoke();
```

- `readForwardingTargetsParameters` is of type
  [ReadForwardingTargetsParameters](./definitions/ReadForwardingTargetsParameters.ts)
- `result` is of type
  [CommForwardingTargetsResource](./definitions/CommForwardingTargetsResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Forwarding-Targets-readForwardingTargets)
in API Explorer.

## deleteForwardingTargets

Delete Forwarding Targets

| Name             | Value                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                           |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/forwarding-targets` |
| Rate Limit Group | `Medium`                                                                                           |
| App Permission   | `EditExtensions`                                                                                   |
| User Permission  | `N/A`                                                                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().voice().forwardingTargets().delete(
    commRemoveForwardingTargetsRequest,
  );
await rc.revoke();
```

- `commRemoveForwardingTargetsRequest` is of type
  [CommRemoveForwardingTargetsRequest](./definitions/CommRemoveForwardingTargetsRequest.ts)
- `result` is of type
  [CommRemoveForwardingTargetsResponse](./definitions/CommRemoveForwardingTargetsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Forwarding-Targets-deleteForwardingTargets)
in API Explorer.

## listExtensionsUsingForwardingDeviceTarget

List Extensions Using Forwarding Device Target

| Name             | Value                                                                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                                                            |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/forwarding-targets/devices/{deviceId}/extensions` |
| Rate Limit Group | `Medium`                                                                                                                         |
| App Permission   | `ReadAccounts`                                                                                                                   |
| User Permission  | `N/A`                                                                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().voice().forwardingTargets().devices(deviceId).extensions()
  .get();
await rc.revoke();
```

- `result` is of type
  [CommExtensionListResource](./definitions/CommExtensionListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Forwarding-Targets-listExtensionsUsingForwardingDeviceTarget)
in API Explorer.

## listVoiceInteractionRules

List Interaction Rules

| Name             | Value                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                             |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/interaction-rules` |
| Rate Limit Group | `Medium`                                                                                          |
| App Permission   | `ReadAccounts`                                                                                    |
| User Permission  | `N/A`                                                                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().voice().interactionRules().list(
    listVoiceInteractionRulesParameters,
  );
await rc.revoke();
```

- `listVoiceInteractionRulesParameters` is of type
  [ListVoiceInteractionRulesParameters](./definitions/ListVoiceInteractionRulesParameters.ts)
- `result` is of type
  [CommInteractionRulesResource](./definitions/CommInteractionRulesResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Interaction-Rules-listVoiceInteractionRules)
in API Explorer.

## createVoiceInteractionRule

Create Interaction Rule

| Name             | Value                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                            |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/interaction-rules` |
| Rate Limit Group | `Medium`                                                                                          |
| App Permission   | `EditExtensions`                                                                                  |
| User Permission  | `N/A`                                                                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().voice().interactionRules().post(
    commInteractionRuleCreateRequest,
  );
await rc.revoke();
```

- `commInteractionRuleCreateRequest` is of type
  [CommInteractionRuleCreateRequest](./definitions/CommInteractionRuleCreateRequest.ts)
- `result` is of type
  [CommInteractionRuleResource](./definitions/CommInteractionRuleResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Interaction-Rules-createVoiceInteractionRule)
in API Explorer.

## readVoiceInteractionRule

Get Interaction Rule

| Name             | Value                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                                      |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/interaction-rules/{ruleId}` |
| Rate Limit Group | `Medium`                                                                                                   |
| App Permission   | `ReadAccounts`                                                                                             |
| User Permission  | `N/A`                                                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().voice().interactionRules(ruleId).get();
await rc.revoke();
```

- `result` is of type
  [CommInteractionRuleResource](./definitions/CommInteractionRuleResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Interaction-Rules-readVoiceInteractionRule)
in API Explorer.

## deleteVoiceInteractionRule

Delete Interaction Rule

| Name             | Value                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                                   |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/interaction-rules/{ruleId}` |
| Rate Limit Group | `Medium`                                                                                                   |
| App Permission   | `EditExtensions`                                                                                           |
| User Permission  | `N/A`                                                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().voice().interactionRules(ruleId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Interaction-Rules-deleteVoiceInteractionRule)
in API Explorer.

## updateVoiceInteractionRule

Update Interaction Rule

| Name             | Value                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `PATCH`                                                                                                    |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/interaction-rules/{ruleId}` |
| Rate Limit Group | `Medium`                                                                                                   |
| App Permission   | `EditExtensions`                                                                                           |
| User Permission  | `N/A`                                                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().voice().interactionRules(ruleId).patch(
    commInteractionRuleUpdateRequest,
  );
await rc.revoke();
```

- `commInteractionRuleUpdateRequest` is of type
  [CommInteractionRuleUpdateRequest](./definitions/CommInteractionRuleUpdateRequest.ts)
- `result` is of type
  [CommInteractionRuleResource](./definitions/CommInteractionRuleResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Interaction-Rules-updateVoiceInteractionRule)
in API Explorer.

## listVoiceStateBasedRules

List State-based Rules

| Name             | Value                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                       |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/state-rules` |
| Rate Limit Group | `Medium`                                                                                    |
| App Permission   | `ReadAccounts`                                                                              |
| User Permission  | `N/A`                                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().voice().stateRules().list(listVoiceStateBasedRulesParameters);
await rc.revoke();
```

- `listVoiceStateBasedRulesParameters` is of type
  [ListVoiceStateBasedRulesParameters](./definitions/ListVoiceStateBasedRulesParameters.ts)
- `result` is of type
  [CommStateBasedRulesResource](./definitions/CommStateBasedRulesResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#State-based-Rules-listVoiceStateBasedRules)
in API Explorer.

## readVoiceStateBasedRule

Get State-based Rule

| Name             | Value                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                                 |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/state-rules/{stateId}` |
| Rate Limit Group | `Medium`                                                                                              |
| App Permission   | `ReadAccounts`                                                                                        |
| User Permission  | `N/A`                                                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().voice().stateRules(stateId).get();
await rc.revoke();
```

- `result` is of type
  [CommStateBasedRuleResource](./definitions/CommStateBasedRuleResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#State-based-Rules-readVoiceStateBasedRule)
in API Explorer.

## updateVoiceStateBasedRule

Update State-based Rule

| Name             | Value                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| HTTP Method      | `PATCH`                                                                                               |
| Endpoint         | `/restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/state-rules/{stateId}` |
| Rate Limit Group | `Medium`                                                                                              |
| App Permission   | `EditExtensions`                                                                                      |
| User Permission  | `N/A`                                                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi().v2().accounts(accountId).extensions(extensionId)
  .commHandling().voice().stateRules(stateId).patch(
    commStateBasedRuleUpdateRequest,
  );
await rc.revoke();
```

- `commStateBasedRuleUpdateRequest` is of type
  [CommStateBasedRuleUpdateRequest](./definitions/CommStateBasedRuleUpdateRequest.ts)
- `result` is of type
  [CommStateBasedRuleResource](./definitions/CommStateBasedRuleResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#State-based-Rules-updateVoiceStateBasedRule)
in API Explorer.

## updateCallMonitoringGroupList

Update Call Monitoring Group List

| Name             | Value                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                   |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign` |
| Rate Limit Group | `Heavy`                                                                                  |
| App Permission   | `EditExtensions`                                                                         |
| User Permission  | `Groups`                                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .callMonitoringGroups(groupId).bulkAssign().post(callMonitoringBulkAssign);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callMonitoringBulkAssign` is of type
  [CallMonitoringBulkAssign](./definitions/CallMonitoringBulkAssign.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Monitoring-Groups-updateCallMonitoringGroupList)
in API Explorer.

## listDevicesAutomaticLocationUpdates

List Devices

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/devices` |
| Rate Limit Group | `Medium`                                                                          |
| App Permission   | `EditAccounts`                                                                    |
| User Permission  | `ConfigureEmergencyMaps`                                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().devices().get(
    listDevicesAutomaticLocationUpdatesParameters,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listDevicesAutomaticLocationUpdatesParameters` is of type
  [ListDevicesAutomaticLocationUpdatesParameters](./definitions/ListDevicesAutomaticLocationUpdatesParameters.ts)
- `result` is of type
  [ListDevicesAutomaticLocationUpdates](./definitions/ListDevicesAutomaticLocationUpdates.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listDevicesAutomaticLocationUpdates)
in API Explorer.

## assignMultipleDevicesAutomaticLocationUpdates

Enable Automatic Location Updates Feature

| Name             | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/devices/bulk-assign` |
| Rate Limit Group | `Heavy`                                                                                       |
| App Permission   | `EditAccounts`                                                                                |
| User Permission  | `ConfigureEmergencyMaps`                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().devices().bulkAssign().post(
    assignMultipleDevicesAutomaticLocationUpdates,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `assignMultipleDevicesAutomaticLocationUpdates` is of type
  [AssignMultipleDevicesAutomaticLocationUpdates](./definitions/AssignMultipleDevicesAutomaticLocationUpdates.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-assignMultipleDevicesAutomaticLocationUpdates)
in API Explorer.

## listNetworks

Get Network Map

| Name             | Value                                                                              |
| ---------------- | ---------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks` |
| Rate Limit Group | `Heavy`                                                                            |
| App Permission   | `EditAccounts`                                                                     |
| User Permission  | `ConfigureEmergencyMaps`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().networks().list(listNetworksParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listNetworksParameters` is of type
  [ListNetworksParameters](./definitions/ListNetworksParameters.ts)
- `result` is of type [NetworksList](./definitions/NetworksList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listNetworks)
in API Explorer.

## createNetwork

Create Network

| Name             | Value                                                                              |
| ---------------- | ---------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks` |
| Rate Limit Group | `Heavy`                                                                            |
| App Permission   | `EditAccounts`                                                                     |
| User Permission  | `ConfigureEmergencyMaps`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().networks().post(createNetworkRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createNetworkRequest` is of type
  [CreateNetworkRequest](./definitions/CreateNetworkRequest.ts)
- `result` is of type [NetworkInfo](./definitions/NetworkInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createNetwork)
in API Explorer.

## readNetwork

Get Network

| Name             | Value                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                          |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks/{networkId}` |
| Rate Limit Group | `Medium`                                                                                       |
| App Permission   | `EditAccounts`                                                                                 |
| User Permission  | `ConfigureEmergencyMaps`                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().networks(networkId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [NetworkInfo](./definitions/NetworkInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readNetwork)
in API Explorer.

## updateNetwork

Update Network

| Name             | Value                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                          |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks/{networkId}` |
| Rate Limit Group | `Heavy`                                                                                        |
| App Permission   | `EditAccounts`                                                                                 |
| User Permission  | `ConfigureEmergencyMaps`                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().networks(networkId).put(updateNetworkRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `updateNetworkRequest` is of type
  [UpdateNetworkRequest](./definitions/UpdateNetworkRequest.ts)
- `result` is of type [NetworkInfo](./definitions/NetworkInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateNetwork)
in API Explorer.

## deleteNetwork

Delete Network

| Name             | Value                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/networks/{networkId}` |
| Rate Limit Group | `Heavy`                                                                                        |
| App Permission   | `EditAccounts`                                                                                 |
| User Permission  | `ConfigureEmergencyMaps`                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().networks(networkId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteNetwork)
in API Explorer.

## listAccountSwitches

List Account Switches

| Name             | Value                                                                              |
| ---------------- | ---------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches` |
| Rate Limit Group | `Heavy`                                                                            |
| App Permission   | `EditAccounts`                                                                     |
| User Permission  | `ConfigureEmergencyMaps`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().switches().list(listAccountSwitchesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listAccountSwitchesParameters` is of type
  [ListAccountSwitchesParameters](./definitions/ListAccountSwitchesParameters.ts)
- `result` is of type [SwitchesList](./definitions/SwitchesList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listAccountSwitches)
in API Explorer.

## createSwitch

Create Switch

| Name             | Value                                                                              |
| ---------------- | ---------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches` |
| Rate Limit Group | `Heavy`                                                                            |
| App Permission   | `EditAccounts`                                                                     |
| User Permission  | `ConfigureEmergencyMaps`                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().switches().post(createSwitchInfo);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createSwitchInfo` is of type
  [CreateSwitchInfo](./definitions/CreateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./definitions/SwitchInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createSwitch)
in API Explorer.

## readSwitch

Get Switch

| Name             | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches/{switchId}` |
| Rate Limit Group | `Medium`                                                                                      |
| App Permission   | `EditAccounts`                                                                                |
| User Permission  | `ConfigureEmergencyMaps`                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().switches(switchId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [SwitchInfo](./definitions/SwitchInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readSwitch)
in API Explorer.

## updateSwitch

Update Switch

| Name             | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches/{switchId}` |
| Rate Limit Group | `Heavy`                                                                                       |
| App Permission   | `EditAccounts`                                                                                |
| User Permission  | `ConfigureEmergencyMaps`                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().switches(switchId).put(updateSwitchInfo);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `updateSwitchInfo` is of type
  [UpdateSwitchInfo](./definitions/UpdateSwitchInfo.ts)
- `result` is of type [SwitchInfo](./definitions/SwitchInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateSwitch)
in API Explorer.

## deleteSwitch

Delete Switch

| Name             | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches/{switchId}` |
| Rate Limit Group | `Heavy`                                                                                       |
| App Permission   | `EditAccounts`                                                                                |
| User Permission  | `ConfigureEmergencyMaps`                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().switches(switchId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteSwitch)
in API Explorer.

## createMultipleSwitches

Create Multiple Switches

| Name             | Value                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches-bulk-create` |
| Rate Limit Group | `Heavy`                                                                                        |
| App Permission   | `EditAccounts`                                                                                 |
| User Permission  | `ConfigureEmergencyMaps`                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().switchesBulkCreate().post(
    createMultipleSwitchesRequest,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createMultipleSwitchesRequest` is of type
  [CreateMultipleSwitchesRequest](./definitions/CreateMultipleSwitchesRequest.ts)
- `result` is of type
  [CreateMultipleSwitchesResponse](./definitions/CreateMultipleSwitchesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createMultipleSwitches)
in API Explorer.

## updateMultipleSwitches

Update Multiple Switches

| Name             | Value                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches-bulk-update` |
| Rate Limit Group | `Heavy`                                                                                        |
| App Permission   | `EditAccounts`                                                                                 |
| User Permission  | `ConfigureEmergencyMaps`                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().switchesBulkUpdate().post(
    updateMultipleSwitchesRequest,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `updateMultipleSwitchesRequest` is of type
  [UpdateMultipleSwitchesRequest](./definitions/UpdateMultipleSwitchesRequest.ts)
- `result` is of type
  [UpdateMultipleSwitchesResponse](./definitions/UpdateMultipleSwitchesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateMultipleSwitches)
in API Explorer.

## validateMultipleSwitches

Validate Multiple Switches

| Name             | Value                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| HTTP Method      | `POST`                                                                                           |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches-bulk-validate` |
| Rate Limit Group | `Heavy`                                                                                          |
| App Permission   | `EditAccounts`                                                                                   |
| User Permission  | `ConfigureEmergencyMaps`                                                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().switchesBulkValidate().post(
    validateMultipleSwitchesRequest,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `validateMultipleSwitchesRequest` is of type
  [ValidateMultipleSwitchesRequest](./definitions/ValidateMultipleSwitchesRequest.ts)
- `result` is of type
  [ValidateMultipleSwitchesResponse](./definitions/ValidateMultipleSwitchesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-validateMultipleSwitches)
in API Explorer.

## readAutomaticLocationUpdatesTask

Get Emergency Map Configuration Task

| Name             | Value                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/tasks/{taskId}` |
| Rate Limit Group | `Light`                                                                                  |
| App Permission   | `EditAccounts`                                                                           |
| User Permission  | `ConfigureEmergencyMaps`                                                                 |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().tasks(taskId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type
  [AutomaticLocationUpdatesTaskInfo](./definitions/AutomaticLocationUpdatesTaskInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readAutomaticLocationUpdatesTask)
in API Explorer.

## listAutomaticLocationUpdatesUsers

List Users

| Name             | Value                                                                           |
| ---------------- | ------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                           |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/users` |
| Rate Limit Group | `Medium`                                                                        |
| App Permission   | `EditAccounts`                                                                  |
| User Permission  | `ConfigureEmergencyMaps`                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().users().get(
    listAutomaticLocationUpdatesUsersParameters,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listAutomaticLocationUpdatesUsersParameters` is of type
  [ListAutomaticLocationUpdatesUsersParameters](./definitions/ListAutomaticLocationUpdatesUsersParameters.ts)
- `result` is of type
  [AutomaticLocationUpdatesUserList](./definitions/AutomaticLocationUpdatesUserList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listAutomaticLocationUpdatesUsers)
in API Explorer.

## assignMultipleAutomaticLocationUpdatesUsers

Enable Automatic Location Updates for Users

| Name             | Value                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/users/bulk-assign` |
| Rate Limit Group | `Heavy`                                                                                     |
| App Permission   | `EditAccounts`                                                                              |
| User Permission  | `ConfigureEmergencyMaps`                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().users().bulkAssign().post(
    emergencyAddressAutoUpdateUsersBulkAssignResource,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `emergencyAddressAutoUpdateUsersBulkAssignResource` is of type
  [EmergencyAddressAutoUpdateUsersBulkAssignResource](./definitions/EmergencyAddressAutoUpdateUsersBulkAssignResource.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-assignMultipleAutomaticLocationUpdatesUsers)
in API Explorer.

## listWirelessPoints

List Wireless Points

| Name             | Value                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                     |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points` |
| Rate Limit Group | `Medium`                                                                                  |
| App Permission   | `EditAccounts`                                                                            |
| User Permission  | `ConfigureEmergencyMaps`                                                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().wirelessPoints().list(
    listWirelessPointsParameters,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `listWirelessPointsParameters` is of type
  [ListWirelessPointsParameters](./definitions/ListWirelessPointsParameters.ts)
- `result` is of type [WirelessPointsList](./definitions/WirelessPointsList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-listWirelessPoints)
in API Explorer.

## createWirelessPoint

Create Wireless Point

| Name             | Value                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points` |
| Rate Limit Group | `Heavy`                                                                                   |
| App Permission   | `EditAccounts`                                                                            |
| User Permission  | `ConfigureEmergencyMaps`                                                                  |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().wirelessPoints().post(createWirelessPoint);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createWirelessPoint` is of type
  [CreateWirelessPoint](./definitions/CreateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./definitions/WirelessPointInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createWirelessPoint)
in API Explorer.

## readWirelessPoint

Get Wireless Point

| Name             | Value                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}` |
| Rate Limit Group | `Medium`                                                                                            |
| App Permission   | `EditAccounts`                                                                                      |
| User Permission  | `ConfigureEmergencyMaps`                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().wirelessPoints(pointId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is of type [WirelessPointInfo](./definitions/WirelessPointInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-readWirelessPoint)
in API Explorer.

## updateWirelessPoint

Update Wireless Point

| Name             | Value                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}` |
| Rate Limit Group | `Heavy`                                                                                             |
| App Permission   | `EditAccounts`                                                                                      |
| User Permission  | `ConfigureEmergencyMaps`                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().wirelessPoints(pointId).put(
    updateWirelessPoint,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `updateWirelessPoint` is of type
  [UpdateWirelessPoint](./definitions/UpdateWirelessPoint.ts)
- `result` is of type [WirelessPointInfo](./definitions/WirelessPointInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateWirelessPoint)
in API Explorer.

## deleteWirelessPoint

Delete Wireless Point

| Name             | Value                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}` |
| Rate Limit Group | `Heavy`                                                                                             |
| App Permission   | `EditAccounts`                                                                                      |
| User Permission  | `ConfigureEmergencyMaps`                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().wirelessPoints(pointId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-deleteWirelessPoint)
in API Explorer.

## createMultipleWirelessPoints

Create Multiple Wireless Points

| Name             | Value                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-create` |
| Rate Limit Group | `Heavy`                                                                                               |
| App Permission   | `EditAccounts`                                                                                        |
| User Permission  | `ConfigureEmergencyMaps`                                                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().wirelessPointsBulkCreate().post(
    createMultipleWirelessPointsRequest,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `createMultipleWirelessPointsRequest` is of type
  [CreateMultipleWirelessPointsRequest](./definitions/CreateMultipleWirelessPointsRequest.ts)
- `result` is of type
  [CreateMultipleWirelessPointsResponse](./definitions/CreateMultipleWirelessPointsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-createMultipleWirelessPoints)
in API Explorer.

## updateMultipleWirelessPoints

Update Multiple Wireless Points

| Name             | Value                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                                |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-update` |
| Rate Limit Group | `Heavy`                                                                                               |
| App Permission   | `EditAccounts`                                                                                        |
| User Permission  | `ConfigureEmergencyMaps`                                                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().wirelessPointsBulkUpdate().post(
    updateMultipleWirelessPointsRequest,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `updateMultipleWirelessPointsRequest` is of type
  [UpdateMultipleWirelessPointsRequest](./definitions/UpdateMultipleWirelessPointsRequest.ts)
- `result` is of type
  [UpdateMultipleWirelessPointsResponse](./definitions/UpdateMultipleWirelessPointsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-updateMultipleWirelessPoints)
in API Explorer.

## validateMultipleWirelessPoints

Validate Multiple Wireless Points

| Name             | Value                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                                  |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-validate` |
| Rate Limit Group | `Heavy`                                                                                                 |
| App Permission   | `EditAccounts`                                                                                          |
| User Permission  | `ConfigureEmergencyMaps`                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId)
  .emergencyAddressAutoUpdate().wirelessPointsBulkValidate().post(
    validateMultipleWirelessPointsRequest,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `validateMultipleWirelessPointsRequest` is of type
  [ValidateMultipleWirelessPointsRequest](./definitions/ValidateMultipleWirelessPointsRequest.ts)
- `result` is of type
  [ValidateMultipleWirelessPointsResponse](./definitions/ValidateMultipleWirelessPointsResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Automatic-Location-Updates-validateMultipleWirelessPoints)
in API Explorer.

## listBlockedAllowedNumbers

List Blocked/Allowed Phone Numbers

| Name             | Value                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                             |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers` |
| Rate Limit Group | `Light`                                                                                           |
| App Permission   | `ReadAccounts`                                                                                    |
| User Permission  | `ReadBlockedNumbers`                                                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callerBlocking().phoneNumbers().list(listBlockedAllowedNumbersParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listBlockedAllowedNumbersParameters` is of type
  [ListBlockedAllowedNumbersParameters](./definitions/ListBlockedAllowedNumbersParameters.ts)
- `result` is of type
  [BlockedAllowedPhoneNumbersList](./definitions/BlockedAllowedPhoneNumbersList.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-listBlockedAllowedNumbers)
in API Explorer.

## createBlockedAllowedNumber

Add Blocked/Allowed Number

| Name             | Value                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers` |
| Rate Limit Group | `Medium`                                                                                          |
| App Permission   | `EditExtensions`                                                                                  |
| User Permission  | `EditBlockedNumbers`                                                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callerBlocking().phoneNumbers().post(addBlockedAllowedPhoneNumber);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `addBlockedAllowedPhoneNumber` is of type
  [AddBlockedAllowedPhoneNumber](./definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type
  [BlockedAllowedPhoneNumberInfo](./definitions/BlockedAllowedPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-createBlockedAllowedNumber)
in API Explorer.

## readBlockedAllowedNumber

Get Blocked/Allowed Number

| Name             | Value                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}` |
| Rate Limit Group | `Light`                                                                                                             |
| App Permission   | `ReadAccounts`                                                                                                      |
| User Permission  | `ReadBlockedNumbers`                                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callerBlocking().phoneNumbers(blockedNumberId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [BlockedAllowedPhoneNumberInfo](./definitions/BlockedAllowedPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-readBlockedAllowedNumber)
in API Explorer.

## updateBlockedAllowedNumber

Update Blocked/Allowed Number

| Name             | Value                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}` |
| Rate Limit Group | `Medium`                                                                                                            |
| App Permission   | `EditExtensions`                                                                                                    |
| User Permission  | `EditBlockedNumbers`                                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callerBlocking().phoneNumbers(blockedNumberId).put(
  addBlockedAllowedPhoneNumber,
);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `addBlockedAllowedPhoneNumber` is of type
  [AddBlockedAllowedPhoneNumber](./definitions/AddBlockedAllowedPhoneNumber.ts)
- `result` is of type
  [BlockedAllowedPhoneNumberInfo](./definitions/BlockedAllowedPhoneNumberInfo.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-updateBlockedAllowedNumber)
in API Explorer.

## deleteBlockedAllowedNumber

Delete Blocked/Allowed Number

| Name             | Value                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                                            |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}` |
| Rate Limit Group | `Medium`                                                                                                            |
| App Permission   | `EditExtensions`                                                                                                    |
| User Permission  | `EditBlockedNumbers`                                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).callerBlocking().phoneNumbers(blockedNumberId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-deleteBlockedAllowedNumber)
in API Explorer.

## listUserMessageTemplates

List User Message Templates

| Name             | Value                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store-templates` |
| Rate Limit Group | `Light`                                                                                     |
| App Permission   | `ReadAccounts`                                                                              |
| User Permission  | `N/A`                                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageStoreTemplates().list(listUserMessageTemplatesParameters);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `listUserMessageTemplatesParameters` is of type
  [ListUserMessageTemplatesParameters](./definitions/ListUserMessageTemplatesParameters.ts)
- `result` is of type
  [MessageTemplatesListResponse](./definitions/MessageTemplatesListResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Templates-listUserMessageTemplates)
in API Explorer.

## createUserMessageTemplate

Create User Message Template

| Name             | Value                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                      |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store-templates` |
| Rate Limit Group | `Medium`                                                                                    |
| App Permission   | `EditExtensions`                                                                            |
| User Permission  | `N/A`                                                                                       |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageStoreTemplates().post(messageTemplateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `messageTemplateRequest` is of type
  [MessageTemplateRequest](./definitions/MessageTemplateRequest.ts)
- `result` is of type
  [MessageTemplateResponse](./definitions/MessageTemplateResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Templates-createUserMessageTemplate)
in API Explorer.

## readUserMessageTemplate

Get User Message Template

| Name             | Value                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store-templates/{templateId}` |
| Rate Limit Group | `Light`                                                                                                  |
| App Permission   | `ReadAccounts`                                                                                           |
| User Permission  | `N/A`                                                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageStoreTemplates(templateId).get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [MessageTemplateResponse](./definitions/MessageTemplateResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Templates-readUserMessageTemplate)
in API Explorer.

## updateUserMessageTemplate

Update User Message Template

| Name             | Value                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `PUT`                                                                                                    |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store-templates/{templateId}` |
| Rate Limit Group | `Medium`                                                                                                 |
| App Permission   | `EditExtensions`                                                                                         |
| User Permission  | `N/A`                                                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageStoreTemplates(templateId).put(messageTemplateUpdateRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `messageTemplateUpdateRequest` is of type
  [MessageTemplateUpdateRequest](./definitions/MessageTemplateUpdateRequest.ts)
- `result` is of type
  [MessageTemplateResponse](./definitions/MessageTemplateResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Templates-updateUserMessageTemplate)
in API Explorer.

## deleteUserMessageTemplate

Delete User Message Template

| Name             | Value                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `DELETE`                                                                                                 |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store-templates/{templateId}` |
| Rate Limit Group | `Medium`                                                                                                 |
| App Permission   | `EditExtensions`                                                                                         |
| User Permission  | `N/A`                                                                                                    |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).messageStoreTemplates(templateId).delete();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#SMS-Templates-deleteUserMessageTemplate)
in API Explorer.

## smsConfigurationInfo

Get SMS Configuration

| Name             | Value                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                                                                              |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/phone-number/{phoneNumberId}/sms-configuration` |
| Rate Limit Group | `Light`                                                                                                            |
| App Permission   | `ReadAccounts`                                                                                                     |
| User Permission  | `N/A`                                                                                                              |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).extension(
  extensionId,
).phoneNumber(phoneNumberId).smsConfiguration().get();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- Parameter `extensionId` is optional with default value `~`
- `result` is of type
  [SmsConfigurationResource](./definitions/SmsConfigurationResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-smsConfigurationInfo)
in API Explorer.

## createCallPartyWithBringIn

Bring-In Call Party

| Name             | Value                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                               |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/bring-in` |
| Rate Limit Group | `Light`                                                                                              |
| App Permission   | `CallControl`                                                                                        |
| User Permission  | `N/A`                                                                                                |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties().bringIn().post(addPartyRequest);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `addPartyRequest` is of type
  [AddPartyRequest](./definitions/AddPartyRequest.ts)
- `result` is of type [CallParty](./definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-createCallPartyWithBringIn)
in API Explorer.

## answerCallParty

Answer Call Party

| Name             | Value                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| HTTP Method      | `POST`                                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/answer` |
| Rate Limit Group | `Light`                                                                                                      |
| App Permission   | `CallControl`                                                                                                |
| User Permission  | `N/A`                                                                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).answer().post(answerTarget);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `answerTarget` is of type [AnswerTarget](./definitions/AnswerTarget.ts)
- `result` is of type [CallParty](./definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-answerCallParty)
in API Explorer.

## bridgeCallParty

Bridge Call Party

| Name             | Value                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| HTTP Method      | `POST`                                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/bridge` |
| Rate Limit Group | `Light`                                                                                                      |
| App Permission   | `CallControl`                                                                                                |
| User Permission  | `N/A`                                                                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).bridge().post(
    bridgeTargetRequest,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `bridgeTargetRequest` is of type
  [BridgeTargetRequest](./definitions/BridgeTargetRequest.ts)
- `result` is of type [CallParty](./definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-bridgeCallParty)
in API Explorer.

## forwardCallParty

Forward Call Party

| Name             | Value                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/forward` |
| Rate Limit Group | `Light`                                                                                                       |
| App Permission   | `CallControl`                                                                                                 |
| User Permission  | `N/A`                                                                                                         |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).forward().post(forwardTarget);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `forwardTarget` is of type [ForwardTarget](./definitions/ForwardTarget.ts)
- `result` is of type
  [ForwardCallPartyResponse](./definitions/ForwardCallPartyResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-forwardCallParty)
in API Explorer.

## ignoreCallInQueue

Ignore Call in Queue

| Name             | Value                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| HTTP Method      | `POST`                                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/ignore` |
| Rate Limit Group | `Light`                                                                                                      |
| App Permission   | `CallControl`                                                                                                |
| User Permission  | `N/A`                                                                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).ignore().post(
    ignoreRequestBody,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `ignoreRequestBody` is of type
  [IgnoreRequestBody](./definitions/IgnoreRequestBody.ts)
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-ignoreCallInQueue)
in API Explorer.

## pickupCallParty

Pickup Call

| Name             | Value                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| HTTP Method      | `POST`                                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/pickup` |
| Rate Limit Group | `Light`                                                                                                      |
| App Permission   | `CallControl`                                                                                                |
| User Permission  | `N/A`                                                                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).pickup().post(pickupTarget);
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `pickupTarget` is of type [PickupTarget](./definitions/PickupTarget.ts)
- `result` is of type [CallParty](./definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-pickupCallParty)
in API Explorer.

## startCallRecording

Create Recording

| Name             | Value                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                                           |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings` |
| Rate Limit Group | `Light`                                                                                                          |
| App Permission   | `CallControl`                                                                                                    |
| User Permission  | `N/A`                                                                                                            |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).recordings().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-startCallRecording)
in API Explorer.

## pauseResumeCallRecording

Pause/Resume Recording

| Name             | Value                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| HTTP Method      | `PATCH`                                                                                                                        |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings/{recordingId}` |
| Rate Limit Group | `Light`                                                                                                                        |
| App Permission   | `CallControl`                                                                                                                  |
| User Permission  | `N/A`                                                                                                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).recordings(recordingId).patch(
    callRecordingUpdate,
    pauseResumeCallRecordingParameters,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `callRecordingUpdate` is of type
  [CallRecordingUpdate](./definitions/CallRecordingUpdate.ts)
- `pauseResumeCallRecordingParameters` is of type
  [PauseResumeCallRecordingParameters](./definitions/PauseResumeCallRecordingParameters.ts)
- `result` is of type [CallRecording](./definitions/CallRecording.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-pauseResumeCallRecording)
in API Explorer.

## rejectParty

Reject Call Party

| Name             | Value                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| HTTP Method      | `POST`                                                                                                       |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reject` |
| Rate Limit Group | `Light`                                                                                                      |
| App Permission   | `CallControl`                                                                                                |
| User Permission  | `N/A`                                                                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).reject().post();
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-rejectParty)
in API Explorer.

## superviseCallParty

Supervise Call Party

| Name             | Value                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                                          |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/supervise` |
| Rate Limit Group | `Light`                                                                                                         |
| App Permission   | `CallControl`                                                                                                   |
| User Permission  | `N/A`                                                                                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).supervise().post(
    partySuperviseRequest,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `partySuperviseRequest` is of type
  [PartySuperviseRequest](./definitions/PartySuperviseRequest.ts)
- `result` is of type
  [PartySuperviseResponse](./definitions/PartySuperviseResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-superviseCallParty)
in API Explorer.

## transferCallParty

Transfer Call Party

| Name             | Value                                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| HTTP Method      | `POST`                                                                                                         |
| Endpoint         | `/restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/transfer` |
| Rate Limit Group | `Light`                                                                                                        |
| App Permission   | `CallControl`                                                                                                  |
| User Permission  | `N/A`                                                                                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.restapi(apiVersion).account(accountId).telephony()
  .sessions(telephonySessionId).parties(partyId).transfer().post(
    transferTarget,
  );
await rc.revoke();
```

- Parameter `apiVersion` is optional with default value `v1.0`
- Parameter `accountId` is optional with default value `~`
- `transferTarget` is of type [TransferTarget](./definitions/TransferTarget.ts)
- `result` is of type [CallParty](./definitions/CallParty.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-transferCallParty)
in API Explorer.

## rcwHistoryListParticipants

List Session Participants

| Name             | Value                                                                        |
| ---------------- | ---------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                        |
| Endpoint         | `/webinar/history/v1/webinars/{webinarId}/sessions/{sessionId}/participants` |
| Rate Limit Group | `Heavy`                                                                      |
| App Permission   | `ReadWebinars`                                                               |
| User Permission  | `N/A`                                                                        |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().webinars(webinarId).sessions(
  sessionId,
).participants().get(rcwHistoryListParticipantsParameters);
await rc.revoke();
```

- `rcwHistoryListParticipantsParameters` is of type
  [RcwHistoryListParticipantsParameters](./definitions/RcwHistoryListParticipantsParameters.ts)
- `result` is of type
  [ParticipantListResource](./definitions/ParticipantListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Webinars-rcwHistoryListParticipants)
in API Explorer.

## rcwConfigListInvitees

List Session Invitees

| Name             | Value                                                                          |
| ---------------- | ------------------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                                          |
| Endpoint         | `/webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}/invitees` |
| Rate Limit Group | `Heavy`                                                                        |
| App Permission   | `ReadWebinars`                                                                 |
| User Permission  | `N/A`                                                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars(webinarId)
  .sessions(sessionId).invitees().list(rcwConfigListInviteesParameters);
await rc.revoke();
```

- `rcwConfigListInviteesParameters` is of type
  [RcwConfigListInviteesParameters](./definitions/RcwConfigListInviteesParameters.ts)
- `result` is of type
  [WcsInviteeListResource](./definitions/WcsInviteeListResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Invitees-rcwConfigListInvitees)
in API Explorer.

## rcwConfigUpdateInvitees

Bulk Add/Delete Session Invitees

| Name             | Value                                                                          |
| ---------------- | ------------------------------------------------------------------------------ |
| HTTP Method      | `PATCH`                                                                        |
| Endpoint         | `/webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}/invitees` |
| Rate Limit Group | `Heavy`                                                                        |
| App Permission   | `EditWebinars`                                                                 |
| User Permission  | `N/A`                                                                          |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars(webinarId)
  .sessions(sessionId).invitees().patch(bulkUpdateInviteesRequest);
await rc.revoke();
```

- `bulkUpdateInviteesRequest` is of type
  [BulkUpdateInviteesRequest](./definitions/BulkUpdateInviteesRequest.ts)
- `result` is of type
  [BulkUpdateInviteesResponse](./definitions/BulkUpdateInviteesResponse.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Invitees-rcwConfigUpdateInvitees)
in API Explorer.

## rcwConfigGetInvitee

Get Session Invitee

| Name             | Value                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------ |
| HTTP Method      | `GET`                                                                                      |
| Endpoint         | `/webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}/invitees/{inviteeId}` |
| Rate Limit Group | `Heavy`                                                                                    |
| App Permission   | `ReadWebinars`                                                                             |
| User Permission  | `N/A`                                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars(webinarId)
  .sessions(sessionId).invitees(inviteeId).get();
await rc.revoke();
```

- `result` is of type [InviteeResource](./definitions/InviteeResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Invitees-rcwConfigGetInvitee)
in API Explorer.

## rcwConfigUpdateInvitee

Update Session Invitee

| Name             | Value                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------ |
| HTTP Method      | `PUT`                                                                                      |
| Endpoint         | `/webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}/invitees/{inviteeId}` |
| Rate Limit Group | `Heavy`                                                                                    |
| App Permission   | `EditWebinars`                                                                             |
| User Permission  | `N/A`                                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars(webinarId)
  .sessions(sessionId).invitees(inviteeId).put(updateInviteeRequest);
await rc.revoke();
```

- `updateInviteeRequest` is of type
  [UpdateInviteeRequest](./definitions/UpdateInviteeRequest.ts)
- `result` is of type [InviteeResource](./definitions/InviteeResource.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Invitees-rcwConfigUpdateInvitee)
in API Explorer.

## rcwConfigDeleteInvitee

Delete Session Invitee

| Name             | Value                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------ |
| HTTP Method      | `DELETE`                                                                                   |
| Endpoint         | `/webinar/configuration/v1/webinars/{webinarId}/sessions/{sessionId}/invitees/{inviteeId}` |
| Rate Limit Group | `Heavy`                                                                                    |
| App Permission   | `EditWebinars`                                                                             |
| User Permission  | `N/A`                                                                                      |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().configuration().v1().webinars(webinarId)
  .sessions(sessionId).invitees(inviteeId).delete();
await rc.revoke();
```

- `result` is an empty string

[Try it out](https://developer.ringcentral.com/api-reference#Invitees-rcwConfigDeleteInvitee)
in API Explorer.

## rcwHistoryGetParticipantInfo

Get Participant Information

| Name             | Value                                                                             |
| ---------------- | --------------------------------------------------------------------------------- |
| HTTP Method      | `GET`                                                                             |
| Endpoint         | `/webinar/history/v1/webinars/{webinarId}/sessions/{sessionId}/participants/self` |
| Rate Limit Group | `Heavy`                                                                           |
| App Permission   | `ReadWebinars`                                                                    |
| User Permission  | `N/A`                                                                             |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().history().v1().webinars(webinarId).sessions(
  sessionId,
).participants().self().get();
await rc.revoke();
```

- `result` is of type
  [ParticipantReducedModel](./definitions/ParticipantReducedModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Historical-Webinars-rcwHistoryGetParticipantInfo)
in API Explorer.

## rcwRegGetSession

Get Registration Session Info

| Name             | Value                                           |
| ---------------- | ----------------------------------------------- |
| HTTP Method      | `GET`                                           |
| Endpoint         | `/webinar/registration/v1/sessions/{sessionId}` |
| Rate Limit Group | `Heavy`                                         |
| App Permission   | `ReadWebinars`                                  |
| User Permission  | `N/A`                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().registration().v1().sessions(sessionId).get();
await rc.revoke();
```

- `result` is of type [RegSessionModel](./definitions/RegSessionModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Registration-Management-rcwRegGetSession)
in API Explorer.

## rcwRegUpdateSession

Update Registration Session

| Name             | Value                                           |
| ---------------- | ----------------------------------------------- |
| HTTP Method      | `PATCH`                                         |
| Endpoint         | `/webinar/registration/v1/sessions/{sessionId}` |
| Rate Limit Group | `Heavy`                                         |
| App Permission   | `EditWebinars`                                  |
| User Permission  | `N/A`                                           |

```ts
const rc = new RingCentral({ clientId, clientSecret, server });
await rc.authorize({ jwt });
var result = await rc.webinar().registration().v1().sessions(sessionId).patch(
  regSessionModel,
);
await rc.revoke();
```

- `regSessionModel` is of type
  [RegSessionModel](./definitions/RegSessionModel.ts)
- `result` is of type [RegSessionModel](./definitions/RegSessionModel.ts)

[Try it out](https://developer.ringcentral.com/api-reference#Registration-Management-rcwRegUpdateSession)
in API Explorer.
