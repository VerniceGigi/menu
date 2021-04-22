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
	thisDropdown.classList.toggle("showit");
}