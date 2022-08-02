export default class PaymentListScreen {

    /**
     *
     */
    selectPaypal() {
        cy.contains('PayPal').click();
    }

    /**
     *
     */
    selectCreditCard() {
        cy.contains('Credit/Debit Card').click();
    }

    /**
     *
     */
    selectGiropay() {
        cy.contains('giropay').click();
    }

    /**
     *
     */
    selectPayLater() {
        cy.contains('Pay later').click();
    }

    /**
     *
     */
    selectPayNow() {
        cy.contains('Pay now').click();
    }

    /**
     *
     */
    selectSOFORT() {
        cy.contains('SOFORT').click();
    }

    /**
     *
     */
    selectiDEAL() {
        cy.contains('iDEAL').click();
    }

    /**
     *
     */
    selectEPS() {
        cy.contains('eps').click();
    }

    /**
     *
     */
    selectBankTransfer() {
        cy.contains('Bank transfer').click();
    }

    /**
     *
     */
    selectMyBank() {
        cy.contains('MyBank').click();
    }

    /**
     *
     */
    selectBancontact() {
        cy.contains('Bancontact').click();
    }

    /**
     *
     */
    selectP24() {
        cy.contains('Przelewy24').click();
    }

    /**
     *
     */
    selectBelfius() {
        cy.contains('Belfius').click();
    }

    /**
     *
     */
    selectSepaDirectDebit() {
        cy.contains('SEPA Direct Debit').click();
    }

    /**
     *
     */
    selectIn3() {
        cy.contains('Pay in 3').click();
    }

    /**
     *
     */
    selectGiftcardBeautyCadeau() {
        cy.contains('BeautyCadeau').click();
    }

}

