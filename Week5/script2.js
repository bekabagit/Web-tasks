function choose(e){
	var img=document.getElementById("bigImage");
	var bigImage=img.getElementsByTagName("img")[0];
	bigImage.src=e.currentTarget.src;
}
var images= document.getElementsByTagName("img");
for(var i =0;i<images.length;i++){
	images[i].addEventListener("click",choose);
}