function displayCitations()
{
if (!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
var quotes =document.getElementByTagName("blockquote");
for (var i=0;i<quotes.length;i++)
       {
if (!quotes[i].getAttribute("cite"))continue;
var quoteChildren=quotes[i].getElementsByTagName('*');
if (quoteChildren.length<1)continue;
var elem=quoteChildren[quoteChildren.length-1];
var link = document.createElement("a")
var link_text = document.createTextNode("source");
link.appendChild(link_text);
link.setAttribute("href",url);
var superscrip = document.createElement("sup");
superscript.appendChild(link);
elem.appendChild(superscript);
}
}
addLoadEvent(displayCitations);
