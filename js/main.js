$(document).ready(function(){

	// https://www.lullabot.com/blog/article/importing-css-breakpoints-javascript
	// get currently active media query
	var breakpoint = {};
	breakpoint.refreshValue = function () {
	  this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/'/g, '');
	};
	$(window).resize(function () {
	  breakpoint.refreshValue();
	}).resize();

	// // example use
	// if (breakpoint.value === 'tablet') {
	//   console.log('tablet breakpoint');
	// } else {
	//   console.log('Some other breakpoint');
	// }


	var panels = $('.panel');

	var addClassToPanels = function() {	
		if (breakpoint.value === 'tablet-portrait' || breakpoint.value === 'tablet') {
			$(panels).addClass('tablet-layout');
		} else {
			$(panels).removeClass('tablet-layout');
		}	
	}; addClassToPanels();
	
	on_resize(function() {
		addClassToPanels();
	});







	// off canvas menu
	var showSidebar = function() {
		$('body').removeClass("active-nav").toggleClass("active-sidebar");
		$('.menu-button').removeClass("active-button");					
	};

	var showMenu = function() {
		$('body').removeClass("active-sidebar").toggleClass("active-nav");			
		$('.menu-button').toggleClass("active-button");	
	};


	// Toggle for nav menu for small-screens ($netbooks)
	$('.menu-button-mb').on('click', function() {		
		var $this = $(this);
		// $this.find('.menu').toggleClass('active');
	    $this.find('.menu-top').toggleClass('menu-top-click');
	    $this.find('.menu-middle').toggleClass('menu-middle-click');
	    $this.find('.menu-bottom').toggleClass('menu-bottom-click');		
		showSidebar();							
	});	

	

    var deskTopMq = window.matchMedia("(min-width: 736px)");
    deskTopMq.addListener(resetManus);
    resetManus(deskTopMq);



	function resetBtn() {
    var menuBtnComponent1 = $('.menu-top'),
    	menuBtnComponent2 = $('.menu-middle'),
    	menuBtnComponent3 = $('.menu-bottom');

      	$('body').removeClass("active-sidebar");
      	menuBtnComponent1.removeClass('menu-top-click');
      	menuBtnComponent2.removeClass('menu-middle-click');
      	menuBtnComponent3.removeClass('menu-bottom-click');    		
	}


    function resetManus(deskTopMq) {
      if (deskTopMq.matches) {
      	resetBtn();
      } else {
		resetBtn();
      }
    }  


});