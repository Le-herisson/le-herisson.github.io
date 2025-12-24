document.addEventListener("contextmenu", (e) => { e.preventDefault(); });
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('go-button').addEventListener("click",()=>{
        location.href=`https://le-herisson.github.io/${document.getElementById('url-field').value}`;
    });
});