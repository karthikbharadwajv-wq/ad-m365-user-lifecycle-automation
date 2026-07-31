/**
 * AWS Lambda handler for AD/M365 User Lifecycle Automation
 * Triggered via API Gateway or scheduled EventBridge rule
 */

const { onboardUser, offboardUser } = require('./index.js');

exports.handler = async (event) => {
  try {
    const { action, userData, userId } = JSON.parse(event.body || '{}');

    let result;
    if (action === 'onboard') {
      result = await onboardUser(userData);
    } else if (action === 'offboard') {
      result = await offboardUser(userId);
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid action. Use "onboard" or "offboard".' })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success', result })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
