import suporte from '../../support/pages/Suporte'
import precos from '../../support/pages/PrecosPage'

describe('CTPrecos', () => {
    beforeEach(() => {
        suporte.NavegaSite()
        precos.PrecosMenu()
    })

    it('cT01ValidaCloudPlansMonthly', () => {
        precos.Planos('Cloud','Monthly')
    })

    it('cT02ValidaCloudPlansAnnually', () => {
        precos.Planos('Cloud','Annually')
    })

    it('cT03ValidaLinkConsultoriaServicos', () => {
        precos.ConsultoriaServicos()
    })


})