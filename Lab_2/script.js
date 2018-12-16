function insert_elem(num) {
	document.view.screen.value = document.view.screen.value + num;
}
function clear_all() {
	document.view.screen.value = '';
}
function clear_one() {
	var temp = document.view.screen.value;
	document.view.screen.value = temp.substring(0, temp.length-1);
}
function random() {
	document.view.screen.value = document.view.screen.value + Math.random().toFixed(2) * 100;
}
function persent() {
	document.view.screen.value = document.view.screen.value /100;
}
function result() {
	var res = document.view.screen.value;
	if(res){
		document.view.screen.value = eval(res);
	}
}