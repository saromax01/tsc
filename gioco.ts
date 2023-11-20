function verificaVincitore(giocatore1: number, giocatore2: number, numeroCasuale: number): string {
  const sceltaGiocatore1 = Math.abs(numeroCasuale - giocatore1);
  const sceltaGiocatore2 = Math.abs(numeroCasuale - giocatore2);

  if (giocatore1 === numeroCasuale && giocatore2 === numeroCasuale) {
    return "Entrambi i giocatori hanno azzeccato il numero casuale!";
  }

  let vincitore: string | null = null;

  if (sceltaGiocatore1 < sceltaGiocatore2) {
    vincitore = "giocatore1";
  } else if (sceltaGiocatore2 < sceltaGiocatore1) {
    vincitore = "giocatore2";
  }

  if (vincitore) {
    return `${vincitore === "giocatore1" ? "Il giocatore 1" : "Il giocatore 2"} ha azzeccato il numero casuale!`;
  } else if (sceltaGiocatore1 === sceltaGiocatore2) {
    return "Nessuno dei due ha azzeccato il numero casuale, e entrambi si sono avvicinati nella stessa misura!";
  } else {
    const perdente = sceltaGiocatore1 < sceltaGiocatore2 ? "il giocatore 1" : "il giocatore 2";
    return `Nessuno dei due ha azzeccato il numero casuale, ma ${perdente} si è avvicinato di più!`;
  }
}
