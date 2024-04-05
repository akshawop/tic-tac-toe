var f=1, c=-1;
var arr=[[],[],[]];
function f1()
{
    if(c>-1)
    {
        if(f!=2)
        {
            document.getElementById("com").style.color="red";
            document.getElementById("com").innerHTML="<h3>Red's Turn</h3>";
            f=2;
        }
        else
        {
            document.getElementById("com").style.color="blue";
            document.getElementById("com").innerHTML="<h3>Blue's Turn</h3>";
            f=1;
        }
    }
    else 
    {
        document.getElementById("com").style.color="red";
        document.getElementById("com").innerHTML="<h3>Red's Turn</h3>";
        f=2;
    }
    c++;
}
function f2(x)
{
    if(f!=2)
    {
        document.getElementById(x).style.color="red";
        document.getElementById(x).setAttribute('disabled','');
        document.getElementById(x).value="X";
        cross();
    }
    else
    {
        document.getElementById(x).style.color="blue";
        document.getElementById(x).setAttribute('disabled','');
        document.getElementById(x).value="O";
        circle();
    }
}
function play()
{
    inp=document.getElementsByTagName("input");
    for(i=0;i<=8;i++)
    inp[i].removeAttribute('disabled','');
    start();
}
function reset()
{
    inp=document.getElementsByTagName("input");
    for(i=0;i<=8;i++)
    {
        inp[i].removeAttribute('disabled','');
        inp[i].value=" ";
    }
    f=1;
    c=-1;
    arr=[[],[],[]];
    start();
}
function cross()
{
    audio=new Audio("cross click.mp3");
    audio.play();
}
function circle()
{
    audio=new Audio("circle click.mp3");
    audio.play();
}
function start()
{
    audio=new Audio("beep click.mp3");
    audio.play();
    f1();
}
function win()
{
    audio=new Audio("win sound.mp3");
    audio.play();
}
function draw()
{
    audio=new Audio("draw sound.mp3");
    audio.play();
}
function cal(p)
{
    x=parseInt(p.substring(0,1));
    y=parseInt(p.substring(1));
    if(f!=2)
        arr[x][y]="x";
    else
        arr[x][y]="o";
    inp=document.getElementsByTagName("input");
    if((arr[0][0]=="x" && arr[0][1]=="x" && arr[0][2]=="x") || (arr[0][0]=="o" && arr[0][1]=="o" && arr[0][2]=="o"))
    {
        for(i=0;i<=8;i++)
        inp[i].setAttribute('disabled','');
        if(arr[0][0]=="x")
        {
            document.getElementById("com").style.color="red";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Red Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        else
        {
            document.getElementById("com").style.color="blue";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Blue Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        win();
    }
    else if((arr[1][0]=="x" && arr[1][1]=="x" && arr[1][2]=="x") || (arr[1][0]=="o" && arr[1][1]=="o" && arr[1][2]=="o"))
    {
        for(i=0;i<=8;i++)
        inp[i].setAttribute('disabled','');
        if(arr[1][0]=="x")
        {
            document.getElementById("com").style.color="red";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Red Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        else
        {
            document.getElementById("com").style.color="blue";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Blue Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        win();
    }
    else if((arr[2][0]=="x" && arr[2][1]=="x" && arr[2][2]=="x") || (arr[2][0]=="o" && arr[2][1]=="o" && arr[2][2]=="o"))
    {
        for(i=0;i<=8;i++)
        inp[i].setAttribute('disabled','');
        if(arr[2][0]=="x")
        {
            document.getElementById("com").style.color="red";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Red Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        else
        {
            document.getElementById("com").style.color="blue";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Blue Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        win();
    }
    else if((arr[0][0]=="x" && arr[1][0]=="x" && arr[2][0]=="x") || (arr[0][0]=="o" && arr[1][0]=="o" && arr[2][0]=="o"))
    {
        for(i=0;i<=8;i++)
        inp[i].setAttribute('disabled','');
        if(arr[0][0]=="x")
        {
            document.getElementById("com").style.color="red";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Red Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        else
        {
            document.getElementById("com").style.color="blue";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Blue Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        win();
    }
    else if((arr[0][1]=="x" && arr[1][1]=="x" && arr[2][1]=="x") || (arr[0][1]=="o" && arr[1][1]=="o" && arr[2][1]=="o"))
    {
        for(i=0;i<=8;i++)
        inp[i].setAttribute('disabled','');
        if(arr[0][1]=="x")
        {
            document.getElementById("com").style.color="red";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Red Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        else
        {
            document.getElementById("com").style.color="blue";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Blue Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        win();
    }
    else if((arr[0][2]=="x" && arr[1][2]=="x" && arr[2][2]=="x") || (arr[0][2]=="o" && arr[1][2]=="o" && arr[2][2]=="o"))
    {
        for(i=0;i<=8;i++)
        inp[i].setAttribute('disabled','');
        if(arr[0][2]=="x")
        {
            document.getElementById("com").style.color="red";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Red Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        else
        {
            document.getElementById("com").style.color="blue";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Blue Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        win();
    }
    else if((arr[0][0]=="x" && arr[1][1]=="x" && arr[2][2]=="x") || (arr[0][0]=="o" && arr[1][1]=="o" && arr[2][2]=="o"))
    {
        for(i=0;i<=8;i++)
        inp[i].setAttribute('disabled','');
        if(arr[0][0]=="x")
        {
            document.getElementById("com").style.color="red";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Red Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        else
        {
            document.getElementById("com").style.color="blue";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Blue Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        win();
    }
    else if((arr[0][2]=="x" && arr[1][1]=="x" && arr[2][0]=="x") || (arr[0][2]=="o" && arr[1][1]=="o" && arr[2][0]=="o"))
    {
        for(i=0;i<=8;i++)
        inp[i].setAttribute('disabled','');
        document.getElementsByTagName("input").disabled=true;
        if(arr[0][2]=="x")
        {
            document.getElementById("com").style.color="red";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Red Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        else
        {
            document.getElementById("com").style.color="blue";
            document.getElementById("com").style.fontSize="60px";
            document.getElementById("com").innerHTML="Blue Wins!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        }
        win();
    }
    else if(c==9)
    {
        document.getElementById("com").style.color="white";
        document.getElementById("com").style.fontSize="60px";
        document.getElementById("com").innerHTML="Its a Draw!<br><input class=\"res\" type=\"button\" value=\"Play Again\" onclick=\"reset();\">";
        draw();
    }
}
