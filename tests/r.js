document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("btn_open").addEventListener("click",()=>{
        setTimeout(()=>{
            window.open(document.getElementById('input-text_uri').value);
        },500);
    });
});