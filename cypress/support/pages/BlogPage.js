
class BlogPage {

    //#region contructor
    constructor() {
        this.MenuBlog = '[id="menu-item-58"]'
        this.PageBlog = '//parent::div[contains(h1,"The Gatling Blog")]/h1'
        this.PesquisaPageBlog = '[id="keyword"]'
        this.ArtigoAll = '//parent::a[contains(h3,"Welcome to Bastien!")]/h3'
        this.LoadMoreBlogAll = '//parent::div[contains(a,"Load more")]/a'
        this.MenuBlogEvent = '[href="#tab-event"]'
        this.LoadMoreBlogEvent = '//*[@id="tab-event"]/div[2]/a'
        this.ArtigoEvent = '//parent::a[contains(h3,"Meet Gatling at VivaTech!")]/h3'
        this.LinkArtigoAll = '#datafetch > div:nth-child(3) > div.grid-header'
        this.TituloArtigo = '[class="entry-title"]'
        this.AntigaPostagem = '[rel="prev"]'
        this.RecentePostagem = '[rel="next"]'
        this.ClicarArtigo = '//parent::a[contains(h3,"Welcome to Paul-Emmanuel!")]/h3'
    }

    //#endregion

    //#region Blog

    BlogMenu() {
        cy.get(this.MenuBlog).click()
        cy.xpath(this.PageBlog).should('contain', 'The Gatling Blog')
    }

    Pesquisa() {
        cy.get(this.PesquisaPageBlog).type('Bastien!')
        cy.xpath(this.ArtigoAll).first().should('contain', 'Welcome to Bastien!')
    }

    LoadMore(submenu) {
        switch (submenu) {
            case 'All':
                cy.xpath(this.LoadMoreBlogAll).first().click()
                cy.xpath(this.ArtigoAll).first().should('contain', 'Welcome to Bastien!')
                break;
            case 'Event':
                cy.get(this.MenuBlogEvent).click()
                cy.xpath(this.LoadMoreBlogEvent).first().click()
                cy.xpath(this.ArtigoEvent).first().should('contain', 'Meet Gatling at VivaTech!')
                break;
        }
    }

    Artigo() {
        cy.get(this.LinkArtigoAll).click()
        cy.get(this.TituloArtigo).should('exist').and('be.visible')
    }

    PostagemAntiga() {
        for (let i = 0; i < 2; i++) {
            cy.get(this.AntigaPostagem).click()
        }
        cy.get(this.TituloArtigo).should('exist').and('be.visible')
    }

    PostagemRecente() {
        cy.xpath(this.ClicarArtigo).first().click()
        cy.get(this.TituloArtigo).should('exist').and('be.visible')
        cy.get(this.RecentePostagem).click()
        cy.get(this.TituloArtigo).should('exist').and('be.visible')
    }



    //#endregion

}

export default new BlogPage()