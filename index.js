/**
 * AD/M365 User Lifecycle Automation
 * Automates onboarding/offboarding: AD account + M365 license + ticket log
 * NOTE: Running in DEMO/SANDBOX mode — Graph API calls are mocked below.
 * In production, replace mock functions with live Microsoft Graph SDK calls.
 */

const MOCK_MODE = true;

// Simulates creating an Active Directory user account
async function createADUser(userData) {
  if (MOCK_MODE) {
    console.log(`[MOCK] Creating AD user: ${userData.username}`);
    return { success: true, userId: `AD-${Date.now()}` };
  }
  // Real implementation would call AD via LDAP or Graph API here
}

// Simulates assigning an M365 license via Microsoft Graph API
async function assignM365License(userId, licenseSku) {
  if (MOCK_MODE) {
    console.log(`[MOCK] Assigning license ${licenseSku} to ${userId}`);
    return { success: true, licenseAssigned: licenseSku };
  }
  // Real implementation: PATCH /users/{id}/assignLicense via Graph API
}

// Simulates logging the action to a ticketing system
async function logToTicketSystem(action, userId) {
  if (MOCK_MODE) {
    console.log(`[MOCK] Ticket logged: ${action} for ${userId}`);
    return { success: true, ticketId: `TCK-${Date.now()}` };
  }
  // Real implementation: POST to ServiceNow/Jira API here
}

// Main onboarding workflow
async function onboardUser(userData) {
  const adResult = await createADUser(userData);
  const licenseResult = await assignM365License(adResult.userId, "E3");
  const ticket = await logToTicketSystem("Onboard", adResult.userId);

  console.log("Onboarding complete:", { adResult, licenseResult, ticket });
  return { adResult, licenseResult, ticket };
}

// Run example
onboardUser({ username: "jane.doe", department: "Sales" });
