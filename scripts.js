
function main(jQuery) {
	var d = new Date();
	var h = ("0" + d.getHours()).slice(-2);
	var m = ('0' + d.getMinutes()).slice(-2);
	var s = ("0" + d.getSeconds()).slice(-2);
	var ms = ("00"+ d.getMilliseconds()).slice(-3);
	var time = [h,m,s,ms].join(':');
	document.getElementById("timeDisplay").innerHTML = time;
	setTimeout(main, 10);
}

$(document).ready(main);