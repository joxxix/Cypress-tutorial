import navigation from "../../support/POM/action/navigation"
import homeElements from "../../support/POM/elements/cypress-home-elements"
import commandElements from "../../support/POM/elements/cypress-commands-elements"


describe('kitchen sink home page', () => {
    beforeEach(() => {
        navigation.goToHomePage()
    })

    it('home page loads', () => {
        homeElements.getKitchenSinkTitle.should("be.visible")
    })
})

describe('kitchen sink commands actions', () => {
    beforeEach(() => {
        navigation.goTocommandsActionsPage()
    })

    it('testing type() using fixture data', () => {
        cy.fixture('example').then((testData) => {
          commandElements.getActionEmail.type(testData.email);
          commandElements.getActionEmail.should('have.value', testData.email);
        })
      })

    it('testing focus()', () => {
        commandElements.getActionFocus.focus()
        commandElements.getActionFocus.should('have.class', 'focus').prev().should('have.attr', 'style', 'color: orange;')
    })
})