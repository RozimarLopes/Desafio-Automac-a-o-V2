
class HomePage {

    //#region contructor
    constructor() {
        this.BotaoOpenSource = '[class="vc_btn3-icon fas fa-globe"]'
        this.ValidaBotaoOpenSource = '[class="text_banner"]'
        this.ValidaTituloNews = '[class="title_card_long"]'
        this.News2 = '.vc_row-flex div>ul>li:nth-child(2)>a'
        this.News3 = '.vc_row-flex div>ul>li:nth-child(3)>a'
        this.Depoimento2 = 'div:nth-child(2)>span'
        this.Depoimento3 = 'div:nth-child(3)>span'
        this.ValidaDepoimento = '.active>.testimonial-item>.holder>.testimonial-data>blockquote>p'
        this.LinkGatlingEnterpriseCloud = '//parent::p[contains(a,"Gatling Enterprise")]/a'
        this.ValidaLinkGatlingEnterpriseCloud = '//parent::div[contains(h1,"Gatling Enterprise")]/h1'
        this.RecursoWhitePaper = 'a[href*="white-paper"]'
        this.RecursoWebinars = 'a[href*="tutorial-6"]'
        this.TituloRecursos = '[class="entry-title"]'
        this.ContatoEmail = '[name="email"]'
        this.BotaoEnviarContaEmail = '[class="hs-button primary large"]'
        this.SucessoEnvioContatoEmail = '//parent::div[contains(p,"Thank you for subscribing!")]/p'
        this.BotaoReservaDemonstracao = 'a[href*="self-hosted"]'
        this.TituloPaginaReservaDemonstracao = '[class="title_get_started"]'
    }

    //#endregion

    //#region Home

    OpenSource() {
        cy.get(this.BotaoOpenSource).click()
        cy.get(this.ValidaBotaoOpenSource)
            .should('contain', 'Download our Open-Source tool and start load testing your application!')
    }

    Secao(tipo) {
        switch (tipo) {
            case 'News':
                cy.get(this.ValidaTituloNews).should('contain', 'New injector region: South America')
                cy.get(this.News2).click()
                cy.get(this.ValidaTituloNews).should('contain', 'Gatling Academy Modules now available in Java')
                cy.get(this.News3).click()
                cy.get(this.ValidaTituloNews).should('contain', '5 Steps to…')
                break;
            case 'Depoimento':
                cy.get(this.Depoimento2).click()
                cy.get(this.ValidaDepoimento).should('exist')
                cy.get(this.Depoimento3).click()
                cy.get(this.ValidaDepoimento).should('exist')
                break;
        }
    }

    LinkGatlingEnterprise() {
        cy.xpath(this.LinkGatlingEnterpriseCloud).click()
        cy.xpath(this.ValidaLinkGatlingEnterpriseCloud).should('contain', 'Gatling Enterprise')
    }

    Recursos(tipo) {
        switch (tipo) {
            case 'WhitePaper':
                cy.get(this.RecursoWhitePaper).should('exist').click()
                cy.get(this.TituloRecursos)
                    .should('contain', 'Whitepaper #1 – How to convert your LoadRunner script to Gatling')
                break;
            case 'Webinars':
                cy.get(this.RecursoWebinars).should('exist').click()
                cy.get(this.TituloRecursos)
                    .should('contain', 'Tutorial #6 – Set up Gatling Enterprise in your CI with Jenkins')
                break;
        }
    }

    Contato() {
        cy.get(this.ContatoEmail).type('lucasmacedo@gmail.com')
        cy.get(this.BotaoEnviarContaEmail).click()
        cy.xpath(this.SucessoEnvioContatoEmail).should('contain','Thank you for subscribing!')
    }

    ReservarDemonstracao() {
        cy.get(this.BotaoReservaDemonstracao).click()
        cy.get(this.TituloPaginaReservaDemonstracao).should('contain','Get started with Gatling')

    }

    //#endregion

}

export default new HomePage()