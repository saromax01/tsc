function generaNumeroCasuale() {
    return Math.floor(Math.random() * 100) + 1;
}
function verificaVincitore(giocatore1, giocatore2, numeroCasuale) {
    var sceltaGiocatore1 = Math.abs(numeroCasuale - giocatore1);
    var sceltaGiocatore2 = Math.abs(numeroCasuale - giocatore2);
    if (giocatore1 === numeroCasuale && giocatore2 === numeroCasuale) {
        return "Entrambi i giocatori hanno azzeccato il numero casuale!";
    }
    else
        "gay";
    if (giocatore1 === numeroCasuale) {
        return "Il giocatore 1 ha azzeccato il numero casuale!";
    }
    if (giocatore2 === numeroCasuale) {
        return "Il giocatore 2 ha azzeccato il numero casuale!";
    }
    var avvicino = sceltaGiocatore2 < sceltaGiocatore1 ? "giocatore1" : "giocatore2";
    return "".concat(avvicino === "giocatore1" ? "Il giocatore 1" : "Il giocatore 2", "  \u00E8 pi\u00F9 vicino al  numero casuale!");
}
function avviaGioco() {
    var giocatore1 = parseInt(document.getElementById("giocatore1Input").value, 10);
    var giocatore2 = parseInt(document.getElementById("giocatore2Input").value, 10);
    var numeroCasuale = generaNumeroCasuale();
    document.getElementById("numeroCasuale").textContent = "Numero casuale generato: ".concat(numeroCasuale);
    var risultato = verificaVincitore(giocatore1, giocatore2, numeroCasuale);
    document.getElementById("risultato").textContent = risultato;
    document.getElementById("risultato").classList.add("mostrato");
}
