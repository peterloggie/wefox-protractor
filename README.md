# Wefox Protractor coding assessment

## Getting started

To use this codebase you'll need to have the following tools installed:

1. Google Chrome browser.
2. Node.js. This codebase works with Protractor 7, which requires Node v10, v12, or newer.
3. Protractor, installed globally (`npm install -g protractor`). Check your version of Protractor by typing `protractor --version`. Make sure you are using Protractor v7.
4. webdriver-manager, a command-line tool installed when you install Protractor using the above command. We recommend you run `webdriver-manager update` before continuing.

## Running the tests

- Clone this repo and open a command-line terminal
- Start webdriver: `webdriver-manager start`
- From the project root, run the tests: `npm test`

You should see Chrome open while the tests are executed, and the test results will be written to your terminal.