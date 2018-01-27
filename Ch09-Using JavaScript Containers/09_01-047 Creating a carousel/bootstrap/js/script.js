/*self executing function: this makes sure that whatever code we put in 
execute only after jquery has loaded properly*/
$(function() { 
/*we first call carousel class and then the carousel function to activate 
the carousel automatically*/
	$('.carousel').carousel({
		interval: 2000, /*default: 5000*/
		/*interval: false or 0 would not auto play*/
		pause: false, /*default: hover*/
		wrap: false, /*default: true (sondan başa dönme)*/
		keyboard: false /*default: true*/
	});

});