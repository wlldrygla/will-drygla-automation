import InitialPageElements from "../elements/initialPageElements";

const initialPageElements = new InitialPageElements();
const baseUrl = Cypress.config("baseUrl");

export default class InitialPage {
	acessRegisterPage() {
		cy.get(initialPageElements.newAccountButton()).click();
	}

	validateModalText(text) {
		cy.get(initialPageElements.modalText()).should("contain", text);
	}
}
