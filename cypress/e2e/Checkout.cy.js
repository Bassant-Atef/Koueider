// <reference types="cypress"/>

 describe ('Adding items to cart and Checkout' , ()=> {

    it('Adding items to cart', ()=> {

    cy.visit('https://www.ar-koueider.com/en/product-category/dairy/');
    cy.get('[name="billing_city"]').select('Hadayek El Kobba');
    cy.get('[class="btn js-popup-closer choose-branch"]').click();
    cy.get('[class="button single_add_to_cart_button"]').click({ force : true , multiple: true });




    });
 });