# Covid-tracker

It is an interactive application using MERN stack for tracking and reporting daily covid cases at different location world wide.

## Table of Contents

1. [Live Demo](https://sag1v.github.io/react-elastic-carousel/)
2. [Getting Started](#Getting Started)
3. [Features](#Features)
4. [Project Structure](#Project Structure)
5. [Fourth Example](#fourth-examplehttpwwwfourthexamplecom)

## Getting Started

### Dependencies

Make sure to download all required modules before starting

```
npm install
```

### Run the project

We will be using to servers, for the client and server side. To fun both simultaneously please use

```
npm run dev
```

For running client side only (runs at http://localhost:3000)

```
npm run client:dev
```

For running server side only (runs at http://localhost:8080)

```
npm run server:dev
```

### Help

Sometimes with the new version of npm (v7), by default, npm install will fail when it encounters conflicting peerDependencies. This issue was not happening in npm version 3 to 6 as it used to ignore the peerDependencies when building a package tree ultimately. To fix it you can try to run this command:

```
npm install --save --legacy-peer-deps
```

Personally I like to use pnpm as it is more capable for solving conflicts with dependencies.

## Requirements

- [x] A react frontend
- [x] A node backend that stores and retrieves the data
- [x] Logging modules using email and password
- [x] For the registration modules auth0 was used
- [x] The token is authenticated and from the backend using NodeJs
- [x] Everything related to users is be handled using auth0
- [x] A dashboard for displaying all patients on a map
- [x] The map dashboard is built in React to display the regions with the patients' data
- [x] A profile page where the user can see his information (including his name)
- [x] The location is recorded automatically from the browser
- [x] The user can update his profile information
- [x] The user can log a covid diagnosis (case / recovery / death) with relevant symptoms such as fever, cough, chest pain, and headache

## Project Structure

```
Src
└─ client
│   │  ── api
│   │  ── assets
│   │  ── components
│   │  ── config
│   │  ── context
│   │  ── hooks
│   │  ── layout
│   │  ── pages
│   │  ── styles
│   │  ── tests
│   │  ── utils
│   │  App.jsx
└─ server
│   │  ── controllers
│   │  ── helpers
│   │  ── middleware
│   │  ── routes
│   │  ── tests
│   │  server.js
 |     Main.jsx
```

## Setup Notes

- Embedded Login was used
- **pnpm** package manager was used to optimise _installation speed_, _running speed_, and _disk space_
- **vite** was used to improve the _development experience_ and to have _optimised builds_.
- **husky js** was used to _improved commits_ and created hooks to restrict commit messages to follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification)
- Replaced any standard imports, with a pre-defined names by using **alias imports** for the replacement of the import `/src/client/` that was configured in _vite.config_ file.

### Technical Notes

- **Sass** was used for any styles needed. Also created default.scss that includes all global variables used for the settings of the styles such as the colors, fonts, sizes, and animations, etc...
- ** React query** was used for faster and more optimised api fetches, synchronisation and caching.

### Extra modules

- All modules are covered with lazy loading, with shimmering effects while the data is being fetched
- Toast messages were used for any message the user needs to be notified with
- Loading module was created for any page loading
- There is a seeding file `/server/helpers/seeding.js` which includes a function to generate _1000 random diagnosis_. To use it please uncomment its corressponding line in the `server.js` file
