import suporte from '../../support/pages/Suporte'
import academynewaccount from '../../support/pages/AcademyNewAccountPage'

describe('CTNewAccount', () => {
    beforeEach(() => {
        academynewaccount.ConverterExcelToJson()
        suporte.NavegaSite()
        academynewaccount.AcademyMenu()
    })

    it('cT01CadastroCursoCamposObrigatorios', () => {
        academynewaccount.CadastroNovaConta()
    })

    it('cT02ValidaLinkJaTenhoContaPaginaCadastro', () => {
        academynewaccount.AtalhoLoginNovoCadastro('Acesso')
    })

    it('cT03ValidaLinkCriarContaPaginaLogin', () => {
        academynewaccount.AtalhoLoginNovoCadastro('CriarConta')
    })





})