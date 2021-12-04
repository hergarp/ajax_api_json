class Kosar {
    constructor() {
        this.kosarElem = $("#kosaram");
        this.osszarElem = $("#osszar");
        this.kosarTomb = [];
        if (localStorage.getItem('kosaram') !== null) {
            this.kosarTomb = JSON.parse(localStorage.getItem('kosaram'))
            this.megjelenit()
        }
    }
    setKosar(termek) {
        this.kosarTomb.push(termek)
        localStorage.setItem('kosaram', JSON.stringify(this.kosarTomb))
    
        this.megjelenit()
    }
    megjelenit() {
        let osszeg = 0;
        let txt = "<table>";
        this.kosarTomb.forEach((element, index) => {
            txt +=
            '<tr><td>' +
            element.nev +
            '</td><td>' +
            element.ar +
            "</td> <td><button data-id='" 
            + index + "' class='torol' >X</button></td></tr>";
            osszeg += Number(element.ar);

        });
        txt +="</table>";
        this.kosarElem.html(txt);
        this.kosarbaGombElem = $('.torol')
        this.kosarbaGombElem.on('click', (event) => {
            let id = $(event.target).attr('data-id')
            this.kosarTomb.splice(id, 1)
            localStorage.setItem('kosaram', JSON.stringify(this.kosarTomb))
            this.megjelenit()
          })
        this.osszarElem.html("Mindösszesen: "+osszeg + " Ft");
    }
}
