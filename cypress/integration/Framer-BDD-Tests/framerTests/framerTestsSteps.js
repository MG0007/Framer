import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Cypress.on('uncaught:exception', (err, runnable) =>{
    return false;
})

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