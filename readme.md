# praktisk_uppgift1
Ni ska skapa en komplett mini-web-app där man kan söka på en artist/album/låt och få reda på information om varje sökträff.

Man ska kunna

    Välja om man vill söka enbart på artister, album, låtar eller alla kombinationer
    Se cover-photo för varje träff (om det är en låt som saknar eget photo kan man visa albumets photo) och relevant information (baserat på om sökträffen är en låt, ett album eller en artist), t.ex längd om det är en låt, antal låtar och lanserings-år om det är ett album och antal album om det är en artist.
    Se sökträffar grupperade efter typ (låtar/album/artister)

Deezer API

API:et ni ska kommunicera med är Deezer och dokumentationen finns nedan. UPPDATERING 2019-12-17 23:28: För att på enklaste sätt kunna prata med API:et via vanlig Fetch i JavaScript och slippa problem med CORS (som vi kan prata om på fredag) så kan ni använda RapidAPI’s Deezer API som tar bort det problemet.

Hämta ut en nyckel från RapidAPI så som vi gjorde idag med JokeAPI och sen använd den ”Code Snippet”-funktion som finns i RapidAPI för att få syntaxen för anrop med Fetch.
(NY!) RapidAPI’s Deezer API

https://rapidapi.com/deezerdevs/api/deezer-1
API-dokumentation

https://developers.deezer.com/api
Search Endpoint

https://developers.deezer.com/api/search
Kravspecifikation

Appen ska

    vara responsiv och utvecklad med Mobile-First strategi, ha korrekt semantik osv.
    hämta all extern information asynkront
    använda fetch och promises (alternativt async/await)
    vara uppdelad i funktioner som endast har ett ansvar (t.ex. en del som utför själva söknings-förfrågan, en del som renderar resultatet och i sin tur kallar på olika funktioner baserat på om det är en artist, album eller låt som ska renderas)

Förutom ovan så ska

    all källkod ska från början vara versionshanterad i ett Git-repository och ni ska pusha till ett GitHub-repo.
    all källkod vara korrekt indenterad (så klart)
    appen vara publicerad på en subdomän på ert webbhotell

För att ha möjlighet till VG så ska man också:
VG-kriterier

    Kunna klicka in på en sökträff och se ytterligare information (baserat på typ av sökträff).
        om det är en låt så ska album och artist vara klickbara
        om det är ett album så ska låtarna på albumet visas och artisterna ska vara klickbara
        om det är en artist så ska hens album visas och vara klickbara
    Visa statistik om artisten (snittlängd låtar, antal släppta låtar under 2019 m.m.). Välj själv vad du tycker kan vara rolig info baserat på vad för data som finns i API:et och som du kan använda för att göra sammanställningar!

Deadlines
Inskickning av färdig app

Appen ska vara uppladdad till ert webbhotell, vara pushad till GitHub och formuläret nedan inskickat senast fredag 10/1 kl. 23:59.