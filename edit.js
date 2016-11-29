if(!window.counter) {
	window.counter = 0;
}

if(window.counter % 2) {
	alert("Exiting edit mode.");
	document.body.setAttribute('spellcheck', true);
	document.body.contentEditable = false;
} else {
	alert("Entering edit mode.");
	document.body.setAttribute('spellcheck', false);
	document.body.contentEditable = true;
}
++window.counter;
