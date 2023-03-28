export default class CreditCardComponentsAssertion {

    /**
     *
     * @param {boolean} expectedValid
     */
    assertFormValid(expectedValid) {
        this.assertCardHolderValid(expectedValid);
        this.assertCardNumberValid(expectedValid);
        this.assertCardExpiryDateValid(expectedValid);
        this.assertCardVerificationCodeValid(expectedValid);
    }

    /**
     *
     * @param {boolean} expectedValid
     */
    assertCardHolderValid(expectedValid) {
        this._assertField('cardHolder', expectedValid);
    }

    /**
     *
     * @param {boolean} expectedValid
     */
    assertCardNumberValid(expectedValid) {
        this._assertField('cardNumber', expectedValid);
    }

    /**
     *
     * @param {boolean} expectedValid
     */
    assertCardExpiryDateValid(expectedValid) {
        this._assertField('expiryDate', expectedValid);
    }

    /**
     *
     * @param {boolean} expectedValid
     */
    assertCardVerificationCodeValid(expectedValid) {
        this._assertField('verificationCode', expectedValid);
    }


    /**
     *
     * @param fieldName
     * @param expectedValid
     * @private
     */
    _assertField(fieldName, expectedValid) {
        const classValid = 'is-valid';
        const classInvalid = 'is-invalid';

        const fieldId = '.mollie-component--' + fieldName;

        if (expectedValid) {
            cy.get(fieldId).should('have.class', classValid);
        } else {
            cy.get(fieldId).should('have.class', classInvalid);
        }
    }

}
