import suporte from '../../support/pages/Suporte'
import home from '../../support/pages/HomePage'

describe('CTHome', () => {
    beforeEach(() => {
        suporte.NavegaSite()
    })

    it('cT01ValidaLinkFerramentaOpenSource', () => {
        home.OpenSource()
    })

    it('cT02ValidaSecaoNews', () => {
        home.Secao('News')
    })

    it('cT03ValidaSecaoDepoimentos', () => {
        home.Secao('Depoimento')
    })

    it('cT04ValidaLinkGatlingEnterpriseCloud', () => {
        home.LinkGatlingEnterprise()
    })

    it('cT05ValidaLinkRecursoWhitePaper', () => {
        home.Recursos('WhitePaper')
    })

    it('cT06ValidaLinkRecursoWebinars', () => {
        home.Recursos('Webinars')
    })

    it('cT07EnviaEmailParaReceberContato', () => {
        home.Contato()
    })

    it('cT08ValidaLinkReservarDemonstracao', () => {
        home.ReservarDemonstracao()
    })
    

})