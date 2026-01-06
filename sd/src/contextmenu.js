let lastRc;
if(isMobile()){document.onclick=rightClick;}else{document.oncontextmenu = rightClick;}
document.addEventListener('click',(e)=>{
    if(!e.target.id=='contextMenu'){hideMenu();}
    switch (e.target.id){
        case "openChannel":
            open(`https://twitch.tv/${lastRc}`);
            break;
    
        case "openStream":
            open(`https://le-herisson.github.io/tests/ITW.htm?channel=${lastRc}&mute=0`);
            break;
    
        case "openChat":
            open(`https://nightdev.com/hosted/obschat/?theme=bttv_dark&channel=${lastRc}&fade=false&bot_activity=true`);
            break;
    
        default:
            break;
    }
    if(!isMobile()){hideMenu();}
});

function hideMenu(){document.getElementById("contextMenu").style.display="none";}
function rightClick(e){
    if(document.getElementById("contextMenu").style.display=="block"){hideMenu();}
    else{
        if(e.target.className=="pseudo"){
            e.preventDefault();
            let menu=document.getElementById("contextMenu");
            lastRc=e.target.innerText;
            menu.style.display='block';
            menu.style.left=e.pageX+"px";
            menu.style.top=e.pageY+"px";
        }
    }
}
