
function clock24hours()
{
    var date=new Date()
var hh=date.getHours()
var mm=date.getMinutes()
var ss=date.getSeconds()
var dd=date.getDate()
var mo=date.getMonth()
var yy=date.getUTCFullYear()
var day=date.getDay()
if(mo==0)
{
    mo="jan"
}
else if(mo==1)
{
    mo="feb"
}
else if(mo==2)
{
    mo="mar"
}
else if(mo==3)
{
    mo="apr"
}
else if(mo==4)
{
    mo="may"
}
else if(mo==5)
{
    mo="jun"
}
else if(mo==6)
{
    mo="jul"
}
else if(mo==7)
{
    mo="aug"
}
else if(mo==8)
{
    mo="sep"
}
else if(mo==9)
{
    mo="oct"
}
else if(mo==10)
{
    mo="nov"
}
else(mo==11)
{
    mo="dec"
}
switch(day)
{
    case 0:day="sunday";
    break;
    case 1:day="monday";
    break;
    case 2:day="tuesday";
    break;
    case 3:day="wednesday";
    break;
    case 4:day="thursday";
    break;
    case 5:day="friday";
    break;
    case 06:day="saturday";
    break;
}
   document.getElementById("Time1").innerHTML=`${hh}:${mm}`
   document.getElementById("Day1").innerHTML=`${day}`
   document.getElementById("Date1").innerHTML=`${dd}/${mo}/${yy}`
   document.getElementById("Sec1").innerHTML=`${ss}`
   var setTime=setTimeout(clock24hours,1000)
}
//clock24hours()
function clock12hours()
{
    var date=new Date()
   var hh=date.getHours()
   var mm=date.getMinutes()
   var ss=date.getSeconds()
   var dd=date.getDate()
   var mo=date.getMonth()
   var yy=date.getUTCFullYear()
   var day=date.getDay()
   if(mo==0)
   {
       mo="jan"
   }
   else if(mo==1)
   {
       mo="feb"
   }
   else if(mo==2)
   {
       mo="mar"
   }
   else if(mo==3)
   {
       mo="apr"
   }
   else if(mo==4)
   {
       mo="may"
   }
   else if(mo==5)
   {
       mo="jun"
   }
   else if(mo==6)
   {
       mo="jul"
   }
   else if(mo==7)
   {
       mo="aug"
   }
   else if(mo==8)
   {
       mo="sep"
   }
   else if(mo==9)
   {
       mo="oct"
   }
   else if(mo==10)
   {
       mo="nov"
   }
   else(mo==11)
   {
       mo="dec"
   }
   switch(day)
   {
       case 0:day="sunday";
       break;
       case 1:day="monday";
       break;
       case 2:day="tuesday";
       break;
       case 3:day="wednesday";
       break;
       case 4:day="thursday";
       break;
       case 5:day="friday";
       break;
       case 06:day="saturday";
       break;
   }
   var am_pm="AM"
   if(hh>=12)
   {
    am_pm="PM"
    if(hh>=13)
    {
        hh-=12;
    }
    if(hh==0)
    {
        hh=12;
    }
   }
      document.getElementById("Time2").innerHTML=`${hh}:${mm} ${am_pm}`
      document.getElementById("Day2").innerHTML=`${day}`
      document.getElementById("Date2").innerHTML=`${dd}/${mo}/${yy}`
      document.getElementById("Sec2").innerHTML=`${ss}`
      var setTime=setTimeout(clock12hours,1000)
}
//clock12hours()
function changeformat(status)
{
    if(status=='12hrs format')
    {
        document.getElementById("but").value="24hrs format"
        document.getElementById("container12").style.display="flex"
        document.getElementById("container24").style.display="none"
        clock12hours()
    }
    else{
        document.getElementById("but").value="12hrs format"
        document.getElementById("container12").style.display="none"
        document.getElementById("container24").style.display="flex"
        clock24hours()
    }
}