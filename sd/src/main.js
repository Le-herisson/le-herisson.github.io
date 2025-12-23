const isMobile=/*navigator.userAgentData.mobile*/false;

function load() {
    //buttons
    BtnRefresh=document.getElementById('BtnRefresh');
    BtnAdd=document.getElementById('BtnAdd');
    BtnRemove=document.getElementById('BtnRemove');

    //divList
    DivList=document.getElementById('DivList');

    //array
    let sl=[];

    //vars
    //const proxy="https://corsproxy.io/"; //scoop error

    //query search params
    const qsp=new URLSearchParams(window.location.search);
    try {sl=qsp.getAll('st');return [...sl];}catch{console.error('e');return [];}
}
async function get(ep) {
    return await fetch(`https://decapi.me/twitch/${ep}`)
            .then((res)=>{res.text();}).then((res)=>{return res;})
            .catch((e)=>{console.error(`Error: ${e}`)});
}

async function process(sl) {
    const re=new RegExp(/(?:(\d{1,2})\sdays?(?:, |))?(?:(\d{1,2})\shours?(?:, |))?(?:(\d{1,2})\sminutes?(?:, |))?(?:(\d{1,2})\sseconds?)?/);
    for (let i=0;i<sl.length;i++) {
        //creating elements and fetch uptime
        let DivIt=document.createElement('div');
        let it=document.createElement('a');
        let u=await get(`uptime/${sl[i]}`);

        DivIt.classList.add('DivIt');
        
        console.debug(`re.exec(u): ${re.exec(u)}`);

        if(re.exec(u)==',,,,'){
            it.textContent=`${sl[i]} : ${u===sl[i]+' is offline'?'❌':'🚫'}`;
        } else {
            let itS=document.createElement('a');
            let itG=document.createElement('a');
            let g=await get(`game/${sl[i]}`);
            itS.textContent=sl[i];
            itS.classList='pseudo';
            itS.href=isMobile?'javascript:void(0);':`https://le-herisson.github.io/tests/ITW.htm?channel=${sl[i]}&mute=0`;
            itS.style='display: inline';
            if(!isMobile){itS.target="_blank";}
            itS.rel="noopener noreferrer";
            itS.title=await get(`title/${sl[i]}`);
            it.textContent=`: ✅ (${u}) playing: `;
            it.style='display: inline';
            itG.textContent=g;
            itG.href=`https://www.twitch.tv/directory/category/${g.toLowerCase().replaceAll("'",'').replaceAll(' ','-')}`;
            itG.style='display: inline'
            itG.target="_blank";
            itG.rel="noopener noreferrer";
            DivIt.appendChild(itS);
            setTimeout(()=>{DivIt.appendChild(itG);},4);
        }
        DivIt.appendChild(it);
        console.debug(`${sl[i]}: ${u}`);
        setTimeout(()=>{DivList.appendChild(DivIt);},4);
    }
}

document.addEventListener('DOMContentLoaded',async ()=>{
    BtnRefresh.addEventListener('click',async ()=>{
        document.querySelectorAll('.DivIt').forEach((i)=>{i.remove();}); //remove all previous elements in class 'DivIt'
        await process(Sl);
    });
    BtnRefresh.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
        alert("contextmenu");
    });
    BtnAdd.addEventListener('click',()=>{
        const p=prompt("Enter a new item: ","pseudo");
        if(p===null){alert(`Cannot add '${p}'`);throw Error("p=null",{cause:"'p' should not be null"});} //throw an error if the user choose cancel
        Sl.push(p);
        let DivIt=document.createElement('div');
        let t=document.createElement('a');

        DivIt.classList.add('DivIt');
        t.textContent=`${p}: ➖`;
        DivIt.appendChild(t);
        DivList.appendChild(DivIt);
    });
    BtnRemove.addEventListener('click',()=>{
        const p=prompt("Enter the item to delete: ","pseudo");
        if(p===null||Sl.indexOf(p)===-1){alert(`Cannot remove '${p}'`);throw Error("p=null",{cause:"'p' should not be null"});} //throw an error if the user choose cancel or non an item that dosent exist
        Sl.splice(Sl.indexOf(p),1);
        BtnRefresh.click(); //refresh
    });
    
    let Sl=load();
    await process(Sl);
});
