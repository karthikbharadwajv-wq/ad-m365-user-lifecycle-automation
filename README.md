# AD/M365 User Lifecycle Automation

Automates a process I handled manually for 5+ years as an IT Support Engineer: onboarding and offboarding user accounts across Active Directory and Microsoft 365.

## Problem
Manual user lifecycle management (account creation, license assignment, ticket updates) is slow and error-prone at scale — a common bottleneck in service desk operations.

## Solution
A Node.js script that:
- Creates/disables Active Directory user accounts
- Assigns or removes Microsoft 365 licenses via Microsoft Graph API
- Logs each action automatically to a ticketing system (ServiceNow-style)

## Architecture
Deployed as an AWS Lambda function, triggered on demand or via schedule, using IAM roles scoped to least-privilege access.

## Tech Stack
- Node.js
- Microsoft Graph API
- AWS Lambda / IAM
- (Ticketing integration: mock ServiceNow API)

## Why this project
Built to bridge 5+ years of IT/service desk experience (AD, M365, ITSM tools) with cloud automation skills — directly relevant to Cloud Support and Data Center IT Support roles.
