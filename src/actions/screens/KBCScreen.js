export default class KBCScreen {

    /**
     *
     */
    selectKBC() {
        cy.get('button[value="kbc"]').click();
    }

    /**
     *
     */
    selectCBC() {
        cy.get('button[value="cbc"]').click();
    }

}
