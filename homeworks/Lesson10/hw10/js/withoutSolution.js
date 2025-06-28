// task 10-2 #j693ca8 //
{
    let f1=document.getElementById('age-form');
    f1.onsubmit=function(ev){
        ev.preventDefault();
    }
    let ageBtn=document.getElementById('age-butn')
    ageBtn.addEventListener('click',function(){
        const ageInput=document.getElementById('age-input');
        if(ageInput.value!==''){
            if(ageInput.value<18){
                alert('You to young')
            }}
    })
}
// task 10-9 #bq1zkx7WP //
{
    // another variant //
    /* let hrivna=+localStorage.getItem('hrivna')
      function fo(){  hrivna+=10;
         localStorage.setItem('hrivna',hrivna)}
      let div=document.getElementById('hrochi');
      div.innerText=100+hrivna+'грн'
      setTimeout(fo,10000)*/

    let baseCount=100
    let timer= Date.now()

    let lastReload= +localStorage.getItem('lastReload')||0;
    let hrochi=+localStorage.getItem('hrochi')||0;
    if(lastReload===0){
        localStorage.setItem('lastReload',timer)
    }
    else if(timer-lastReload>=10000){
        hrochi+=10;
        localStorage.setItem('hrochi',hrochi);
        localStorage.setItem('lastReload',timer);
    }

    let baseValue= document.getElementById('hrochi').innerText=baseCount+hrochi+'грн';
}

// task 10-10 #NKB0tgWIK1G //
{
    function stringCreator (Length,customCharacters){
        const characters = customCharacters || 'QWERTYUIOPASDFGHJKLZXCVBNM';
        const charactersLength = characters.length;
        let result='';
        for(let i =0;i<Length;i++){
            const randomNumber= Math.floor(Math.random()*charactersLength);
            result+= characters.charAt(randomNumber)
        }
        return result;
    }
    function users  (name,surname,count){
        const counts=count
        let result=[]
        for(let i =0;i<count;i++) {
            const user={}
            user.name = stringCreator(name);
            user.surname = stringCreator(surname);
            user.id=Math.floor(Math.random()*100+1);
            result.push(user)
        }return result ;}

    let usersArray=users(6,8,100)

    let divStorage=document.getElementById('storageDiv')

    let butnPrev=document.getElementById('prev');
    let butnNext=document.getElementById('next');

    let usersPerPage=10;
    let curentPage=0;

    function showPage(page){
        divStorage.innerHTML = '';
        const startIndex= page * usersPerPage;
        const endIndex= startIndex + usersPerPage;
        const usersOnPage= usersArray.slice(startIndex,endIndex)

        usersOnPage.forEach(user=>{
            let div=document.createElement('div')
            div.className='user'
            div.innerHTML=`<h2>${user.name}</h2><h3>${user.surname}</h3><p>${user.id}</p>`;
            divStorage.appendChild(div);
        })
        butnPrev.disabled = page === 0;
        butnNext.disabled = endIndex >= usersArray.length;
    }
    document.addEventListener('DOMContentLoaded',()=>{showPage(curentPage)})


    butnNext.addEventListener('click',()=>{
        curentPage++;
        showPage(curentPage);});

    butnPrev.addEventListener('click',()=>{
        curentPage--;
        showPage(curentPage);
    })
    console.log(usersArray)
}
