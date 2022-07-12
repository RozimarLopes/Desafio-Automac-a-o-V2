import academynewaccount from '../../support/pages/AcademyNewAccountPage'

class AcademyCoursesPage {

    //#region contructor
    constructor() {
        this.BotaoRegistrarAgora = '[class="vc_btn3-container  orange_button vc_btn3-inline"]'
        this.MenuCourse = '[class="header__nav-item"] a[href*="/collections"]'
        this.PesquisarCourse = '[class="form__search-label"] [type="search"]'
        this.ResultadoPesquisa = '[class="products__title"]'
        this.CursoeCommerceJava = '//parent::div[contains(h3,"Module 2 - Load Test an eCommerce Solution - Java")]/h3'
        this.CursoRunYourTestJava = '//parent::div[contains(h3,"Module 1 - Run your first tests with Gatling - Java")]/h3'
        this.BotaoRegistrarCurso = '[class="button button-primary"]'
        this.BotaoMailingList = 'a[href*="/mailing-list"]'
        this.MailingListPage = '[class="section__heading"]'
        this.MailingListEmail = '[name="tenant_lead[email]"]'
        this.MailingListCheck = '[class="form__group-checkbox"]'
        this.BotaoSubmitMailingList = '[type="submit"][class="button button-primary"]'
        this.EmailErroMailingList = '[class="form__error-msg"]'
    }

    //#endregion

    //#region Gatling Academy Courses

    AcademySubMenuCourse() {
        academynewaccount.AcademyMenu()
        cy.get(this.BotaoRegistrarAgora).click()
        cy.get(this.MenuCourse).click()
    }

    Pesquisar() {
        cy.get(this.PesquisarCourse).type('Module 2{enter}')
        cy.get(this.ResultadoPesquisa).should('contain', 'Search result for')
    }

    Curso(modulo) {
        switch (modulo) {
            case 'eCommerceJava':
                cy.xpath(this.CursoeCommerceJava).click()
                break;
            case 'FirstTestJava':
                cy.xpath(this.CursoRunYourTestJava).click()
                break;
        }
        cy.get(this.BotaoRegistrarCurso).should('exist').and('contain', 'Register to the course')
    }

    AvisoProximoModulo() {
        cy.get(this.BotaoMailingList).click()
        cy.get(this.MailingListPage).should('contain','Coming soon!')
        cy.get(this.MailingListEmail).type('jeanluca@gmail.com')
        cy.get(this.MailingListCheck).click()
        cy.get(this.BotaoSubmitMailingList).click({force:true})
        cy.get(this.BotaoSubmitMailingList).should('have.value','Thank You')
    }

    MailingList() {
        cy.get(this.BotaoMailingList).click()
        cy.get(this.MailingListEmail).type('teste@')
        cy.get(this.MailingListCheck).click()
        cy.get(this.BotaoSubmitMailingList).click({force:true})
        cy.get(this.EmailErroMailingList).should('contain','Please enter a valid email address')
    }

    //#endregion

}

export default new AcademyCoursesPage()