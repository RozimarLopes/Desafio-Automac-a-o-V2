import academynewaccount from '../../support/pages/AcademyNewAccountPage'

class GatLingEnterprisePage {

    //#region contructor
    constructor() {
        this.MenuEnterprise = '[id="menu-item-8984"]'
        this.TituloPageEnterprise = '//parent::div[contains(h1,"Gatling Enterprise")]/h1'
        this.BotaoSelfPageEnterprise = '[class="vc_btn3-icon fas fa-server"]'
        this.BotaoCloudPageEnterprise = '[class="vc_btn3-icon fab fa-mixcloud"]'
        this.Titulo = '[class="title_get_started"]'
        this.TituloPageCloud = '[id="kc-page-title"]'
        this.AzureFaq = 'a[href*="azure-faq"]'
        this.AwsFaq = 'a[href*="aws-faq"]'
        this.BotaoLerDocumentacao = '//parent::div[contains(a,"Read documentation")]/a'
        this.TituloDocumentacao = '[title="Reference"] > h3'
        this.BotaoLerMaisCloud = '//parent::div[contains(a,"Learn more")]/a'
        this.TituloPageCloudOffers = '//parent::div[contains(h1,"Scale your website with Cloud Load Testing")]/h1'
        this.BotaoDescubraPrecos = '//parent::div[contains(a,"Start your trial")]/a'
    }

    //#endregion

    //#region GatLing Enterprise

    EnterpriseMenu() {
        cy.get(this.MenuEnterprise).click()
        cy.xpath(this.TituloPageEnterprise).should('contain', 'Gatling Enterprise')
    }

    FerramentaTeste(status) {
        if (status == 'SelfHosted') {
            cy.get(this.BotaoSelfPageEnterprise).click()
            cy.get(this.Titulo).should('contain', 'Try Gatling Enterprise')
        } else if (status == 'Cloud') {
            cy.get(this.BotaoCloudPageEnterprise).click()
            cy.get(this.TituloPageCloud).should('contain', 'Sign in to your account')
        }
    }

    PerguntasFrequentes(faq) {
        if (faq == 'Azure') {
            cy.get(this.AzureFaq).click()
            cy.get(this.Titulo).should('contain', 'Azure FAQ')
        } else if (faq == 'Aws') {
            cy.get(this.AwsFaq).click()
            cy.get(this.Titulo).should('contain', 'AWS FAQ')
        }
    }

    Documentacao() {
        cy.xpath(this.BotaoLerDocumentacao).click()
        cy.get(this.TituloDocumentacao).should('exist')
    }

    LerMaisCloud() {
        cy.xpath(this.BotaoLerMaisCloud).click()
        cy.xpath(this.TituloPageCloudOffers).should('contain','Scale your website with Cloud Load Testing')
    }

    DescubraPrecos() {
        cy.xpath(this.BotaoDescubraPrecos).click()
        cy.get(this.Titulo).should('contain', 'Try Gatling Enterprise')
    }

    //#endregion

}

export default new GatLingEnterprisePage()