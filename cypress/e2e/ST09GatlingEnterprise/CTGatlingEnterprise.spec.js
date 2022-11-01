import suporte from '../../support/pages/Suporte'
import enterprise from '../../support/pages/GatLingEnterprisePage'

describe('CTGatlingEnterprise', () => {
    beforeEach(() => {
        suporte.NavegaSite()
        enterprise.EnterpriseMenu()
    })

    it('cT01ValidaBotaoTrySelfHosted', () => {
        enterprise.FerramentaTeste('SelfHosted')
    })
/*
    it('cT02ValidaBotaoTryCloud', () => {
        enterprise.FerramentaTeste('Cloud')
    })
*/
    it('cT03ValidaLinkReadFAQAzure', () => {
        enterprise.PerguntasFrequentes('Azure')
    })

    it('cT04ValidaLinkReadFAQAws', () => {
        enterprise.PerguntasFrequentes('Aws')
    })
/*
    it('cT05ValidaBotaoLerDocumentacao', () => {
        enterprise.Documentacao()
    })
*/
    it('cT06ValidaBotaoLerMaisCloudOffers', () => {
        enterprise.LerMaisCloud()
    })

    it('cT07ValidaBotaoDescubraPrecos', () => {
        enterprise.DescubraPrecos()
    })

})