

describe('e2e автотест на покупку нового аватара для своего тренера', function () {

    beforeEach('Начало теста', function () {
          cy.visit('https://pokemonbattle.ru/login/');
    });

    it('Покупка нового аватара для своего тренера', function () {
        cy.get('#k_email').type("USER_LOGIN");
        cy.get('#k_password').type("USER_PASSWORD");
        cy.get('.MuiButton-root').click();
        cy.get('.header_card_trainer').click();
        cy.get('.k_mobile > :nth-child(5)').click();
        cy.wait(1000);
        cy.get('.available > button').first().click();
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type(4620869113632996);
        cy.get(':nth-child(1) > .style_1_base_input').type(1226);
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type(125);
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type("NAME");
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.style_1_base_input').type(56456);
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.payment_status_top_title').should('be.visible').contains("Покупка прошла успешно");
     })

})