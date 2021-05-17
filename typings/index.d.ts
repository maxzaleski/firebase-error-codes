// Type definitions for firebase-error-core 1.1.0 Project: https://github.com/maxzaleski/firebase-error-codes
// Definitions by: Maximilien Zaleski <https://github.com/maxzaleski>

declare module 'firebase-error-codes' {
  /**
   * Authentication error codes.
   *
   * @Docs:
   *  - https://firebase.google.com/docs/auth/admin/errors
   *  - https://firebase.google.com/docs/reference/js/firebase.auth.Error
   */
  const enum Auth {
    /**
     * The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of
     * 1000 bytes.
     */
    claimsTooLarge = 'auth/claims-too-large',

    /**
     * The provided email is already in use by an existing user.
     * Each user must have a unique email.
     */
    emailAlreadyExists = 'auth/email-already-exists',

    /**
     * The provided Firebase ID token is expired.
     */
    idTokenExpired = 'auth/id-token-expired',

    /**
     * The Firebase ID token has been revoked.
     */
    idTokenRevoked = 'auth/id-token-revoked',

    /**
     * The credential used to initialize the Admin SDK has insufficient permission to access the
     * requested Authentication resource. Refer to Set up a Firebase project for documentation
     * on how to generate a credential with appropriate permissions and use it to authenticate
     * the Admin SDKs.
     */
    insufficientPermission = 'auth/insufficient-permission',

    /**
     * The Authentication server encountered an unexpected error while trying to process the
     * request. The error message should contain the response from the Authentication server
     * containing additional information. If the error persists, please report the problem to
     * our Bug Report support channel.
     */
    internalError = 'auth/internal-error',

    /**
     * An invalid argument was provided to an Authentication method. The error message should
     * contain additional information.
     */
    invalidArgument = 'auth/invalid-argument',

    /**
     * The custom claim attributes provided to setCustomUserClaims() are invalid.
     */
    invalidClaims = 'auth/invalid-claims',

    /**
     * The continue URL must be a valid URL string.
     */
    invalidContinueURI = 'auth/invalid-continue-uri',

    /**
     * The creation time must be a valid UTC date string.
     */
    invalidCreationTime = 'auth/invalid-creation-time',

    /**
     * The credential used to authenticate the Admin SDKs cannot be used to perform the desired
     * action. Certain Authentication methods such as createCustomToken() and verifyIdToken()
     * require the SDK to be initialized with a certificate credential as opposed to a refresh
     * token or Application Default credential. See Initialize the SDK for documentation on how
     * to authenticate the Admin SDKs with a certificate credential.
     */
    invalidCredential = 'auth/invalid-credential',

    /**
     * The provided value for the disabled user property is invalid. It must be a boolean.
     */
    invalidDisabledField = 'auth/invalid-disabled-field',

    /**
     * The provided value for the displayName user property is invalid. It must be a non string.
     */
    invalidDisplayName = 'auth/invalid-display-name',

    /**
     * The provided dynamic link domain is not configured or authorized for the current project.
     */
    invalidDynamicLinkDomain = 'auth/invalid-dynamic-link-domain',

    /**
     * The provided value for the email user property is invalid. It must be a string email address.
     */
    invalidEmail = 'auth/invalid-email',

    /**
     * The provided value for the emailVerified user property is invalid. It must be a boolean.
     */
    invalidEmailVerified = 'auth/invalid-email-verified',

    /**
     * The hash algorithm must match one of the strings in the list of supported algorithms.
     */
    invalidHashAlgorithm = 'auth/invalid-hash-algorithm',

    /**
     * The hash block size must be a valid number.
     */
    invalidHashBlockSize = 'auth/invalid-hash-block-size',

    /**
     * The hash derived key length must be a valid number.
     */
    invalidHashDerivedKeyLength = 'auth/invalid-hash-derived-key-length',

    /**
     * The hash key must a valid byte buffer.
     */
    invalidHashKey = 'auth/invalid-hash-key',

    /**
     * The hash memory cost must be a valid number.
     */
    invalidHashMemoryCost = 'auth/invalid-hash-memory-cost',

    /**
     * The hash parallelization must be a valid number.
     */
    invalidHashParallelization = 'auth/invalid-hash-parallelization',

    /**
     * The hash rounds must be a valid number.
     */
    invalidHashRounds = 'auth/invalid-hash-rounds',

    /**
     * The hashing algorithm salt separator field must be a valid byte buffer.
     */
    invalidHashSaltSeparator = 'auth/invalid-hash-salt-separator',

    /**
     * The provided ID token is not a valid Firebase ID token.
     */
    invalidIdToken = 'auth/invalid-id-token',

    /**
     * The last sign time must be a valid UTC date string.
     */
    invalidLastSignInTime = 'auth/invalid-last-sign-in-time',

    /**
     * The provided next page token in listUsers() is invalid. It must be a valid non string.
     */
    invalidPageToken = 'auth/invalid-page-token',

    /**
     * The provided value for the password user property is invalid. It must be a string with at
     * least six characters.
     */
    invalidPassword = 'auth/invalid-password',

    /**
     * The password hash must be a valid byte buffer.
     */
    invalidPasswordHash = 'auth/invalid-password-hash',

    /**
     * The password salt must be a valid byte buffer
     */
    invalidPasswordSalt = 'auth/invalid-password-salt',

    /**
     * The provided value for the phoneNumber is invalid. It must be a non E.164 standard
     * compliant identifier string.
     */
    invalidPhoneNumber = 'auth/invalid-phone-number',

    /**
     * The provided value for the photoURL user property is invalid. It must be a string URL.
     */
    invalidPhotoUrl = 'auth/invalid-photo-url',

    /**
     * The providerData must be a valid array of UserInfo objects.
     */
    invalidProviderData = 'auth/invalid-provider-data',

    /**
     * The providerId must be a valid supported provider identifier string.
     */
    invalidProviderId = 'auth/invalid-provider-id',

    /**
     * The session cookie duration must be a valid number in milliseconds between 5 minutes and
     * 2 weeks.
     */
    invalidSessionCookieDuration = 'auth/invalid-session-cookie-duration',

    /**
     * The provided uid must be a non string with at most 128 characters.
     */
    invalidUID = 'auth/invalid-uid',

    /**
     * The user record to import is invalid.
     */
    invalidUserImport = 'auth/invalid-user-import',

    /**
     * The maximum allowed number of users to import has been exceeded.
     */
    maximumUserCountExceeded = 'auth/maximum-user-count-exceeded',

    /**
     * An Android Package Name must be provided if the Android App is required to be installed.
     */
    missingAndroidPkgName = 'auth/missing-android-pkg-name',

    /**
     * A valid continue URL must be provided in the request.
     */
    missingContinueURI = 'auth/missing-continue-uri',

    /**
     * Importing users with password hashes requires that the hashing algorithm and its
     * parameters be provided.
     */
    missingHashAlgorithm = 'auth/missing-hash-algorithm',

    /**
     * The request is missing an iOS Bundle ID.
     */
    missingIOSBundleId = 'auth/missing-ios-bundle-id',

    /**
     * A uid identifier is required for the current operation.
     */
    missingUID = 'auth/missing-uid',

    /**
     * The provided phoneNumber is already in use by an existing user. Each user must have a
     * unique phoneNumber.
     */
    phoneNumberAlreadyExists = 'auth/phone-number-already-exists',

    /**
     * No Firebase project was found for the credential used to initialize the Admin SDKs. Refer
     * to Set up a Firebase project for documentation on how to generate a credential for your
     * project and use it to authenticate the Admin SDKs.
     */
    projectNotFound = 'auth/project-not-found',

    /**
     * One or more custom user claims provided to setCustomUserClaims() are reserved. For
     * example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc) should
     * not be used as keys for custom claims.
     */
    reservedClaims = 'auth/reserved-claims',

    /**
     * The provided Firebase session cookie is expired.
     */
    sessionCookieExpired = 'auth/session-cookie-expired',

    /**
     * The Firebase session cookie has been revoked.
     */
    sessionCookieRevoked = 'auth/session-cookie-revoked',

    /**
     * The provided uid is already in use by an existing user. Each user must have a unique uid.
     */
    uidAlreadyExists = 'auth/uid-already-exists',

    /**
     * The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase
     * Console.
     */
    unauthorizedContinueURI = 'auth/unauthorized-continue-uri',

    /**
     * There is no existing user record corresponding to the provided
     * identifier.
     */
    userNotFound = 'auth/user-not-found',

    // ---

    /**
     * Thrown if the instance of FirebaseApp has been deleted.
     */
    appDeleted = 'auth/app-deleted',

    /**
     * Thrown if the app identified by the domain where it's hosted, is not authorized to use
     * Firebase Authentication with the provided API key. Review your key configuration in the
     * Google API console.
     */
    appNotAuthorized = 'auth/app-not-authorized',

    /**
     * Thrown if a method is called with incorrect arguments.
     */
    argumentError = 'auth/argument-error',

    /**
     * Thrown if the provided API key is invalid. Please check that you have copied it correctly
     * from the Firebase Console.
     */
    invalidApiKey = 'auth/invalid-api-key',

    /**
     * Thrown if the user's credential is no longer valid. The user must sign in again.
     */
    invalidUserToken = 'auth/invalid-user-token',

    /**
     * Thrown if the tenant ID provided is invalid.
     */
    invalidTenantId = 'auth/invalid-tenant-id',

    /**
     * Thrown if a network error (such as timeout, interrupted connection or unreachable host)
     * has occurred.
     */
    networkRequestFailed = 'auth/network-request-failed',

    /**
     * Thrown if you have not enabled the provider in the Firebase Console. Go to the Firebase
     * Console for your project, in the Auth section and the Sign in Method tab and configure
     * the provider.
     */
    operationNotAllowed = 'auth/operation-not-allowed',

    /**
     * Thrown if the user's last sign-in time does not meet the security threshold. Use
     * firebase.User.reauthenticateWithCredential to resolve. This does not apply if the user is
     * anonymous.
     */
    requiresRecentLogin = 'auth/requires-recent-login',

    /**
     * Thrown if requests are blocked from a device due to unusual activity. Trying again after
     * some delay would unblock.
     */
    tooManyRequests = 'auth/too-many-requests',

    /**
     * Thrown if the app domain is not authorized for OAuth operations for your Firebase
     * project. Edit the list of authorized domains from the Firebase console.
     */
    unauthorizedDomain = 'auth/unauthorized-domain',

    /**
     * Thrown if the user account has been disabled by an administrator. Accounts can be enabled
     * or disabled in the Firebase Console, the Auth section and Users subsection.
     */
    userDisabled = 'auth/user-disabled',

    /**
     * Thrown if the user's credential has expired. This could also be thrown if a user has been
     * deleted. Prompting the user to sign in again should resolve this for either case.
     */
    userTokenExpired = 'auth/user-token-expired',

    /**
     * Thrown if the browser does not support web storage or if the user disables them.
     */
    webStorageUnsupported = 'auth/web-storage-unsupported',
  }

  /**
   * Storage error codes.
   *
   * @Docs:
   *  - https://firebase.google.com/docs/storage/web/handle-errors
   */
  const enum Storage {
    /**
     * An unknown error occurred.
     */
    unknown = 'storage/unknown',

    /**
     * No object exists at the desired reference.
     */
    objectNotFound = 'storage/object-not-found',

    /**
     * No bucket is configured for Cloud Storage
     */
    bucketNotFound = 'storage/bucket-not-found',

    /**
     * No project is configured for Cloud Storage
     */
    projectNotFound = 'storage/project-not-found',

    /**
     * Quota on your Cloud Storage bucket has been exceeded. If you're on the free tier, upgrade
     * to a paid plan. If you're on a paid plan, reach out to Firebase support.
     */
    quotaExceeded = 'storage/quota-exceeded',

    /**
     * User is unauthenticated, please authenticate and try again.
     */
    unauthenticated = 'storage/unauthenticated',

    /**
     * User is not authorized to perform the desired action, check your security rules to ensure
     * they are correct.
     */
    unauthorized = 'storage/unauthorized',

    /**
     * The maximum time limit on an operation (upload, download, delete, etc.) has been
     * exceeded. Try uploading again.
     */
    retryLimitExceeded = 'storage/retry-limit-exceeded',

    /**
     * File on the client does not match the checksum of the file received by the server. Try
     * uploading again.
     */
    invalidChecksum = 'storage/invalid-checksum',

    /**
     * User canceled the operation.
     */
    canceled = 'storage/canceled',

    /**
     * Invalid event name provided. Must be one of [`running`, `progress`, `pause`]
     */
    invalidEventName = 'storage/invalid-event-name',

    /**
     * Invalid URL provided to refFromURL(). Must be of the form: gs://bucket/object or
     * https://firebasestorage.googleapis.com/v0/b/bucket/o/object?token=<TOKEN>
     */
    invalidURL = 'storage/invalid-url',

    /**
     * The argument passed to put() must be `File`, `Blob`, or `UInt8` Array.
     * The argument passed to putString() must be a raw, `Base64`, or `Base64URL` string.
     */
    invalidArgument = 'storage/invalid-argument',

    /**
     * No bucket has been set in your config's storageBucket property.
     */
    noDefaultBucket = 'storage/no-default-bucket',

    /**
     * Commonly occurs when the local file has changed (deleted, saved again, etc.). Try
     * uploading again after verifying that the file hasn't changed.
     */
    cannotSliceBlob = 'storage/cannot-slice-blob',

    /**
     * File on the client does not match the size of the file received by the server. Try
     * uploading again.
     */
    serverFileWrongSize = 'storage/server-file-wrong-size',
  }
}
