// JavaScript to get hour in the day
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var date = new Date();
var current_hour = date.getHours();

console.log(current_hour);

// If Night hour remove day class and add night class
if(current_hour >= 18){
	$('body').removeClass('day');
	$('body').addClass('night');
};
// Toggle Class


