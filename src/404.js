document.addEventListener("contextmenu", (e) => { e.preventDefault(); });
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('go-button').addEventListener("click",()=>{
        let url=`https://le-herisson.github.io/${document.getElementById('url-field').value}`;
        if(confirm(`Go to: ${url} ?`))
        location.href=url;
    });
});