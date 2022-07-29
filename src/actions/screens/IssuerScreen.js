export default class IssuerScreen {

    /**
     *
     */
    selectIDEAL() {
        cy.get('button[value="ideal_ABNANL2A"]').click();
    }

    /**
     *
     */
    selectKBC() {
        cy.get('button[value="kbc"]').click();
    }

}

