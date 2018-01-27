// we target the tooltip and tell it to activate.
// with [data-toggle="tooltip"] we ask jquery to look for any elements that 
// have a data-toggle attribute of tooltip. then we execute the tooltip method
$(function() {
	$('[data-toggle="tooltip"]').tooltip();
});