$(document).ready(function() {
    $("#navbarSupportedContent").append(`<div class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="search-btn">Search</button>
    </div>`)
    $("li").css("text-align", "right");
    $(".price").css("float", "right");
    $(".card-title").css("text-align", "center");
    $('#search-btn').click(function() {
        let string = $('input').val();
        if (string !== "")
            window.location.href = `http://localhost:3000/home?search=${string}`
    });
})