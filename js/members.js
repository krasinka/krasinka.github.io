$(document).ready(function() {
    $(".member").hide();  
    $(".link").click(function(){
        $(".member").hide();
        $(".link").css("font-weight","Normal");
        $(this).css("font-weight","Bold");
        number = $(this).attr("id").substr(6);
        $("#div" + number).toggle(); 
        
        /*parsedNum = parseInt(number);
        parsedNum++;
        
        if(parsedNum == 18){
          parsedNum = 1;
        }
        
        stringNum = parsedNum.toString();
        finalDivId = stringNum;
        if(stringNum.length == 1)
        {
           finalDivId = "0" + stringNum;
        }                                                                             
        setTimeout( function(){$("#member"+finalDivId).trigger("click");} , 6000);  */           
    });
    $("#member01").trigger("click");  
});