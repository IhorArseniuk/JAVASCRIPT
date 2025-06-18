
window.onbeforeunload=()=>{
    let div=document.createElement('div');
    div.innerText=localStorage.getItem('sesionsList');
    document.body.appendChild(div)};
