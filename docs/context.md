# Context

## Overview
When your app is opened it can access information about the session from `sdk.context`. This object provides basic information about the user, the client, and where your app was opened from.

```javascript
sdk.context
```

## Properties

### User
Details about the calling user which can be used to customize the interface. This should be considered untrusted since it is passed in by the application.

```javascript
type User = {
  fid: number;
  username?: string;
  displayName?: string;
  pfpUrl?: string;
  bio?: string;
  location?: {
    placeId: string;
    description: string;
  };
};
```

### Client
Details about the Farcaster client running the Mini App.

```javascript
type ClientContext = {
  platformType?: 'web' | 'mobile';
  clientFid: number;
  added: boolean;
  safeAreaInsets?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  notificationDetails?: {
    url: string;
    token: string;
  };
};
```

### Using safeAreaInsets
Mobile devices render navigation elements that obscure the view of an app. Use the `safeAreaInsets` to render content in the safe area that won't be obstructed.

```javascript
<div style={{
  marginTop: context.client.safeAreaInsets.top,
  marginBottom: context.client.safeAreaInsets.bottom,
  marginLeft: context.client.safeAreaInsets.left,
  marginRight: context.client.safeAreaInsets.right,
}}>
  ...your app view
</div>
```
