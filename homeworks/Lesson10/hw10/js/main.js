// task 10-1 #sH8c4er //
{
let div=document.getElementById('text');
const button=document.querySelector('button')
    //document.getElementByTagName('button')[0]
    button.onclick=function(){
    div.setAttribute('id','text');
    div.style.backgroundColor='rgb(123,45,45)';
    div.style.color='rgb(123,67,89,0.00)';
    console.log('click');
}
}
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
// task 10-3 #ymAmN2xJ //
{
let formUser=document.forms.userForm;
formUser.addEventListener('submit',(event)=>{
    event.preventDefault();
})

    formUser.addEventListener('submit',function(){
    const div=document.createElement('div');
    div.className='user-info';

   /* const nameH2=document.createElement('h2');
    nameH2.innerText=formUser.name.value;

    const surnameH2=document.createElement('h2');
    surnameH2.innerText=formUser.surname.value;

    const ageP=document.createElement('p');
    ageP.innerText=formUser.age.value;

    div.append(nameH2,surnameH2,ageP);*/

        const userName=formUser.name.value;
        const userSurname=formUser.surname.value;
        const userAge=formUser.age.value;
        let user={userName,userSurname,userAge};
        console.log(user);
        div.innerText=`${userName} ${userSurname} ${userAge}`;
    document.body.appendChild(div);
})
}
// task 10-4 #2VaLt4vDczH //
{
let currentNumber= +localStorage.getItem('number');
currentNumber +=1;
localStorage.setItem('number',currentNumber);
document.getElementById('numberdiv').innerText=currentNumber;
}
// task 10-5 #LhSfdhM3 //
{
 let sessionList=JSON.parse(localStorage.getItem('sessionsList')) || [];
 sessionList.push(new Date())
     localStorage.setItem('sessionsList',JSON.stringify(sessionList));
}
// task 10-6 #Jg0gPO00 //
{
let formConvertator=document.forms.weightConvert
    formConvertator.weight.addEventListener('input',()=>{
        const pounds=document.getElementById('pounds');
        pounds.innerText=+formConvertator.weight.value*2.2+'pounds'
    })
}
// task 10-7 #RbQGnH5DuC //
{let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
    localStorage.setItem('users',JSON.stringify(users))

   function addToLocalStorage(arrayName,objToAdd){

      let arrayJson= localStorage.getItem(arrayName);

      let array=JSON.parse(arrayJson);

      array.push(objToAdd)

   return localStorage.setItem(arrayName,JSON.stringify(array))
    }

    addToLocalStorage('users',{age:20})
}
// task 10-8 #kUSgFqWY //
{
    const table=document.getElementById('table');
    let formTable=document.forms.formTable
    formTable.addEventListener('submit',(ev)=>{
         ev.preventDefault()
        for(let item = 0;item<+formTable.trCount.value;item++) {
            const tr= document.createElement('tr')
            table.appendChild(tr);
            for(let i =0;i<+formTable.lineCount.value;i++) {
             const td= document.createElement('td')
             td.innerText=formTable.content.value;
            tr.appendChild(td)}
    }})
}
// task 10-9 #bq1zkx7WP //
{
   let hrivna=+localStorage.getItem('hrivna')
    hrivna+=10
    function fo(){localStorage.setItem('hrivna',hrivna)}
    let div=document.getElementById('hrochi');
    div.innerText=100+hrivna+'грн'
    setInterval(fo,10000)
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
         /*   let set =new Set
            set.add(Math.floor(Math.random()*1000))
            user.id=set*/
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
