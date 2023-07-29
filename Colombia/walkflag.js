var topPosition = 200;
var leftPosition = -200;

var flag=0;


function walk()
{
    var walk = document.getElementById("flag");
    topPosition=walk.offsetTop;
    leftPosition=walk.offsetLeft;
    setInterval('leftmovdown()', 200);

}
function leftmovdown()
{

    if(leftPosition<1200)
    {
        if(topPosition<480 && flag===0)
        {
            topPosition=topPosition+20;
            leftPosition=leftPosition+20;
            document.getElementById("flag").style.top=topPosition+"px";
            document.getElementById("flag").style.left=leftPosition+"px";
            console.log("top: "+topPosition);
            console.log("left: "+leftPosition);
        }
        else flag=1;
        if(topPosition>80 && flag===1)
        {
            topPosition=topPosition-20;
            leftPosition=leftPosition+20;
            document.getElementById("flag").style.top=topPosition+"px";
            document.getElementById("flag").style.left=leftPosition+"px";
            console.log("top: "+topPosition);
            console.log("left: "+leftPosition);
        }
        else flag=0;
    }
    else document.getElementById("flag").style.display="none";
    
     


}
