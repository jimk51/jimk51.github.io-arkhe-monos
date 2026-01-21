function toast(msg="Copié ✅"){
  const el=document.getElementById("toast");
  el.textContent=msg;
  el.classList.add("show");
  setTimeout(()=>el.classList.remove("show"), 1100);
}

async function copyText(text){
  try{
    await navigator.clipboard.writeText(text);
    toast();
  }catch{
    const ta=document.createElement("textarea");
    ta.value=text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    toast();
  }
}

const contract = document.getElementById("contract")?.textContent?.trim();
const presale  = document.getElementById("presale")?.textContent?.trim();

document.getElementById("copyContract")?.addEventListener("click", ()=>copyText(contract));
document.getElementById("copyPresale")?.addEventListener("click", ()=>copyText(presale));
