export default class PaymentStatusScreen {

    /**
     * Gets the total amount that will be
     * paid with Mollie.
     * @returns {*}
     */
    getAmount() {
        return cy.get('.header__amount');
    }

    /**
     * Verifies that the displayed total amount on the Mollie
     * page matches the amount that you have provided.
     * Use this to verify that the user has to pay
     * the correct price in Mollie.
     * @param amount
     */
    assertAmount(amount) {
        let searchAmount = amount.toString();
        searchAmount = searchAmount.replace(',', '');
        searchAmount = searchAmount.replace('.', '');

        this.getAmount().then(($headerAmount) => {

            let finalHeaderAmount = $headerAmount.text();
            finalHeaderAmount = finalHeaderAmount.replace(',', '');
            finalHeaderAmount = finalHeaderAmount.replace('.', '');

            expect(finalHeaderAmount).to.contain(searchAmount);
        })
    }

    /**
     *
     */
    selectOpen() {
        cy.get('input[value="open"]').click();

        this._clickSubmit();
    }

    /**
     *
     */
    selectPaid() {
        cy.get('input[value="paid"]').click();

        this._clickSubmit();
    }

    /**
     *
     */
    selectPending() {
        cy.get('input[value="pending"]').click();

        this._clickSubmit();
    }

    /**
     *
     */
    selectAuthorized() {

        cy.get('input[value="authorized"]').click();

        this._clickSubmit();
    }

    /**
     *
     */
    selectFailed() {

        cy.get('input[value="failed"]').click();

        this._clickSubmit();
    }

    /**
     *
     */
    selectCancelled() {

        cy.get('input[value="canceled"]').click();

        this._clickSubmit();
    }

    /**
     *
     */
    selectExpired() {

        cy.get('input[value="expired"]').click();

        this._clickSubmit();
    }


    /**
     *
     * @private
     */
    _clickSubmit() {
        cy.get('.button').click();
    }

}
