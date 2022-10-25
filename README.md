# Verisoul CRA Sample App

## Overview
The purpose of this app is to demonstrate Verisoul's Javascript SDK by use of the private npm module. The repository contains a [create-react-app](https://create-react-app.dev/) project that uses Verisoul's NPM package `verisoul` alongside an [Express](https://expressjs.com/) API server.

_To run the app a Verisoul API Key, Project ID and NPM token are required._ Schedule a call [here](https://meetings.hubspot.com/henry-legard) to get started.

## Getting Started
1. Clone the repository
```bash
git clone https://github.com/verisoul/cra-sample-app.git && cd cra-sample-app
```
2. Copy your `NPM_TOKEN` into the `.npmrc` file

3. Copy `.env.sample` to `.env` and fill in the `VERISOUL_API_KEY` and `VERISOUL_PROJECT_ID` values before sourcing the file.
```bash
cp .env.sample .env
```
4. Install dependencies
```bash
npm install
```
5. Run the app at `http://localhost:4001`
```bash
npm start
```

## Questions and Feedback
Comprehensive documentation about Verisoul's Javascript SDK and API can be found at [docs.verisoul.xyz](https://docs.verisoul.xyz/). Additionally, reach out to Verisoul at [support@verisoul.xyz](mailto:support@verisoul.xyz) for any questions or feedback.
