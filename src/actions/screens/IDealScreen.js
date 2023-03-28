export default class IDealScreen {
    /**
     * Select the provided issuer by its ID name.
     * This is something like "ideal_xxx"...
     */
    selectID(issuerID) {
        cy.get('button[value="' + issuerID + '"]').click();
    }

    /**
     * Select the provided issuer by its name.
     * Just provide something like "bunq", "Revolut" and more.
     */
    selectName(name) {
        cy.contains(name).click();
    }

    /**
     *
     */
    selectAbnAmro() {
        cy.get('button[value="ideal_ABNANL2A"]').click();
    }

    /**
     *
     */
    selectING() {
        cy.get('button[value="ideal_INGBNL2A"]').click();
    }

    /**
     *
     */
    selectRabobank() {
        cy.get('button[value="ideal_RABONL2U"]').click();
    }

    /**
     *
     */
    selectASN() {
        cy.get('button[value="ideal_ASNBNL21"]').click();
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
    selectHandelsbanken() {
        cy.get('button[value="ideal_HANDNL2A"]').click();
    }

    /**
     *
     */
    selectKnab() {
        cy.get('button[value="ideal_KNABNL2H"]').click();
    }

    /**
     *
     */
    selectRegiobank() {
        cy.get('button[value="ideal_RBRBNL21"]').click();
    }

    /**
     *
     */
    selectRevolut() {
        cy.get('button[value="ideal_REVOLT21"]').click();
    }

    /**
     *
     */
    selectSNS() {
        cy.get('button[value="ideal_SNSBNL2A"]').click();
    }

    /**
     *
     */
    selectTriodos() {
        cy.get('button[value="ideal_TRIONL2U"]').click();
    }

    /**
     *
     */
    selectVanLanschot() {
        cy.get('button[value="ideal_FVLBNL22"]').click();
    }
}
