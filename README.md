# EXPRESS BLOG MIDDLEWARE

## Panoramica

- Impariamo ad utilizzare i middleware e quindi gestiamo gli errori e le pagine 404.
- Questi middleware dovranno rispondere con un json contente il codice ed il messaggio dell’errore.

## TODO

1. **Creazione rotte:**

   - home

   - posts/ (index)

   - posts/ (store)

   - posts/:slug (show)

2. **Autenticazione**

   - Tramite JWT creiamo una rotta per autenticare un utente ed ottenere il Token JWT

   - Tramite un middleware limitiamo l’accesso alla rotta store dei post ai soli utenti loggati.

   - Svolgere tutto l’esercizio tramite relativi controller e router.

3. **BONUS:**

   - Ritornare un errore diverso nel caso il JWT sia non valido o scaduto
   - Prevedere negli errori diversi in caso di autenticazione. Fare questo usando il `throw` di JS
     - invece di ritornare un errore tramite res.send() nei controller, lanciamo un errore tramite `throw` e gestiamolo nel middleware degli errori
