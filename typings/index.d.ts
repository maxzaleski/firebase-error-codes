// Type definitions for firebase-error-core 1.0.0
// Project: https://github.com/maxzaleski/firebase-error-codes
// Definitions by: Maximilien Zaleski <https://github.com/maxzaleski>

declare module 'firebase-error-codes' {
  /**
   * Authentication error codes
   *
   * Docs: https://firebase.google.com/docs/auth/admin/errors
   */
  const enum auth {
    /**
     * The claims payload provided to setCustomUserClaims() exceeds the maximum
     * allowed size of 1000 bytes.
     */
    claimsTooLarge = 'auth/claims-too-large',

    /**
     * The provided email is already in use by an existing user. Each user must
     * have a unique email.
     */
    emailAlreadyExists = 'auth/email-already-exists',

    /**
     * The provided Firebase ID token is expired.
     */
    idTokenExpired = 'auth/idToken-expired',

    /**
     * The Firebase ID token has been revoked.
     */
    idTokenRevoked = 'auth/idToken-revoked',

    /**
     * The credential used to initialize the Admin SDK has insufficient permission
     * to access the requested Authentication resource. Refer to Set up a Firebase
     * project for documentation on how to generate a credential with appropriate
     * permissions and use it to authenticate the Admin SDKs.
     */
    insufficientPermission = 'auth/insufficient-permission',

    /**
     * The Authentication server encountered an unexpected error while trying to
     * process the request. The error message should contain the response from
     * the Authentication server containing additional information.
     * If the error persists, please report the problem to our Bug Report support channel.
     */
    internalError = 'auth/internal-error',

    /**
     * An invalid argument was provided to an Authentication method.
     * The error message should contain additional information.
     */
    invalidArgument = 'auth/invalid-argument',

    /**
     * The custom claim attributes provided to setCustomUserClaims() are invalid.
     */
    invalidClaims = 'auth/invalid-claims',

    /**
     * The continue URL must be a valid URL string.
     */
    invalidContinueUri = 'auth/invalid-continue-uri',

    /**
     * The creation time must be a valid UTC date string.
     */
    invalidCreationTime = 'auth/invalid-creation-time',

    /**
     * The credential used to authenticate the Admin SDKs cannot be used to
     * perform the desired action. Certain Authentication methods such as
     * createCustomToken() and verifyIdToken() require the SDK to be initialized
     * with a certificate credential as opposed to a refresh token or Application
     * Default credential. See Initialize the SDK for documentation on how to
     * authenticate the Admin SDKs with a certificate credential.
     */
    invalidCredential = 'auth/invalid-credential',

    /**
     * The provided value for the disabled user property is invalid.
     * It must be a boolean.
     */
    invalidDisabledField = 'auth/invalid-disabled-field',

    /**
     * The provided value for the displayName user property is invalid.
     * It must be a non string.
     */
    invalidDisplayName = 'auth/invalid-display-name',

    /**
     * The provided dynamic link domain is not configured or authorized for the
     * current project.
     */
    invalidDynamicLinkDomain = 'auth/invalid-dynamic-link-domain',

    /**
     * The provided value for the email user property is invalid. It must be a
     * string email address.
     */
    invalidEmail = 'auth/invalid-email',

    /**
     * The provided value for the emailVerified user property is invalid.
     * It must be a boolean.
     */
    invalidEailVerified = 'auth/invalid-email-verified',

    /**
     * The hash algorithm must match one of the strings in the list of supported
     * algorithms.
     */
    invalidHashAlgorithm = 'auth/invalidHash-algorithm',

    /**
     * The hash block size must be a valid number.
     */
    invalidHashBlockSize = 'auth/invalidHash-block-size',

    /**
     * The hash derived key length must be a valid number.
     */
    invalidHashDerivedKeyLength = 'auth/invalidHash-derived-key-length',

    /**
     * The hash key must a valid byte buffer.
     */
    invalidHashKey = 'auth/invalidHash-key',

    /**
     * The hash memory cost must be a valid number.
     */
    invalidHashMemoryCost = 'auth/invalidHash-memory-cost',

    /**
     * The hash parallelization must be a valid number.
     */
    invalidHashParallelization = 'auth/invalidHash-parallelization',

    /**
     * The hash rounds must be a valid number.
     */
    invalidHashRounds = 'auth/invalidHash-rounds',

    /**
     * The hashing algorithm salt separator field must be a valid byte buffer.
     */
    invalidHashSaltSeparator = 'auth/invalidHash-salt-separator',

    /**
     * The provided ID token is not a valid Firebase ID token.
     */
    invalidIdToken = 'auth/invalid-idToken',

    /**
     * The last sign time must be a valid UTC date string.
     */
    invalidLastSignInTime = 'auth/invalid-last-sign-in-time',

    /**
     * The provided next page token in listUsers() is invalid.
     * It must be a valid non string.
     */
    invalidPageToken = 'auth/invalid-page-token',

    /**
     * The provided value for the password user property is invalid.
     * It must be a string with at least six characters.
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
     * The provided value for the phoneNumber is invalid.
     * It must be a non E.164 standard compliant identifier string.
     */
    invalidPhoneNumber = 'auth/invalid-phone-number',

    /**
     * The provided value for the photoURL user property is invalid.
     * It must be a string URL.
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
     * The session cookie duration must be a valid number in milliseconds
     * between 5 minutes and 2 weeks.
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
     * An Android Package Name must be provided if the Android App is
     * required to be installed.
     */
    missingAndroidPkgName = 'auth/missing-android-pkg-name',

    /**
     * A valid continue URL must be provided in the request.
     */
    missingContinueURI = 'auth/missing-continue-uri',

    /**
     * Importing users with password hashes requires that the hashing
     * algorithm and its parameters be provided.
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
     * The provided sign provider is disabled for your Firebase project.
     * Enable it from the Sign Method section of the Firebase console.
     */
    operationNotAllowed = 'auth/operation-not-allowed',

    /**
     * The provided phoneNumber is already in use by an existing user.
     * Each user must have a unique phoneNumber.
     */
    phoneNumberAlreadyExists = 'auth/phone-number-already-exists',

    /**
     * No Firebase project was found for the credential used to initialize the
     * Admin SDKs. Refer to Set up a Firebase project for documentation on how
     * to generate a credential for your project and use it to authenticate the Admin SDKs.
     */
    projectNotFound = 'auth/project-not-found',

    /**
     * One or more custom user claims provided to setCustomUserClaims() are reserved.
     * For example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc)
     * should not be used as keys for custom claims.
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
     * The provided uid is already in use by an existing user.
     * Each user must have a unique uid.
     */
    uidAlreadyExists = 'auth/uid-already-exists',

    /**
     * The domain of the continue URL is not whitelisted.
     * Whitelist the domain in the Firebase Console.
     */
    unauthorizedContinueURI = 'auth/unauthorized-continue-uri',

    /**
     * There is no existing user record corresponding to the provided identifier.
     */
    userNotFound = 'auth/user-not-found',
  }
}
