class MyAjax {
    constructor() {}
    getAjax(apivegpont, termekek, myCallback) {
        termekek.splice(0, termekek.length);

        $.ajax({
            url: apivegpont,
            type: "GET",
            success: function (result) {
                result.forEach((element) => {
                    termekek.push(element);
                });

                myCallback(termekek);
            }
        });
    }
}
