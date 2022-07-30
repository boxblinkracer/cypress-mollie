export default class PaymentStatusScreen {


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
