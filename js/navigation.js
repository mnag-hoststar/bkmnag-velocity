// -------------------------------------
// Velocity: JS > Navigation
// -------------------------------------

$(document).ready(function(){
	
	// ------------------------------
	// Global Variables
	// ------------------------------
	
	// ------------------------------
	// Navigation changes when it's tablet size
	// ------------------------------
	
	// Toggles class open to display/hide the whole navigation.

	$('.navigation-toggle').click(function() {
		$('.widget[data-widget-type="extendednavigation"]').toggleClass('open');
	});

	// Toggles class open to display/hide folders.

	$('.navigation-item.folder').each(function() {
		$(this).click(function() {
			$(this).parent('.navigation-item.folder').toggleClass('open');
		});
	});
    
    // Hides other submenus when a main menu point with a submenu is clicked.
    
    $(".navigation-item").click(function() {
        $(this).siblings(".navigation-item").removeClass("folder-open open");
    });
	
	// ------------------------------
	// Header size changes when it's not at the top of the page.
	// ------------------------------
	
	function scrollListener() {
		var languageSelectorHeight = $('.language-selector').outerHeight();
		var scrollTop = $(window).scrollTop();
		
		if (languageSelectorHeight == undefined) {
			languageSelectorHeight = 0;
		}
		
		if (scrollTop > languageSelectorHeight) {
			$('.template__header').addClass('template__header--scrolled');
		} else {
			$('.template__header').removeClass('template__header--scrolled');
		}
	}
	
	scrollListener();

	$(window).on('scroll', function () {
		scrollListener();
	});
	
    $(document).bind("DOMSubtreeModified",function(){
		$(window).resize(function() {
			scrollListener();
		});
    });
	
	// ------------------------------
	// Header and Section Functions
	// ------------------------------
	
	// distance variables
	
	function contentFromTopDistance() {
		var languageSelectorHeight = $('.language-selector').outerHeight();
		var navigationHeight = $('.template__header').outerHeight();
		var footerHeight = $('.template__footer').outerHeight();
	
		// header distance from top changes when a language selector is present

		if (languageSelectorHeight == undefined) {
			languageSelectorHeight = 0;
			var languageAndNavigationHeight = navigationHeight;
		} else {
			var languageAndNavigationHeight = languageSelectorHeight+navigationHeight;
		}
		
		// section distance from top
		
		$('section.template').css('min-height', navigationHeight+'px');
		$('header.template__header').css('margin-top', languageSelectorHeight+'px');
		$('.template__home .responsiveslideshow .caption').css('padding-top', navigationHeight+'px');
	}

	contentFromTopDistance();
	
    $(document).bind("DOMSubtreeModified",function(){
		$(window).resize(function() {
			contentFromTopDistance();
		});
    });
	
	// ------------------------------
    // Hides other submenus when a main menu point with a submenu is clicked.
	// ------------------------------
    
    $(".navigation-item").click(function(){
        $(this).siblings(".navigation-item").removeClass("folder-open open");
    });
});