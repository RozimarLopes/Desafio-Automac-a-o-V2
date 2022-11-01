import suporte from '../../support/pages/Suporte'
import rodape from '../../support/pages/RodapePage'

describe('CTRodape', () => {
    beforeEach(() => {
        suporte.NavegaSite()
    })

    it('cT01ValidaRedirecionamentoCommunity', () => {
        rodape.RedeSocial('Community')
    })

    it('cT02ValidaRedirecionamentoLinkedin', () => {
        rodape.RedeSocial('Linkedin')
    })

    it('cT03ValidaRedirecionamentoYoutube', () => {
        rodape.RedeSocial('Youtube')
    })

    it('cT04ValidaRedirecionamentoGitHub', () => {
        rodape.RedeSocial('GitHub')
    })

    it('cT05ValidaRedirecionamentoPrivacy', () => {
        rodape.TermosePrivacidade('Privacy')
    })

    it('cT06ValidaRedirecionamentoTermsOfService', () => {
        rodape.TermosePrivacidade('Terms')
    })

    it('cT07ValidaScrollup', () => {
        rodape.Scrollup()
    })

})