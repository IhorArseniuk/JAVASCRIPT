let sesionArray=JSON.parse(localStorage.getItem('sessionsList'))
 for(let item of sesionArray) {
    let div=document.createElement('div');
    div.innerText=item;
    document.body.appendChild(div);}
