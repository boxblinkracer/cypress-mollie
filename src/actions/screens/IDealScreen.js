export default class IDealScreen {

    /**
     *
     */
    selectAbnAmro() {
        cy.get('button[value="ideal_ABNANL2A"]').click();
    }

    /**
     *
     */
    selectBunq() {
        cy.get('button[value="ideal_BUNQNL2A"]').click();
    }

    /**
     *
     */
    selectRabobank() {
        cy.get('button[value="ideal_RABONL2U"]').click();
    }

}
