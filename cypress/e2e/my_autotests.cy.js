import * as main_page from "../locators/main_p.json";
import * as recovery_page from "../locators/recovery_password_p.json";
import * as result_page from "../locators/result_p.json";
import * as data from "../helpers/default_data.json";

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
          cy.visit('/');
    });

    afterEach('Конец теста', function () {
        cy.get(result_page.close).should('be.visible');
    });
 
    it('1. Правильный логин и правильный пароль', function () {
         cy.get(main_page.mail).type(data.login);
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.loginButton).click();
         cy.get(result_page.title).should('be.visible');
         cy.get(result_page.title).contains('Авторизация прошла успешно');
     })

    it('2. Восстановление пароля', function () {
        cy.get(main_page.forgotButton).click();
        cy.get(recovery_page.email).type(data.login);
        cy.get(recovery_page.send_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
    })

    it('3. Правильный логин и НЕправильный пароль', function () {
        cy.get(main_page.mail).type(data.login);
        cy.get(main_page.password).type('iLoveqastudio2');
        cy.get(main_page.loginButton).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Такого логина или пароля нет');
    })

    it('4. НЕправильный логин и правильный пароль', function () {
        cy.get(main_page.mail).type('dolnikov@german.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.loginButton).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Такого логина или пароля нет');
    })

    it('5. Логин без @', function () {
        cy.get(main_page.mail).type('dolnikovgerman.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.loginButton).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');
    })

    it('6. Проверка на приведение к строчным буквам в логине', function () {
        cy.get(main_page.mail).type('GerMan@Dolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.loginButton).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Авторизация прошла успешно');
    })
})