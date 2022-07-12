
class DocumentacaoPage {

    //#region contructor
    constructor() {
        this.MenuDocumentacao = '[id="menu-item-9455"]'
        this.PageDocumentacao = '.home-section h1'
        this.BotaoGatlingDocs = '.home-cta a[href*="gatling/"]'
        this.BotaoSelfHosted = '.home-cta a[href*="self-hosted/"]'
        this.BotaoCloudDocs = '.home-cta a[href*="cloud/"]'
        this.TemaEscuro = '[class="toggle-dark"]'
        this.TemaClaro = '[class="toggle-light"]'
        this.Pesquisa = '[id="userinput"]'
        this.Sugestao = 'div > span:nth-child(1)'
        this.ClicarSugestao = '[class="suggestion"]'
        this.Titulo = 'main > h1'
        this.AcessoGitHub = '[class="feather feather-github"]'
        this.LogoGitHub = '.d-lg-flex [class="octicon octicon-mark-github"]'
        this.GitHubGatling = '[class="h2 lh-condensed"]'
        this.BotaoGatlingDocs = '//a[@role="button"][contains(text(),"Gatling Docs")]'
        this.SubMenuDebugging = '[title="Debugging"]'
        this.EditarPaginaGitHub = '[class="feather feather-edit-2"]'
        this.SubMenuInstallation = '[title="Installation"]'
        this.NestaPaginaAtalho = '//parent::li[contains(a,"Launching Gatling and the Recorder from the IDE")]/a'
        this.AtalhoVisivel = '[id="Launching Gatling and the Recorder from the IDE"]'
        this.SelfHostedReference = '[class="stretched-link"]'
        this.SelfHostedInstallation = '//a[@class="stretched-link"][contains(text(),"Installation")]'
        this.SelfHostedIntroduction = '//a[@class="stretched-link"][contains(text(),"Introduction")]'
        this.MenuUsuarioCloud = '[title="User"]'
        this.SubMenuLoginCloud = '[title="Login"]'
        this.ImagemClick = 'img[src*="login-github-oauth.png"]'
        this.ValidaImagemBefore = '#lightbox > img'
    }

    //#endregion

    //#region Documentação

    DocumentacaoMenu() {
        cy.get(this.MenuDocumentacao).click()
        cy.get(this.PageDocumentacao).should('contain', 'Welcome to the Gatling Documentation')
    }

    TemaPagina(tema) {
        if (tema == 'Escuro') {
            cy.get(this.TemaEscuro).click()
            cy.get(this.TemaClaro).should('be.visible').and('exist')
        } else if (tema == 'Claro') {
            cy.get(this.TemaEscuro).click()
            cy.get(this.TemaClaro).click()
            cy.get(this.TemaEscuro).should('be.visible').and('exist')
        }
    }

    Pesquisar() {
        cy.wait(1000)
        cy.get(this.Pesquisa).type('Debugging')
        cy.get(this.Sugestao).should('contain','Debugging')
        cy.get(this.ClicarSugestao).first().click({force:true})
        cy.get(this.Titulo).should('contain','Debugging')
    }

    Link() {
        cy.get(this.AcessoGitHub).click()
        cy.get(this.LogoGitHub).should('exist')
        cy.get(this.GitHubGatling).should('contain','Gatling')
    }

    EditarPagina() {
        cy.xpath(this.BotaoGatlingDocs).click()
        cy.get(this.SubMenuDebugging).click()
        cy.get(this.EditarPaginaGitHub).click({force:true})
        cy.get(this.LogoGitHub).should('exist')
    }

    Referencia() {
        cy.get(this.BotaoSelfHosted).click()
        cy.get(this.SelfHostedReference).click()
        cy.xpath(this.SelfHostedInstallation).click({force:true})
        cy.xpath(this.SelfHostedIntroduction).click({force:true})
        cy.get(this.Titulo).should('contain','Introduction')
    }

    Imagem() {
        cy.get(this.BotaoCloudDocs).click()
        cy.get(this.MenuUsuarioCloud).click()
        cy.get(this.SubMenuLoginCloud).click()
        cy.get(this.ImagemClick).click()
        cy.get(this.ValidaImagemBefore).should('exist').and('be.visible')
    }

    //#endregion

}

export default new DocumentacaoPage()