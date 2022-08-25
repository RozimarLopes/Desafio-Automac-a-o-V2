let rowsLength;
class AcademyNewAccountPage {

    //#region contructor
    constructor() {
        this.MenuAcademy = '[id="menu-item-12967"]'
        this.TituloPageAcademy = '//parent::div[contains(h1,"Gatling Academy")]/h1'
        this.BotaoCadastroPrimeiroTeste = 'a[href*="Run-your-first-tests"]'
        this.BotaoRegistroCurso = '[class="button button-primary"]'
        this.TituloPageNovaConta = '[class="page__heading"]'
        this.FirstName = '[id="user[first_name]"]'
        this.LastName = '[id="user[last_name]"]'
        this.Email = '[id="user[sign-up][email]"]'
        this.Password = '[id="user[password]"]'
        this.Company = '[id="user[profile_attributes][custom_profile_fields_attributes][0][value]"]'
        this.BotaoSignUp = '[value="Sign up"]'
        this.ValidacaoErro = '[class="form-error__list-item"]'
        this.ValidacaoSucesso = '[class="course-progress__percent-complete _course-progress__percent-complete_1rtg53"]'
        this.LinkLoginPageNovaConta = '[id="button__sign-in"]'
        this.LinkCriarContaPageLogin = '[id="button__sign-up"]'
        this.TituloPageLogin = '[class="checkout__heading"]'
    }

    //#endregion

    //#region Gatling Academy New Account

    ConverterExcelToJson() {
        cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "sheet2" }).then((rows) => {
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/Data.json", { rows })
        })
    }

    AcademyMenu() {
        cy.get(this.MenuAcademy).click()
        cy.xpath(this.TituloPageAcademy).should('contain', 'Gatling Academy')
    }

    CadastroNovaConta() {
        cy.get(this.BotaoCadastroPrimeiroTeste).click()
        cy.get(this.BotaoRegistroCurso).click()
        cy.fixture('Data').then((data) => {
            for (let i = 0; i < rowsLength; i++) {
                cy.wait(1000)
                cy.get(this.TituloPageNovaConta).should('contain', 'Create a new account').then(() => {
                    cy.get(this.FirstName).clear().type(data.rows[i].FirstName)
                    cy.get(this.LastName).clear().type(data.rows[i].LastName)
                    cy.get(this.Email).clear().type(data.rows[i].Email)
                    cy.get(this.Password).clear().type(data.rows[i].Password)
                    cy.get(this.Company).clear().type(data.rows[i].Company)
                    cy.get('select').select('Brazil')
                    cy.get(this.BotaoSignUp).click()
                    cy.authenticateWithReCaptcha()
                    if (data.rows[i].Message != '0% complete') {
                        cy.get(this.ValidacaoErro).should('contain', data.rows[i].Message)
                    } else {
                        cy.get(this.ValidacaoSucesso).should('contain', data.rows[i].Message)
                    }
                })
            }
        })
    }

    AtalhoLoginNovoCadastro(status) {
        cy.get(this.BotaoCadastroPrimeiroTeste).click()
        cy.get(this.BotaoRegistroCurso).click()
        if (status == 'Acesso') {
            cy.get(this.LinkLoginPageNovaConta).click()
            cy.get(this.TituloPageLogin).should('contain', 'Welcome Back!')
        } else if (status == 'CriarConta') {
            cy.get(this.LinkLoginPageNovaConta).click()
            cy.get(this.LinkCriarContaPageLogin).click()
            cy.get(this.TituloPageNovaConta).should('contain', 'Create a new account')
        }
    }

    //#endregion

}

export default new AcademyNewAccountPage()