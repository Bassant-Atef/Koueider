// <reference types="cypress"/>

 describe ('Adding items to cart , applying a coupon and Checkout' , ()=> {

    it('Adding items to cart', ()=> {

    cy.visit('https://stgkoueider.wpengine.com/en/product-category/dairy/');
    cy.get('[name="billing_city"]').select('Hadayek El Kobba');
    cy.get('[class="btn js-popup-closer choose-branch"]').click();
    cy.get('[class="button single_add_to_cart_button"]').click({ force : true , multiple: true });
    cy.get('[class="mini-cart active"]').should('be.visible');
    cy.get('[data-text="Checkout"]').click();
/*
   // Applying a promo code 
    const validPromoCode = 'DX6X8GYB' ;
    const invalidPromoCode = 'INVALIDCODE';
    cy.get('[class="open-coupon"]').should('be.visible').click({ force: true  , multiple: true });
    cy.get('.checkout_coupon').should('have.class', 'active').should('be.visible');
  
    cy.wait(500).then(() => {
      let retryCount = 0;
      const maxRetries = 8; 
      cy.get('.checkout_coupon').should($form => {
        const isActive = $form.hasClass('active');
        if (!isActive && retryCount < maxRetries) {
          retryCount++;
          throw new Error('Form is not active yet, retrying...');
        }
      });
    });
    cy.wait(2000);

    // Applying Valid Coupon
    cy.get('.checkout_coupon.active #coupon_code').should('be.visible');
    cy.get('.checkout_coupon.active #coupon_code').eq(0).type(validPromoCode);
    cy.get('[name="apply_coupon"]').click({ force :true , multiple: true });
    cy.get('.woocommerce-message').should('be.visible').and('contain.text', 'Coupon code applied successfully.');

    // Removing The applied Coupon
    cy.get('.woocommerce-remove-coupon').should('be.visible').click({force :true , multiple: true});
    cy.get('.woocommerce-message').should('be.visible').and('contain.text', 'تم حذف الكوبون.');
    cy.reload();

   // Appling InValid Coupon  
   cy.get('[class="open-coupon"]').should('be.visible').click({ force: true  , multiple: true });
   cy.get('.checkout_coupon').should('have.class', 'active').should('be.visible');
   cy.get('.checkout_coupon.active #coupon_code').should('be.visible');
   cy.get('.checkout_coupon.active #coupon_code').eq(0).clear().type(invalidPromoCode);
   cy.get('[name="apply_coupon"]').click({ force :true , multiple: true });
   cy.get('.woocommerce-error').should('be.visible').and('contain.text', 'IS Not Valid !');
*/


   //----------------------------------------------------------------------------------------------------------------------------------------
   
   // Filling Fields With Valid Data 
    cy.get('[id="billing_first_name"]').type('Mitch Designs');
    cy.get('[id="billing_last_name"]').type('Test');
    cy.get('[id="billing_email"]').type('mitchdesignstest@gmail.com');
    cy.get('[id="billing_phone"]').type('01111111111');
    cy.get('[id="select2-billing_state-container"]').click();
    cy.contains('.select2-results__option', 'Alexandria').click();
    //cy.get('[id="select2-billing_state-container"]').select('Giza');
    cy.get('[id="billing_city"]').select('Khaled Ibn Al Walid Street');
    cy.get('[id="billing_address_1"]').type('For Testing');
    cy.get('[id="billing_building"]').type('1');
    cy.get('[id="billing_building_2"]').type('1');
    cy.get('[name="billing_address_2"]').type('1');
    cy.get('[class="wc_payment_methods payment_methods methods"]').should('be.visible');
    cy.get('[id="payment_method_cod"]').check({force: true});
    cy.get('[id="terms"]').check({force: true});
    cy.get('[id="place_order"]').click({force: true});
    cy.wait(2000).url().should('include', 'checkout/order-received');

    });
 });