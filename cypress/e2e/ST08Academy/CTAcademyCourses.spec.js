import suporte from '../../support/pages/Suporte'
import academycourse from '../../support/pages/AcademyCoursesPage'

describe('CTCourses', () => {
    beforeEach(() => {
        suporte.NavegaSite()
        academycourse.AcademySubMenuCourse()
    })

    it('cT01ValidaPesquisar', () => {
        academycourse.Pesquisar()
    })

    it('cT02ValidaLinkRegistroCursoeCommerceJava', () => {
        academycourse.Curso('eCommerceJava')
    })

    it('cT03ValidaLinkRegistroCursoFirstTestJava', () => {
        academycourse.Curso('FirstTestJava')
    })
/*
    it('cT04ValidaAvisarProximoModulo', () => {
        academycourse.AvisoProximoModulo()
    })

    it('cT05ValidaCampoEmailMailingList', () => {
        academycourse.MailingList()
    })
*/
})