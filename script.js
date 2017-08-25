var e;

function random() {
	clear_table();
	e = Math.floor(Math.random() *4);
	document.getElementById(e).style.backgroundColor = "red";
	
}
function clear_table() {
	for (var i = 0; i <= 3; i++) {
		document.getElementById(i).style.backgroundColor = "gray";
	}
}

function minus() {
	if (e == 0) {
		e = 4;
	}

	clear_table();
	e--;
	document.getElementById(e).style.backgroundColor = "red";
}

function plius() {
	if (e ==4) {
		e = -1;
	}
	clear_table();
	e++;
	document.getElementById(e).style.backgroundColor = "red";
}


