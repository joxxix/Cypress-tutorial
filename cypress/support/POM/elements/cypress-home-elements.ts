export const selectors = {
    kichenSinkTitle: "[class='container']"
}

class Homepage {
    get getKitchenSinkTitle(): Cypress.Chainable<any>{
        return cy.get(selectors.kichenSinkTitle);
    }
}

export default new Homepage();