let rowsLength;
import rodape from '../../support/pages/RodapePage'

class ContatoPage {

    //#region contructor
    constructor() {
        this.Contact = '[data-obf_url="contact"]'
        this.Title = '[class="title_get_started"]'
        this.LastName = '[name="lastname"]'
        this.FirstName = '[name="firstname"]'
        this.Company = '[name="company"]'
        this.Job = '[name="job_title"]'
        this.Email = '[name="email"]'
        this.Phone = '[name="phone"]'
        this.Message = '[name="message"]'
        this.ButtonContactUs = '[class="hs-button primary large"]'
        this.ValidationError = '//label[@class="hs-error-msg"]'
        this.ValidationSucess = '.hbspt-form .submitted-message'
        this.Home = '.brand-logo img[src*="logo-gatling-noir.svg"]'
    }

    //#endregion

    //#region Contato

    ConverterExcelToJson() {
        cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "sheet1" }).then((rows) => {
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
        })
    }

    RedirecionaContato() {
        cy.get(this.Contact).should('contain', 'Contact').click({ force: true })
    }

    CadastraContato() {
        cy.fixture('xlsxData').then((data) => {
            for (let i = 0; i < rowsLength; i++) {
                cy.get(this.Title).should('have.text', 'Contact us').then(() => {
                    cy.get(this.LastName).clear().type(data.rows[i].LastName)
                    cy.get(this.FirstName).clear().type(data.rows[i].FirstName)
                    cy.get(this.Company).clear().type(data.rows[i].Company)
                    cy.get(this.Email).clear().type(data.rows[i].Email)
                    cy.get(this.Phone).clear().type(data.rows[i].Phone)
                    cy.get(this.Message).clear().type(data.rows[i].Texto)
                    cy.get('select').select('Architect')
                    cy.get(this.ButtonContactUs).click()
                    if (data.rows[i].Message != 'Thank you for your message.') {
                        cy.xpath(this.ValidationError).should('contain', data.rows[i].Message)
                    } else {
                        cy.get(this.ValidationSucess).should('contain', data.rows[i].Message)
                    }
                })
            }
        })

    }

    GoHome() {
        cy.get(this.Home).should('exist').click()
        cy.get(rodape.GatlingTopo).should('be.visible')
    }


    //#endregion

}

export default new ContatoPage()