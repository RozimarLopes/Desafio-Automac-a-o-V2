import suporte from '../../support/pages/Suporte'
import documentacao from '../../support/pages/DocumentacaoPage'

describe('CTDocumentacao', () => {
    beforeEach(() => {
        suporte.NavegaSite()
        documentacao.DocumentacaoMenu()
    })

    it('cT01ValidaTemaEscuro', () => {
        documentacao.TemaPagina('Escuro')
    })

    it('cT02ValidaTemaClaro', () => {
        documentacao.TemaPagina('Claro')
    })

    it('cT03PesquisarDocumento', () => {
        documentacao.Pesquisar()
    })

    it('cT04ValidaLinkGitHub', () => {
        documentacao.Link()
    })

    it('cT05EditarPaginanoGitHub', () => {
        documentacao.EditarPagina()
    })

    it('cT06ValidaSelfHostedReferencia', () => {
        documentacao.Referencia()
    })
/*
    it('cT07ValidaCarregamentoImagemCloud', () => {
        documentacao.Imagem()
    })
*/

})