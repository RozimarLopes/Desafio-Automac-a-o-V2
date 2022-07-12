
class Suporte {

    //#region Limpar Arquivos na pasta de download

    LimparPastaDownload() {
        cy.exec('del /q cypress\\downloads\\', { log: true, failOnNonZeroExit: false });
    }

    //#endregion

    //#region Navega até a página

    NavegaSite() {
        cy.window().then((win) => {
            win.sessionStorage.clear()
        })
        cy.visit('/')
        cy.get('#hs-eu-confirmation-button').click({ force: true })
    }

    //#endregion
}

export default new Suporte()