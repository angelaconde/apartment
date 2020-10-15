$.fn.lorito = function () {
    this.each(function () {
        $(this).hide().delay(10000).queue(function (n) {
            $(this).show(); n();
        });
    });
}

$("#lorito").lorito();
