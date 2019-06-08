//Hello!
document.getElementById('Button').onclick = Scroll;
var Left = 0;
function Scroll() {
	var elem = document.getElementById('Line');
	Left = Left - 256;
	if (Left < -1536){
		Left = 0;
	}
	elem.style.left = Left + 'px';
}