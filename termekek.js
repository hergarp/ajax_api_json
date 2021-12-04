class Termek{
    constructor(node, adat){
        this.node=node;
        this.adat= adat;
        this.cimElem=this.node.children(".termeknev");
        this.kepElem=this.node.children(".kep");
        this.leirasElem=this.node.children(".leiras");
        this.arElem=this.node.children(".ar");
        


    }

    setAdat(adat){
        // console.log(ertek);
        this.cimElem.html(adat.nev);
        this.kepElem.attr("src", adat.kep);
        this.leirasElem.html(adat.leiras);
        this.arElem.html(adat.ar);
    }
    kattintasTrigger(esemenyneve){
        let esemeny = new CustomEvent(esemenyneve, {

            detail: this.adat, //ezzel adatokat tudok átadni
        });
        window.dispatchEvent(esemeny); // A főablakhoz ad
    }
}
class TermekAdmin extends Termek {
    constructor(node, adat) {
        super(node, adat)
        this.kepElem = this.node.children(".kep ").children("img");
        this.termekTorles = this.node.children(".torles").children("button");
        this.termekModosit = this.node.children(".modosit").children("button");
        this.setAdat(this.adat);
        this.termekTorles.on("click ", () => {
            this.kattintasTrigger("torles");

        });
        this.termekModosit.on("click ", () => {
            this.kattintasTrigger("modositas");

        });
    }


}
class TermekAruhaz extends Termek {
    constructor(node, adat) {
        super(node, adat)
        this.termekKep = this.node.children(".kep ");

        this.setAdat(this.adat);
        this.termekKosar = this.node.children(".kosarba");

        this.termekKosar.on("click ", () => {
            this.kattintasTrigger("termekKosarba");

        });
    }



}
class AjaxHivas{
    constructor(){
        
    }
}