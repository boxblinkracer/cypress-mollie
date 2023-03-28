import PaymentStatusScreen from '../screens/PaymentStatusScreen';

export default class PaymentStatusScreenAssertion {

    /**
     *
     */
    constructor() {
        this.repoScreen = new PaymentStatusScreen();
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

        this.repoScreen.getAmount().then(($headerAmount) => {

            let finalHeaderAmount = $headerAmount.text();
            finalHeaderAmount = finalHeaderAmount.replace(',', '');
            finalHeaderAmount = finalHeaderAmount.replace('.', '');

            expect(finalHeaderAmount).to.contain(searchAmount);
        })
    }

}
