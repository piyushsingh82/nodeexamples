 $(document).ready(function(){
// document.bgColor = Math.random()*999999 ;
// document.bgColor  ="#fff";
console.log(document.bgColor);
   if(typeof(Storage)!==  "undefined")
{
   console.log("use web storage and local storagse");
   console.log(localStorage.getItem("lastname"));
}
else{
   console.log("use web storage and local storage not allowed");
}

if (localStorage.clickcount) {
   localStorage.clickcount = Number(localStorage.clickcount) + 1;
 } else {
   localStorage.clickcount = 1;
 }
 
 console.log(localStorage.clickcount + " time(s).");

 if (sessionStorage.clickcount) {
   sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
 } else {
   sessionStorage.clickcount = 1;
 }
 console.log(sessionStorage.clickcount + " time(s) in this session.");
 console.log(localStorage.fathername);

 
 
$(".readmyapp").click(function(){
   
   // fetch('https://jsonplaceholder.typicode.com/users')
   //   .then(function(response) { return response.json(); })
   //   .then(function(data) {for (var i = 0; i < 10; i++) {var player_name=  data[i].name;$('#player'+i ).val(player_name);
   //    }});
   
});

    var firstno ,secondno,result1,result2;
    $("#secondno").on("keyup",function(){
        firstno = Number($("#firstno").val());
        secondno = Number($("#secondno").val());
        add2no(firstno,secondno);
        subtract2no(firstno,secondno);
        multiply2no(firstno,secondno);
        var dropdownvalue =  $("select").val();
        $("#outputresult").html(result1);
     });
     
     
     $('.tableDropdown').on("change",function(){
        var matrixno = $('.tableDropdown').val();
        var createNewTable ="";
        console.log("value " + matrixno);
        var innertablerow = "";
        var innertablecol = "";
        for (x=1;x<=matrixno;x++)
        {
             
             for(y=1;y<=matrixno;y++)
             {
            innertablecol += "<td>" + matrixno + "</td> ";
             }
             
            innertablerow += "<tr>" + innertablecol + "</tr>";
        }
        createNewTable  = "<table><tbody>" + innertablerow + "</tbody></table>";
        //console.log(createNewTable);
        createNewTable =  $.parseHTML(createNewTable);
        $("#createTable").append(createNewTable);
     });
     $('#submitBtn').on("click",function(){
      result1 = "";
      
         for (a = 1;a<=10;a++)
         {
         if($("#player"+a).val()=="" || $("#player"+a).val()==" ")
               {
                  result1 += "<p> player"+a +" name Undefined </p> "
               }
         else {
               result1 += "<p> player"+a +" name " + $("#player"+a).val() +"</p> "
               
            }
           
            $('#createTable').html(result1);
         }
        
     }
     );
    function add2no(fno,sno)
    {
     result1 = "</p> Addition of 2 nos :  " +( fno  + sno) +"</p>"; 
    
    }
    function subtract2no(fno,sno)
    {
        result1 += "<p> Subtraction of 2 nos : " + (fno - sno) + "</p>"
        
    }
     function multiply2no(fno,sno)
     {
    result1 +=  "<p> Multipication of 2 nos :" + (fno * sno) + "</p>"
     }    
    
    
 });
 