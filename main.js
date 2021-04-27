function dropit(element) {
	var dropdowns = document.getElementsByClassName("dropitems");
	// element.nextSibling is the carriage return… The dropdown menu is the next next.
	var thisDropdown = element.nextSibling.nextSibling;


	if (!thisDropdown.classList.contains('showit')) { 
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			dropdowns[i].classList.remove('showit');
		}
	}

	// Toggle the dropdown on the element clicked
	thisDropdown.classList.add("showit");
}

var btnIndex = 0;

opacit(btnIndex);

			
function opac(m) {
	opacit(btnIndex = m);
}

function opacit(m) {
	var j;
	var k;
	var button = document.getElementsByClassName("dropbtn");

	for (j = 0; j < button.length; j++) {
		button[j].classList.remove('showdropbtn');
	}

	button[btnIndex-1].classList.add("showdropbtn");
}



