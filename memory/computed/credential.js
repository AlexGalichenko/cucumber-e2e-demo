const CredentialManager = require('@cucumber-e2e/credential-manager');

/**
 * Get current username
 * @returns {Promise<string>}
 */
async function getUsername() {
    return (await CredentialManager.credentials).username;
}

/**
 * Get current password
 * @returns {Promise<string>}
 */
async function getPassword() {
    return (await CredentialManager.credentials).password;
}

module.exports = {
    getUsername,
    getPassword
}
