export default class VoucherScreen {
    /**
     *
     */
    selectMonizze() {
        cy.contains('Monizze').click();
    }

    /**
     *
     */
    selectSodexo() {
        cy.contains('Sodexo').click();
    }
}
