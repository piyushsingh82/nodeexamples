function drawTable()
{
	var drawTableResult="";
	//<table> <tbody><tr><td></td></tr></tbody></table>
	var e = document.getElementsByClassName('tableDropdown');
	console.log(e);
	var tableOfText = e.options[e.selectedIndex];
	//console.log("the text of tableDropdown "+tableOfText);
	console.log(tableOfText);
}
function displayAllPlayers()
{
	var playerlist="" ;
 for (x=1;x<10;x++)
 {
 console.log(document.getElementById('player'+x).value);
 playerlist += document.getElementById('player'+x).value + ", ";
 }
 console.log(playerlist);
 return playerlist;

}
function clearAllFields()
{
	console.log("please check on console for textbox value");
	for(i=1;i<10;i++)
	{
		document.getElementById("player"+i).value  = "";
		console.log(document.getElementById("player"+i).value);
	}
}
function calculateResult(){

	var firstno = Number(document.getElementById("firstno").value);
	var secondno = Number(document.getElementById("secondno").value);

	var result;
	console.log(firstno  + secondno);
		add2no(firstno,secondno);
		subtract2no(firstno,secondno);
		multiply2no(firstno,secondno);
//add two numbers functon 
function add2no(firstno,secondno)
{
	
	result = firstno + secondno;
	
	document.getElementById("outputresult").innerHTML = "<p> add 2 number " + result +"</p>";
	console.log("add 2 number " + result);
}

function subtract2no(firstno,secondno)
{
 
	result = firstno - secondno;
	document.getElementById("outputresult").innerHTML += "<p> subtract 2 number " + result +"</p>";
	console.log(" subtract 2 number " + result);

}
function multiply2no()
{
	result = firstno * secondno;
	document.getElementById("outputresult").innerHTML += "<p> multiply 2 number " + result + "</p>";
	console.log(" multiply 2 number " + result);
}
}