var txt = "Saya ingin belajar bersama"
var splitTxt = txt.split(" ")

function fCobaForEach(item, index){
	console.log("Item : ", item, "Indeks ke  ", index)	
}

splitTxt.forEach(fCobaForEach)
