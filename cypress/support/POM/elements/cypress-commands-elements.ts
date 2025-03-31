export const selectors = {
    actionEmail: ".action-email",
    actionFocus: ".action-focus"
}

class Commands {
    get getActionEmail(): Cypress.Chainable<any>{
        return cy.get(selectors.actionEmail)
    }
    get getActionFocus(): Cypress.Chainable<any>{
        return cy.get(selectors.actionFocus)
    }
}

export default new Commands();