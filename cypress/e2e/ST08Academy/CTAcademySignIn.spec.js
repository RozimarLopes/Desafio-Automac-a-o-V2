import suporte from '../../support/pages/Suporte'
import academysigin from '../../support/pages/AcademySigInPage'

describe('CTSigIn', () => {
    beforeEach(() => {
        academysigin.ConverterExcelToJson()
        suporte.NavegaSite()
        academysigin.AcademySubMenuSigIn()
    })

    it('cT01ValidaLinkRedeSocialLinkedin', () => {
        academysigin.RedeSocial('Linkedin')
    })

    it('cT02ValidaLogin', () => {
        academysigin.Login()
    })

    it('cT0ValidaLembrarEmail', () => {
        academysigin.LembrarEmail()
    })


})