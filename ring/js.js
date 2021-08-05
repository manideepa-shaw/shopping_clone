// total=document.getElementsByClassName("container").length;
// function show()
// {
//      if(document.getElementsByTagName('nav')[0].style.display==="none")
//     {
//         document.getElementsByTagName('nav')[0].style.transition="0.5s";
//         document.getElementsByTagName('nav')[0].style.display="flex";
//         document.getElementsByTagName('nav')[0].style.zindex="5";
//         document.getElementsByTagName('nav')[0].style.flexFlow="column";
//         document.getElementsByTagName('nav')[0].style.width="20vw";
//         document.getElementsByTagName('nav')[0].style.left="0";
//         document.getElementsByClassName('container')[0].style.visibility="hidden";
//     }
//     else
//     {
//         document.getElementsByTagName('nav')[0].style.display="none";
//         document.getElementsByClassName('container')[0].style.visibility="visible";
//         document.getElementsByTagName('nav')[0].style.display="none";
//     }
// }
function al()
{
    glen=document.getElementsByClassName("gold").length;
    rglen=document.getElementsByClassName("rosegold").length;
    for(i=0;i<glen;i++)
    {   
        document.getElementsByClassName("gold")[i].style.display="flex";
    }
    for(i=0;i<rglen;i++)
    {   
        document.getElementsByClassName("rosegold")[i].style.display="flex";
    }
    slen=document.getElementsByClassName("silver").length;
    for(i=0;i<slen;i++)
    {   
        document.getElementsByClassName("silver")[i].style.display="flex";
    }
    rlen=document.getElementsByClassName("rings").length;
    for(i=0;i<rlen;i++)
    {   
        document.getElementsByClassName("rings")[i].style.display="flex";
    }
    rslen=document.getElementsByClassName("ringset").length
    for(i=0;i<rslen;i++)
    {   
        document.getElementsByClassName("ringset")[i].style.display="flex";
    }
}
function r()
{
    //todisplay everything
    glen=document.getElementsByClassName("gold").length;
    rglen=document.getElementsByClassName("rosegold").length;
    for(i=0;i<glen;i++)
    {   
        document.getElementsByClassName("gold")[i].style.display="flex";
    }
    for(i=0;i<rglen;i++)
    {   
        document.getElementsByClassName("rosegold")[i].style.display="flex";
    }
    slen=document.getElementsByClassName("silver").length;
    for(i=0;i<slen;i++)
    {   
        document.getElementsByClassName("silver")[i].style.display="flex";
    }
    //todisplay everything
    rslen=document.getElementsByClassName("ringset").length
    for(i=0;i<rslen;i++)
    {   
        document.getElementsByClassName("ringset")[i].style.display="none";
    }
}
function rs()
{
    //todisplay everything
    glen=document.getElementsByClassName("gold").length;
    rglen=document.getElementsByClassName("rosegold").length;
    for(i=0;i<glen;i++)
    {   
        document.getElementsByClassName("gold")[i].style.display="flex";
    }
    for(i=0;i<rglen;i++)
    {   
        document.getElementsByClassName("rosegold")[i].style.display="flex";
    }
    slen=document.getElementsByClassName("silver").length;
    for(i=0;i<slen;i++)
    {   
        document.getElementsByClassName("silver")[i].style.display="flex";
    }
    //todisplay everything
   rlen=document.getElementsByClassName("rings").length;
    for(i=0;i<rlen;i++)
    {   
        document.getElementsByClassName("rings")[i].style.display="none";
    }
}
function s()
{
    //todisplay everything
    rlen=document.getElementsByClassName("rings").length;
    for(i=0;i<rlen;i++)
    {   
        document.getElementsByClassName("rings")[i].style.display="flex";
    }
    rslen=document.getElementsByClassName("ringset").length
    for(i=0;i<rslen;i++)
    {   
        document.getElementsByClassName("ringset")[i].style.display="flex";
    }
    //todisplay everything
    al();
    glen=document.getElementsByClassName("gold").length;
    rglen=document.getElementsByClassName("rosegold").length;
    for(i=0;i<glen;i++)
    {   
        document.getElementsByClassName("gold")[i].style.display="none";
    }
    for(i=0;i<rglen;i++)
    {   
        document.getElementsByClassName("rosegold")[i].style.display="none";
    }
}
function g()
{
        //todisplay everything
        rlen=document.getElementsByClassName("rings").length;
        for(i=0;i<rlen;i++)
        {   
            document.getElementsByClassName("rings")[i].style.display="flex";
        }
        rslen=document.getElementsByClassName("ringset").length
        for(i=0;i<rslen;i++)
        {   
            document.getElementsByClassName("ringset")[i].style.display="flex";
        }
        //todisplay everything
        al();
   rglen=document.getElementsByClassName("rosegold").length;  
    for(i=0;i<rglen;i++)
    {   
        document.getElementsByClassName("rosegold")[i].style.display="none";
    }
    slen=document.getElementsByClassName("silver").length;
    for(i=0;i<slen;i++)
    {   
        document.getElementsByClassName("silver")[i].style.display="none";
    }
}
function rg()
{
    //todisplay everything
    rlen=document.getElementsByClassName("rings").length;
    for(i=0;i<rlen;i++)
    {   
        document.getElementsByClassName("rings")[i].style.display="flex";
    }
    rslen=document.getElementsByClassName("ringset").length
    for(i=0;i<rslen;i++)
    {   
        document.getElementsByClassName("ringset")[i].style.display="flex";
    }
    //todisplay everything
    al();
    slen=document.getElementsByClassName("silver").length;
    for(i=0;i<slen;i++)
    {   
        document.getElementsByClassName("silver")[i].style.display="none";
    }
    
    rglen=document.getElementsByClassName("rosegold").length;  
    for(i=0;i<rglen;i++)
    {   
        document.getElementsByClassName("rosegold")[i].style.display="flex";
    }
    glen=document.getElementsByClassName("gold").length;
    for(i=0;i<glen;i++)
    {   
        document.getElementsByClassName("gold")[i].style.display="none";
    }
}