
class MenuPage {

    //#region contructor
    constructor() {
        this.MenuWhyGatLing = '[id="menu-item-8846"]'
        this.SubMenuWhy = '#menu-item-8846 [class="sub-menu"]'
        this.MenuLearnMore = '[id="menu-item-8859"]'
        this.SubMenuLearn = '#menu-item-8859 [class="sub-menu"]'

    }

    //#endregion

    //#region Menu

    SubMenu(sub_Menu) {
        switch (sub_Menu) {
            case 'WhyGatling':
                cy.get(this.MenuWhyGatLing).click()
                const itemsWhy = ['Solutions', 'Gatling', 'Load-Test-As-Code', '+ More features']
                itemsWhy.forEach((item) => {
                    cy.contains(this.SubMenuWhy, item).should('exist')
                })
                break;
            case 'LearnMore':
                cy.get(this.MenuLearnMore).click()
                const itemsLearn = ['Blog', 'Gatling Academy', 'Documentation', 'Resources', 'Gatling Community']
                itemsLearn.forEach((item) => {
                    cy.contains(this.SubMenuLearn, item).should('exist')
                })
                break;
        }
    }


    //#endregion

}

export default new MenuPage()