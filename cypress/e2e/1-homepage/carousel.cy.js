import {homePage} from "../../components/homePage";

describe("Home page slide tests ", () => {
    it('Carousel items should be 15', () => {
        cy.visit('/')
        homePage.categoryCarousel().then(categorySliders => {
            for (let i = 0; i < categorySliders.length; i++) {
                cy.wrap(categorySliders).eq(i).scrollIntoView().find(homePage.category).should('have.length', 15)
            }
        })
        homePage.productCarousel().then(productSliders => {
            for (let i = 0; i < productSliders.length; i++) {
                cy.wrap(productSliders).eq(i).scrollIntoView().find(homePage.product).should('have.length', 15)
            }
        })
    })
})