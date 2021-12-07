# Saucedemo web automation
https://www.saucedemo.com/ automation
using WebdriverIO v7 and Mocha

## Prerequisites
- node v12 or up `$ node -v`
- npm is installed `$ npm -v`
- wdio v7 `$ npx wdio --version`

## Setup
- Clone repository `$ git clone https://github.com/timkab/saucedemo-wdio-v7.git`
- Move to directory `$ cd saucedemo-wdio-v7`

## Execute
 - Run all testcases `$ npx wdio`

## Run selected testcases:
* Positive login and logout flow
`$ npx wdio --spec ./test/specs/login.success.js`
* Negative login flow
`$ npx wdio --spec ./test/specs/login.failure.js`
* Verify product page items and functionality
`$ npx wdio --spec ./test/specs/products.js`