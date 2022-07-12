import suporte from '../../support/pages/Suporte'
import menu from '../../support/pages/MenuPage'

describe('CTMenu', () => {
    beforeEach(() => {
        suporte.NavegaSite()
    })

    it('cT01ValidaSubMenuWhyGatling', () => {
        menu.SubMenu('WhyGatling')
    })

    it('cT02ValidaSubMenuLearnMore', () => {
        menu.SubMenu('LearnMore')
    })
    

})