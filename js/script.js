jQuery(document).bind('DOMMouseScroll mousewheel', function(e, delta) {

    return();
    var newval,
        num = $('div.css-chart p').css('padding-left');

    delta = delta || e.detail || e.wheelDelta;

    if (delta > 0 || e.which == 38) {
        newval = parseFloat(num) + 5 * (e.shiftKey ? .1 : 1);
    } else if (delta < 0 || e.which == 40) {
        newval = parseFloat(num) - 5 * (e.shiftKey ? .1 : 1);
    } else {
        return true;
    }

    $('div.css-chart p').css('padding-left',newval + 'px');

    e.preventDefault();

})