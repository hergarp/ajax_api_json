$(function () {

    const kosar = new Kosar();
    const termekek = [];
    let apivegpont = 'http://localhost:3000/termek';
    const ajax = new MyAjax();
    ajax.getAjax('http://localhost:3000/termek', termekek, termekLista)

    // myAjax('termekek.json', termekLista)
    $("#cars").on("change", () => {

        let autoTipus = $("#cars").val();
        console.log(autoTipus);
        if (autoTipus == "260") {
            let ujvegpont = apivegpont + "?tipus=260";
            console.log(ujvegpont);
            ajax.getAjax(ujvegpont, termekek, termekLista);
        }
        if (autoTipus == "200") {
            let ujvegpont = apivegpont + "?tipus=200";
            console.log(ujvegpont);
            ajax.getAjax(ujvegpont, termekek, termekLista);
        }
        if (autoTipus == "1800") {
            let ujvegpont = apivegpont + "?tipus=1800";
            console.log(ujvegpont);
            ajax.getAjax(ujvegpont, termekek, termekLista);
        }
        // switch (autoTipus) {
        //     case "A260":
        //     ujvegpont= apivegpont+ "?tipus=260";
        //     console.log(ujvegpont);
        //     ajax.getAjax(ujvegpont, termekek, termekLista);

        //     break;

    })

    function termekLista(termekek) {
        const szuloElem = $(".termekek");
        const sablonElem = $("footer .termek");
        szuloElem.empty();
        sablonElem.show();
        termekek.forEach(function (elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new TermekAruhaz(node, elem);
        });

        sablonElem.hide();
        $(window).on("termekKosarba", (event) => { // console.log(event.detail); //kosarba itt lehet rakni a terméket!
            kosar.setKosar(event.detail);
        });
    }

});
