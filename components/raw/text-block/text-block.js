/*
    Buttons within text blocks in the CMS will be WYSIWYG fields
    To get the hoverr styles to work we need to add the overlay html with js...
/*/
$('.text-block [class^="button"]').each(function () {
    //check if an overlay exists, if not...
    if ($('.button-overlay', $(this)).length == 0) {
        var text = $(this).html();
        $(this).html(text + '<span class="button-overlay"><span>' + text + '</span></span>');
        $(this).attr('role', 'button');
    }
});
