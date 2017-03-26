     var  n =  new Date();
 var y = n.getFullYear();
 var m = n.getMonth()+1;
 var d = n.getDate();
 document.write ("\n");
var h = n.getHours();
var min = n.getMinutes();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y +"  "+ h +":" +min ;