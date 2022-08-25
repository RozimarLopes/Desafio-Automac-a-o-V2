
class RodapePage {

    //#region contructor
    constructor() {
        this.Community = 'img[src*="discourse-svg.svg"]'
        this.Banner = '[id="banner"]'
        this.Linkedin = 'img[src*="linkedin.svg"]'
        this.PaginaLinkedin = '[class="linkedin-text"]'
        this.Youtube = 'img[src*="youtube.svg"]'
        this.PaginaYoutube = '#logo.ytd-masthead [title="Página inicial do YouTube"]'
        this.GitHub = 'img[src*="github.svg"]'
        this.PaginaGitHub = '.d-lg-flex [class="octicon octicon-mark-github"]'
        this.Privacy = '#menu-item-9650'
        this.PaginaPrivacyTerms = '[class="title_get_started"]'
        this.Terms = '#menu-item-9683'
        this.Scroll = '[class="fa fa-angle-up"]'
        this.GatlingTopo = '[class="vc_btn3-icon fas fa-building"]'
    }

    //#endregion

    //#region Rodape

    RedeSocial(tipo) {
        switch (tipo) {
            case 'Community':
                cy.get(this.Community).click()
                cy.get(this.Banner).should('contain', 'Welcome in the Gatling community!')
                break;
            case 'Linkedin':
                cy.get(this.Linkedin).click()
                cy.get(this.PaginaLinkedin).should('exist')
                break;
            case 'Youtube':
                cy.get(this.Youtube).click()
                cy.get(this.PaginaYoutube).should('exist')
                break;
            case 'GitHub':
                cy.get(this.GitHub).click()
                cy.get(this.PaginaGitHub).should('exist')
                break;
        }
    }

    TermosePrivacidade(status) {
        if (status == 'Privacy') {
            cy.get(this.Privacy).click()
            cy.get(this.PaginaPrivacyTerms).should('contain', 'Privacy')
        } else if (status == 'Terms') {
            cy.get(this.Terms).click()
            cy.get(this.PaginaPrivacyTerms).should('contain', 'Terms of service')
        }
    }

    Scrollup() {
        cy.get(this.Privacy).scrollIntoView()
        cy.get(this.Scroll).click({force:true})
        cy.get(this.GatlingTopo).should('be.visible')
    }

    //#endregion

}

export default new RodapePage()