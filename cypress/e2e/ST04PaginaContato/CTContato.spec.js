import suporte from '../../support/pages/Suporte'
import contato from '../../support/pages/ContatoPage'

describe('CTContato', () => {
    beforeEach(() => {
        contato.ConverterExcelToJson()
        suporte.NavegaSite()
        contato.RedirecionaContato()
    })

    it('cT01CamposObrigatórioseSucesso', () => {
        contato.CadastraContato()
    })

    it('cT02ValidaGoHome', () => {
        contato.GoHome()
    })


})