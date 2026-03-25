document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("btn_go").addEventListener("click",()=>{
        setTimeout(()=>{
            location.href=document.getElementById('input-text_uri').value;
        },500);
    });
});