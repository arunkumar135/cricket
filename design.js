var c = "";
var d = "";
var count = 0;
var total2 = 0;
var total = 0;
function score(){
    var a = Math.ceil((Math.random()*5)+1);
    var b = "W";
    
   if(count<6)
   { 
    if(a == 5)
    {
        c=c+" "+b;
        document.getElementById("det").textContent = c;
        total = total + 0;
        document.getElementById("tot").textContent = total;
        count++;
    }
    else{
        c=c+" "+a;
        document.getElementById("det").textContent = c;
        total = total + a;
        document.getElementById("tot").textContent = total;
        count++;
    }
}
    else if(count<12)
  {
    if(a == 5)
    {
        d=d+" "+b;
        document.getElementById("det2").textContent = d;
        total2 = total2 + 0;
        document.getElementById("tot2").textContent = total2;
        count++;
    }
    else{
        d=d+" "+a;
        document.getElementById("det2").textContent = d;
        total2 = total2 + a;
        document.getElementById("tot2").textContent = total2;
        count++;
        if(total < total2)
        {
            document.getElementById("wins").textContent = "PBKS won the match";
            document.getElementById("wins").style.backgroundColor =  "rgb(253, 48, 48)";
            count=12;
            
        }
    }  
}
   else
   {
     if(total > total2)
    {
        document.getElementById("wins").textContent = "SRH won the match";
        document.getElementById("wins").style.backgroundColor = "orangered";
    }
    else if (total == total2){
        document.getElementById("wins").textContent = "Match Tie";
    }
   }
}