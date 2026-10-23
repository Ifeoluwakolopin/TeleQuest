# TeleQuest

## Dependency maintenance

Use Python 3.11 and Node 22.22.2+ within Node 22 LTS (also used in CI).
Install with `cd web && npm ci`. The owner-approved tooling migration uses
Vite 8, Vitest 5 and ESLint 9 while retaining React 18, SVG URLs/assets,
custom CSS and the complete existing website. Tailwind 4's Vite plugin and
CLI replace its vulnerable older development tree; existing source has no
Tailwind directives or configuration to translate, and its CSS is unchanged.
`npm start` retains port 3000 and fast refresh; `npm run build` gates lint
errors and emits the existing `build/` directory used by Docker.
`npm test` watches the existing app smoke, now asserting the actual TeleQuest
heading; `npm test -- --run --coverage` runs it once with coverage.
`npm run eject` explains that configuration is already checked in.
See [frontend commands and configuration](web/README.md).

Keep `requirements.txt` and `mypy-requirements.txt` identical. The security
refresh retains OpenAI/Pinecone APIs and the Telegram 20.x callback contract;
Telegram 20.8 and HTTPX 0.26 permit patched HTTPcore/h11 without an unrelated
async rewrite. CI runs on ephemeral GitHub-hosted runners, never the shared
self-hosted machine, and does not deploy or publish. Black comes from the
pinned requirements rather than a vulnerable CI-only downgrade.

Hosted compatibility checks audit the full npm and installed Python trees,
run the existing app test, lint/build and isolated HTTP/HTTPS, SPA, HMR, host
and build-configuration smokes. The migration removes unpatched braces
ownership paths instead of dismissing alerts or forcing incompatible overrides.

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
