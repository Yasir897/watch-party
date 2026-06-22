# Watch Party

Watch videos in sync with friends. A Node.js + Socket.io server keeps everyone's
playback in sync, and a browser extension injects the sync controls into the
video page.

## Structure
- `server/` — Node.js + Socket.io signaling server
- `extension/` — browser extension (content script + Socket.io client)

## Run the server
```bash
cd server
npm install
node server.js
```

## Load the extension
Open your browser's extensions page, enable Developer Mode, and "Load unpacked"
the `extension/` folder.
