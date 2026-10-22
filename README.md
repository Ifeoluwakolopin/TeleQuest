# TeleQuest

## Dependency maintenance

Use Python 3.11 and Node 22.15+ (22 LTS in CI). Install the frontend with
`cd web && npm ci`; start/build/test/eject remain Create React App commands.
React 18, SVG/assets, Tailwind and the existing website are retained. Scoped
CRA overrides update the SVG, CSS minimizer, URL/source-map and optional
Workbox plugins, not the application framework.
`npm start` delegates to CRA through a webpack-dev-server 5 adapter retaining
HTTPS, source maps, custom proxy setup, SPA fallback and no-op service-worker
middleware. Host checks default to `auto` and wildcard development-asset CORS
is removed; the explicit legacy `DANGEROUSLY_DISABLE_HOST_CHECK` escape hatch
remains. Scoped proxy/UUID/Underscore parents and selector-parser are refreshed
without replacing Jest or disabling existing testing infrastructure.

Keep `requirements.txt` and `mypy-requirements.txt` identical. The security
refresh retains OpenAI/Pinecone APIs and the Telegram 20.x callback contract;
Telegram 20.8 and HTTPX 0.26 permit patched HTTPcore/h11 without an unrelated
async rewrite. CI runs on ephemeral GitHub-hosted runners, never the shared
self-hosted machine, and does not deploy or publish. Black comes from the
pinned requirements rather than a vulnerable CI-only downgrade.

Run `npm audit` with development dependencies and audit the complete installed
Python environment. Remaining CRA upstream advisories, including unpatched
braces, remain unresolved, not dismissed. Patched webpack-dev-server removes
node-forge via its maintained certificate generator; NYC's compatible YAML 4
loader removes the sprintf-js path. Frontend
compatibility builds preserve CRA's local warning behavior (`CI=false`);
the old template test is not represented as passing.

TeleQuest aims to provide an intuitive and user-friendly Telegram bot to meet your specific needs. Alongside the bot, we also have a website that offers comprehensive details about the bot and provides a direct link to start using it.

## Table of Contents
- [TeleQuest](#telequest)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Watch the Demo here.](#watch-the-demo-here)
  - [Technical Design Document](#technical-design-document)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)

## Project Overview

TeleQuest consists of two main parts:

1. **Telegram Bot**: An interactive bot built using Python that offers various functionalities. You can directly start a conversation with our bot on Telegram by [clicking here](t.me/minerva_tele_quest_bot).

2. **Website**: A comprehensive website built with React. The website provides in-depth details about the Telegram bot and serves as an introductory platform for new users. Visit our website [here](https://tele-quest-frontend-361e59465eec.herokuapp.com/).

## Watch the Demo here.
https://github.com/minerva-university/TeleQuest/assets/60819380/5df9c255-804c-4bb4-891e-fa7b0c26d724

## Team Demo
Here is an extended demo of the application by the TeleQuest [team](https://drive.google.com/file/d/1t-FyhYqsiMIQ2gTCnfbBYBlu5xUUOSNU/view?usp=sharing)

## Technical Design Document
The technical design document can be found [here](https://docs.google.com/document/d/1c7tumNsGgMlP1C7nDkOWpKqCtP4PA8J50vj7RY-cPXo/edit?usp=sharing)

## Installation

  *If you're interested in runnning the bot locally, you can follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md) file. Otherwise, you can use the bot and website directly from the links provided below.*

**Telegram Bot**:
The bot doesn't require any installation. Just visit the provided link and start interacting with it on Telegram.

**Website**:
Being a web application, there's no need for installation. Navigate to the website's URL on your preferred browser.

## Usage

**Telegram Bot**:
Add the Telegram bot to your desired group chat and start using it.

**Website**:
Browse through the website to understand the bot's features, see FAQs, user guides, and any other resources.

## Technologies Used

- **Telegram Bot**: Python
- **Website**: React

## Contributing

Interested in contributing to TeleQuest? Check out our [CONTRIBUTING.md](CONTRIBUTING.md) guidelines to get started.
