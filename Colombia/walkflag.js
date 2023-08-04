var topPosition = 200;
var leftPosition = -200;

var flag=0;


function walk()
{
    
    
    var walk = document.getElementById("flag");
    if (window.innerWidth> 700)
    {
        topPosition=walk.offsetTop;
        leftPosition=walk.offsetLeft;
    }
    else leftPosition=walk.offsetLeft;
    setInterval('leftmovdown()', 200);
    

}
function leftmovdown()

{
    if (window.innerWidth> 700)
    {
        if(leftPosition<1200)
        {
            if(topPosition<480 && flag===0)
            {
                topPosition=topPosition+20;
                leftPosition=leftPosition+20;
                document.getElementById("flag").style.top=topPosition+"px";
                document.getElementById("flag").style.left=leftPosition+"px";

            }
            else flag=1;
            if(topPosition>80 && flag===1)
            {
                topPosition=topPosition-20;
                leftPosition=leftPosition+20;
                document.getElementById("flag").style.top=topPosition+"px";
                document.getElementById("flag").style.left=leftPosition+"px";

            }
            else flag=0;
        }
        else document.getElementById("flag").style.display="none";
    }
    else
    {
        if(leftPosition<500)
        {

                leftPosition=leftPosition+30;

                document.getElementById("flag").style.left=leftPosition+"px";

            
        }
        else document.getElementById("flag").style.display="none";
        
        
    }  
}

