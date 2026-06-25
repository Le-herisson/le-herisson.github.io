async function fetchApi() {
    return await fetch("/Api/conf.json", {
                        method: "GET"
                    })
                    .then(async(r)=>{
                        return await r.text();
                    })
                    .catch((e)=>{
                        document.getElementById("box").innerText = "The parameter is invalid or missing: " + e;
                    }); 
}

document.addEventListener("DOMContentLoaded", async()=>{
    const params = new URLSearchParams(window.location.search);
    const o = params.get('o');
    if( o !== "" && o.split("_")[1].length == 8 ) {
        const _res = await fetchApi().then((j)=>{return JSON.parse(j);});
        if ( _res.availablesSrc[o.split("_")[0]].contains(o.split("_")[1]) ) {
            setTimeout(()=>{
                window.location.href = _res.sources[o.split("_")[1]];
            },250);
        }
    }else{
        document.getElementById("box").innerText="The parameter is invalid or missing";
    }
});
