/**
 * Common navigation commands.
 */

class Navigation {
    // Because the base URL is set cypress.config all we need to do is add "/" so that we are shown the home page (current URL: https://example.cypress.io/)
    goToHomePage(){
        cy.visit("/");
    }

    goTocommandsActionsPage(){
        cy.visit("/commands/actions")
    }
}

export default new Navigation();