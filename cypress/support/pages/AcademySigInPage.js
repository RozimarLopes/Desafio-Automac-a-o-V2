let rowsLength;
import academynewaccount from '../../support/pages/AcademyNewAccountPage'
class AcademySigInPage {

    //#region contructor
    constructor() {
        this.TituloPageLogin = '[class="page__heading"]'
        this.BotaoRegistrarAgora = '[class="vc_btn3-container  orange_button vc_btn3-inline"]'
        this.MenuSigIn = '//parent::li[contains(a,"Sign In")]'
        this.BotaoLinkedin = '[class="button linkedin"]'
        this.LogoLinkefin = '[type="linkedin-logo"]'
        this.BotaoGoogle = '[class="button google"]'
        this.PaginaGoogle = '[class="kHn9Lb"]'
        this.EmailLogin = '[id="user[email]"]'
        this.PasswordLogin = '[id="user[password]"]'
        this.BotaoSignIn = '[class="button button-primary g-recaptcha"]'
        this.AlertaErro = '[class="form-error__list-item"]'
        this.AlertaEmailErro = '[id="user[email]-error"]'
        this.AlertaPasswordErro = '[id="user[password]-error"]'
        this.MensagemErroToast = '[class="flash"] [class="message-text"]'
        this.MensagemSucessoLogin = '[class="student-dashboard__welcome"]'
        this.CheckLembrarEmail = '[id="user[remember_me]"]'
    }

    //#endregion

    //#region Gatling Academy SignIn

    ConverterExcelToJson() {
        cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "sheet3" }).then((rows) => {
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/Data.json", { rows })
        })
    }

    AcademySubMenuSigIn() {
        academynewaccount.AcademyMenu()
        cy.get(this.BotaoRegistrarAgora).click()
        cy.xpath(this.MenuSigIn).click()
    }

    RedeSocial(redesocial) {
        if (redesocial == 'Linkedin') {
            cy.get(this.BotaoLinkedin).click()
            cy.get(this.LogoLinkefin).first().should('exist')
        } else if (redesocial == 'Google') {
            cy.get(this.BotaoGoogle).click()
            cy.get(this.PaginaGoogle).should('contain', 'Fazer login com o Google')
        }
    }

    Login() {
        cy.fixture('Data').then((data) => {
            for (let i = 0; i < rowsLength; i++) {
                cy.wait(1000)
                cy.get(this.TituloPageLogin).should('contain', 'Welcome Back!').then(() => {
                    cy.get(this.EmailLogin).clear({force:true}).type(data.rows[i].Email)
                    cy.get(this.PasswordLogin).clear({force:true}).type(data.rows[i].Password)
                    cy.get(this.BotaoSignIn).click({force:true})
                    cy.authenticateWithReCaptcha()
                    if (data.rows[i].Validador == 0) {
                        cy.get(this.AlertaErro).should('contain', data.rows[i].Message)
                    } else if (data.rows[i].Validador == 1) {
                        cy.get(this.AlertaPasswordErro).should('contain', data.rows[i].Message)
                    } else if (data.rows[i].Validador == 2) {
                        cy.get(this.AlertaEmailErro).should('contain', data.rows[i].Message)
                    } else if (data.rows[i].Validador == 3) {
                        cy.get(this.MensagemSucessoLogin).should('contain', data.rows[i].Message)
                    }
                })
            }
        })

    }

    LembrarEmail() {
        cy.get(this.EmailLogin).type('jeanpaullolopes@gmail.com')
        cy.get(this.PasswordLogin).type('lk2adcfr12')
        cy.get(this.CheckLembrarEmail).click()
        cy.get(this.BotaoSignIn).click()
        cy.get('[for="user[email]"] [value]').should('have.value', 'jeanpaullolopes@gmail.com')
    }

    //#endregion

}

export default new AcademySigInPage()