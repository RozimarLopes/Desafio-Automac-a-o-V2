
class PrecosPage {

    //#region contructor
    constructor() {
        this.MenuPrecos = 'a[href*="pricing"]'
        this.TitlePrecos = '.section_tabs h1'
        this.PlanoMensal = '.cloud-pricing-monthly > .vc_general'
        this.planos = '.column_price .title_offers'
        this.BotaoConsultoriaServicos = '[class="vc_btn3-container  purple_button vc_btn3-inline"]'
        this.TituloConsultoriaServicos = '[class="title_get_started"]'
    }

    //#endregion

    //#region Página de Preços

    PrecosMenu() {
        cy.get(this.MenuPrecos).first().click()
        cy.get(this.TitlePrecos).should('contain', 'Gatling Enterprise Pricing')
    }

    Planos(plano, tipo) {
        switch (plano) {
            case 'Cloud':
                if (tipo == 'Monthly') {
                    cy.get(this.PlanoMensal).click()
                }
                cy.get(this.planos).should('contain', 'Scout')
                cy.get(this.planos).should('contain', 'Scale')
                cy.get(this.planos).should('contain', 'Corporate')
                break;
        }
    }

    ConsultoriaServicos() {
        cy.get(this.BotaoConsultoriaServicos).click()
        cy.get(this.TituloConsultoriaServicos).should('contain', 'Consulting & training with Gatling')
    }

    //#endregion

}

export default new PrecosPage()