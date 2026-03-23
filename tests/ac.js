document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("btn_close").addEventListener("click",()=>{
        setTimeout(()=>{
            window.close();
        },1000);
    });
});