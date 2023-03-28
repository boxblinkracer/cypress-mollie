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

### 2. Use Actions and Assertions

Depending on your payment methods, you might need to use different actions and optional assertions.

However, every test needs to start with the `MollieSandbox.js` and the cookie preparation.
Some payment methods will then show a custom screen, such as credit cards, iDEAL and more.
If not, or after such a screen, there will always be the payment status page where you can
simply use the actions of the `PaymentStatusScreen.js`.

If you want, there are a couple of prepared assertions for different Mollie features existing.
This helps to easily validate credit card forms and more. You don't need to use them of course.

```javascript 
import MollieSandbox from "cypress-mollie/src/actions/MollieSandbox";
import CreditCardScreen from "cypress-mollie/src/actions/screens/CreditCardScreen";
import PaymentStatusScreen from "cypress-mollie/src/actions/screens/PaymentStatusScreen";
import PaymentStatusScreenAssertion from "cypress-mollie/src/actions/assertions/PaymentStatusScreenAssertion";

const mollieSandbox = new MollieSandbox();
const mollieCreditCardScreen = new CreditCardScreen();
const molliePaymentScreen = new PaymentStatusScreen();
const paymentScreenAssertion = new PaymentStatusScreenAssertion();

it('Checkout with Credit Card', () => {

    // ....prepare checkout in your shop where credit card is used.
    // also remember our total amount from our confirm page
    cy.get('.cart-total-value').then((total) => {
        const value = total.text().trim();
        cy.wrap(value).as('totalSum');
    })

    // ....once redirected to Mollie, do the code below:

    // required for the CSRF tokens ;)
    mollieSandbox.initSandboxCookie();

    // if we have a special form such as credit card, iDEAL or more
    // use the corresponding action for that screen
    mollieCreditCardScreen.setCardHolder('Cypress Test');
    mollieCreditCardScreen.setCardNumber('3782 822463 10005');
    mollieCreditCardScreen.setExpiryDate('1245');
    mollieCreditCardScreen.setVerificationCode('1234');
    mollieCreditCardScreen.submitForm();

    // we are now on the final status page
    // if you want, you can assert the total sum
    // that was passed on to Mollie
    cy.get('@totalSum').then(totalSum => {
        paymentScreenAssertion.assertAmount(totalSum);
    });

    // now simply select a status to continue
    // we use "paid" in our case
    molliePaymentScreen.selectPaid();
})
```

## That's it!

You should now be able to easily work with the Mollie sandbox page.
If you have troubles with cross-domain navigation in Cypress and Mollie, please see this post: https://boxblinkracer.com/blog/cypress-shopware-mollie

### Copying / License

This repository is distributed under the MIT License (MIT). You can find the whole license text in the [LICENSE](LICENSE) file.
