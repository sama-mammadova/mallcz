export class homePage {

    // returns list of category sliders
    static categorySliders() {
        return cy.get('.top-icons__list')
    }

    // returns list of product sliders
    static productSliders() {
        return cy.get('.hooper-list')
    }

    static categorySelector = ".top-icons__item"
    static productSelector = ".product-box-simple__block"
    static categoryTitleSelector = ".top-icons__caption"
    static productTitleSelector = ".product-box-simple__body__title"

}