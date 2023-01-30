export class homePage {

    static categoryCarousel() {
        return cy.get('.top-icons__list')
    }

    static productCarousel() {
        return cy.get('.hooper-list')
    }

    static category = ".top-icons__item"
    static product = ".product-box-simple__block"
}