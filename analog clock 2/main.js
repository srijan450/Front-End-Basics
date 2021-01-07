var s=document.getElementById("sec");
var m=document.getElementById("min");
var h=document.getElementById("hr");
function setting(h)
{
    if(h%12!=0)
        return h%12;
    else
        return 12;
}
function clock()
{
    var d=new Date;
    var H=setting(d.getHours());
    var M=d.getMinutes();
    var Ha=(H*30+(.5*M));
    var S=d.getSeconds();
    var MILLI=d.getMilliseconds();
    var Sa=S*6+(.006*MILLI);
    s.setAttribute("style","transform:rotateZ("+Sa+"deg)");
    m.setAttribute("style","transform:rotateZ("+6*M+"deg)");
    h.setAttribute("style","transform:rotateZ("+Ha+"deg)");
}

setInterval(clock,1);