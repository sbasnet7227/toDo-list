// JavaScript source code
$('ul').on('click', 'li',function (event) {
    $(this).toggleClass("complete");
    //alert('hit li');
    //event.stopPropagation();

});

// click on X to delete ToDo
$('ul').on('click', 'span',function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    //$(this).parent().remove();
    //alert('hit span');
    event.stopPropagation(); // this event will stop firing up 
        
});

// dynamically creating new li by inputing text

$('input[type = "text"]').keypress(function (event) {
    if (event.which === 13) {

        // grabing new  todo text from input
        var todoText = $(this).val();

        $(this).val('');
        ''
        $('ul').append("<li><span><i class='fa fa-trash'></i></span>" + todoText + '</li>')
    }

});

$('.fa-plus').click(function () {

    $('input[type = "text"]').fadeToggle();
});


