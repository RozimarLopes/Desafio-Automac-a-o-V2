import suporte from '../../support/pages/Suporte'
import blog from '../../support/pages/BlogPage'

describe('CTBlog', () => {
    beforeEach(() => {
        suporte.NavegaSite()
        blog.BlogMenu()
    })

    it('cT01ValidaCampoPesquisa', () => {
        blog.Pesquisa()
    })

    it('cT02ValidaLoadMoreAll', () => {
        blog.LoadMore('All')
    })

    it('cT03ValidaLoadMoreEvent', () => {
        blog.LoadMore('Event')
    })

    it('cT04ValidaLinkArtigoAll', () => {
        blog.Artigo()
    })

    it('cT05ValidaLinkPostagemMaisAntiga', () => {
        blog.Artigo()
        blog.PostagemAntiga()
    })
    
    it('cT06ValidaLinkPostagemMaisRecente', () => {
        blog.PostagemRecente()
    })


})