let menuToggle = document.querySelector('#menu-toggle');
let mobileNavContainer = document.querySelector('#adapt_menu');


menuToggle.onclick = function(){
	if(window.innerWidth <= 1199) {
    	menuToggle.classList.toggle('menu-icon-active');
    	mobileNavContainer.classList.toggle('adapt_menu__active');		
	} else {
		menuToggle.classList.remove('menu-icon-active');
		mobileNavContainer.classList.remove('adapt_menu__active');
	}

}
