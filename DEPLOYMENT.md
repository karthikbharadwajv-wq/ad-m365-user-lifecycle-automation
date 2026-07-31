# Deployment Guide (AWS Lambda)

## Prerequisites
- AWS account
- AWS CLI configured
- Node.js 18+

## Steps

1. **Package the function**

2. **Create IAM Role**
Create a role with least-privilege permissions:
- `AWSLambdaBasicExecutionRole` (for CloudWatch logging)
- Custom policy scoped to any Graph API secrets in Secrets Manager (if using live mode)

3. **Create the Lambda function**

4. **Trigger options**
- **API Gateway**: expose as REST endpoint for ticketing system to call
- **EventBridge**: schedule periodic runs (e.g., nightly offboarding sweep)

## Environment Variables (production/live mode)
- `GRAPH_CLIENT_ID`
- `GRAPH_CLIENT_SECRET`
- `GRAPH_TENANT_ID`
- `TICKET_API_URL`

## Notes
This repo runs in `MOCK_MODE` by default for demonstration. Switching `MOCK_MODE = false` in `index.js` requires valid Graph API credentials and a configured Azure AD app registration.
