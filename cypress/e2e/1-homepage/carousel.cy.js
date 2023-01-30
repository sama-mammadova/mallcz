import {homePage} from "../../components/homePage";

// returns number of unique elements in given array
function countUniques(arr) {
    return new Set(arr).size;
}

describe("Home page slide tests ", () => {
    it('Carousel items should be 15', () => {
        cy.visit('/')

        homePage.categorySliders().each(slider => {
            // verify that each category carousel contains 15 elements
            cy.wrap(slider).scrollIntoView().find(homePage.categorySelector).should('have.length', 15)

            // verify that there are 15 unique category titles
            cy.wrap(slider).scrollIntoView().find(homePage.categoryTitleSelector).then(titles => {
                    let titleArr = titles.toArray().map(t => t.innerText)
                    let uniqueCount = countUniques(titleArr)
                    cy.wrap(uniqueCount).should('be.eq', 15)
                }
            )
        })

        homePage.productSliders().each(slider => {
            // verify that each product carousel contains 15 elements
            cy.wrap(slider).scrollIntoView().find(homePage.productSelector).should('have.length', 15)

            // verify that there are 15 unique product titles
            cy.wrap(slider).scrollIntoView().find(homePage.productTitleSelector).then(titles => {
                    let titleArr = titles.toArray().map(t => t.innerText)
                    let uniqueCount = countUniques(titleArr)
                    cy.wrap(uniqueCount).should('be.eq', 15)
                }
            )

        })
    })
})