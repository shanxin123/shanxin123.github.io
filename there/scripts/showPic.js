function showPic(whichpic)
{var source=whichpic.getAttribute("href");
var placeholder=document.getElementById("placeholder");
placeholder.setAttribute("src",source);
var text=whichpic.getAttribute("title");
var description=document.getElementById("description");
description.firstChild.nodeValue=text;
}
function prepareGallery(){
if(!document.getElementsByTagName) return false;
var links=document.getElementsByTagName("a");
for(var i=0;i<links.length;i++){
links[i].onclick = function(){
showPic(this);
return false;
}
}
}
function addLoadEvent(){
var oldonload = window.onload;
if(typeof oldonload == 'function'){
oldonload();
prepareGallery();
}
else{
window.onload=prepareGallery;
}
}
addLoadEvent();