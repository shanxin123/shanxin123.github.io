function displayAbbreviations()
{
if(!document.getElementsByTagName||!document.createElement||!document.createTextNode)return false;
var abbreviations=document.getElementsByTagName("abbr");
if(abbreviations.length<1) return false;
var defs=new Array();
for (var i=0;i<abbreviations.length;i++)
{
var current_abbr=abbreviations[i];
var definition=current_abbr.getAttribute("title");
var key=current_abbr.lastChild.nodeValue;
defs[key]=definition;
}
var dlist=document.createElement("dI");
for (key in defs)
{
var dtitle=document.createElement("dt");
var dtitle_text=document.createTextNode(key);
dtitle.appendChild(dtitle_text);
var ddesc=document.createElement("dd");
var ddesc_text=document.createTextNode(definition);
ddesc.appendChild(ddesc_text);
ddesc.appendChild(dtitle);
ddesc.appendChild(ddesc);
var header=document.createElement("h2");
var header_text=document.createTextNode("Abbreviations");
header.appendChild(header);
document.body.appendChild(dlist);
}
}
addLoadEvent(displayAbbreviations);