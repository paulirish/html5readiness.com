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
    $("#container").removeClass().addClass($(this).attr("class")); 
    return false;
}).last().click();


jQuery('.css-chart').delegate('a','click',function(){
  if (/iPod|iPad|iPhone/).test(navigator.userAgent)) return true;
  return false;
})


// ill mark the ghost browsers with (o) under them
// these are here only to make it easier to compare year to year.

var twenty10 = ["ie7","ie8","ie9","ff35","ff37","op","sa","ch"].reverse();


var twenty09 = ["ie6","ie7","ie8","ff20","ff30","op96","sa32","ch2"].reverse();


var twenty08 = ["ie5","ie6","ie7","ff1","ff20","op95","sa31","chX"].reverse();
//               (o)               (o)                        (o)

function syncPositions(){
  var rays = document.querySelectorAll(".css-chart > p em");
  for (var i = 0; i < rays.length; i++) {
    var ray = rays[i];
    for (var j = 0; j < window[ray.className].length; j++) {
      var curr = ray.children[j];
      if (curr && curr.className != window[ray.className][j]) {
        var b = document.createElement("b");
        b.className = 'ghostorunsupported';
        ray.insertBefore(b, curr);
      }
    }
  }
  
  $('input:checkbox').change(function(){
    $('.ghostorunsupported').toggle();
  })
}

jQuery(function(){
  
  $('<label><input type="checkbox">Fixed browser positions</label>')
    .one('change',syncPositions).wrap('<p>').parent().appendTo('#footer');

  
})


