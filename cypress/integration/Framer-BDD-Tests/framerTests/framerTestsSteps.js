import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

beforeEach(()=>{
    Cypress.on('uncaught:exception', (err, runnable) =>{
        return false;
    })    
})

// Cypress.on('uncaught:exception', (err, runnable) =>{
//     return false;
// })

Given('the Framer site is loaded', ()=>{
    cy.visit('https://mind-wend-913065.framer.app/');
})

When('I click on Pricing button', () => {
    cy.get('div.framer-1g3amks-container div[data-framer-generated="true"] span')
    .invoke('show')
    .trigger('mouseover')
    .click({ force: true });
})

When('I see the Pricing page', () => {
    cy.get('div.framer-1xy1tag h1 span').contains('Pricing')
})

Then("I see the products currency symbol is displayed as $ in Pricing page", () => {
    const tiles = cy.get('div.pricing-container').children();
    tiles.forEach((tile) => {
        tile.get('h2 span').invoke('text').then((text) => {
            const sign = text.trim()[0];
            sign.should('have.text', '$');
        });
    })
})

When('I scroll to Many types of components to customize in the components page', ()=>{
    cy.get('div.framer-1892sln p span').first()
    .invoke('show')
    .trigger('mouseover')
    .click({ force: true });

    cy.get('div.framer-1lz646s h2 span.framer-text').scrollTo('right')
    cy.get('div.framer-1lz646s h2 span.framer-text').should('be.visible').and('have.text', 'Many types of components to customize');
})

Then('I see the visit button is displayed on each card in the Many types of components to customize section', ()=>{
    const columns = cy.get('div.framer-1ytqfhu').children()

    columns.forEach((column, index) =>{
        if(index !== 0 && index !== columns.length - 1){
            const cards = column.get('[name="Card"]').children()
            cards.forEach((card) =>{
                card.get('[name="Card"] div[data-border="true"][name="Button"]').contains('Visit')
            })

            const cardsSmall = column.get('[name="Card Small"]').children()
            cardsSmall.forEach((card)=>{
                card.get('[name="Card Small"] div[data-border="true"][name="Button"]').contains('Visit')
            })
        }
    })
})