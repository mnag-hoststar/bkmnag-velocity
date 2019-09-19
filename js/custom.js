// -------------------------------------
// Velocity: JS > Custom
// -------------------------------------

// Feature parallax fade effect.

function parallaxFade() {
	scrollPos = $(this).scrollTop();
	$('.responsiveslideshow__image').css({
		'top': (scrollPos/4)+"px",
		'bottom': (scrollPos/4)+"px"
	});
	$('.responsiveslideshow__image-title').css({
		'top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/500)
	});
	$('.responsiveslideshow__image-description').css({
		'top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/500)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		parallaxFade();
	});
});

// Makes the whole Ecom Product Tiles Clickable

$(document).ready(function() {

    $('.product-item').each(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            $(this).addClass("clickable");
        }
    });

    $('.product-item').click(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            window.location = href;
        }
    });

    // Adds variation class when there is only one product image

    if($(".ecomproduct__product-gallery").length == 0)
    {
       $("body").addClass("product-one-image");
    }

    // Next Button for ecom gallery
	
    $('.product-gallery').each(function() {
      var max = 5;
      if ($(this).find("li.gallery-item").length > max) {
        $(this).addClass("hiding");

        $(this)
            .find('li.gallery-item:gt('+max+')')
            .hide()
            .end()
            .append(
                $('<li class="ecom-view-more" id="ecomscroll" href="#">&gt;</li>').click( function(){
                $(this).siblings(':hidden').show().end();
            })
            );
      }
    });

    // Ecom Gallery Scrolling

    $('#ecomscroll').click(function(e) {
        e.preventDefault();
        var id = e.target.id;
        if(id == 'ecomscroll')
        {
            $('ul.product-gallery li:first').appendTo('ul.product-gallery');
        }
            else
        {
            $('ul.product-gallery li:last').prependTo('ul.product-gallery');
        }
    });
	
	// Adds classes for elements influenced by wow.js
	
	$('form').addClass('wow fadeInUp');
	$('.widget[data-name="gallery"] li.gallery-item').addClass('wow fadeInUp');
	$('.widget[data-name="responsiveslideshow"]').addClass('wow fadeInUp');
	$('.widget[data-name="map"]').addClass('wow fadeInUp');
	$('.widget[data-name="youtube"]').addClass('wow fadeInUp');
	$('.widget[data-name="blogpostlist"] .post-article').addClass('wow fadeInUp');
	$('.widget[data-name="ecomproductslist"] li.product-item').addClass('wow fadeInUp');
	$('.widget[data-name="ecomfeaturedproducts"] li.product-item').addClass('wow fadeInUp');
});
