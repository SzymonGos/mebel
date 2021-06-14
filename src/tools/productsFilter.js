function productsFilter(){
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".bi").removeClass("bi-plus").addClass("bi-dash");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".bi").removeClass("bi-dash").addClass("bi-plus");
    });
}

export {productsFilter}