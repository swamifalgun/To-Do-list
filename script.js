"use-strict";
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed"); // to select the specific LI element 

});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove(); // to remove the li element from the DOM
    });
    event.stopPropagation(); // add a callback to stop the event from triggering the other event on the ul 
});

$("input[type = 'text']").keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val(); // take input value and store it in a variable todoText
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function () {
    $("input[type = 'text']").fadeToggle();
});
