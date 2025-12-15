# Farcaster Mini App

This is a simple Farcaster Mini App built with HTML, CSS, and the Farcaster Mini App SDK (via CDN).

## Features
- **User Context**: Displays the user's profile picture, display name, username, and location.
- **Safe Area Insets**: Automatically adjusts padding for mobile devices to avoid navigation bars.
- **Dark Mode**: Styled with a Farcaster-inspired dark theme.

## How to Run
Since this app uses the CDN approach, you don't need `npm` or `node`.

1. Open `index.html` in your web browser.
2. Note: When running in a standard browser (outside of Farcaster), the SDK will fail to initialize context. The app includes a fallback mode to display a mock user profile for testing purposes.

## Documentation
Relevant documentation has been saved to the `docs/` folder:
- [Getting Started](docs/getting_started.md)
- [Context](docs/context.md)
