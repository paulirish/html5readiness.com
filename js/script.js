jQuery(document).bind('DOMMouseScroll mousewheel', function(e, delta) {

    //return;
    var newval,
        num = $('div.css-chart p').css('padding-left');

    delta = delta || e.detail || e.wheelDelta;

    if (delta > 0 || e.which == 38) {
        newval = parseFloat(num) + 10 * (e.shiftKey ? .1 : 1);
    } else if (delta < 0 || e.which == 40) {
        newval = parseFloat(num) - 10 * (e.shiftKey ? .1 : 1);
    } else {
        return true;
    }
    
    $('style.padleft').remove();
    $('<style class="padleft"> div.css-chart p { padding-left : '+newval+'px; } div.css-chart p i { width : '+2*newval+'px; } </style>')
        .appendTo(document.body);

    e.preventDefault();

});

jQuery("h3 a").click(function() { 
    $(this).siblings().andSelf().removeClass('selected').end().end().addClass('selected');
    $("#container").removeClass().addClass($(this).attr("title")); 
    return false;
}).last().click();