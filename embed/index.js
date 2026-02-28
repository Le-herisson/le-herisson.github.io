var currentEnabled=null;
function enableElement(elem){
    if(currentEnabled){currentEnabled.disabled=true;}
    elem.disabled=false;
    currentEnabled=elem;
}

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('Go_button').addEventListener('click',async function(){
        sLinkIo=document.getElementById("sLinkI");
        bLinkIo=document.getElementById("bLinkI");
        vIdIo=document.getElementById("vIdI");

        if (sLinkIo.disabled&&bLinkIo.disabled&&vIdIo.disabled) {
            alert("Error :\nPlease check an option\nand fill all the requireds fields!");
        } else {
            if(!sLinkIo.disabled){console.debug(`calulated id : ${get_video_id(sLinkIo.value,"short")}`);sLinkIo.value=get_video_id(sLinkIo.value,"short");}
            if(!bLinkIo.disabled){console.debug(`calulated id : ${get_video_id(bLinkIo.value,"long")}`);bLinkIo.value=get_video_id(bLinkIo.value,"long");}
            if(!vIdIo.disabled){console.debug(`calulated id : ${get_video_id(vIdIo.value,"id")}`);vIdIo.value=get_video_id(vIdIo.value,"id");}

            document.getElementById("VidForm").action="youtube";
            document.getElementById("VidForm").submit();
        }
    });
document.getElementById('Rst_button').addEventListener('click',function(){if(confirm('Reset form ?')){document.getElementById("VidForm").reset();}});
document.getElementById('sLinkRb').addEventListener('change',function(){if(this.checked){document.getElementById('sLinkI').focus();}});
document.getElementById('bLinkRb').addEventListener('change',function(){if(this.checked){document.getElementById('bLinkI').focus();}});
document.getElementById('vIdRb').addEventListener('change',function(){if(this.checked){document.getElementById('vIdI').focus();}});
});