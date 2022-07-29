export default class MollieSandbox {
    
    /**
     * This function is very important.
     * Call it in the "before" or within your test, that uses
     * the Mollie sandbox page.
     * It will prepare the required cookies for the sandbox page,
     * and also modify its sameSite property to be recognized using
     * cross-domain cypress tests.
     * If this is not called, the sandbox page cannot be submitted
     * (token expires error will be visible).
     */
    initSandboxCookie() {

        cy.setCookie(
            'SESSIONID',
            "cypress-dummy-value",
            {
                domain: '.www.mollie.com',
                sameSite: 'None',
                secure: true,
                httpOnly: true
            }
        );

        cy.reload();
    }

}

