var lucky = [];
var gameover = false;

function get_number() {
	if (!gameover) {
		clear_table ();
		var skaicius;
		skaicius = Math.floor(Math.random() *4);
		document.getElementById(skaicius).style.backgroundColor = "red";
		lucky.push(skaicius);
	}
	check_gameover();
}
function clear_table() {
	for (var i = 0; i <= 4; i++) {
		document.getElementById(i).style.backgroundColor = "gray";
	}
}
function check_gameover() {
	if (lucky.length <= 4) {
			//zaidimas tesiasi
	} else {
		alert("Game is Over!");
		gameover = true;
	}
}

