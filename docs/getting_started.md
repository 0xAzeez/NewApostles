# Getting Started

## Overview
Mini apps are web apps built with HTML, CSS, and Javascript that can be discovered and used within Farcaster clients. You can use an SDK to access native Farcaster features, like authentication, sending notifications, and interacting with the user's wallet.

## Requirements
- Node.js 22.11.0 or higher
- A package manager (npm, pnpm, or yarn)

## Enable Developer Mode
1. Log in to Farcaster
2. Go to [Settings > Developer Tools](https://farcaster.xyz/~/settings/developer-tools)
3. Toggle on "Developer Mode"

## Quick Start
```bash
npm create @farcaster/mini-app
```

## Manual Setup
```bash
npm install @farcaster/miniapp-sdk
```

## Making Your App Display
After your app loads, you must call `sdk.actions.ready()`:
```javascript
import { sdk } from '@farcaster/miniapp-sdk'
// After your app is fully loaded and ready to display
await sdk.actions.ready()
```
