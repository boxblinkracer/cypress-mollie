<p align="center">
   <img width="600px" src="/assets/header.png">
</p>
<h1 align="center">Mollie Actions for Cypress</h1>


![NPM Downloads](https://badgen.net/npm/dt/cypress-mollie) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/boxblinkracer/cypress-mollie) ![NPM License](https://img.shields.io/npm/l/cypress-mollie)

This is a package of actions that you can use in Cypress when writing tests for Mollie (www.mollie.com).
It covers easy actions to fill in credit card data, set a payment status and other things on the sandbox pages of Mollie.


### Requirements
Your Cypress project needs to be setup correctly to allow cross-domain switching within tests and also your cookies may need to be persisted and configured correctly.
Please see this post for more. It will explain everything in detail:

> https://boxblinkracer.com/blog/cypress-shopware-mollie



### 1. Installation

```ruby 
npm i cypress-mollie --save-dev
```


### 2. Use Actions
Depending on your payment methods, you might need to use different actions.

However, every test needs to start with the `MollieSandbox.js` and the cookie preparation.
Some payment methods will then show a custom screen, such as credit cards, iDEAL and more.
If not, or after such a screen, there will always be the payment status page where you can
simply use the actions of the `PaymentStatusScreen.js`.


```javascript 
import MollieSandbox from "cypress-mollie/src/actions/MollieSandbox";
import CreditCardScreenAction from "cypress-mollie/src/actions/screens/CreditCardScreen";
import PaymentScreenAction from "cypress-mollie/src/actions/screens/PaymentStatusScreen";


const mollieSandbox = new MollieSandbox();
const mollieCreditCardForm = new CreditCardScreen();
const molliePayment = new PaymentStatusScreen();


it('Checkout with Credit Card', () => {

    // ....prepare checkout in your shop where credit card is used
    // ....once redirect to Mollie do this (below)....
    
    // required for the CSRF tokens ;)
    mollieSandbox.initSandboxCookie();
    
    // if we have a special form such as credit card, iDEAL or more
    // use the corresponding action for that screen
    mollieCreditCardForm.setCardHolder('Cypress Test');
    mollieCreditCardForm.setCardNumber('3782 822463 10005');
    mollieCreditCardForm.setExpiryDate('1245');
    mollieCreditCardForm.setVerificationCode('1234');
    mollieCreditCardForm.submitForm();
    
    // now we are on the status page
    // just select something like paid
    mollieStatus.paid();
})
```

## That's it!

You should now be able to easily work with the Mollie sandbox page.
If you have troubles with cross-domain navigation in Cypress and Mollie, please see this post: https://boxblinkracer.com/blog/cypress-shopware-mollie


### Copying / License

This repository is distributed under the MIT License (MIT). You can find the whole license text in the [LICENSE](LICENSE) file.
