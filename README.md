#1. beadandó dokumentációja

##1. Követelmény analízis

**Funkcionális elvárások:**

A webes alkalmazás amit készítünk egy egyszerű családok számára használható TODO (tennivalók kigyűjtése) program. Az alkalmazás használatához a család tagonknak először regisztrálniuk kell (jelszó és felhasználónév választás után), majd be kell lépniük a saját felhasználói adataikkal. Ezután el kell tudni érniük az aktuális tennivalók listáját, ezeket tudniuk kell szerkeszteni és törölni. 

**Nem funkcionális követelmények:**

A perzisztálásnak file-ba kell történnie és a program közzétételére a HERUKO platformot kell használni.

**Szakterületi fogalomjegyzék:**

- user: Az adatbázisban tárolt felhasználók (a hozzájuk tartozó felhasználói adatokkal)
- todo: Az adatbázisban tárolt tennivalók elnevezése.

**Használati eset modell:**

Szerep körök:

A program user típusú adatokat tárol, nekik van jogosultságok megtekinteni és szerkeszteni, valamint törölni todo-kat. Amikor elkezdjük használni a programot, akkor a usernek lehetősége van meglévő adatokkal belélpni, vagy regisztrálni. Mind a kettő után a felhasználó eléri az összes todo-t. Ezek után lehetősége van szerkeszteni ezeket, törölni őket, vagy újakat létrehozni, vagy kilépni.  

Használati eset diagram:
![eset diagram](images/esetdiagram2.jpg)

Egy folyamat ismertetése:

A felhasználó a program használatakor először egy üdvözlő oldalra kerül, innen a bejelentkezés gombra kattintva átkerül a bejelentkező oldalra. Ha nem regisztrált a felhasználó, akkor a bejelentkező oldalról egy "regisztráció" gomb egy regisztráció oldalra irányítja. Itt az adatok megadása után a "Submit" gombra kattintva megtörténik a regisztráció és visszadobja a felhasználót a program a bejelentkező oldalra. (Értelem szerűen ha már regisztrált a felhasználó, akkor a bejelentkező oldalról egyből beléphet.) Ha sikeresen beléptünk, elérjük az összes TODO-t egy oldalon listázva. Minden TODO-hoz tartozik egy szerkesztés és egy törlés gomb. A szerkesztés gombra kattintva értelem szerűen az adott TODO leírása szerkeszthető és az, hogy kinek a feladata az adott TODO. Ha elmentettük a módosításokat akkor visszakerülünk a lista oldalra, ahol már a módosított adatokkal jelenik meg a TODO. Értelem szerűen a törlés gomb törli az adott TODO-t. Megtalálható továbbá még a lista oldalon egy "Új TODO felvétele" gomb, ami a szerkesztő oldalhoz hasonló oldalra irányít, ahol egy teljesen új TODO vehető fel. Ha elmentettük, akkor visszakerülünk a lista oldalra. Minden oldalról kijelentkezhetünk a jobb felső sarokban látható "kijelentkezés" gombbal.

##2. Tervezés

**Architecktúra terv:**

Az alkalmazás egy Javascript alapú HTML, waterline, sails, express, és mocha technológiákat használó program. Az alapvető működésért egy szerver szolgál, aminek a kódját a server.js tartalmazza. Ebben tároljuk a különböző végpontokért felelő controllereket, amiket a saját "controllers" almappában elhelyezett .js-fájlokból nyer ki a server.js. Ez szerver felel a titkosítási technológinak a helyes használatáért is (bcrypt).

Oldal térkép:
![eset diagram](images/esetdiagram.jpg)

Végpontok:

- /login                A bejelentkezés oldala
- /login/signup         A regisztráció oldala
- todos/list            A listázó oldal
- todos/new             Az új TODO felvétele oldal
- todos/edit/:id        A TODO szerkesztése oldal
- todos/delete/:id      A TODO törlése oldal

**Felhasználóifelület-modell**

Oldal vázlatok:

Első oldal:

![első oldal](images/1.jpg)

Bejelentkező oldal:

![login oldal](images/2.jpg)

Regisztráció oldal:

![regisztrációs oldal](images/6.jpg)

Listázó oldal:

![listázó oldal](images/3.jpg)

Szerkesztő oldal:

![szerkesztési oldal](images/4.jpg)

Új TODO felvétele oldal:

![új todo oldal](images/5.jpg)

**Adatmodell**

![Adatbázis modell diagram-ja](images/adatbazis_modell.png)

##3. Implementálás

Fejlesztői környezet:

A fejlesztés a cloud 9 felületén zajlott.

Mappa szerkezet:

![Adatbázis modell diagram-ja](images/mappak.jpg)

- .tmp: itt tároljuk file-ban az adatokat
- config: a waterline configurációját tároljuk itt
- controllers: a végpontok controllerei
- models: az adatbázik modelljét leíró file-ok és a teszt file-ok
- node_modules: a különböző node modulok
- public: bootswatch, bootstrap, jquery
- views: az oldalak megjeneésért felelős hbs file-ok
- images: a dokumentációban használt képek

##4. Tesztelés

Adatmodell tesztelés:

A program adatszerkezetét CHAI-al volt tesztelve.

Emellett funkcionális teszt történt.

##5. Felhasználói dokumentáció

Futtatási követelmények:
- Egy javascript futtatására alkalmas böngésző
- Operációs rendszeres tetszőleges


A program használata a folyamat ismertetés alapján magától értetődik.

# Bead

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

