window.addEventListener('load', function(){
    var load_screen = document.getElementById('load_screen');
    document.body.removeChild(load_screen);
});



$('.menu').slicknav({
    label: '',
    prependTo: 'header',
    closedSymbol: '+',
    openedSymbol: '-',
    init: function () {
        /*$('.slicknav_nav').find('ul').removeClass('dropdown-nav');
        $('.slicknav_nav').find('li').removeClass('dropdown-show');
        $('.slicknav_nav').find('a').removeClass('arrow-toggle');*/
    }
});

window.onscroll = function() {myFunction()};

var menu = document.getElementById("menu");
var sticky = menu.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}

// Add minus icon for collapse element which is open by default
jQuery(".collapse.show").each(function(){
  jQuery(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
});

// Toggle plus minus icon on show hide of collapse element
jQuery(".collapse").on('show.bs.collapse', function(){
  jQuery(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
}).on('hide.bs.collapse', function(){
  jQuery(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
});




  


