# TeleQuest frontend

Use Node 22.22.2+ within Node 22 LTS and `npm ci`.
React 18 and the website are unchanged; maintained Vite 8 replaces CRA tooling.

| Command | Behavior |
| --- | --- |
| `npm start` | Development server on port 3000 with React fast refresh |
| `npm run lint` | ESLint errors fail; existing unused/hook-dependency warnings remain warnings |
| `npm run build` | Lint, then minified production `build/` with hashed static assets and source maps |
| `npm test` | Vitest watch mode for the existing app smoke |
| `npm test -- --run --coverage` | One-shot existing app smoke with V8 coverage |
| `npm run eject` | Explains that Vite/ESLint configuration is already explicit; no destructive ejection |

## Configuration and deployment

`index.html` is now the source entry at this directory's root; `public/`
retains copied favicon, manifest and other static files. Existing `.js` JSX
imports, imported image/SVG URLs and browserslist JavaScript/CSS targets remain.
No custom setupProxy or registered production service worker exists to port.
Tailwind's maintained Vite plugin and CLI remain available; the current site
uses custom CSS, not Tailwind directives.

- Existing `REACT_APP_*` variables are browser-public. Other process variables
  are **not** embedded. `NODE_ENV` and `PUBLIC_URL` retain their usual meanings.
- `PUBLIC_URL` controls asset base and HTML interpolation, including subpaths.
- `BUILD_PATH` overrides `build/`; `GENERATE_SOURCEMAP=false` disables maps.
- `HOST`, `PORT`, `BROWSER=none`, `HTTPS=true`, `SSL_CRT_FILE`/`SSL_KEY_FILE`
  and `WDS_SOCKET_HOST`/`WDS_SOCKET_PORT`/`WDS_SOCKET_PATH` remain supported.
- Development HTTPS without supplied certificates uses selfsigned 5's PKI
  generator and a disposable cache under node_modules, not bundled node-forge.
- Vite's default host checks and restricted CORS are retained. The explicit
  legacy `DANGEROUSLY_DISABLE_HOST_CHECK=true` override remains available.
- SPA fallback and development no-op service-worker unregistration remain.
- Docker still copies `web/build`; configure any static host to serve
  `index.html` for SPA history routes.

Run `npm audit` including dev dependencies. Hosted compatibility CI verifies
the existing app case, coverage, lint/build, output/env configuration, assets,
SPA fallback, HMR handshake, rejected foreign hosts and isolated HTTPS startup.
